export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const auth = useUserInfo().value;
    if (!auth?.email) {
      return navigateTo("/", { redirectCode: 301 });
    }
  }
});
