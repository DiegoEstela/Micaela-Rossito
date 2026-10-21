import { defineConfig } from 'vite';

// URL pública del sitio, necesaria para que og:image sea absoluta.
// Prioridad: VITE_SITE_URL (dominio propio) > dominio de producción que Vercel expone en el build.
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = (process.env.VITE_SITE_URL || (host ? `https://${host}` : '')).replace(/\/$/, '');

export default defineConfig({
  plugins: [
    {
      name: 'site-url',
      transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    },
  ],
});
