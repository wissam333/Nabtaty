<template>
  <Socials></Socials>
  <div class="Project-detail-page nav-margin">
    <div class="container">
      <div class="go-back" @click="router.back()">
        <font-awesome :icon="['fas', 'arrow-left']" />
      </div>
      <h5 class="title mb-10">
        <span class="pointer" @click="router.go(-1)">
          {{
            $i18n.locale === "ar" ? "ألبوم صور المشروع" : "Project Photo Album"
          }}
        </span>
        /
        {{ $i18n.locale === "ar" ? Project?.name : Project?.englishName }}
      </h5>
      <div v-if="pending" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else-if="pending === false" class="container">
        <h2 class="Project-title mb-10">
          <!-- <img src="/photos/icons/Asset 1.png" width="50" alt="" /> -->
          {{ $i18n.locale === "ar" ? Project?.name : Project?.englishName }}
        </h2>

        <div
          v-if="Project?.description1"
          class="Project-detail-wrapper row mb-5"
        >
          <div
            class="Project-image col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
          >
            <img
              v-if="Project?.image1"
              :src="`${apiBase}/${Project?.image1}`"
              :alt="Project?.englishName"
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
            class="Project-content col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
          >
            <div
              class="Project-description"
              v-html="
                $i18n.locale === 'ar'
                  ? Project?.description1
                  : Project?.englishDescription1
              "
            ></div>
          </div>
        </div>

        <div
          v-if="Project?.description2"
          class="Project-detail-wrapper row-reverse row mb-5"
        >
          <div
            class="Project-image col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
          >
            <img
              v-if="Project?.image2"
              :src="`${apiBase}/${Project?.image2}`"
              :alt="Project?.englishName"
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
            class="Project-content col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
          >
            <div
              class="Project-description"
              v-html="
                $i18n.locale === 'ar'
                  ? Project?.description2
                  : Project?.englishDescription2
              "
            ></div>
          </div>
        </div>

        <div
          v-if="Project?.description3"
          class="Project-detail-wrapper row mb-5"
        >
          <div
            class="Project-image col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
          >
            <img
              v-if="Project?.image3"
              :src="`${apiBase}/${Project?.image3}`"
              :alt="Project?.englishName"
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
            class="Project-content col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
          >
            <div
              class="Project-description"
              v-html="
                $i18n.locale === 'ar'
                  ? Project?.description3
                  : Project?.englishDescription3
              "
            ></div>
          </div>
        </div>

        <div
          v-if="Project?.description4"
          class="Project-detail-wrapper row-reverse row mb-5"
        >
          <div
            class="Project-image col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
          >
            <img
              v-if="Project?.image4"
              :src="`${apiBase}/${Project?.image4}`"
              :alt="Project?.englishName"
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
            class="Project-content col-lg-6"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
          >
            <div
              class="Project-description"
              v-html="
                $i18n.locale === 'ar'
                  ? Project?.description4
                  : Project?.englishDescription4
              "
            ></div>
          </div>
        </div>

        <!-- Attachments  -->

        <h3 v-if="Project?.blockAttachements?.length || Project?.file">
          {{ $t("Attachments") }} :
        </h3>
        <ul class="Attachments" v-if="Project?.file">
          <li>
            <a :href="`${apiBase}/${Project?.file}`" target="_blank">
              {{
                $i18n.locale === "ar" ? Project?.name : Project?.englishName
              }}</a
            >
          </li>
        </ul>
        <ul class="Attachments" v-if="Project?.blockAttachements?.length">
          <li
            v-for="(attachment, index) in Project.blockAttachements"
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
            v-if="Project?.blockPhotos?.length || Project?.blockVideos?.length"
          >
            {{ $t("PhotoAlbum") + " & " + $t("Video") + " :" }}
          </h3>
          <div class="row">
            <div
              class="col-lg-3"
              data-aos="fade-up"
              v-if="Project?.blockPhotos?.length"
            >
              <Galleria
                v-model:visible="displaymain"
                :value="Project?.blockPhotos"
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
                  @click="displaymain = true"
                  v-if="Project?.image1"
                  :src="`${apiBase}/${Project?.image1}`"
                  alt=""
                />
                <img
                  v-else
                  @click="displaymain = true"
                  :src="`${apiBase}/${Project?.blockPhotos[0].image}`"
                  alt=""
                />
              </div>
            </div>
            <div
              class="videos"
              data-aos="fade-up"
              v-if="Project?.blockVideos?.length"
              :class="Project.blockPhotos?.length ? ' col-lg-9' : ' col-lg-12'"
            >
              <div class="video row" v-for="video in Project?.blockVideos">
                <iframe
                  :src="`https://www.youtube.com/embed/${video?.url}`"
                  style="border-radius: 12px; height: 340px"
                  :class="
                    Project?.blockVideos?.length > 1 ? 'col-lg-6' : 'col-lg-12'
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

const displaymain = ref(false);

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

// get Projects
const route = useRoute();
const router = useRouter();
const { data: Project, pending } = await useGetSiteApi().GetById(
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

const handleClick = (event) => {
  // Check if the click was on the .p-galleria-mask element
  if (event.target.classList.contains("p-galleria-mask")) {
    displaymain.value = false;
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
.Project-detail-page {
  position: relative;
  padding-bottom: 40px;
  .Project-title {
    padding: 40px 0px;
    color: $basic;
    font-weight: bold;
    font-size: 35px;
    font-family: Herova, "Arial", "sans-serif";
    letter-spacing: 2px;
    line-height: 50px;
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
  .Project-detail-wrapper {
    align-items: flex-start;
    .Project-image {
      .main-img {
        width: 100%;
        border-radius: 8px;
        height: 500px;
        object-fit: cover;
        margin-bottom: 20px;
      }
    }
    .Project-content {
      margin-bottom: 40px;
      @media (max-width: 991px) {
        margin-top: 30px;
      }
      .Project-description {
        font-size: 20px;
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
