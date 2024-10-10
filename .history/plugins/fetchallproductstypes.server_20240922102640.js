export default defineNuxtPlugin(async (nuxtApp) => {
  const { data } = await useFetch("/api/all-food-tpes");
  if (data.value) {
    if (data.value.succeeded) {
      useAllProductsTypes().value = data.value.data;
    }
  }
});
