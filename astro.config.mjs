// @ts-check
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import partytown from "@astrojs/partytown";
import robotsTxt from 'astro-robots-txt';

// Mercado que se compila: "co" (gruporincon.com.co, por defecto) o "ve" (gruporincon.com.ve).
// En Vercel se define con la variable PUBLIC_SITE_MARKET en cada proyecto.
// En local: `pnpm dev:ve` / `pnpm build:ve` (ver package.json).
const env = process.env;
const MARKET = env.PUBLIC_SITE_MARKET === "ve" ? "ve" : "co";
const MARKET_URLS = {
  co: "https://www.gruporincon.com.co",
  ve: "https://www.gruporincon.com.ve",
};
// Secciones cuyo canonical vive sólo en un mercado (ver src/config/markets.ts → CANONICAL_ONLY).
const CANONICAL_ONLY = [{ prefix: "/blogs/", market: "co" }];


export default defineConfig({
  site: env.SITE_URL || MARKET_URLS[MARKET],
  integrations: [
    robotsTxt(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        if (path.startsWith('/propuesta-')) return false;
        // No listar en este sitemap lo que tiene su canonical en el otro dominio.
        return !CANONICAL_ONLY.some((c) => path.startsWith(c.prefix) && c.market !== MARKET);
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },
  trailingSlash: 'always', // Agregamos esta configuración para que siempre se generen URLs con slash al final
  build: {
    inlineStylesheets: 'always',
  }
});
