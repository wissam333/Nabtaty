<template>
  <div class="food-by-cat nav-margin mb-10">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale === "ar" ? "المنتجات" : "Products" }}
      </span>
    </h1>

    <div class="container">
      <div
        class="d-flex mt-5 justify-content-start align-items-center"
        style="flex-wrap: wrap; gap: 10px"
      >
        <h5 class="fw-bold">
          {{ $i18n.locale == "en" ? "Filters" : "الفلترة" }}
        </h5>
        <div class="tabel-chose mx-4">
          <ul class="d-flex" style="padding: 0; margin: 0">
            <li
              @click="TabelIndex = 1"
              :class="[TabelIndex == 1 ? 'active' : '']"
            >
              <icon name="icons8:grid-2" size="30px" />
            </li>
            <li
              @click="TabelIndex = 2"
              :class="[TabelIndex == 2 ? 'active' : '']"
            >
              <icon name="icons8:insert-table" size="30px" />
            </li>

            <li
              @click="TabelIndex = 3"
              :class="[TabelIndex == 3 ? 'active' : '']"
            >
              <icon name="icons8:grid" size="32px" />
            </li>
          </ul>
        </div>
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
      <div class="row">
        <div class="col-lg-2">
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
              v-for="item in FoodCategories?.data"
              :key="item.id"
            >
              {{ $i18n.locale == "en" ? item.nameEn : item.nameAr }}
            </p>
          </div>
        </div>
        <div class="col-lg-10">
          <div v-if="loading || pending">
            <ElementsSpinner></ElementsSpinner>
          </div>
          <div v-else class="row" v-show="Food?.data?.length > 0">
            <div
              :class="[
                TabelIndex == 1 ? 'col-md-6' : '',
                TabelIndex == 2 ? 'col-md-4' : '',
                TabelIndex == 3 ? 'col-md-3' : '',
              ]"
              class="col-6 product"
              v-for="item in filteredProducts"
              :key="item.id"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <ProductCard2
                class="mt-8"
                :id="item.id"
                :image="item.productImageUrl"
                :name="$i18n.locale === 'ar' ? item.nameAr : item.nameEn"
                :price="item.price"
                :arivals="true"
                :productId="item.id"
                :category_id="item.productDefaultCategoryId"
                :isFavorite="item.isFavorite"
                :item="item"
                @ChangeIcon="ChangeIcon"
              ></ProductCard2>
            </div>
          </div>
          <div class="load-more">
            <button
              @click="loadMore()"
              class="btn"
              v-if="hasMore & !pending & !loading & !loadingMore"
            >
              {{ $i18n.locale == "en" ? "Load more" : "تحميل المزيد" }}
            </button>
          </div>

          <div v-if="loadingMore">
            <ElementsSpinner></ElementsSpinner>
          </div>

          <h1
            v-show="Food?.data?.length === 0 && !pending && !loading"
            class="text-center mt-10 mb-10"
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
  public: { api, apiBase },
} = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const { data: FoodCategories } = await useGetSiteApi().GetAll(
  `${api.FoodCategories}?type=B2B&categoryId=0`
);

let hasMore = ref(false);

const { data: Food, pending } = await useGetSiteApi().GetAll(
  `${api.GetProducts}?CategoryId=${route.params.id}&type=B2B`
);

watchEffect(() => {
  if (process.client) {
    if (Food.value) {
      hasMore.value = Food.value?.hasNextPage;
    }
  }
});

const TabelIndex = ref(2);
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
const page = ref(1);

const setselectedId = async (item) => {
  page.value = 1;
  loading.value = true;
  selectedId.value = item.id;

  const { data: ProductsByCat, pending } = await useGetSiteApi().GetAll(
    `${api.GetProducts}?CategoryId=${item.id}&type=B2B?pageNumber=${
      page.value
    }&${Date.now()}`
  );
  Food.value = ProductsByCat.value;
  hasMore.value = ProductsByCat.value.hasNextPage;
  loading.value = false;
};

const setAll = async () => {
  page.value = 1;
  loading.value = true;
  selectedId.value = null;

  const { data: ProductsByCat, pending } = await useGetSiteApi().GetAll(
    `${api.GetProducts}?pageNumber=${page.value}&${Date.now()}`
  );
  Food.value = ProductsByCat.value;
  hasMore.value = ProductsByCat.value.hasNextPage;
  loading.value = false;
};

let loadingMore = ref(false);
const loadMore = async () => {
  loadingMore.value = true;
  page.value = page.value + 1;
  if (selectedId.value) {
    const { data: ProductsByCat, pending } = await useGetSiteApi().GetAll(
      `${api.GetProducts}?CategoryId=${selectedId.value}&type=B2B&pageNumber=${page.value}`
    );
    Food.value.data.push(...ProductsByCat.value.data);
    hasMore.value = ProductsByCat.value.hasNextPage;
    loadingMore.value = false;
  } else {
    const { data: ProductsByCat, pending } = await useGetSiteApi().GetAll(
      `${api.GetProducts}?pageNumber=${page.value}`
    );

    Food.value.data.push(...ProductsByCat.value.data);

    hasMore.value = ProductsByCat.value.hasNextPage;
    loadingMore.value = false;
  }
};
</script>
<style lang="scss" scoped>
.food-by-cat {
  h1 {
    text-align: center;
    padding: 40px;
    @media (max-width: 768px) {
      padding: 12px;
    }
    span {
      -webkit-background-clip: text;
      font-weight: bold;
      background-color: #146890;
      background-image: linear-gradient(45deg, #146890, #45b2e9, #146890);
      background-repeat: repeat;
      background-size: 100%;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
}

// filters
.filterbox {
  border-radius: 0;
  border: 1px solid $main;
}
.active {
  background: linear-gradient(to left, #146890, #45b2e9, #146890);
  color: white;
  font-weight: bold;
}

.box {
  border: 1px solid $main;
  border-radius: 5px;
  overflow: hidden;
  img {
    height: 200px;
    width: 100%;
    object-fit: contain;
  }

  .title {
    text-align: center;
    margin-top: 1rem;
  }

  .specialbtn {
    background-color: $main;
    color: white;
    border-radius: 0;
  }
}

@media screen and (max-width: 992px) {
  .filterbox {
    width: auto !important;
    display: inline-block !important;
    margin: 5px;
  }

  .allfilter {
    margin-bottom: 2rem !important;
  }

  .specialbtn {
    font-size: 10px !important;
    // background-color: red !important;
  }
  .qtybox {
    padding: 2px !important;
  }

  .box {
    img {
      height: 100px !important;
    }

    h4,
    p {
      font-size: small !important;
    }
  }
}
.show {
  font-size: 18px;
}

.load-more {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .btn {
    background: linear-gradient(45deg, #146890, #45b2e9, #146890);
    color: #fff;
  }
}
</style>
