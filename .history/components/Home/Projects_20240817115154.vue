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
            <div class="project-info">
              <h3>Lorem Apsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nulla, ipsam officia sequi dolorem nihil adipisci
                quibusdam autem error nemo, minima est esse. Porro
                necessitatibus cupiditate ut cum harum distinctio.
              </p>
              <div class="learn-more">
                <img src="/photos/icons/Asset 6.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.projects {
  h1 {
    font-size: 70px;
    font-family: Herova, "Arial", "sans-serif";
    color: $main;
    margin-top: 100px;
  }
  .project-block {
    .project-info {
      .learn-more {
        width: 60%;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
