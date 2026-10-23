import { site, hero, approach, services, method, experience, about, contact, footer } from './content.js';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Parte un texto en palabras envueltas para animarlas (reveal tipo máscara).
const words = (text, accent = false) =>
  text
    .split(' ')
    .filter(Boolean)
    .map((w) => `<span class="w"><span class="wi${accent ? ' gradient' : ''}">${esc(w)}</span></span>`)
    .join(' ');

const heading = (tag, text, cls = '') => `<${tag} class="split-text ${cls}" data-split>${words(text)}</${tag}>`;

const sectionHead = (num, label, title, lead = '') => `
  <div class="section-head">
    <div class="section-label reveal"><span class="label-num">${num}</span><span class="label-line"></span>${esc(label)}</div>
    ${heading('h2', title)}
    ${lead ? `<p class="lead reveal">${esc(lead)}</p>` : ''}
  </div>`;

const photo = (src, alt) =>
  `<img class="photo" src="${src}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()" />`;

// Mini-animaciones de cada servicio (las anima el CSS).
const viz = {
  radar: `<svg viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id="sw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7ce6e2" stop-opacity="0"/><stop offset="1" stop-color="#7ce6e2" stop-opacity=".55"/></linearGradient></defs>
    <circle cx="60" cy="60" r="14" class="ln"/><circle cx="60" cy="60" r="29" class="ln"/><circle cx="60" cy="60" r="44" class="ln"/>
    <path d="M16 60H104M60 16V104" class="ln faint"/>
    <g class="sweep"><path d="M60 60L60 16A44 44 0 0 1 104 60Z" fill="url(#sw)"/></g>
    <circle cx="84" cy="38" r="3" class="blip"/><circle cx="38" cy="78" r="3" class="blip b2"/><circle cx="76" cy="84" r="3" class="blip b3"/></svg>`,
  network: `<svg viewBox="0 0 120 120" aria-hidden="true">
    <path d="M22 32L60 20L98 44L88 92L40 94Z M60 20L88 92 M22 32L40 94 M98 44L40 94" class="ln dash"/>
    <circle cx="22" cy="32" r="5" class="nd"/><circle cx="60" cy="20" r="5" class="nd n2"/><circle cx="98" cy="44" r="5" class="nd n3"/>
    <circle cx="88" cy="92" r="5" class="nd n4"/><circle cx="40" cy="94" r="5" class="nd n5"/></svg>`,
  bars: `<svg viewBox="0 0 120 120" aria-hidden="true">
    <path d="M14 104H106" class="ln"/>
    <rect x="20" y="64" width="12" height="40" rx="3" class="bar"/><rect x="40" y="48" width="12" height="56" rx="3" class="bar b2"/>
    <rect x="60" y="56" width="12" height="48" rx="3" class="bar b3"/><rect x="80" y="30" width="12" height="74" rx="3" class="bar b4"/>
    <path d="M26 56L46 40L66 48L86 22" class="trend"/></svg>`,
};

const mailto = `mailto:${site.email}?subject=${encodeURIComponent(contact.subject)}`;

const arrow = (d = '↗') => `<span class="arr">${d}</span>`;

