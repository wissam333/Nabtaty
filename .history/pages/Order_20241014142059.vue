<template>
  <div>
    <Order
      v-if="allcities && countries"
      :allcities="allcities.data"
      :countries="countries.data"
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
const { data: countries } = await useGetSiteApi().GetAll(`${api.NationsApi}`);
</script>

<style lang="scss" scoped></style>
