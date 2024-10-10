export default defineNuxtPlugin(async (nuxtApp) => {
  const { AllProductsTypes } = await useFetch("/api/all-products-tpes");
  if (AllProductsTypes.value) {
    if (AllProductsTypes.value.succeeded) {
      useAllProductsTypes().value = AllProductsTypes.value.data;
    }
  }
});
