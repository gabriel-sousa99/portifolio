export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ssr: true,
  app: {
    // No GitHub Pages o site fica em /<repositório>/. O workflow define NUXT_APP_BASE_URL.
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${process.env.NUXT_APP_BASE_URL || '/'}favicon.svg` }]
    }
  },
  nitro: { preset: 'github-pages' },
  colorMode: { preference: 'dark', fallback: 'dark' },
  icon: { serverBundle: 'local' },
  devtools: { enabled: false }
})
