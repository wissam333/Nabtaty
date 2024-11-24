<template>
  <div
    class="product-info nav-margin pt-5"
    :class="$i18n.locale === 'ar' ? 'ar' : ''"
  >
    <!-- Loading -->
    <div v-if="pending" class="loading">
      <ElementsSpinner></ElementsSpinner>
    </div>
    <div v-else class="container" style="position: relative">
      <!-- Back Link-->
      <!-- <div class="go-back" @click="router.back()">
        <font-awesome :icon="['fas', 'arrow-left']" />
      </div> -->

      <!-- Short Links-->
      <h5 class="links mb-10">
        <span class="pointer" @click="router.push(`/Products`)">
          {{ $i18n.locale === "ar" ? "منتجاتنا" : "Products" }}
        </span>
        /
        <!-- <span
          class="pointer"
          @click="router.push(`/Products/${Product?.subcategory_id}`)"
        >
          {{
            $i18n.locale === "ar"
              ? Product[0]?.categoryArabicName
              : Product[0]?.categoryEnglishName
          }}
        </span>
        / -->
        {{
          $i18n.locale === "ar"
            ? Product[0]?.plant_name
            : Product[0]?.plant_name
        }}
      </h5>

      <!-- Main Product -->
      <div class="row">
        <!-- Product Info-->
        <div class="info col-lg-6">
          <!-- Product Fav -->
          <div class="heart">
            <span v-if="isAuth.isAuthenticated">
              <font-awesome
                v-if="!ProductForFavorite?.isFavorite"
                @click="AddToFavorite()"
                :icon="['far', 'heart']"
                class="pointer"
              ></font-awesome>
              <font-awesome
                v-else
                @click="removeFromFavorite()"
                :icon="['fas', 'heart']"
              ></font-awesome>
            </span>
            <span v-else>
              <font-awesome
                @click="AddToFavoritebeforLogin()"
                :icon="['far', 'heart']"
              />
            </span>
          </div>
          <!-- <div class="heart">
                <font-awesome
                  @click="AddToFavoritebeforLogin()"
                  v-if="Product?.isFavorite"
                  :icon="['fas', 'heart']"
                />
                <font-awesome v-else :icon="['far', 'heart']" />
              </div> -->

          <h2 class="title">
            <img class="leaf" src="/photos/leaf2.png" alt="" />
            {{
              $i18n.locale === "ar"
                ? Product[0]?.plant_name
                : Product[0]?.plant_name
            }}
          </h2>

          <h2 class="price">
            <span
              :class="Product?.productOffer?.newPrice ? 'line-through' : ''"
            >
              {{ Product[0]?.price ?? "999" }}
              {{ $i18n.locale === "ar" ? "دينار" : "JOD" }}
            </span>

            <span v-if="Product?.productOffer?.newPrice" class="mx-2">
              {{ Product[0]?.productOffer?.newPrice }}
              {{ $i18n.locale === "ar" ? "دينار" : "JOD" }}
            </span>
          </h2>

          <div class="quantity">
            <div class="flex-auto">
              <label for="minmax-buttons" class="font-bold block mb-2">
                <h5 class="mb-0">
                  {{ $i18n.locale === "ar" ? "الكمية" : "Quantity" }}
                </h5>
              </label>
              <InputNumber
                v-model="quantity"
                id="minmax-buttons"
                inputId="minmax-buttons"
                mode="decimal"
                showButtons
                :min="0"
                :max="100"
                fluid
              />
            </div>
          </div>

          <!-- Product Desc , Note , Reviews -->
          <!-- <div class="mb-2 fw-bold" v-if="Product?.weight || Product[0]?.unitName"> -->
          <!-- <span>{{ Product[0]?.weight }}</span> -->
          <!-- <span class="mx-2">{{ Product[0]?.unitName }}</span> -->
          <!-- </div> -->

          <!-- Desc -->
          <div class="desc mt-5" v-if="Product[0]?.description">
            <div
              v-html="
                $i18n.locale === 'ar'
                  ? Product[0]?.description
                  : Product[0]?.description
              "
            ></div>
          </div>
          <div class="mt-5" v-if="!Product[0]?.description">
            <h5 class="fw-bold">
              {{
                $i18n.locale === "ar"
                  ? "لا يوجد وصف"
                  : "There is no description"
              }}
            </h5>
          </div>

          <!-- Add to cart button -->
          <div class="add-to-cart mt-4" @click="AddToCart(Product[0])">
            <button class="btn">
              <span>
                {{ $i18n.locale === "ar" ? "أضف للسلة" : "Add To Cart" }}
              </span>
            </button>
          </div>

          <!-- tabs -->
          <div class="my-4">
            <v-tabs v-model="tab" bg-color="transparent">
              <v-tab
                class="tabs"
                style="color: #78c044; font-weight: bold"
                value="one"
              >
                <div class="d-flex flex-column">
                  <font-awesome :icon="['fas', 'droplet']" />
                </div>
              </v-tab>

              <v-tab class="tabs" value="two">
                <div class="d-flex flex-column">
                  <font-awesome :icon="['fas', 'cloud-sun']" />
                </div>
              </v-tab>

              <v-tab class="tabs" value="three">
                <div class="d-flex flex-column">
                  <font-awesome :icon="['fas', 'snowflake']" />
                </div>
              </v-tab>

              <v-tab class="tabs" value="five">
                <font-awesome :icon="['fas', 'sun']" />
              </v-tab>

              <v-tab class="tabs" value="six">
                <font-awesome :icon="['fas', 'temperature-high']" />
              </v-tab>
            </v-tabs>

            <div class="mt-4" style="color: #333 !important; opacity: 1">
              <v-window
                v-model="tab"
                style="color: #333 !important; opacity: 1"
              >
                <v-window-item
                  value="one"
                  style="color: #333 !important; opacity: 1"
                >
                  <h5 style="color: #78c044; font-weight: bold">
                    <font-awesome :icon="['fas', 'droplet']" />
                    {{ $i18n.locale == "en" ? "Water" : "ماء" }}
                  </h5>
                  <p>
                    {{ Product[0].water }}
                  </p>
                </v-window-item>

                <v-window-item value="two" class="">
                  <h5 style="color: #78c044; font-weight: bold">
                    <font-awesome :icon="['fas', 'cloud-sun']" />
                    {{ $i18n.locale == "en" ? "Part Sun" : "مشمس بشكل جزئي" }}
                  </h5>
                  <p>
                    {{ Product[0].part_sun }}
                  </p>
                </v-window-item>

                <v-window-item value="three" class="">
                  <h5 style="color: #78c044; font-weight: bold">
                    <font-awesome :icon="['fas', 'snowflake']" />
                    {{ $i18n.locale == "en" ? "Medium" : "وسط" }}
                  </h5>
                  <p>
                    {{ Product[0].medium }}
                  </p>
                </v-window-item>

                <v-window-item value="five" class="">
                  <h5 style="color: #78c044; font-weight: bold">
                    <font-awesome :icon="['fas', 'sun']" />
                    {{ $i18n.locale == "en" ? "Light" : "الضوء" }}
                  </h5>
                  <p>
                    {{ Product[0].light }}
                  </p>
                </v-window-item>

                <v-window-item value="six" class="">
                  <h5 style="color: #78c044; font-weight: bold">
                    <font-awesome :icon="['fas', 'temperature-high']" />
                    {{ $i18n.locale == "en" ? "Temperature" : "درجة حرارة" }}
                  </h5>
                  <p>
                    {{ Product[0].temperatures }}
                  </p>
                </v-window-item>
              </v-window>
            </div>
          </div>
        </div>

        <!-- Product Images-->
        <div class="col-12 col-lg-6 mb-10">
          <ProductDetailsProductImagesCarousel
            v-if="Product"
            :ProductImages="Product[0]?.photos"
            :ProductMainImg="Product[0]?.photos[0]"
          ></ProductDetailsProductImagesCarousel>
        </div>
      </div>
    </div>

    <!-- related items -->

    <div class="container my-10 py-10" v-if="related?.length">
      <h1 class="color fw-bold">
        {{
          $i18n.locale === "ar"
            ? "اكتشف المنتجات المشابهة"
            : "Discover similar products"
        }}
      </h1>
      <div>
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :loop="false"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '1200': {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            '992': {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },

            '768': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },

            '250': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            '1': {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }"
        >
          <SwiperSlide v-for="product in related" :key="product.id">
            <div class="product" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
              <ProductCard
                :product="product"
                :productId="product?.productId"
              ></ProductCard>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const { $awn } = useNuxtApp();
