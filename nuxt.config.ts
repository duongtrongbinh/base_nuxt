import { defineNuxtConfig  } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  plugins: [
    "@/plugins/axios.ts",
    "@/plugins/pinia.ts",
  ],
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@element-plus/nuxt',
  ],
  runtimeConfig: {
    public: {
      NUXT_API_URL: process.env.NUXT_API_URL,
      NUXT_WEB_URL: process.env.NUXT_WEB_URL
    },
  }
})