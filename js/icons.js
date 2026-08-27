/* Shared SVG icon library — fruit, vegetable & food illustrations only.
   No human figures or human icons anywhere in this set. */
const ICONS = {
  logo: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="#f9dde3"/><path d="M50 30c-12-14-34-8-34 10 0 16 20 30 34 38 14-8 34-22 34-38 0-18-22-24-34-10z" fill="#e07d92"/><path d="M50 30c0-10 6-16 14-18" stroke="#4d6e3b" stroke-width="4" stroke-linecap="round"/><ellipse cx="66" cy="14" rx="10" ry="6" fill="#7fa668" transform="rotate(30 66 14)"/></svg>`,

  apple: `<svg viewBox="0 0 100 100"><path d="M50 34c-4-8-14-12-22-8-10 5-14 18-10 30 4 13 16 30 32 30s28-17 32-30c4-12 0-25-10-30-8-4-18 0-22 8z" fill="#cf5f78"/><path d="M50 34c-1-8 2-16 8-20" stroke="#628a4c" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="60" cy="12" rx="10" ry="6" fill="#7fa668" transform="rotate(35 60 12)"/></svg>`,

  banana: `<svg viewBox="0 0 100 100"><path d="M22 70c0 14 14 22 30 20 22-3 34-20 36-38-6 10-18 20-32 22-14 2-24-2-28-10-2 8-4 4-6 6z" fill="#e8bd68"/><path d="M22 70c-4-18 4-40 20-52" stroke="#c99936" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,

  berries: `<svg viewBox="0 0 100 100"><circle cx="36" cy="50" r="20" fill="#b04862"/><circle cx="62" cy="60" r="16" fill="#cf5f78"/><circle cx="52" cy="34" r="13" fill="#e07d92"/><path d="M40 24c4-8 12-10 18-6" stroke="#628a4c" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,

  grapes: `<svg viewBox="0 0 100 100"><g fill="#8a5fa6"><circle cx="40" cy="40" r="10"/><circle cx="58" cy="40" r="10"/><circle cx="32" cy="56" r="10"/><circle cx="50" cy="56" r="10"/><circle cx="68" cy="56" r="10"/><circle cx="41" cy="72" r="10"/><circle cx="59" cy="72" r="10"/></g><path d="M49 30c0-10 6-16 14-18" stroke="#628a4c" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="64" cy="12" rx="9" ry="5" fill="#7fa668" transform="rotate(30 64 12)"/></svg>`,

  kiwi: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="34" fill="#a9c96b"/><circle cx="50" cy="50" r="24" fill="#dff0c0"/><circle cx="50" cy="50" r="6" fill="#fdf8f2"/><g fill="#3a2c30"><circle cx="50" cy="34" r="2"/><circle cx="50" cy="66" r="2"/><circle cx="34" cy="50" r="2"/><circle cx="66" cy="50" r="2"/><circle cx="39" cy="39" r="2"/><circle cx="61" cy="39" r="2"/><circle cx="39" cy="61" r="2"/><circle cx="61" cy="61" r="2"/></g></svg>`,

  grapefruit: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="34" fill="#e8879c"/><circle cx="50" cy="50" r="26" fill="#f6b3a0"/><g stroke="#e8879c" stroke-width="2"><path d="M50 24v52"/><path d="M24 50h52"/><path d="M32 32l36 36"/><path d="M68 32l-36 36"/></g></svg>`,

  mango: `<svg viewBox="0 0 100 100"><path d="M30 40c-4 16 2 36 22 40 18 4 32-10 34-28 2-16-8-30-22-32-4 10-4 14-14 12-8-2-16 0-20 8z" fill="#e8bd68"/><path d="M46 20c6-4 12-2 14 4" stroke="#628a4c" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,

  spinach: `<svg viewBox="0 0 100 100"><path d="M50 85V45" stroke="#4d6e3b" stroke-width="4" stroke-linecap="round"/><path d="M50 55c-16-2-28-16-26-34 18 0 30 12 26 34z" fill="#628a4c"/><path d="M50 45c16-4 26-18 22-36-18 2-28 16-22 36z" fill="#7fa668"/><path d="M50 65c-14 2-24 16-20 32 16-2 24-16 20-32z" fill="#8fae86"/></svg>`,

  broccoli: `<svg viewBox="0 0 100 100"><rect x="45" y="60" width="10" height="28" rx="4" fill="#e8bd68"/><g fill="#4d6e3b"><circle cx="50" cy="40" r="22"/><circle cx="30" cy="52" r="14"/><circle cx="70" cy="52" r="14"/><circle cx="40" cy="60" r="12"/><circle cx="60" cy="60" r="12"/></g></svg>`,

  cucumber: `<svg viewBox="0 0 100 100"><rect x="14" y="42" width="72" height="20" rx="10" fill="#7fa668" transform="rotate(-8 50 50)"/><rect x="20" y="46" width="60" height="10" rx="5" fill="#dff0c0" transform="rotate(-8 50 50)"/></svg>`,

  lettuce: `<svg viewBox="0 0 100 100"><g fill="#a9c96b"><path d="M50 50c-20-6-34 4-38 20 16 8 32 2 38-20z"/><path d="M50 50c20-6 34 4 38 20-16 8-32 2-38-20z"/><path d="M50 50c-6-20 2-36 18-42 8 18 0 34-18 42z"/><path d="M50 50c6-20-2-36-18-42-8 18 0 34 18 42z"/></g><circle cx="50" cy="52" r="10" fill="#dff0c0"/></svg>`,

  cabbage: `<svg viewBox="0 0 100 100"><circle cx="50" cy="54" r="30" fill="#c7dba0"/><circle cx="50" cy="54" r="20" fill="#a9c96b"/><circle cx="50" cy="54" r="10" fill="#dff0c0"/><path d="M50 24c-10 4-16 12-14 20" stroke="#7fa668" stroke-width="3" fill="none"/></svg>`,

  tomato: `<svg viewBox="0 0 100 100"><circle cx="50" cy="56" r="30" fill="#cf5f78"/><path d="M50 26c-6-8-18-8-20 0 8-2 12 0 20 4 8-4 12-6 20-4-2-8-14-8-20 0z" fill="#628a4c"/></svg>`,

  potato: `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="54" rx="32" ry="24" fill="#d8b27a"/><g fill="#b8905a"><circle cx="36" cy="48" r="2.5"/><circle cx="60" cy="44" r="2.5"/><circle cx="66" cy="62" r="2.5"/><circle cx="42" cy="66" r="2.5"/></g></svg>`,

  corn: `<svg viewBox="0 0 100 100"><rect x="38" y="16" width="24" height="70" rx="12" fill="#f0d264"/><g fill="#e0b93a"><circle cx="45" cy="28" r="3"/><circle cx="55" cy="28" r="3"/><circle cx="45" cy="38" r="3"/><circle cx="55" cy="38" r="3"/><circle cx="45" cy="48" r="3"/><circle cx="55" cy="48" r="3"/><circle cx="45" cy="58" r="3"/><circle cx="55" cy="58" r="3"/><circle cx="45" cy="68" r="3"/><circle cx="55" cy="68" r="3"/></g><path d="M38 20c-8-2-14 2-16 10 8 2 14-2 16-10z" fill="#7fa668"/><path d="M62 20c8-2 14 2 16 10-8 2-14-2-16-10z" fill="#7fa668"/></svg>`,

  peas: `<svg viewBox="0 0 100 100"><path d="M20 50c0-16 60-16 60 0s-60 16-60 0z" fill="#a9c96b"/><g fill="#7fa668"><circle cx="32" cy="50" r="9"/><circle cx="50" cy="50" r="9"/><circle cx="68" cy="50" r="9"/></g></svg>`,

  avocado: `<svg viewBox="0 0 100 100"><path d="M50 14c16 4 26 22 26 42 0 18-12 32-26 32s-26-14-26-32c0-20 10-38 26-42z" fill="#628a4c"/><path d="M50 24c12 4 19 18 19 32 0 14-9 24-19 24s-19-10-19-24c0-14 7-28 19-32z" fill="#a9c96b"/><circle cx="50" cy="58" r="12" fill="#8a5a3a"/></svg>`,

  grain: `<svg viewBox="0 0 100 100"><path d="M50 12v76" stroke="#c99936" stroke-width="4" stroke-linecap="round"/><g fill="#e8bd68"><ellipse cx="42" cy="24" rx="7" ry="11" transform="rotate(-30 42 24)"/><ellipse cx="58" cy="24" rx="7" ry="11" transform="rotate(30 58 24)"/><ellipse cx="42" cy="40" rx="7" ry="11" transform="rotate(-30 42 40)"/><ellipse cx="58" cy="40" rx="7" ry="11" transform="rotate(30 58 40)"/><ellipse cx="42" cy="56" rx="7" ry="11" transform="rotate(-30 42 56)"/><ellipse cx="58" cy="56" rx="7" ry="11" transform="rotate(30 58 56)"/></g></svg>`,

  oliveOil: `<svg viewBox="0 0 100 100"><rect x="38" y="30" width="24" height="52" rx="6" fill="#a9c96b"/><rect x="44" y="14" width="12" height="18" rx="3" fill="#7fa668"/><rect x="41" y="8" width="18" height="8" rx="2" fill="#4d6e3b"/><ellipse cx="50" cy="56" rx="7" ry="10" fill="#dff0c0"/></svg>`,

  nuts: `<svg viewBox="0 0 100 100"><ellipse cx="38" cy="55" rx="16" ry="20" fill="#c99936"/><ellipse cx="65" cy="48" rx="14" ry="18" fill="#e8bd68"/><path d="M38 35c0-6 4-10 8-10" stroke="#8a5a3a" stroke-width="3" fill="none"/></svg>`,

  fish: `<svg viewBox="0 0 100 100"><path d="M18 50c14-16 42-16 56 0-14 16-42 16-56 0z" fill="#7fa9c9"/><path d="M74 50l14-12v24z" fill="#5f8cae"/><circle cx="34" cy="46" r="3" fill="#fff"/></svg>`,

  egg: `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="56" rx="26" ry="32" fill="#fdf3de"/><circle cx="50" cy="56" r="14" fill="#e8bd68"/></svg>`,

  lentil: `<svg viewBox="0 0 100 100"><path d="M14 58c0-14 16-14 36-14s36 0 36 14-16 20-36 20-36-6-36-20z" fill="#d8925a"/><g fill="#b8703a"><circle cx="36" cy="54" r="4"/><circle cx="50" cy="60" r="4"/><circle cx="64" cy="52" r="4"/><circle cx="44" cy="46" r="4"/></g></svg>`,

  water: `<svg viewBox="0 0 100 100"><path d="M50 14c14 22 26 38 26 54a26 26 0 1 1-52 0c0-16 12-32 26-54z" fill="#7fa9c9"/><path d="M34 62a14 14 0 0 0 12 14" stroke="#e6f1f8" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,

  glass: `<svg viewBox="0 0 100 100"><path d="M30 18h40l-6 64a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6z" fill="none" stroke="#5f8cae" stroke-width="4"/><path d="M28 44h44l-4 38a6 6 0 0 1-6 6H38a6 6 0 0 1-6-6z" fill="#a9cbe4"/></svg>`,

  tea: `<svg viewBox="0 0 100 100"><path d="M18 40h54v20a27 27 0 0 1-27 27 27 27 0 0 1-27-27z" fill="#c99936"/><path d="M72 44c14-2 20 16 4 22" stroke="#8a5a3a" stroke-width="4" fill="none"/><path d="M32 20c4 6-4 8 0 14M48 20c4 6-4 8 0 14" stroke="#7fa668" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,

  check: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#dfe9d7"/><path d="M30 52l14 14 26-30" stroke="#4d6e3b" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  cross: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#f9dde3"/><path d="M34 34l32 32M66 34l-32 32" stroke="#b04862" stroke-width="8" stroke-linecap="round"/></svg>`,

  steps: `<svg viewBox="0 0 100 100"><path d="M20 80c30-40 30 20 60-20" stroke="#c99936" stroke-width="4" stroke-dasharray="2 10" fill="none" stroke-linecap="round"/><ellipse cx="24" cy="78" rx="8" ry="12" fill="#e8bd68" transform="rotate(-15 24 78)"/><ellipse cx="76" cy="62" rx="8" ry="12" fill="#e8bd68" transform="rotate(15 76 62)"/></svg>`,

  cardio: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#f9dde3"/><path d="M14 52h16l8-18 12 32 10-24 6 10h20" stroke="#cf5f78" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  stretch: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#eef3ea"/><path d="M50 20c16 6 22 20 16 34-6 14-22 18-30 8-6-8-2-20 8-22 8-2 14 4 12 10" stroke="#628a4c" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,

  breathing: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="none" stroke="#7fa9c9" stroke-width="4" stroke-dasharray="4 8"/><circle cx="50" cy="50" r="14" fill="#a9cbe4"/></svg>`,

  dumbbell: `<svg viewBox="0 0 100 100"><rect x="10" y="42" width="14" height="16" rx="3" fill="#8a5a3a"/><rect x="76" y="42" width="14" height="16" rx="3" fill="#8a5a3a"/><rect x="24" y="46" width="52" height="8" rx="4" fill="#c99936"/><rect x="4" y="38" width="8" height="24" rx="2" fill="#4d3628"/><rect x="88" y="38" width="8" height="24" rx="2" fill="#4d3628"/></svg>`,

  lotus: `<svg viewBox="0 0 100 100"><g fill="#e8879c"><ellipse cx="50" cy="60" rx="10" ry="20" transform="rotate(0 50 60)"/><ellipse cx="50" cy="60" rx="10" ry="20" transform="rotate(45 50 60)"/><ellipse cx="50" cy="60" rx="10" ry="20" transform="rotate(-45 50 60)"/><ellipse cx="50" cy="60" rx="10" ry="20" transform="rotate(90 50 60)"/></g><circle cx="50" cy="60" r="8" fill="#e8bd68"/></svg>`,

  moon: `<svg viewBox="0 0 100 100"><path d="M64 18a34 34 0 1 0 18 46 26 26 0 0 1-18-46z" fill="#c99966"/><circle cx="30" cy="30" r="2" fill="#e8bd68"/><circle cx="24" cy="46" r="1.5" fill="#e8bd68"/></svg>`,

  calendarIcon: `<svg viewBox="0 0 100 100"><rect x="14" y="20" width="72" height="66" rx="8" fill="#fff" stroke="#cf5f78" stroke-width="4"/><rect x="14" y="20" width="72" height="18" rx="6" fill="#cf5f78"/><g fill="#cf5f78"><rect x="28" y="10" width="6" height="16" rx="3"/><rect x="66" y="10" width="6" height="16" rx="3"/></g></svg>`,

  chart: `<svg viewBox="0 0 100 100"><path d="M14 86V14M14 86h72" stroke="#3a2c30" stroke-width="4" stroke-linecap="round"/><rect x="24" y="56" width="12" height="30" fill="#f0aebb"/><rect x="44" y="40" width="12" height="46" fill="#e07d92"/><rect x="64" y="24" width="12" height="62" fill="#cf5f78"/></svg>`,

  chat: `<svg viewBox="0 0 100 100"><path d="M14 24h72v44H46l-20 16v-16H14z" fill="#fff"/><g fill="#cf5f78"><circle cx="34" cy="46" r="4"/><circle cx="50" cy="46" r="4"/><circle cx="66" cy="46" r="4"/></g></svg>`,

  sugar: `<svg viewBox="0 0 100 100"><rect x="26" y="30" width="48" height="40" fill="#f2e7d0" stroke="#c99936" stroke-width="3"/><path d="M26 30l24 20 24-20" fill="none" stroke="#c99936" stroke-width="3"/></svg>`,

  bread: `<svg viewBox="0 0 100 100"><path d="M16 56c0-24 18-38 34-38s34 14 34 38v14a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6z" fill="#f0d9a8" stroke="#c99936" stroke-width="3"/></svg>`,

  fried: `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="58" rx="36" ry="18" fill="#e8bd68"/><ellipse cx="50" cy="52" rx="36" ry="18" fill="#f0d9a8"/><path d="M30 30c-4-6 0-12 6-12M50 26c-4-6 0-12 6-12M68 30c-4-6 0-12 6-12" stroke="#c99936" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,

  snack: `<svg viewBox="0 0 100 100"><path d="M22 30h56l-6 50a8 8 0 0 1-8 7H36a8 8 0 0 1-8-7z" fill="#f0aebb"/><path d="M22 30l6-14h44l6 14" fill="none" stroke="#cf5f78" stroke-width="4"/></svg>`,

  soda: `<svg viewBox="0 0 100 100"><path d="M32 20h36l-4 62a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6z" fill="#a9cbe4"/><rect x="30" y="14" width="40" height="10" rx="3" fill="#5f8cae"/></svg>`,

  plateMethod: `<svg viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="92" fill="#fff" stroke="#ecdfe1" stroke-width="4"/>
    <g transform="rotate(-90 100 100)">
      <circle cx="100" cy="100" r="70" fill="none" stroke="#a9c96b" stroke-width="140" stroke-dasharray="219.9 219.9" stroke-dashoffset="0"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#e8bd68" stroke-width="140" stroke-dasharray="109.95 329.85" stroke-dashoffset="-219.9"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#e8879c" stroke-width="140" stroke-dasharray="109.95 329.85" stroke-dashoffset="-329.85"/>
    </g>
    <circle cx="100" cy="100" r="20" fill="#fdf8f2"/>
  </svg>`,

  leafDivider: `<svg viewBox="0 0 100 20"><path d="M0 10c20-10 30 10 50 0s30-10 50 0" stroke="#b3cba1" stroke-width="2" fill="none"/></svg>`,
};

function renderIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}
document.addEventListener('DOMContentLoaded', () => renderIcons());
