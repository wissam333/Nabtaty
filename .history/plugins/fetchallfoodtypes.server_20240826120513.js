export default defineNuxtPlugin(async (nuxtApp) => {
  const { data } = await useFetch("/api/all-food-tpes");
  if (data.value) {
    if (data.value.succeeded) {
      useAllFoodesTypes().value = data.value.data;
      // console.log(useAllFoodesTypes().value)
    }
  }
});