export function render() {
  const heroTitle = hero.title
    .map((p) => words(p.text, p.accent))
    .join(' ');

  const nav = `
  <header class="nav" id="nav">
    <div class="wrap nav-inner">
      <a class="brand" href="#inicio" aria-label="Inicio">${esc(site.brand[0])}<span>.</span>${esc(site.brand[1])}</a>
      <nav class="navlinks" aria-label="Principal">
        ${site.nav.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join('')}
      </nav>
      <a class="btn primary small" href="#contacto" data-magnetic>${esc(site.navCta)} ${arrow()}</a>
      <button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false"><i></i><i></i></button>
    </div>
  </header>
  <div class="menu" id="menu" aria-hidden="true">
    ${site.nav.map((l, i) => `<a href="${l.href}"><small>0${i + 1}</small>${esc(l.label)}</a>`).join('')}
    <a href="#contacto"><small>05</small>${esc(site.navCta)}</a>
  </div>`;

  const heroSec = `
  <section class="hero" id="inicio">
    <div class="glow g1"></div><div class="glow g2"></div>
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <div class="eyebrow reveal-hero"><span class="dot"></span>${esc(hero.eyebrow)}</div>
        <h1 class="split-text hero-title" data-split data-hero>${heroTitle}</h1>
        <p class="hero-text reveal-hero">${esc(hero.text)}</p>
        <div class="actions reveal-hero">
          <a class="btn primary" href="${hero.primary.href}" data-magnetic>${esc(hero.primary.label)} ${arrow('↘')}</a>
          <a class="btn secondary" href="${hero.secondary.href}" data-magnetic>${esc(hero.secondary.label)}</a>
        </div>
      </div>
      <div class="visual reveal-hero" id="visual">
        <div class="visual-label">${esc(hero.visualLabel)}</div>
        <div class="ring r1"></div><div class="ring r2"></div>
        <div class="system">
          ${hero.system
            .map(
              (n, i) => `
            <div class="node" data-node>
              <b><em>${n.n}</em>${esc(n.name)}</b><span>${esc(n.tag)}</span>
            </div>${i < hero.system.length - 1 ? '<div class="connector"><i></i></div>' : ''}`
            )
            .join('')}
        </div>
      </div>
    </div>
    <div class="scroll-hint reveal-hero"><span></span>Scroll</div>
  </section>`;

  const approachSec = `
  <section class="section" id="enfoque"><div class="wrap">
    ${sectionHead('01', approach.label, approach.title, approach.lead)}
    <div class="grid3">
      ${approach.cards
        .map(
          (c, i) => `
        <article class="card spot reveal-card" data-tilt>
          <div class="num">0${i + 1} / ${esc(c.tag)}</div>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.text)}</p>
        </article>`
        )
        .join('')}
    </div>
    <div class="chips reveal">${approach.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>
  </div></section>`;

  const servicesSec = `
  <section class="section light" id="servicios"><div class="wrap split">
    <div class="split-left">
      ${sectionHead('02', services.label, services.title, services.lead)}
      <div class="note reveal">${esc(services.note)}</div>
    </div>
    <div class="stack">
      ${services.items
        .map(
          (s, i) => `
        <article class="svc spot reveal-card" style="--i:${i}">
          <div class="svc-viz">${viz[s.viz] || ''}</div>
          <span class="svc-ghost">0${i + 1}</span>
          <div class="num">0${i + 1} / Servicio</div>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.text)}</p>
          <div class="svc-tags">${(s.tags || []).map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        </article>`
        )
        .join('')}
    </div>
  </div></section>`;

  const methodSec = `
  <section class="section" id="metodologia"><div class="wrap">
    ${sectionHead('03', method.label, method.title, method.lead)}
    <div class="steps" id="steps">
      <div class="steps-line"><i id="steps-fill"></i></div>
      ${method.steps
        .map(
          (s, i) => `
        <article class="step reveal-card">
          <strong>Fase 0${i + 1}</strong>
          <span class="step-dot"></span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.text)}</p>
        </article>`
        )
        .join('')}
    </div>
  </div></section>`;

  const experienceSec = `
  <section class="section alt" id="experiencia"><div class="wrap">
    ${sectionHead('04', experience.label, experience.title, experience.lead)}
    <div class="logos">
      <div class="logos-head reveal">
        <span class="logos-eyebrow"><i></i>${esc(experience.logosEyebrow)}</span>
        <h3>${esc(experience.logosLabel)}</h3>
      </div>
      <ul class="logos-row reveal">
        ${experience.logos
          .map(
            (l, i) => `
          <li class="logo"><small>0${i + 1}</small><span class="logo-mark" data-name="${esc(l.name)}"><img src="${l.src}" alt="${esc(l.name)}" loading="lazy" /></span></li>`
          )
          .join('')}
      </ul>
    </div>
  </div></section>`;

  const aboutSec = `
  <section class="section" id="sobre-mi"><div class="wrap about">
    <div class="monogram reveal-card" data-tilt>
      <b class="mono-letters">MR</b>
      ${photo(about.photo, site.name)}
      <span>${esc(about.photoCaption)}</span>
    </div>
    <div class="about-copy">
      <div class="section-label reveal"><span class="label-num">05</span><span class="label-line"></span>${esc(about.label)}</div>
      ${heading('h2', about.title)}
      <p class="tagline reveal">${esc(about.tagline)}</p>
      ${about.paragraphs.map((p) => `<p class="reveal">${esc(p)}</p>`).join('')}
      <div class="chips reveal">${about.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>
    </div>
  </div></section>`;

  const icons = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.6 2L12 12.4 19.4 7zM4 8.6V17h16V8.6l-8 5.8z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07v5.9h-4v-5.23c0-1.25-.02-2.85-1.74-2.85-1.74 0-2 1.36-2 2.76v5.32h-4z"/></svg>',
  };

  const social = [
    `<a class="icon-btn" href="${mailto}" aria-label="Enviar un email" title="Email">${icons.mail}</a>`,
    site.linkedin && `<a class="icon-btn" href="${esc(site.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${icons.linkedin}</a>`,
    site.instagram && `<a class="icon-btn" href="${esc(site.instagram)}" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">Ig</a>`,
  ]
    .filter(Boolean)
    .join('');

  const contactSec = `
  <section class="contact" id="contacto">
    <div class="glow g3"></div>
    <div class="wrap contact-inner">
      <div>
        <div class="section-label reveal"><span class="label-num">06</span><span class="label-line"></span>${esc(contact.label)}</div>
        ${heading('h2', contact.title, 'big')}
        <p class="reveal">${esc(contact.text)}</p>
      </div>
      <div class="contact-actions reveal">
        <span class="connect-title">${esc(contact.connect)}</span>
        <div class="connect-icons">${social}</div>
      </div>
    </div>
  </section>`;

  const footerSec = `
  <footer class="footer"><div class="wrap footer-inner">
    <span>© ${new Date().getFullYear()} ${esc(site.name)} · ${esc(footer.left)}</span>
    <span>${esc(footer.credit.text)} <a class="credit" href="${esc(footer.credit.href)}" target="_blank" rel="noopener">${esc(footer.credit.name)}</a></span>
  </div></footer>`;

  document.getElementById('app').innerHTML = `
    <div class="loader" id="loader"><div class="loader-inner"><b>M<span>.</span>R</b><div class="loader-bar"><i id="loader-bar"></i></div><small id="loader-count">0</small></div></div>
    <div class="progress"><i id="progress"></i></div>
    <div class="cursor-ring" id="cursor-ring"><i></i></div><div class="cursor-dot" id="cursor-dot"><i></i></div>
    <div class="grain"></div>
    ${nav}
    <main>${heroSec}${approachSec}${servicesSec}${methodSec}${experienceSec}${aboutSec}${contactSec}</main>
    ${footerSec}`;

  // Logos faltantes: mostrar el nombre en texto en lugar de la imagen rota.
  document.querySelectorAll('.logo-mark img').forEach((img) => {
    const swap = () => {
      const box = img.parentElement;
      box.classList.add('text');
      box.textContent = box.dataset.name;
    };
    img.addEventListener('error', swap);
    if (img.complete && img.naturalWidth === 0) swap();
  });
}
