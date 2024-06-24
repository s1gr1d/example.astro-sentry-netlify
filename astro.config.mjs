import { defineConfig } from 'astro/config';
import sentry from '@sentry/astro';
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [sentry({
    dsn: import.meta.env.PUBLIC_SENTRY_DSN
  })]
});