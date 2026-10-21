import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { render } from './render.js';

gsap.registerPlugin(ScrollTrigger);
render();

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ---------- Scroll suave ---------- */
const lenis = reduced ? null : new Lenis({ lerp: 0.1, smoothWheel: true });
if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}

$$('a[href^="#"]').forEach((a) =>
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = id === '#inicio' ? 0 : $(id);
    if (target === null) return;
    e.preventDefault();
    closeMenu();
    lenis ? lenis.scrollTo(target, { offset: -20, duration: 1.4 }) : (target === 0 ? window.scrollTo(0, 0) : target.scrollIntoView());
  })
);

/* ---------- Menú mobile ---------- */
const burger = $('#burger');
const menu = $('#menu');
function closeMenu() {
  document.body.classList.remove('menu-open');
  burger.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
}
burger.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-hidden', String(!open));
});

/* ---------- Nav: se oculta al bajar, vuelve al subir ---------- */
const nav = $('#nav');
let lastY = 0;
ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate: (self) => {
    const y = self.scroll();
    nav.classList.toggle('scrolled', y > 40);
    nav.classList.toggle('hidden', y > 300 && y > lastY && !document.body.classList.contains('menu-open'));
    lastY = y;
  },
});
gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { scrub: 0.2, start: 0, end: 'max' } });

/* ---------- Cursor personalizado ---------- */
if (finePointer && !reduced) {
  document.body.classList.add('has-cursor');
  const cur = $('#cursor');
  const x = gsap.quickTo(cur, 'x', { duration: 0.35, ease: 'power3' });
  const y = gsap.quickTo(cur, 'y', { duration: 0.35, ease: 'power3' });
  window.addEventListener('pointermove', (e) => {
    x(e.clientX);
    y(e.clientY);
    cur.classList.add('on');
  });
  document.addEventListener('pointerleave', () => cur.classList.remove('on'));
  document.addEventListener('pointerover', (e) => {
    cur.classList.toggle('hover', !!e.target.closest('a, button, [data-tilt]'));
  });
}

/* ---------- Botones magnéticos ---------- */
if (finePointer && !reduced) {
  $$('[data-magnetic]').forEach((el) => {
    const mx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
    const my = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      mx((e.clientX - (r.left + r.width / 2)) * 0.25);
      my((e.clientY - (r.top + r.height / 2)) * 0.35);
    });
    el.addEventListener('pointerleave', () => {
      mx(0);
      my(0);
    });
  });
}

/* ---------- Spotlight + tilt en tarjetas ---------- */
$$('.spot').forEach((el) => {
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});
if (finePointer && !reduced) {
  $$('[data-tilt]').forEach((el) => {
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3' });
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3' });
    gsap.set(el, { transformPerspective: 900 });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 8);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 8);
    });
    el.addEventListener('pointerleave', () => {
      rx(0);
      ry(0);
    });
  });
}

/* ---------- Parallax del hero con el mouse ---------- */
if (finePointer && !reduced) {
  const g1 = gsap.quickTo('.g1', 'x', { duration: 1.2 });
  const g1y = gsap.quickTo('.g1', 'y', { duration: 1.2 });
  const g2 = gsap.quickTo('.g2', 'x', { duration: 1.6 });
  const g2y = gsap.quickTo('.g2', 'y', { duration: 1.6 });
  const vx = gsap.quickTo('#visual .system', 'x', { duration: 1 });
  const vy = gsap.quickTo('#visual .system', 'y', { duration: 1 });
  $('.hero').addEventListener('pointermove', (e) => {
    const nx = e.clientX / innerWidth - 0.5;
    const ny = e.clientY / innerHeight - 0.5;
    g1(nx * -80); g1y(ny * -60);
    g2(nx * 60); g2y(ny * 50);
    vx(nx * 14); vy(ny * 14);
  });
}

