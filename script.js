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

  // ---------- Elevator Constructor / Calculator ----------
  const calcWidth = document.getElementById('calc-width');
  const calcLength = document.getElementById('calc-length');
  const calcKg = document.getElementById('calc-kg');
  const calcPersons = document.getElementById('calc-persons');
  const calcArea = document.getElementById('calc-area');
  const calcModel = document.getElementById('calc-model');
  const calcSwap = document.getElementById('calc-swap');
  
  if (calcWidth && calcLength && calcKg && calcPersons) {
    let mode = 'dimensions'; // 'dimensions' or 'capacity'
    
    // Formula: 1500x1500mm = 2.25m2 -> 400kg. Ratio = 400/2.25 = 177.77...
    const KG_PER_M2 = 400 / 2.25;
    const KG_PER_PERSON = 80;
    
    const calculate = () => {
      if (mode === 'dimensions') {
        const w = parseFloat(calcWidth.value) || 0;
        const l = parseFloat(calcLength.value) || 0;
        const areaM2 = (w * l) / 1000000;
        const kg = Math.round(areaM2 * KG_PER_M2 / 10) * 10;
        const persons = Math.floor(kg / KG_PER_PERSON);
        
        calcKg.value = kg;
        calcPersons.value = persons;
        calcArea.textContent = areaM2.toFixed(2) + ' м²';
        updateModel(kg);
      } else {
        const kg = parseFloat(calcKg.value) || 0;
        const areaM2 = kg / KG_PER_M2;
        // Assume square cabin for reverse calculation
        const side = Math.round(Math.sqrt(areaM2) * 1000 / 50) * 50;
        
        calcWidth.value = side;
        calcLength.value = side;
        const persons = Math.floor(kg / KG_PER_PERSON);
        if (document.activeElement !== calcPersons) calcPersons.value = persons;
        
        calcArea.textContent = areaM2.toFixed(2) + ' м²';
        updateModel(kg);
      }
    };
    
    const updateModel = (kg) => {
      if (kg <= 450) calcModel.textContent = 'Schindler 1000 / 3300';
      else if (kg <= 1150) calcModel.textContent = 'Schindler 5500';
      else calcModel.textContent = 'Schindler 7000';
    };

    const handlePersonChange = () => {
      if (mode === 'capacity') {
        const p = parseFloat(calcPersons.value) || 0;
        calcKg.value = p * KG_PER_PERSON;
        calculate();
      }
    };
    
    calcWidth.addEventListener('input', calculate);
    calcLength.addEventListener('input', calculate);
    calcKg.addEventListener('input', calculate);
    calcPersons.addEventListener('input', handlePersonChange);
    
    calcSwap.addEventListener('click', () => {
      mode = mode === 'dimensions' ? 'capacity' : 'dimensions';
      calcSwap.classList.toggle('swapped', mode === 'capacity');
      
      const inputsLeft = [calcWidth, calcLength];
      const inputsRight = [calcKg, calcPersons];
      
      if (mode === 'capacity') {
        inputsLeft.forEach(el => { el.readOnly = true; el.tabIndex = -1; });
        inputsRight.forEach(el => { el.readOnly = false; el.tabIndex = 0; });
        document.getElementById('label-left').textContent = 'РАЗМЕРЫ КАБИНЫ · РЕЗУЛЬТАТ';
        document.getElementById('label-right').textContent = 'ХАРАКТЕРИСТИКИ · ВВОД';
      } else {
        inputsLeft.forEach(el => { el.readOnly = false; el.tabIndex = 0; });
        inputsRight.forEach(el => { el.readOnly = true; el.tabIndex = -1; });
        document.getElementById('label-left').textContent = 'РАЗМЕРЫ КАБИНЫ · ВВОД';
        document.getElementById('label-right').textContent = 'ХАРАКТЕРИСТИКИ · РЕЗУЛЬТАТ';
      }
      calculate();
    });
    
    calculate(); // init
  }

  // ---------- Floating Consultation CTA Visibility & Interaction ----------
  const floatingCtaContainer = document.getElementById('floating-cta-container');
  const floatingCta = document.getElementById('floating-cta');
  const footer = document.querySelector('footer');
  const floatingPanelForm = document.getElementById('floating-panel-form');
  const floatingSuccess = document.getElementById('floating-panel-success');

  if (floatingCtaContainer && footer) {
    const checkCtaVisibility = () => {
      const footerRect = footer.getBoundingClientRect();
      // Show when scrolled > 50vh, and footer is not overlapping
      if (window.scrollY > window.innerHeight * 0.5 && footerRect.top > window.innerHeight) {
        floatingCtaContainer.classList.add('visible');
      } else {
        floatingCtaContainer.classList.remove('visible');
        floatingCtaContainer.classList.remove('expanded'); // Auto collapse when hidden
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
        // Reset success state if opened again
        if (floatingSuccess) floatingSuccess.style.display = 'none';
        if (floatingPanelForm) {
          floatingPanelForm.style.display = 'flex';
          floatingPanelForm.style.opacity = '1';
        }
        // Focus name input after transition
        setTimeout(() => {
          const nameInput = document.getElementById('float-name');
          if (nameInput) nameInput.focus();
        }, 400);
      }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!floatingCtaContainer.contains(e.target)) {
        floatingCtaContainer.classList.remove('expanded');
      }
    });

    // Close on Esc key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        floatingCtaContainer.classList.remove('expanded');
      }
    });
  }

  // Handle form submission
  if (floatingPanelForm) {
    floatingPanelForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Animate showing success
      floatingPanelForm.style.opacity = '0';
      setTimeout(() => {
        floatingPanelForm.style.display = 'none';
        floatingPanelForm.style.opacity = '1';
        if (floatingSuccess) {
          floatingSuccess.style.display = 'flex';
          floatingSuccess.style.opacity = '0';
          // Force layout
          floatingSuccess.offsetHeight;
          floatingSuccess.style.opacity = '1';
        }
      }, 300);

      // Auto close after 3.5 seconds
      setTimeout(() => {
        if (floatingCtaContainer) {
          floatingCtaContainer.classList.remove('expanded');
        }
      }, 3800);
    });
  }

})();
