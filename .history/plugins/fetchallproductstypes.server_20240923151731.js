export default defineNuxtPlugin(async (nuxtApp) => {
  const { data } = await useFetch("/api/all-products-tpes");
  if (data.value) {
    if (data.value.succeeded) {
      useAllProductsTypes().value = data.value.data;
    }
  }
});
