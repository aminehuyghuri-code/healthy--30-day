/* Motivation page: weekly weight chart + daily habit tracker (all stored in localStorage). */

function initWeightChart() {
  const chart = document.getElementById('weightChart');
  const form = document.getElementById('weightForm');
  if (!chart) return;

  function load() {
    let entries = [];
    try { entries = JSON.parse(localStorage.getItem('weight-log') || '[]'); } catch (e) {}
    return entries;
  }
  function save(entries) {
    try { localStorage.setItem('weight-log', JSON.stringify(entries)); } catch (e) {}
  }
  function render() {
    const entries = load().slice(-8);
    chart.innerHTML = '';
    if (entries.length === 0) {
      chart.innerHTML = '<p style="color:var(--ink-soft);margin:auto;">Log your weekly weight below to see your progress chart.</p>';
      return;
    }
    const max = Math.max(...entries.map(e => e.weight));
    const min = Math.min(...entries.map(e => e.weight));
    const range = Math.max(max - min, 1);
    entries.forEach(entry => {
      const col = document.createElement('div');
      col.className = 'bar-col';
      const pct = 20 + ((entry.weight - min) / range) * 80;
      col.innerHTML = `<div class="bar-val">${entry.weight}kg</div><div class="bar" style="height:${pct}%"></div><div class="bar-label">W${entry.week}</div>`;
      chart.appendChild(col);
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const week = document.getElementById('weightWeek').value;
      const weight = parseFloat(document.getElementById('weightValue').value);
      if (!week || !weight) return;
      const entries = load();
      const idx = entries.findIndex(en => String(en.week) === String(week));
      if (idx >= 0) entries[idx].weight = weight;
      else entries.push({ week, weight });
      entries.sort((a, b) => a.week - b.week);
      save(entries);
      render();
      form.reset();
    });
  }
  render();
}

/* ---- Daily habit tracker (checkbox grid, persisted per day) ---- */
function initHabitTracker() {
  const grid = document.getElementById('habitTracker');
  if (!grid) return;
  const todayKey = 'habits-' + new Date().toISOString().slice(0, 10);
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(todayKey) || '{}'); } catch (e) {}
  grid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    if (saved[cb.id]) cb.checked = true;
    cb.addEventListener('change', () => {
      saved[cb.id] = cb.checked;
      try { localStorage.setItem(todayKey, JSON.stringify(saved)); } catch (e) {}
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initWeightChart();
  initHabitTracker();
});
