<template>
  <div class="food-by-cat nav-margin">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale === "ar" ? "المنتجات" : "Products" }}
      </span>
    </h1>

    <div>
      <div>
        <div class="d-flex mt-5 justify-content-start">
          <div class="tabel-chose">
            <span class="text-white">{{
              $i18n.locale == "en" ? "Show:" : "عرض:"
            }}</span>
            <ul class="ul">
              <li
                @click="TabelIndex = 1"
                :class="[TabelIndex == 1 ? 'active' : '']"
              >
                <icon name="icons8:grid-2" size="30px" color="#d2bd6c" />
              </li>
              <li
                @click="TabelIndex = 2"
                :class="[TabelIndex == 2 ? 'active' : '']"
              >
                <icon name="icons8:insert-table" size="30px" color="#d2bd6c" />
              </li>

              <li
                @click="TabelIndex = 3"
                :class="[TabelIndex == 3 ? 'active' : '']"
              >
                <icon name="icons8:grid" size="32px" color="#d2bd6c" />
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
        <div class="row" v-show="Products?.data?.length > 0">
          <div
            :class="[
              TabelIndex == 1 ? 'col-md-6' : '',
              TabelIndex == 2 ? 'col-md-4' : '',
              TabelIndex == 3 ? 'col-md-3' : '',
            ]"
            class="col-6"
            v-for="item in filteredProducts"
            :key="item.id"
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
        <h1
          v-show="Products?.data?.length == 0"
          class="text-center mt-10 mb-10"
          style="color: #fff"
        >
          {{ $i18n.locale == "ar" ? "نعتذر لا يوجد منتجات" : "Sorry No Items" }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup>
const TabelIndex = ref(3);
const searchText = ref("Default sorting");
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
</style>
