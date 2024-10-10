<template>
  <div class="" id="table">
    <div class="table-content table-responsive" v-if="order?.length">
      <table class="table" ref="DownloadComp">
        <thead>
          <tr>
            <th>{{ $i18n.locale == "ar" ? "تاريخ الطلب" : "Created Date" }}</th>
            <th>{{ $i18n.locale == "ar" ? "رقم الطلب" : "Order Number" }}</th>
            <th>{{ $i18n.locale == "ar" ? "حالة الطلب" : "Order Status" }}</th>

            <th>{{ $i18n.locale == "ar" ? "المدينة" : "City" }}</th>

            <th>{{ $i18n.locale == "ar" ? "سعر الطلبات" : "Order Price" }}</th>
            <th>{{ $i18n.locale == "ar" ? "الخصم" : "Discount" }}</th>
            <th>
              {{ $i18n.locale == "ar" ? "السعر الإجمالي" : "Total Price" }}
            </th>
            <th>
              {{ $i18n.locale == "ar" ? "طريقة الدفع" : "Payment Method" }}
            </th>
            <th>{{ $i18n.locale == "ar" ? "التفاصيل" : "Details" }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in order"
            :key="index"
            @click="detail(order)"
            class="pointer"
          >
            <td>{{ order.createdOn.slice(0, 10) ?? "----" }}</td>
            <td>{{ order.code ?? "----" }}</td>
            <td>{{ $t(order.status) ?? "----" }}</td>

            <td v-if="allcities">{{ getCityName(order.princedomId) }}</td>
            <td>
              {{ order.totalPrice ?? "----" }}
              {{
                $i18n.locale === "ar"
                  ? order?.currency?.nameAr
                  : order?.currency?.symbol
              }}
            </td>
            <td>
              {{ order.couponDiscount }}
              {{
                $i18n.locale === "ar"
                  ? order?.currency?.nameAr
                  : order?.currency?.symbol
              }}
            </td>

            <td>
              {{
                order.totalPriceWithShippingCost - order.couponDiscount ??
                "----"
              }}
              {{
                $i18n.locale === "ar"
                  ? order?.currency?.nameAr
                  : order?.currency?.symbol
              }}
            </td>
            <td>
              {{
                $i18n.locale == "en"
                  ? order?.payType?.nameEn
                  : order?.payType?.nameAr
              }}
            </td>
            <td>
              <span style="cursor: pointer">
                <font-awesome :icon="['fas', 'link']" color="#146890" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <h1 class="text-center fw-bold color mt-5">
        {{ $i18n.locale === "ar" ? "لا يوجد طلبات" : "There are no orders" }}
      </h1>
    </div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="order?.totalPages"
        color="#fff"
        style="opacity: 1"
      ></v-pagination>
    </div>
  </div>
  <div id="detail" class="visually-hidden">
    <div v-if="loading">
      <ElementsSpinner />
    </div>
    <div v-else>
      <button class="btn background text-white mb-5" @click="back">
        {{ $t("Back") }}
      </button>
      <div class="table-content table-responsive" v-if="orderdetail">
        <table class="table" ref="DownloadComp">
          <thead>
            <tr>
              <th>{{ $i18n.locale == "ar" ? "اسم الطلب" : "Order Name" }}</th>
              <th>{{ $i18n.locale == "ar" ? "الملاحظات" : "Notes" }}</th>
              <th>{{ $i18n.locale == "ar" ? "الكمية" : "Quantity" }}</th>
              <th>
                {{ $i18n.locale == "ar" ? "السعر الإفرادي" : "Unit Pricr" }}
              </th>
              <th>
                {{ $i18n.locale == "ar" ? "السعر الكلي" : "Total Price" }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in orderdetail" :key="index">
              <td>
                {{
                  $i18n.locale === "ar"
                    ? item?.productNameAr
                    : item?.productNameEn ?? "----"
                }}
              </td>
              <td>
                {{ item.notes ?? "----" }}
              </td>
              <td>
                {{ item.quantity ?? "----" }}
                <!-- {{ item }} -->
              </td>
              <td>
                {{ item.totalPrice / item.quantity ?? "----" }}
              </td>
              <td>
                {{ item.totalPrice ?? "----" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="container" style="margin-top: 1rem; padding: 30px">
        <h3>{{ $t("OrderTracking") }}</h3>
        <div class="widget-timeline-icon">
          <ul class="timeline">
            <li
              :class="
                finalOrdinaryOrderTrackings?.shippingStatus === 'Ordered' ||
                finalOrdinaryOrderTrackings?.shippingStatus === 'Processing' ||
                finalOrdinaryOrderTrackings?.shippingStatus === 'Deliverd'
                  ? 'pay-done'
                  : 'pay-not-done'
              "
            >
              <div
                :class="
                  finalOrdinaryOrderTrackings?.shippingStatus === 'Ordered' ||
                  finalOrdinaryOrderTrackings?.shippingStatus ===
                    'Processing' ||
                  finalOrdinaryOrderTrackings?.shippingStatus === 'Deliverd'
                    ? 'bg-main'
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
                finalOrdinaryOrderTrackings?.shippingStatus === 'Processing' ||
                finalOrdinaryOrderTrackings?.shippingStatus === 'Deliverd'
                  ? 'pay-done'
                  : 'pay-not-done'
              "
            >
              <div
                :class="
                  finalOrdinaryOrderTrackings?.shippingStatus ===
                    'Processing' ||
                  finalOrdinaryOrderTrackings?.shippingStatus === 'Deliverd'
                    ? 'bg-main'
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
                  finalOrdinaryOrderTrackings?.shippingStatus === 'Deliverd'
                    ? 'bg-main'
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
</template>

<script setup>
const { locale } = useI18n();

const { order } = defineProps(["order"]);

console.log(order);
const {
  public: { api, apiBase },
} = useRuntimeConfig();

const loading = ref(false);
const orderdetail = ref(null);

const finalOrdinaryOrderTrackings = ref(null);

const detail = async (item) => {
  document.getElementById("table").classList.add("visually-hidden");
  document.getElementById("detail").classList.remove("visually-hidden");
  loading.value = true;
  const { data } = await useGetSiteApi().GetAll(
    `${api.FinalOrdinaryOrders}/${item.id}`
  );
  // console.log(data.value)
  orderdetail.value = data.value.data?.ordinaryOrders;
  finalOrdinaryOrderTrackings.value =
    data.value.data?.finalOrdinaryOrderTrackings[0];
  loading.value = false;
};
const back = () => {
  document.getElementById("table").classList.remove("visually-hidden");
  document.getElementById("detail").classList.add("visually-hidden");
  orderdetail.value = null;
};

// get cities and city name
const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);
const getCityName = (cityId) => {
  let cityName = ref();
  cityName.value = allcities.value.data.filter((city) => city.id == cityId);
  return (
    (locale.value === "ar"
      ? cityName.value[0]?.nameAr
      : cityName.value[0]?.nameEn) ?? "----"
  );
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 992px) {
  #table {
    display: none !important;
  }
}

.table-responsive {
  // &::-webkit-scrollbar { height: 6px; }
  // &::-webkit-scrollbar-track { background: #2e2b2b; }
  // &::-webkit-scrollbar-thumb { background: $gold; border-radius: 10px; }
  // &::-webkit-scrollbar-thumb:hover { background: #555; }
  // @include horizontal-scrollbar(6px, '#2e2b2b', $main, '#555');
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

.container {
  margin-top: 1rem;
  border: 1px solid $main;
  h3 {
    color: $main;
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

.timeline .bg-main {
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
</style>
