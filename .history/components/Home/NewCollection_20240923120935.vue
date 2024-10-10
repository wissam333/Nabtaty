<template>
  <div class="NewCollection" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <div class="container mt-10">
      <h1 class="title linear">
        <img
          src="/logo.png"
          alt=""
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          width="90"
        />
        <span class="underline">
          {{ $i18n.locale === "ar" ? "المجموعات الجديدة" : "New Collections" }}
        </span>
      </h1>

      <div v-if="pending1" class="text-center text-white loader">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else>
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :loop="false"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '1200': {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            '992': {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },

            '768': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },

            '250': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            '1': {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }"
        >
          <SwiperSlide v-for="product in Products.data" :key="product.name">
            <div class="product" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
              <ProductCard :product="product"></ProductCard>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();

const { data: Products1, pending1 } = await useGetSiteApi().GetAll(
  `${api.Newcollection}?categoryId=9`
);

const { data: Products2, pending2 } = await useGetSiteApi().GetAll(
  `${api.Newcollection}?categoryId=3`
);

const { data: Products3, pending3 } = await useGetSiteApi().GetAll(
  `${api.Newcollection}?categoryId=2`
);
</script>
<style lang="scss" scoped>
.NewCollection {
  padding: 100px 0px;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 991px) {
    padding: 20px 0px;
  }
  .container {
    .title {
      position: relative;
      img {
        margin-right: 10px;
        &.ar {
          margin-left: 10px;
        }
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        width: 100%;
        height: 3px;
        right: 0;
        background: linear-gradient(
          to left,
          $main,
          $second,
          $main,
          $second,
          $main,
          $second,
          $main
        );
        box-shadow: 0px 6px 7px 0px #33333362;
      }
    }
    .product {
      height: 500px;
      width: 250px;
      border-radius: 300px;
      box-shadow: 0px 0px 7px 0px #33333387;
      position: relative;
      @media (max-width: 768px) {
        height: 300px;
        width: 90%;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
      }
    }
  }
}
.swiper {
  padding: 40px 0px;
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
}
</style>
