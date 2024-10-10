<template>
  <div class="review">
    <div class="overlay">
      <Swiper
        style="direction: ltr"
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="image in 3">
          <div class="main-img"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.review {
  position: relative;
  background: url("/photos/35-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .overlay {
    background-color: #0000003c;
  }
}
</style>
