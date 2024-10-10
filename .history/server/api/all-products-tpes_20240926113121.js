export default cachedEventHandler(
  async () => {
    const {
      serverApi,
      serverApiBase,
      public: { api },
    } = useRuntimeConfig();
    const mainmenue = `${api.ProductsCategories}?pageNumber=0&pageSize=10`;
    try {
      const response = await useStorage().getItem("mainToken");
      const options = fetchOptions(serverApiBase, response.data.token);
      const data = await Promise.all([await $fetch(mainmenue, options)]);

      return { data };
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
