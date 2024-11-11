<template>
  <div>
    <Order v-if="allcities" :allcities="allcities.data"></Order>
  </div>
</template>

<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { locale } = useI18n();
const route = useRoute();

let allcities = ref();
if (locale.value === "ar") {
  const { data: MenusData, pending } = await useFetch(`${api.GetLocations}`, {
    baseURL: apiBase,
    headers: {
      "accept-language": "ar",
    },
  });
  watchEffect(() => {
    if (process.client) {
      if (MenusData.value && MenusData2.value) {
        AllCategories.value = MenusData.value;
      }
    }
  });
} else {
  const { data: MenusData, pending } = await useFetch(`${api.GetLocations}`, {
    baseURL: apiBase,
    headers: {
      "accept-language": "en",
    },
  });
  watchEffect(() => {
    if (process.client) {
      if (MenusData.value && MenusData2.value) {
        AllCategories.value = MenusData.value;
      }
    }
  });
}
</script>

<style lang="scss" scoped></style>
