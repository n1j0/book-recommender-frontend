import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'assets/main.scss',
    ],
    build: {
        transpile: ['primevue'],
    },
    publicRuntimeConfig: {
        BACKEND_URL: process.env.BACKEND_URL
    }
})
