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
      'pdf.open': 'Открыть в новой вкладке', 'pdf.download': 'Скачать PDF',
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
      'pr.pt.tag': 'Жилой комплекс', 'pr.pt.desc': 'Современные надежные лифты для высотного жилого комплекса.',
      'proj.cta': 'Все проекты',
      'proj.prev': 'Предыдущий проект', 'proj.next': 'Следующий проект',
      'partners.eyebrow': 'Партнёры', 'partners.title': 'С кем мы строим вертикальную мобильность',
      'svc.num': '04 — Услуги',
      'svc.title': 'Полный жизненный цикл <em>обслуживания.</em>',
      's1.t': 'Проектирование', 's1.d': 'Расчёт конфигурации, BIM-интеграция.',
      's2.t': 'Запасные части и склад', 's2.d': 'Safety Elevator имеет склад запасных частей для лифтов, которые дают возможность оперативно заменить запчасти при условии поломки.',
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
      'pdf.open': 'Yangi oynada ochish', 'pdf.download': 'PDF yuklab olish',
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
      'pr.ht.tag': 'Mehmonxona · 5★', 'pr.ht.desc': 'Hilton uchun Schindler 7000 yuqori tezlikdagi liftlarini o\'rnatish.',
      'pr.ht.s1': 'lift', 'pr.ht.s2': 'qavat',
      'pr.tc.tag': 'Biznes markazi', 'pr.tc.desc': 'Biznes hududi uchun premium liftlar.',
      'pr.dc.tag': 'Premium turar-joy', 'pr.dc.desc': 'Dream City bilan uzoq muddatli hamkorlik.',
      'pr.mb.tag': 'Development', 'pr.mb.desc': 'Murad Buildings turar-joy majmualarini jihozlash.',
      'pr.pt.tag': 'Turar-joy majmuasi', 'pr.pt.desc': 'Ko\'p qavatli turar-joy majmuasi uchun zamonaviy va ishonchli liftlar.',
      'proj.cta': 'Barcha loyihalar',
      'proj.prev': 'Oldingi loyiha', 'proj.next': 'Keyingi loyiha',
      'partners.eyebrow': 'Hamkorlar', 'partners.title': 'Vertikal harakatchanlikni biz bilan quruvchilar',
      'svc.num': '04 — Xizmatlar',
      'svc.title': 'To\'liq xizmat ko\'rsatish <em>tsikli.</em>',
      's1.t': 'Loyihalash', 's1.d': 'Konfiguratsiyani hisoblash, BIM-integratsiya.',
      's2.t': 'Ehtiyot qismlar va ombor', 's2.d': 'Safety Elevator liftlar uchun ehtiyot qismlar omboriga ega, bu esa nosozlik yuz berganda ehtiyot qismlarni tezda almashtirish imkonini beradi.',
      's3.t': 'Montaj', 's3.d': 'Sertifikatlangan muhandislar tomonidan professional o\'rnatish.',
      's4.t': 'Texnik xizmat ko\'rsatish', 's4.d': 'Muntazam texnik xizmat ko\'rsatish, 24/7 avariya holatlarida chiqish.',
      's5.t': 'Modernizatsiya', 's5.d': 'Kabinalar, boshqaruv tizimlari va dvigatellarni yangilash.',
      's6.t': 'Konsultatsiya', 's6.d': 'Barcha bosqichlarda ekspert yordami.',
      'tech.num': '05 — Texnologiyalar',
      'tech.title': 'Oldindan o\'ylaydigan <em>liftlar.</em>',
      'cta.num': '06 — Kontaktlar',
      'cta.title': 'Loyihangizni birga <em>boshlaymiz.</em>',
      'ft.tag': 'Eksklyuziv distribyutor',
      'ft.rights': 'Barcha huquqlar himoyalangan.',
      'fl.title': 'Konsultatsiya', 'fl.ok_h': 'Ariza yuborildi'
    },
    en: {
      'about.p2': 'In Uzbekistan, our company "Safety Elevators and Escalators" is the exclusive distributor of Schindler with the right to manufacture, sell, install and service the equipment. We have equipped landmark buildings across the country with elevators and escalators — from Hilton Tashkent City to Tashkent City and Dream City.',
      'calc.area': 'Cabin area', 'calc.ch': 'ppl', 'calc.kg': 'Load capacity', 'calc.kg_u': 'kg',
      'calc.length': 'Length', 'calc.ll_in': 'CABIN DIMENSIONS · INPUT', 'calc.lr_out': 'SPECIFICATIONS · RESULT',
      'calc.mm': 'mm', 'calc.model': 'Recommended model', 'calc.pers': 'Capacity', 'calc.swap': 'Swap', 'calc.width': 'Width',
      'cta.ad_lbl': 'Address', 'cta.address': 'Tashkent · Uzbekistan', 'cta.em_lbl': 'Email',
      'cta.l_co': 'Company', 'cta.l_mail': 'Email', 'cta.l_name': 'Name', 'cta.l_proj': 'About the project', 'cta.l_tel': 'Phone',
      'cta.note': 'By clicking the button, you agree to the processing of your data',
      'cta.ph_co': 'Company name', 'cta.ph_lbl': 'Direct call', 'cta.ph_mail': 'email@company.uz',
      'cta.ph_name': 'Your name', 'cta.ph_proj': 'Building, number of floors...', 'cta.ph_tel': '+998 __ ___ __ __',
      'cta.sub': 'Tell us about your building — we will prepare a proposal within 48 hours.', 'cta.submit': 'Send request',
      'fl.btn_aria': 'Consultation', 'fl.btn_txt': 'Consultation', 'fl.l_name': 'Name', 'fl.l_tel': 'Phone', 'fl.l_topic': 'Interested in',
      'fl.o_esc': 'Escalators', 'fl.o_lift': 'Schindler elevators', 'fl.o_mod': 'Modernization', 'fl.o_svc': 'Maintenance',
      'fl.ok_p': 'We will contact you within 15 minutes.', 'fl.ph_name': 'Your name', 'fl.ph_tel': '+998 __ ___ __ __',
      'fl.sub': 'We will call you back within 15 minutes.', 'fl.submit': 'Send request',
      'ft.c1': 'Products', 'ft.c1l4': 'All models', 'ft.c2': 'Services', 'ft.c2l1': 'Engineering', 'ft.c2l2': 'Installation',
      'ft.c2l3': 'Maintenance', 'ft.c2l4': 'Modernization', 'ft.c3': 'Company', 'ft.c3l1': 'About us', 'ft.c3l2': 'Projects',
      'ft.c3l3': 'Partners', 'ft.c3l4': 'Licenses', 'ft.c4': 'Contacts', 'ft.c4addr': 'Tashkent, Uzbekistan',
      'ft.privacy': 'Privacy Policy', 'ft.terms': 'Terms of Use',
      'p33.h1l': 'Type', 'p33.h1v': 'Passenger', 'p33.h2l': 'Drive', 'p33.h2v': 'Gearless', 'p33.h3l': 'Energy class', 'p33.h3v': 'A', 'p33.h4l': 'System', 'p33.h4v': 'PORT Technology',
      'p55.h1l': 'Type', 'p55.h1v': 'Passenger / Freight', 'p55.h2l': 'Drive', 'p55.h2v': 'Gearless', 'p55.h3l': 'Energy class', 'p55.h3v': 'A+', 'p55.h4l': 'Customization', 'p55.h4v': 'Unlimited',
      'p93.h1l': 'Type', 'p93.h1v': 'Escalator', 'p93.h2l': 'Drive', 'p93.h2v': 'Energy-saving', 'p93.h3l': 'Safety', 'p93.h3v': 'Intelligent', 'p93.h4l': 'Mode', 'p93.h4v': 'Continuous',
      'tech.lead': 'Schindler Ahead is the world\'s first digital platform for elevators.',
      'tf1.t': 'Predictive analytics', 'tf1.d': 'Algorithms predict maintenance needs.',
      'tf2.t': 'PORT Technology', 'tf2.d': 'Personalized access and traffic optimization.',
      'tf3.t': 'Energy efficiency A++', 'tf3.d': 'Regenerative drives recover up to 30% of energy.',
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
      'hero.w1': 'We', 'hero.w2': 'Elevate', 'hero.w3': '2 billion', 'hero.w4': 'people', 'hero.w5': 'every', 'hero.w6': 'day.',
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
      'pdf.open': 'Open in new tab', 'pdf.download': 'Download PDF',
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
      'pr.ht.tag': 'Hotel · 5★', 'pr.ht.desc': 'Installation of Schindler 7000 high-speed elevators for Hilton.',
      'pr.ht.s1': 'elevators', 'pr.ht.s2': 'floors',
      'pr.tc.tag': 'Business Center', 'pr.tc.desc': 'Premium elevators for the new business district.',
      'pr.dc.tag': 'Premium Residential', 'pr.dc.desc': 'Long-term cooperation with Dream City.',
      'pr.mb.tag': 'Development', 'pr.mb.desc': 'Equipping Murad Buildings residential complexes.',
      'pr.pt.tag': 'Residential Complex', 'pr.pt.desc': 'Modern reliable elevators for high-rise residential complex.',
      'proj.cta': 'All projects',
      'proj.prev': 'Previous project', 'proj.next': 'Next project',
      'partners.eyebrow': 'Partners', 'partners.title': 'Building vertical mobility together',
      'svc.num': '04 — Services',
      'svc.title': 'Full life cycle <em>maintenance.</em>',
      's1.t': 'Design', 's1.d': 'Configuration calculation, BIM-integration.',
      's2.t': 'Spare Parts & Warehouse', 's2.d': 'Safety Elevator has a warehouse of spare parts for elevators, which allows for the rapid replacement of parts in the event of a breakdown.',
      's3.t': 'Installation', 's3.d': 'Professional installation by certified engineers.',
      's4.t': 'Maintenance', 's4.d': 'Regular maintenance, 24/7 emergency response.',
      's5.t': 'Modernization', 's5.d': 'Updating cabins, control systems, and motors.',
      's6.t': 'Consultation', 's6.d': 'Expert support at all stages.',
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

  // Project carousel cards — translations keyed by image filename
  const projectCardI18n = {
    'Hilton.jpg': {
      ru: { tag: 'Гостиница · 5★', desc: 'Комплекс высокоскоростных лифтов Schindler 7000 для флагманской гостиницы Hilton.', stats: ['<b>12</b> лифтов', '<b>23</b> этажа', '<b>4.0</b> м/с'] },
      en: { tag: 'Hotel · 5★', desc: 'A complex of high-speed Schindler 7000 elevators for the flagship Hilton hotel.', stats: ['<b>12</b> elevators', '<b>23</b> floors', '<b>4.0</b> m/s'] } },
    'tashkent-city.png': {
      ru: { tag: 'Резиденция', desc: 'Премиальные лифты для жилой резиденции в Tashkent City.' },
      en: { tag: 'Residence', desc: 'Premium elevators for a residential complex in Tashkent City.' } },
    'boulevard(dreamcity).png': {
      ru: { tag: 'ЖК премиум', desc: 'Долгосрочное сотрудничество с одним из крупнейших застройщиков страны.' },
      en: { tag: 'Premium Residential', desc: 'Long-term cooperation with one of the country\'s largest developers.' } },
    'murad-buildings.webp': {
      ru: { tag: 'Девелопмент', desc: 'Стратегический контракт на оснащение жилых комплексов застройщика.' },
      en: { tag: 'Development', desc: 'Strategic contract to equip the developer\'s residential complexes.' } },
    'Piramittower.png': {
      ru: { tag: 'Жилой комплекс', desc: 'Современные надёжные лифты для высотного жилого комплекса.' },
      en: { tag: 'Residential Complex', desc: 'Modern, reliable elevators for a high-rise residential complex.' } },
    'Cabinet of Ministers of the Republic of Uzbekistan.png': {
      ru: { name: 'Кабинет Министров РУз', tag: 'Госсектор', desc: 'Оснащение государственного административного здания лифтами Schindler.' },
      en: { name: 'Cabinet of Ministers', tag: 'Government', desc: 'Equipping a state administrative building with Schindler elevators.' } },
    'Central Plaza.png': {
      ru: { tag: 'Бизнес-центр', desc: 'Лифты Schindler для бизнес-объекта LOT-2 в Tashkent City.' },
      en: { tag: 'Business Center', desc: 'Schindler elevators for the LOT-2 business facility in Tashkent City.' } },
    'central-bank.jpg': {
      ru: { tag: 'Финансовый объект', desc: 'Комплексное оснащение здания лифтами швейцарского качества.' },
      en: { tag: 'Financial Facility', desc: 'Full equipping of the building with Swiss-quality elevators.' } },
    'financial-center.jpg': {
      ru: { tag: 'Финансовый центр', desc: 'Поставка и монтаж лифтового оборудования Schindler.' },
      en: { tag: 'Financial Center', desc: 'Supply and installation of Schindler elevator equipment.' } },
    'Greenwich .png': {
      ru: { tag: 'ЖК премиум', desc: 'Оснащение жилого комплекса premium-класса лифтами Schindler.' },
      en: { tag: 'Premium Residential', desc: 'Equipping a premium-class residential complex with Schindler elevators.' } },
    'Hampton-hotel.jpg': {
      ru: { tag: 'Гостиница', desc: 'Гостиничные лифты Schindler для отеля Hampton by Hilton.' },
      en: { tag: 'Hotel', desc: 'Schindler hotel elevators for the Hampton by Hilton hotel.' } },
    'Infinity-business-center.jpg': {
      ru: { tag: 'Бизнес-центр', desc: 'Высокоскоростные лифты Schindler для делового центра Infinity.' },
      en: { tag: 'Business Center', desc: 'High-speed Schindler elevators for the Infinity business center.' } },
    'mirabad-avenue.jpg': {
      ru: { tag: 'ЖК', desc: 'Лифтовое оснащение жилого комплекса Mirabad Avenue.' },
      en: { tag: 'Residential', desc: 'Elevator equipment for the Mirabad Avenue residential complex.' } },
    'Uzbekfilm.webp': {
      ru: { tag: 'Культурный объект', desc: 'Лифтовое оснащение киностудии «Узбекфильм» оборудованием Schindler.' },
      en: { tag: 'Cultural Facility', desc: 'Elevator equipment for the Uzbekfilm film studio with Schindler.' } },
    'DAHO.webp': {
      ru: { tag: 'Коммерческий объект', desc: 'Установка лифтового оборудования Schindler на объекте DAHO.' },
      en: { tag: 'Commercial Facility', desc: 'Installation of Schindler elevator equipment at the DAHO facility.' } },
    'piramitmall.jpg': {
      ru: { tag: 'Торговый центр', desc: 'Эскалаторы и лифты Schindler для торгового центра Piramit Mall.' },
      en: { tag: 'Shopping Center', desc: 'Schindler escalators and elevators for the Piramit Mall shopping center.' } },
    'BWC.webp': {
      ru: { tag: 'Бизнес-центр', desc: 'Лифтовое оснащение делового центра BWC оборудованием Schindler.' },
      en: { tag: 'Business Center', desc: 'Elevator equipment for the BWC business center with Schindler.' } },
    'beshqozon.webp': {
      ru: { tag: 'Ресторан', desc: 'Лифтовое оснащение ресторанного комплекса «Бешқозон».' },
      en: { tag: 'Restaurant', desc: 'Elevator equipment for the Beshqozon restaurant complex.' } },
    'primeminister.jfif': {
      ru: { tag: 'Госсектор', desc: 'Оснащение государственного административного здания лифтами Schindler.' },
      en: { tag: 'Government', desc: 'Equipping a state administrative building with Schindler elevators.' } },
    'sun2hyman.jpg': {
      ru: { tag: 'Жилой комплекс', desc: 'Лифтовое оснащение жилого комплекса Sun 2 Hyman оборудованием Schindler.' },
      en: { tag: 'Residential Complex', desc: 'Elevator equipment for the Sun 2 Hyman residential complex with Schindler.' } }
  };

  const translateProjectCards = () => {
    document.querySelectorAll('.pc-card').forEach(card => {
      const img = card.querySelector('.project-image');
      if (!img) return;
      const m = (img.getAttribute('style') || '').match(/images\/(.+?)'\)/);
      if (!m) return;
      const entry = projectCardI18n[m[1]];
      if (!entry) return;
      const d = entry[currentLang] || entry.en || entry.ru;
      const nameEl = card.querySelector('.project-name');
      const tagEl = card.querySelector('.project-tag');
      const descEl = card.querySelector('.project-desc');
      if (nameEl && d.name) nameEl.textContent = d.name;
      if (tagEl && d.tag) tagEl.textContent = d.tag;
      if (descEl && d.desc) descEl.textContent = d.desc;
      if (d.stats) {
        const ss = card.querySelectorAll('.project-stats span');
        d.stats.forEach((html, i) => { if (ss[i]) ss[i].innerHTML = html; });
      }
    });
  };

  // lookup with fallback: current language → English → Russian
  const t = (key) => T[currentLang][key] || T.en[key] || T.ru[key];

  const updateTexts = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t(el.getAttribute('data-i18n-html'));
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const v = t(el.getAttribute('data-i18n-ph'));
      if (v) el.placeholder = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const v = t(el.getAttribute('data-i18n-aria'));
      if (v) el.setAttribute('aria-label', v);
    });
    translateProjectCards();
    document.documentElement.lang = currentLang;
  };

  // Lang Switcher — click a language to switch directly to it
  const langBtn = document.querySelector('.nav-lang');
  if (langBtn) {
    const setLang = (lang) => {
      if (!T[lang]) return;
      currentLang = lang;
      langBtn.querySelectorAll('span').forEach(s => {
        s.classList.toggle('active', s.textContent.trim().toLowerCase() === currentLang);
      });
      updateTexts();
    };
    langBtn.querySelectorAll('span').forEach(s => {
      s.style.cursor = 'pointer';
      s.addEventListener('click', (e) => {
        e.stopPropagation();
        setLang(s.textContent.trim().toLowerCase());
      });
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
     PDF VIEWER MODAL
     ================================================================= */
  (function setupPdfModal() {
    const modal = document.getElementById('pdf-modal');
    if (!modal) return;
    const frame = document.getElementById('pdf-frame');
    const backdrop = document.getElementById('pdf-backdrop');
    const closeBtn = document.getElementById('pdf-close');
    const titleEl = document.getElementById('pdf-title');
    const tagEl = document.getElementById('pdf-tag');
    const openLink = document.getElementById('pdf-open');
    const dlLink = document.getElementById('pdf-download');
    let lastTrigger = null;

    const open = (src, title, tag) => {
      titleEl.textContent = title || 'Schindler';
      tagEl.textContent = tag || 'Документация';
      openLink.href = src;
      dlLink.href = src;
      // native viewer: fit width, show toolbar
      frame.src = src + '#view=FitH&toolbar=1';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtn.focus(), 100);
    };

    const close = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      // stop loading / free memory after the fade-out
      setTimeout(() => { if (!modal.classList.contains('active')) frame.src = 'about:blank'; }, 400);
      if (lastTrigger) lastTrigger.focus();
    };

    document.querySelectorAll('[data-pdf]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        lastTrigger = link;
        open(link.getAttribute('data-pdf'), link.getAttribute('data-pdf-title'), link.getAttribute('data-pdf-tag'));
      });
    });

    closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', close);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) close();
    });
  })();

  /* =================================================================
     PROJECTS CAROUSEL — auto-flow + arrows
     ================================================================= */
  (function setupProjectsCarousel() {
    const carousel = document.getElementById('projects-carousel');
    const track = document.getElementById('pc-track');
    if (!carousel || !track) return;

    const prevBtn = document.getElementById('pc-prev');
    const nextBtn = document.getElementById('pc-next');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // duplicate cards once for a seamless loop
    const originals = Array.from(track.children);
    originals.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.classList.add('pc-clone');
      track.appendChild(clone);
    });

    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    const cardWidth = () => originals[0].getBoundingClientRect().width + gap;
    let setWidth = () => track.scrollWidth / 2;

    let offset = 0;          // current translateX
    let manual = 0;          // pending eased shift from arrows
    let paused = false;
    const speed = 0.45;      // px per frame (~27px/s @60fps)

    const apply = () => { track.style.transform = `translate3d(${offset}px,0,0)`; };

    const frame = () => {
      const w = setWidth();
      if (!paused && !manual) offset -= speed;
      if (manual) {
        const step = manual * 0.14;
        offset += step;
        manual -= step;
        if (Math.abs(manual) < 0.5) { offset += manual; manual = 0; }
      }
      if (offset <= -w) offset += w;
      if (offset > 0) offset -= w;
      apply();
      requestAnimationFrame(frame);
    };

    const nudge = (dir) => { manual += dir * cardWidth(); };
    prevBtn && prevBtn.addEventListener('click', () => nudge(1));
    nextBtn && nextBtn.addEventListener('click', () => nudge(-1));

    // pause auto-flow on hover / touch
    carousel.addEventListener('mouseenter', () => { paused = true; });
    carousel.addEventListener('mouseleave', () => { paused = false; });
    carousel.addEventListener('touchstart', () => { paused = true; }, { passive: true });
    carousel.addEventListener('touchend', () => { paused = false; });

    if (!reduced) {
      requestAnimationFrame(frame);
    } else {
      // reduced motion: arrows only, no auto-flow
      paused = true;
    }
  })();

  /* =================================================================
     SCHINDLER AHEAD — live dashboard
     ================================================================= */
  (function setupLiveDashboard() {
    const upEl = document.getElementById('dash-uptime');
    const upBar = document.getElementById('dash-uptime-bar');
    const effEl = document.getElementById('dash-eff');
    const effBar = document.getElementById('dash-eff-bar');
    const ridesEl = document.getElementById('dash-rides');
    const lineEl = document.getElementById('dash-graph-line');
    const fillEl = document.getElementById('dash-graph-fill');
    if (!upEl || !effEl || !ridesEl) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    [upBar, effBar].forEach(b => { if (b) b.style.transition = 'width 1.2s cubic-bezier(0.16,1,0.3,1)'; });

    let rides = 12847;
    const rnd = (min, max) => Math.random() * (max - min) + min;

    const newGraph = () => {
      const pts = [];
      for (let x = 0; x <= 300; x += 20) pts.push([x, Math.round(rnd(12, 72))]);
      const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0] + ',' + p[1]).join(' ');
      if (lineEl) lineEl.setAttribute('d', line);
      if (fillEl) fillEl.setAttribute('d', line + ' L300,100 L0,100 Z');
    };

    const tick = () => {
      const up = rnd(99.90, 99.99);
      upEl.textContent = up.toFixed(2);
      if (upBar) upBar.style.width = up + '%';

      const eff = rnd(92.5, 96.4);
      effEl.textContent = eff.toFixed(1);
      if (effBar) effBar.style.width = eff + '%';

      rides += Math.round(rnd(2, 14));
      ridesEl.textContent = rides.toLocaleString('en-US');

      newGraph();
    };

    setInterval(tick, 2600);
  })();

  /* =================================================================
     LIGHTBOX
     ================================================================= */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCloseBtn = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  if (lightboxModal) {
    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    lightboxCloseBtn.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) closeLightbox();
    });

    // Attach to project cards inside APM
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img').src;
        const h3 = card.querySelector('h3').textContent;
        const p = card.querySelector('p').textContent;
        
        lightboxImage.src = img;
        lightboxTitle.textContent = h3;
        lightboxDesc.textContent = p;
        
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Attach to projects in main grid
    document.querySelectorAll('.projects-grid .project').forEach(card => {
      card.addEventListener('click', () => {
        const imgEl = card.querySelector('.project-image');
        let imgSrc = '';
        if (imgEl && imgEl.style.background) {
           const match = imgEl.style.background.match(/url\(['"]?(.*?)['"]?\)/);
           if (match) imgSrc = match[1];
        }
        
        const h3 = card.querySelector('.project-name').textContent;
        const p = card.querySelector('.project-desc').textContent;
        
        lightboxImage.src = imgSrc;
        lightboxTitle.textContent = h3;
        lightboxDesc.textContent = p;
        
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }


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

    // Elevator doors intro sequence
    const doors = document.getElementById('hero-doors');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runDoors = () => {
      if (!doors || reduced) { if (doors) doors.classList.add('gone'); return; }
      const numEl = document.getElementById('hero-arrival-num');
      let floor = 8;
      if (numEl) numEl.textContent = floor;
      const tick = setInterval(() => {
        floor -= 1;
        if (floor <= 1) {
          clearInterval(tick);
          if (numEl) numEl.textContent = '1';
          doors.classList.add('open');           // doors slide apart
          setTimeout(() => doors.classList.add('gone'), 1400);
        } else if (numEl) {
          numEl.textContent = floor;
        }
      }, 130);
    };

    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.add('loaded');
      setTimeout(runDoors, 350);                 // reveal closed doors, then open
    }, 600);

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

// Notification helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ─────────────────────────────────────────────────────────────
//  ПОЛУЧАТЕЛЬ ПИСЕМ С ФОРМ (Formspree → info@see.uz)
//  Письма с обеих форм приходят на info@see.uz.
//  Чтобы сменить адрес — поменяй получателя в настройках формы
//  на formspree.io или замени эндпоинт ниже.
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdvjjpb';

// Form Handler (Global for simplicity with HTML onsubmit)
window.handleFormSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  if (!btn) return;
  const originalHTML = btn.innerHTML;

  // localized button/toast strings by current language
  const L = {
    ru: { sending: 'Отправка…', sent: 'Отправлено ✓', ok: 'Спасибо! Ваш запрос успешно отправлен.', err: 'Ошибка при отправке: ', fail: 'Произошла ошибка, попробуйте позже.' },
    uz: { sending: 'Yuborilmoqda…', sent: 'Yuborildi ✓', ok: 'Rahmat! So‘rovingiz yuborildi.', err: 'Yuborishda xatolik: ', fail: 'Xatolik yuz berdi, keyinroq urinib ko‘ring.' },
    en: { sending: 'Sending…', sent: 'Sent ✓', ok: 'Thank you! Your request has been sent.', err: 'Submission error: ', fail: 'Something went wrong, please try again later.' }
  };
  const tx = L[document.documentElement.lang] || L.ru;
  const setState = (text) => { btn.innerHTML = '<span class="btn-state">' + text + '</span>'; };
  const restore = () => { btn.innerHTML = originalHTML; btn.disabled = false; };

  const formData = new FormData(form);
  const isConsult = form.id === 'floating-panel-form';
  formData.append('_subject', isConsult
    ? 'Schindler — заявка на консультацию (сайт)'
    : 'Schindler — запрос с сайта');
  const replyTo = form.querySelector('[name="email"]')?.value
    || form.querySelector('[name="phone"]')?.value;
  if (replyTo) formData.append('_replyto', replyTo);

  btn.disabled = true;
  setState(tx.sending);

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    });
    const result = await response.json().catch(() => ({}));

    if (response.ok || result.ok) {
        setState(tx.sent);               // button shows "Отправлено ✓"
        form.reset();
        showToast(tx.ok);
        setTimeout(restore, 2400);       // then back to original state
    } else {
        const msg = (result.errors && result.errors.map(x => x.message).join(', ')) || tx.fail;
        showToast(tx.err + msg);
        restore();
    }
  } catch (error) {
      showToast(tx.fail);
      restore();
  }
};
