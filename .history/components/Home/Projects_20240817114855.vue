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
        <SwiperSlide v-for="image in 3">
          <div class="project-block">
            <div class="project-img">
              <img src="/photos/images/Artboard 7.png" alt="" />
            </div>
            <div class="project-info"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.Projects {
  h1 {
    font-size: 70px;
    font-family: Herova, "Arial", "sans-serif";
    color: $main;
    margin-bottom: 100px;
  }
}
</style>