const { locale } = useI18n();
const route = useRoute();
const router = useRouter();

// get product info
const { data: Product, pending } = await useFetch(
  `${api.GetPlantById}/${route.params.id}`,
  {
    baseURL: apiBase,
    credentials: "include",
    headers: {
      "accept-language": locale.value === "ar" ? "ar" : "en",
    },
  }
);

// get product images
// const { data: ProductImages, pending: pending2 } = await useGetSiteApi().GetAll(
//   `${api.ProductImages}${route.params.id}`
// );

// get related products

let related = ref();
const getProductRelatedItems = async () => {
  const { data: RelatedProducts } = await useFetch(
    `${api.GetPlantByCat}/${Product.value[0].category_id}`,
    {
      credentials: "include",
      baseURL: apiBase,
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en",
      },
    }
  );

  related.value = RelatedProducts.value.filter((e) => e.recommended == 1);
  related.value = related.value.filter((e) => e.id != route.params.id);
};

watchEffect(() => {
  if (process.client) {
    if (Product.value) {
      getProductRelatedItems();
    }
  }
});

let tabOptions = ref("one");
onMounted(() => {
  if (route.query.option) {
    tabOptions.value = Number(route.query.option);
  }
});
let note = ref("");
const tab = ref("one");
const tab2 = ref("one");
let quantity = ref(1);
let rate = ref(0);

