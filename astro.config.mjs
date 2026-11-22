// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fremvaerk.dk',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // External CSS only, so the Content-Security-Policy can use style-src 'self'.
    inlineStylesheets: 'never',
  },
});
