<template>
  <div class="Partiners nav-margin">
    <div class="cont">
      <h1 class="linear">
        <img
          src="/logo.png"
          alt=""
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          width="90"
        />
        <span>
          {{ $i18n.locale === "ar" ? "الكتالوجات" : "Catalogues" }}
        </span>
      </h1>
      <Swiper
        data-aos-duration="1000"
        data-aos="fade-up"
        style="direction: ltr"
        :modules="[SwiperAutoplay]"
        :loop="false"
        :breakpoints="{
          '1100': {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          '992': {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },

          '550': {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          '250': {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          '1': {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :speed="2000"
      >
        <SwiperSlide v-for="client in Partiners?.items" :key="client?.id">
          <a class="sponser" :href="client?.url1" target="_blank">
            <div class="sponser-img">
              <img
                :alt="client?.englishName"
                :src="`${apiBase}${client?.image}`"
                v-if="client?.image"
              />
              <!-- <img v-else src="/photos/icons/Asset 1.png" alt="" /> -->
            </div>
            <div class="sponser-desc text-center">
              <h5 class="mt-4">
                {{ locale === "ar" ? client?.name : client?.englishName }}
              </h5>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

// get Partiners
const { data: Partiners, pending: loadingPartiners } =
  await useGetSiteApi().GetAll(`${api.Blocks}?categoryId=4`, [
    "name",
    "englishName",
    "image",
    "id",
    "blockPhotos",
    "url1",
    "parent",
  ]);
</script>
<style lang="scss" scoped>
.Partiners {
  margin-bottom: 50px;
  @media (max-width: 991px) {
    padding-bottom: 0;
  }
  h1 {
    text-align: center;
    padding: 40px;
    position: relative;
    z-index: 10;
    img {
      margin-right: 10px;
      &.ar {
        margin-left: 10px;
      }
    }
    @media (max-width: 768px) {
      padding: 12px;
    }
  }
  .sponser {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 20px;
    background-color: #f5f6f6;
    margin: 0px 10px;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      border: 1px solid $main;
    }

    .sponser-img {
      margin-right: 18px;
      transition: all 0.2s ease;
      mix-blend-mode: darken;
      width: 200px;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit: contain;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    .sponser-desc {
      font-size: 13px;
      font-weight: 600;
      color: #333;

      h5 {
        color: #231f1e;
        font-weight: bold;
      }
    }
  }
}
</style>
