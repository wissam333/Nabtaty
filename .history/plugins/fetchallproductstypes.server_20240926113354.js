export default defineNuxtPlugin(async (nuxtApp) => {
  const { data: response, error } = await useFetch("/api/all-products-tpes");
  if (response.value) {
    useAllProductsTypes().value = response.value.categories;
  }
});
