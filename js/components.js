/* Injects shared header & footer into every page (#site-header / #site-footer). */
const NAV_LINKS = [
  { href: 'index.html', en: 'Home', ug: 'باش بەت' },
  { href: 'nutrition.html', en: 'Nutrition', ug: 'ئوزۇقلىنىش' },
  { href: 'fruits-vegetables.html', en: 'Fruits & Veg', ug: 'مېۋە-كۆكتات' },
  { href: 'exercise.html', en: 'Exercise', ug: 'چېنىقىش' },
  { href: 'meal-plan.html', en: 'Meal Plan', ug: 'تاماق پىلانى' },
  { href: 'water.html', en: 'Water', ug: 'سۇ' },
  { href: 'lifestyle.html', en: 'Lifestyle', ug: 'تۇرمۇش ئادىتى' },
];

const MORE_LINKS = [
  { href: 'bmi-calculator.html', en: 'BMI Calculator', ug: 'BMI ھېسابلىغۇچ' },
  { href: 'calorie-calculator.html', en: 'Calorie Calculator', ug: 'كالورىيە ھېسابلىغۇچ' },
  { href: 'recipes.html', en: 'Recipes', ug: 'تەم تارتىش ئۇسۇللىرى' },
  { href: 'faq.html', en: 'FAQ', ug: 'كۆپ سورالغان سوئاللار' },
  { href: 'contact.html', en: 'Contact', ug: 'ئالاقىلىشىش' },
  { href: 'disclaimer.html', en: 'Disclaimer', ug: 'ئۇقتۇرۇش' },
];

function currentPage() {
  const p = location.pathname.split('/').pop();
  return p === '' ? 'index.html' : p;
}

function buildHeader() {
  const cur = currentPage();
  const navHtml = NAV_LINKS.map(l => `<a href="${l.href}" class="${l.href === cur ? 'is-active' : ''}">
      <span data-lang="en" class="is-active">${l.en}</span><span data-lang="ug" class="ug-text" lang="ug">${l.ug}</span>
    </a>`).join('');
  const moreHtml = MORE_LINKS.map(l => `<a href="${l.href}">
      <span data-lang="en" class="is-active">${l.en}</span><span data-lang="ug" class="ug-text" lang="ug">${l.ug}</span>
    </a>`).join('');
  const moreActive = MORE_LINKS.some(l => l.href === cur);

  return `
  <div class="container site-header__inner">
    <a href="index.html" class="site-logo">
      <span class="site-logo__mark" data-icon="logo"></span>
      <span>
        <span data-lang="en" class="is-active">Healthy 30 Days</span>
        <span data-lang="ug" class="ug-text" lang="ug">ساغلام 30 كۈن</span>
      </span>
    </a>
    <nav class="site-nav__links" id="siteNavLinks">
      ${navHtml}
      <div class="nav-more" id="navMore">
        <button type="button" id="navMoreBtn" class="${moreActive ? 'is-active' : ''}">
          <span data-lang="en" class="is-active">More</span><span data-lang="ug" class="ug-text" lang="ug">تېخىمۇ كۆپ</span> ▾
        </button>
        <div class="nav-more__panel">${moreHtml}</div>
      </div>
    </nav>
    <div class="header-actions">
      <div class="lang-toggle" id="langToggle">
        <button type="button" data-set-lang="en">EN</button>
        <button type="button" data-set-lang="ug">UG</button>
      </div>
      <button type="button" class="nav-toggle-btn" id="navToggleBtn" aria-label="Menu">☰</button>
    </div>
  </div>`;
}

