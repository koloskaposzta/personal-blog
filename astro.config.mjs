import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://valamikolos.hu',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap(), partytown()]
});