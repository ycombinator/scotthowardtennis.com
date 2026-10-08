import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../site/assets/js/analytics.js', import.meta.url), 'utf8');
const testId = 'G-TEST123456';

function loadAnalytics(href, id = testId) {
  const listeners = {};
  const scripts = [];
  const window = { location: new URL(href) };
  const document = {
    referrer: 'https://example.com/from?email=private@example.com#private',
    createElement: () => ({}),
    head: { appendChild: (tag) => scripts.push(tag) },
    addEventListener: (name, listener) => { listeners[name] = listener; }
  };
  const code = id === null ? source : source.replace(/const measurementId = '[^']*';/, `const measurementId = '${id}';`);
  const run = () => runInNewContext(code, { window, document, URL });
  run();
  const events = () => JSON.parse(JSON.stringify(Array.from(window.dataLayer || [], (args) => [...args])));
  const click = (method, type = 'click', button = 0) => {
    listeners[type]?.({ type, button, target: { closest: () => method ? { dataset: { analyticsMethod: method } } : null } });
  };
  return { window, scripts, listeners, events, click, run };
}

test('the configured tag and events use the owner-supplied measurement ID', () => {
  const result = loadAnalytics('https://ycombinator.github.io/scotthowardtennis.com/', null);
  assert.equal(result.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-5LXQYH65JB');
  assert.equal(result.events().find(([command]) => command === 'config')[1], 'G-5LXQYH65JB');
});

test('local previews and missing/invalid IDs never load Google or register tracking', () => {
  for (const href of ['http://localhost:8000/', 'http://localhost.:8000/', 'http://preview.localhost/', 'http://127.0.0.1/', 'http://127.0.0.2/', 'http://[::1]/', 'file:///tmp/site/index.html']) {
    const result = loadAnalytics(href);
    assert.equal(result.scripts.length, 0, href);
    assert.equal(result.events().length, 0, href);
    assert.equal(Object.keys(result.listeners).length, 0, href);
  }
  for (const id of ['', 'not-a-measurement-id']) {
    assert.equal(loadAnalytics('https://ycombinator.github.io/scotthowardtennis.com/', id).scripts.length, 0);
  }
});

test('each page queues exactly one page view and retains the repository subpath', () => {
  for (const page of readdirSync(new URL('../site/', import.meta.url)).filter((name) => name.endsWith('.html'))) {
    const path = `/scotthowardtennis.com/${page}`;
    const result = loadAnalytics(`https://ycombinator.github.io${path}?email=private@example.com#private`);
    result.run();
    assert.equal(result.scripts.length, 1);
    assert.equal(result.scripts[0].src, `https://www.googletagmanager.com/gtag/js?id=${testId}`);
    assert.equal(result.scripts[0].async, true);
    const config = result.events().find(([command]) => command === 'config');
    assert.equal(config[1], testId);
    assert.equal(config[2].send_page_view, false);
    assert.equal(config[2].page_location, `https://ycombinator.github.io${path}`);
    assert.equal(config[2].page_referrer, 'https://example.com/from');
    assert.equal(result.events().filter(([command, name]) => command === 'event' && name === 'page_view').length, 1);
    assert.ok(!JSON.stringify(result.events()).includes('private'));
  }
});

test('contact and map events allow only methods, including middle clicks', () => {
  const result = loadAnalytics('https://ycombinator.github.io/scotthowardtennis.com/contact.html');
  for (const method of ['call', 'text', 'whatsapp', 'email']) result.click(method);
  result.click('google_maps', 'auxclick', 1);
  result.click('email', 'auxclick', 2);
  result.click('private@example.com');
  result.click(null);
  assert.deepEqual(result.events().filter(([command, name]) => command === 'event' && name !== 'page_view'), [
    ['event', 'contact_click', { contact_method: 'call' }],
    ['event', 'contact_click', { contact_method: 'text' }],
    ['event', 'contact_click', { contact_method: 'whatsapp' }],
    ['event', 'contact_click', { contact_method: 'email' }],
    ['event', 'map_click', { map_provider: 'google_maps' }]
  ]);
});

test('all five HTML pages include the shared script once and mark every supported link', () => {
  const pages = readdirSync(new URL('../site/', import.meta.url)).filter((name) => name.endsWith('.html'));
  assert.equal(pages.length, 5);
  const prefixes = [['tel:', 'call'], ['sms:', 'text'], ['mailto:', 'email'], ['https://wa.me/', 'whatsapp'], ['https://www.google.com/maps/', 'google_maps']];
  for (const page of pages) {
    const html = readFileSync(new URL(`../site/${page}`, import.meta.url), 'utf8');
    assert.equal(html.match(/<script src="assets\/js\/analytics.js" defer><\/script>/g)?.length, 1, page);
    assert.ok(existsSync(new URL('../site/assets/js/analytics.js', import.meta.url)));
    assert.ok(html.includes('<meta name="robots" content="noindex, nofollow">'), page);
    const found = new Set();
    for (const [tag, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)) {
      const method = prefixes.find(([prefix]) => href.startsWith(prefix))?.[1];
      if (method) {
        assert.ok(tag.includes(`data-analytics-method="${method}"`), `${page}: ${href}`);
        found.add(method);
      }
    }
    for (const method of ['call', 'text', 'whatsapp', 'email']) assert.ok(found.has(method), `${page}: ${method}`);
  }
});
