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
            <ProductCard2 :product="item"></ProductCard2>
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

const { data: Favs, pending } = await useFetch(`${api.GetAllFav}`, {
  baseURL: apiBase,
  method: "GET",
});

watchEffect(() => {
  if (process.client) {
    if (Favs.value) {
      Favs.value.map((e) => {
        let product = getProduct(e.plantId);
        Products.value.unshift(product);
      });
    }
  }
});

let Products = ref([]);
const getProduct = async () => {
  // get product info
  const { data: Product, pending } = await useFetch(
    `${api.GetPlantById}/${route.params.id}`,
    {
      baseURL: apiBase,
      credentials: "include",
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en",
      },
    }
  );
  return Product.value[0];
};

let deleted = ref([]);
const deleteFav = (favId) => {
  deleted.value[favId] = true;
};
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
