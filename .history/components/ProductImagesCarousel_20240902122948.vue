<template>
  <div class="preview-section d-flex">
    <div class="nav-imgs" :dir="$i18n.locale === 'en' ? 'rtl' : 'ltr'">
      <div class="nav-frame d-flex">
        <!--main image-->
        <div class="nav-imgs-item cover">
          <img
            :src="`${apiBase}${Product?.data?.productImageUrl}`"
            alt="nav-img"
          />
        </div>
        <!--Album-->
        <div
          class="nav-imgs-item cover"
          v-for="(imgItem, index) in ProductImages?.data"
          :key="imgItem.id"
        >
          <img
            :src="`${apiBase}${imgItem.imageUrl}`"
            alt="nav-img"
            @click="ind = index"
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
        <v-carousel-item
          v-for="(item, i) in ProductImages?.data"
          :key="i"
          :src="`${apiBase}${item.imageUrl}`"
          @click="openAlbum(item.id)"
          cover
        ></v-carousel-item>
      </v-carousel>
      <!-- <img :src="`${apiBase}/${currentImg}`" alt=""> -->
    </div>
  </div>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();

const { ProductImages, Product } = defineProps(["ProductImages", "Product"]);

// start
const ind = ref(0);

// end
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
