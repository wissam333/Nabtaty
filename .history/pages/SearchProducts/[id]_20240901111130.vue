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

async function fetchProducts() {
  let Products = ref({}); // Initialize as an empty object

  try {
    // Debugging: log values before fetch
    console.log("Locale:", locale.value);
    console.log("Route Params ID:", route.params.id);
    console.log("API Base:", apiBase);
    console.log("Auth Token:", useMainToken().value);

    const queryParam =
      locale.value === "ar"
        ? `ProductNameAr=${route.params.id.toString()}`
        : `searchString=${route.params.id.toString()}`;
    const { data, error, pending } = await useFetch(
      `${api.GetProducts}?${queryParam}`,
      {
        baseURL: apiBase,
        headers: {
          Authorization: `Bearer ${useMainToken().value}`,
        },
      }
    );

    if (error.value) {
      console.error("Error fetching products:", error.value);
    } else {
      console.log("Data:", data.value);
      Products.value = data.value;
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }

  // Debugging: log final Products value
  console.log("Products:", Products.value);
}

// Call the function
onMounted(() => {
  fetchProducts();
});
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
