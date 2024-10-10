<template>
  <div class="card nav-margin flex justify-content-center">
    <h1 class="title text-center">
      <span> {{ $i18n.locale === "ar" ? "ألبوم الصور" : "Photo Album" }} </span>
    </h1>

    <div class="cont">
      <div v-if="loadingPhotos" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else class="row">
        <div
          class="col-lg-4"
          v-for="photo in Photos?.items"
          :key="photo.id"
          data-aos="fade-up"
        >
          <div
            v-if="openGallery[photo.id]"
            class="modal"
            @click="closeModal(photo.id)"
          >
            <div class="modal-content">
              <span class="close" @click="closeModal(photo.id)">&times;</span>
              <VueFlux
                :options="options"
                :rscs="rscs"
                :transitions="transitions"
                class="gallery"
                :class="openGallery[photo.id] === true ? 'active' : ''"
              >
                <template #preloader="preloaderProps">
                  <FluxPreloader v-bind="preloaderProps" />
                </template>

                <template #controls="controlsProps">
                  <FluxIndex></FluxIndex>
                  <FluxControls v-bind="controlsProps" />
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
              v-if="photo?.image1"
              :src="`${apiBase}${photo?.image1}`"
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
                <a :href="`${apiBase}/${attachment?.file}`" target="_blank">{{
                  attachment?.name
                }}</a>
              </li>
            </ul>
          </div>
        </div>
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
  Swipe,
  Blocks2,
  Warp,
  Cube,
  Book,
  Wave,
  Blinds3D,
  Round2,
  FluxIndex,
} from "vue-flux";

// get Photos
const { data: Photos, pending } = await useGetSiteApi().GetAll(
  `${Blocks}?categoryId=2`,
  ["id", "blockPhotos", "name", "englishName", "image1", "blockAttachements"]
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

const rscs = shallowReactive([]);

const transitions = shallowReactive([
  Swipe,
  Blocks2,
  Warp,
  Cube,
  Book,
  Wave,
  Blinds3D,
  Round2,
]);

let openGallery = ref([]);

let mainImageInAlbum = ref();
watchEffect(() => {
  if (process.client) {
    if (Photos.value) {
      Photos.value?.items?.map((album) => {
        if (album.image1) {
          album.blockPhotos?.map((photo) => {
            if (photo.image === album.image1) {
              mainImageInAlbum.value = true;
            }
          });
          if (!mainImageInAlbum.value) {
            album.blockPhotos.unshift({ image: album.image1 });
          }
        }
      });

      Photos.value.items[0].blockPhotos.forEach((img) => {
        rscs.push(new Img(apiBase + img.image));
      });
    }
  }
});

// Close modal
const closeModal = (id) => {
  openGallery[id] = false;
};

const handleClick = (event) => {
  // Check if the click was on the .p-galleria-mask element
  if (event.target.classList.contains("p-galleria-mask")) {
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
  h1 {
    text-align: center;
    padding: 40px;
    @media (max-width: 768px) {
      padding: 12px;
    }
    span {
      -webkit-background-clip: text;
      font-weight: bold;
      background-color: #146890;
      background-image: linear-gradient(45deg, #146890, #45b2e9, #146890);
      background-repeat: repeat;
      background-size: 100%;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
  .images {
    // padding: 20px;
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
      //      .img-title {
      //        background-color: #14944e;
      //      }
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
      top: 50%;
      left: 50%;
      padding: 20px;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      background-color: #0000008a;
      transform: translate(-50%, -50%);
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
    display: block !important;
  }
}

/* Modal styles */
.modal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  width: 100%;
  background: #000;
  padding: 0;
  border-radius: 12px;
  // overflow: hidden;
}

.modal-video {
  width: 100%;
}
</style>
