<template>
  <div class="home">
    <div class="slider">
      <div v-if="pending" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else>
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :effect="'fade'"
          :speed="1000"
          :pagination="{
            clickable: true,
          }"
        >
          <SwiperSlide v-for="image in MainImg.items[0].blockPhotos">
            <div class="main-img">
              <img
                v-if="image.image"
                class="main"
                :src="`${apiBase}/${image.image}`"
              />
              <img v-else class="main" src="/photos/images/Artboard 1.png" />
              <!-- <img class="main" src="/photos/images/Artboard 1.png" /> -->
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: MainImg, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=5`
);
</script>

<style lang="scss" scoped>
.home {
  .main-img {
    width: 100%;
    height: 95vh;
    @media (max-width: 768px) {
      height: 50vh;
    }
    .main {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.logo {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 991px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    width: 100px;
  }
}
</style>
