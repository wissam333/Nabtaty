export default cachedEventHandler(
  async () => {
    const { serverApi, serverApiBase } = useRuntimeConfig();
    const AllProductsTypes = `${serverApi.ProductsCategories}`;
    try {
      const response = await useStorage().getItem("mainToken");
      const data = await $fetch(
        AllProductsTypes,
        fetchOptions(serverApiBase, response.data.token)
      );
      return data;
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
    maxAge: 1, // caching for 5 hours 18000
  }
);
