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

// Review notes are visible by default, including when JavaScript is unavailable.
const editorialToggle = document.querySelector('.editorial-toggle');
const editorialStorageKey = 'scott-howard-tennis.editorial-notes';

if (editorialToggle) {
  const setEditorialNotes = (show) => {
    document.documentElement.toggleAttribute('data-editorial-notes-hidden', !show);
    editorialToggle.setAttribute('aria-pressed', String(show));
  };

  try {
    setEditorialNotes(localStorage.getItem(editorialStorageKey) !== 'hidden');
  } catch {
    // The toggle still works when browser storage is unavailable.
    setEditorialNotes(true);
  }
  editorialToggle.hidden = false;

  editorialToggle.addEventListener('click', () => {
    const show = editorialToggle.getAttribute('aria-pressed') !== 'true';
    setEditorialNotes(show);
    try {
      localStorage.setItem(editorialStorageKey, show ? 'shown' : 'hidden');
    } catch {
      // Keep the current page usable even if the preference cannot be saved.
    }
  });
}

// Account for the status bar's wrapped height when scrolling to page sections.
const editorialBar = document.querySelector('.preview-banner');
if (editorialBar && typeof ResizeObserver !== 'undefined') {
  const observer = new ResizeObserver(() => {
    document.documentElement.style.setProperty(
      '--editorial-bar-height', `${editorialBar.getBoundingClientRect().height}px`
    );
  });
  observer.observe(editorialBar);
}

// The sketch allows typing without sending an inquiry.
document.querySelectorAll('[data-preview-form]').forEach((form) => {
  form.addEventListener('submit', (event) => event.preventDefault());
});

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
