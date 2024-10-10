<template>
  <Socials></Socials>
  <div
    class="services card nav-margin"
    :class="$i18n.locale === 'ar' ? 'ar' : ''"
  >
    <div class="container" style="position: relative">
      <div class="go-back" @click="router.back()">
        <font-awesome :icon="['fas', 'arrow-left']" />
      </div>
      <h5 class="title mb-10">
        <span class="pointer" @click="router.go(-1)">
          {{ $i18n.locale === "ar" ? "خدماتنا" : "Services" }}
        </span>
        /
        {{ $i18n.locale === "ar" ? Services?.name : Services?.englishName }}
      </h5>

      <h1 class="fw-bold d-flex justify-content-start align-items-end">
        <!-- <img width="80" src="/photos/icons/Asset 1.png" alt="" /> -->
        {{ $i18n.locale === "ar" ? Services?.name : Services?.englishName }}
      </h1>
      <div class="row">
        <!-- <img class="line" src="/photos/icons/Asset 31.png" alt="" /> -->
        <div
          class="col-lg-6"
          data-aos-duration="1000"
          :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
        >
          <div class="service-img">
            <img
              v-if="Services?.image1"
              :src="`${apiBase}/${Services?.image1}`"
              alt=""
            />
          </div>
          <!-- <img
              class="service-img"
              v-else
              src="/photos/images/Artboard.png"
              alt=""
            /> -->
        </div>
        <div
          class="col-lg-6"
          data-aos-duration="1000"
          :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
        >
          <div
            class="d-flex justify-content-center flex-column mt-5 service-info"
            v-html="
              $i18n.locale === 'ar'
                ? Services?.description1
                : Services?.englishDescription1
            "
          ></div>
        </div>
      </div>

      <div
        class="my-10"
        data-aos-duration="1000"
        :data-aos="
          $i18n.locale === 'ar' ? 'fade-right' : 'fad;position: relative;e-left'
        "
      >
        <div
          class="row w-100"
          style="margin: auto; z-index: 3; position: relative"
          v-if="Services?.description2 && Services?.description3"
        >
          <Swiper
            style="direction: ltr"
            :modules="[SwiperAutoplay, SwiperEffectFlip, SwiperScrollbar]"
            :slides-per-view="1"
            :loop="false"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
            :effect="'flip'"
            :speed="1000"
            scrollbar
          >
            <SwiperSlide>
              <div class="row w-100 justify-content-between">
                <div class="image2 col-sm-6">
                  <div
                    style="font-size: 20px"
                    class="mb-4 title-info fw-bold"
                    v-html="
                      $i18n.locale === 'ar'
                        ? Services?.description2
                        : Services?.englishDescription2
                    "
                  ></div>

                  <img
                    v-if="Services?.image2"
                    :src="`${apiBase}/${Services?.image2}`"
                    alt=""
                  />
                  <!-- <img v-else src="/photos/images/Artboard5.png" alt="" /> -->
                </div>

                <div class="image3 col-sm-6">
                  <img
                    v-if="Services?.image3"
                    :src="`${apiBase}/${Services?.image3}`"
                    alt=""
                  />
                  <!-- <img
                      v-else
                      class="mb-4"
                      src="/photos/images/Artboard6.png"
                      alt=""
                    /> -->
                  <div
                    style="font-size: 20px"
                    class="mt-4 fw-bold"
                    v-html="
                      $i18n.locale === 'ar'
                        ? Services?.description3
                        : Services?.englishDescription3
                    "
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <!-- <div class="view-all">
              <nuxt-link to="/Services" class="go-services">
                {{ $i18n.locale === "ar" ? "عرض الكل" : "View All" }}
                <img src="/photos/icons/Asset 12.png" alt="" />
              </nuxt-link>
            </div> -->
        </div>
      </div>

      <div class="">
        <h3 class="mb-10" v-if="Services?.blockPhotos?.length">
          {{ $t("PhotoAlbum") + " : " }}
        </h3>
        <div class="row">
          <div
            class="col-lg-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            v-if="Services?.blockPhotos?.length"
          >
            <Galleria
              v-model:visible="displayBasic"
              :value="Services?.blockPhotos"
              :responsiveOptions="responsiveOptions"
              containerStyle="max-width: 50%"
              :circular="true"
              :fullScreen="true"
              :showItemNavigators="true"
              :showThumbnailNavigators="true"
            >
              <template #item="slotProps">
                <img
                  :src="`${apiBase}/${slotProps.item.image}`"
                  :alt="slotProps.item.blockId"
                  style="
                    width: 100%;
                    display: block;
                    object-fit: contain;
                    border-radius: 8px;
                    height: 500px;
                  "
                />
              </template>
              <template #thumbnail="slotProps">
                <div style="padding: 20px; width: 150px; height: 150px">
                  <img
                    :src="`${apiBase}/${slotProps.item.image}`"
                    :alt="slotProps.item.blockId"
                    style="
                      display: block;
                      object-fit: cover;
                      width: 100%;
                      height: 100%;
                      border-radius: 8px;
                      border: 2px solid #32b34d;
                    "
                  />
                </div>
              </template>
            </Galleria>

            <div class="images">
              <img
                @click="displayBasic = true"
                v-if="Services?.image1"
                :src="`${apiBase}/${Services?.image1}`"
                alt=""
              />
              <img
                v-else
                @click="displayBasic = true"
                src="/photos/icons/Asset 1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="photo-album row">
          <div v-for="service in Services?.blockPhotos" class="col-sm-6">
            <img :src="`${apiBase}/${service.image}`" :alt="service.id" />
          </div>
        </div> -->
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const route = useRoute();
const router = useRouter();

