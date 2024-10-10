<template>
  <div>
    <div class="gallery-thumbnails">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.url"
        @click="openGallery(index)"
        class="thumbnail"
      />
    </div>

    <!-- LightGallery component -->
    <ElementsGallery
      v-if="galleryOpen"
      :images="images"
      :index="currentIndex"
      @close="closeGallery"
      @slide="handleSlide"
    />
  </div>
</template>

<style scoped>
.gallery-thumbnails img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  cursor: pointer;
}
</style>

<script setup>
const images = [
  { url: "/0t5lncjy.mu3.jpg", title: "Image 1" },
  { url: "/knsv3jrr.j5i.jpg", title: "Image 2" },
];

const currentIndex = ref(0);
const galleryOpen = ref(false);

function openGallery(index) {
  currentIndex.value = index;
  galleryOpen.value = true;
}

function closeGallery() {
  galleryOpen.value = false;
}

function handleSlide({ index }) {
  console.log("Current slide index:", index);
}
</script>
