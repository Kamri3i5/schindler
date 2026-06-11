/* =================================================================
   SCHINDLER UZBEKISTAN — Interactivity + i18n (RU / UZ / EN)
   ================================================================= */

(() => {
  'use strict';

  const T = {
    ru: {
      'nav.products': 'Продукты',
      'nav.projects': 'Проекты',
      'nav.services': 'Услуги',
      'nav.about': 'О компании',
      'nav.contacts': 'Контакты',
      'nav.cta': 'Связаться',
      'nav.lang_aria': 'Переключить язык',
      'hero.coords': 'Координаты',
      'hero.city': 'Ташкент',
      'hero.eyebrow': 'Эксклюзивный дистрибьютор Schindler в Узбекистане',
      'hero.w1': 'Мы', 'hero.w2': 'перевозим', 'hero.w3': '2 миллиарда', 'hero.w4': 'людей', 'hero.w5': 'каждый', 'hero.w6': 'день.',
      'hero.desc': 'Швейцарская инженерия, безупречная безопасность и технологическое лидерство в вертикальной мобильности — теперь в каждом ключевом здании Узбекистана.',
      'hero.btn_explore': 'Изучить модели',
      'hero.btn_quote': 'Запросить расчёт',
      'about.num': '01 — Наследие',
      'about.title': 'Сто пятьдесят лет инженерной <em>точности.</em>',
      'about.lead': 'Schindler — швейцарская группа, основанная Робертом Шиндлером в 1874 году в Люцерне. Сегодня — один из двух крупнейших производителей лифтов и эскалаторов в мире.',
      'about.p2': 'В Узбекистане наша компания «Safety Elevators and Escalators» является эксклюзивным дистрибьютором Schindler с правом производства, продажи, монтажа и технического обслуживания.',
      'about.link': 'Полная история компании',
      'about.stat1': 'людей перевозим ежедневно',
      'about.stat2': 'лет инженерной истории',
      'about.stat3': 'стран присутствия',
      'about.stat4': 'сотрудников в мире',
      'prod.num': '02 — Продукты',
      'prod.title': 'Три модели для каждой <em>задачи.</em>',
      'prod.sub': 'От квартирных жилых домов до высотных башен и коммерческих центров.',
      'p33.tag': 'Жилой сегмент',
      'p33.desc': 'Эталонный лифт для жилых зданий. Энергоэффективный, бесшумный и адаптируемый под любой интерьер.',
      'p33.s1l': 'Грузоподъёмность', 'p33.s1v': 'до 1 000 кг',
      'p33.s2l': 'Скорость', 'p33.s2v': '1.0–1.6 м/с',
      'p33.s3l': 'Этажей', 'p33.s3v': 'до 25',
      'p33.link': 'Подробнее о модели',
      'p33.h1l': 'Тип', 'p33.h1v': 'Пассажирский',
      'p33.h2l': 'Привод', 'p33.h2v': 'Безредукторный',
      'p33.h3l': 'Энергокласс', 'p33.h3v': 'A',
      'p33.h4l': 'Система', 'p33.h4v': 'PORT Technology',
      'p55.tag': 'Премиальный сегмент',
      'p55.desc': 'Гибкое модульное решение для коммерческих и премиальных зданий. Безграничная кастомизация интерьера.',
      'p55.s1l': 'Грузоподъёмность', 'p55.s1v': 'до 2 500 кг',
      'p55.s2l': 'Скорость', 'p55.s2v': '1.0–4.0 м/с',
      'p55.s3l': 'Этажей', 'p55.s3v': 'до 60',
      'p55.link': 'Подробнее о модели',
      'p55.h1l': 'Тип', 'p55.h1v': 'Пассажирский / Грузовой',
      'p55.h2l': 'Привод', 'p55.h2v': 'Безредукторный',
      'p55.h3l': 'Энергокласс', 'p55.h3v': 'A+',
      'p55.h4l': 'Кастомизация', 'p55.h4v': 'Безграничная',
      'p93.tag': 'Эскалаторы',
      'p93.desc': 'Передовой эскалатор для торговых центров и транспортных узлов. Энергосберегающий привод.',
      'p93.s1l': 'Угол наклона', 'p93.s1v': '30° / 35°',
      'p93.s2l': 'Скорость', 'p93.s2v': '0.5–0.65 м/с',
      'p93.s3l': 'Перепад', 'p93.s3v': 'до 12 м',
      'p93.link': 'Подробнее о модели',
      'p93.h1l': 'Тип', 'p93.h1v': 'Эскалатор',
      'p93.h2l': 'Привод', 'p93.h2v': 'Энергосберегающий',
      'p93.h3l': 'Безопасность', 'p93.h3v': 'Интеллектуальная',
      'p93.h4l': 'Режим', 'p93.h4v': 'Непрерывный',
      'calc.num': 'Конструктор',
      'calc.title': 'Подберите <em>параметры</em> лифта',
      'calc.sub': 'Введите габариты кабины — калькулятор рассчитает грузоподъёмность.',
      'calc.ll_in': 'РАЗМЕРЫ КАБИНЫ · ВВОД',
      'calc.width': 'Ширина',
      'calc.length': 'Длина',
      'calc.mm': 'мм',
      'calc.swap': 'Поменять местами',
      'calc.lr_out': 'ХАРАКТЕРИСТИКИ · РЕЗУЛЬТАТ',
      'calc.kg': 'Грузоподъёмность',
      'calc.kg_u': 'кг',
      'calc.pers': 'Вместимость',
      'calc.ch': 'чел',
      'calc.area': 'Площадь кабины',
      'calc.model': 'Рекомендуемая модель',
      'proj.num': '03 — Реализованные проекты',
      'proj.title': 'Здания, в которых работает <em>наша инженерия.</em>',
      'pr.ht.tag': 'Гостиница · 5★',
      'pr.ht.desc': 'Установка высокоскоростных лифтов Schindler 7000 для Hilton.',
      'pr.ht.s1': 'лифтов', 'pr.ht.s2': 'этажа',
      'pr.tc.tag': 'Деловой центр', 'pr.tc.desc': 'Премиальные лифты для бизнес-района.',
      'pr.dc.tag': 'ЖК премиум', 'pr.dc.desc': 'Долгосрочное сотрудничество с Dream City.',
      'pr.mb.tag': 'Девелопмент', 'pr.mb.desc': 'Оснащение жилых комплексов Murad Buildings.',
      'pr.ma.tag': 'Жилой комплекс', 'pr.ma.desc': 'Три лифта Schindler для Mirabad Avenue.',
      'proj.cta': 'Все проекты',
      'svc.num': '04 — Услуги',
      'svc.title': 'Полный жизненный цикл <em>обслуживания.</em>',
      's1.t': 'Проектирование', 's1.d': 'Расчёт конфигурации, BIM-интеграция.',
      's2.t': 'Производство', 's2.d': 'Локализованное производство по швейцарским стандартам.',
      's3.t': 'Монтаж', 's3.d': 'Профессиональная установка сертифицированными инженерами.',
      's4.t': 'Техническое обслуживание', 's4.d': 'Регулярное ТО, аварийный выезд 24/7.',
      's5.t': 'Модернизация', 's5.d': 'Обновление кабин, систем управления и двигателей.',
      's6.t': 'Консультация', 's6.d': 'Экспертная поддержка на всех стадиях.',
      'tech.num': '05 — Технологии',
      'tech.title': 'Лифты, которые думают <em>наперёд.</em>',
      'tech.lead': 'Schindler Ahead — первая в мире цифровая платформа для лифтов.',
      'tf1.t': 'Предиктивная аналитика', 'tf1.d': 'Алгоритмы предсказывают необходимость обслуживания.',
      'tf2.t': 'PORT Technology', 'tf2.d': 'Персонализированный доступ и оптимизация трафика.',
      'tf3.t': 'Энергоэффективность А++', 'tf3.d': 'Регенеративные приводы возвращают до 30% энергии.',
      'test.quote': 'Schindler — это по-настоящему просторные лифты. Точность работы и дизайн соответствуют статусу Tashkent City.',
      'test.role': 'Заказчик · 2019',
      'cta.num': '06 — Контакты',
      'cta.title': 'Начнём ваш <em>проект</em> вместе.',
      'cta.sub': 'Расскажите о вашем здании — мы подготовим предложение за 48 часов.',
      'cta.l_name': 'Имя', 'cta.ph_name': 'Ваше имя',
      'cta.l_co': 'Компания', 'cta.ph_co': 'Название компании',
      'cta.l_tel': 'Телефон', 'cta.ph_tel': '+998 __ ___ __ __',
      'cta.l_mail': 'Email', 'cta.ph_mail': 'email@company.uz',
      'cta.l_proj': 'О проекте', 'cta.ph_proj': 'Объект, этажность...',
      'cta.note': 'Нажимая кнопку, вы соглашаетесь с обработкой данных',
      'cta.submit': 'Отправить запрос',
      'cta.ph_lbl': 'Прямой звонок', 'cta.em_lbl': 'Email', 'cta.ad_lbl': 'Адрес', 'cta.address': 'Ташкент · Узбекистан',
      'ft.tag': 'Эксклюзивный дистрибьютор',
      'ft.c1': 'Продукты', 'ft.c1l4': 'Все модели',
      'ft.c2': 'Услуги', 'ft.c2l1': 'Проектирование', 'ft.c2l2': 'Монтаж', 'ft.c2l3': 'Техобслуживание', 'ft.c2l4': 'Модернизация',
      'ft.c3': 'Компания', 'ft.c3l1': 'О нас', 'ft.c3l2': 'Проекты', 'ft.c3l3': 'Партнёры', 'ft.c3l4': 'Лицензии',
      'ft.c4': 'Контакты', 'ft.c4addr': 'Ташкент, Узбекистан',
      'ft.rights': 'Все права защищены.', 'ft.privacy': 'Политика конфиденциальности', 'ft.terms': 'Условия использования',
      'fl.title': 'Консультация', 'fl.sub': 'Мы перезвоним вам в течение 15 минут.',
      'fl.l_name': 'Имя', 'fl.ph_name': 'Ваше имя',
      'fl.l_tel': 'Телефон', 'fl.ph_tel': '+998 __ ___ __ __',
      'fl.l_topic': 'Интересует', 'fl.o_lift': 'Лифты Schindler', 'fl.o_esc': 'Эскалаторы', 'fl.o_svc': 'Техническое обслуживание', 'fl.o_mod': 'Модернизация',
      'fl.submit': 'Отправить запрос', 'fl.ok_h': 'Заявка отправлена', 'fl.ok_p': 'Мы свяжемся с вами в течение 15 минут.',
      'fl.btn_aria': 'Консультация', 'fl.btn_txt': 'Консультация'
    },
    uz: {
      'nav.products': 'Mahsulotlar',
      'nav.projects': 'Loyihalar',
      'nav.services': 'Xizmatlar',
      'nav.about': 'Kompaniya haqida',
      'nav.contacts': 'Kontaktlar',
      'nav.cta': 'Bog\'lanish',
      'nav.lang_aria': 'Tilni o\'zgartirish',
      'hero.coords': 'Koordinatalar',
      'hero.city': 'Toshkent',
      'hero.eyebrow': 'O\'zbekistondagi Schindler eksklyuziv distribyutori',
      'hero.w1': 'Biz', 'hero.w2': 'har kuni', 'hero.w3': '2 milliard', 'hero.w4': 'odamni', 'hero.w5': 'tashishimiz', 'hero.w6': 'bilan faxrlanamiz.',
      'hero.desc': 'Shveytsariya muhandisligi, benuqson xavfsizlik va vertikal harakatlanishdagi texnologik yetakchilik — endi O\'zbekistonning har bir asosiy binosida.',
      'hero.btn_explore': 'Modellarni ko\'rish',
      'hero.btn_quote': 'Hisob-kitobni so\'rash',
      'about.num': '01 — Meros',
      'about.title': 'Yuz ellik yillik muhandislik <em>aniqligi.</em>',
      'about.lead': 'Schindler — 1874-yilda Lyutsernda Robert Shindler tomonidan asos solingan Shveytsariya guruhi.',
      'about.p2': 'O\'zbekistonda bizning «Safety Elevators and Escalators» kompaniyamiz Schindler eksklyuziv distribyutori hisoblanadi.',
      'about.link': 'Kompaniyaning to\'liq tarixi',
      'about.stat1': 'odamni har kuni tashiymiz',
      'about.stat2': 'yillik muhandislik tarixi',
      'about.stat3': 'davlatda mavjudlik',
      'about.stat4': 'dunyodagi xodimlar',
      'prod.num': '02 — Mahsulotlar',
      'prod.title': 'Har bir vazifa uchun <em>uchta model.</em>',
      'prod.sub': 'Turar-joy binolaridan tortib osmono\'par binolar va tijorat markazlarigacha.',
      'p33.tag': 'Turar-joy segmenti',
      'p33.desc': 'Turar-joy binolari uchun namunaviy lift. Energiya tejamkor va har qanday interyerga moslashuvchan.',
      'p33.s1l': 'Yuk ko\'tarish', 'p33.s1v': '1 000 kg gacha',
      'p33.s2l': 'Tezlik', 'p33.s2v': '1.0–1.6 m/s',
      'p33.s3l': 'Qavatlar', 'p33.s3v': '25 tagacha',
      'p33.link': 'Model haqida batafsil',
      'p55.tag': 'Premium segment',
      'p55.desc': 'Tijorat va premium binolar uchun moslashuvchan yechim. Cheksiz kastomizatsiya.',
      'p55.s1l': 'Yuk ko\'tarish', 'p55.s1v': '2 500 kg gacha',
      'p55.s2l': 'Tezlik', 'p55.s2v': '1.0–4.0 m/s',
      'p55.s3l': 'Qavatlar', 'p55.s3v': '60 tagacha',
      'p55.link': 'Model haqida batafsil',
      'p93.tag': 'Eskalatorlar',
      'p93.desc': 'Savdo markazlari va transport tugunlari uchun ilg\'or eskalator.',
      'p93.s1l': 'Qiyalik burchagi', 'p93.s1v': '30° / 35°',
      'p93.s2l': 'Tezlik', 'p93.s2v': '0.5–0.65 m/s',
      'p93.s3l': 'Balandlik', 'p93.s3v': '12 m gacha',
      'p93.link': 'Model haqida batafsil',
      'calc.num': 'Konstruktor',
      'calc.title': 'Lift <em>parametrlarini</em> tanlang',
      'calc.sub': 'Kabina o\'lchamlarini kiriting — kalkulyator yuk ko\'tarish qobiliyatini hisoblaydi.',
      'proj.num': '03 — Amalga oshirilgan loyihalar',
      'proj.title': 'Bizning muhandisligimiz <em>ishlayotgan binolar.</em>',
      'proj.cta': 'Barcha loyihalar',
      'svc.num': '04 — Xizmatlar',
      'svc.title': 'To\'liq xizmat ko\'rsatish <em>tsikli.</em>',
      'tech.num': '05 — Texnologiyalar',
      'tech.title': 'Oldindan o\'ylaydigan <em>liftlar.</em>',
      'cta.num': '06 — Kontaktlar',
      'cta.title': 'Loyihangizni birga <em>boshlaymiz.</em>',
      'ft.tag': 'Eksklyuziv distribyutor',
      'ft.rights': 'Barcha huquqlar himoyalangan.',
      'fl.title': 'Konsultatsiya', 'fl.ok_h': 'Ariza yuborildi'
    },
    en: {
      'nav.products': 'Products',
      'nav.projects': 'Projects',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contacts': 'Contacts',
      'nav.cta': 'Get in Touch',
      'nav.lang_aria': 'Switch language',
      'hero.coords': 'Coordinates',
      'hero.city': 'Tashkent',
      'hero.eyebrow': 'Exclusive Schindler Distributor in Uzbekistan',
      'hero.w1': 'We', 'hero.w2': 'move', 'hero.w3': '2 billion', 'hero.w4': 'people', 'hero.w5': 'every', 'hero.w6': 'day.',
      'hero.desc': 'Swiss engineering, flawless safety and technological leadership in vertical mobility — now in every landmark building of Uzbekistan.',
      'hero.btn_explore': 'Explore models',
      'hero.btn_quote': 'Request a quote',
      'about.num': '01 — Heritage',
      'about.title': 'One hundred and fifty years of engineering <em>precision.</em>',
      'about.lead': 'Schindler is a Swiss group founded by Robert Schindler in 1874 in Lucerne. Today, it is one of the world\'s leading providers of elevators and escalators.',
      'about.link': 'Full company history',
      'about.stat1': 'people moved daily',
      'about.stat2': 'years of engineering history',
      'about.stat3': 'countries of presence',
      'about.stat4': 'employees worldwide',
      'prod.num': '02 — Products',
      'prod.title': 'Three models for every <em>task.</em>',
      'prod.sub': 'From residential apartments to high-rise towers and commercial centers.',
      'p33.tag': 'Residential Segment',
      'p33.desc': 'The benchmark elevator for residential buildings. Energy-efficient, silent and adaptable to any interior.',
      'p33.s1l': 'Capacity', 'p33.s1v': 'up to 1,000 kg',
      'p33.s2l': 'Speed', 'p33.s2v': '1.0–1.6 m/s',
      'p33.s3l': 'Floors', 'p33.s3v': 'up to 25',
      'p33.link': 'Model details',
      'p55.tag': 'Premium Segment',
      'p55.desc': 'Flexible modular solution for commercial and premium buildings. Limitless interior customization.',
      'p55.s1l': 'Capacity', 'p55.s1v': 'up to 2,500 kg',
      'p55.s2l': 'Speed', 'p55.s2v': '1.0–4.0 m/s',
      'p55.s3l': 'Floors', 'p55.s3v': 'up to 60',
      'p55.link': 'Model details',
      'p93.tag': 'Escalators',
      'p93.desc': 'Advanced escalator for shopping malls and transport hubs. Energy-saving drive.',
      'p93.s1l': 'Inclination', 'p93.s1v': '30° / 35°',
      'p93.s2l': 'Speed', 'p93.s2v': '0.5–0.65 m/s',
      'p93.s3l': 'Rise', 'p93.s3v': 'up to 12 m',
      'p93.link': 'Model details',
      'calc.num': 'Configurator',
      'calc.title': 'Select elevator <em>parameters</em>',
      'calc.sub': 'Enter cabin dimensions — the calculator will determine the load capacity.',
      'proj.num': '03 — Completed Projects',
      'proj.title': 'Buildings powered by <em>our engineering.</em>',
      'proj.cta': 'All projects',
      'svc.num': '04 — Services',
      'svc.title': 'Full life cycle <em>maintenance.</em>',
      'tech.num': '05 — Technology',
      'tech.title': 'Elevators that think <em>ahead.</em>',
      'cta.num': '06 — Contacts',
      'cta.title': 'Let\'s start your <em>project</em> together.',
      'ft.tag': 'Exclusive Distributor',
      'ft.rights': 'All rights reserved.',
      'fl.title': 'Consultation', 'fl.ok_h': 'Request sent'
    }
  };

  let currentLang = 'ru';

  const updateTexts = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (T[currentLang][key]) el.textContent = T[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (T[currentLang][key]) el.innerHTML = T[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (T[currentLang][key]) el.placeholder = T[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (T[currentLang][key]) el.setAttribute('aria-label', T[currentLang][key]);
    });
    document.documentElement.lang = currentLang;
  };

  // Lang Switcher
  const langBtn = document.querySelector('.nav-lang');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const langs = ['ru', 'uz', 'en'];
      let idx = langs.indexOf(currentLang);
      currentLang = langs[(idx + 1) % langs.length];
      
      langBtn.querySelectorAll('span').forEach(s => {
        s.classList.toggle('active', s.textContent.toLowerCase() === currentLang);
      });
      updateTexts();
    });
  }

  /* =================================================================
     MODAL CONTROLLER (GENERIC)
     ================================================================= */
  const setupModal = (modalId, triggerId, closeId, backdropId) => {
    const modal = document.getElementById(modalId);
    const trigger = document.getElementById(triggerId);
    const closeBtn = document.getElementById(closeId);
    const backdrop = document.getElementById(backdropId);

    if (!modal || !trigger) return;

    const open = () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // accessibility: focus first element or close button
      setTimeout(() => closeBtn.focus(), 100);
    };

    const close = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      trigger.focus();
    };

    trigger.addEventListener('click', (e) => { e.preventDefault(); open(); });
    closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', close);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) close();
    });
  };

  // Setup all modals
  setupModal('all-projects-modal', 'all-projects-btn', 'apm-close', 'apm-backdrop');
  setupModal('history-modal', 'open-history-btn', 'history-close', 'history-backdrop');
  setupModal('partners-modal', 'open-partners-btn', 'partners-close', 'partners-backdrop');
  setupModal('licenses-modal', 'open-licenses-btn', 'licenses-close', 'licenses-backdrop');


  /* =================================================================
     MOBILE NAVIGATION
     ================================================================= */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (burger) {
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.contains('menu-open');
      if (isOpen) {
        nav.classList.remove('menu-open');
        document.body.style.overflow = '';
        burger.setAttribute('aria-label', 'Открыть меню');
      } else {
        nav.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
        burger.setAttribute('aria-label', 'Закрыть меню');
      }
    });
  }

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });


  /* =================================================================
     ELEVATOR CONSTRUCTOR
     ================================================================= */
  const wIn = document.getElementById('calc-width');
  const lIn = document.getElementById('calc-length');
  const kgIn = document.getElementById('calc-kg');
  const pIn = document.getElementById('calc-persons');
  const areaOut = document.getElementById('calc-area');
  const modelOut = document.getElementById('calc-model');
  const swapBtn = document.getElementById('calc-swap');

  let mode = 'size'; // 'size' or 'specs'

  const calculate = () => {
    if (mode === 'size') {
      const w = parseFloat(wIn.value) / 1000;
      const l = parseFloat(lIn.value) / 1000;
      const area = w * l;
      areaOut.textContent = area.toFixed(2) + ' m²';

      // Simple heuristic for kg/persons
      const kg = Math.round(area * 450 / 100) * 100;
      const persons = Math.round(kg / 75);
      kgIn.value = kg;
      pIn.value = persons;

      if (kg <= 1000) modelOut.textContent = 'Schindler 3000';
      else modelOut.textContent = 'Schindler 5000';
    } else {
      const kg = parseFloat(kgIn.value);
      const persons = Math.round(kg / 75);
      pIn.value = persons;
      
      const area = kg / 450;
      areaOut.textContent = area.toFixed(2) + ' m²';
      
      const side = Math.sqrt(area);
      wIn.value = Math.round(side * 1000);
      lIn.value = Math.round(side * 1000);

      if (kg <= 1000) modelOut.textContent = 'Schindler 3000';
      else modelOut.textContent = 'Schindler 5000';
    }
  };

  if (wIn) {
    [wIn, lIn, kgIn].forEach(el => el.addEventListener('input', calculate));
    swapBtn.addEventListener('click', () => {
      mode = mode === 'size' ? 'specs' : 'size';
      document.getElementById('constructor-body').classList.toggle('swap-mode');
      kgIn.readOnly = mode === 'size';
      kgIn.tabIndex = mode === 'size' ? -1 : 0;
      wIn.readOnly = mode === 'specs';
      lIn.readOnly = mode === 'specs';
      wIn.tabIndex = mode === 'specs' ? -1 : 0;
      lIn.tabIndex = mode === 'specs' ? -1 : 0;
    });
    calculate();
  }

  /* =================================================================
     LOADER & INITIALIZATION
     ================================================================= */
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.add('loaded');
    }, 1000);

    // Update year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Hero Local Time
    const timeEl = document.getElementById('local-time');
    const updateTime = () => {
      const now = new Date();
      timeEl.textContent = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tashkent' }) + ' TJT';
    };
    if (timeEl) { updateTime(); setInterval(updateTime, 60000); }
  });

  // Scroll visibility
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const fCtaContainer = document.getElementById('floating-cta-container');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        if (fCtaContainer) fCtaContainer.classList.add('visible');
    } else {
        nav.classList.remove('scrolled');
        if (fCtaContainer) fCtaContainer.classList.remove('visible');
    }
    
    // Animate stats counters
    document.querySelectorAll('.stat').forEach(stat => {
        const rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight && !stat.classList.contains('animated')) {
            stat.classList.add('animated');
            const numEl = stat.querySelector('.stat-num span');
            const target = parseInt(stat.getAttribute('data-counter'));
            animateNumber(numEl, target);
        }
    });
  });

  // Counter Animation
  function animateNumber(element, target) {
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    
    // Set full value as tooltip
    element.parentElement.parentElement.parentElement.setAttribute('title', target.toLocaleString());

    const formatNumber = (num) => {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toLocaleString();
    };

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
  }

  // Floating CTA Toggle
  const fCta = document.getElementById('floating-cta');
  const fCtaContainer = document.getElementById('floating-cta-container');
  if (fCta) {
    fCta.addEventListener('click', () => {
      fCtaContainer.classList.toggle('expanded');
    });
  }

})();

// Form Handler (Global for simplicity with HTML onsubmit)
window.handleFormSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  const formData = new FormData(form);
  formData.append('access_key', '74384e7a-25a5-448e-93b7-1217844b3a11');
  
  btn.disabled = true;
  btn.innerHTML = '<span class="btn-label">Отправка...</span>';
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    
    if (result.success) {
        alert('Спасибо! Ваш запрос успешно отправлен.');
        form.reset();
    } else {
        alert('Ошибка при отправке: ' + result.message);
    }
  } catch (error) {
      alert('Произошла ошибка, попробуйте позже.');
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
};
