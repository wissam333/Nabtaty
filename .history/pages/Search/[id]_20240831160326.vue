<template>
  <div class="container nav-margin">
    <div class="text-center d-flex justify-center">
      <h1 class="gradient-text d-flex">
        <span>
          {{ $i18n.locale == "ar" ? "نتائج البحث" : "Search Results" }}</span
        >
      </h1>
    </div>
    <div
      v-if="pending"
      class="d-flex justify-center align-items-center"
      style="height: 500px"
    >
      <ElementsSpinner />
    </div>
    <div v-else>
      <div v-if="data">
        <div class="row" v-if="data.data.length > 0">
          <!-- {{ data.data }} -->
          <div
            v-for="item in data.data"
            :key="item.id"
            class="mb-4 col-12 col-sm-12 col-md-4 col-lg-4"
          >
            <HomeTabsProductCard
              class="mt-8"
              :id="item.id"
              :image="`${apiBase}/${item.productImageUrl}`"
              :name="$i18n.locale === 'ar' ? item.nameAr : item.nameEn"
              :price="item.price"
              :arivals="true"
              :productId="item.id"
              :category_id="item.productDefaultCategoryId"
              :isFavorite="item.isFavorite"
              @ChangeIcon="ChangeIcon"
            />
          </div>
        </div>
        <div
          v-else
          class="d-flex justify-center align-items-center"
          style="height: 500px"
        >
          <h1 class="text-white">
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
const route = useRoute();

const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data, error, pending } = await useFetch(
  `/api/v1/Products/GetAllPagedSearchProduct?productname=${route.params.id}`,
  {
    baseURL: apiBase,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  }
);
</script>

<style lang="scss" scoped></style>
