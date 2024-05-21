import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), auth()]
});