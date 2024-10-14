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
            :validation-schema="
              accountType == 'Person' ? schema : companySchema
            "
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

            <div style="height: 50vh; width: 100%; margin: auto">
              <ClientOnly>
                <LMap
                  ref="map"
                  :zoom="zoom"
                  :center="[
                    clientGeoLocation.latitude,
                    clientGeoLocation.longitude,
                  ]"
                  :use-global-leaflet="false"
                >
                  <LTileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    layer-type="base"
                    name="OpenStreetMap"
                  />
                  <LMarker
                    @update:latLng="updatLatLng"
                    :lat-lng="[marker.latitude, marker.longitude]"
                    draggable
                  />
                </LMap>
              </ClientOnly>
            </div>

            <div
              class="col-md-12 form-group mt-4 d-flex justify-content-center justify-content-sm-start"
            >
              <button
                type="submit"
                value="Login"
                class="background btn px-10 py-2 text-black w-50 btn-block m-auto"
                :class="{ background: formMeta.valid }"
                :disabled="!formMeta.valid || isLoading"
              >
                <span class="text-white" v-if="!isLoading">
                  {{ $i18n.locale === "ar" ? "أطلب الآن" : "Order Now" }}
                </span>
                <span class="text-black" v-else>{{ $t("loading...") }}</span>
              </button>
            </div>
          </VForm>
        </div>
      </div>
      <!--.row-->
    </div>
  </section>
</template>

<script setup>
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

// init
const { $awn } = useNuxtApp();
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const user = useUserInfo().value;
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
  email: localStorage.getItem("userEmail"),
  fullNameEn: localStorage.getItem("userName"),
  addressEn: "",
  phone: user?.phone,
  princedomName: "",
  Coupon: "",
  cityName: 3,
  payTypeId: 1,
  currencyId: 1,
  restaurantId: 1,
  isHandDelivery: false,
  driverId: 0,
  couponCode: "",
  clientType: "Person",
  clientPoints: 0,
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
  phone: string().required().label("Phone Number"),
  fullNameEn: string().required().min(3).label("Your Name"),
  payTypeId: string().required(),
  currencyId: string().required(),
});

const changeCity = (payload) => {
  allcities.forEach((city) => {
    if (city.id == payload) {
      selectedcity.value = city.id;
    }
  });
};

let selectCountry = ref();
const changeCountry = (payload) => {
  countries.forEach((city) => {
    if (city.id == payload) {
      selectCountry.value = city;
    }
  });
};

const { locale } = useI18n();
const handleSubmit = async (values, actions) => {
  isLoading.value = true;

  const finalOrderData = new Object();
  finalOrderData.clientId = useUserInfo().value.clientId;
  finalOrderData.clientType = useAccountType().value;
  finalOrderData.paymentStatus = "Pending";
  finalOrderData.address = values.addressEn;
  finalOrderData.payTypeId = values.payTypeId;
  finalOrderData.currencyId = values.currencyId;
  finalOrderData.restaurantId = values.restaurantId;
  finalOrderData.princedomId = selectedcity.value;
  finalOrderData.sectionId = 0;

  finalOrderData.ordinaryOrders = [];
  // return
  cart.value.items.forEach((item) => {
    let data = {
      productId: item.product_id,
      Quantity: item.qty,
      notes: item.item.note,
    };
    finalOrderData.ordinaryOrders.push(data);
  });
  // console.log(finalOrderData)
  // return
  const { data: finalOrder } = await useFetch(api.FinalOrdinaryOrders, {
    baseURL: apiBase,
    method: "POST",
    body: finalOrderData,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  });

  if (finalOrder.value && finalOrder.value.succeeded) {
    locale.value == "ar"
      ? $awn.success("تم الطلب بنجاح")
      : $awn.success("The request was completed successfully");

    isLoading.value = false;
    resetCart();
    return navigateTo("/Account");
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
</style>
