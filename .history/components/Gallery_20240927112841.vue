<template>
  <client-only>
    <vue-picture-swipe :items="imgs" :options="options" />
  </client-only>
</template>

<script setup>
import VuePictureSwipe from "vue-picture-swipe";
import "vue-picture-swipe/dist/vue-picture-swipe.css";

// Props for passing images and options
const props = defineProps({
  imgs: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    required: false,
    default: () => ({
      bgOpacity: 0.95,
      shareEl: true,
      zoomEl: true,
    }),
  },
});
</script>
