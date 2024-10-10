<template>
  <div class="categories">
    <div class="cont">
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
          <SwiperSlide v-for="category in useAllProductsTypes().value">
            <div class="category row">
              <div class="col-lg-8"></div>
              <div class="col-lg-4"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script setup>
console.log(useAllProductsTypes().value);
</script>
<style lang="scss" scoped></style>
