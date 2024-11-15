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
          <SwiperSlide v-for="image in MainImg" :key="image.id">
            <div class="main-img">
              <img class="main" :src="`${apiBase}/${image.photo}`" />
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
  `${api.GetHomePhotos}`
);

let mobile = ref(false);

const checkWindowSize = () => {
  mobile.value = window.matchMedia("(max-width: 1250px)").matches;
};
if (process.client) {
  onBeforeMount(() => {
    checkWindowSize();
  });
  onMounted(() => {
    window.addEventListener("resize", checkWindowSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkWindowSize);
  });
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;

  .main-img {
    width: 100%;
    height: 70vh;

    @media (max-width: 768px) {
      height: 50vh;
    }
    .main {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 768px) {
        object-fit: cover;
      }
    }
  }
  .info {
    position: absolute;
    width: 100%;
    top: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h2 {
      padding: 0px 40px;
      font-family: IslandMoments;
      color: rgb(190 86 198);
    }
    h1 {
      font-size: 50px;
      color: #333333d0;
      padding: 0px 40px;
      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
    .btn {
      margin: 20px 40px;
      padding: 10px 15px;
      background-color: $basic;
      border-radius: 100px;
      color: #fff;
    }
  }
}
.loader {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper {
  height: 70vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
}
</style>
