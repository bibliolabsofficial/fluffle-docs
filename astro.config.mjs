// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://react-native-fluffle.github.io',
  trailingSlash: 'never',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
