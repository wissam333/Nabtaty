import { a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';

const pick = (obj, ...keys) => {
  return keys.reduce((result, key) => {
    if (obj && key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {});
};
const useGetSiteApi = () => {
  const {
    serverApiBase,
    public: { apiBase, api, cachedTime }
  } = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const GetAll = async (endpoint, fields = [], isServer = true, isLazy = false) => {
    return useFetch(() => `${endpoint}`, {
      key: `${endpoint}`,
      baseURL: apiBase,
      server: isServer,
      lazy: isLazy,
      transform(input) {
        const transformed = {
          ...input,
          fetchedAt: /* @__PURE__ */ new Date()
        };
        if (fields.length) {
          if (input.items && Array.isArray(input.items)) {
            transformed.items = input.items.map(
              (item) => pick(item, ...fields)
            );
          } else {
            return pick(transformed, ...fields);
          }
        }
        return transformed;
      },
      getCachedData(key) {
        return handleCachingDataTime(key);
      }
    }, "$ZClKFvD9Nb");
  };
  const GetById = async (endpointWithoutId, fields = [], id, isServer = true, isLazy = false) => {
    return useFetch(() => `${endpointWithoutId}${id}`, {
      key: `${endpointWithoutId}${id}`,
      baseURL: apiBase,
      server: isServer,
      lazy: isLazy,
      transform(input) {
        const transformed = {
          ...input,
          fetchedAt: /* @__PURE__ */ new Date()
        };
        if (fields.length) {
          return pick(transformed, ...fields);
        }
        return transformed;
      },
      getCachedData(key) {
        return handleCachingDataTime(key);
      }
    }, "$TGG8Mkno4i");
  };
  const handleCachingDataTime = (key) => {
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    if (!data)
      return;
    const expirationDate = new Date(data.fetchedAt);
    expirationDate.setTime(expirationDate.getTime() + cachedTime);
    const isExpired = expirationDate.getTime() < Date.now();
    if (isExpired)
      return;
    return data;
  };
  return {
    GetAll,
    GetById
  };
};

export { useGetSiteApi as u };
//# sourceMappingURL=useGetSiteApi-BUAcv6Dp.mjs.map
