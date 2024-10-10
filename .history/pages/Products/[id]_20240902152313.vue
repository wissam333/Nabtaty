<template>
  <div
    class="product nav-margin pt-5"
    :class="$i18n.locale === 'ar' ? 'ar' : ''"
  >
    <div v-if="pending && pending2" class="loading">
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
          @click="
            router.push(`/FoodByCategory/${Product?.data?.productCategory?.id}`)
          "
        >
          {{
            $i18n.locale === "ar"
              ? Product?.data?.productCategory?.nameAr
              : Product?.data?.productCategory?.nameEn
          }}
        </span>
        /
        {{
          $i18n.locale === "ar" ? Product?.data?.nameAr : Product?.data?.nameEn
        }}
      </h5>
      <div class="row">
        <div class="col-12 col-md-6 mb-10">
          <ProductImagesCarousel
            v-if="ProductImages?.data && Product?.data"
            :ProductImages="ProductImages?.data"
            :ProductMainImg="Product?.data"
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
              v-if="Product?.data?.isFavorite"
              :icon="['fas', 'heart']"
            />
            <font-awesome v-else :icon="['far', 'heart']" />
          </div> -->

          <h2 class="title">
            {{
              $i18n.locale === "ar"
                ? Product?.data?.nameAr
                : Product?.data?.nameEn
            }}
          </h2>

          <h2 class="price">
            <span
              :class="
                Product?.data?.productOffer?.newPrice ? 'line-through' : ''
              "
            >
              {{ Product?.data?.price }}
              {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
            </span>

            <span v-if="Product?.data?.productOffer?.newPrice" class="mx-2">
              {{ Product?.data?.productOffer?.newPrice }}
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

          <div class="add-to-cart mt-4" @click="AddToCart(Product.data)">
            <button class="btn">
              <span>
                {{ $i18n.locale === "ar" ? "أضف للسلة" : "Add To Cart" }}
              </span>
            </button>
          </div>

          <div class="my-4">
            <v-tabs v-model="tab" bg-color="transparent">
              <v-tab
                class="tabs"
                style="color: #146890; font-weight: bold"
                value="one"
                >{{ $i18n.locale == "en" ? "Description" : "الوصف" }}</v-tab
              >
              <v-tab
                class="tabs"
                style="color: #146890; font-weight: bold"
                value="two"
                >{{ $i18n.locale == "en" ? "Reviews" : "المراجعات" }}</v-tab
              >

              <v-tab
                class="tabs"
                style="color: #146890; font-weight: bold"
                value="three"
                >{{ $i18n.locale == "en" ? "Add Note" : "أضف ملاحظة" }}</v-tab
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
                    v-if="Product?.data?.weight || Product?.data?.unitName"
                  >
                    <span>{{ Product?.data?.weight }}</span>
                    <span class="mx-2">{{ Product?.data?.unitName }}</span>
                  </div>
                  <div class="desc" v-if="Product?.data?.descriptionAr">
                    <div
                      v-html="
                        $i18n.locale === 'ar'
                          ? Product?.data?.descriptionAr
                          : Product?.data?.descriptionEn
                      "
                    ></div>
                  </div>
                </v-window-item>
                <v-window-item value="two" class="">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5 class="d-inline">
                        {{
                          $i18n.locale === "ar" ? "أضف مراجعة" : "Add Review"
                        }}
                      </h5>
                      <Rating class="d-inline mx-4" v-model="rate" :stars="5" />
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
                    <button class="btn btn-main mt-4" style="width: 150px">
                      <span>
                        {{ $i18n.locale === "ar" ? "إرسال" : "Send" }}
                      </span>
                    </button>
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
        </div>
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

const { data: Product, pending } = await useFetch(
  `${api.ProductdetailsApi}/${route.params.id}`,
  {
    baseURL: apiBase,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  }
);

const { data: ProductImages, pending: pending2 } = await useFetch(
  `${api.ProductImages}${route.params.id}`,
  {
    baseURL: apiBase,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  }
);

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

// favourite
const ProductForFavorite = ref(null);
const isAuth = useAuth().value;

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
  } = await $fetch(`/api/v1/Products/AddProductToClientFavorites`, {
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
.product {
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

    .quantity {
      margin-top: 20px;
    }

    .add-to-cart {
      button {
        width: 100%;
        background: linear-gradient(45deg, #146890, #45b2e9, #146890);
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
  .tabs {
    padding-left: 1rem !important;
    padding-right: 0 !important;
    justify-content: flex-start !important;
  }
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
</style>
