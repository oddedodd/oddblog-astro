// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "9chq8hlo",
      dataset: "production",
      useCdn: true,
    }),
    react(),
  ],
});
