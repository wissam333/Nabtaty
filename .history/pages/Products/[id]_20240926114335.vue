<template>
  <div>

  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const route = useRoute();
const { data: Products , pending } = await useGetSiteApi().GetAll(
  `${api.ProductdetailsApi}?categoryId=${route.params.id}&pageSize=1000000000`
);
</script>
<style lang="scss" scoped></style>
