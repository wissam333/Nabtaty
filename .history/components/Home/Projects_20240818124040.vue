<template>
  <div class="projects">
    <div class="container">
      <h1>{{ $i18n.locale === "ar" ? "مشاريعنا" : "Projects" }}</h1>
      <Swiper
        style="direction: ltr"
        :modules="[SwiperAutoplay, SwiperPagination]"
        :breakpoints="{
          '1100': {
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

          '450': {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          '1': {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }"
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
        <SwiperSlide v-for="image in 4">
          <div
            class="project-block"
            :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
          >
            <div class="project-img">
              <img src="/photos/images/Artboard 7.png" alt="" />
            </div>
            <div class="project-info">
              <h2>Lorem Apsum</h2>
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
  .container {
    @media (max-width: 768px) {
      max-width: 100% !important;
    }
  }
  h1 {
    font-size: 60px;
    font-family: Herova, "Arial", "sans-serif";
    color: $main;
    margin-top: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .project-block {
    margin: 10px;
    .project-img {
      img {
        width: 100%;
      }
    }
    .project-info {
      h2 {
        font-weight: bold;
        font-family: NeutraText-bold, "Arial", "sans-serif";
        color: $basic;
        margin-top: 10px;
      }
      .learn-more {
        width: 60%;
        height: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.swiper {
  padding-bottom: 100px;
}
</style>
