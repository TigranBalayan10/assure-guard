import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site:
    process.env.NODE_ENV === "production"
      ? "https://assureguardinsurance.com/"
      : "http://localhost:4321",
});
