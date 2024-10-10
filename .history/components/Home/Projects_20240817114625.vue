<template>
  <div class="projects">
    <div class="container">
      <h1>{{ $i18n.locale === "ar" ? "مشاريعنا" : "Projects" }}</h1>
      <Swiper
        style="direction: ltr"
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="3"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :speed="1000"
        :pagination="{
          clickable: true,
        }"
      >
        <SwiperSlide>
          <div class="project-block">

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped></style>
