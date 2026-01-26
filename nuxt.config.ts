// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Pamduvali Docs',
      meta: [
        { name: 'description', content: 'Documentação oficial da linguagem Pamduvali' },
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
    }
  },
  fonts: {
  families: [
    { name: 'Inter', provider: 'google' }
  ]}
})