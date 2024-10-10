export default defineNuxtPlugin(async (nuxtApp) => {
  const { data } = await useFetch("/api/productcategories");
  if (data.value) {
    if (data.value.succeeded) {
      useAllProductsTypes().value = data.value.data;
    }
  }
});
