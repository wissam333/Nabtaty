<template>
  <div class="home">
    <div class="slider">
      <div v-if="pending" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else>
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperEffectFade]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :effect="'fade'"
          :speed="1000"
        >
          <SwiperSlide v-for="image in [1, 2, 3]">
            <div class="main-img">
              <!-- <img
                  v-if="image.image"
                  class="main"
                  :src="`${apiBase}/${image.image}`"
                />
                <img v-else class="main" src="/photos/images/Artboard1.png" /> -->
              <img class="main" src="/photos/icons/Asset 4.png" />
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
  `${api.Blocks}?categoryId=8`
);
</script>

<style lang="scss" scoped>
.home {
  .main-img {
    width: 100%;
    height: 100%;
    .main {
      width: 100%;
      height: 100%;
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
