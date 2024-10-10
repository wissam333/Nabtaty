<template>
  <div class="product nav-margin">
    <div class="cont">
      <div>
        <!-- Main Swiper -->
        <swiper
          ref="mainSwiper"
          :modules="[SwiperThumbs]"
          :thumbs="{ swiper: thumbsSwiper }"
          class="mainSwiper"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <img :src="slide.img" :alt="slide.alt" />
          </swiper-slide>
        </swiper>

        <!-- Thumbs Swiper -->
        <swiper
          ref="thumbsSwiper"
          :modules="[Thumbs]"
          class="thumbsSwiper"
          space-between="10"
          slides-per-view="4"
          watch-slides-progress
          watch-slides-visibility
          @swiper="setThumbsSwiper"
        >
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="'thumb-' + index"
          >
            <img :src="slide.img" :alt="slide.alt" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="info">
        {{ Product?.data?.nameAr }}
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
