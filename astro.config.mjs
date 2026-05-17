import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://MoysAkuma.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static'
});
