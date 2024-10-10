<script setup>
const images = [
  { url: "image1.jpg", title: "Image 1" },
  { url: "image2.jpg", title: "Image 2" },
  { url: "image3.jpg", title: "Image 3" },
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
