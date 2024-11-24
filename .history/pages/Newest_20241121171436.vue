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
        <div class="grid3" v-if="Products.length > 0">
          <!-- {{ data.data }} -->
          <div v-for="item in Products" :key="item.id" class="product">
            <ProductCard2 :product="item" :FavoriteId="item.id"></ProductCard2>
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
const { locale } = useI18n();
const { data: Products, pending } = await useFetch(`${api.GetNewest}`, {
  baseURL: apiBase,
  method: "GET",
  credentials: "include",
});
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
