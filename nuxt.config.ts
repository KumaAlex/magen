// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'kk', name: 'Қазақша', file: 'kk.json' }
    ],
    defaultLocale: 'ru',
    langDir: 'locales/',
    strategy: 'prefix',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
  ]
})