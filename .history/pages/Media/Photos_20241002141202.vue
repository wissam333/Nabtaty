<template>
  <div class="card photos nav-margin flex justify-content-center">
    <h1 class="linear page-title">
      <img
        src="/logo.png"
        alt=""
        :class="$i18n.locale === 'ar' ? 'ar' : ''"
        width="90"
      />
      <span>
        <span>
          {{ $i18n.locale === "ar" ? "ألبوم الصور" : "Photo Album" }}
        </span>
      </span>
    </h1>
    <div class="cont">
      <div v-if="pending" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else class="row">
        <ClientOnly>
          <div
            class="col-lg-4"
            v-for="photo in Photos?.items"
            :key="photo.id"
            data-aos="fade-up"
          >
            <div v-if="openGallery[photo.id]" class="modal" dir="ltr">
              <div class="modal-content">
                <span class="close" @click="closeModal(photo.id)">&times;</span>
                <div class="overlay"></div>
                <VueFlux
                  :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
                  :options="options"
                  :rscs="getRscs(photo.blockPhotos)"
                  :transitions="transitions"
                  class="gallery"
                  :class="openGallery[photo.id] === true ? 'active' : ''"
                >
                  <template #preloader="preloaderProps">
                    <FluxPreloader v-bind="preloaderProps" />
                  </template>

                  <template #controls="controlsProps">
                    <FluxControls v-bind="controlsProps" />
                  </template>

                  <template #index="indexProps">
                    <FluxIndex v-bind="indexProps" />
                  </template>

                  <template #pagination="paginationProps">
                    <FluxPagination v-bind="paginationProps" />
                  </template>
                </VueFlux>
              </div>
            </div>

            <div class="images" @click="openGallery[photo.id] = true">
              <div class="img-title">
                <p>{{ locale === "ar" ? photo?.name : photo?.englishName }}</p>
              </div>
              <img
                v-if="photo?.image"
                :src="`${apiBase}${photo?.image}`"
                alt=""
              />
              <img
                v-else
                :src="`${apiBase}${photo?.blockPhotos[0]?.image}`"
                alt=""
              />

              <!-- Attachments  -->
              <h3 v-if="photo?.blockAttachements?.length" class="mt-4">
                {{ $t("Attachments") }} :
              </h3>
              <ul class="Attachments" v-if="photo?.blockAttachements?.length">
                <li
                  v-for="(attachment, index) in photo?.blockAttachements"
                  :key="index"
                >
                  <a :href="`${apiBase}${attachment?.file}`" target="_blank">{{
                    attachment?.name
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n();
const {
  public: {
    apiBase,
    api: { Blocks },
  },
} = useRuntimeConfig();

import "vue-flux/style.css";

import {
  VueFlux,
  FluxPreloader,
  FluxControls,
  FluxPagination,
  Img,
  Fade,
  FluxIndex,
} from "vue-flux";

// get Photos
const { data: Photos, pending } = await useGetSiteApi().GetAll(
  `${Blocks}?categoryId=5`,
  ["id", "blockPhotos", "name", "englishName", "image", "blockAttachements"]
);

const options = reactive({
  allowFullscreen: false,
  allowToSkipTransition: true,
  autohideTime: 2500,
  autoplay: false,
  bindKeys: false,
  delay: 5000,
  enableGestures: false,
  infinite: true,
  lazyLoad: true,
  lazyLoadAfter: 3,
});

let rscs = shallowReactive([]);

const transitions = shallowReactive([Fade]);

let openGallery = ref([]);

let mainImageInAlbum = ref();
watchEffect(() => {
  if (process.client) {
    if (Photos.value) {
      Photos.value?.items?.map((album) => {
        if (album.image) {
          album.blockPhotos?.map((photo) => {
            if (photo.image === album.image) {
              mainImageInAlbum.value = true;
            }
          });
          if (!mainImageInAlbum.value) {
            album.blockPhotos.unshift({ image: album.image });
          }
        }
      });
    }
  }
});

const getRscs = (photos) => {
  rscs = [];
  photos.forEach((img) => {
    rscs.push(new Img(`${apiBase}${img.image}`));
  });
  return rscs;
};
// Close modal
const closeModal = (id) => {
  openGallery.value[id] = false;
};

const handleClick = (event) => {
  // Check if the click was on the .p-galleria-mask element
  if (event.target.classList.contains("overlay")) {
    for (let i = 0; i < openGallery.value.length; i++) {
      openGallery.value[i] = false;
    }
  }
  if (event.target.classList.contains("overlay")) {
    for (let i = 0; i < openGallery.value.length; i++) {
      openGallery.value[i] = false;
    }
  }
};

// Function to handle the Esc key press
const handleEscKey = (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    for (let i = 0; i < openGallery.value.length; i++) {
      openGallery.value[i] = false;
    }
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);
  // Add the keydown event listener when the component is mounted
  document.addEventListener("keydown", handleEscKey);
});

// Remove event listener on unmounted
onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});

onBeforeUnmount(() => {
  // Clean up the event listener when the component is about to unmount
  document.removeEventListener("keydown", handleEscKey);
});
</script>
<style lang="scss" scoped>
.card {
  .title {
    color: $basic;
    font-weight: bold;
    padding: 40px;
    font-size: 35px;
    font-family: Herova, "Arial", "sans-serif";
    letter-spacing: 2px;
  }
  .images {
    aspect-ratio: 3 / 2;
    margin-bottom: 50px;
    position: relative;
    color: #fff;
    background: $main;
    border-radius: 16px;
    border: 1px solid $main;
    overflow: hidden;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    img {
      width: 100%;
      height: 400px;
      border-radius: 8px;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }
    .img-title {
      position: absolute;
      bottom: 0;
      left: 50%;
      padding: 10px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      background-color: #0000008a;
      transform: translate(-50%, 0%);
      width: 100%;
      transition: all 0.3s ease-in-out;
      text-align: center;
      z-index: 55;
      cursor: pointer;
    }
  }
}
.gallery {
  display: none;
  &.active {
    @keyframes show {
      0% {
        display: none;
        opacity: 0;
        transform: translateY(-30px);
      }
      100% {
        display: flex;
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation: show 0.3s linear forwards;
    display: flex;
  }
}

/* Modal styles */
.modal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999 !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.279);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(5px);

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
}

.modal-content {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.458);
  padding: 0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-video {
  width: 100%;
}
.close {
  position: fixed;
  font-family: none !important;
  top: 15px;
  right: 15px;
  z-index: 999999;
  color: #ffffffe6;
  font-size: 45px;
  background: #0000006b;
  padding: 20px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
    font-size: 35px;
    top: 5px;
    right: 5px;
  }
}
</style>
