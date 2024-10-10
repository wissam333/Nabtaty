<template>
  <client-only>
    <vue-picture-swipe :items="imgs" :options="options" />
  </client-only>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import VuePictureSwipe from "vue-picture-swipe";
// import "vue-picture-swipe/dist/vue-picture-swipe.css";

// Props definition
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

// Emit (optional if needed for events)
// const emit = defineEmits()
</script>
