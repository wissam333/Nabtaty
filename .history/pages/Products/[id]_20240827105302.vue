<template>
  <div class="product nav-margin">
    <div class="cont">
      <h5 class="links py-10">
        <span class="pointer" @click="router.go(-1)">
          {{ $i18n.locale === "ar" ? "منتجاتنا" : "Products" }}
        </span>
        /
        <span class="pointer" @click="router.go(-1)">
          {{
            $i18n.locale === "ar"
              ? Product?.data?.productCategory?.nameAr
              : Product?.data?.productCategory?.nameEn
          }}
        </span>
        /
        {{
          $i18n.locale === "ar" ? Product?.data?.nameAr : Product?.data?.nameEn
        }}
      </h5>
      <div class="row">
        <div class="preview col-lg-6">
          <img :src="apiBase + Product?.data?.productImageUrl" alt="" />
        </div>
        <div class="info col-lg-6">
          <h2 class="title">
            {{
              $i18n.locale === "ar"
                ? Product?.data?.nameAr
                : Product?.data?.nameEn
            }}
          </h2>
          <h1 class="price">
            {{ Product?.data?.price }}
            {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
          </h1>
        </div>
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
<style lang="scss" scoped>
.product {
  margin-bottom: 100px;
  .preview {
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
  }
  .info {
    .title {
      font-weight: bold;
    }
  }
}
</style>
