// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: process.env.SITE_URL || "https://gruporincon.com.co",
  integrations: [
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
