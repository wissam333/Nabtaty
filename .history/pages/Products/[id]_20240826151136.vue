<template>
  <div class="product nav-margin">
    <div class="cont">
      <div class="preview">
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperThumbs]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :thumbs="{ swiper: thumbsSwiper }"
        >
          <SwiperSlide>
            <img :src="apiBase + product?.productImageUrl" alt="" />
          </SwiperSlide>
        </Swiper>

        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="4"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
        >
          <SwiperSlide> </SwiperSlide>
        </swiper>
      </div>
      <div class="info">
        {{ Product.data.nameAr }}
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();

const route = useRoute();
const router = useRouter();

const { data: Product, pending } = await useGetSiteApi().GetAll(
  `${api.ProductdetailsApi}/${route.params.id}`
);
</script>
<style lang="scss" scoped></style>
