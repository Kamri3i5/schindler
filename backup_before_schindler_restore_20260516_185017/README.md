# Schindler Uzbekistan — Премиум редизайн

Полный редизайн корпоративного сайта **see.uz** в стиле архитектурной роскоши, вдохновлённый швейцарской точностью бренда Schindler.

## 🎯 Концепция

**Эстетика:** *Architectural luxury / Editorial refinement* — тёмная палитра (onyx + bone + cinnabar red), премиальная типографика (Fraunces variable serif + Inter Tight), кинематографичные переходы, тонкая моно-типографика для технических деталей.

**Целевое впечатление:** премиум-бренд швейцарского машиностроения, эксклюзивность, технологичность.

## 📁 Структура

```
schindler-uz/
├── index.html      # Главная страница (полный одностраничник)
├── styles.css      # Дизайн-система + все компоненты
└── script.js       # Интерактивность (cursor, counters, reveal, time)
```

## ✨ Ключевые элементы дизайна

### Hero
- **Анимированный заголовок** со staggered reveal по словам
- **Floor indicator** — фирменная анимация лифта (signature element)
- **Vertical text rail** слева с координатами и годом основания
- **Live time** — текущее время Ташкента в правом верхнем углу
- **Glow + grid + noise** — атмосферный фон с градиентным свечением
- **Custom cursor** на десктопе с magnetic эффектом

### Секции
1. **Intro** — наследие, статистика с анимированными счётчиками (1 млрд людей/день)
2. **Products** — три модели лифтов с анимированными SVG-визуализациями (катающийся лифт, эскалатор)
3. **Projects** — bento-grid с реализованными объектами (Hilton, Tashkent City, Dream City)
4. **Services** — 6 услуг полного цикла, с highlight-карточкой 24/7
5. **Tech** — Schindler Ahead с живым dashboard (uptime, efficiency, graph)
6. **Testimonial** — цитата клиента в editorial стиле
7. **CTA** — премиум-форма обратной связи + прямые контакты

### Footer
- Бегущая строка с брендингом
- 4-колоночная навигация
- Огромный outlined wordmark "SCHINDLER" в стиле editorial

## 🎨 Дизайн-система

### Цвета
```css
--bg: #0c0c0d           /* onyx */
--ink: #f5f1ea          /* bone (warm white) */
--accent: #d83a2c       /* cinnabar (Schindler red) */
--gold: #c9a96b         /* warm metallic accent */
```

### Типографика
- **Fraunces** (variable serif с opsz 144) — заголовки и крупные числа
- **Inter Tight** — основной текст
- **JetBrains Mono** — техническая мета-информация, числа, метки

### Анимации
- Custom cursor с easing, magnetic-эффект на кнопках
- Staggered reveal заголовков (translate + clip)
- IntersectionObserver для прогрессивных reveal-ов
- Animated counters с easing (cubic out)
- Marquee бесконечная прокрутка проектов
- Live floor indicator с движущимся лифтом
- Scanning line на dashboard
- Pulse-rings на индикаторах

## 🚀 Развёртывание

Просто откройте `index.html` в браузере или загрузите все три файла на любой статический хостинг (Vercel, Netlify, Cloudflare Pages, обычный shared hosting). Никаких билд-инструментов не требуется.

```bash
# Локальный запуск
python3 -m http.server 8000
# или
npx serve
```

## 🔄 Что заменить на реальное

1. **Изображения проектов** — сейчас используются градиенты-плейсхолдеры. Замените на реальные фотографии Hilton Tashkent City, Dream City и т.д. в `.project-image`
2. **Логотип Schindler** — встроенный SVG-знак можно заменить на официальный векторный логотип бренда
3. **Контактные данные** — телефон, email, адрес в секции `cta-direct` и футере
4. **Форма** — сейчас заглушка `alert()`. Подключите backend (Formspree / EmailJS / собственный endpoint)
5. **Соцсети** — обновите ссылки в футере (Instagram уже @see.uz)
6. **Языки** — переключатель RU/UZ/EN сейчас визуальный. Подключите i18n (например, через простой dictionary в JS или через статические страницы)

## 📱 Адаптивность

Полностью responsive: desktop → tablet (≤1100px) → mobile (≤720px). На мобильных скрытие лишних элементов (vertical rail, floor indicator, custom cursor), упрощение grid-ов, вертикальные стек-лейауты.

## ⚡ Производительность

- Чистый HTML/CSS/JS без фреймворков — < 90 KB суммарно
- Шрифты с `font-display: swap` через preconnect
- CSS-only анимации где возможно
- IntersectionObserver вместо scroll-listener
- `prefers-reduced-motion` поддержка для accessibility

## 📝 Что дальше можно добавить

- [ ] Внутренние страницы (Products detail, About, Projects gallery)
- [ ] Реальная мультиязычность (RU/UZ/EN)
- [ ] CMS интеграция (Strapi/Sanity для новостей)
- [ ] Подключение формы к CRM
- [ ] Lottie-анимации лифтов
- [ ] WebGL-эффекты на hero (опционально, если хочется ещё дороже)
