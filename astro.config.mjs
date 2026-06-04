import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://moysakuma.me',
  base: '/',
  integrations: [tailwind()],
  output: 'static'
});
