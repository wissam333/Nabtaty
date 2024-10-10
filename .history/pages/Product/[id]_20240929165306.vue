<template>
  <div
    class="product-info nav-margin pt-5"
    :class="$i18n.locale === 'ar' ? 'ar' : ''"
  >
    <div v-if="pending" class="loading">
      <ElementsSpinner></ElementsSpinner>
    </div>
    <div v-else class="container" style="position: relative">
      <div class="go-back" @click="router.back()">
        <font-awesome :icon="['fas', 'arrow-left']" />
      </div>
      <h5 class="links mb-10">
        <span class="pointer" @click="router.push(`/Products`)">
          {{ $i18n.locale === "ar" ? "منتجاتنا" : "Products" }}
        </span>
        /
        <span
          class="pointer"
          @click="router.push(`/FoodByCategory/${Product?.categoryId}`)"
        >
          {{
            $i18n.locale === "ar"
              ? Product?.categoryArabicName
              : Product?.categoryEnglishName
          }}
        </span>
        /
        {{ $i18n.locale === "ar" ? Product?.arabicName : Product?.englishName }}
      </h5>

      <div class="options mb-10">
        <v-tabs v-model="tabOptions" bg-color="transparent">
          <v-tab
            class="tabs"
            style="color: #bf9847; font-weight: bold"
            value="one"
            ><h5 class="fw-bold">
              {{
                $i18n.locale === "ar"
                  ? Product?.arabicName
                  : Product?.englishName
              }}
            </h5></v-tab
          >
          <v-tab
            v-for="option in Product?.productOptions"
            class="tabs"
            style="color: #bf9847; font-weight: bold"
            :value="option.id"
          >
            <h5 class="fw-bold">{{ option.title }}</h5></v-tab
          ></v-tabs
        >
      </div>
      <v-window v-model="tabOptions">
        <v-window-item value="one">
          <div class="row">
            <div class="col-12 col-lg-6 mb-10">
              <ProductImagesCarousel
                v-if="Product"
                :ProductImages="Product?.productPhotos"
                :ProductMainImg="Product?.imageDataUrl"
                :disscount="Product?.productOffer?.discountRatio"
              ></ProductImagesCarousel>
            </div>

            <div class="info col-lg-6">
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
                {{
                  $i18n.locale === "ar"
                    ? Product?.arabicName
                    : Product?.englishName
                }}
              </h2>

              <h2 class="price">
                <span
                  :class="Product?.productOffer?.newPrice ? 'line-through' : ''"
                >
                  {{ Product?.price }}
                  {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
                </span>

                <span v-if="Product?.productOffer?.newPrice" class="mx-2">
                  {{ Product?.productOffer?.newPrice }}
                  {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
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

              <div class="my-4">
                <v-tabs v-model="tab" bg-color="transparent">
                  <v-tab
                    class="tabs"
                    style="color: #bf9847; font-weight: bold"
                    value="one"
                    >{{ $i18n.locale == "en" ? "Description" : "الوصف" }}</v-tab
                  >
                  <v-tab
                    class="tabs"
                    style="color: #bf9847; font-weight: bold"
                    value="two"
                    >{{ $i18n.locale == "en" ? "Reviews" : "المراجعات" }}</v-tab
                  >

                  <v-tab
                    class="tabs"
                    style="color: #bf9847; font-weight: bold"
                    value="three"
                    >{{
                      $i18n.locale == "en" ? "Add Note" : "أضف ملاحظة"
                    }}</v-tab
                  >
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
                      <div
                        class="mb-2 fw-bold"
                        v-if="Product?.weight || Product?.unitName"
                      >
                        <!-- <span>{{ Product?.weight }}</span> -->
                        <!-- <span class="mx-2">{{ Product?.unitName }}</span> -->
                      </div>

                      <div class="desc" v-if="Product?.arabicDescription">
                        <div
                          v-html="
                            $i18n.locale === 'ar'
                              ? Product?.arabicDescription
                              : Product?.englishDescription
                          "
                        ></div>
                      </div>
                      <div
                        v-if="
                          !Product?.arabicDescription &&
                          !Product?.weight &&
                          !Product?.unitName
                        "
                      >
                        <h5 class="fw-bold">
                          {{
                            $i18n.locale === "ar"
                              ? "لا يوجد وصف"
                              : "There is no description"
                          }}
                        </h5>
                      </div>
                    </v-window-item>
                    <v-window-item value="two" class="">
                      <div class="d-flex justify-content-between">
                        <div>
                          <h5 class="d-inline">
                            {{
                              $i18n.locale === "ar"
                                ? "أضف مراجعة"
                                : "Add Review"
                            }}
                          </h5>
                          <Rating
                            class="d-inline mx-4"
                            v-model="rate"
                            :stars="5"
                          />
                        </div>
                        <div class="d-inline fw-bold">
                          <h5>
                            <span>{{
                              $i18n.locale === "ar" ? "التقييم" : "Rate"
                            }}</span>
                            : 5/5
                          </h5>
                        </div>
                      </div>
                      <div>
                        <!-- <button class="btn btn-main mt-4" style="width: 150px">
                        <span>
                          {{ $i18n.locale === "ar" ? "إرسال" : "Send" }}
                        </span>
                      </button> -->
                      </div>
                    </v-window-item>
                    <v-window-item value="three" class="">
                      <h5>
                        {{
                          $i18n.locale === "ar"
                            ? "ملاحظات إضافية"
                            : "Additional notes"
                        }}
                      </h5>
                      <textarea
                        v-model="note"
                        class="textarea mt-3"
                        :placeholder="
                          $i18n.locale === 'ar' ? 'أخبرنا بها' : 'Tell Us'
                        "
                        rows="3"
                      ></textarea>
                    </v-window-item>
                  </v-window>
                </div>
              </div>

              <div class="add-to-cart mt-4" @click="AddToCart(Product.data)">
                <button class="btn">
                  <span>
                    {{ $i18n.locale === "ar" ? "أضف للسلة" : "Add To Cart" }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </v-window-item>
        <v-window-item
          v-for="option in Product?.productOptions"
          :value="option.id"
        >
          <div class="row">
            <div class="col-12 col-lg-6 mb-10">
              <!-- <ProductImagesCarousel
                v-if="option"
                :ProductImages="option?.productPhotos"
                :ProductMainImg="option?.image"
                :disscount="option?.productOffer?.discountRatio"
              ></ProductImagesCarousel> -->
            </div>

            <div class="info col-lg-6">
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
                {{ $i18n.locale === "ar" ? option?.title : option?.title }}
              </h2>

              <h2 class="price">
                <span
                  :class="option?.productOffer?.newPrice ? 'line-through' : ''"
                >
                  {{ option?.price }}
                  {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
                </span>

                <span v-if="option?.productOffer?.newPrice" class="mx-2">
                  {{ option?.productOffer?.newPrice }}
                  {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
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

              <div class="my-4">
                <v-tabs v-model="tab" bg-color="transparent">
                  <v-tab
                    class="tabs"
                    style="color: #bf9847; font-weight: bold"
                    value="one"
                    >{{ $i18n.locale == "en" ? "Description" : "الوصف" }}</v-tab
                  >
                  <v-tab
                    class="tabs"
                    style="color: #bf9847; font-weight: bold"
                    value="two"
                    >{{ $i18n.locale == "en" ? "Reviews" : "المراجعات" }}</v-tab
                  >

                  <v-tab
                    class="tabs"
                    style="color: #bf9847; font-weight: bold"
                    value="three"
                    >{{
                      $i18n.locale == "en" ? "Add Note" : "أضف ملاحظة"
                    }}</v-tab
                  >
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
                      <div
                        class="mb-2 fw-bold"
                        v-if="option?.weight || option?.unitName"
                      >
                        <!-- <span>{{ Product?.weight }}</span> -->
                        <!-- <span class="mx-2">{{ Product?.unitName }}</span> -->
                      </div>

                      <div class="desc" v-if="option?.arabicDescription">
                        <div
                          v-html="
                            $i18n.locale === 'ar'
                              ? option?.arabicDescription
                              : option?.englishDescription
                          "
                        ></div>
                      </div>
                      <div
                        v-if="
                          !option?.arabicDescription &&
                          !option?.weight &&
                          !option?.unitName
                        "
                      >
                        <h5 class="fw-bold">
                          {{
                            $i18n.locale === "ar"
                              ? "لا يوجد وصف"
                              : "There is no description"
                          }}
                        </h5>
                      </div>
                    </v-window-item>
                    <v-window-item value="two" class="">
                      <div class="d-flex justify-content-between">
                        <div>
                          <h5 class="d-inline">
                            {{
                              $i18n.locale === "ar"
                                ? "أضف مراجعة"
                                : "Add Review"
                            }}
                          </h5>
                          <Rating
                            class="d-inline mx-4"
                            v-model="rate"
                            :stars="5"
                          />
                        </div>
                        <div class="d-inline fw-bold">
                          <h5>
                            <span>{{
                              $i18n.locale === "ar" ? "التقييم" : "Rate"
                            }}</span>
                            : 5/5
                          </h5>
                        </div>
                      </div>
                      <div>
                        <!-- <button class="btn btn-main mt-4" style="width: 150px">
                        <span>
                          {{ $i18n.locale === "ar" ? "إرسال" : "Send" }}
                        </span>
                      </button> -->
                      </div>
                    </v-window-item>
                    <v-window-item value="three" class="">
                      <h5>
                        {{
                          $i18n.locale === "ar"
                            ? "ملاحظات إضافية"
                            : "Additional notes"
                        }}
                      </h5>
                      <textarea
                        v-model="note"
                        class="textarea mt-3"
                        :placeholder="
                          $i18n.locale === 'ar' ? 'أخبرنا بها' : 'Tell Us'
                        "
                        rows="3"
                      ></textarea>
                    </v-window-item>
                  </v-window>
                </div>
              </div>

              <div class="add-to-cart mt-4" @click="AddToCart(option)">
                <button class="btn">
                  <span>
                    {{ $i18n.locale === "ar" ? "أضف للسلة" : "Add To Cart" }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </div>

    <!-- related items -->

    <!-- <div class="container my-10 py-10">
      <h1 class="color fw-bold">
        {{
          $i18n.locale === "ar"
            ? "اكتشف المنتجات المشابهة"
            : "Discover similar products"
        }}
      </h1>
      <div v-if="pending3" class="text-center text-white loader">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else>
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
          <SwiperSlide
            v-for="product in RelatedProducts.data"
            :key="product.id"
          >
            <div class="product" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
              <ProductCard
                :product="product"
                :productId="product?.productId"
              ></ProductCard>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div> -->
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
const { data: Product, pending } = await useGetSiteApi().GetAll(
  `${api.ProductdetailsApi}/${route.params.id}`
);

// get product images
// const { data: ProductImages, pending: pending2 } = await useGetSiteApi().GetAll(
//   `${api.ProductImages}${route.params.id}`
// );

// get related products
// const { data: RelatedProducts, pending: pending3 } =
//   await useGetSiteApi().GetAll(`${api.GetRelatedItems}/${route.params.id}`);

let tabOptions = ref("one");
let note = ref("");
const tab = ref(null);
let quantity = ref(1);
let rate = ref(0);

const AddToCart = (item) => {
  item.note = note.value;
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

// if he is logged => is the product in fav or not ?
const GetProductByUserId = async () => {
  const {
    data: ProductFav,
    error: errorFav,
    pending: pendingFav,
    execute: executeFav,
  } = await useGetSiteApi().GetAll(
    `/api/v1/Products/GetProductByIdAndClientId/${route.params.id.toString()}/${
      useUserInfo().value.clientId
    }`
  );
  ProductForFavorite.value = ProductFav.value?.data;
};
isAuth.isAuthenticated ? GetProductByUserId() : "";

const AddToFavorite = async () => {
  const {
    data: addtofav,
    error,
    pending,
    execute,
  } = await $fetch(`${api.AddToFav}`, {
    baseURL: apiBase,
    method: "POST",
    body: {
      productId: route.params.id.toString(),
      clientId: useUserInfo().value.clientId,
    },
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  });
  $awn.success("Successfully added to favorites");
  // emit('ChangeIcon', productId)
  ChangeIcon();
};
const removeFromFavorite = async () => {
  if (isAuth.isAuthenticated) {
    const {
      data: removefromfav,
      error,
      pending,
      execute,
    } = await $fetch(
      `/api/v1/Products/RemoveProductFromFavorites/${
        useUserInfo().value.clientId
      }/${id}`,
      {
        baseURL: apiBase,
        method: "DELETE",
        body: {
          productId: id,
          clientId: useUserInfo().value.clientId,
        },
        headers: {
          Authorization: `Bearer ${useMainToken().value}`,
        },
      }
    );
    $awn.success("Successfully removed from favorites");
    ChangeIcon();
  } else {
    $awn.alert("Can't add to favorites, You must log in first");
  }
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
        -webkit-background-clip: text;
        font-weight: bold;
        background-color: $main;
        background-image: linear-gradient(45deg, $main, $second, $main);
        background-repeat: repeat;
        background-size: 100%;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }
    }

    .quantity {
      margin-top: 20px;
    }

    .add-to-cart {
      button {
        width: 100%;
        background: linear-gradient(45deg, $main, $second, $main);
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
  background: $main;
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
  padding: 40px 12px 10px 60px;
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
</style>
