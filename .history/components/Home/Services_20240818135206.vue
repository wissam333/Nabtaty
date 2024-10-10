<template>
  <div class="services" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <img class="back" src="/photos/icons/Asset 7.png" alt="" />
    <Swiper
      style="direction: ltr"
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
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
      <SwiperSlide v-for="Service in Services?.items">
        <div class="container">
          <div class="row" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
            <div class="col-lg-5 services-img">
              <img
                v-if="Service.image1"
                :src="`${apiBase}/${Service.image1}`"
                alt=""
              />
            </div>
            <div class="col-lg-5 services-info">
              <!-- <img class="back" src="/photos/icons/Asset 7.png" alt="" /> -->

              <div class="px-10">
                <h1>
                  {{ $i18n.locale === "ar" ? "خدماتنا" : "Our Services" }}
                </h1>
                <div
                  v-html="
                    $i18n.locale === 'ar'
                      ? Service?.description1
                      : Service?.englishDescription1
                  "
                ></div>

                <div class="learn-more">
                  {{ $i18n.locale === "ar" ? "اعرف المزيد" : "Learn More" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: Services, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=1`,
  [
    "image",
    "image1",
    "description1",
    "englishDescription1",
    "description2",
    "englishDescription2",
    "geoLocation",
  ]
);
</script>
<style lang="scss" scoped>
.services {
  background-color: $basic;
  padding: 50px 0px;
  position: relative;
  .back {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .services-img {
    @media (max-width: 991px) {
      width: 80%;
      margin: auto;
    }

    img {
      width: 100%;
    }
  }
  .services-info {
    padding: 30px 0px;
    position: relative;

    h1 {
      font-size: 70px;
      font-family: Herova, "Arial", "sans-serif";
      color: $main;
      margin-bottom: 100px;
      @media (max-width: 991px) {
        font-size: 50px;
        margin-bottom: 30px;
      }
    }
    h3 {
      color: #fff;
    }
    p {
      color: #fff;
    }
    .learn-more {
      position: relative;
      font-weight: bold;
      font-family: Herova, "Arial", "sans-serif";
      color: $main;
      font-size: 20px;
      letter-spacing: 2px;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 60%;
        left: 0;
        background: $main;
        bottom: 0;
      }
    }
  }
}
.services {
  &.ar {
    .back {
      right: auto !important;
      left: 0;
    }
  }
}
</style>
