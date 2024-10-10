<template>
  <div class="categories">
    <div class="container">
      <h1 class="title linear">
        <span>
          {{ $i18n.locale === "ar" ? "الفئات" : "Categories" }}
        </span>
      </h1>

      <div v-if="pending" class="text-center text-white loader">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else-if="!pending">
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
          <SwiperSlide v-for="category in Categories?.items.slice(0, 5)">
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
  `${api.ProductsCategories}`
);
</script>
<style lang="scss" scoped>
.category {
  .category-img {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .category-info {
  }
}
</style>
