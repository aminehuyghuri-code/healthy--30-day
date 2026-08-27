/* BMI Calculator (bmi-calculator.html) and Calorie Calculator (calorie-calculator.html) */

function initBmiCalculator() {
  const form = document.getElementById('bmiForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const heightCm = parseFloat(document.getElementById('bmiHeight').value);
    const weightKg = parseFloat(document.getElementById('bmiWeight').value);
    if (!heightCm || !weightKg) return;
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const box = document.getElementById('bmiResult');

    let categoryEn, categoryUg;
    if (bmi < 18.5) { categoryEn = 'Underweight'; categoryUg = 'ئېغىرلىقى يېتەرسىز'; }
    else if (bmi < 25) { categoryEn = 'Healthy range'; categoryUg = 'ساغلام دائىرىدە'; }
    else if (bmi < 30) { categoryEn = 'Overweight'; categoryUg = 'ئېغىرلىقى ئاشقان'; }
    else { categoryEn = 'Obese'; categoryUg = 'بەك سەمرىگەن'; }

    box.querySelector('[data-lang="en"]').innerHTML = `Your BMI is <strong>${bmi.toFixed(1)}</strong> — ${categoryEn}.`;
    box.querySelector('[data-lang="ug"]').innerHTML = `سىزنىڭ BMI كۆرسەتكۈچىڭىز <strong>${bmi.toFixed(1)}</strong> — ${categoryUg}.`;
    box.classList.add('is-visible');
  });
}

function initCalorieCalculator() {
  const form = document.getElementById('calorieForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseFloat(document.getElementById('calAge').value);
    const heightCm = parseFloat(document.getElementById('calHeight').value);
    const weightKg = parseFloat(document.getElementById('calWeight').value);
    const activity = parseFloat(document.getElementById('calActivity').value);
    if (!age || !heightCm || !weightKg || !activity) return;

    // Mifflin-St Jeor (female)
    const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    const maintenance = bmr * activity;
    const target = Math.max(1200, maintenance - 500); // safe ~0.5kg/week deficit, floor 1200 kcal

    const box = document.getElementById('calorieResult');
    box.querySelector('[data-lang="en"]').innerHTML =
      `Maintenance: <strong>${Math.round(maintenance)} kcal/day</strong><br>Suggested target for safe weight loss: <strong>${Math.round(target)} kcal/day</strong>`;
    box.querySelector('[data-lang="ug"]').innerHTML =
      `ساقلاش دەرىجىسى: <strong>${Math.round(maintenance)} كالورىيە/كۈن</strong><br>بىخەتەر ئورۇقلاش ئۈچۈن تەۋسىيە: <strong>${Math.round(target)} كالورىيە/كۈن</strong>`;
    box.classList.add('is-visible');
  });
}

function relabelSelects() {
  const lang = document.documentElement.getAttribute('lang') === 'ug' ? 'ug' : 'en';
  document.querySelectorAll('select[data-en-0]').forEach(sel => {
    Array.from(sel.options).forEach((opt, i) => {
      const label = sel.getAttribute(`data-${lang}-${i}`);
      if (label) opt.textContent = label;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initBmiCalculator();
  initCalorieCalculator();
  relabelSelects();
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-set-lang]')) setTimeout(relabelSelects, 0);
  });
});
