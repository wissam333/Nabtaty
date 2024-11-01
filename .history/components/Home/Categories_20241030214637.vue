<template>
  <div class="Categories" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <div class="container mt-10">
      <!-- <div class="see-all">
        <nuxt-link :to="`/FoodByCategory/`" class="btn">
          {{ $i18n.locale === "ar" ? "رؤية الكل" : "See All" }}
        </nuxt-link>
      </div> -->
      <h1>
        <img width="70" src="/photos/nabtaty8.png" alt="" />
        <span>
          {{ $i18n.locale === "ar" ? "الفئات" : "Categories" }}
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
          <SwiperSlide v-for="product in Products" :key="product.id">
            <div
              class="product"
              :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <CategoryCard :product="product"></CategoryCard>
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

let Products = ref();
if (locale.value === "ar") {
  const { data: ProductsData, pending } = await useFetch(
    `${api.findAllCategories}`,
    {
      baseURL: apiBase,
      headers: {
        "accept-language": "ar",
      },
    }
  );
  watchEffect(() => {
    if (process.client) {
      if (ProductsData.value) {
        Products.value = ProductsData.value;
      }
    }
  });
} else {
  const { data: ProductsData, pending } = await useFetch(
    `${api.findAllCategories}`,
    {
      baseURL: apiBase,
      headers: {
        "accept-language": "en",
      },
    }
  );
  watchEffect(() => {
    if (process.client) {
      if (ProductsData.value) {
        Products.value = ProductsData.value;
      }
    }
  });
}

// const Products = ref([
//   {
//     companyNameAr: "كافيه بترفلي اف واي دي",
//     companyNameEn: "Butterfly Fyd Caffe",
//     id: 37,
//     nameAr: "بابكا الشوكولاتة",
//     nameEn: "Chocolate Babka",
//     price: 40,
//     productCategory: {
//       nameAr: "الحلويات",
//       nameEn: "Desserts",
//       descriptionAr: null,
//       descriptionEn: null,
//     },
//     productCategoryId: 10,
//     productCategoryNameAr: "الحلويات",
//     productCategoryNameEn: "Desserts",

//     productOffer: {
//       id: 0,
//       productId: 0,
//       discountRatio: null,
//       newPrice: null,
//       startDate: null,
//       endDate: null,
//     },
//     productParentCategoryId: 10,
//     productParentCategoryNameAr: "الحلويات",
//     productParentCategoryNameEn: "Desserts",
//   },
//   {
//     companyNameAr: "كافيه بترفلي اف واي دي",
//     companyNameEn: "Butterfly Fyd Caffe",
//     id: 37,
//     nameAr: "بابكا الشوكولاتة",
//     nameEn: "Chocolate Babka",
//     price: 40,
//     productCategory: {
//       nameAr: "الحلويات",
//       nameEn: "Desserts",
//       descriptionAr: null,
//       descriptionEn: null,
//     },
//     productCategoryId: 10,
//     productCategoryNameAr: "الحلويات",
//     productCategoryNameEn: "Desserts",

//     productOffer: {
//       id: 0,
//       productId: 0,
//       discountRatio: null,
//       newPrice: null,
//       startDate: null,
//       endDate: null,
//     },
//     productParentCategoryId: 10,
//     productParentCategoryNameAr: "الحلويات",
//     productParentCategoryNameEn: "Desserts",
//   },
//   {
//     companyNameAr: "كافيه بترفلي اف واي دي",
//     companyNameEn: "Butterfly Fyd Caffe",
//     id: 37,
//     nameAr: "بابكا الشوكولاتة",
//     nameEn: "Chocolate Babka",
//     price: 40,
//     productCategory: {
//       nameAr: "الحلويات",
//       nameEn: "Desserts",
//       descriptionAr: null,
//       descriptionEn: null,
//     },
//     productCategoryId: 10,
//     productCategoryNameAr: "الحلويات",
//     productCategoryNameEn: "Desserts",

//     productOffer: {
//       id: 0,
//       productId: 0,
//       discountRatio: null,
//       newPrice: null,
//       startDate: null,
//       endDate: null,
//     },
//     productParentCategoryId: 10,
//     productParentCategoryNameAr: "الحلويات",
//     productParentCategoryNameEn: "Desserts",
//   },
//   {
//     companyNameAr: "كافيه بترفلي اف واي دي",
//     companyNameEn: "Butterfly Fyd Caffe",
//     id: 37,
//     nameAr: "بابكا الشوكولاتة",
//     nameEn: "Chocolate Babka",
//     price: 40,
//     productCategory: {
//       nameAr: "الحلويات",
//       nameEn: "Desserts",
//       descriptionAr: null,
//       descriptionEn: null,
//     },
//     productCategoryId: 10,
//     productCategoryNameAr: "الحلويات",
//     productCategoryNameEn: "Desserts",

//     productOffer: {
//       id: 0,
//       productId: 0,
//       discountRatio: null,
//       newPrice: null,
//       startDate: null,
//       endDate: null,
//     },
//     productParentCategoryId: 10,
//     productParentCategoryNameAr: "الحلويات",
//     productParentCategoryNameEn: "Desserts",
//   },
//   {
//     companyNameAr: "كافيه بترفلي اف واي دي",
//     companyNameEn: "Butterfly Fyd Caffe",
//     id: 37,
//     nameAr: "بابكا الشوكولاتة",
//     nameEn: "Chocolate Babka",
//     price: 40,
//     productCategory: {
//       nameAr: "الحلويات",
//       nameEn: "Desserts",
//       descriptionAr: null,
//       descriptionEn: null,
//     },
//     productCategoryId: 10,
//     productCategoryNameAr: "الحلويات",
//     productCategoryNameEn: "Desserts",

//     productOffer: {
//       id: 0,
//       productId: 0,
//       discountRatio: null,
//       newPrice: null,
//       startDate: null,
//       endDate: null,
//     },
//     productParentCategoryId: 10,
//     productParentCategoryNameAr: "الحلويات",
//     productParentCategoryNameEn: "Desserts",
//   },
// ]);

//   const { data: Products, pending } = await useGetSiteApi().GetAll(
//     `${api.GetProducts}?CategoryId=${useAllFoodesTypes().value[0]?.id}&type=B2B`
//   );
</script>
<style lang="scss" scoped>
.Categories {
  display: flow-root;
  padding: 100px 0px 0px 0px;
  position: relative;
  //   background: url("/photos/31-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .container {
    margin-top: 20px;
    position: relative;
    .see-all {
      position: absolute;
      top: 3px;
      right: 0;
      .btn {
        background-color: $basic;
        color: #fff;
        padding: 10px 20px;
        border-radius: 100px;
      }
    }
    h1 {
      font-weight: bold;
      span {
        -webkit-background-clip: text;
        font-weight: bold;
        background-color: #8cc63e;
        background-image: linear-gradient(to right, #191d23, #8cc63e);
        background-repeat: repeat;
        background-size: 100%;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }
    }
  }

  .product {
    height: 420px;
    width: 250px;
    border-radius: 16px;
    box-shadow: 0px 0px 7px 0px $main;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
      height: 260px;
      width: 90%;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  }
}
.swiper {
  padding: 55px 0px;
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
</style>
