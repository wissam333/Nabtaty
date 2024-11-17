<template>
  <div class="container-fluid nav-margin">
    <div class="title">
      <h1 class="d-flex align-items-center justify-content-center">
        <img width="70" src="/photos/nabtaty8.png" alt="" />
        <span class="underline">
          {{ $i18n.locale === "ar" ? "البوم الصور" : "Photo Album" }}
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
        <div class="row" v-if="Products.data.length > 0">
          <!-- {{ data.data }} -->
          <div
            v-for="item in Products.data"
            :key="item.id"
            class="mb-4 col-6 col-sm-6 col-md-3 col-lg-3"
          >
            <ProductCard2
              class="mt-8"
              :id="item.id"
              :image="`${item.productImageUrl}`"
              :name="$i18n.locale === 'ar' ? item.nameAr : item.nameEn"
              :price="item.price"
              :arivals="true"
              :productId="item.id"
              :category_id="item.productDefaultCategoryId"
              :isFavorite="item.isFavorite"
              :item="item"
              @ChangeIcon="ChangeIcon"
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
              $i18n.locale == "ar" ? "نعتذر لا يوجد منتجات" : "Sorry No Items"
            }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { locale } = useI18n();

const {
  public: { apiBase, api },
} = useRuntimeConfig();

const {
  data: Products,
  error,
  pending,
} = await useFetch(
  `${api.GetProducts}?ProductNameAr=${
    locale.value === "ar" ? route.params.id.toString() : ""
  }&searchString=${locale.value === "en" ? route.params.id.toString() : ""}`,
  {
    baseURL: apiBase,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  }
);

// const { data, error, pending } = await useFetch(
//   `${api.GetProducts}?searchString=${route.params.id.toString()}`,
//   {
//     baseURL: apiBase,
//     headers: {
//       Authorization: `Bearer ${useMainToken().value}`,
//     },
//   }
// );
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
