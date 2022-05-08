// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import sitemap from '@astrojs/sitemap'

// @ts-check
export default defineConfig({
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  trailingSlash: 'ignore',

  integrations: [vue(), sitemap()],
  site: 'https://kissu.io', // Used to generate sitemaps and canonical URLs.
  server: {
    port: 7777,
    host: true,
  },
  // markdown: {
  //   remarkPlugins: ['remark-code-titles', ['rehype-autolink-headings', { behavior: 'prepend' }]],
  //   rehypePlugins: [['rehype-toc', { headings: ['h2', 'h3'] }], [addClasses, { 'h1,h2,h3': 'title' }], 'rehype-slug']
  // },
  markdown: {
    //* set to true if we want all the drafts in the final build
    drafts: false,
    syntaxHighlight: 'shiki',
    // '@astrojs/markdown-remark',
    shikiConfig: {
      //* https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      //* custom theme used, based on https://github.com/markthomasmiller/sorcerer
      theme: 'css-variables',
      //* Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    remarkPlugins: ['remark-code-titles', ['rehype-autolink-headings', { behavior: 'prepend' }]],
    rehypePlugins: [
      // ['rehype-toc', { headings: ['h2', 'h3'] }],
      // [addClasses, { 'h1,h2,h3': 'title' }],
      'rehype-slug',
    ],
  },
  vite: {
    plugins: [],
    optimizeDeps: {
      allowNodeBuiltins: true,
    },
  },
})
