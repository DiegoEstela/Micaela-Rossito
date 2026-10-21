import { site, hero, marquee, approach, services, method, experience, about, contact, footer } from './content.js';

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
        <div class="hero-foot reveal-hero">
          <div class="badge">
            <span class="badge-av"><b>MR</b>${photo(hero.badge.photo, hero.badge.name)}</span>
            <span><strong>${esc(hero.badge.name)}</strong><small>${esc(hero.badge.role)}</small></span>
          </div>
          <div class="micro">${esc(hero.micro)}</div>
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

  const track = [...marquee, ...marquee].map((t) => `<span>${esc(t)}<i>✦</i></span>`).join('');
  const marqueeSec = `<div class="marquee" aria-hidden="true"><div class="marquee-track">${track}${track}</div></div>`;

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
  <section class="section alt" id="servicios"><div class="wrap split">
    <div class="split-left">
      ${sectionHead('02', services.label, services.title, services.lead)}
      <div class="note reveal">${esc(services.note)}</div>
    </div>
    <div class="offer">
      ${services.items
        .map(
          (s, i) => `
        <div class="offer-item reveal">
          <div class="offer-num">0${i + 1}</div>
          <div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>
          <span class="offer-arrow">↗</span>
        </div>`
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

  const proofSec = experience.proof
    .map((p) => {
      const big = p.value
        ? `<strong>${esc(p.prefix || '')}<span data-count="${p.value}">0</span>${esc(p.suffix || '')}</strong>`
        : `<strong class="textual">${esc(p.text)}</strong>`;
      return `<article class="proof-card spot reveal-card">${big}<p>${esc(p.label)}</p></article>`;
    })
    .join('');

  const experienceSec = `
  <section class="section alt" id="experiencia"><div class="wrap">
    ${sectionHead('04', experience.label, experience.title, experience.lead)}
    <div class="proof">${proofSec}</div>
    <div class="grid3">
      ${experience.cases
        .map(
          (c, i) => `
        <article class="card spot reveal-card" data-tilt>
          <div class="num">Caso / 0${i + 1}</div>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.text)}</p>
        </article>`
        )
        .join('')}
    </div>
    <div class="logos reveal">
      <span class="logos-label">${esc(experience.logosLabel)}</span>
      <div class="logos-row">
        ${experience.logos
          .map((l) => `<span class="logo" data-name="${esc(l.name)}"><img src="${l.src}" alt="${esc(l.name)}" loading="lazy" /></span>`)
          .join('')}
      </div>
    </div>
    <p class="disclaimer">${esc(experience.disclaimer)}</p>
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

  const social = [
    site.linkedin && `<a href="${esc(site.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    site.instagram && `<a href="${esc(site.instagram)}" target="_blank" rel="noopener">Instagram</a>`,
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
        <a class="btn primary big" href="${mailto}" data-magnetic>${esc(contact.cta)} ${arrow()}</a>
        <span class="mail">${esc(site.email)}</span>
        ${social ? `<div class="social">${social}</div>` : ''}
      </div>
    </div>
  </section>`;

  const footerSec = `
  <footer class="footer"><div class="wrap footer-inner">
    <span>© ${new Date().getFullYear()} ${esc(site.name)} · ${esc(footer.left)}</span>
    <span>${esc(footer.right)}</span>
  </div></footer>`;

  document.getElementById('app').innerHTML = `
    <div class="loader" id="loader"><div class="loader-inner"><b>M<span>.</span>R</b><div class="loader-bar"><i id="loader-bar"></i></div><small id="loader-count">0</small></div></div>
    <div class="progress"><i id="progress"></i></div>
    <div class="grain"></div>
    ${nav}
    <main>${heroSec}${marqueeSec}${approachSec}${servicesSec}${methodSec}${experienceSec}${aboutSec}${contactSec}</main>
    ${footerSec}`;

  // Logos faltantes: mostrar el nombre en texto en lugar de la imagen rota.
  document.querySelectorAll('.logo img').forEach((img) => {
    const swap = () => {
      const box = img.parentElement;
      box.classList.add('text');
      box.textContent = box.dataset.name;
    };
    img.addEventListener('error', swap);
    if (img.complete && img.naturalWidth === 0) swap();
  });
}
