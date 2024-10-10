<template>
  <div class="home">
    <div class="title">
      <h1 class="d-flex align-items-center">
        <img width="70" src="/logo/logo nabtaty-08.png" alt="" />
        <span class="underline">
          {{ $i18n.locale === "ar" ? "" : "Our Album" }}
        </span>
      </h1>
    </div>
    <div class="slider container">
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
.home {
  margin-top: 50px;
  .main-img {
    height: 600px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.swiper {
  padding: 70px 0px;
}
</style>
