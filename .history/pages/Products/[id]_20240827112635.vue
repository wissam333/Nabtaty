<template>
  <div class="product nav-margin" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <div class="container">
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
            <h5>{{ $i18n.locale === "ar" ? "الكمية" : "Quantity" }}</h5>
            <div class="flex-auto">
              <label for="minmax-buttons" class="font-bold block mb-2">
                Min-Max Boundaries
              </label>
              <InputNumber
                v-model="value2"
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
  }
  .info {
    position: relative;
    .heart {
      right: 0;
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
  }
}
.ar {
  .heart {
    right: auto !important;
    left: 0;
  }
}
</style>
