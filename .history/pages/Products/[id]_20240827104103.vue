<template>
  <div class="product nav-margin">
    <div class="cont">
      <div class="links">
        Products /
        {{
          $i18n.locale === "ar" ? Product?.data?.nameAr : Product?.data?.nameEn
        }}
      </div>
      <div class="preview">
        <img :src="apiBase + Product?.data?.productImageUrl" alt="" />
      </div>
      <div class="info">
        {{
          $i18n.locale === "ar" ? Product?.data?.nameAr : Product?.data?.nameEn
        }}
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

const slides = [
  { img: "https://via.placeholder.com/600x400", alt: "Slide 1" },
  { img: "https://via.placeholder.com/600x400", alt: "Slide 2" },
  { img: "https://via.placeholder.com/600x400", alt: "Slide 3" },
  { img: "https://via.placeholder.com/600x400", alt: "Slide 4" },
];

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>
<style lang="scss" scoped></style>
