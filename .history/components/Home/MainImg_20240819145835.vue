<template>
  <div class="home">
    <div class="d-flex socials" :class="$i18n.locale === 'ar' ? 'ar' : ''">
      <div class="socials-img">
        <a href="https://www.facebook.com/" target="_blank" class="mx-2">
          <font-awesome :icon="['fab', 'facebook']" />
        </a>
      </div>

      <div class="socials-img">
        <a href="https://web.whatsapp.com/" target="_blank" class="mx-2">
          <font-awesome :icon="['fab', 'whatsapp']" />
        </a>
      </div>

      <div class="socials-img">
        <a href="https://x.com/" target="_blank" class="mx-2">
          <font-awesome :icon="['fab', 'x-twitter']" />
        </a>
      </div>

      <div class="socials-img">
        <a href="https://www.linkedin.com/" target="_blank" class="mx-2">
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>
    <div class="slider">
      <div v-if="pending" class="text-center text-white loader">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else>
        <Swiper
          style="direction: ltr"
          :modules="[
            SwiperAutoplay,
            SwiperEffectFade,
            SwiperPagination,
            Swiper,
          ]"
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
          vertical
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
  position: relative;
  .socials {
    padding: 0px 30px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 110px;
    z-index: 3;

    &.ar {
      left: auto !important;
      right: 0;
    }
    @media (max-width: 1200px) {
      flex-direction: row;
      margin-bottom: 50px;
    }

    &.ar {
      .socials-img {
        margin-left: 20px !important;
        margin-right: 0px !important;
      }
    }
    .socials-img {
      width: 40px;
      font-size: 35px;
      margin-right: 20px;
      display: flex;
      justify-content: center;

      a {
        color: #fff;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          color: $main;
        }
      }
      img {
        width: 100%;
      }
    }
  }
  .main-img {
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      height: 70vh;
    }
    .main {
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        object-fit: cover;
      }
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
.loader {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
