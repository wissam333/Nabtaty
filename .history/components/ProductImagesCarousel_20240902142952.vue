<template>
  <div class="preview-section d-flex">
    <div class="nav-imgs" :dir="$i18n.locale === 'en' ? 'rtl' : 'ltr'">
      <div class="nav-frame d-flex">
        <!--main image-->
        <div class="nav-imgs-item cover">
          <img
            :src="`${apiBase}${ProductMainImg?.productImageUrl}`"
            alt="nav-img"
            @click="ind = 0"
          />
        </div>
        <!--Album-->
        <div
          class="nav-imgs-item cover"
          v-for="(imgItem, index) in ProductImages"
          :key="imgItem.id"
        >
          <img
            :src="`${apiBase}${imgItem.imageUrl}`"
            alt="nav-img"
            @click="ind = index + 1"
          />
        </div>
      </div>
    </div>
    <div class="view-img">
      <v-carousel class="h-100" hide-delimiters show-arrows v-model="ind">
        <template v-slot:prev="{ props }">
          <div class="flip-icon pcc" @click="props.onClick">
            <icon
              :name="
                $i18n.locale === 'en'
                  ? 'material-symbols:arrow-back-ios'
                  : 'material-symbols:arrow-forward-ios'
              "
              size="30px"
            />
          </div>
        </template>
        <template v-slot:next="{ props }">
          <div class="flip-icon pcc" @click="props.onClick">
            <icon
              :name="
                $i18n.locale === 'ar'
                  ? 'material-symbols:arrow-back-ios'
                  : 'material-symbols:arrow-forward-ios'
              "
              size="30px"
            />
          </div>
        </template>
        <!--main image-->
        <v-carousel-item
          :src="`${apiBase}${ProductMainImg?.productImageUrl}`"
          @click="displayBasic = true"
          cover
          :key="0"
        ></v-carousel-item>
        <!--Album-->
        <v-carousel-item
          v-for="(item, i) in ProductImages"
          :key="i + 1"
          :src="`${apiBase}${item.imageUrl}`"
          @click="displayBasic = true"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>

  <Galleria
    v-model:visible="displayBasic"
    :value="allImgs"
    :responsiveOptions="responsiveOptions"
    containerStyle="max-width: 50%"
    :circular="true"
    :fullScreen="true"
    :showItemNavigators="true"
    :showThumbnailNavigators="true"
  >
    <template #item="slotProps">
      <img
        :src="`${apiBase}${slotProps.item.imageUrl}`"
        :alt="slotProps.item.id"
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
          :src="`${apiBase}${slotProps.item.imageUrl}`"
          :alt="slotProps.item.id"
          style="
            display: block;
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            border: 2px solid #146890;
          "
        />
      </div>
    </template>
  </Galleria>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const { ProductImages, ProductMainImg, allImgs } = defineProps([
  "ProductImages",
  "ProductMainImg",
  "allImgs",
]);

const ind = ref(0);

//Gallery
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

// Function to handle the Esc key press
const handleEscKey = (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    displayBasic.value = false;
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
.preview-section {
  width: 100%;
  // max-height: 30rem;
  aspect-ratio: 1.25/1;
  .nav-imgs {
    padding: 0 5px;
    // margin: 0;
    width: 25%;
    // max-width: 7rem;
    // height: 100%;
    // max-height: 40rem;
    overflow-y: scroll;
    // @include vertical-scrollbar(8px, black, #b79a00, #d1b423);
    // &.rtl{
    //   margin-left: 1rem;
    // }
    .nav-frame {
      width: 100%;
      // height: 100%;
      flex-direction: column;
      // max-height: 20rem;
      // height: 4rem;
      .nav-imgs-item {
        margin-bottom: 4px;
        width: 100%;
        // height: auto;
        // height: 15rem;
        aspect-ratio: 1/1;
        border: solid 2px rgba(0, 0, 0, 0);
        cursor: pointer;
        &:last-child {
          margin: 0;
        }
        &:hover {
          border: solid 2px $main;
        }
        &.active {
          border: solid 2px $main;
        }
        img {
          background-color: white;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .view-img {
    width: 100%;
    aspect-ratio: 1/1;
    background-color: white;
    .flip-icon {
      width: 2rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      cursor: pointer;
      .icon {
        transition: all 100ms ease-in;
        &:hover {
          color: $main;
          transform: scale(1.2);
        }
      }
      // background-color: #8a8a8a44;
    }
  }
}
</style>
