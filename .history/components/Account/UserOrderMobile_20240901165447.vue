<template>
  <div class="" id="">
    <div class="">
      <div class="row justify-center" v-if="order">
        <div class="col-10 mb-4" v-for="(order, index) in order" :key="index">
          <div @click="detail(order)" class="pointer box">
            <div class="d-flex justify-space-between">
              <p class="small">
                {{ $i18n.locale == "ar" ? "رقم الطلب" : "Order Number" }}
              </p>
              <p class="small">{{ order.code ?? "----" }}</p>
            </div>
            <div class="d-flex justify-space-between">
              <p class="small">
                {{ $i18n.locale == "ar" ? "حالة الطلب" : "Order Status" }}
              </p>
              <p class="small">{{ $t(order.status) ?? "----" }}</p>
            </div>
            <div class="d-flex justify-space-between">
              <p class="small">
                {{ $i18n.locale == "ar" ? "تاريخ الطلب" : "Created Date" }}
              </p>
              <p class="small">{{ order.createdOn.slice(0, 10) ?? "----" }}</p>
            </div>
            <div class="d-flex justify-space-between">
              <p class="small">
                {{ $i18n.locale == "ar" ? "سعر الطلبات" : "Order Price" }}
              </p>
              <p class="small">
                {{ order.totalPrice ?? "----" }}
                {{
                  $i18n.locale === "ar"
                    ? order.currency.nameAr
                    : order.currency.symbol
                }}
              </p>
            </div>

            <div class="d-flex justify-space-between">
              <p class="small">
                {{ $i18n.locale == "ar" ? "الخصم" : "Discount" }}
              </p>
              <p class="small">
                {{ order.couponDiscount }}
                {{
                  $i18n.locale === "ar"
                    ? order.currency.nameAr
                    : order.currency.symbol
                }}
              </p>
            </div>

            <div class="d-flex justify-space-between">
              <p class="small">
                {{ $i18n.locale == "ar" ? "السعر الإجمالي" : "Total Price" }}
              </p>
              <p class="small">
                {{
                  order.totalPriceWithShippingCost - order.couponDiscount ??
                  "----"
                }}
                {{
                  $i18n.locale === "ar"
                    ? order.currency.nameAr
                    : order.currency.symbol
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="detailmobile" class="visually-hidden">
    <div v-if="loading">
      <ElementsSpinner />
    </div>
    <div v-else>
      <button class="btn background text-white mb-5" @click="back">
        {{ $t("Back") }}
      </button>
      <div class="table-content table-responsive" v-if="orderdetail">
        <div class="row justify-center">
          <div
            class="col-10 mb-5"
            v-for="(item, index) in orderdetail"
            :key="index"
          >
            <div class="box">
              <div class="d-flex justify-space-between">
                <p class="small">
                  {{ $i18n.locale == "ar" ? "اسم الطلب" : "Order Name" }}
                </p>
                <p class="small">
                  {{ useTranslate(item.product, "name") ?? "----" }}
                </p>
              </div>
              <div class="d-flex justify-space-between">
                <p class="small">
                  {{ $i18n.locale == "ar" ? "الملاحظات" : "Notes" }}
                </p>
                <p class="small">{{ item.notes ?? "----" }}</p>
              </div>
              <div class="d-flex justify-space-between">
                <p class="small">
                  {{ $i18n.locale == "ar" ? "الكمية" : "Quantity" }}
                </p>
                <p class="small">{{ item.quantity ?? "----" }}</p>
              </div>
              <div class="d-flex justify-space-between">
                <p class="small">
                  {{ $i18n.locale == "ar" ? "السعر الإفرادي" : "Unit Pricr" }}
                </p>
                <p class="small">
                  {{ item.totalPrice / item.quantity ?? "----" }}
                </p>
              </div>
              <div class="d-flex justify-space-between">
                <p class="small">
                  {{ $i18n.locale == "ar" ? "السعر الكلي" : "Total Price" }}
                </p>
                <p class="small">{{ item.totalPrice ?? "----" }}</p>
              </div>
            </div>

            <div class="container" style="margin-top: 1rem; padding: 30px">
              <h3>{{ $t("OrderTracking") }}</h3>
              <div class="widget-timeline-icon">
                <ul class="timeline">
                  <li
                    :class="
                      finalOrdinaryOrderTrackings?.shippingStatus ===
                        'Ordered' ||
                      finalOrdinaryOrderTrackings?.shippingStatus ===
                        'Processing' ||
                      finalOrdinaryOrderTrackings?.shippingStatus === 'Deliverd'
                        ? 'pay-done'
                        : 'pay-not-done'
                    "
                  >
                    <div
                      :class="
                        finalOrdinaryOrderTrackings?.shippingStatus ===
                          'Ordered' ||
                        finalOrdinaryOrderTrackings?.shippingStatus ===
                          'Processing' ||
                        finalOrdinaryOrderTrackings?.shippingStatus ===
                          'Deliverd'
                          ? 'bg-primary'
                          : 'bg-dark'
                      "
                      class="icon"
                    ></div>
                    <a class="timeline-panel text-muted" href="#">
                      <h4 class="mb-2 mt-0">{{ $t("Ordered") }}</h4>
                      <!-- <p class="fs-14 mb-0 ">{{ order.order_date }}</p> -->
                    </a>
                  </li>
                  <li
                    :class="
                      finalOrdinaryOrderTrackings?.shippingStatus ===
                        'Processing' ||
                      finalOrdinaryOrderTrackings?.shippingStatus === 'Deliverd'
                        ? 'pay-done'
                        : 'pay-not-done'
                    "
                  >
                    <div
                      :class="
                        finalOrdinaryOrderTrackings?.shippingStatus ===
                          'Processing' ||
                        finalOrdinaryOrderTrackings?.shippingStatus ===
                          'Deliverd'
                          ? 'bg-primary'
                          : 'bg-dark'
                      "
                      class="icon"
                    ></div>
                    <a class="timeline-panel text-muted" href="#">
                      <h4 class="mb-2 mt-0">{{ $t("Processing") }}</h4>
                      <!-- <p class="fs-14 mb-0 ">{{ order.order_date }}</p> -->
                    </a>
                  </li>

                  <li
                    :class="
                      finalOrdinaryOrderTrackings?.shippingStatus === 'Deliverd'
                        ? 'pay-done'
                        : 'pay-not-done'
                    "
                  >
                    <div
                      class="icon"
                      :class="
                        finalOrdinaryOrderTrackings?.shippingStatus ===
                        'Deliverd'
                          ? 'bg-primary'
                          : 'bg-dark'
                      "
                    ></div>
                    <a class="timeline-panel text-muted" href="#">
                      <h4 class="mb-2 mt-0">{{ $t("Deliverd") }}</h4>
                      <!-- <p class="fs-14 mb-0 ">{{ order.order_date }}</p> -->
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const { order } = defineProps(["order"]);

const {
  public: { api, apiBase },
} = useRuntimeConfig();

const loading = ref(false);
const orderdetail = ref(null);

const finalOrdinaryOrderTrackings = ref(null);

const detail = async (item) => {
  document.getElementById("tabelmobile").classList.add("visually-hidden");
  document.getElementById("detailmobile").classList.remove("visually-hidden");
  loading.value = true;
  const { data } = await useGetSiteApi().GetAll(
    `${api.FinalOrdinaryOrders}/${item.id}`
  );
  // console.log(data.value)
  orderdetail.value = data.value.data.ordinaryOrders;
  finalOrdinaryOrderTrackings.value =
    data.value.data.finalOrdinaryOrderTrackings[0];
  loading.value = false;
};
const back = () => {
  document.getElementById("tabelmobile").classList.remove("visually-hidden");
  document.getElementById("detailmobile").classList.add("visually-hidden");
  orderdetail.value = null;
};

const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);

const getCityNameById = (id) => {
  const princedom = allcities.value.data.find(
    (princedom) => princedom.id === id
  );
  const princedomName = princedom
    ? locale.value === "ar"
      ? princedom.nameAr
      : princedom.nameEn
    : null;

  const city = allcities.value.data.find(
    (city) => princedom?.parentPrincedomId === city.id
  );

  const cityName = city
    ? locale.value === "ar"
      ? city.nameAr
      : city.nameEn
    : null;

  return (
    (cityName ? cityName : "----") +
    " - " +
    (princedomName ? princedomName : "----")
  );
};

const extractLatAndLng = (clientGeoLocation) => {
  const parts = clientGeoLocation.split(",");
  let lat = null;
  let lng = null;

  parts.forEach((part) => {
    if (part.includes("LAT")) {
      lat = parseFloat(part.split(":")[1]);
    } else if (part.includes("LNG")) {
      lng = parseFloat(part.split(":")[1]);
    }
  });

  return { lat, lng };
};

const getCityNameFromCoords = async (clientGeoLocation) => {
  const { lat, lng } = extractLatAndLng(clientGeoLocation);

  try {
    const response = await useFetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDuuMp_q2HijskSPUzTcB3_wOiSubL1LV0&language=${locale.value}&region=ar&location_type=APPROXIMATE`,
      { method: "get" }
    );
    if (response.data.value.results && response.data.value.results.length > 0) {
      const addressComponents =
        response.data.value.results[0].address_components;
      let detailedAddress = "";

      // Construct the detailed address by excluding the country component, starting from the last
      for (let i = 0; i <= addressComponents.length - 1; i++) {
        const component = addressComponents[i];
        if (!component.types.includes("country")) {
          detailedAddress = `${component.long_name} - ${detailedAddress}`;
        }
      }

      // Remove the last hyphen and space if present
      if (detailedAddress.endsWith(" - ")) {
        detailedAddress = detailedAddress.slice(0, -3);
      }

      return detailedAddress;
    }
  } catch (error) {
    console.error("Error fetching city name:", error);
    return "Unknown City";
  }
};

const resolveCityNames = async (orders) => {
  for (let order of orders) {
    if (!order.princedomId && order.clientGeoLocation) {
      order.cityName = await getCityNameFromCoords(order.clientGeoLocation);
    }
  }
};

// Resolve city names for orders with geo coordinates
await resolveCityNames(order);
</script>

<style lang="scss" scoped>
#tabelmobile {
  display: none;
}

.box {
  border: 1px solid $main;
  padding: 0.9rem 1rem;
}

@media screen and (max-width: 992px) {
  #tabelmobile {
    display: block !important;
  }
}

table.table {
  thead th,
  tbody td {
    height: 60px;
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
  }

  thead th {
    color: #fff;
    background-color: $main;
    border: 1px solid #fff;
  }

  tbody tr:nth-child(even) {
    color: #000;
    background-color: #fff;
    border: 1px solid #b6b5b6;
    // cursor: pointer;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    color: #000;
    background-color: white;
    border: 1px solid #b6b5b6;
    // cursor: pointer;
    text-align: center;
  }

  tbody td {
    color: #000;
    // background-color: #b0afb03b;
    border: 1px solid #b6b5b6;
    // cursor: pointer;
  }

  a {
    color: $main;
  }
}

button.btn:focus:not(:focus-visible) {
  box-shadow: unset;
}

.table-responsive {
  .container {
    margin-top: 1rem;
    border: 1px solid $main;
    h3 {
      color: $main;
    }
    h4 {
      font-size: 10px;
      text-wrap: nowrap;
      @media (max-width: 375px) {
        transform: rotate(-30deg);
      }
    }
  }

  .timeline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 20px 0;
    padding: 0;
    list-style-type: none;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    width: 100%;
    height: 4px;
    background: #d3d3d3;
    z-index: 0;
    transform: translateY(-50%);
  }

  .timeline li {
    position: relative;
    z-index: 1;
    text-align: center;
    flex: 1;
  }

  .timeline .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #d3d3d3;
    margin: 0 auto 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .timeline .bg-primary {
    background: $main;
  }

  .timeline .bg-dark {
    background: #343a40;
  }

  .timeline .timeline-panel {
    text-decoration: none;
    color: inherit;
  }

  .timeline li.pay-done::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 0;
    width: 100%;
    height: 4px;
    background: $main;
    z-index: 1;
    transform: translateY(-50%);
  }

  .timeline li:first-child.pay-done::after {
    right: 0;
  }

  .timeline li.pay-done .icon {
    background: $main;
  }
}
</style>
