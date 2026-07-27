// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sarvagunsociety.org',
  vite: {
    plugins: [tailwindcss()],
  },
  server: { port: 4321 },
  redirects: {
    '/charity-work-and-program-in-malsi-school': '/projects/school-development',
    '/school-development-and-rural-development': '/projects/school-development',
  },
});
