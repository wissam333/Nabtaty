<template>
  <section class="order nav-margin">
    <div class="container">
      <div class="title">
        <h1 class="d-flex align-items-center justify-content-center">
          <img width="70" src="/photos/nabtaty8.png" alt="" />
          <span class="underline">
            {{ $i18n.locale === "ar" ? "عملية الطلب" : "Checkout" }}
          </span>
        </h1>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h4 class="my-3 text-center text-white text-sm-start">
            {{
              $i18n.locale === "ar" ? "معلومات المنتج" : "Product Information"
            }}
          </h4>
          <!-- {{ cart.items }} -->
          <OrderProductInfoTable
            v-if="cart && currency"
            :cart="cart"
            :chippengcost="chippengcost"
            :currency="currency"
          />

          <VForm
            id="orderForm"
            class="row order_form"
            :validation-schema="schema"
            :initial-values="initialValues"
            v-slot="{ meta: formMeta, values }"
            @submit="handleSubmit"
          >
            <div>
              <div v-if="hasError" class="error-messages mb-3">
                <div class="alert alert-danger text-center">
                  <ul class="list-unstyled mb-0">
                    <li v-for="(error, index) in errorMessage" :key="index">
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <OrderUserInfo
              @addchippengcost="addchippengcost"
              @changeprincedom="changeprincedom"
              @changeCity="changeCity"
              :allcities="allcities"
              :countries="countries"
              @changeCountry="changeCountry"
              :accountType="accountType"
            />

            <!-- Shipping & Insurance -->
            <!-- <OrderShippingInsurance v-if="productInfo && currency" :productInfo="productInfo" :currency="currency" @final-price="getEmitFinalPrice" :paymentMethods="paymentMethods" :bankInfo="bankInfo" @selected-payment="getEmitPayment" /> -->

            <div
              class="col-md-12 form-group mt-4 mb-10 d-flex justify-content-center justify-content-sm-start"
            >
              <button
                type="submit"
                value="Login"
                class="background btn px-10 py-2 text-black w-50 btn-block m-auto"
                :disabled="!formMeta.valid"
                :class="{ background: formMeta.valid }"
              >
                <!-- !formMeta.valid || isLoading -->
                <span class="text-white" v-if="!isLoading">
                  {{ $i18n.locale === "ar" ? "أطلب الآن" : "Order Now" }}
                </span>
                <span class="text-black" v-else>{{ $t("loading...") }}</span>
              </button>
            </div>
          </VForm>
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
  </section>
</template>

<script setup>
const { $awn } = useNuxtApp();
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { locale } = useI18n();
const route = useRoute();
const router = useRouter();
import { bool, object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
import { defineRule } from "vee-validate";

const { countries, allcities } = defineProps(["countries", "allcities"]);
// console.log(countries)

defineRule("at_least_one", (value, [otherField], { form }) => {
  return (
    !!value || !!form[otherField] || "At least one of these fields is required"
  );
});
defineRule("princedom_required", (value, [otherField], { form }) => {
  // Assuming princedomORMap() returns a boolean value
  const isPrincedomRequired = princedomORMap().value;
  // Validate based on the condition
  return isPrincedomRequired && !value ? "Princedom Name is required" : true;
});

// get related products
let related = ref();
const getProductRelatedItems = async () => {
  const { data: RelatedProducts } = await useFetch(
    `${api.GetPlantByCat}/${cart.value?.items[0]?.item?.item.category_id}`,
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

// init
let user = JSON.parse(localStorage.getItem("userInfo"));
const accountType = useAccountType();
const currency = useCurrency();
const cart = useCart();
const chippengcost = ref(0);
const selectedcity = ref(3);
const selectedPrincedom = ref(null);
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");

const initialValues = {
  email: user?.email,
  fullNameEn: user?.firstName + " " + user?.lastName,
};

configure({
  validateOnBlur: true,
  validateOnInput: true, // validate on input event
  validateOnChange: true,
  validateOnModelUpdate: true,
  generateMessage: (ctx) => {
    const messages = {
      required: `${ctx.field} is required`,
      at_least_one: "At least one of these fields is required",
    };
    return messages[ctx.rule.name]
      ? messages[ctx.rule.name]
      : `The ${ctx.field} field is invalid`;
  },
});

const schema = object({
  cityName: string().required(),
});

const changeCity = (payload) => {
  allcities.forEach((city) => {
    if (city.id == payload) {
      selectedcity.value = city.id;
      useDelviryCost().value = city.price;
    }
  });
};

// func
let selectCountry = ref();
const changeCountry = (payload) => {
  countries.forEach((city) => {
    if (city.id == payload) {
      selectCountry.value = city;
    }
  });
};

const handleSubmit = async (values, actions) => {
  isLoading.value = true;

  const finalOrderData = new Object();
  finalOrderData.location_id = values.cityName;

  finalOrderData.items = [];
  // return
  cart.value.items.forEach((item) => {
    let data = {
      plantId: item.product_id,
      quantity: item.qty,
      size: item.item.selectedSize,
    };
    finalOrderData.items.push(data);
  });
  // console.log(finalOrderData)
  // return
  const { data: finalOrder } = await useFetch(api.createOrder, {
    baseURL: apiBase,
    credentials: "include",
    method: "POST",
    body: finalOrderData,
  });

  if (finalOrder.value && finalOrder.value.cartId) {
    locale.value == "ar"
      ? $awn.success("تم الطلب بنجاح")
      : $awn.success("The request was completed successfully");

    isLoading.value = false;
    resetCart();
    return navigateTo("/");
  } else {
    isLoading.value = false;
  }
};

const resetCart = () => {
  localStorage.removeItem("cart");
  useCart().value.items = [];
  useCart().value.totalPrice = 0;
  useCart().value.totalQty = 0;
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.order {
  margin-bottom: 100px;
}
.title {
  font-weight: bold;
  padding: 40px 0px;
  span {
    -webkit-background-clip: text;
    font-weight: bold;
    background-color: #8cc63e;
    background-image: linear-gradient(to right, #191d23, #8cc63e);
    background-repeat: repeat;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
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
