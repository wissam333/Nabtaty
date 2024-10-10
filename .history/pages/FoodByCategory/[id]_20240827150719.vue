<template>
  <div class="food-by-cat nav-margin">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale === "ar" ? "المنتجات" : "Products" }}
      </span>
    </h1>

    <div class="container">
      <div class="d-flex mt-5 justify-content-start">
        <div class="tabel-chose">
          <div class="mb-4">
            {{ $i18n.locale == "en" ? "Show :" : "العرض :" }}
          </div>

          <ul class="d-flex" style="padding: 0; margin: 0">
            <li
              @click="TabelIndex = 1"
              :class="[TabelIndex == 1 ? 'active' : '']"
            >
              <icon name="icons8:grid-2" size="30px" color="#146890" />
            </li>
            <li
              @click="TabelIndex = 2"
              :class="[TabelIndex == 2 ? 'active' : '']"
            >
              <icon name="icons8:insert-table" size="30px" color="#146890" />
            </li>

            <li
              @click="TabelIndex = 3"
              :class="[TabelIndex == 3 ? 'active' : '']"
            >
              <icon name="icons8:grid" size="32px" color="#146890" />
            </li>
          </ul>
        </div>
        <div class="select">
          <select v-model="searchText">
            <option :value="searchText" selected disabled>
              {{
                $i18n.locale == "ar" ? "الترتيب التلقائي" : "Default Sorting"
              }}
            </option>
            <option class="option" value="1">A To Z</option>
            <option class="option" value="2">Z To A</option>
            <option class="option" value="3">Max Price</option>
            <option class="option" value="4">Min Price</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10">
          <div class="row" v-show="Products?.data?.length > 0">
            <div
              :class="[
                TabelIndex == 1 ? 'col-md-6' : '',
                TabelIndex == 2 ? 'col-md-4' : '',
                TabelIndex == 3 ? 'col-md-3' : '',
              ]"
              class="col-6 product"
              v-for="item in filteredProducts"
              :key="item.id"
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
                @ChangeIcon="ChangeIcon"
              ></ProductCard2>
            </div>
          </div>
          <h1
            v-show="Products?.data?.length == 0"
            class="text-center mt-10 mb-10"
            style="color: #fff"
          >
            {{
              $i18n.locale == "ar" ? "نعتذر لا يوجد منتجات" : "Sorry No Items"
            }}
          </h1>
        </div>
        <div class="col-lg-2">
          <div class="allfilter mt-8">
            <h5 class="fw-bold">
              {{ $i18n.locale === "ar" ? "الفلترة" : "Filter" }}
            </h5>
            <p
              class="px-2 py-1 filterbox pointer"
              @click="setAll()"
              :class="!selectedId ? 'active' : ''"
            >
              {{ $t("All") }}
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

const { data: Products, pending } = await useGetSiteApi().GetAll(
  `${api.GetProducts}?CategoryId=${route.params.id}&type=B2B`
);
console.log(route.params.id);
const TabelIndex = ref(3);
const searchText = ref("Default sorting");

const filteredProducts = computed(() => {
  if (searchText.value == 1) {
    return Products.value.data.sort((a, b) =>
      b.nameEn > a.nameEn ? -1 : a.nameEn == b.nameEn ? 0 : 1
    );
  }
  if (searchText.value == 2) {
    return Products.value.data.sort((a, b) =>
      b.nameEn > a.nameEn ? 1 : a.nameEn == b.nameEn ? 0 : -1
    );
  }
  if (searchText.value == 3) {
    return Products.value.data.sort((a, b) => b.price - a.price);
  }
  if (searchText.value == 4) {
    return Products.value.data.sort((a, b) => a.price - b.price);
  } else {
    return Products.value?.data;
  }
});
</script>
<style lang="scss" scoped>
.food-by-cat {
  h1 {
    text-align: center;
    padding: 40px;
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
</style>
