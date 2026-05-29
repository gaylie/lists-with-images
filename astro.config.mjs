// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import sitemap from '@astrojs/sitemap';
const { BASEURL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
  output: 'static',
  site: "https://gaylie.github.io",
  base: "/lists-with-images/",
  integrations: [sitemap()]
});
