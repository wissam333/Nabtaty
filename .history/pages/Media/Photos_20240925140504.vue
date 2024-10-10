<template>
  <ClientOnly>
    <lightgallery
      :settings="{ speed: 500, plugins: plugins }"
      :onInit="onInit"
      :onBeforeSlide="onBeforeSlide"
    >
      <a
        data-lg-size="1406-1390"
        class="gallery-item"
        data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
      >
        <img
          class="img-responsive"
          src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
        />
      </a>
      <a
        data-lg-size="1400-1400"
        class="gallery-item"
        data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
      >
        <img
          class="img-responsive"
          src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
        />
      </a>
      <a
        data-lg-size="1400-1400"
        class="gallery-item"
        data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
      >
        <img
          style="width: 200px"
          class="img-responsive"
          src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
        />
      </a>
      <a
        class="gallery-item"
        data-video='{"source": [{"src":"https://www.lightgalleryjs.com/videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
        data-poster=""
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
      >
        <img
          width="200"
          class="img-responsive"
          src="https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg"
        />
      </a>
    </lightgallery>
  </ClientOnly>
</template>

<script setup lang="ts">
import Lightgallery from "../../node_modules/lightgallery/vue";
import lgThumbnail from "../../node_modules/lightgallery/plugins/thumbnail";
import lgZoom from "../../node_modules/lightgallery/plugins/zoom";
import { ClientOnly } from "#build/components";

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
@import "../../node_modules/lightgallery/css/lightgallery.css";
@import "../../node_modules/lightgallery/css/lg-thumbnail.css";
@import "../../node_modules/lightgallery/css/lg-zoom.css";
</style>
