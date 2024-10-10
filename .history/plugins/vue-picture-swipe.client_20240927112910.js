import VuePictureSwipe from 'vue-picture-swipe'
import { defineNuxtPlugin } from '#app'
import 'vue-picture-swipe/dist/vue-picture-swipe.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VuePictureSwipe', VuePictureSwipe)
})
