<template>
  <div class="about">
    <div class="container">
      <div class="title">
        <h1 class="d-flex align-items-center justify-content-center">
          <img width="70" src="/photos/nabtaty8.png" alt="" />
          <span class="underline">
            {{ $i18n.locale === "ar" ? "البوم الصور" : "Photo Album" }}
          </span>
        </h1>
      </div>
    </div>
    <div class="cont">
      <div v-if="pending" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else class="row">
        <ClientOnly>
          <div
            class="col-lg-4"
            v-for="photo in Photos"
            :key="photo.id"
            data-aos="fade-up"
          >
            <div :class="openGallery ? 'active' : ''" class="modal" dir="ltr">
              <div class="modal-content">
                <span class="close" @click="closeModal(photo.id)">&times;</span>
                <div class="overlay"></div>
                <VueFlux
                  v-if="Photos.length"
                  :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
                  :options="options"
                  :rscs="getRscs()"
                  :transitions="transitions"
                  class="gallery"
                  :class="openGallery === true ? 'active' : ''"
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
          </div>
        </ClientOnly>
        <div class="images col-lg-4" @click="openGallery = true">
          <img :src="`${apiBase}/${Photos[0].photo}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n();
const {
  public: { apiBase, api },
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
  `${api.GetPhotoAlbum}`
);

const options = reactive({
  allowFullscreen: true,
  allowToSkipTransition: false,
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

let openGallery = ref();

const getRscs = () => {
  rscs = [];
  Photos.value?.forEach((img) => {
    rscs.push(new Img(`${apiBase}/${img.photo}`));
  });
  return rscs;
};
// Close modal
const closeModal = (id) => {
  openGallery = false;
};

const handleClick = (event) => {
  // Check if the click was on the .p-galleria-mask element
  if (event.target.classList.contains("overlay")) {
    openGallery.value = false;
  }
  if (event.target.classList.contains("overlay")) {
    openGallery.value = false;
  }
};

// Function to handle the Esc key press
const handleEscKey = (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    openGallery.value = false;
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
.title {
  font-weight: bold;
  padding: 40px 0px;
  span {
    -webkit-background-clip: text;
    font-weight: bold;
    background-color: #8cc63e;
    background-image: linear-gradient(to right, #191d23, #8cc63e);
    background-repeat: repeat;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
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

.gallery {
  display: none;
  animation: hide 0.3s linear forwards;
  @keyframes hide {
    0% {
      display: flex;
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      display: none;
      opacity: 0;
      transform: translateY(-30px);
    }
  }
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

  animation: hide 0.3s linear forwards;
  @keyframes hide {
    0% {
      display: flex;
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      display: none;
      opacity: 0;
      transform: translateY(-30px);
    }
  }
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
  background: rgba(255, 255, 255, 0.363);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
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
