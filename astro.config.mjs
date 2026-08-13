import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  site: ' https://DevzIcaro.github.io/',
  base: 'portfolio-icaro/',
  integrations: [react()],

  vite: {
    plugins: [tailwindv4()]
  }
});