const { data: Services, pending } = await useGetSiteApi().GetById(
  `${api.Blocks}/`,
  [
    "id",
    "englishName",
    "name",
    "image1",
    "image2",
    "image3",
    "image4",
    "description1",
    "englishDescription1",
    "description2",
    "englishDescription2",
    "description3",
    "englishDescription3",
    "description4",
    "englishDescription4",
    "blockPhotos",
  ],
  Number(route.params.id)
);

const displayBasic = ref(false);

const responsiveOptions = ref([
  {
    breakpoint: "1500px",
    numVisible: 5,
  },
  {
    breakpoint: "1024px",
    numVisible: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
]);

const handleClick = (event) => {
  // Check if the click was on the .p-galleria-mask element
  if (event.target.classList.contains("p-galleria-mask")) {
    displayBasic.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

// Remove event listener on unmounted
onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>
<style lang="scss" scoped>
.services {
  h1 {
    padding: 40px 0px;
    color: $basic;
    font-weight: bold;
    padding: 40px;
    font-size: 35px;
    font-family: Herova, "Arial", "sans-serif";
    letter-spacing: 2px;
  }
  .title {
    color: #333;
    font-weight: bold;
    padding: 40px 12px 10px 60px;
  }
  .go-back {
    width: 40px;
    height: 40px;
    background: $basic;
    color: #fff;
    position: absolute;
    left: 0;
    top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    margin: 0px 12px;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .row {
    position: relative;
    padding-bottom: 100px;
    .line {
      position: absolute;
      left: 0;
      top: 15%;
      width: 6%;
      object-fit: contain;
    }
    .service-img {
      width: 100%;
      height: 646px;
      object-fit: cover;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .service-info {
      background-color: #f8f9fa;
      padding: 20px;
      margin-left: -150px;
      @media (max-width: 991px) {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }
  }
  .row {
    overflow: hidden;
    .image1 {
      img {
        width: 100%;
        height: 646px;
        object-fit: cover;
      }
    }
    .image2,
    .image3 {
      padding: 0;
      img {
        width: 100%;
        height: 600px;
        object-fit: cover;

        @media (max-width: 768px) {
          height: 90%;
        }
      }
      .title-info {
        margin: 0px 12px;
      }
    }
    .view-all {
      position: relative;
      height: 200px;
      background-color: #eee;
      box-shadow: 0px -20px 20px 20px #eee;
      z-index: -1;
      @media (max-width: 991px) {
        display: none;
      }
      .go-services {
        display: flex;
        transform: translate(-50%, -50%);
        position: absolute;
        left: 50%;
        right: 50%;
        top: 90px;
        white-space: nowrap;
        font-weight: bold;
        font-size: 25px;
        width: 150px;
        cursor: pointer;
        z-index: 5;

        // svg {
        //   transform: rotate(180deg);
        //   margin: 0px 20px;
        //   font-size: 25px;
        // }
        img {
          width: 70px;
          margin: 0px 10px;
        }
      }
    }
    .image1 {
      position: relative;
      .line {
        position: absolute;
        left: 0;
        top: 30%;
        width: 6%;
      }
      .info {
        margin: 0px 60px;
        word-spacing: 8px;
      }
    }
  }
}

.services {
  &.ar {
    .service-info {
      margin-left: 0px !important;
      margin-right: -150px;
      @media (max-width: 991px) {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }
    .line {
      left: auto;
      right: 0;
    }
    .title-info {
      text-align: right !important;
      direction: rtl;
    }
  }
}

.col-sm-6 {
  width: calc(50% - 20px);
  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }
}
.photo-album {
  justify-content: space-between;
  margin: 50px 0px;
  img {
    width: 100%;
    object-fit: cover;
  }
}

.images {
  margin-bottom: 50px;
  position: relative;
  color: #fff;
  border-radius: 16px;
  img {
    width: 100%;
    height: 340px;
    border-radius: 8px;
    border: 1px solid $main;
    object-fit: cover;
    cursor: pointer;
  }
  .img-title {
    position: absolute;
    top: 35%;
    right: auto;
    left: 0;
    padding: 30px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    &.ar {
      right: 0;
      left: auto;
    }
  }
}
</style>
