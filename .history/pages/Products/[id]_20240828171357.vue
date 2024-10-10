<template>
  <div class="product nav-margin" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <div v-if="pending" class="loading">
      <ElementsSpinner></ElementsSpinner>
    </div>
    <div v-else class="container">
      <h5 class="links py-10">
        <span class="pointer" @click="router.go(-1)">
          {{ $i18n.locale === "ar" ? "منتجاتنا" : "Products" }}
        </span>
        /
        <span class="pointer" @click="router.go(-1)">
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
        <div class="preview col-lg-6">
          <img :src="apiBase + Product?.data?.productImageUrl" alt="" />
        </div>
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
            <span>
              {{ Product?.data?.price }}
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

          <div class="add-to-cart mt-4">
            <button class="btn">
              <span>
                {{ $i18n.locale === "ar" ? "أضف للسلة" : "Add To Cart" }}
              </span>
            </button>
          </div>

          <div class="my-4">
            <v-tabs v-model="tab" bg-color="transparent">
              <v-tab
                class=""
                style="color: #146890; font-weight: bold"
                value="one"
                >{{ $i18n.locale == "en" ? "Description" : "الوصف" }}</v-tab
              >
              <v-tab
                class=""
                style="color: #146890; font-weight: bold"
                value="two"
                >{{ $i18n.locale == "en" ? "Reviews" : "المراجعات" }}</v-tab
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
                <v-window-item value="two">
                  <p>222222</p>
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

const { data: Product, pending } = await useGetSiteApi().GetAll(
  `${api.ProductdetailsApi}/${route.params.id}`
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

const tab = ref(null);
let quantity = ref(1);
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
      margin-top: 20px;
    }
  }
}
.ar {
  .heart {
    right: auto !important;
    left: 12px;
  }
}
.loading {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
