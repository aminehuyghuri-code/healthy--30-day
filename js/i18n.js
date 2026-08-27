/* Bilingual toggle: shows/hides [data-lang="en"|"ug"] elements and flips text direction. */
function setLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('is-active', el.getAttribute('data-lang') === lang);
  });
  document.body.setAttribute('dir', lang === 'ug' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang === 'ug' ? 'ug' : 'en');
  document.querySelectorAll('#langToggle button, [data-lang-toggle] button').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-set-lang') === lang);
  });
  try { localStorage.setItem('site-lang', lang); } catch (e) {}
}

function initLanguage() {
  let lang = 'en';
  try { lang = localStorage.getItem('site-lang') || 'en'; } catch (e) {}
  setLanguage(lang);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-set-lang]');
    if (btn) setLanguage(btn.getAttribute('data-set-lang'));
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);