watchEffect(() => {
  if (process.client) {
    if (tabOptions.value) {
      quantity.value = 1;
      note.value = "";
      tab.value = "one";
    }
  }
});

const AddToCart = (item) => {
  item.qty = quantity.value;
  if (item.productOffer) {
    item.price = item.productOffer.newPrice;
  }
  // return
  useShoppingCartComposable().addToCartWithQty(item, item.qty);
  quantity.value = 1;
  note.value = "";
};

// favourite =================================================
const ProductForFavorite = ref(null);
const isAuth = useAuth().value;

// not logged in
const AddToFavoritebeforLogin = () => {
  $awn.alert(
    locale.value === "ar"
      ? "لا يمكن الإضافة إلى المفضلة، يجب عليك تسجيل الدخول أولاً"
      : "Can't add to favorites, You must log in first",
    {
      durations: { global: 5000 },
    }
  );
};

const AddToFavorite = async () => {
  const { data: addtofav } = await useFetch(`${api.CreateFav}`, {
    credentials: "include",
    baseURL: apiBase,
    method: "POST",
    body: {
      plantId: route.params.id.toString(),
      customerId: useUserInfo().value.id,
    },
  });
  $awn.success("Successfully added to favorites");
};

const removeFromFavorite = async () => {
  const { data: removefromfav } = await useFetch(`${api.RemoveFav}`, {
    baseURL: apiBase,
    method: "DELETE",
    credentials: "include",
  });
  $awn.success("Successfully removed from favorites");
};
</script>
<style lang="scss" scoped>
.product-info {
  margin-bottom: 100px;
  .preview {
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
    @media (max-width: 991px) {
      margin-bottom: 30px;
      img {
        height: 250px;
      }
    }
  }
  .info {
    position: relative;
    .heart {
      right: 12px;
      position: absolute;
      cursor: pointer;
      svg {
        font-size: 35px;
      }
    }

    .title {
      font-weight: bold;
    }

    .price {
      font-weight: bold;
      margin-top: 20px;
      font-size: 25px;
      span {
        color: #78c044;
      }
    }

    .quantity {
      margin-top: 20px;
      width: 50%;
    }

    .add-to-cart {
      button {
        width: 150px;
        border-radius: 16px;
        padding: 10px 20px;
        background: $main;
        span {
          color: #fff;
          font-weight: bold;
        }
      }
    }

    .desc {
      // margin-top: 20px;
    }
  }
}
.ar {
  .heart {
    right: auto !important;
    left: 12px;
  }
  // .tabs {
  //   padding-left: 1rem !important;
  //   padding-right: 0 !important;
  //   justify-content: flex-start !important;
  // }
  .disscount {
    right: 0px;
    left: auto !important;
  }
}
.loading {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs {
  padding-right: 1rem;
  padding-left: 0;
  min-width: auto !important;
}

.disscount {
  position: absolute;
  top: -8px;
  left: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ec9605, #ffc35f, #ec9605);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.textarea {
  border: 2px solid $main;
  border-radius: 8px;
  width: 100%;
  padding: 10px;
  outline: 0 !important;
}
.go-back {
  width: 40px;
  height: 40px;
  background: #78c044;
  color: #fff;
  position: absolute;
  left: 0;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin: 0px 12px;
  border-radius: 0.25rem;
  cursor: pointer;
}
.links {
  color: #333;
  font-weight: bold;
  padding: 40px 0px 10px 0px;
  // padding: 40px 12px 10px 60px;
}
.product {
  height: 500px;
  width: 250px;
  border-radius: 300px;
  box-shadow: 0px 0px 7px 0px #33333387;
  position: relative;
  @media (max-width: 768px) {
    height: 300px;
    width: 90%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
}
.swiper {
  padding: 40px 0px;
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
}
.tabs {
  padding: 15px !important;
  height: auto !important;
  color: #78c044;
  font-weight: bold;
  svg {
    margin: 5px 0px;
    font-size: 20px;
  }

  &.v-slide-group-item--active,
  &.v-tab--selected {
    background-color: #78c044 !important;
    color: #fff !important;
  }
}
.tabs-container {
  margin-top: 80px;
  margin-bottom: 50px;
}

.information {
  .row {
    @media (max-width: 991px) {
      flex-direction: column-reverse;
    }
    .img {
      height: 300px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .desc {
      h2 {
        color: $main;
        font-weight: bold;
        margin-bottom: 20px;
      }
      h5 {
        border-inline-start: 2px solid $main;
        padding-inline-start: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 20px 0px;
        font-size: 17px;
      }
    }
  }
}
.leaf {
  transform: scaleX(-1);
  margin-bottom: 10px;
}
</style>
