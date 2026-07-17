// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import partytown from '@astrojs/partytown/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://gruporincon.com.co',
  integrations: [partytown({
    config: {
      forward: ['dataLayer.push'],
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    webAnalitycs: {
      enable: true,
    }
  }),
});
