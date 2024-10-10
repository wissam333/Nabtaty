<template>
  <div class="Products">
    <div class="back">
      <img :src="apiBase + Categories?.imageUrl" alt="" />
    </div>
    <div class="links">
      <nuxt-link to="/"> {{ $t("Home") }}</nuxt-link> / {{ $t("Products") }} /

      {{
        $i18n.locale === "ar" ? Categories?.arabicName : Categories?.englishName
      }}
    </div>
    <div class="cont"></div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const route = useRoute();
const { data: Products, pending: loadingProducts } =
  await useGetSiteApi().GetAll(
    `${api.ProductdetailsApi}?categoryId=${route.params.id}&pageSize=1000000000`
  );

const { data: Categories, pending: loadingCategories } =
  await useGetSiteApi().GetAll(`${api.ProductsCategories}/${route.params.id}`);
</script>
<style lang="scss" scoped>
.Products {
  .back {
    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }
  .links {
    margin: 20px;
    a {
      color: #333;
    }
  }
}

@media (max-width: 768px) {
  .links {
    margin: 12px;
  }
}
</style>
