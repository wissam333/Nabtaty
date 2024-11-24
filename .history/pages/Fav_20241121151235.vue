<template>
  <div class="container-fluid">
    <!-- <div class="text-center d-flex justify-center">
        <h1 class="">
          <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
          <span>
            {{ $i18n.locale == "ar" ? "نتائج البحث" : "Search Results" }}</span
          >
        </h1>
      </div> -->
    <div
      v-if="pending"
      class="d-flex justify-center align-items-center"
      style="height: 500px"
    >
      <ElementsSpinner />
    </div>
    <div v-else>
      <div v-if="Products">
        <div class="row" v-if="Products.length > 0">
          <!-- {{ data.data }} -->
          <div
            v-for="item in Products"
            :key="item.id"
            class="mb-4 col-6 col-sm-6 col-md-3 col-lg-3"
            v-show="!deleted[item.id]"
          >
            <ProductCard2
              class="mt-8"
              :id="item.productId"
              :image="`${item.product.productImageUrl}`"
              :name="
                $i18n.locale === 'ar'
                  ? item.product.nameAr
                  : item.product.nameEn
              "
              :price="item.product.price"
              :arivals="true"
              :productId="item.productId"
              :category_id="item.product.productDefaultCategoryId"
              :isFavorite="item.product.isFavorite"
              :FavoriteId="item.id"
              @deleteFav="deleteFav"
              :item="item.product"
            />
          </div>
        </div>
        <div
          v-else
          class="d-flex justify-center align-items-center"
          style="height: 400px"
        >
          <h1 class="color fw-bold">
            {{
              $i18n.locale == "ar"
                ? "لا يوجد منتجات ضمن المفضلة"
                : "No Items In Favorites"
            }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const user = useUserInfo().value;

const { data: Products, pending } = await useFetch(`${api.GetAllFav}`, {
  baseURL: apiBase,
  method: "GET",
});

let deleted = ref([]);
const deleteFav = (favId) => {
  deleted.value[favId] = true;
};
</script>

<style lang="scss" scoped>
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
.col-sm-6 {
  @media (max-width: 991px) {
    padding: 0px 6px;
  }
}
.mt-8 {
  @media (max-width: 991px) {
    margin-top: 12px !important;
  }
}
</style>
