<template>
  <div class="Products">
    <!-- <div v-if="loading" class="loader">
      <Skeleton class="loading"></Skeleton>
    </div>
    <div v-else class="back">
      <img :src="apiBase + Categories?.imageUrl" alt="" />
    </div> -->

    <div class="">
      <div class="row">
        <div class="col-lg-2" :class="$i18n.locale === 'ar' ? 'ar' : ''">
          <div class="wrapper">
            <h2>
              <span>
                {{ $i18n.locale === "ar" ? "الفئات" : "Categories" }}
                <font-awesome
                  style="transform: rotate(90deg)"
                  :icon="['fas', 'sliders']"
                />
              </span>
            </h2>
            <div class="allfilter mt-8">
              <!-- <p
              class="filterbox pointer"
              @click="setAll()"
              :class="!selectedId ? 'active' : ''"
            >
              {{ $i18n.locale === "ar" ? "الكل" : "All" }}
            </p> -->
              <PanelMenu
                :model="AllCats"
                class="w-full md:w-80"
                @panel-open="OpenSubCat"
              >
                <template #item="{ item, hasSubmenu }">
                  <div class="filterbox pointer d-flex justify-content-between">
                    <span
                      class="cat"
                      :class="selectedId == item.id ? 'active' : ''"
                    >
                      {{
                        $i18n.locale == "en"
                          ? item.category_name
                          : item.category_name
                      }}
                    </span>
                    <span class="drop-down" v-if="hasSubmenu">
                      <span>></span>
                    </span>
                  </div>
                </template>
              </PanelMenu>

              <!-- <p
              class="filterbox pointer"
              @click="setAll()"
              :class="!selectedId ? 'active' : ''"
            >
              {{ $i18n.locale === "ar" ? "الكل" : "All" }}
            </p>

            <p
              class="filterbox pointer"
              @click="setselectedId(item)"
              :class="selectedId == item.id ? 'active' : ''"
              v-for="item in SubCategories"
              :key="item.id"
            >
              {{ $i18n.locale == "en" ? item.englishName : item.arabicName }}
            </p> -->
            </div>
          </div>
        </div>
        <div v-if="loading || pending" class="col-lg-10 loader">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <div v-else class="col-lg-10">
          <div class="links">
            <nuxt-link to="/"> {{ $t("Home") }}</nuxt-link> /
            {{ $t("Products") }}

            <span v-if="Categories?.parentCategoryId">
              /
              {{ getMainCat(Categories.parentCategoryId) }}
            </span>
            /
            <span>
              {{
                $i18n.locale === "ar"
                  ? Categories?.category_name
                  : Categories?.category_name
              }}
            </span>
          </div>

          <div class="title">
            <h1 class="d-flex align-items-center">
              <!-- <img width="70" src="/logo/nabtaty-08.png" alt="" /> -->
              <span class="underline">
                {{
                  $i18n.locale === "ar"
                    ? Categories?.category_name
                    : Categories?.category_name
                }}
              </span>
            </h1>
          </div>

          <div class="d-flex justify-content-start align-items-end mb-10">
            <div
              class="d-flex mt-5 justify-content-start align-items-center top"
              style="flex-wrap: wrap; gap: 10px"
            >
              <!-- <h5 class="fw-bold tabel-chose">
            {{ $i18n.locale == "en" ? "Filters" : "الفلترة" }}
          </h5> -->
              <div class="select">
                <Select
                  v-model="searchText"
                  :options="options"
                  optionValue="value"
                  optionLabel="label"
                  :placeholder="
                    $i18n.locale == 'ar'
                      ? 'الترتيب التلقائي'
                      : 'Default Sorting'
                  "
                ></Select>
              </div>
            </div>
          </div>

          <div class="grid3">
            <div
              class="product"
              v-for="product in filteredProducts"
              :key="product.id"
              data-aos="fade-up"
            >
              <div>
                <ProductCard2 :product="product"></ProductCard2>
              </div>
            </div>
          </div>

          <h1
            v-show="Products?.items?.length === 0 && !pending && !loading"
            class="text-center my-10 py-10"
            style="color: #333"
          >
            {{
              $i18n.locale == "ar" ? "نعتذر لا يوجد منتجات" : "Sorry No Items"
            }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { locale } = useI18n();
const route = useRoute();

let AllCategories = ref();
let AllSubCategories = ref();
if (locale.value === "ar") {
  const { data: MenusData, pending } = await useFetch(
    `${api.findAllCategories}`,
    {
      baseURL: apiBase,
      headers: {
        "accept-language": "ar",
      },
    }
  );
  const { data: MenusData2, pending2 } = await useFetch(`${api.GetSubCat}`, {
    baseURL: apiBase,
    headers: {
      "accept-language": "ar",
    },
  });
  watchEffect(() => {
    if (process.client) {
      if (MenusData.value && MenusData2.value) {
        AllCategories.value = MenusData.value;
        AllSubCategories.value = MenusData2.value;
      }
    }
  });
} else {
  const { data: MenusData, pending } = await useFetch(
    `${api.findAllCategories}`,
    {
      baseURL: apiBase,
      headers: {
        "accept-language": "en",
      },
    }
  );
  const { data: MenusData2, pending2 } = await useFetch(`${api.GetSubCat}`, {
    baseURL: apiBase,
    headers: {
      "accept-language": "en",
    },
  });
  watchEffect(() => {
    if (process.client) {
      if (MenusData.value && MenusData2.value) {
        AllCategories.value = MenusData.value;
        AllSubCategories.value = MenusData2.value;
      }
    }
  });
}

// get parent category for sub category in links
const getMainCat = (parentId) => {
  const category = AllCategories.value.filter((cat) => cat.id === parentId);
  return locale.value === "ar"
    ? category[0].arabicName
    : category[0].englishName;
};

let AllCats = ref([]);
watchEffect(() => {
  if (process.client) {
    if (AllCategories.value && AllSubCategories.value) {
      AllCats.value = AllCategories.value.map((parent) => {
        const items = AllSubCategories.value.filter((cat) => {
          if (cat.category_id === parent.id) {
            cat.category_name = cat.subcategory_name;
            return cat;
          }
        });
        if (items.length) {
          return { ...parent, items };
        } else {
          return { ...parent };
        }
      });
    }
  }
});

// get the products for the selected categories
const { data: Products, pending: loadingProducts } =
  await useGetSiteApi().GetAll(
    `${api.AllNewCollection}?categoryId=${route.params.id}&pageSize=1000000000`
  );

// get the selected category
const { data: Categories, pending: loadingCategories } =
  await useGetSiteApi().GetAll(`${api.ProductsCategories}/${route.params.id}`);

// get the sub categories for the selected category
const { data: SubCategories, pending: loadingSubCategories } = await useFetch(
  `${api.SubCategories}?parentCategoryId=${route.params.id}`,
  {
    baseURL: apiBase,
    method: "Get",
  }
);

const searchText = ref("Default sorting");
const options = ref([
  { label: "A To Z", value: "1" },
  { label: "Z To A", value: "2" },
  { label: "Max Price", value: "3" },
  { label: "Min Price", value: "4" },
]);

const filteredProducts = computed(() => {
  if (searchText.value == 1) {
    return Products.value.items.sort((a, b) =>
      b.englishName > a.englishName
        ? -1
        : a.englishName == b.englishName
        ? 0
        : 1
    );
  }
  if (searchText.value == 2) {
    return Products.value.items.sort((a, b) =>
      b.englishName > a.englishName
        ? 1
        : a.englishName == b.englishName
        ? 0
        : -1
    );
  }
  if (searchText.value == 3) {
    return Products.value.items.sort((a, b) => b.price - a.price);
  }
  if (searchText.value == 4) {
    return Products.value.items.sort((a, b) => a.price - b.price);
  } else {
    return Products.value?.items;
  }
});

// cat filter
let loading = ref(false);
const selectedId = ref(route.params.id);

const setselectedId = async (item) => {
  loading.value = true;
  selectedId.value = item.id;

  const { data: ProductsByCat, pending } = await useGetSiteApi().GetAll(
    `${api.ProductdetailsApi}?CategoryId=${
      item.id
    }&type=B2B&${Date.now()}&pageSize=10000`
  );

  // get the selected category
  const { data: NewCategory } = await useGetSiteApi().GetAll(
    `${api.ProductsCategories}/${selectedId.value}`
  );

  Categories.value = NewCategory.value;
  Products.value = ProductsByCat.value;
  loading.value = false;
};

// const setAll = async () => {
//   loading.value = true;
//   selectedId.value = null;

//   const { data: ProductsByCat, pending } = await useGetSiteApi().GetAll(
//     `${api.AllNewCollection}?categoryId=${
//       route.params.id
//     }&pageSize=10000&${Date.now()}`
//   );
//   Products.value = ProductsByCat.value;
//   loading.value = false;
// };

//
</script>
<style lang="scss" scoped>
.Products {
  .title {
    font-weight: bold;
    span {
      -webkit-background-clip: text;
      font-weight: bold;
      background-color: #8cc63e;
      background-image: linear-gradient(to right, #191d23, #8cc63e);
      background-repeat: repeat;
      background-size: 100%;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
  .loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid $main;
    .loading {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .back {
    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }
  .links {
    margin: 20px 0px;
    font-size: 15px;
    a {
      color: #333;
    }
  }
  .allfilter {
    width: 100%;
    padding: 0px 10px;
    .filterbox {
      color: $main;
      border-radius: 0;
      border: 1px solid #d4d4d4a8;
      margin: 0px 4px;
      font-weight: bold;
      margin-bottom: 0px;
      .cat {
        width: 100%;
        padding: 8px;
        &.active {
          background: rgb(190 86 198 / 25%);
          color: $main;
          border: 1px solid $basic;
        }
      }
      .drop-down {
        width: 20%;
        border: 1px solid #d4d4d4a8;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          user-select: none;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }

  .select {
    margin-bottom: 5px;
  }
  .grid3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
    margin-bottom: 20px;

    @media (max-width: 1420px) {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }

    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .product {
      border-radius: 40px;
      width: 100%;
      box-shadow: 0px 0px 7px 0px #33333387;
      position: relative;
      overflow: hidden;
      @media (max-width: 768px) {
        width: 90%;
      }
      @media (max-width: 380px) {
        width: 90%;
      }
    }
  }
  .grid2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
    margin-bottom: 20px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .product {
      border-radius: 40px;
      box-shadow: 0px 0px 7px 0px #33333387;
      position: relative;
      overflow: hidden;
      @media (max-width: 768px) {
        width: 90%;
      }
      @media (max-width: 380px) {
        width: 90%;
      }
    }
  }
}

.col-lg-2 {
  box-shadow: 3px -1px 12px 0px rgba(51, 51, 51, 0.07);
  display: flex;
  flex-direction: column;
  position: relative;
  &.ar {
    box-shadow: -5px -1px 12px 0px rgba(51, 51, 51, 0.07);
  }
  .wrapper {
    position: fixed;
    width: 16%;
    height: 100vh;
    @media (max-width: 1250px) {
      height: auto;
      position: relative;
      width: 100%;
    }
    h2 {
      padding: 10px;
      margin-top: 20px;
      color: $main;
      font-weight: bold;
    }
  }
}
.col-lg-10 {
  padding: 0px 30px;
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
}

@media (max-width: 768px) {
  .links {
    margin: 12px !important;
    font-size: 12px !important;
  }
  .mt-8 {
    margin-top: 12px !important;
  }
  .mb-10 {
    margin-bottom: 12px !important;
  }
}

@media (max-width: 1250px) {
  .row {
    flex-direction: column !important;
  }
  .col-lg-2 {
    width: 100% !important;
    margin-bottom: 30px;
  }
  .col-lg-10 {
    width: 100% !important;
  }
}
.col-lg-10 {
  min-height: 70vh;
}
</style>
