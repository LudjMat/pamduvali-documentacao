// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Reduz tempo de rebuild e risco de timeout no dev (Nuxt 4)
  experimental: {
    buildCache: true
  },

  app: {
    head: {
      title: 'SeteAO Docs',
      meta: [
        { name: 'description', content: 'Documentação oficial da linguagem SeteAO e do compilador Pandu-Vali' },
        { name: 'theme-color', content: '#0f172a' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  modules: ['@nuxt/fonts'],
  css: [
    'vuetify/styles'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    // Pré-empacota dependências pesadas para evitar timeout ao carregar módulos
    optimizeDeps: {
      include: ['vuetify']
    },
  },
  fonts: {
  families: [
    { name: 'Inter', provider: 'google' }
  ]}
})