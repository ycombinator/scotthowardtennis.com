(() => {
  // The owner's public GA4 Web stream ID. Blank keeps tracking disabled.
  // See docs/google-analytics-setup.md before enabling collection.
  const measurementId = 'G-5LXQYH65JB';
  const hostname = window.location.hostname.toLowerCase().replace(/\.$/, '');
  const localPreview = hostname === 'localhost' || hostname.endsWith('.localhost') ||
    hostname === '::1' || hostname === '[::1]' || /^127\./.test(hostname);
  if (window.location.protocol !== 'https:' && window.location.protocol !== 'http:') return;
  if (localPreview || !/^G-[A-Z0-9]+$/.test(measurementId) || window.scottAnalyticsLoaded) return;
  window.scottAnalyticsLoaded = true;

  // Queries and fragments can contain personal information; keep only origin/path.
  const cleanUrl = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.origin + url.pathname : '';
    } catch {
      return '';
    }
  };

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
    page_location: cleanUrl(window.location.href),
    page_referrer: cleanUrl(document.referrer)
  });
  window.gtag('event', 'page_view');

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(tag);

  // The allowlist prevents link URLs, labels, and inquiry contents entering events.
  const contactMethods = ['call', 'text', 'whatsapp', 'email'];
  const trackClick = (event) => {
    if (event.type === 'auxclick' && event.button !== 1) return;
    const link = event.target.closest?.('a[data-analytics-method]');
    if (!link) return;
    const method = link.dataset.analyticsMethod;
    if (contactMethods.includes(method)) {
      window.gtag('event', 'contact_click', { contact_method: method });
    } else if (method === 'google_maps') {
      window.gtag('event', 'map_click', { map_provider: 'google_maps' });
    }
  };
  document.addEventListener('click', trackClick);
  document.addEventListener('auxclick', trackClick);
})();
