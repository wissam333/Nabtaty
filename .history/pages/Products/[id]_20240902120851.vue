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
        <!-- <div class="preview col-lg-6" style="position: relative">
          <img
            v-if="Product?.data?.productImageUrl"
            :src="apiBase + Product?.data?.productImageUrl"
            alt=""
          />
          <img v-else src="/photos/5-1.png" alt="" />
          <div
            class="disscount"
            v-if="Product?.data?.productOffer?.discountRatio"
          >
            {{ Product?.data?.productOffer?.discountRatio + "%" }}
          </div>
        </div> -->

        <div class="col-12 col-md-6 mb-10">
          <ProductImages :ProductImages="ProductImages" :Product="Product"></ProductImages>
        </div>
        <!-- end -->

        <div class="info col-lg-6">
          <div class="heart" @click="AddToFav()">
            <font-awesome
              v-if="Product?.data?.isFavorite"
              :icon="['fas', 'heart']"
            />
            <font-awesome v-else :icon="['far', 'heart']" />
          </div>

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

const AddToFav = () => {
  $awn.alert(
    locale.value === "ar"
      ? "لا يمكن الإضافة إلى المفضلة، يجب عليك تسجيل الدخول أولاً"
      : "Can't add to favorites, You must log in first",
    {
      durations: { global: 5000 },
    }
  );
};

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

.preview-section {
  width: 100%;
  // max-height: 30rem;
  aspect-ratio: 1.25/1;
  .nav-imgs {
    padding: 0 5px;
    // margin: 0;
    width: 25%;
    // max-width: 7rem;
    // height: 100%;
    // max-height: 40rem;
    overflow-y: scroll;
    // @include vertical-scrollbar(8px, black, #b79a00, #d1b423);
    // &.rtl{
    //   margin-left: 1rem;
    // }
    .nav-frame {
      width: 100%;
      // height: 100%;
      flex-direction: column;
      // max-height: 20rem;
      // height: 4rem;
      .nav-imgs-item {
        margin-bottom: 4px;
        width: 100%;
        // height: auto;
        // height: 15rem;
        aspect-ratio: 1/1;
        border: solid 2px rgba(0, 0, 0, 0);
        cursor: pointer;
        &:last-child {
          margin: 0;
        }
        &:hover {
          border: solid 2px $main;
        }
        &.active {
          border: solid 2px $main;
        }
        img {
          background-color: white;
        }
      }
    }
  }
  .view-img {
    width: 100%;
    aspect-ratio: 1/1;
    background-color: white;
    .flip-icon {
      width: 2rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      cursor: pointer;
      .icon {
        transition: all 100ms ease-in;
        &:hover {
          color: $main;
          transform: scale(1.2);
        }
      }
      // background-color: #8a8a8a44;
    }
  }
}
</style>
