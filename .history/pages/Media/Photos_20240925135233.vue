<template>
  <div ref="galleryRef" class="gallery-container">
    <a href="knsv3jrr.j5i.jpg">
      <img src="/knsv3jrr.j5i.jpg" alt="Image 1" />
    </a>
    <a href="knsv3jrr.j5i.jpg">
      <img src="/knsv3jrr.j5i.jpg" alt="Image 2" />
    </a>
    <a href="/knsv3jrr.j5i.jpg">
      <img src="/knsv3jrr.j5i.jpg" alt="Image 3" />
    </a>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Define the ref for the gallery container
const galleryRef = ref(null);

// Initialize lightGallery when the component mounts
onMounted(() => {
  lightGallery(galleryRef.value, {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    zoom: true,
    thumbnail: true,
  });
});
</script>

<style scoped>
.gallery-container {
  display: flex;
  gap: 20px;
}

.gallery-container img {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
</style>
