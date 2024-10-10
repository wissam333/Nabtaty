<template>
  <div class="categories mt-10 pt-10">
    <div class="container">
      <div class="title linear">
        <h1 class="d-flex align-items-center">
          <img
            src="/logo.png"
            alt=""
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
            width="90"
          />
          <span>
            {{ $i18n.locale === "ar" ? "الفئات" : "Categories" }}
          </span>
        </h1>
      </div>

      <div v-if="pending" class="text-center text-white loader">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else-if="!pending">
        <Swiper
          data-aos-duration="800"
          data-aos="zoom-in"
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
          <SwiperSlide v-for="(category, index) in Categories" :key="index">
            {{ index }}
            <div class="category row">
              <div class="col-lg-8 category-img">
                <img :src="apiBase + category.imageUrl" alt="" />
              </div>
              <div class="col-lg-3 category-info">
                <h2>
                  {{
                    $i18n.locale === "ar"
                      ? category.arabicName
                      : category.englishName
                  }}
                </h2>
                <button class="btn btn-main">
                  <span>
                    {{ $i18n.locale === "ar" ? "تسوق الآن" : "Shop Now" }}
                  </span>
                </button>
              </div>
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

const { data: Categories, pending } = await useGetSiteApi().GetAll(
  `${api.MainCategories}`
);
</script>
<style lang="scss" scoped>
.title {
  position: relative;
  margin-bottom: 50px;
  img {
    margin-right: 10px;
    &.ar {
      margin-left: 10px;
    }
  }
  //   &::after {
  //     content: "";
  //     position: absolute;
  //     bottom: -15px;
  //     width: 100%;
  //     height: 3px;
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
.category {
  align-items: center;
  background: linear-gradient(to left, $second, $main, transparent);
  overflow-y: hidden;
  margin: 10px;
  padding: 10px !important;

  @media (max-width: 991px) {
    justify-content: center;
    background: linear-gradient(to top, $second, $main, transparent);
    overflow-x: hidden;
  }
  .category-img {
    padding: 0px !important;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid $second;
    }
  }
  .category-info {
    text-align: center;
    width: 28.6%;
    height: 100%;
    @media (max-width: 991px) {
      width: 100%;
      margin-top: 20px;
    }
    h2 {
      font-weight: bold;
      color: #fff;
    }
    button {
      margin: 20px;
      // background: #fff !important;
      // span {
      //   color: $main !important;
      // }
    }
  }
}
.swiper {
  padding-bottom: 40px;
}
</style>
