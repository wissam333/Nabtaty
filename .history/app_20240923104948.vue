<template>
  <div class="whatsupp pointer">
    <a
      :href="`https://wa.me/${Whatsup?.description?.match(/\d+/)}`"
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
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
  }
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

const { data: Whatsup } = await useGetSiteApi().GetAll(
  `${api.GetPagesDetail}/5`
);

const { locale } = useI18n();

// Set the page title based on the locale
const titles = {
  en: "Baddar Furniture",
  ar: "بدار للمفروشات",
};

// Update the title dynamically
useHead({
  title: computed(() => titles[locale.value]),
});
</script>
