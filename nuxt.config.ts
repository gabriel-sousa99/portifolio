export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  // A página é gerada no build. A Vercel serve o HTML pronto.
  routeRules: { '/': { prerender: true } },
  colorMode: { preference: 'dark', fallback: 'dark' },
  icon: { serverBundle: 'local' },
  devtools: { enabled: false }
})
