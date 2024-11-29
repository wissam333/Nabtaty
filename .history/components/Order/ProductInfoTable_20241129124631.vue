<template>
  <section>
    <div class="table-content table-responsive" id="cart-container">
      <table class="table">
        <thead
          class="tabel-title"
          :class="$i18n.locale == 'en' ? 'headen' : 'headar'"
        >
          <tr>
            <th>{{ $i18n.locale == "ar" ? "الصورة" : "Photo" }}</th>
            <th>{{ $i18n.locale == "ar" ? "الاسم" : "Name" }}</th>
            <!-- <th>{{ $i18n.locale == "ar" ? "ملاحظات" : "Note" }}</th> -->
            <th>{{ $i18n.locale == "ar" ? "الكمية" : "Quantity" }}</th>
            <th>{{ $i18n.locale == "ar" ? "السعر" : "Price" }}</th>
          </tr>
        </thead>
        <tbody>
          <!-- {{ cart.items }} -->
          <template v-for="(item, index) in cart.items" :key="index">
            <tr v-if="item">
              <!-- {{ item }} -->
              <td>
                <img
                  class="product-img"
                  :src="`${apiBase}/${item.item?.photos[0].photoPath}`"
                  alt=""
                  width="75"
                  height="50"
                />
              </td>
              <td>
                <NuxtLink v-if="item.item.id" :to="`/Product/${item.item.id}`">
                  <h6 :title="useTranslate(item.item, 'name')">
                    <span
                      v-if="item.item.selectedSize"
                      style="font-size: smaller; color: #00916d"
                      >({{ item.item.selectedSize }})</span
                    >
                    {{
                      $i18n.locale == "en"
                        ? item.item.plant_name
                        : item.item.plant_name
                    }}
                  </h6>
                </NuxtLink>
                <NuxtLink v-else :to="`/Product/${item.item.id}`">
                  <h6 :title="useTranslate(item.item, 'name')">
                    {{
                      $i18n.locale == "en"
                        ? item.item.plant_name
                        : item.item.plant_name
                    }}
                  </h6>
                </NuxtLink>
              </td>
              <!-- <td>
                <h6>
                  {{
                    item.item.note != ""
                      ? item.item.note?.slice(0, 20) +
                        (item.item.note?.length > 20 ? "..." : "")
                      : ""
                  }}
                </h6>
              </td> -->
              <td>
                <font-awesome
                  @click="increaseQty(item.id)"
                  :icon="['fas', 'angle-up']"
                  style="cursor: pointer"
                />
                <span
                  class="m-2 quantity text-black"
                  :id="`quantity_${item.id}`"
                  :data-qty="item.qty"
                  >{{ item.qty }}</span
                >
                <font-awesome
                  style="cursor: pointer"
                  @click="decreaseQty(item.id)"
                  :icon="['fas', 'angle-down']"
                />
              </td>
              <td>
                {{ (item.qty * item.price).toFixed(2) }}
                {{ $i18n.locale === "ar" ? "دينار" : "JOD" }}
              </td>
            </tr>
          </template>
          <tr>
            <td class="py-3 text-center" colspan="1">
              <strong class="mb-0">{{
                $i18n.locale == "ar" ? "كلفة التوصيل" : "Delviry Cost"
              }}</strong>
            </td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td class="py-3">
              <strong class="mb-0">
                {{ Number(useDelviryCost().value) }}
                {{ $i18n.locale === "ar" ? "دينار" : "JOD" }}</strong
              >
            </td>
          </tr>

          <tr>
            <td class="py-3 text-center" colspan="1">
              <strong class="mb-0">{{
                $i18n.locale == "ar" ? "السعر الإجمالي" : "Total Price"
              }}</strong>
            </td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td class="py-3">
              <strong class="mb-0">
                {{
                  Number(cart.totalPrice?.toFixed(2)) +
                  Number(useDelviryCost().value)
                }}
                {{ $i18n.locale === "ar" ? "دينار" : "JOD" }}</strong
              >
            </td>
            <!-- v-if="!shippingCostMap().value" -->
            <!-- <td v-else class="py-3">
              <strong class="mb-0"
                >{{ cart.totalPrice + shippingCostMap().value }}    {{ $i18n.locale === "ar" ? "دينار" : "JOD" }}</strong
              >
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const { cart, currency, chippengcost } = defineProps([
  "cart",
  "currency",
  "chippengcost",
]);
console.log(cart);
const {
  public: { apiBase },
} = useRuntimeConfig();
// console.log('cart : ', cart);
const increaseQty = (id) => {
  const quantityElm = document.getElementById(`quantity_${id}`);
  // Check If the Quantity Is Positive Number Or Not
  if (new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)) {
    let quantity = parseInt(quantityElm.dataset.qty) + 1;
    quantityElm.setAttribute("data-qty", quantity);
    quantityElm.textContent = quantity;
    useShoppingCartComposable().CartincreaseQty(id, quantity);
  }
};

const decreaseQty = (id) => {
  const quantityElm = document.getElementById(`quantity_${id}`);
  // Check If the Quantity Is Positive Number Or Not
  if (
    parseInt(quantityElm.dataset.qty) > 1 &&
    new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)
  ) {
    let quantity = parseInt(quantityElm.dataset.qty) - 1;
    quantityElm.setAttribute("data-qty", quantity);
    quantityElm.textContent = quantity;
    useShoppingCartComposable().CartdecreaseQty(id, quantity);
  }
};
</script>

<style lang="scss" scoped>
h6 {
  color: #000000;
}

thead tr {
  color: white;
  // background-color: #a9a9a9;
  background-color: $main;

  text-align: center;
}

.headen tr th:nth-child(1),
.headen tr th:nth-child(2),
.headen tr th:nth-child(3) {
  border-right: 1px solid #fff;
}
.headar tr th:nth-child(1),
.headar tr th:nth-child(2),
.headar tr th:nth-child(3) {
  border-left: 1px solid #fff;
}
tbody tr:nth-child(even) {
  color: #000;
  background-color: white;
  border: 1px solid #b6b5b6;
  cursor: pointer;
  text-align: center;
}
tbody tr:nth-child(odd) {
  color: #000;
  background-color: white;
  border: 1px solid #b6b5b6;
  cursor: pointer;
  text-align: center;
}

tbody tr:last-child {
  color: white !important;
  background-color: $main !important;

  text-align: center !important;
  td {
    color: white !important;
  }
}
.product-img {
  object-fit: contain;
}
</style>
