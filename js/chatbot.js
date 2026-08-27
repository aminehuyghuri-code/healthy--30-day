/* "Ask a Coach" — simple rule-based bilingual FAQ chatbot. No external API. */
const COACH_QA = [
  {
    key: 'water',
    en: 'How much water should I drink?', ug: 'مەن قانچىلىك سۇ ئىچىشىم كېرەك؟',
    aEn: 'Aim for 2–3 liters (8–12 glasses) of water a day. Drink a glass before each meal and carry a bottle with you.',
    aUg: 'كۈندە 2-3 لىتىر (8-12 stakan) سۇ ئىچىشكە تىرىشىڭ. ھەر تاماقتىن ئىلگىرى بىر stakan سۇ ئىچىڭ ۋە ھەمىشە بىر شىشە سۇ ئېلىپ يۈرۈڭ.',
  },
  {
    key: 'weight',
    en: 'How much weight can I lose in 30 days?', ug: '30 كۈندە قانچىلىك ئېغىرلىق چۈشۈرەلەيمەن؟',
    aEn: 'A safe pace is about 0.5–1 kg per week. Aggressive goals like 10kg/month can be unsafe for some — always listen to your body and consult a doctor.',
    aUg: 'بىخەتەر سۈرئەت ھەر ھەپتىدە تەخمىنەن 0.5-1 كىلوگرام. ئۆز بەدىنىڭىزنى ئاڭلاڭ ۋە دوختۇر بىلەن مەسلىھەتلىشىڭ.',
  },
  {
    key: 'exercise',
    en: 'What exercise should I do as a beginner?', ug: 'باشلانغۇچ بولسام قايسى چېنىقىشنى قىلىشىم كېرەك؟',
    aEn: 'Start with 20–30 minutes of walking daily plus light stretching. Gradually add beginner HIIT, Pilates, or yoga from the weekly plan.',
    aUg: 'كۈندە 20-30 مىنۇت مېڭىش ۋە يېنىك سوزۇلۇش بىلەن باشلاڭ. ئاستا-ئاستا ھەپتىلىك پىلاندىكى باشلانغۇچ HIIT، پىلاتېس ياكى يوگىنى قوشۇڭ.',
  },
  {
    key: 'foods',
    en: 'What foods should I avoid?', ug: 'قايسى يېمەكلىكلەردىن ساقلىنىشىم كېرەك؟',
    aEn: 'Reduce sugar, white bread, fried foods, processed snacks, and high-calorie drinks. See the Nutrition Guide page for the full list.',
    aUg: 'شېكەر، ئاق نان، ماي-قوراش تاماقلار، پۇراتقان نان-پومادكا ۋە يۇقىرى كالورىيىلىك ئىچىملىكلەرنى ئازايتىڭ.',
  },
  {
    key: 'calories',
    en: 'How many calories should I eat per day?', ug: 'كۈندە قانچىلىك كالورىيە يېيىشىم كېرەك؟',
    aEn: 'Most women aiming for safe weight loss target about 1200–1500 kcal/day — try our Calorie Calculator for a personalized number.',
    aUg: 'بىخەتەر ئورۇقلاش ئۈچۈن كۆپىنچە ئاياللار كۈندە 1200-1500 كالورىيىنى نىشان قىلىدۇ. شەخسىي سانىڭىزنى بىلىش ئۈچۈن كالورىيە ھېسابلىغۇچنى سىناڭ.',
  },
];

function chatAddMsg(body, text, who) {
  const div = document.createElement('div');
  div.className = 'chat-msg ' + who;
  div.textContent = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function currentLang() {
  return document.documentElement.getAttribute('lang') === 'ug' ? 'ug' : 'en';
}

function initChatbot() {
  const fab = document.getElementById('chatbotFab');
  const panel = document.getElementById('chatbotPanel');
  const body = document.getElementById('chatbotBody');
  const quick = document.getElementById('chatbotQuick');
  if (!fab || !panel) return;

  function greet() {
    body.innerHTML = '';
    chatAddMsg(body, currentLang() === 'ug'
      ? 'ياخشىمۇسىز! مەن سىزنىڭ ساغلاملىق مۇرەببىيىڭىز. تۆۋەندىن سوئال تاللاڭ.'
      : "Hi! I'm your health coach. Pick a question below.", 'bot');
  }

  function buildQuick() {
    quick.innerHTML = '';
    COACH_QA.forEach(qa => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = currentLang() === 'ug' ? qa.ug : qa.en;
      b.addEventListener('click', () => {
        chatAddMsg(body, currentLang() === 'ug' ? qa.ug : qa.en, 'user');
        setTimeout(() => chatAddMsg(body, currentLang() === 'ug' ? qa.aUg : qa.aEn, 'bot'), 350);
      });
      quick.appendChild(b);
    });
  }

  fab.addEventListener('click', () => {
    panel.classList.toggle('is-open');
    if (panel.classList.contains('is-open') && body.children.length === 0) {
      greet();
      buildQuick();
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-set-lang]')) {
      setTimeout(() => { if (body.children.length) { greet(); buildQuick(); } }, 0);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => setTimeout(initChatbot, 0));
