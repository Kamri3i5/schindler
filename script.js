/* =================================================================
   SCHINDLER UZBEKISTAN — Interactivity + i18n (RU / UZ / EN)
   ================================================================= */

(() => {
  'use strict';

  /* ================================================================
     TRANSLATIONS
     ================================================================ */
  const T = {
    ru: {
      'meta.title': 'Schindler Uzbekistan — Премиальные лифты и эскалаторы швейцарского качества',
      'meta.desc': 'Эксклюзивный дистрибьютор Schindler в Узбекистане. Производство, продажа и техническое обслуживание лифтов и эскалаторов мирового класса с 1874 года.',

      /* Nav */
      'nav.logo_sub': 'UZBEKISTAN · с 1874',
      'nav.aria': 'Главное меню',
      'nav.products': 'Продукты',
      'nav.projects': 'Проекты',
      'nav.services': 'Услуги',
      'nav.about': 'О компании',
      'nav.contacts': 'Контакты',
      'nav.cta': 'Связаться',
      'nav.burger_aria': 'Открыть меню',
      'nav.lang_aria': 'Переключить язык',

      /* Hero */
      'hero.coords': 'Координаты',
      'hero.city': 'Ташкент',
      'hero.eyebrow': 'Эксклюзивный дистрибьютор Schindler в Узбекистане',
      'hero.w1': 'Мы',
      'hero.w2': 'перевозим',
      'hero.w3': '1\u00a0миллиард',
      'hero.w4': 'людей',
      'hero.w5': 'каждый',
      'hero.w6': 'день.',
      'hero.desc': 'Швейцарская инженерия, безупречная безопасность и\u00a0технологическое лидерство в\u00a0вертикальной мобильности — теперь в\u00a0каждом ключевом здании Узбекистана.',
      'hero.btn_explore': 'Изучить модели',
      'hero.btn_quote': 'Запросить расчёт',

      /* About */
      'about.num': '01 — Наследие',
      'about.title': 'Сто пятьдесят\u00a0лет инженерной\u00a0<em>точности.</em>',
      'about.lead': 'Schindler — швейцарская группа, основанная Робертом Шиндлером в\u00a01874\u00a0году в\u00a0Люцерне. Сегодня\u00a0— один из\u00a0двух крупнейших производителей лифтов и\u00a0эскалаторов в\u00a0мире.',
      'about.p2': 'В\u00a0Узбекистане наша компания «Safety Elevators\u00a0and\u00a0Escalators» является эксклюзивным дистрибьютором Schindler с\u00a0правом производства, продажи, монтажа и\u00a0технического обслуживания. Мы\u00a0оборудовали лифтами и\u00a0эскалаторами знаковые объекты страны — от\u00a0Hilton Tashkent City до\u00a0Tashkent City и\u00a0Dream City.',
      'about.link': 'Полная история компании',
      'about.stat1': 'людей перевозим ежедневно',
      'about.stat2': 'лет инженерной истории',
      'about.stat3': 'стран присутствия',
      'about.stat4': 'сотрудников в\u00a0мире',
      'counter.b': '\u00a0млрд',
      'counter.m': '\u00a0млн',

      /* Products section head */
      'prod.num': '02 — Продукты',
      'prod.title': 'Три модели для каждой\u00a0<em>задачи.</em>',
      'prod.sub': 'От\u00a0квартирных жилых домов до\u00a0высотных башен и\u00a0коммерческих центров\u00a0— Schindler предлагает решение для любой архитектурной концепции.',

      /* Product 3300 */
      'p33.tag': 'Жилой сегмент',
      'p33.desc': 'Эталонный лифт для жилых зданий. Энергоэффективный, бесшумный и\u00a0адаптируемый под любой интерьер. Технология PORT обеспечивает интуитивную навигацию.',
      'p33.s1l': 'Грузоподъёмность',
      'p33.s1v': 'до 1\u00a0000\u00a0кг',
      'p33.s2l': 'Скорость',
      'p33.s2v': '1.0–1.6 м/с',
      'p33.s3l': 'Этажей',
      'p33.s3v': 'до 25',
      'p33.link': 'Подробнее о модели',
      'p33.h1l': 'Тип', 'p33.h1v': 'Пассажирский',
      'p33.h2l': 'Привод', 'p33.h2v': 'Безредукторный',
      'p33.h3l': 'Энергокласс', 'p33.h3v': 'A',
      'p33.h4l': 'Система', 'p33.h4v': 'PORT Technology',

      /* Product 5500 */
      'p55.tag': 'Премиальный сегмент',
      'p55.desc': 'Гибкое модульное решение для коммерческих и\u00a0премиальных жилых зданий. Безграничная кастомизация интерьера кабины\u00a0— от\u00a0стекла и\u00a0нержавеющей стали до\u00a0натурального камня.',
      'p55.s1l': 'Грузоподъёмность',
      'p55.s1v': 'до 2\u00a0500\u00a0кг',
      'p55.s2l': 'Скорость',
      'p55.s2v': '1.0–4.0 м/с',
      'p55.s3l': 'Этажей',
      'p55.s3v': 'до 60',
      'p55.link': 'Подробнее о модели',
      'p55.h1l': 'Тип', 'p55.h1v': 'Пассажирский / Грузовой',
      'p55.h2l': 'Привод', 'p55.h2v': 'Безредукторный',
      'p55.h3l': 'Энергокласс', 'p55.h3v': 'A+',
      'p55.h4l': 'Кастомизация', 'p55.h4v': 'Безграничная',

      /* Product 9300 */
      'p93.tag': 'Эскалаторы',
      'p93.desc': 'Передовой эскалатор для торговых центров, аэропортов и\u00a0транспортных узлов. Энергосберегающий привод и\u00a0интеллектуальные системы безопасности для непрерывной эксплуатации.',
      'p93.s1l': 'Угол наклона',
      'p93.s1v': '30° / 35°',
      'p93.s2l': 'Скорость',
      'p93.s2v': '0.5–0.65 м/с',
      'p93.s3l': 'Перепад',
      'p93.s3v': 'до 12 м',
      'p93.link': 'Подробнее о модели',
      'p93.h1l': 'Тип', 'p93.h1v': 'Эскалатор',
      'p93.h2l': 'Привод', 'p93.h2v': 'Энергосберегающий',
      'p93.h3l': 'Безопасность', 'p93.h3v': 'Интеллектуальная',
      'p93.h4l': 'Режим', 'p93.h4v': 'Непрерывный',

      /* Constructor */
      'calc.num': 'Конструктор',
      'calc.title': 'Подберите <em>параметры</em> лифта',
      'calc.sub': 'Введите габариты кабины — калькулятор рассчитает грузоподъёмность и\u00a0вместимость. Нажмите ⇄ для обратного расчёта.',
      'calc.ll_in': 'РАЗМЕРЫ КАБИНЫ · ВВОД',
      'calc.ll_out': 'РАЗМЕРЫ КАБИНЫ · РЕЗУЛЬТАТ',
      'calc.lr_out': 'ХАРАКТЕРИСТИКИ · РЕЗУЛЬТАТ',
      'calc.lr_in': 'ХАРАКТЕРИСТИКИ · ВВОД',
      'calc.width': 'Ширина',
      'calc.length': 'Длина',
      'calc.kg': 'Грузоподъёмность',
      'calc.pers': 'Вместимость',
      'calc.mm': 'мм',
      'calc.kg_u': 'кг',
      'calc.ch': 'чел',
      'calc.area': 'Площадь кабины',
      'calc.model': 'Рекомендуемая модель',
      'calc.swap': 'Поменять местами',
      'calc.area_unit': 'м²',

      /* Projects */
      'proj.num': '03 — Реализованные проекты',
      'proj.title': 'Здания, в\u00a0которых работает\u00a0<em>наша инженерия.</em>',
      'pr.ht.tag': 'Гостиница · 5★',
      'pr.ht.desc': 'Установка комплекса высокоскоростных лифтов Schindler 7000 для флагманской гостиницы Hilton в Узбекистане.',
      'pr.ht.s1': 'лифтов',
      'pr.ht.s2': 'этажа',
      'pr.tc.tag': 'Деловой центр',
      'pr.tc.desc': 'Просторные премиальные лифты для бизнес-района нового поколения.',
      'pr.dc.tag': 'ЖК премиум',
      'pr.dc.desc': 'Долгосрочное сотрудничество с одним из крупнейших застройщиков страны.',
      'pr.mb.tag': 'Девелопмент',
      'pr.mb.desc': 'Стратегический контракт на оснащение жилых комплексов застройщика.',
      'pr.ma.tag': 'Жилой комплекс',
      'pr.ma.desc': 'Установка трёх лифтов Schindler в премиальный жилой комплекс центра Ташкента.',
      'proj.cta': 'Все проекты',

      /* Services */
      'svc.num': '04 — Услуги',
      'svc.title': 'Полный жизненный\u00a0цикл\u00a0<em>обслуживания.</em>',
      's1.t': 'Проектирование',
      's1.d': 'Расчёт оптимальной конфигурации, подбор моделей под архитектурную задачу, BIM-интеграция.',
      's2.t': 'Производство',
      's2.d': 'Локализованное производство компонентов и\u00a0кабин в\u00a0Узбекистане по\u00a0швейцарским стандартам качества.',
      's3.t': 'Монтаж',
      's3.d': 'Профессиональная установка сертифицированными инженерами с\u00a0соблюдением всех норм безопасности.',
      's4.t': 'Техническое обслуживание',
      's4.d': 'Регулярное ТО, аварийный выезд 24/7, плановая модернизация. Ваш лифт в\u00a0надёжных руках.',
      's5.t': 'Модернизация',
      's5.d': 'Обновление существующих лифтов\u00a0— замена кабин, систем управления, дверей и\u00a0двигателей.',
      's6.t': 'Консультация',
      's6.d': 'Экспертная поддержка на\u00a0всех стадиях\u00a0— от\u00a0концепции до\u00a0ввода в\u00a0эксплуатацию.',

      /* Tech */
      'tech.num': '05 — Технологии',
      'tech.title': 'Лифты, которые думают\u00a0<em>наперёд.</em>',
      'tech.lead': 'Schindler\u00a0Ahead\u00a0— первая в\u00a0мире цифровая платформа для лифтов. Постоянный мониторинг, предиктивная диагностика и\u00a0связь с\u00a0сервисом в\u00a0режиме реального времени.',
      'tf1.t': 'Предиктивная аналитика',
      'tf1.d': 'Алгоритмы предсказывают необходимость обслуживания до\u00a0возникновения сбоя',
      'tf2.t': 'PORT Technology',
      'tf2.d': 'Персонализированный доступ и\u00a0оптимизация трафика пассажиров',
      'tf3.t': 'Энергоэффективность А++',
      'tf3.d': 'Регенеративные приводы возвращают до\u00a030% энергии в\u00a0сеть',

      /* Testimonial */
      'test.quote': 'Schindler — это\u00a0по-настоящему просторные лифты. Точность работы, плавность хода и\u00a0дизайн полностью соответствуют статусу Tashkent City.',
      'test.role': 'Заказчик · 2019',

      /* CTA / Contact */
      'cta.num': '06 — Контакты',
      'cta.title': 'Начнём ваш\u00a0<em>проект</em><br>вместе.',
      'cta.sub': 'Расскажите о\u00a0вашем здании\u00a0— мы\u00a0подберём оптимальную конфигурацию и\u00a0подготовим коммерческое предложение в\u00a0течение 48\u00a0часов.',
      'cta.l_name': 'Имя',
      'cta.l_co': 'Компания',
      'cta.l_tel': 'Телефон',
      'cta.l_mail': 'Email',
      'cta.l_proj': 'О\u00a0проекте',
      'cta.ph_name': 'Ваше имя',
      'cta.ph_co': 'Название компании',
      'cta.ph_tel': '+998 __ ___ __ __',
      'cta.ph_mail': 'email@company.uz',
      'cta.ph_proj': 'Тип объекта, количество этажей, особенности...',
      'cta.note': 'Нажимая кнопку, вы соглашаетесь с\u00a0обработкой персональных данных',
      'cta.submit': 'Отправить запрос',
      'cta.ph_lbl': 'Прямой звонок',
      'cta.em_lbl': 'Email',
      'cta.ad_lbl': 'Адрес',
      'cta.address': 'Ташкент · Узбекистан',

      /* Footer */
      'ft.tag': 'Эксклюзивный дистрибьютор',
      'ft.c1': 'Продукты',
      'ft.c1l4': 'Все модели',
      'ft.c2': 'Услуги',
      'ft.c2l1': 'Проектирование',
      'ft.c2l2': 'Монтаж',
      'ft.c2l3': 'Техобслуживание',
      'ft.c2l4': 'Модернизация',
      'ft.c3': 'Компания',
      'ft.c3l1': 'О нас',
      'ft.c3l2': 'Проекты',
      'ft.c3l3': 'Партнёры',
      'ft.c3l4': 'Лицензии',
      'ft.c4': 'Контакты',
      'ft.c4addr': 'Ташкент, Узбекистан',
      'ft.rights': 'Все права защищены.',
      'ft.privacy': 'Политика конфиденциальности',
      'ft.terms': 'Условия использования',

      /* Floating widget */
      'fl.title': 'Консультация',
      'fl.sub': 'Оставьте ваши контакты, и мы перезвоним вам в течение 15 минут.',
      'fl.l_name': 'Имя',
      'fl.l_tel': 'Телефон',
      'fl.l_topic': 'Интересует',
      'fl.o_lift': 'Лифты Schindler',
      'fl.o_esc': 'Эскалаторы',
      'fl.o_svc': 'Техническое обслуживание',
      'fl.o_mod': 'Модернизация',
      'fl.ph_name': 'Ваше имя',
      'fl.ph_tel': '+998 __ ___ __ __',
      'fl.submit': 'Отправить запрос',
      'fl.ok_h': 'Заявка отправлена',
      'fl.ok_p': 'Спасибо! Мы свяжемся с вами в течение 15 минут.',
      'fl.btn_aria': 'Консультация',
      'fl.btn_txt': 'Консультация',
    },

    /* ---- UZBEK ---- */
    uz: {
      'meta.title': "Schindler Uzbekiston — Shveytsariya sifatidagi premium liftlar va eskalatorlar",
      'meta.desc': "O'zbekistonda Schindler'ning eksklyuziv distribyutori. 1874 yildan beri jahon darajasidagi liftlar va eskalatorlarni ishlab chiqarish, sotish va texnik xizmat.",

      'nav.logo_sub': "UZBEKISTON · 1874 yildan",
      'nav.aria': 'Asosiy menyu',
      'nav.products': 'Mahsulotlar',
      'nav.projects': 'Loyihalar',
      'nav.services': 'Xizmatlar',
      'nav.about': 'Kompaniya haqida',
      'nav.contacts': 'Aloqa',
      'nav.cta': "Bog'lanish",
      'nav.burger_aria': 'Menyuni ochish',
      'nav.lang_aria': 'Tilni almashtirish',

      'hero.coords': 'Koordinatalar',
      'hero.city': 'Toshkent',
      'hero.eyebrow': "O'zbekistonda Schindler'ning eksklyuziv distribyutori",
      'hero.w1': 'Biz',
      'hero.w2': 'tashiymiz',
      'hero.w3': '1\u00a0milliard',
      'hero.w4': 'odamni',
      'hero.w5': 'har',
      'hero.w6': 'kuni.',
      'hero.desc': "Shveytsariya muhandisligi, mukammal xavfsizlik va\u00a0vertikal mobillikdagi texnologik yetakchilik — endi O'zbekistonning har bir asosiy binosida.",
      'hero.btn_explore': "Modellarni ko'rish",
      'hero.btn_quote': "Hisob so'rash",

      'about.num': '01 — Meros',
      'about.title': "Yuz ellik\u00a0yillik muhandislik\u00a0<em>aniqligi.</em>",
      'about.lead': "Schindler — Lyutsernda Robert Schindler tomonidan 1874\u00a0yilda asos solingan shveytsariya guruhi. Bugun\u00a0— dunyodagi liftlar va\u00a0eskalatorlarning ikki yirik ishlab chiqaruvchilaridan biri.",
      'about.p2': "O'zbekistonda bizning «Safety Elevators\u00a0and\u00a0Escalators» kompaniyamiz Schindler'ning ishlab chiqarish, sotish, o'rnatish va texnik xizmat ko'rsatish huquqiga ega eksklyuziv distribyutori hisoblanadi. Biz mamlakatning yetakchi ob'ektlarini — Hilton Tashkent City'dan Tashkent City va Dream City'gacha liftlar va eskalatorlar bilan jihozladik.",
      'about.link': "Kompaniyaning to'liq tarixi",
      'about.stat1': 'kishi kuniga tashiladi',
      'about.stat2': 'yillik muhandislik tarixi',
      'about.stat3': "mamlakatda mavjud",
      'about.stat4': "xodim dunyo bo'ylab",
      'counter.b': '\u00a0mlrd',
      'counter.m': '\u00a0mln',

      'prod.num': '02 — Mahsulotlar',
      'prod.title': "Har bir\u00a0<em>vazifa</em> uchun uch model.",
      'prod.sub': "Ko'p qavatli turar-joy binolaridan tortib baland minoralargacha va tijorat markazlarigacha\u00a0— Schindler har qanday arxitektura kontseptsiyasi uchun yechim taqdim etadi.",

      'p33.tag': 'Turar-joy segmenti',
      'p33.desc': "Turar-joy binolari uchun namunali lift. Energiya tejaydigan, shovqinsiz va har qanday interyerga moslashadigan. PORT texnologiyasi intuitiv navigatsiyani ta'minlaydi.",
      'p33.s1l': 'Yuklanma', 'p33.s1v': '1\u00a0000\u00a0kg gacha',
      'p33.s2l': 'Tezlik', 'p33.s2v': '1.0–1.6 m/s',
      'p33.s3l': 'Qavatlar', 'p33.s3v': '25 tagacha',
      'p33.link': "Model haqida batafsil",
      'p33.h1l': 'Tur', 'p33.h1v': "Yo'lovchi",
      'p33.h2l': 'Harakatlantiruvchi', 'p33.h2v': 'Reduktorsiz',
      'p33.h3l': 'Energiya sinfi', 'p33.h3v': 'A',
      'p33.h4l': 'Tizim', 'p33.h4v': 'PORT Technology',

      'p55.tag': 'Premium segment',
      'p55.desc': "Tijorat va\u00a0premium turar-joy binolari uchun moslashuvchan modulli yechim. Kabina interyer uchun cheksiz sozlash — shishadan va\u00a0zanglamaydigan po'latdan tortib tabiiy toshgacha.",
      'p55.s1l': 'Yuklanma', 'p55.s1v': '2\u00a0500\u00a0kg gacha',
      'p55.s2l': 'Tezlik', 'p55.s2v': '1.0–4.0 m/s',
      'p55.s3l': 'Qavatlar', 'p55.s3v': '60 tagacha',
      'p55.link': "Model haqida batafsil",
      'p55.h1l': 'Tur', 'p55.h1v': "Yo'lovchi / Yuk",
      'p55.h2l': 'Harakatlantiruvchi', 'p55.h2v': 'Reduktorsiz',
      'p55.h3l': 'Energiya sinfi', 'p55.h3v': 'A+',
      'p55.h4l': 'Sozlash', 'p55.h4v': 'Cheksiz',

      'p93.tag': 'Eskalatorlar',
      'p93.desc': "Savdo markazlari, aeroportlar va\u00a0transport tugunlari uchun ilg'or eskalotor. Uzluksiz ekspluatatsiya uchun energiya tejovchi harakatlantiruvchi va\u00a0intellektual xavfsizlik tizimlari.",
      'p93.s1l': 'Qiyalik burchagi', 'p93.s1v': '30° / 35°',
      'p93.s2l': 'Tezlik', 'p93.s2v': '0.5–0.65 m/s',
      'p93.s3l': "Ko'tarilish", 'p93.s3v': '12 m gacha',
      'p93.link': "Model haqida batafsil",
      'p93.h1l': 'Tur', 'p93.h1v': 'Eskalotor',
      'p93.h2l': 'Harakatlantiruvchi', 'p93.h2v': 'Energiya tejovchi',
      'p93.h3l': 'Xavfsizlik', 'p93.h3v': 'Intellektual',
      'p93.h4l': 'Rejim', 'p93.h4v': 'Uzluksiz',

      'calc.num': 'Konfigurator',
      'calc.title': "Lift <em>parametrlarini</em> tanlang",
      'calc.sub': "Kabina o'lchamlarini kiriting — kalkulyator yuklanma va sig'imni hisoblab chiqadi. Teskari hisob uchun ⇄ tugmasini bosing.",
      'calc.ll_in': "KABINA O'LCHAMLARI · KIRISH",
      'calc.ll_out': "KABINA O'LCHAMLARI · NATIJA",
      'calc.lr_out': 'XUSUSIYATLAR · NATIJA',
      'calc.lr_in': 'XUSUSIYATLAR · KIRISH',
      'calc.width': 'Kenglik',
      'calc.length': 'Uzunlik',
      'calc.kg': 'Yuklanma',
      'calc.pers': "Sig'im",
      'calc.mm': 'mm',
      'calc.kg_u': 'kg',
      'calc.ch': 'kishi',
      'calc.area': 'Kabina maydoni',
      'calc.model': 'Tavsiya etilgan model',
      'calc.swap': 'Almashtirish',
      'calc.area_unit': 'm²',

      'proj.num': '03 — Amalga oshirilgan loyihalar',
      'proj.title': "Muhandisligimiz\u00a0<em>ishlayotgan</em> binolar.",
      'pr.ht.tag': 'Mehmonxona · 5★',
      'pr.ht.desc': "O'zbekistondagi Hilton'ning flagship mehmonxonasi uchun Schindler 7000 yuqori tezlikli liftlar kompleksini o'rnatish.",
      'pr.ht.s1': 'lift',
      'pr.ht.s2': 'qavat',
      'pr.tc.tag': 'Biznes markazi',
      'pr.tc.desc': "Yangi avlod biznes-rayoni uchun keng premium liftlar.",
      'pr.dc.tag': 'Premium turar-joy',
      'pr.dc.desc': "Mamlakatning yirik quruvchilaridan biri bilan uzoq muddatli hamkorlik.",
      'pr.mb.tag': 'Rivojlantirish',
      'pr.mb.desc': "Quruvchining turar-joy majmualarini jihozlash bo'yicha strategik shartnoma.",
      'pr.ma.tag': 'Turar-joy majmuasi',
      'pr.ma.desc': "Toshkent markazidagi premium turar-joy majmuasiga uchta Schindler liftini o'rnatish.",
      'proj.cta': 'Barcha loyihalar',

      'svc.num': '04 — Xizmatlar',
      'svc.title': "Xizmat ko'rsatishning to'liq\u00a0<em>hayot davri.</em>",
      's1.t': 'Loyihalash',
      's1.d': "Optimal konfiguratsiyani hisoblash, arxitektura vazifasiga mos modellarni tanlash, BIM integratsiyasi.",
      's2.t': 'Ishlab chiqarish',
      's2.d': "O'zbekistonda shveytsariya sifat standartlari bo'yicha komponentlar va kabinalarni mahalliy ishlab chiqarish.",
      's3.t': "O'rnatish",
      's3.d': "Barcha xavfsizlik me'yorlariga rioya qilgan holda sertifikatlangan muhandislar tomonidan professional o'rnatish.",
      's4.t': 'Texnik xizmat',
      's4.d': "Muntazam TO, 24/7 favqulodda chiqish, rejalashtirilgan modernizatsiya. Liftingiz ishonchli qo'llarda.",
      's5.t': 'Modernizatsiya',
      's5.d': "Mavjud liftlarni yangilash\u00a0— kabinalar, boshqaruv tizimlari, eshiklar va\u00a0dvigatellarni almashtirish.",
      's6.t': 'Konsultatsiya',
      's6.d': "Kontseptsiyadan ekspluatatsiyaga topshirishgacha barcha bosqichlarda ekspert qo'llab-quvvatlash.",

      'tech.num': '05 — Texnologiyalar',
      'tech.title': "Oldinga\u00a0<em>o'ylaydigan</em> liftlar.",
      'tech.lead': "Schindler\u00a0Ahead\u00a0— dunyodagi birinchi liftlar uchun raqamli platforma. Doimiy monitoring, prognozli diagnostika va real vaqtda xizmat bilan aloqa.",
      'tf1.t': "Prognozli tahlil",
      'tf1.d': "Algoritmlar nosozlik yuzaga kelgunga qadar xizmat ko'rsatish zaruriyatini bashorat qiladi",
      'tf2.t': 'PORT Technology',
      'tf2.d': "Shaxsiylashtirilgan kirish va yo'lovchilar trafigini optimallashtirish",
      'tf3.t': "Energiya samaradorligi А++",
      'tf3.d': "Regenerativ harakatlantiruvchilar tarmoqqa 30% gacha energiya qaytaradi",

      'test.quote': "Schindler — bu\u00a0haqiqatan ham keng liftlar. Ishlash aniqligi, yurish silliqlig'i va\u00a0dizayn Tashkent City maqomiga to'liq javob beradi.",
      'test.role': "Buyurtmachi · 2019",

      'cta.num': '06 — Aloqa',
      'cta.title': "Loyihangizni\u00a0<em>birga</em><br>boshlaymiz.",
      'cta.sub': "Binoingiz haqida aytib bering\u00a0— biz optimal konfiguratsiyani tanlab, 48\u00a0soat ichida tijorat taklifini tayyorlaymiz.",
      'cta.l_name': 'Ism',
      'cta.l_co': 'Kompaniya',
      'cta.l_tel': 'Telefon',
      'cta.l_mail': 'Email',
      'cta.l_proj': "Loyiha haqida",
      'cta.ph_name': 'Ismingiz',
      'cta.ph_co': 'Kompaniya nomi',
      'cta.ph_tel': '+998 __ ___ __ __',
      'cta.ph_mail': 'email@company.uz',
      'cta.ph_proj': "Ob'ekt turi, qavatlar soni, xususiyatlar...",
      'cta.note': "Tugmani bosish orqali shaxsiy ma'lumotlarni qayta ishlashga rozisiz",
      'cta.submit': "So'rov yuborish",
      'cta.ph_lbl': "To'g'ridan-to'g'ri qo'ng'iroq",
      'cta.em_lbl': 'Email',
      'cta.ad_lbl': 'Manzil',
      'cta.address': "Toshkent · O'zbekiston",

      'ft.tag': 'Eksklyuziv distribyutor',
      'ft.c1': 'Mahsulotlar',
      'ft.c1l4': 'Barcha modellar',
      'ft.c2': 'Xizmatlar',
      'ft.c2l1': 'Loyihalash',
      'ft.c2l2': "O'rnatish",
      'ft.c2l3': 'Texnik xizmat',
      'ft.c2l4': 'Modernizatsiya',
      'ft.c3': 'Kompaniya',
      'ft.c3l1': 'Biz haqimizda',
      'ft.c3l2': 'Loyihalar',
      'ft.c3l3': 'Hamkorlar',
      'ft.c3l4': 'Litsenziyalar',
      'ft.c4': 'Aloqa',
      'ft.c4addr': "Toshkent, O'zbekiston",
      'ft.rights': 'Barcha huquqlar himoyalangan.',
      'ft.privacy': "Maxfiylik siyosati",
      'ft.terms': "Foydalanish shartlari",

      'fl.title': 'Konsultatsiya',
      'fl.sub': "Kontaktlaringizni qoldiring, biz 15 daqiqa ichida sizga qo'ng'iroq qilamiz.",
      'fl.l_name': 'Ism',
      'fl.l_tel': 'Telefon',
      'fl.l_topic': 'Qiziqtiradi',
      'fl.o_lift': 'Schindler liftlari',
      'fl.o_esc': 'Eskalatorlar',
      'fl.o_svc': 'Texnik xizmat',
      'fl.o_mod': 'Modernizatsiya',
      'fl.ph_name': 'Ismingiz',
      'fl.ph_tel': '+998 __ ___ __ __',
      'fl.submit': "So'rov yuborish",
      'fl.ok_h': "So'rov yuborildi",
      'fl.ok_p': "Rahmat! Biz 15 daqiqa ichida siz bilan bog'lanamiz.",
      'fl.btn_aria': 'Konsultatsiya',
      'fl.btn_txt': 'Konsultatsiya',
    },

    /* ---- ENGLISH ---- */
    en: {
      'meta.title': 'Schindler Uzbekistan — Premium Swiss-Quality Elevators & Escalators',
      'meta.desc': 'Exclusive Schindler distributor in Uzbekistan. Manufacturing, sales and maintenance of world-class elevators and escalators since 1874.',

      'nav.logo_sub': 'UZBEKISTAN · Since 1874',
      'nav.aria': 'Main navigation',
      'nav.products': 'Products',
      'nav.projects': 'Projects',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contacts': 'Contacts',
      'nav.cta': 'Contact us',
      'nav.burger_aria': 'Open menu',
      'nav.lang_aria': 'Switch language',

      'hero.coords': 'Coordinates',
      'hero.city': 'Tashkent',
      'hero.eyebrow': 'Exclusive Schindler Distributor in Uzbekistan',
      'hero.w1': 'We',
      'hero.w2': 'carry',
      'hero.w3': '1\u00a0billion',
      'hero.w4': 'people',
      'hero.w5': 'every',
      'hero.w6': 'day.',
      'hero.desc': 'Swiss engineering, flawless safety and technological leadership in vertical mobility — now in every landmark building of Uzbekistan.',
      'hero.btn_explore': 'Explore models',
      'hero.btn_quote': 'Request a quote',

      'about.num': '01 — Heritage',
      'about.title': 'One hundred and fifty\u00a0years of engineering\u00a0<em>precision.</em>',
      'about.lead': 'Schindler is a Swiss group founded by Robert Schindler in\u00a01874 in\u00a0Lucerne. Today it is one of the two largest manufacturers of elevators and escalators in\u00a0the world.',
      'about.p2': 'In\u00a0Uzbekistan, our company "Safety Elevators\u00a0and\u00a0Escalators" is the exclusive Schindler distributor with manufacturing, sales, installation and maintenance rights. We have equipped landmark buildings across the country — from Hilton Tashkent City to\u00a0Tashkent City and Dream City.',
      'about.link': 'Full company history',
      'about.stat1': 'people carried daily',
      'about.stat2': 'years of engineering history',
      'about.stat3': 'countries of presence',
      'about.stat4': 'employees worldwide',
      'counter.b': '\u00a0B',
      'counter.m': '\u00a0M',

      'prod.num': '02 — Products',
      'prod.title': 'Three models for every\u00a0<em>task.</em>',
      'prod.sub': 'From residential apartments to high-rise towers and commercial centres\u00a0— Schindler offers a solution for any architectural concept.',

      'p33.tag': 'Residential segment',
      'p33.desc': 'The benchmark elevator for residential buildings. Energy-efficient, silent and adaptable to any interior. PORT technology delivers intuitive navigation.',
      'p33.s1l': 'Capacity', 'p33.s1v': 'up to 1,000\u00a0kg',
      'p33.s2l': 'Speed', 'p33.s2v': '1.0–1.6 m/s',
      'p33.s3l': 'Floors', 'p33.s3v': 'up to 25',
      'p33.link': 'Learn more about the model',
      'p33.h1l': 'Type', 'p33.h1v': 'Passenger',
      'p33.h2l': 'Drive', 'p33.h2v': 'Gearless',
      'p33.h3l': 'Energy class', 'p33.h3v': 'A',
      'p33.h4l': 'System', 'p33.h4v': 'PORT Technology',

      'p55.tag': 'Premium segment',
      'p55.desc': 'A flexible modular solution for commercial and premium residential buildings. Unlimited cabin interior customisation — from glass and stainless steel to natural stone.',
      'p55.s1l': 'Capacity', 'p55.s1v': 'up to 2,500\u00a0kg',
      'p55.s2l': 'Speed', 'p55.s2v': '1.0–4.0 m/s',
      'p55.s3l': 'Floors', 'p55.s3v': 'up to 60',
      'p55.link': 'Learn more about the model',
      'p55.h1l': 'Type', 'p55.h1v': 'Passenger / Freight',
      'p55.h2l': 'Drive', 'p55.h2v': 'Gearless',
      'p55.h3l': 'Energy class', 'p55.h3v': 'A+',
      'p55.h4l': 'Customisation', 'p55.h4v': 'Unlimited',

      'p93.tag': 'Escalators',
      'p93.desc': 'Advanced escalator for shopping centres, airports and transport hubs. Energy-saving drive and intelligent safety systems for continuous operation.',
      'p93.s1l': 'Inclination', 'p93.s1v': '30° / 35°',
      'p93.s2l': 'Speed', 'p93.s2v': '0.5–0.65 m/s',
      'p93.s3l': 'Rise', 'p93.s3v': 'up to 12 m',
      'p93.link': 'Learn more about the model',
      'p93.h1l': 'Type', 'p93.h1v': 'Escalator',
      'p93.h2l': 'Drive', 'p93.h2v': 'Energy-saving',
      'p93.h3l': 'Safety', 'p93.h3v': 'Intelligent',
      'p93.h4l': 'Mode', 'p93.h4v': 'Continuous',

      'calc.num': 'Configurator',
      'calc.title': 'Select <em>parameters</em> for your elevator',
      'calc.sub': 'Enter the cabin dimensions — the calculator will determine load capacity and occupancy. Press ⇄ for reverse calculation.',
      'calc.ll_in': 'CABIN DIMENSIONS · INPUT',
      'calc.ll_out': 'CABIN DIMENSIONS · RESULT',
      'calc.lr_out': 'SPECIFICATIONS · RESULT',
      'calc.lr_in': 'SPECIFICATIONS · INPUT',
      'calc.width': 'Width',
      'calc.length': 'Length',
      'calc.kg': 'Load capacity',
      'calc.pers': 'Occupancy',
      'calc.mm': 'mm',
      'calc.kg_u': 'kg',
      'calc.ch': 'pers.',
      'calc.area': 'Cabin area',
      'calc.model': 'Recommended model',
      'calc.swap': 'Swap mode',
      'calc.area_unit': 'm²',

      'proj.num': '03 — Completed projects',
      'proj.title': 'Buildings powered by\u00a0<em>our engineering.</em>',
      'pr.ht.tag': 'Hotel · 5★',
      'pr.ht.desc': 'Installation of a high-speed Schindler 7000 elevator complex for the flagship Hilton hotel in Uzbekistan.',
      'pr.ht.s1': 'elevators',
      'pr.ht.s2': 'floors',
      'pr.tc.tag': 'Business centre',
      'pr.tc.desc': "Spacious premium elevators for a next-generation business district.",
      'pr.dc.tag': 'Premium residential',
      'pr.dc.desc': "Long-term partnership with one of the country's largest developers.",
      'pr.mb.tag': 'Development',
      'pr.mb.desc': 'Strategic contract to equip residential complexes of the developer.',
      'pr.ma.tag': 'Residential complex',
      'pr.ma.desc': 'Installation of three Schindler elevators in a premium residential complex in central Tashkent.',
      'proj.cta': 'All projects',

      'svc.num': '04 — Services',
      'svc.title': 'Full lifecycle\u00a0<em>service.</em>',
      's1.t': 'Engineering & Design',
      's1.d': 'Optimal configuration calculation, model selection for your architectural brief, BIM integration.',
      's2.t': 'Manufacturing',
      's2.d': 'Localised manufacturing of components and cabins in Uzbekistan to Swiss quality standards.',
      's3.t': 'Installation',
      's3.d': 'Professional installation by certified engineers in full compliance with all safety regulations.',
      's4.t': 'Maintenance',
      's4.d': 'Scheduled servicing, emergency call-out 24/7, planned upgrades. Your elevator is in safe hands.',
      's5.t': 'Modernisation',
      's5.d': 'Upgrading existing elevators — replacement of cabins, control systems, doors and motors.',
      's6.t': 'Consulting',
      's6.d': 'Expert support at every stage — from concept to commissioning.',

      'tech.num': '05 — Technology',
      'tech.title': 'Elevators that think\u00a0<em>ahead.</em>',
      'tech.lead': "Schindler\u00a0Ahead — the world's first digital platform for elevators. Continuous monitoring, predictive diagnostics and real-time service connectivity.",
      'tf1.t': 'Predictive analytics',
      'tf1.d': 'Algorithms anticipate the need for maintenance before a fault occurs',
      'tf2.t': 'PORT Technology',
      'tf2.d': 'Personalised access and passenger traffic optimisation',
      'tf3.t': 'Energy efficiency A++',
      'tf3.d': 'Regenerative drives return up to 30% of energy back to the grid',

      'test.quote': 'Schindler provides truly spacious elevators. The precision, smooth ride and design fully match the Tashkent City standard.',
      'test.role': 'Client · 2019',

      'cta.num': '06 — Contacts',
      'cta.title': "Let's start your\u00a0<em>project</em><br>together.",
      'cta.sub': 'Tell us about your building — we will find the optimal configuration and prepare a commercial proposal within 48\u00a0hours.',
      'cta.l_name': 'Name',
      'cta.l_co': 'Company',
      'cta.l_tel': 'Phone',
      'cta.l_mail': 'Email',
      'cta.l_proj': 'About the project',
      'cta.ph_name': 'Your name',
      'cta.ph_co': 'Company name',
      'cta.ph_tel': '+998 __ ___ __ __',
      'cta.ph_mail': 'email@company.uz',
      'cta.ph_proj': 'Building type, number of floors, specifics...',
      'cta.note': 'By clicking the button you consent to the processing of personal data',
      'cta.submit': 'Send request',
      'cta.ph_lbl': 'Direct call',
      'cta.em_lbl': 'Email',
      'cta.ad_lbl': 'Address',
      'cta.address': 'Tashkent · Uzbekistan',

      'ft.tag': 'Exclusive distributor',
      'ft.c1': 'Products',
      'ft.c1l4': 'All models',
      'ft.c2': 'Services',
      'ft.c2l1': 'Engineering',
      'ft.c2l2': 'Installation',
      'ft.c2l3': 'Maintenance',
      'ft.c2l4': 'Modernisation',
      'ft.c3': 'Company',
      'ft.c3l1': 'About us',
      'ft.c3l2': 'Projects',
      'ft.c3l3': 'Partners',
      'ft.c3l4': 'Licences',
      'ft.c4': 'Contacts',
      'ft.c4addr': 'Tashkent, Uzbekistan',
      'ft.rights': 'All rights reserved.',
      'ft.privacy': 'Privacy policy',
      'ft.terms': 'Terms of use',

      'fl.title': 'Consultation',
      'fl.sub': 'Leave your contact details and we will call you back within 15 minutes.',
      'fl.l_name': 'Name',
      'fl.l_tel': 'Phone',
      'fl.l_topic': 'Interested in',
      'fl.o_lift': 'Schindler elevators',
      'fl.o_esc': 'Escalators',
      'fl.o_svc': 'Maintenance',
      'fl.o_mod': 'Modernisation',
      'fl.ph_name': 'Your name',
      'fl.ph_tel': '+998 __ ___ __ __',
      'fl.submit': 'Send request',
      'fl.ok_h': 'Request sent',
      'fl.ok_p': 'Thank you! We will contact you within 15 minutes.',
      'fl.btn_aria': 'Consultation',
      'fl.btn_txt': 'Consultation',
    }
  };

  /* ================================================================
     APPLY LANGUAGE
     ================================================================ */
  let currentLang = localStorage.getItem('schindler_lang') || 'ru';

  const applyLang = (lang) => {
    if (!T[lang]) return;
    const t = T[lang];
    currentLang = lang;

    // html lang attr
    document.documentElement.lang = lang;

    // <title> and meta description
    document.title = t['meta.title'] || document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t['meta.desc']) metaDesc.content = t['meta.desc'];

    // textContent replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // innerHTML replacements (for elements with <em>, <br> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // placeholder replacements
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // aria-label replacements
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    // Update nav aria on the <nav> element
    const navEl = document.querySelector('nav.nav-links');
    if (navEl && t['nav.aria']) navEl.setAttribute('aria-label', t['nav.aria']);

    // Update calculator area unit display
    const calcArea = document.getElementById('calc-area');
    if (calcArea) {
      const currentVal = calcArea.textContent.replace(/[^\d.]/g, '');
      if (currentVal) calcArea.textContent = currentVal + ' ' + (t['calc.area_unit'] || 'м²');
    }

    // Update constructor panel labels based on current swap mode
    updateConstructorLabels();

    // Re-format counter values that already animated (for billion/million suffixes)
    document.querySelectorAll('.stat[data-counter]').forEach(el => {
      const span = el.querySelector('.stat-num span');
      if (!span) return;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      const txt = span.textContent;
      // Only reformat if counter already shows a non-zero value
      if (txt && txt !== '0') {
        span.textContent = formatNum(target, target) + suffix;
      }
    });

    // Save preference
    localStorage.setItem('schindler_lang', lang);
  };

  /* ================================================================
     LOADER
     ================================================================ */
  const loader = document.getElementById('loader');
  const hideLoader = () => {
    setTimeout(() => loader && loader.classList.add('hidden'), 1700);
  };
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader);

  /* ================================================================
     YEAR
     ================================================================ */
  document.querySelectorAll('#year').forEach(yr => {
    yr.textContent = new Date().getFullYear();
  });

  /* ================================================================
     LOCAL TIME (Tashkent)
     ================================================================ */
  const timeEl = document.getElementById('local-time');
  if (timeEl) {
    const updateTime = () => {
      const now = new Date();
      const tashkent = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Tashkent',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
      }).format(now);
      timeEl.textContent = tashkent + ' UTC+5';
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  /* ================================================================
     CUSTOM CURSOR
     ================================================================ */
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursor-dot');
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (cursor && cursorDot && isFinePointer) {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursorDot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    const animate = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };
    animate();

    const interactiveSel = 'a, button, .product, .service-card, .stat, input, textarea, .project';
    document.querySelectorAll(interactiveSel).forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    });
  }

  /* ================================================================
     NAV SCROLL STATE
     ================================================================ */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) {
      if (y > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ================================================================
     REVEAL ON SCROLL
     ================================================================ */
  const revealEls = [
    ...document.querySelectorAll('.section-head'),
    ...document.querySelectorAll('.intro-text'),
    ...document.querySelectorAll('.stats'),
    ...document.querySelectorAll('.product'),
    ...document.querySelectorAll('.project'),
    ...document.querySelectorAll('.service-card'),
    ...document.querySelectorAll('.tech-content'),
    ...document.querySelectorAll('.tech-visual'),
    ...document.querySelectorAll('.testimonial .quote, .testimonial .quote-author, .quote-mark'),
    ...document.querySelectorAll('.cta-inner > *')
  ];
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 6) * 0.05}s`;
  });

  /* ================================================================
     COUNTER FORMATTER
     ================================================================ */
  const formatNum = (n, target) => {
    const t = T[currentLang] || T.ru;
    if (target >= 1000000000) return (n / 1000000000).toFixed(1).replace(/\.0$/, '') + (t['counter.b'] || ' млрд');
    if (target >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + (t['counter.m'] || ' млн');
    if (target >= 10000) return Math.round(n / 1000) + 'K';
    return Math.floor(n).toLocaleString(currentLang === 'ru' ? 'ru-RU' : 'en-US');
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    revealEls.forEach(el => io.observe(el));

    /* Animated counters */
    const counters = document.querySelectorAll('.stat[data-counter]');
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || '';
        const span = el.querySelector('.stat-num span');
        const duration = 2000;
        const start = performance.now();
        const tick = (now) => {
          const t2 = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t2, 3);
          const v = target * eased;
          span.textContent = formatNum(v, target) + suffix;
          if (t2 < 1) requestAnimationFrame(tick);
          else span.textContent = formatNum(target, target) + suffix;
        };
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => counterIO.observe(c));

    /* Floor counter (hero) */
    const floorNum = document.getElementById('floor-num');
    if (floorNum) {
      const floors = [42, 38, 47, 52, 33, 41, 56, 23, 60];
      let fi = 0;
      setInterval(() => {
        fi = (fi + 1) % floors.length;
        floorNum.textContent = floors[fi];
      }, 2400);
    }
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ================================================================
     SMOOTH SCROLL
     ================================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ================================================================
     MAGNETIC HOVER
     ================================================================ */
  if (isFinePointer) {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) * 0.15;
        const dy = (e.clientY - r.top - r.height / 2) * 0.15;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ================================================================
     LANGUAGE TOGGLE
     ================================================================ */
  const langBtn = document.querySelector('.nav-lang');
  if (langBtn) {
    // Set initial active state
    const setActiveLangSpan = (lang) => {
      langBtn.querySelectorAll('span').forEach(s => {
        s.classList.toggle('active', s.textContent.trim().toLowerCase() === lang.toLowerCase());
      });
    };

    langBtn.addEventListener('click', (e) => {
      const span = e.target.closest('span');
      if (!span) return;
      const chosen = span.textContent.trim().toLowerCase();
      const langMap = { ru: 'ru', uz: 'uz', en: 'en' };
      const newLang = langMap[chosen];
      if (!newLang) return;
      setActiveLangSpan(chosen);
      applyLang(newLang);
    });

    // Apply saved / default language on load
    setActiveLangSpan(currentLang);
  }

  /* ================================================================
     ELEVATOR CONSTRUCTOR / CALCULATOR
     ================================================================ */
  const calcWidth = document.getElementById('calc-width');
  const calcLength = document.getElementById('calc-length');
  const calcKg = document.getElementById('calc-kg');
  const calcPersons = document.getElementById('calc-persons');
  const calcAreaEl = document.getElementById('calc-area');
  const calcModelEl = document.getElementById('calc-model');
  const calcSwap = document.getElementById('calc-swap');
  const labelLeft = document.getElementById('label-left');
  const labelRight = document.getElementById('label-right');

  let calcMode = 'dimensions'; // 'dimensions' or 'capacity'

  const KG_PER_M2 = 400 / 2.25;
  const KG_PER_PERSON = 80;

  const updateConstructorLabels = () => {
    const t = T[currentLang] || T.ru;
    if (!labelLeft || !labelRight) return;
    if (calcMode === 'dimensions') {
      if (t['calc.ll_in']) labelLeft.textContent = t['calc.ll_in'];
      if (t['calc.lr_out']) labelRight.textContent = t['calc.lr_out'];
    } else {
      if (t['calc.ll_out']) labelLeft.textContent = t['calc.ll_out'];
      if (t['calc.lr_in']) labelRight.textContent = t['calc.lr_in'];
    }
    if (calcSwap && t['calc.swap']) calcSwap.setAttribute('aria-label', t['calc.swap']);
  };

  if (calcWidth && calcLength && calcKg && calcPersons) {
    const calculate = () => {
      const t = T[currentLang] || T.ru;
      if (calcMode === 'dimensions') {
        const w = parseFloat(calcWidth.value) || 0;
        const l = parseFloat(calcLength.value) || 0;
        const areaM2 = (w * l) / 1000000;
        const kg = Math.round(areaM2 * KG_PER_M2 / 10) * 10;
        const persons = Math.floor(kg / KG_PER_PERSON);
        calcKg.value = kg;
        calcPersons.value = persons;
        if (calcAreaEl) calcAreaEl.textContent = areaM2.toFixed(2) + ' ' + (t['calc.area_unit'] || 'м²');
        updateModel(kg);
      } else {
        const kg = parseFloat(calcKg.value) || 0;
        const areaM2 = kg / KG_PER_M2;
        const side = Math.round(Math.sqrt(areaM2) * 1000 / 50) * 50;
        calcWidth.value = side;
        calcLength.value = side;
        const persons = Math.floor(kg / KG_PER_PERSON);
        if (document.activeElement !== calcPersons) calcPersons.value = persons;
        if (calcAreaEl) calcAreaEl.textContent = areaM2.toFixed(2) + ' ' + (t['calc.area_unit'] || 'м²');
        updateModel(kg);
      }
    };

    const updateModel = (kg) => {
      if (!calcModelEl) return;
      if (kg <= 450) calcModelEl.textContent = 'Schindler 1000 / 3300';
      else if (kg <= 1150) calcModelEl.textContent = 'Schindler 5500';
      else calcModelEl.textContent = 'Schindler 7000';
    };

    const handlePersonChange = () => {
      if (calcMode === 'capacity') {
        const p = parseFloat(calcPersons.value) || 0;
        calcKg.value = p * KG_PER_PERSON;
        calculate();
      }
    };

    calcWidth.addEventListener('input', calculate);
    calcLength.addEventListener('input', calculate);
    calcKg.addEventListener('input', calculate);
    calcPersons.addEventListener('input', handlePersonChange);

    if (calcSwap) {
      calcSwap.addEventListener('click', () => {
        calcMode = calcMode === 'dimensions' ? 'capacity' : 'dimensions';
        calcSwap.classList.toggle('swapped', calcMode === 'capacity');

        const inputsLeft = [calcWidth, calcLength];
        const inputsRight = [calcKg, calcPersons];

        if (calcMode === 'capacity') {
          inputsLeft.forEach(el => { el.readOnly = true; el.tabIndex = -1; });
          inputsRight.forEach(el => { el.readOnly = false; el.tabIndex = 0; });
        } else {
          inputsLeft.forEach(el => { el.readOnly = false; el.tabIndex = 0; });
          inputsRight.forEach(el => { el.readOnly = true; el.tabIndex = -1; });
        }
        updateConstructorLabels();
        calculate();
      });
    }

    updateConstructorLabels();
    calculate();
  }

  /* ================================================================
     FLOATING CONSULTATION CTA
     ================================================================ */
  const floatingCtaContainer = document.getElementById('floating-cta-container');
  const floatingCta = document.getElementById('floating-cta');
  const footerEl = document.querySelector('footer');
  const floatingPanelForm = document.getElementById('floating-panel-form');
  const floatingSuccess = document.getElementById('floating-panel-success');

  if (floatingCtaContainer && footerEl) {
    const checkCtaVisibility = () => {
      const footerRect = footerEl.getBoundingClientRect();
      if (window.scrollY > window.innerHeight * 0.5 && footerRect.top > window.innerHeight) {
        floatingCtaContainer.classList.add('visible');
      } else {
        floatingCtaContainer.classList.remove('visible');
        floatingCtaContainer.classList.remove('expanded');
      }
    };
    window.addEventListener('scroll', checkCtaVisibility, { passive: true });
    checkCtaVisibility();
  }

  if (floatingCta && floatingCtaContainer) {
    floatingCta.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = floatingCtaContainer.classList.toggle('expanded');
      if (isExpanded) {
        if (floatingSuccess) floatingSuccess.style.display = 'none';
        if (floatingPanelForm) {
          floatingPanelForm.style.display = 'flex';
          floatingPanelForm.style.opacity = '1';
        }
        setTimeout(() => {
          const nameInput = document.getElementById('float-name');
          if (nameInput) nameInput.focus();
        }, 400);
      }
    });

    document.addEventListener('click', (e) => {
      if (!floatingCtaContainer.contains(e.target)) {
        floatingCtaContainer.classList.remove('expanded');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        floatingCtaContainer.classList.remove('expanded');
      }
    });
  }

  if (floatingPanelForm) {
    floatingPanelForm.addEventListener('submit', (e) => {
      e.preventDefault();
      floatingPanelForm.style.opacity = '0';
      setTimeout(() => {
        floatingPanelForm.style.display = 'none';
        floatingPanelForm.style.opacity = '1';
        if (floatingSuccess) {
          floatingSuccess.style.display = 'flex';
          floatingSuccess.style.opacity = '0';
          floatingSuccess.offsetHeight;
          floatingSuccess.style.opacity = '1';
        }
      }, 300);

      setTimeout(() => {
        if (floatingCtaContainer) {
          floatingCtaContainer.classList.remove('expanded');
        }
      }, 3800);
    });
  }

  /* ================================================================
     INIT: apply language on page load
     ================================================================ */
  applyLang(currentLang);

})();


/* ================================================================
   FORM HANDLER (global — called from onsubmit)
   ================================================================ */
window.handleFormSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');

  if (btn) {
    btn.disabled = true;
    btn.querySelectorAll('.btn-text').forEach(t => { t.textContent = 'Отправка...'; });
  }

  const data = new FormData(form);
  const payload = {};
  data.forEach((value, key) => { payload[key] = value; });

  fetch('https://formspree.io/f/mjkyqkzj', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  })
  .then(r => { if (r.ok) return r.json(); throw new Error('Formspree error'); })
  .then(() => showFormSuccess(form))
  .catch(() => showFormSuccess(form));
};

function showFormSuccess(form) {
  form.innerHTML = `
    <div style="text-align:center;padding:40px 0;">
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="width:64px;height:64px;margin:0 auto 24px;display:block;">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
      <h3 style="font-family:var(--font-display);font-size:28px;font-weight:300;color:var(--ink);margin-bottom:12px;">Спасибо!</h3>
      <p style="color:var(--ink-2);font-size:16px;line-height:1.5;">Ваша заявка отправлена.<br>Мы свяжемся с вами в ближайшее время.</p>
    </div>
  `;
}

