<template>
  <div>
    
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const route = useRoute();
const { data: About, pending } = await useGetSiteApi().GetAll(
  `${api.ProductdetailsApi}?categoryId=${route.params.id}&pageSize=1000000000`
);

// const { data: Categories, pending } = await useFetch(`${api.MainCategories}`, {
//   baseURL: apiBase,
//   method: "Get",
// });
</script>
<style lang="scss" scoped></style>
