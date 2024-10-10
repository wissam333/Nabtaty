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
const {
  public: { api },
} = useRuntimeConfig();
const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);
// cities ================================================
const { data: allcountries } = await useGetSiteApi().GetAll(
  `${api.NationsApi}`
);
</script>

<style lang="scss" scoped></style>
