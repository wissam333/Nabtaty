<template>
  <div>
    <Order v-if="allcities" :allcities="allcities.data"></Order>
  </div>
</template>

<script setup>
const {
  public: { api },
} = useRuntimeConfig();
const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);
</script>

<style lang="scss" scoped></style>
