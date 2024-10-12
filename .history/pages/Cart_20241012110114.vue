<template>
  <div class="cart nav-margin">
    <div class="title">
      <h1 class="d-flex align-items-center justify-content-center">
        <img width="70" src="/photos/nabtaty8.png" alt="" />
        <span class="underline">
          {{ $i18n.locale === "ar" ? "سلة المشتريات" : "My Cart" }}
        </span>
      </h1>
    </div>
    <div class="container">
      <div class="row" v-if="cart.totalQty > 0">
        <div class="col-lg-8">
          <div
            class="cartbox mb-5 d-flex justify-start"
            v-for="(item, index) in cart.items"
            :key="item.id"
          >
            <div class="leaf">
              <img src="/photos/leaf.png" alt="" />
            </div>
            <div class="leaf2">
              <img src="/photos/leaf2.png" alt="" />
            </div>
            <div class="imagebox">
              <img
                :src="`${apiBase}${
                  item.item?.imageDataUrl ?? item.item?.image
                }`"
                width="250"
                height="180"
                class=""
                alt=""
              />
            </div>
            <div
              class="mx-5"
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <h4 class="fw-bold">
                {{
                  ($i18n.locale == "en"
                    ? item.item.englishName
                    : item.item.arabicName) ?? item.item.title
                }}
              </h4>
              <p class="text-muted fw-bold" v-if="item.item.note != ''">
                {{ item.item.note }}
              </p>
              <p class="color price fw-bold">
                {{ item.price ?? "999" }}
                {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
              </p>
              <div class="d-flex align-items-center justify-space-between mb-2">
                <div
                  style="border: 2px solid #8cc63e"
                  class="d-inline-flex align-items-center py-2 px-10"
                >
                  <font-awesome
                    style="color: #8cc63e; cursor: pointer"
                    @click="decreaseQty(item.id, index)"
                    :icon="['fas', 'minus']"
                  />
                  <span
                    class="mx-3 quantity"
                    :id="`quantity_${item.id}`"
                    :data-qty="item.qty"
                  >
                    {{ item.qty }}</span
                  >
                  <font-awesome
                    style="color: #8cc63e; cursor: pointer"
                    @click="increaseQty(item.id, index)"
                    :icon="['fas', 'plus']"
                  />
                </div>
                <button
                  class="mb-0 text-white border-0 rounded-0 mx-5 btn delete"
                  :class="$i18n.locale === 'en' ? 'en' : ''"
                  @click="removeFromCart(index)"
                >
                  {{ $i18n.locale == "en" ? "REMOVE" : "حذف" }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="result-box"
            style="
              border: 2px solid #8cc63e;
              border-radius: 8px;
              padding-bottom: 10px;
            "
          >
            <h4
              class="background text-white fw-bold d-flex justify-space-between px-3 p-2"
            >
              <span class="text-white">{{
                $i18n.locale == "en" ? "Summary" : "ملخص"
              }}</span>
              <span class="text-white"
                >{{ useCart().value.totalQty }}
                <span class="text-white">{{
                  $i18n.locale == "en" ? "Item" : "عنصر"
                }}</span>
              </span>
            </h4>
            <!-- <div class="d-flex justify-content-between align-items-center px-8 mt-5">
                              <span class="text-black ">{{ $i18n.locale == 'ar' ? ' المجموع الفرعي ' : 'Subtotal' }}</span>
                              <span class="totalPrice text-black" style="font-size:20px">{{ cart.totalPrice.toFixed(2)}} د.ل
                              </span>
                          </div> -->
            <div
              class="d-flex justify-content-between align-items-center px-8 mt-5"
            >
              <span class="text-black fw-bold"
                >{{ $i18n.locale == "ar" ? "الطلب الكلي " : "Order Total" }}
              </span>
              <span
                class="totalPrice fw-bold text-black"
                style="font-size: 20px"
                >{{ cart.totalPrice?.toFixed(2) }}
                {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
              </span>
            </div>
            <div class="text-center mt-5">
              <NuxtLink class="w-75" v-if="isAuth.isAuthenticated" to="/order">
                <button class="Check background px-5 py-2 text-white">
                  {{ $i18n.locale == "ar" ? "اطلب الطلبية" : "ORDER NOW" }}
                </button>
              </NuxtLink>
              <NuxtLink v-else class="w-75" to="/auth/Login">
                <button class="Check background px-5 py-2 text-white">
                  {{ $i18n.locale == "ar" ? "اطلب الطلبية" : "Order Now" }}
                </button>
              </NuxtLink>
              <NuxtLink class="mx-1" to="/">
                <button class="Check background px-5 py-2 text-white">
                  {{ $i18n.locale == "ar" ? "تابع التسوق" : "Keep Shopping" }}
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="bg- d-flex justify-center align-items-center"
        style="height: calc(100vh - 300px)"
      >
        <div>
          <h5 class="text-center">
            <v-icon
              size="x-large"
              color=" darken-2"
              icon="mdi-cart-off"
            ></v-icon>
          </h5>
          <NuxtLink
            to="/"
            class="d-flex justify-center mt-9 align-items-center"
          >
            <button class="background px-10 py-3 text-white mx-auto">
              {{ $i18n.locale == "ar" ? "املأ السلة" : "Fill Your Cart" }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCart();
const isAuth = useAuth();
const {
  public: { api, apiBase },
} = useRuntimeConfig();

const increaseQty = (id, index) => {
  const quantityElm = document.getElementById(`quantity_${id}`);
  // Check If the Quantity Is Positive Number Or Not
  if (new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)) {
    let quantity = parseInt(quantityElm.dataset.qty) + 1;
    quantityElm.setAttribute("data-qty", quantity);
    quantityElm.textContent = quantity;
    // return
    useShoppingCartComposable().CartincreaseQty(index);
  }
};

const decreaseQty = (id, index) => {
  const quantityElm = document.getElementById(`quantity_${id}`);
  // Check If the Quantity Is Positive Number Or Not
  if (
    parseInt(quantityElm.dataset.qty) > 1 &&
    new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)
  ) {
    let quantity = parseInt(quantityElm.dataset.qty) - 1;
    quantityElm.setAttribute("data-qty", quantity);
    quantityElm.textContent = quantity;
    // return
    useShoppingCartComposable().CartdecreaseQty(index);
  }
};

const removeFromCart = (id) => {
  useShoppingCartComposable().removeItemFromCart(id);
};
</script>

<style lang="scss" scoped>
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
@media screen and (max-width: 992px) {
  .cartbox {
    flex-direction: column !important;
    justify-content: center;
    margin-bottom: 3rem !important;
    padding-bottom: 1rem;
    border-bottom: 1px solid $primary;
    min-height: auto !important;
  }

  .imagebox {
    text-align: center;
    margin-bottom: 1rem;
    img {
      width: 100%;
    }
  }
}
.cart {
  margin-bottom: 100px;
}
h4 {
  color: $main;
}
.cartbox {
  position: relative;
  border: 2px solid #8cc63e;
  border-radius: 8px;
  // overflow: hidden;
  min-height: 180px;
  .leaf {
    position: absolute;
    top: -20px;
    right: -20px;
    transform: rotate(349deg);
  }
  .leaf2 {
    position: absolute;
    top: 16px;
    right: -19px;
    transform: scaleX(-1) rotate(246deg);
  }
  .imagebox {
    img {
      object-fit: contain;
      user-select: none;
    }
  }
}
.quantity {
  user-select: none;
}
.delete {
  position: absolute;
  bottom: 20px;
  left: 0;
  background-color: #8cc63e;
  @media (max-width: 768px) {
    bottom: 27px;
  }
  &.en {
    left: auto;
    right: 0;
  }
}
.background {
  background: #8cc63e !important;
}
.price {
  font-size: 18px;
}
.result-box {
  height: 180px;
  @media (max-width: 768px) {
    height: auto;
  }
}
</style>
