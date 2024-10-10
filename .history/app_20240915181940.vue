<template>
  <div class="whatsupp pointer">
    <a
      href="https://api.whatsapp.com/send/?phone=%0097148340210&text&type=phone_number&app_absent=0"
      target="_blank"
      class="mx-2"
    >
      <img src="/photos/whatsup.png" alt="" />
    </a>
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
