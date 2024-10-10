<template>
  <client-only>
    <vue-picture-swipe :items="imgs" :options="options" />
  </client-only>
</template>

<script>
import VuePictureSwipe from 'vue-picture-swipe'

export default {
  name: 'Gallery',
  components: {
    VuePictureSwipe
  },
  props: {
    imgs: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default () {
        return {
          bgOpacity: 0.95,
          shareEl: true,
          zoomEl: true
        }
      }
    }
  }
}
</script>