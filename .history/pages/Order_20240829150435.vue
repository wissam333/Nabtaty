<template>
  <div>
    <Order></Order>
  </div>
</template>

<script setup>
const {
  public: { api },
} = useRuntimeConfig();
// Fetch The Data
// const { data: countries, error, execute } = await useGetSiteApi().GetAll(`${api.CountriesGetAllApi}`)
const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);
// const { data: Currency } = await useGetSiteApi().GetAll(`${api.CurrencyGetDefaultApi}`)
</script>

<style lang="scss" scoped></style>
