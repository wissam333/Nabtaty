<template>
  <div class="container-fluid nav-margin">
    <div class="title">
      <h1 class="d-flex align-items-center justify-content-center">
        <img width="70" src="/photos/nabtaty8.png" alt="" />
        <span class="underline">
          {{ $i18n.locale === "ar" ? "نتائج البحث" : "Search Result" }}
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
        <div class="row" v-if="Products?.length > 0">
          <!-- {{ data.data }} -->
          <div class="grid3">
            <div
              class="product"
              v-for="product in Products"
              :key="product.id"
              data-aos="fade-up"
            >
              <div>
                <ProductCard2 :product="product"></ProductCard2>
              </div>
            </div>
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

const { data: Products, pending } = await useFetch(
  `${api.Search}/${route.params.id.toString()}`,
  {
    baseURL: apiBase,
    credentials: "include",
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
.grid3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  margin-bottom: 20px;

  @media (max-width: 1420px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .product {
    border-radius: 40px;
    width: 100%;
    box-shadow: 0px 0px 7px 0px #33333387;
    position: relative;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 90%;
    }
    @media (max-width: 380px) {
      width: 90%;
    }
  }
}
</style>
