<template>
  <lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    @init="onInit"
    @beforeSlide="onBeforeSlide"
  >
    <a href="">
      <img alt="img1" src="/knsv3jrr.j5i.jpg" />
    </a>
    <a href="">
      <img alt="img2" src="/knsv3jrr.j5i.jpg" />
    </a>
    <!-- Add more images as needed -->
  </lightgallery>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Define plugins array using ref since it's reactive
const plugins = ref([lgThumbnail, lgZoom]);

// Event handler for lightGallery initialization
const onInit = () => {
  console.log("lightGallery has been initialized");
};

// Event handler for when the slide is about to change
const onBeforeSlide = () => {
  console.log("calling before slide");
};
</script>

<style scoped>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";

/* @import "../../node_modules/lightgallery/css/lightgallery.css";
@import "../../node_modules/lightgallery/css/lg-thumbnail.css";
@import "../../node_modules/lightgallery/css/lg-zoom.css"; */
</style>
