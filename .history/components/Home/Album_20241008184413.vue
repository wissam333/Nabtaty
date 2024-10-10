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
          :slides-per-view="5"
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
          <SwiperSlide v-for="image in 8">
            <div class="main-img">
              <img class="main" src="/photos/mainImg.jpg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
