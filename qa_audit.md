# Schindler Uzbekistan — QA / Frontend Audit

Reviewed: `index.html`, `styles.css`, `script.js`, `images/`. Honest findings below.

---

## 1. Visual / UI

### Massive image weight (Critical)
`images/Murad_Buildings.png` is **5.5 MB**, `DreamCity.jpg` is **1.4 MB**, `hero-tashkent-night.jpg` 522 KB, `Boulevard.jpg` 566 KB. WebP versions are present but `<img src="...">` fallbacks are still 5–10× too large; users on poor connections will block on these. **Fix:** re-encode the PNG to WebP/AVIF + JPEG ≤ 250 KB; cap longest edge at ~1800 px.

### Inconsistent project image dimensions/quality (High)
`Hilton.jpg` is only 107 KB while displayed at large card size — looks pixelated next to a 566 KB Boulevard. Two of the eight projects reference the same source (`Boulevard.webp` is also used as `Mirabad Avenue` source — see `index.html:670-672`). **Fix:** use a unique, properly sized image per project; align resolutions (target ~1600×1200).

### Fixed breadcrumb overlaps content (Medium)
`.breadcrumbs { position: fixed; left:gutter; top: 88px }` (`styles.css:279-283`) floats over hero copy and product visuals on every screen. The breadcrumb itself only contains "Главная / Schindler Uzbekistan" — no real hierarchy. **Fix:** drop fixed positioning or remove the breadcrumb entirely (single-page site doesn't need one).

### Floor indicator collides with hero text on mid-desktop (Medium)
At 1024–1280 px the absolute-positioned `.floor-indicator` likely overlaps the H1 / actions block. Only two breakpoints exist (1100, 720). **Fix:** add 1280px breakpoint that hides or repositions the indicator.

### Only 2 responsive breakpoints (High)
`styles.css:1644, 1676` — nothing for tablets 720–1100, nothing for ≥1600. Layouts will break/pinch in the unaddressed range. **Fix:** add 900px and ≥1440px tiers.

### `--ink-4` (#5a564f) on bg fails contrast (Medium, a11y)
Used for rail ticks, breadcrumb separators, meta labels — ratio ≈ 3.6:1, below WCAG AA (4.5:1) for small text. **Fix:** lighten to ≥ #7a7468.

### Hero image parallax via inline transform (Medium)
`heroPhoto.style.transform` written on every scroll event (`script.js:92-94`) — fires far more often than 60Hz and forces layout work. Combined with `cursor` + `cursorDot` translates, low-end devices stutter. **Fix:** rAF-throttle the scroll handler; or use CSS-only translate via `transform: translate3d` controlled by a CSS var updated once per frame.

### Marquee duplicated content read by screen readers (Low, a11y)
`.marquee-track` has duplicated `<span>`s (`index.html:264-282`) without `aria-hidden`. Same in `.partner-marquee`. **Fix:** wrap duplicate set in `aria-hidden="true"`.

---

## 2. UX

### Custom cursor disables system cursor on inputs/textareas (High, a11y)
`body { cursor: none }` plus `input, textarea { cursor: none }` (`styles.css:77-78`). Users can't see the I-beam when selecting text. Power users with text selection workflows will hate this. **Fix:** keep native cursor on form fields and on body when fine pointer is active *and* user hasn't requested reduced motion.

### No `prefers-reduced-motion` for cursor / parallax / counters / floor cycler (High, a11y)
The reduced-motion media query at `styles.css:1732` only kills CSS animations. JS-driven loops (floor counter every 2.4 s, dashboard every 2.2 s, hero parallax, magnetic buttons, counter animation) keep running. **Fix:** `if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;` guards on all those.

### Lightbox prev/next is dead UI (High)
Each project card passes a *single* image into `openLightbox` (`script.js:298`); the prev/next buttons cycle through a 1-element array — clicking does nothing. **Fix:** either populate `data-gallery="img1|img2|img3"` per project or hide nav buttons when `gallery.length <= 1`.

### Project filter has no animation, layout reflows abruptly (Low)
`card.hidden = true` (`script.js:256`) hard-removes cards. **Fix:** animate height/opacity, or use FLIP.

### Lang toggle only translates 9 strings (High)
`i18n` (`script.js:463-503`) covers only nav + 3 hero strings. Switching to UZ/EN leaves 95% of the page in Russian — broken promise to non-RU users. **Fix:** either hide toggle until full translations exist, or add `data-i18n` to all major copy.

### "Send request" submit actually opens mailto (Critical, deceptive)
`data-endpoint=""` is empty (`index.html:1099`), so on submit the code falls through to `window.location.href = 'mailto:...'` and **simultaneously** shows "Спасибо! ... мы свяжемся с вами" (`script.js:445`). The user sees a success message, but no submission happened — if they don't have a mail client, lead is lost. **Fix:** wire a real endpoint (Telegram bot, Formspree, server). Until then, set status to "Откроется почтовый клиент..." and don't say "thank you".

### No spam protection on the lead form (Medium)
No honeypot, no rate-limit, no captcha. Once endpoint is wired, form will be flooded.

### "Скачать PDF-каталог" links are external schindler.com pages, not PDFs (Medium)
Mislabels the action (`index.html:381,422,463,508`). Users expect a download. **Fix:** either rename to "Технические характеристики" or actually link to PDFs.

### Floating contact uses ugly text ("CALL", "WA", "TG") (Low)
`index.html:1268-1272`. On a "premium luxury" site this looks placeholder-ish. **Fix:** SVG icons.

### `<html lang="ru">` doesn't update screen-reader pronunciation when switching (Low, a11y)
`applyLang` sets `documentElement.lang = code.toLowerCase()` correctly, but only after click — initial UZ/EN visitors get RU pronunciation if they switch later mid-content.

### Two competing scroll mechanisms (Low)
`html { scroll-behavior: smooth }` + manual JS smooth scroll. JS uses fixed `-80` offset (`script.js:228`) which is wrong on mobile (nav is shorter) and wrong when nav becomes `padding: 12px` after scroll.

### Loader can stick (High)
`hideLoader` runs on `window 'load'` only. If any image fails / takes long, the user stares at a spinner. The fake progress also caps at 96% via random ticks — visually misleading. **Fix:** add a hard timeout (e.g. 4s) that force-hides the loader regardless.

---

## 3. Functional / Logic Bugs

### Phone formatter strips legitimate digits (High)
`digits.replace(/^998?/, '')` (`script.js:372`) — the `8?` makes it greedy on "9", "99", and "998". Typing a local "99..." mobile prefix without country code gets the leading "99" stripped. **Fix:** `replace(/^998/, '')`.

### Phone validation is country-locked but UI shows generic mask (Medium)
Submit rejects anything not exactly 12 digits starting with 998 (`script.js:413`). International inquirers can't submit. **Fix:** allow alternative international formats or add a country-code dropdown.

### `setInterval`s never cleared (Low, perf/leak)
Loader progress, time clock, floor counter, dashboard rides all run forever, even with the tab hidden. **Fix:** pause on `visibilitychange`; clear on completion.

### `progressTimer` race (Low)
If `document.readyState === 'complete'` branch fires before the interval registers a value, fine — but if the page is cached and load fires before the script line creating progressTimer runs, listeners attach after-the-fact. Minor edge case.

### Counter `formatNum` rounding artifact (Low)
`Math.round(n / 1000) + 'K'` for 70 000 produces "70K" while increment animation will show "0K…1K…2K" — visually janky. **Fix:** animate raw number and only format final value.

### `localStorage` not used to remember language preference (Low)
Refresh resets to RU.

### Map iframe has no fallback / no consent (Medium, GDPR)
Google Maps iframe loads on page, no cookie consent. For an EU-targeted audience this is a problem. **Fix:** click-to-load placeholder.

### Form `<select>` for "Тип объекта" has no `value` attributes (Low)
`<option>Жилой дом</option>` without `value` (`index.html:1125-1129`) means form data sends Russian strings — fragile if you later filter server-side. **Fix:** add `value="residential"` etc.

### `lightboxImg.alt` set from a *previous* title (Low)
`setLightboxImage()` reads `lightboxTitle.textContent` *before* the title element has been updated for newly-opened image step. Currently moot since gallery is 1 image, but will misbehave if galleries are added.

### `data-gallery` referenced but never populated in HTML (Low, dead path)
`script.js:298` reads `card.dataset.gallery`, but no project sets it.

---

## 4. Animations / Transitions

### Magnetic-hover transform fights CSS button hover transition (Low)
`.btn` has `transition: all 0.4s` (`styles.css:295`) and JS writes `transform` on every `mousemove` — every frame the browser starts a new 0.4 s transition on `transform`, producing a sluggish lag instead of immediate magnet feel. **Fix:** change `transition: all` to specific properties (`background, color, border-color`) excluding transform; or use `transition: transform 0s` while moving.

### Loader fill bar animates independently of real progress (Low)
CSS `loaderFill` runs 1.6 s to 100% while JS shows random "0% → 96%" ticks — the bar finishes long before the number does. **Fix:** drive the bar width from the same JS counter.

### `mix-blend-mode: difference` on cursor (Low, perf)
Forces full-screen compositing layer; on Windows + Chrome with HW acceleration off, this jitters. **Fix:** disable on `prefers-reduced-motion` and on low-end devices.

### Hero glow infinite alternate animation (Low)
`heroGlow 12s` runs forever even when hero is off-screen. **Fix:** pause via IntersectionObserver.

### `.nav-logo:hover .nav-logo-mark { transform: rotate(180deg) }` 0.4 s (Low)
Cute, but combined with magnetic effect on its parent button creates conflicting transforms. Minor.

---

## 5. Code Quality

### Single 1777-line CSS, single 532-line IIFE JS (Medium)
No componentization. For a site this size acceptable, but the IIFE bundles loader, cursor, nav, menu, reveal, counters, smooth-scroll, magnetic, filters, lightbox, video modal, form, dashboard, i18n in one closure. **Fix:** at minimum split into `loader.js`, `nav.js`, `form.js`, `gallery.js`.

### Duplicated SVG markup (Low)
The arrow-right `<svg>` is inlined ~12 times. The Schindler logo mark is repeated in loader, nav, footer. **Fix:** `<symbol>` + `<use>`.

### Inconsistent file naming (Low)
`Hilton.jpg`, `DreamCity.jpg`, `Murad_Buildings.png` (capitalized + PNG) vs `nest-one-facade.jpg`, `tashkent-city-business.jpg` (kebab + jpg). **Fix:** rename to kebab-case + `.jpg/.webp` only.

### Lead-form mailto fallback duplicates field labels in body (Low)
Long encoded body — many email clients truncate. Fragile.

### Inline event handlers and global selectors mixed; no event delegation (Low)
E.g. project cards each get individual click + keydown handlers (`script.js:295-308`). Fine at 8 cards, won't scale.

### `revealEls` is a flat array of 9 different querySelectorAll merged (Low)
Order-dependent transition delays via `i % 6` produce arbitrary stagger. **Fix:** scope reveal per-section, not globally.

### `data-product`, `data-num`, `data-i18n` not always consistent (Low)
Mobile menu has 6 items numbered 01–06, desktop nav has 5 items 01–05 — different IDs for "About" and "Gallery"/"FAQ".

---

## 6. Performance

### Critical: hero image preload not declared (High)
`fetchpriority="high"` is set, but no `<link rel="preload" as="image" type="image/webp" imagesrcset=...>` — so it still races CSS/fonts. **Fix:** add a preload.

### Google Fonts blocking with 4 axis families and italic (Medium)
`Fraunces` with optical-sizing range + italic + `Inter Tight` 5 weights + `JetBrains Mono` 3 weights — large CSS + multiple WOFF2s. **Fix:** subset (latin + cyrillic), drop unused weights, self-host.

### `mix-blend-mode: difference`, `backdrop-filter: blur(18px) saturate(140%)` on nav (Medium)
Repaint cost on every scroll. Chrome on Windows handles fine; Safari/Firefox stutter when scrolled fast.

### Many `position: absolute` decorative elements (`hero-grid`, `hero-noise`, `hero-glow`, animated escalator steps, product-shaft cabs, dashboard pulse rings) (Low)
All animate together → multiple layers. On a 4-year-old laptop the hero will measurably drop FPS.

### No `Cache-Control` strategy / SW (Low)
Manifest declared, but no service worker; repeat visits re-download everything. **Fix:** simple cache-first SW for images and fonts.

### Iframe (Google Maps) loaded eagerly on first paint zone (it's `loading="lazy"`, OK) (Low)
Verify it's actually below fold for short viewports — at narrow heights it might trigger early.

### `setInterval` running on hidden tabs (Low)
Time clock at 1 Hz, dashboard at 2.2 s, floor at 2.4 s — wasted cycles in background tabs. (Already noted in §3.)

### Hero photo `transform` updated every scroll event (Medium)
See §1 — also a perf issue.

---

## Top-5 Fix Priority

1. **Real form endpoint + remove misleading "Спасибо!"** when nothing was actually submitted.
2. **Compress images** — especially `Murad_Buildings.png` (5.5 MB) and `DreamCity.jpg` (1.4 MB).
3. **Fix phone-formatter regex** stripping legitimate "99…" digits.
4. **Hide lightbox prev/next** when there's only 1 image, or actually populate galleries.
5. **`prefers-reduced-motion` guards** on JS animations + custom cursor / parallax.
