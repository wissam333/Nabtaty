<template>
  <div class="container-fluid">
    <div class="title">
      <h1 class="d-flex align-items-center justify-content-center">
        <img width="70" src="/photos/nabtaty8.png" alt="" />
        <span class="underline">
          {{ $i18n.locale === "ar" ? "المفضلة" : "Favorites" }}
        </span>
      </h1>
    </div>
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
