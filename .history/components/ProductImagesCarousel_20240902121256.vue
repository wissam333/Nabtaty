<template>
  <div class="preview-section d-flex">
    <div class="nav-imgs" :dir="$i18n.locale === 'en' ? 'rtl' : 'ltr'">
      <div class="nav-frame d-flex">
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
const { ProductImages, Product } = defineProps(["ProductImages", "Product"]);

// start
let isAdded = false;
const ind = ref(0);

const allImgs = ref(ProductImages?.data);

console.log(allImgs.value);
allImgs.value?.map((item) => {
  if (Product.data.productImageUrl == item.imageUrl) {
    isAdded = true;
  }
});

if (!isAdded) {
  allImgs.value?.unshift({
    id: "product-img",
    imageUrl: Product.data.productImageUrl,
  });
}

const openAlbum = (i) => {
  allImgs.value.map((item) => {
    item["image"] = item.imageUrl;
    item.id == i ? (item.isDefault = true) : (item.isDefault = false);
  });
  // let imgs = allImgs.value
  modalData().value = allImgs.value;
  showModal().value = true;
};

// end
</script>
