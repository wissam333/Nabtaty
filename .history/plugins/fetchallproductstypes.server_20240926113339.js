export default defineNuxtPlugin(async (nuxtApp) => {
  const { data: response, error } = await useFetch("/api/menu");
  if (response.value) {
    useAllProductsTypes().value = response.value.categories;
  }
});
