<template>
  <Socials></Socials>
  <div class="news-detail-page card nav-margin">
    <div class="container">
      <div class="go-back" @click="router.back()">
        <font-awesome :icon="['fas', 'arrow-left']" />
      </div>
      <h5 class="title mb-10">
        <span class="pointer" @click="router.go(-1)">{{ $t("News") }}</span> /
        {{ $i18n.locale === "ar" ? News?.name : News?.englishName }}
      </h5>
      <div v-if="pending" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else class="container">
        <h1 class="news-title mb-10">
          <img src="/photos/icons/Asset 1.png" width="50" alt="" />
          {{ $i18n.locale === "ar" ? News?.name : News?.englishName }}
        </h1>

        <div v-if="News?.description1" class="news-detail-wrapper row mb-5">
          <div
            class="news-image col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
            data-aos-duration="1000"
          >
            <img
              v-if="News?.image1"
              :src="`${apiBase}/${News?.image1}`"
              :alt="News?.englishName"
              loading="lazy"
              class="main-img"
            />
            <img
              v-else
              src="/photos/icons/Asset 1.png"
              alt=""
              class="main-img"
            />
          </div>

          <div
            class="news-content col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
            data-aos-duration="1000"
          >
            <div
              class="news-description"
              v-html="
                $i18n.locale === 'ar'
                  ? News?.description1
                  : News?.englishDescription1
              "
            ></div>
          </div>
        </div>

        <div
          v-if="News?.description2"
          class="news-detail-wrapper row-reverse row mb-5"
        >
          <div
            class="news-content col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
            data-aos-duration="1000"
          >
            <div
              class="news-description"
              v-html="
                $i18n.locale === 'ar'
                  ? News?.description2
                  : News?.englishDescription2
              "
            ></div>
          </div>

          <div
            class="news-image col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
            data-aos-duration="1000"
          >
            <img
              v-if="News?.image2"
              :src="`${apiBase}/${News?.image2}`"
              :alt="News?.englishName"
              loading="lazy"
              class="main-img"
            />
            <img
              v-else
              src="/photos/icons/Asset 1.png"
              alt=""
              class="main-img"
            />
          </div>
        </div>

        <div v-if="News?.description3" class="news-detail-wrapper row mb-5">
          <div
            class="news-image col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
            data-aos-duration="1000"
          >
            <img
              v-if="News?.image3"
              :src="`${apiBase}/${News?.image3}`"
              :alt="News?.englishName"
              loading="lazy"
              class="main-img"
            />
            <img
              v-else
              src="/photos/icons/Asset 1.png"
              alt=""
              class="main-img"
            />
          </div>

          <div
            class="news-content col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
            data-aos-duration="1000"
          >
            <div
              class="news-description"
              v-html="
                $i18n.locale === 'ar'
                  ? News?.description3
                  : News?.englishDescription3
              "
            ></div>
          </div>
        </div>

        <div
          v-if="News?.description4"
          class="news-detail-wrapper row-reverse row mb-5"
        >
          <div
            class="news-image col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
            data-aos-duration="1000"
          >
            <img
              v-if="News?.image4"
              :src="`${apiBase}/${News?.image4}`"
              :alt="News?.englishName"
              loading="lazy"
              class="main-img"
            />
            <img
              v-else
              src="/photos/icons/Asset 1.png"
              alt=""
              class="main-img"
            />
          </div>

          <div
            class="news-content col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
            data-aos-duration="1000"
          >
            <div
              class="news-description"
              v-html="
                $i18n.locale === 'ar'
                  ? News?.description4
                  : News?.englishDescription4
              "
            ></div>
          </div>
        </div>
        <!-- Attachments  -->
        <h3 v-if="News?.blockAttachements?.length">
          {{ $t("Attachments") }} :
        </h3>
        <ul class="Attachments" v-if="News?.blockAttachements?.length">
          <li
            v-for="(attachment, index) in News.blockAttachements"
            :key="index"
          >
            <a :href="`${apiBase}/${attachment.file}`" target="_blank">{{
              attachment.name
            }}</a>
          </li>
        </ul>

        <!-- photo album -->
        <div class="">
          <h3
            class="mb-10"
            v-if="News?.blockPhotos?.length || News?.blockVideos?.length"
          >
            {{ $t("PhotoAlbum") + " & " + $t("Video") + " :" }}
          </h3>
          <div class="row">
            <div
              class="col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              v-if="News?.blockPhotos?.length"
            >
              <Galleria
                v-model:visible="displayBasic"
                :value="News?.blockPhotos"
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
                  v-if="News?.image1"
                  :src="`${apiBase}/${News?.image1}`"
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
            <div
              class="videos"
              data-aos="fade-up"
              data-aos-duration="1000"
              v-if="News?.blockVideos?.length"
              :class="News.blockPhotos?.length ? ' col-lg-9' : ' col-lg-12'"
            >
              <div class="video row" v-for="video in News?.blockVideos">
                <iframe
                  :src="`https://www.youtube.com/embed/${video?.url}`"
                  style="border-radius: 12px; height: 340px"
                  :class="
                    News?.blockVideos?.length > 1 ? 'col-lg-6' : 'col-lg-12'
                  "
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

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

const route = useRoute();
const router = useRouter();

const { data: News, pending } = await useGetSiteApi().GetById(
  `${api.Blocks}/`,
  [
    "id",
    "image1",
    "image2",
    "image3",
    "image4",
    "englishName",
    "englishDescription1",
    "description1",
    "englishDescription2",
    "description2",
    "englishDescription3",
    "description3",
    "englishDescription4",
    "description4",
    "name",
    "blockVideos",
    "blockPhotos",
    "blockAttachements",
  ],
  Number(route.params.id)
);

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
.container {
  position: relative;
}
.rtl {
  direction: rtl;
}
.news-detail-page {
  position: relative;
  padding-bottom: 40px;
  .title {
    color: #333;
    font-weight: bold;
    padding: 40px 12px 10px 60px;
  }
  h1 {
    padding: 40px 0px;
    color: #54311e;
    font-weight: bold;
    padding: 40px;
    font-size: 35px;
    font-family: Herova, "Arial", "sans-serif";
    letter-spacing: 2px;
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
  .news-detail-wrapper {
    align-items: flex-start;
    .news-image {
      .main-img {
        width: 100%;
        border-radius: 8px;
        height: 400px;
        object-fit: cover;
        margin-bottom: 20px;
      }
    }
    .news-content {
      margin-bottom: 40px;
      @media (max-width: 991px) {
        margin-top: 30px;
      }
      .news-description {
        font-size: 16px;
      }
    }
  }
}
.other-img {
  margin-bottom: 40px;
  img {
    object-fit: cover;
    border-radius: 30px;
  }
}
.row {
  overflow: hidden;
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
