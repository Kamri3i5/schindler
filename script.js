/* =================================================================
   SCHINDLER UZBEKISTAN — Interactivity
   ================================================================= */

(() => {
  'use strict';

  // ---------- Loader ----------
  const loader = document.getElementById('loader');
  const hideLoader = () => {
    setTimeout(() => loader && loader.classList.add('hidden'), 1700);
  };
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader);

  // ---------- Year ----------
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // ---------- Local time (Tashkent) ----------
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

  // ---------- Custom cursor (desktop only) ----------
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

  // ---------- Nav scroll state ----------
  const nav = document.getElementById('nav');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) {
      if (y > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Reveal on scroll ----------
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

    // ---------- Animated counters ----------
    const counters = document.querySelectorAll('.stat[data-counter]');
    const formatNum = (n, target) => {
      if (target >= 1000000000) return (n / 1000000000).toFixed(1).replace(/\.0$/,'') + ' млрд';
      if (target >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/,'') + ' млн';
      if (target >= 10000) return Math.round(n / 1000) + 'K';
      return Math.floor(n).toLocaleString('ru-RU');
    };
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
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const v = target * eased;
          span.textContent = formatNum(v, target) + suffix;
          if (t < 1) requestAnimationFrame(tick);
          else span.textContent = formatNum(target, target) + suffix;
        };
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => counterIO.observe(c));

    // ---------- Floor counter (hero) ----------
    const floorNum = document.getElementById('floor-num');
    if (floorNum) {
      const floors = [42, 38, 47, 52, 33, 41, 56, 23, 60];
      let i = 0;
      setInterval(() => {
        i = (i + 1) % floors.length;
        floorNum.textContent = floors[i];
      }, 2400);
    }
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // ---------- Smooth scroll ----------
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

  // ---------- Magnetic hover for buttons (subtle) ----------
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

  // ---------- Lang toggle (visual) ----------
  const lang = document.querySelector('.nav-lang');
  if (lang) {
    lang.addEventListener('click', (e) => {
      const span = e.target.closest('span');
      if (!span) return;
      lang.querySelectorAll('span').forEach(s => s.classList.remove('active'));
      span.classList.add('active');
    });
  }

})();
