export default cachedEventHandler(
  async () => {
    const {
      serverApi,
      serverApiBase,
      public: { api },
    } = useRuntimeConfig();
    const mainmenue = `${api.GetMenuDetail}?categoryId=2&pageSize=100`;
    const socialmenue = `${api.GetMenuDetail}?categoryId=4`;
    try {
      const response = await useStorage().getItem("mainToken");
      const options = fetchOptions(serverApiBase, response.data.token);
      const data = await Promise.all([
        await $fetch(mainmenue, options),
        await $fetch(socialmenue, options),
      ]);

      const MenueData = data[0];
      const SocialMenueData = data[1];
      return { MenueData, SocialMenueData };
    } catch (err) {
      throw createError({
        statusCode: 444,
        message: err.message,
        data: {
          responseBody: err.stack,
        },
      });
    }
  },
  {
    maxAge: 1, // caching for 5 second
  }
);
