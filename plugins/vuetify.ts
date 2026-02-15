import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            background: '#0f172a',
            primary: '#3abbf5',
            surface: '#0f172a',
            onSurface: '#f5f5f5',
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
