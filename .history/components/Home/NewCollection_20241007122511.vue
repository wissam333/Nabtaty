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
          {{ $t("NewCollections") }}
        </span>
      </h1>

      <!-- Chairs -->
      <div>
        <h2 class="color mt-10 pt-10 mb-5 mx-3 fw-bold title">
          <img
            src="/logo.png"
            alt=""
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
            width="80"
          />
          <span>
            {{ $t("Chairs") }}
          </span>
        </h2>
        <div v-if="pending1" class="text-center text-white loader">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <div v-else>
          <Swiper
            class="Chairs"
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
              '1400': {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              '992': {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },

              '768': {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },

              '380': {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              '1': {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
            }"
          >
            <SwiperSlide
              v-for="product in Products1?.items"
              :key="product.name"
            >
              <div
                class="product"
                data-aos="fade-up"
                :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
              >
                <ProductCard :product="product"></ProductCard>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <!-- Office Furniture -->
      <div>
        <h2 class="color mt-10 pt-10 mb-5 mx-3 fw-bold title">
          <img
            src="/logo.png"
            alt=""
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
            width="80"
          />
          <span>
            {{ $t("OfficeFurniture") }}
          </span>
        </h2>
        <div v-if="pending3" class="text-center text-white loader">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <div v-else>
          <Swiper
            class="Office"
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
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              '992': {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },

              '768': {
                slidesPerView: 1,
                slidesPerGroup: 1,
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
          >
            <SwiperSlide
              v-for="product in Products3?.items"
              :key="product.name"
            >
              <div
                class="product"
                data-aos="fade-up"
                :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
              >
                <ProductCard2 :product="product"></ProductCard2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <!-- Sofa -->
      <div>
        <h2 class="color mt-10 pt-10 mb-5 mx-3 fw-bold title">
          <img
            src="/logo.png"
            alt=""
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
            width="80"
          />
          <span>
            {{ $t("Sofa") }}
          </span>
        </h2>
        <div v-if="pending2" class="text-center text-white loader">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <div v-else>
          <Swiper
            class="sofa"
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
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              '992': {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },

              '768': {
                slidesPerView: 1,
                slidesPerGroup: 1,
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
          >
            <SwiperSlide
              v-for="product in Products2?.items"
              :key="product.name"
            >
              <div
                class="product"
                data-aos="fade-up"
                :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
              >
                <ProductCard2 :product="product"></ProductCard2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
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
  `${api.AllNewCollection}?categoryId=3`
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
        margin-left: 0px;
        margin-right: 10px;
        &.ar {
          margin-right: 0px;
          margin-left: 10px;
        }
      }
      //   &::after {
      //     content: "";
      //     position: absolute;
      //     bottom: -15px;
      //     width: 100%;
      //     height: 3px;
      //     right: 0;
      //     background: linear-gradient(
      //       to left,
      //       $main,
      //       $second,
      //       $main,
      //       $second,
      //       $main,
      //       $second,
      //       $main
      //     );
      //     box-shadow: 0px 6px 7px 0px #33333362;
      //   }
    }
    .Chairs {
      .product {
        height: auto;
        width: 97%;
        border-radius: 40px;
        box-shadow: 0px 0px 7px 0px #33333387;
        position: relative;
        overflow: hidden;
        @media (max-width: 768px) {
          width: 90%;
        }
      }
    }
  }
}
.swiper {
  padding-bottom: 60px;
  padding-top: 20px;
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
}
.Office {
  .product {
    overflow: hidden;
    height: auto;
    width: 97% !important;
    border-radius: 40px;
    box-shadow: 0px 0px 7px 0px #33333387;
    position: relative;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
}
.sofa {
  .product {
    height: auto;
    width: 97% !important;
    border-radius: 40px;
    box-shadow: 0px 0px 7px 0px #33333387;
    overflow: hidden;
    position: relative;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
}
</style>
