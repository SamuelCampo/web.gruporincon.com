// @ts-check
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import partytown from "@astrojs/partytown";


export default defineConfig({
  site: process.env.SITE_URL || "https://gruporincon.com.co",
  integrations: [
    sitemap(),
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
});
