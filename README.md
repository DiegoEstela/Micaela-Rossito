# Portfolio — Micaela Rossito

Sitio de una sola página hecho con Vite + JavaScript vanilla + GSAP (ScrollTrigger) + Lenis.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
```

## Cómo editar el contenido

- **Textos, email, redes, servicios, etc.:** `src/content.js` (no hace falta tocar nada más).
- **Foto:** `public/images/micaela.jpg` (se usa en el hero y en "Sobre mí"; si no existe, se muestra el monograma).
- **Logos:** `public/images/logos/` (`mastery-haus.svg`, `sofia-contreras.svg`, `gcba.svg`; si falta uno se muestra el nombre en texto).
- **Colores y tipografías:** variables al inicio de `src/style.css`.

## Deploy

Vercel detecta Vite automáticamente (Build: `npm run build`, Output: `dist`). Cada push a `main` redeploya.
