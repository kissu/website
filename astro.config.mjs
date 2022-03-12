// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Enable the Vue renderer to support Vue components.
	renderers: ['@astrojs/renderer-vue'],
  buildOptions: {
    site: 'https://kissu.io', // Used to generate sitemaps and canonical URLs.
    sitemap: true,
  },
  devOptions: {
    port: 7777,
  },
  vite: {
    plugins: [],
    resolve: {
        alias: [
          { find: '@', replacement: '/src' }
        ]
    },
    // optimizeDeps: {
    //     allowNodeBuiltins: true
    // }
  }
});