function buildFooter() {
  return `
  <div class="container">
    <div class="footer__cols">
      <div>
        <a href="index.html" class="site-logo" style="color:#fff;margin-bottom:12px;">
          <span class="site-logo__mark" data-icon="logo"></span>
          <span data-lang="en" class="is-active">Healthy 30 Days</span>
          <span data-lang="ug" class="ug-text" lang="ug">ساغلام 30 كۈن</span>
        </a>
        <p data-lang="en" class="is-active">A safe, balanced 30-day program to help women build healthier habits — no extreme dieting.</p>
        <p data-lang="ug" class="ug-text" lang="ug">ئاياللار ئۈچۈن بىخەتەر ھەم ئۇيغۇن 30 كۈنلۈك پىروگرامما — ھېچقانداق ئېشىنچە پەرھىز يوق.</p>
      </div>
      <div>
        <h4 data-lang="en" class="is-active">Program</h4>
        <h4 data-lang="ug" class="ug-text" lang="ug">پىروگرامما</h4>
        <a href="nutrition.html"><span data-lang="en" class="is-active">Nutrition Guide</span><span data-lang="ug" class="ug-text" lang="ug">ئوزۇقلىنىش يېتەكچىسى</span></a>
        <a href="meal-plan.html"><span data-lang="en" class="is-active">30-Day Meal Plan</span><span data-lang="ug" class="ug-text" lang="ug">30 كۈنلۈك تاماق پىلانى</span></a>
        <a href="exercise.html"><span data-lang="en" class="is-active">Exercise Plan</span><span data-lang="ug" class="ug-text" lang="ug">چېنىقىش پىلانى</span></a>
        <a href="motivation.html"><span data-lang="en" class="is-active">Progress Tracking</span><span data-lang="ug" class="ug-text" lang="ug">ئىلگىرىلەشنى ئىز قوغلاش</span></a>
      </div>
      <div>
        <h4 data-lang="en" class="is-active">Tools</h4>
        <h4 data-lang="ug" class="ug-text" lang="ug">قوراللار</h4>
        <a href="bmi-calculator.html"><span data-lang="en" class="is-active">BMI Calculator</span><span data-lang="ug" class="ug-text" lang="ug">BMI ھېسابلىغۇچ</span></a>
        <a href="calorie-calculator.html"><span data-lang="en" class="is-active">Calorie Calculator</span><span data-lang="ug" class="ug-text" lang="ug">كالورىيە ھېسابلىغۇچ</span></a>
        <a href="recipes.html"><span data-lang="en" class="is-active">Recipes</span><span data-lang="ug" class="ug-text" lang="ug">تەم تارتىش ئۇسۇللىرى</span></a>
        <a href="faq.html"><span data-lang="en" class="is-active">FAQ</span><span data-lang="ug" class="ug-text" lang="ug">كۆپ سورالغان سوئاللار</span></a>
      </div>
      <div>
        <h4 data-lang="en" class="is-active">Support</h4>
        <h4 data-lang="ug" class="ug-text" lang="ug">قوللاش</h4>
        <a href="contact.html"><span data-lang="en" class="is-active">Contact Us</span><span data-lang="ug" class="ug-text" lang="ug">بىز بىلەن ئالاقىلىشىڭ</span></a>
        <a href="disclaimer.html"><span data-lang="en" class="is-active">Health Disclaimer</span><span data-lang="ug" class="ug-text" lang="ug">ساغلاملىق ئۇقتۇرۇشى</span></a>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="mt-0" data-lang="en" class="is-active">© 2026 Healthy 30 Days. For educational purposes only — not a substitute for medical advice.</p>
      <p class="mt-0" data-lang="ug" class="ug-text" lang="ug">© 2026 ساغلام 30 كۈن. پەقەت مەلۇمات ئۈچۈن — دوختۇرلۇق مەسلىھىتىنىڭ ئورنىنى باسالمايدۇ.</p>
    </div>
  </div>`;
}

function buildChatbot() {
  return `
  <button type="button" class="chatbot-fab" id="chatbotFab" aria-label="Ask a Coach">
    <span data-icon="chat"></span>
  </button>
  <div class="chatbot-panel" id="chatbotPanel">
    <div class="chatbot-panel__head">
      <span data-lang="en" class="is-active">🥗 Ask a Coach</span>
      <span data-lang="ug" class="ug-text" lang="ug">🥗 مۇرەببىيدىن سوراڭ</span>
    </div>
    <div class="chatbot-panel__body" id="chatbotBody"></div>
    <div class="chatbot-panel__quick" id="chatbotQuick"></div>
  </div>`;
}

function injectComponents() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) { header.innerHTML = buildHeader(); if (typeof renderIcons === 'function') renderIcons(header); }
  if (footer) { footer.innerHTML = buildFooter(); if (typeof renderIcons === 'function') renderIcons(footer); }

  const chatbotHost = document.createElement('div');
  chatbotHost.id = 'chatbot-root';
  chatbotHost.innerHTML = buildChatbot();
  document.body.appendChild(chatbotHost);
  if (typeof renderIcons === 'function') renderIcons(chatbotHost);

  const navToggleBtn = document.getElementById('navToggleBtn');
  const navLinks = document.getElementById('siteNavLinks');
  if (navToggleBtn) navToggleBtn.addEventListener('click', () => navLinks.classList.toggle('is-open'));

  const navMore = document.getElementById('navMore');
  const navMoreBtn = document.getElementById('navMoreBtn');
  if (navMoreBtn) navMoreBtn.addEventListener('click', (e) => { e.stopPropagation(); navMore.classList.toggle('is-open'); });
  document.addEventListener('click', () => navMore && navMore.classList.remove('is-open'));
}

document.addEventListener('DOMContentLoaded', injectComponents);
