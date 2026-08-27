/* Shared page behaviors: checklists (persisted), FAQ accordion, newsletter form, water tracker, photo upload. */

/* ---- Persisted checklists (exercise / water / lifestyle daily checklist) ---- */
function initChecklists() {
  document.querySelectorAll('.checklist[data-storage-key]').forEach(list => {
    const key = 'checklist-' + list.getAttribute('data-storage-key');
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) {}
    list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      if (saved[cb.id]) cb.checked = true;
      cb.addEventListener('change', () => {
        saved[cb.id] = cb.checked;
        try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {}
      });
    });
  });
}

/* ---- FAQ accordion ---- */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  });
}

/* ---- Newsletter signup (client-side only; wire to a real email service backend later) ---- */
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      const msg = form.parentElement.querySelector('.form-msg');
      if (!email) return;
      try {
        const list = JSON.parse(localStorage.getItem('newsletter-signups') || '[]');
        list.push({ email, date: new Date().toISOString() });
        localStorage.setItem('newsletter-signups', JSON.stringify(list));
      } catch (err) {}
      if (msg) {
        msg.classList.add('is-visible');
        msg.querySelectorAll('[data-lang]').forEach(el => {
          el.textContent = el.getAttribute('data-lang') === 'ug' ? '✓ مۇۋەپپەقىيەتلىك قوشۇلدىڭىز!' : "✓ You're subscribed!";
        });
      }
      form.reset();
    });
  });
}

/* ---- Water tracker (click glasses to fill; persisted per day) ---- */
function initWaterTracker() {
  const tracker = document.getElementById('waterTracker');
  if (!tracker) return;
  const glasses = Array.from(tracker.querySelectorAll('.water-glass'));
  const countEl = document.getElementById('waterCount');
  const todayKey = 'water-' + new Date().toISOString().slice(0, 10);
  let filled = 0;
  try { filled = parseInt(localStorage.getItem(todayKey) || '0', 10); } catch (e) {}

  function render() {
    glasses.forEach((g, i) => g.classList.toggle('is-full', i < filled));
    if (countEl) countEl.textContent = filled + ' / ' + glasses.length;
  }
  glasses.forEach((g, i) => {
    g.addEventListener('click', () => {
      filled = (filled === i + 1) ? i : i + 1;
      try { localStorage.setItem(todayKey, String(filled)); } catch (e) {}
      render();
    });
  });
  render();
}

/* ---- Before/after photo upload preview (stored locally in-browser only) ---- */
function initPhotoUpload() {
  document.querySelectorAll('.photo-slot').forEach(slot => {
    const input = slot.querySelector('input[type="file"]');
    if (!input) return;
    const key = 'photo-' + slot.getAttribute('data-slot');
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const img = document.createElement('img');
        img.src = saved;
        slot.appendChild(img);
      }
    } catch (e) {}
    slot.addEventListener('click', () => input.click());
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        slot.querySelectorAll('img').forEach(i => i.remove());
        const img = document.createElement('img');
        img.src = reader.result;
        slot.appendChild(img);
        try { localStorage.setItem(key, reader.result); } catch (e) {}
      };
      reader.readAsDataURL(file);
    });
  });
}

/* ---- PDF export via print stylesheet ---- */
function initPdfButtons() {
  document.querySelectorAll('[data-print]').forEach(btn => {
    btn.addEventListener('click', () => window.print());
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initChecklists();
  initFaq();
  initNewsletter();
  initWaterTracker();
  initPhotoUpload();
  initPdfButtons();
});
