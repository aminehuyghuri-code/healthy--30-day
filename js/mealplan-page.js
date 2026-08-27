/* Renders the 30-day clickable calendar + meal detail panel on meal-plan.html */
function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  if (!grid) return;
  let doneMap = {};
  try { doneMap = JSON.parse(localStorage.getItem('mealplan-done') || '{}'); } catch (e) {}

  for (let d = 1; d <= 30; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day' + (doneMap[d] ? ' is-done' : '');
    cell.textContent = d;
    cell.dataset.day = d;
    cell.addEventListener('click', () => showDay(d));
    grid.appendChild(cell);
  }
  showDay(1);
}

function showDay(day) {
  document.querySelectorAll('.cal-day').forEach(c => c.classList.toggle('is-active', Number(c.dataset.day) === day));
  const menu = getMealForDay(day);
  const detail = document.getElementById('mealDetail');
  if (!detail) return;

  const dayLabelEn = detail.querySelector('[data-day-label="en"]');
  const dayLabelUg = detail.querySelector('[data-day-label="ug"]');
  if (dayLabelEn) dayLabelEn.textContent = 'Day ' + day;
  if (dayLabelUg) dayLabelUg.textContent = day + '-كۈن';

  const kcalEn = detail.querySelector('[data-kcal="en"]');
  const kcalUg = detail.querySelector('[data-kcal="ug"]');
  if (kcalEn) kcalEn.textContent = menu.kcal;
  if (kcalUg) kcalUg.textContent = menu.kcal;

  fillList('breakfastList', menu.b);
  fillList('lunchList', menu.l);
  fillList('dinnerList', menu.d);

  const markBtn = document.getElementById('markDoneBtn');
  if (markBtn) markBtn.dataset.day = day;
}

function fillList(id, mealObj) {
  const enList = document.querySelector('#' + id + ' [data-lang="en"]');
  const ugList = document.querySelector('#' + id + ' [data-lang="ug"]');
  if (enList) enList.innerHTML = mealObj.en.map(i => '<li>' + i + '</li>').join('');
  if (ugList) ugList.innerHTML = mealObj.ug.map(i => '<li>' + i + '</li>').join('');
}

function initMarkDone() {
  const btn = document.getElementById('markDoneBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const day = btn.dataset.day;
    let doneMap = {};
    try { doneMap = JSON.parse(localStorage.getItem('mealplan-done') || '{}'); } catch (e) {}
    doneMap[day] = !doneMap[day];
    try { localStorage.setItem('mealplan-done', JSON.stringify(doneMap)); } catch (e) {}
    document.querySelectorAll('.cal-day').forEach(c => {
      if (Number(c.dataset.day) === Number(day)) c.classList.toggle('is-done', !!doneMap[day]);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  initMarkDone();
});
