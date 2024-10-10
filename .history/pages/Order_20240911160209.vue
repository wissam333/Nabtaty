<template>
  <div>
    <Order
      v-if="allcities && allcountries"
      :allcities="allcities.data"
      :allcountries="allcountries.data"
    ></Order>
  </div>
</template>

<script setup>
// cities ================================================
const {
  public: { api },
} = useRuntimeConfig();
const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);
// countries ================================================
const { data: allcountries } = await useGetSiteApi().GetAll(
  `${api.NationsApi}`
);
</script>

<style lang="scss" scoped></style>
