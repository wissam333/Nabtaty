<template>
  <div class="home">
    <!-- <div class="logo" :class="$i18n.locale === 'ar' ? 'ar' : ''">
            <img src="/photos/icons/Asset 1.png" alt="" />
          </div> -->
    <div class="slider">
      <div v-if="pending" class="text-center text-white loader">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else-if="!pending">
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
          :slides-per-view="3"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :effect="'coverflow'"
          :speed="1000"
          :pagination="{
            clickable: true,
          }"
        >
          <SwiperSlide>
            <div class="main-img">
              <img class="main" src="/photos/rose2.png" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="main-img">
              <img class="main" src="/photos/rose3.png" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="main-img">
              <img class="main" src="/photos/rose5.png" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="main-img">
              <img class="main" src="/photos/rose2.png" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="main-img">
              <img class="main" src="/photos/rose3.png" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="main-img">
              <img class="main" src="/photos/rose5.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-img {
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
