<template>
  <div class="pb-10 product-card position-relative">
    <!-- <img v-if="!isFavorite" @click="AddToFavorite()" src="/newdisign/heart2.png" :class="$i18n.locale == 'en' ? 'heartEn' :'heartAr'" class="heart pointer" width="25" alt=""> -->
    <!-- <img v-else @click="$router.push('/newsite/favorite')" src="/newdisign/heart1.png" :class="$i18n.locale == 'en' ? 'heartEn' :'heartAr'" class="heart pointer" width="25" alt=""> -->
    <div class="disscount" v-if="item?.discountRatio">
      {{ item?.discountRatio + "%" }}
    </div>
    <div>
      <div class="image w-100 d-flex align-items-center justify-content-center">
        <img
          v-if="image"
          @click="gotodetail"
          class="pointer"
          :src="`${apiBase}${image}`"
        />
        <img v-else src="/photos/5-1.png" alt="" />
      </div>
      <div class="text-center quickaddbox my-2" style="height: 40px">
        <button class="btn quickadd specialbtn" @click="AddToCart(item)">
          {{ $i18n.locale == "en" ? "QUICK ADD" : "إضافة سريعة" }}
        </button>
      </div>
      <div class="p-1">
        <h5
          @click="gotodetail"
          style="height: 50px"
          :class="$i18n.locale == 'ar' ? 'text-start' : ''"
          class="name fw-bold px-2 text-black pointer"
        >
          {{ name }}
        </h5>

        <p
          v-if="!item.newPrice"
          class="name mb-0 px-2 text-start fw-bold price"
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
        >
          {{ price }} {{ $t("AED") }}
        </p>

        <div
          class="d-flex boxforoldandnew px-2"
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
          v-else
        >
          <p
            class="name mb-0 smalltext px-2"
            style="margin-inline-end: 8px; text-decoration-line: line-through"
          >
            {{ price }} {{ $t("AED") }}
          </p>
          <p class="name mb-0 fw-bold smalltext price px-2">
            {{ item.newPrice }} {{ $t("AED") }}
          </p>
        </div>

        <button
          @click="gotodetail"
          :class="$i18n.locale == 'ar' ? 'detailar' : 'detail'"
          class="btn py-1 background px-2"
        >
          {{ $i18n.locale === "ar" ? "التفاصيل" : "Detail" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  id,
  image,
  price,
  name,
  newPrice,
  arivals,
  productId,
  category_id,
  isFavorite,
  item,
} = defineProps([
  "id",
  "image",
  "price",
  "name",
  "newPrice",
  "arivals",
  "productId",
  "category_id",
  "isFavorite",
  "item",
]);

const isAuth = useAuth().value;
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { $awn } = useNuxtApp();
const emit = defineEmits(["ChangeIcon"]);

const AddToFavorite = async () => {
  if (isAuth.isAuthenticated) {
    const {
      data: addtofav,
      error,
      pending,
      execute,
    } = await $fetch(`/api/v1/Products/AddProductToClientFavorites`, {
      baseURL: apiBase,
      method: "POST",
      body: {
        productId: productId,
        clientId: useUserInfo().value.clientId,
      },
      headers: {
        Authorization: `Bearer ${useMainToken().value}`,
      },
    });
    if (addtofav == 0) {
      $awn.warning("Product is already added to favorites");
    } else {
      $awn.success("Successfully added to favorites");
      emit("ChangeIcon", productId);
    }
  } else {
    $awn.alert("Can't add to favorites, You must log in first");
  }
};

const gotodetail = () => {
  return navigateTo(`/Products/${productId}`);
};

let note = ref("");
let quantity = ref(1);
const AddToCart = (item) => {
  item.note = note.value;
  item.qty = quantity.value;
  if (item.newPrice) {
    item.price = item.newPrice;
  }
  // return
  useShoppingCartComposable().addToCartWithQty(item, item.qty);
  quantity.value = 1;
  note.value = "";
};
</script>

<style scoped lang="scss">
.quickaddbox,
.quickadd {
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 992px) {
  .quickadd,
  .quickaddbox {
    display: none !important;
    height: 0 !important;
  }
}
@media screen and (max-width: 1200px) {
  .boxforoldandnew {
    // flex-direction: column-reverse !important;
    // background-color: red;
    width: 100% !important;

    // justify-content: end !important;
    .name {
      padding-bottom: 10px;
      width: 100%;
      text-align: start !important;
    }
    // text-align: left !important;
  }
}

@media screen and (max-width: 1399px) {
  .smalltext {
    font-size: 13px !important;
    color: #777;
  }
}

.specialbtn {
  background: linear-gradient(to left, #146890, #45b2e9, #146890);
  color: white;
  width: 83.5%;
  margin: 0 auto !important;
  border-radius: 0 !important;
  -webkit-border-radius: 0 !important;
  -moz-border-radius: 0 !important;
  -ms-border-radius: 0 !important;
  -o-border-radius: 0 !important;
}

.quickadd {
  opacity: 0 !important;
}

.detail {
  position: absolute;
  bottom: 1.5rem;
  right: 1rem;
  font-size: 0.9rem;
  color: #fff !important;
}
.detailar {
  position: absolute;
  bottom: 1.5rem;
  left: 12.8px;
  font-size: 0.9rem;
  color: #fff !important;
}

.product-card {
  box-shadow: 0px 0px 7px 0px $main;
  background-color: white;
  border-radius: 8px;
  // overflow: hidden;
  .name {
    text-align: start;
    justify-content: flex-start;
    padding-bottom: 10px;
  }
  &:hover {
    .quickadd {
      opacity: 1 !important;
    }
    .image {
      overflow: hidden;
      img {
        transition: 0.5s;
        transform: scale(1.05);
      }
    }
  }
}

.heart {
  position: absolute;
  top: 4%;
  z-index: 9;
}

.heartAr {
  left: 5%;
}

.heartEn {
  right: 5%;
}

.image {
  transition: 0.3s;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
h2 {
  font-size: 1.3rem;
  color: #3a3a3a;
}
h3,
h5,
p {
  color: #777;
  margin: 0.3rem 0;
}
.link {
  color: #b29c57;
  &:hover {
    color: #a38b42;
  }
}

@media screen and (max-width: 992px) {
  .image {
    transition: 0.3s;
    // object-fit: contain;
    height: 100px !important;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h5 {
    // height: auto !important;
    font-size: smaller !important;
    height: 32px !important;
  }

  p {
    font-size: 15px !important;
  }

  .detail {
    bottom: 0.8rem !important;
    padding: 5px 8px !important;
    font-size: 15px;
    right: 5% !important;
    width: 90%;
  }

  .detailar {
    bottom: 0.8rem !important;
    padding: 5px 8px !important;
    font-size: 15px;
    right: 5% !important;
    width: 90%;
  }
  .name {
    font-size: 15px !important;
    padding-bottom: 15px;
  }

  p {
    font-size: small;
  }

  .boxforoldandnew {
    // background-color: red;
    height: 34px;
    padding: 0 !important;
    justify-content: space-between !important;
    p {
      margin-inline-end: 0 !important;
      margin: 0px;
      font-size: 12px !important;
    }
  }
}

@media (max-width: 768px) {
  .name {
    font-size: 16px !important;
  }
}
.price {
  color: $main;
  font-weight: bold;
}
.disscount {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ec9605, #ffc35f, #ec9605);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 3;
  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
}
</style>