/* ---------- Animaciones de entrada ---------- */
function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.from('.hero-title .wi', { yPercent: 115, rotate: 4, duration: 1.1, stagger: 0.045 })
    .from('.reveal-hero:not(.visual)', { y: 28, opacity: 0, duration: 0.9, stagger: 0.1 }, '-=0.8')
    .from('.visual', { y: 40, opacity: 0, scale: 0.96, duration: 1.1 }, '-=1')
    .from('#nav', { yPercent: -100, opacity: 0, duration: 0.9 }, '-=1')
    .from('[data-node]', { x: 30, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.7')
    .from('.connector i', { scaleY: 0, duration: 0.4, stagger: 0.12, transformOrigin: 'top' }, '-=0.9');

  // Un pulso recorre el sistema: refuerza la idea de "todo conectado".
  if (!reduced) {
    const nodes = $$('[data-node]');
    const pulse = gsap.timeline({ repeat: -1, delay: 1.8 });
    nodes.forEach((n) => {
      pulse.call(() => n.classList.add('is-on'), null, '+=0.55').call(() => n.classList.remove('is-on'), null, '+=0.7');
    });
  }
}

function sectionAnimations() {
  // Títulos: cada palabra sube desde una máscara.
  $$('[data-split]:not([data-hero])').forEach((h) => {
    gsap.from($$('.wi', h), {
      yPercent: 115,
      rotate: 3,
      duration: 1,
      stagger: 0.04,
      ease: 'power4.out',
      scrollTrigger: { trigger: h, start: 'top 88%', once: true },
    });
  });

  // Elementos sueltos.
  $$('.reveal').forEach((el) =>
    gsap.from(el, { y: 32, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
  );

  // Tarjetas: entran en cascada por grupo.
  const groups = new Set($$('.reveal-card').map((c) => c.parentElement));
  groups.forEach((g) => {
    gsap.from($$(':scope > .reveal-card', g), {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.14,
      ease: 'power3.out',
      scrollTrigger: { trigger: g, start: 'top 85%', once: true },
    });
  });

  // Líneas de las etiquetas de sección.
  $$('.label-line').forEach((l) =>
    gsap.from(l, { scaleX: 0, transformOrigin: 'left', duration: 1, ease: 'power3.out', scrollTrigger: { trigger: l, start: 'top 92%', once: true } })
  );

  // Contadores.
  $$('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const o = { v: 0 };
    gsap.to(o, {
      v: end,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => (el.textContent = Math.round(o.v)),
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  // Metodología: la línea se completa a medida que se scrollea.
  const steps = $('#steps');
  const mobile = window.matchMedia('(max-width: 800px)').matches;
  gsap.to('#steps-fill', {
    [mobile ? 'scaleY' : 'scaleX']: 1,
    ease: 'none',
    scrollTrigger: { trigger: steps, start: 'top 70%', end: 'bottom 70%', scrub: 0.4 },
  });
  $$('.step', steps).forEach((s) =>
    ScrollTrigger.create({ trigger: s, start: 'top 70%', onEnter: () => s.classList.add('on'), onLeaveBack: () => s.classList.remove('on') })
  );

  // Parallax suave de las formas decorativas y del retrato.
  gsap.to('.hero .glow.g1', { yPercent: 30, ease: 'none', scrollTrigger: { trigger: '.hero', scrub: true, start: 'top top', end: 'bottom top' } });
  gsap.to('.hero-copy', { yPercent: -8, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '.hero', scrub: true, start: '60% top', end: 'bottom top' } });
}

/* ---------- Loader ---------- */
function start() {
  document.body.classList.add('ready');
  lenis?.start();
  heroIntro();
  sectionAnimations();
  ScrollTrigger.refresh();
}

if (reduced) {
  // Sin movimiento: el contenido se muestra directamente.
  $('#loader').remove();
  document.body.classList.add('ready');
} else {
  const count = $('#loader-count');
  const bar = $('#loader-bar');
  const o = { v: 0 };
  gsap
    .timeline()
    .to(o, {
      v: 100,
      duration: 1.3,
      ease: 'power2.inOut',
      onUpdate: () => {
        count.textContent = Math.round(o.v);
        bar.style.transform = `scaleX(${o.v / 100})`;
      },
    })
    .to('.loader-inner', { opacity: 0, y: -20, duration: 0.4 })
    .to('#loader', { yPercent: -100, duration: 0.9, ease: 'power4.inOut', onStart: start })
    .set('#loader', { display: 'none' });
}
