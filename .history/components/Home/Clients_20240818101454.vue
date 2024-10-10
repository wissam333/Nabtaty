<template>
    <div class="clients">
      <div class="cont">
        <h1 class="my-10 fw-bold d-flex justify-content-center align-items-end">
          <img width="80" src="/photos/icons/Asset 1.png" alt="" />
          {{ $i18n.locale === "ar" ? "العملاء" : "Clients" }}
        </h1>
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay]"
          :loop="true"
          :breakpoints="{
            '1100': {
              slidesPerView: 5,
              slidesPerGroup: 5,
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
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :speed="1000"
        >
          <SwiperSlide v-for="client in Clients?.items">
            <div class="main-img">
              <img
                class="main"
                v-if="client?.image1"
                :src="`${apiBase}/${client?.image1}`"
                :alt="client?.englishName"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </template>
  <script setup>
  // const {
  //   public: { apiBase, api },
  // } = useRuntimeConfig();
  
  // const { data: Clients, pending } = await useGetSiteApi().GetAll(
  //   `${api.Blocks}?categoryId=4`,
  //   ["name", "englishName", "image1", "id"]
  // );
  </script>
  <style lang="scss" scoped>
  .clients {
    margin-bottom: 100px;
    h1 {
      color: $main;
      border-top: 4px solid $main;
      margin-top: 100px;
      padding-top: 50px;
      margin-bottom: 30px;
    }
    .main-img {
      img {
        width: 100%;
        height: 200px;
        object-fit: contain;
      }
    }
  }
  </style>
  