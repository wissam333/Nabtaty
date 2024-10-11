<template>
  <div class="home container">
    <div class="leaf">
      <img src="/photos/leaf2.png" alt="" />
    </div>
    <div class="title">
      <h1 class="d-flex align-items-center">
        <img width="70" src="/logo/logo nabtaty-08.png" alt="" />
        <span class="underline">
          {{ $i18n.locale === "ar" ? "البومنا" : "Our Album" }}
        </span>
      </h1>
    </div>
    <div class="slider">
      <div v-if="pending" class="text-center text-white loader">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else-if="!pending">
        <Swiper
          style="direction: ltr"
          :modules="[
            SwiperAutoplay,
            SwiperEffectCoverflow,
            SwiperPagination,
            SwiperNavigation,
          ]"
          :loop="false"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :effect="'coverflow'"
          :speed="1000"
          :pagination="{
            clickable: true,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            '1200': {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            '992': {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },

            '768': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },

            '250': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            '1': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
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
    <!-- Custom Navigation Buttons -->
    <div class="swiper-navigation">
      <button class="swiper-button-next"></button>
      <button class="swiper-button-prev"></button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
  margin-top: 50px;
  position: relative;
  .title {
    font-weight: bold;
    span {
      -webkit-background-clip: text;
      font-weight: bold;
      background-color: #8cc63e;
      background-image: linear-gradient(to right, #191d23, #8cc63e);
      background-repeat: repeat;
      background-size: 100%;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
  .main-img {
    box-shadow: -7px 7px 9px 0px #33333331;
    height: 600px;
    @media (max-width: 768px) {
      height: 400px;
    }
    @media (max-width: 400px) {
      height: 350px;
    }
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
.leaf {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
