<template>
  <div class="container nav-margin">
    <div class="text-center d-flex justify-center">
      <h1 class="">
        <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
        <span>
          {{ $i18n.locale == "ar" ? "نتائج البحث" : "Search Results" }}</span
        >
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
            class="mb-4 col-12 col-sm-12 col-md-4 col-lg-4"
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
          style="height: 500px"
        >
          <h1 class="text-white">
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

let Products = ref();
if (locale.value === "ar") {
  const { data, error, pending } = await useFetch(
    `${api.GetProducts}?ProductNameAr=${route.params.id.toString()}`,
    {
      baseURL: apiBase,
      headers: {
        Authorization: `Bearer ${useMainToken().value}`,
      },
    }
  );
} else {
  const { data, error, pending } = await useFetch(
    `${api.GetProducts}?searchString=${route.params.id.toString()}`,
    {
      baseURL: apiBase,
      headers: {
        Authorization: `Bearer ${useMainToken().value}`,
      },
    }
  );
}
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
</style>
