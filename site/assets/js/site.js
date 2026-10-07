// The HTML navigation also works without JavaScript.
const menu = document.querySelector('.mobile-menu');
if (menu) {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => { menu.open = false; });
  });
}

// Keep fragment targets clear of the sticky header, including when its height changes.
const header = document.querySelector('.site-header');
if (header && typeof ResizeObserver !== 'undefined') {
  const headerObserver = new ResizeObserver(() => {
    document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  });
  headerObserver.observe(header);
}

// Resize the embedded inquiry form, including its thank-you screen.
window.Tally?.loadEmbeds();

// Keep page loads lightweight: create a YouTube player only on request.
document.querySelectorAll('.video-launch').forEach((link) => {
  const section = link.closest('.video-feature');
  const frame = link.parentElement;

  // Removing the iframe stops playback; reuse the original thumbnail and listener.
  document.addEventListener('click', (event) => {
    if (section.classList.contains('is-playing') && !event.composedPath().includes(section)) {
      frame.replaceChildren(link);
      section.classList.remove('is-playing');
    }
  });

  link.addEventListener('click', (event) => {
    // Preserve opening the normal YouTube link in another tab or window.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${link.dataset.videoId}?autoplay=1&playsinline=1`;
    iframe.title = link.dataset.videoTitle;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    section.classList.add('is-playing');
    frame.replaceChildren(iframe);
    iframe.focus();
  });
});

// Load all frames before starting; leave a static photo if loading fails.
document.querySelectorAll('[data-photo-sequence]').forEach((sequence) => {
  const frames = Array.from(sequence.querySelectorAll('.image-window img')).sort((a, b) => {
    const filename = (frame) => frame.getAttribute('src').split('/').pop();
    return filename(a).localeCompare(filename(b), 'en', { numeric: true });
  });
  frames.forEach((frame, index) => frame.classList.toggle('is-active', index === 0));
  const toggle = sequence.querySelector('.sequence-toggle');
  const progressRing = toggle.querySelector('.sequence-ring-fill');
  const frameDuration = 3000;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = reducedMotion.matches;
  let animationFrame;
  let frameStarted;

  // One clock drives both the clockwise ring and the next photo.
  const advancePlayback = (now) => {
    const progress = Math.min((now - frameStarted) / frameDuration, 1);
    progressRing.setAttribute('stroke-dashoffset', String(100 * (1 - progress)));
    if (progress === 1) {
      frames[current].classList.remove('is-active');
      current = (current + 1) % frames.length;
      frames[current].classList.add('is-active');
      frameStarted = now;
      progressRing.setAttribute('stroke-dashoffset', '100');
    }
    animationFrame = requestAnimationFrame(advancePlayback);
  };

  const updatePlayback = () => {
    cancelAnimationFrame(animationFrame);
    progressRing.setAttribute('stroke-dashoffset', '100');
    toggle.classList.toggle('is-paused', paused);
    toggle.setAttribute('aria-label', paused ? 'Play photo sequence' : 'Pause photo sequence');
    if (!paused && !document.hidden) {
      frameStarted = performance.now();
      animationFrame = requestAnimationFrame(advancePlayback);
    }
  };

  Promise.all(frames.map((frame) => frame.decode())).then(() => {
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      paused = !paused;
      updatePlayback();
    });
    reducedMotion.addEventListener('change', () => {
      paused = reducedMotion.matches;
      updatePlayback();
    });
    document.addEventListener('visibilitychange', updatePlayback);
    updatePlayback();
  }).catch(() => {
    // The first frame remains visible without an incomplete animation.
  });
});
