<template>
  <div
    class="offers"
    :class="$i18n.locale === 'ar' ? 'ar' : ''"
    v-if="Products?.data?.length"
  >
    <div class="container mt-10">
      <div class="see-all">
        <nuxt-link
          :to="`/FoodByCategory/${useAllFoodesTypes().value[0]?.id}`"
          class="btn"
        >
          {{ $i18n.locale === "ar" ? "رؤية الكل" : "See All" }}
        </nuxt-link>
      </div>
      <h1>
        <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
        <span>{{ $i18n.locale === "ar" ? "الحلويات" : "DESSERTS" }}</span>
      </h1>
      <!-- <h1>
            <span>
              {{ $i18n.locale === "ar" ? "الخاصة" : "Offers" }}
            </span>
          </h1> -->

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
  `${api.GetProducts}?CategoryId=${useAllFoodesTypes().value[1]?.id}&type=B2B`
);
</script>
<style lang="scss" scoped>
.offers {
  padding: 100px 0px;
  position: relative;
  background: url("/photos/31-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 991px) {
    padding: 20px 0px;
  }
  .container {
    position: relative;
    h1 {
      font-weight: bold;
      &:first-of-type {
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
      //   &:last-of-type {
      //     color: $second;
      //     margin-left: 140px;
      //     position: relative;
      //     span {
      //       -webkit-background-clip: text;
      //       font-weight: bold;
      //       background-color: #146890;
      //       background-image: linear-gradient(45deg, #ec9605, #ffc35f, #ec9605);
      //       background-repeat: repeat;
      //       background-size: 100%;
      //       -webkit-text-fill-color: transparent;
      //       -moz-background-clip: text;
      //       -moz-text-fill-color: transparent;
      //     }
      //     &::after {
      //       content: "";
      //       height: 2px;
      //       background-color: #ec9605;
      //       width: calc(100% - 120px);
      //       position: absolute;
      //       right: 0px;
      //       bottom: 12px;
      //       @media (max-width: 550px) {
      //         width: calc(100% - 85px);
      //       }
      //     }
      //   }
    }
    .see-all {
      position: absolute;
      top: 5px;
      right: 0;
      .btn {
        background: linear-gradient(45deg, #146890, #45b2e9, #146890);
        color: #fff;
        padding: 5px 15px;
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
.ar {
  .see-all {
    left: 0;
    right: auto !important;
  }
}

// .offers {
//   &.ar {
//     h1 {
//       &:last-of-type {
//         margin-left: 0px !important;
//         margin-right: 140px;
//         &::after {
//           right: auto !important;
//           left: 0;
//           width: calc(100% - 150px) !important;
//           @media (max-width: 768px) {
//             width: calc(100% - 100px) !important;
//           }
//         }
//       }
//     }
//   }
// }
</style>
