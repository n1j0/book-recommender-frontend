import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

export default defineNuxtPlugin((app) => {
    app.vueApp.use(PrimeVue, { ripple: true })
    app.vueApp.component('Button', Button)
})