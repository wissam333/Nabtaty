<template>
  <div class="Products">
    <div class="back">
      <img :src="apiBase + Categories?.imageUrl" alt="" />
    </div>

    <div class="cont">
      <div class="links">
        <nuxt-link to="/"> {{ $t("Home") }}</nuxt-link> / {{ $t("Products") }} /

        {{
          $i18n.locale === "ar"
            ? Categories?.arabicName
            : Categories?.englishName
        }}
      </div>

      <div
        class="d-flex mt-5 justify-content-start align-items-center top"
        style="flex-wrap: wrap; gap: 10px"
      >
        <h5 class="fw-bold tabel-chose">
          {{ $i18n.locale == "en" ? "Filters" : "الفلترة" }}
        </h5>
        <div class="select mx-4">
          <Select
            v-model="searchText"
            :options="options"
            optionValue="value"
            optionLabel="label"
            :placeholder="
              $i18n.locale == 'ar' ? 'الترتيب التلقائي' : 'Default Sorting'
            "
          ></Select>
        </div>
      </div>

      <div class="allfilter mt-8">
        <h5 class="fw-bold">
          {{ $i18n.locale === "ar" ? "الفئات" : "Categories" }}
        </h5>
        <p
          class="px-2 py-1 filterbox pointer"
          @click="setAll()"
          :class="!selectedId ? 'active' : ''"
        >
          {{ $i18n.locale === "ar" ? "الكل" : "All" }}
        </p>
        <p
          class="px-2 py-1 filterbox pointer"
          @click="setselectedId(item)"
          :class="selectedId == item.id ? 'active' : ''"
          v-for="item in SubCategories"
          :key="item.id"
        >
          {{ $i18n.locale == "en" ? item.englishName : item.arabicName }}
        </p>
      </div>

      <div class="grid">
        <div
          class="product"
          v-for="product in Products?.items"
          :key="product.id"
          data-aos="fade-up"
        >
          <div>
            <ProductCard2 :product="product"></ProductCard2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const route = useRoute();
const { data: Products, pending: loadingProducts } =
  await useGetSiteApi().GetAll(
    `${api.ProductdetailsApi}?categoryId=${route.params.id}&pageSize=1000000000`
  );

const { data: Categories, pending: loadingCategories } =
  await useGetSiteApi().GetAll(`${api.ProductsCategories}/${route.params.id}`);

const { data: SubCategories, pending: loadingSubCategories } =
  await useGetSiteApi().GetAll(
    `${api.SubCategories}?parentCategoryId=${route.params.id}`
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
    return Food.value.data.sort((a, b) =>
      b.nameEn > a.nameEn ? -1 : a.nameEn == b.nameEn ? 0 : 1
    );
  }
  if (searchText.value == 2) {
    return Food.value.data.sort((a, b) =>
      b.nameEn > a.nameEn ? 1 : a.nameEn == b.nameEn ? 0 : -1
    );
  }
  if (searchText.value == 3) {
    return Food.value.data.sort((a, b) => b.price - a.price);
  }
  if (searchText.value == 4) {
    return Food.value.data.sort((a, b) => a.price - b.price);
  } else {
    return Food.value?.data;
  }
});

// cat filter
let loading = ref(false);
const selectedId = ref(route.params.id);

const setselectedId = async (item) => {
  loading.value = true;
  selectedId.value = item.id;

  const { data: ProductsByCat, pending } = await useGetSiteApi().GetAll(
    `${api.GetProducts}?CategoryId=${item.id}&type=B2B?pageNumber=${
      page.value
    }&${Date.now()}&pageSize=10000`
  );
  Food.value = ProductsByCat.value;
  loading.value = false;
};

const setAll = async () => {
  loading.value = true;
  selectedId.value = null;

  const { data: ProductsByCat, pending } = await useGetSiteApi().GetAll(
    `${api.GetProducts}?pageNumber=${page.value}&${Date.now()}&pageSize=10000`
  );
  Food.value = ProductsByCat.value;
  loading.value = false;
};
</script>
<style lang="scss" scoped>
.Products {
  .back {
    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }
  .links {
    margin: 40px 0px;
    font-size: 15px;
    a {
      color: #333;
    }
  }
  .cont {
    .grid {
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
}

@media (max-width: 768px) {
  .links {
    margin: 12px !important;
    font-size: 12px !important;
  }
}
</style>
