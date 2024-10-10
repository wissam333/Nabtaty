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
        >
        </Swiper>
      </div>
      <div class="info">
        {{ Product.nameAr }}
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
