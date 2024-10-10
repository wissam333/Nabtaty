<template>
  <div class="offers" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <div class="container mt-10">
      <div class="see-all">
        <button class="btn">
          {{ $i18n.locale === "ar" ? "رؤية الكل" : "See All" }}
        </button>
      </div>
      <h1>
        <span>
          {{ $i18n.locale === "ar" ? "مشروبات غازية" : "Soft Drinks" }}
        </span>
      </h1>

      <div v-if="pending" class="text-center text-white loader">
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

const { data: Products, pending } = await useGetSiteApi().GetAll(
  `${api.GetProducts}?CategoryId=${useAllFoodesTypes().value[5]?.id}&type=B2B`
);
</script>
<style lang="scss" scoped>
.offers {
  display: flow-root;
  position: relative;
  background: url("/photos/31-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .container {
    margin-top: 20px;
    position: relative;
    .see-all {
      position: absolute;
      top: 0;
      right: 0;
      button {
        background: linear-gradient(45deg, #146890, #45b2e9, #146890);
        color: #fff;
        padding: 5px 15px;
      }
    }
    h1 {
      font-weight: bold;
      span {
        -webkit-background-clip: text;
        font-weight: bold;
        background-color: #146890;
        background-image: linear-gradient(45deg, #146890, #45b2e9, #146890);
        background-repeat: repeat;
        background-size: 100%;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }
    }
  }

  .product {
    height: 500px;
    width: 250px;
    border-radius: 300px;
    box-shadow: 0px 0px 7px 0px $main;
    position: relative;
    @media (max-width: 768px) {
      height: 300px;
      width: 90%;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
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
