<template>
  <div class="product">
    <div class="cont">
      <div class="preview">
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :pagination="{
            clickable: true,
          }"
        >
        </Swiper>
      </div>
      <div class="info"></div>
    </div>
  </div>
  SwiperThumbs
</template>
<script setup></script>
<style lang="scss" scoped></style>
