<template>
  <div class="review">
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
        <div class="main-img">
          <img
            v-if="image?.image"
            class="main"
            :src="`${apiBase}/${image?.image}`"
          />
          <img v-else class="main" src="/photos/4-1.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="main-img">
          <img class="main" src="/photos/4-1.png" />
        </div>
      </SwiperSlide>
    </Swiper>
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
}
</style>
