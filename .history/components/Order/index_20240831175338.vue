<template>
  <section class="order nav-margin">
    <div class="container">
      <div class="text-center">
        <h1 class="fw-bold">
          <span> {{ $i18n.locale === "ar" ? "عملية الطلب" : "Checkout" }}</span>
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
              :accountType="accountType"
            />

            <!-- Shipping & Insurance -->
            <!-- <OrderShippingInsurance v-if="productInfo && currency" :productInfo="productInfo" :currency="currency" @final-price="getEmitFinalPrice" :paymentMethods="paymentMethods" :bankInfo="bankInfo" @selected-payment="getEmitPayment" /> -->
            <!--.map-->
            <div class="container my-5" v-if="!princedomORMap().value">
              <v-text-field
                name="lat"
                id="lat"
                class="text-black d-none"
                type="number"
                v-model="marker.latitude"
              ></v-text-field>
              <v-text-field
                name="lng"
                id="lng"
                class="text-black d-none"
                type="number"
                v-model="marker.longitude"
              ></v-text-field>
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
            </div>

            <div class="col-lg-6 mb-5">
              <div v-if="princedomORMap().value">
                <p class="d-inline">
                  {{
                    $i18n.locale === "ar"
                      ? " أو تستطيع تحديد مكان التوصيل على "
                      : "Or you can specify the delivery location on the "
                  }}
                </p>
                <span
                  @click="princedomORMap().value = false"
                  style="
                    color: #00c2ec;
                    text-decoration: underline;
                    cursor: pointer;
                  "
                  >{{ $i18n.locale === "ar" ? "الخريطة" : "Map" }}</span
                >
              </div>
              <div v-else>
                <p class="d-inline">
                  {{
                    $i18n.locale === "ar"
                      ? " أو تستطيع تحديد مكان التوصيل عن طريق اختيار "
                      : "Or you can specify the delivery location by selecting "
                  }}
                </p>
                <span
                  @click="princedomORMap().value = true"
                  style="
                    color: #00c2ec;
                    text-decoration: underline;
                    cursor: pointer;
                  "
                  >{{
                    $i18n.locale === "ar"
                      ? "المدينة و المكان "
                      : "City and place"
                  }}</span
                >
              </div>
            </div>
            <div
              class="col-md-12 form-group mt-4 d-flex justify-content-center justify-content-sm-start"
            >
              <button
                type="submit"
                value="Login"
                class="background btn px-10 py-2 text-black w-50 btn-block m-auto"
                :class="{ background: formMeta.valid }"
                :disabled="
                  !formMeta.valid ||
                  isLoading ||
                  (!values.princedomName && princedomORMap().value)
                "
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

//map
const map = ref(null);
let marker = ref({
  latitude: 32.3421269,
  longitude: 36.2045214,
});

const zoom = ref(10);
let clientGeoLocation = ref({
  latitude: 32.73660607970235,
  longitude: 13.684930801391602,
});

if (process.client) {
  const suc = (res) => {
    console.log(res);
    //map
    clientGeoLocation.value.latitude = res.coords.latitude;
    clientGeoLocation.value.longitude = res.coords.longitude;
    //marker
    marker.value.latitude = res.coords.latitude;
    marker.value.longitude = res.coords.longitude;
  };

  const er = async () => {
    console.log(
      "Unable to get client geo location from navigator, using IP geolocation."
    );
    try {
      const response = await useFetch("https://ipapi.co/json/");
      const data = response.data;
      clientGeoLocation.value.latitude = data.coords.latitude;
      clientGeoLocation.value.longitude = data.coords.longitude;
      marker.value = {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      };
    } catch (error) {
      console.error("IP Geolocation failed", error);
    }
  };

  navigator.geolocation.getCurrentPosition(suc, er);
}

const updatLatLng = async (res) => {
  marker.value = {
    latitude: res.lat,
    longitude: res.lng,
  };
  const response = await useFetch(
    `${apiBase}${
      api.FinalOrdinaryOrders
    }/GetShippingCost?ClientGeoLocation=${`LAT:${marker.value.latitude},LNG:${marker.value.longitude}`}&RestaurantId=10`,
    {
      baseURL: apiBase,
      method: "GET",
      headers: {
        Authorization: `Bearer ${useMainToken().value}`,
      },
    }
  );
  console.log(response.data.value.data.shippingCost);
  shippingCostMap().value = response.data.value.data.shippingCost;
};

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
const selectedcity = ref(null);
const selectedPrincedom = ref(null);
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");

const initialValues = {
  email: user.email,
  fullNameEn: user.fullNameAr,
  addressEn: "",
  phone: user.phone,
  princedomName: "",
  Coupon: "",
  cityName: "",
  payTypeId: 1,
  currencyId: 1,
  restaurantId: 1,
  isHandDelivery: false,
  driverId: 0,
  couponCode: "",
  clientType: "Person",
  clientPoints: 0,
};
// console.log('user', user);
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
});

const addchippengcost = (payload) => {
  allcities.forEach((city) => {
    if (city.id == payload) {
      chippengcost.value = city.shippingCost;
    }
  });
};

const changeprincedom = (payload) => {
  allcities.forEach((city) => {
    if (city.id == payload) {
      selectedPrincedom.value = city;
    }
  });
};

const changeCity = (payload) => {
  allcities.forEach((city) => {
    if (city.id == payload) {
      selectedcity.value = city;
    }
  });
};

const handleSubmit = async (values, actions) => {
  // console.log(selectedcity.value)
  // return
  isLoading.value = true;

  const finalOrderData = new Object();
  finalOrderData.clientId = useUserInfo().value.clientId;
  finalOrderData.clientType = useAccountType().value;
  finalOrderData.paymentStatus = "Pending";
  finalOrderData.address = values.addressEn;
  finalOrderData.payTypeId = values.payTypeId;
  finalOrderData.currencyId = values.currencyId;

  selectedcity.value
    ? (finalOrderData.princedomName = selectedcity.value.nameAr)
    : "";
  selectedcity.value
    ? (finalOrderData.princedomId = selectedcity.value.id)
    : "";
  if (princedomORMap().value) {
    selectedPrincedom.value
      ? (finalOrderData.princedomId = selectedcity.value.id)
      : "";

    selectedcity.value
      ? (finalOrderData.sectionId = selectedPrincedom.value.id)
      : "";
  } else {
    finalOrderData.ClientGeoLocation = `LAT:${marker.value.latitude},LNG:${marker.value.longitude}`;
  }
  finalOrderData.restaurantId = useCart().value.items[0].item.productCompany.id;
  finalOrderData.ordinaryOrders = [];
  // console.log(finalOrderData)
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
    $awn.success("تم الطلب بنجاح");
    isLoading.value = false;
    resetCart();
    return navigateTo("/my-account");
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
h2,
h4 {
  color: $primary;
}
.order {
  margin-bottom: 100px;
  h1 {
    text-align: center;
    padding: 40px;
    @media (max-width: 768px) {
      padding: 12px;
    }
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
