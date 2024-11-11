<template>
  <div>
    <Order v-if="allcities" :allcities="allcities"></Order>
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
  const { data: allcitiesData, pending } = await useFetch(
    `${api.GetLocations}`,
    {
      baseURL: apiBase,
      headers: {
        "accept-language": "ar",
      },
    }
  );
  watchEffect(() => {
    if (process.client) {
      if (allcitiesData.value) {
        allcities.value = allcitiesData.value;
      }
    }
  });
} else {
  const { data: allcitiesData, pending } = await useFetch(
    `${api.GetLocations}`,
    {
      baseURL: apiBase,
      headers: {
        "accept-language": "en",
      },
    }
  );
  watchEffect(() => {
    if (process.client) {
      if (allcitiesData.value) {
        allcities.value = allcitiesData.value;
      }
    }
  });
}
</script>

<style lang="scss" scoped></style>
