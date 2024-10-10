<template>
  <div class="whatsupp pointer">
    <img src="/photos/whatsup.png" alt="" />
  </div>
  <div @click="useOpenNav().value = false">
    <ElementsLoader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.whatsupp {
  width: 60px;
  height: 60px;
  position: fixed;
  right: 20px;
  bottom: 100px;
  z-index: 998;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: Socials } = await useGetSiteApi().GetAll(
  `${api.MenusMasterGetByCategoryApi}?categoryId=2`
);
</script>
