export default defineNuxtPlugin(async (nuxtApp) => {
  const { data: response, error } = await useFetch("/api/menu");
  if (response.value) {
    useMainMenus().value = response.value.MenueData;
    useSocialMenus().value = response.value.SocialMenueData;
  }
});
