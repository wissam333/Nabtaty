export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const auth = useUserInfo().value;
    if (!auth) {
      return navigateTo("/", { redirectCode: 301 });
    }
  }
});
