<template>
  <div
    class="product-info nav-margin pt-5"
    :class="$i18n.locale === 'ar' ? 'ar' : ''"
  >
    <!-- Loading -->
    <div v-if="pending" class="loading">
      <ElementsSpinner></ElementsSpinner>
    </div>
    <div v-else class="container" style="position: relative">
      <!-- Back Link-->
      <div class="go-back" @click="router.back()">
        <font-awesome :icon="['fas', 'arrow-left']" />
      </div>

      <!-- Short Links-->
      <h5 class="links mb-10">
        <span class="pointer" @click="router.push(`/Products`)">
          {{ $i18n.locale === "ar" ? "منتجاتنا" : "Products" }}
        </span>
        /
        <span
          class="pointer"
          @click="router.push(`/FoodByCategory/${Product?.categoryId}`)"
        >
          {{
            $i18n.locale === "ar"
              ? Product?.categoryArabicName
              : Product?.categoryEnglishName
          }}
        </span>
        /
        {{ $i18n.locale === "ar" ? Product?.arabicName : Product?.englishName }}
      </h5>

      <!-- Main Product -->
      <div class="row">
        <!-- Product Images-->
        <div class="col-12 col-lg-6 mb-10">
          <ProductDetailsProductImagesCarousel
            v-if="Product"
            :ProductImages="Product?.productPhotos"
            :ProductMainImg="Product?.imageDataUrl"
            :disscount="Product?.productOffer?.discountRatio"
          ></ProductDetailsProductImagesCarousel>
        </div>

        <!-- Product Info-->
        <div class="info col-lg-6">
          <!-- Product Fav -->
          <div class="heart">
            <span v-if="isAuth.isAuthenticated">
              <font-awesome
                v-if="!ProductForFavorite?.isFavorite"
                @click="AddToFavorite()"
                :icon="['far', 'heart']"
                class="pointer"
              ></font-awesome>
              <font-awesome
                v-else
                @click="removeFromFavorite()"
                :icon="['fas', 'heart']"
              ></font-awesome>
            </span>
            <span v-else>
              <font-awesome
                @click="AddToFavoritebeforLogin()"
                :icon="['far', 'heart']"
              />
            </span>
          </div>
          <!-- <div class="heart">
                <font-awesome
                  @click="AddToFavoritebeforLogin()"
                  v-if="Product?.isFavorite"
                  :icon="['fas', 'heart']"
                />
                <font-awesome v-else :icon="['far', 'heart']" />
              </div> -->

          <h2 class="title">
            {{
              $i18n.locale === "ar" ? Product?.arabicName : Product?.englishName
            }}
          </h2>

          <h2 class="price">
            <span
              :class="Product?.productOffer?.newPrice ? 'line-through' : ''"
            >
              {{ Product?.price ?? "999" }}
              {{ $i18n.locale === "ar" ? "درهم إماراتي" : "AED" }}
            </span>

            <span v-if="Product?.productOffer?.newPrice" class="mx-2">
              {{ Product?.productOffer?.newPrice }}
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

          <!-- Product Desc , Note , Reviews -->
          <!-- <div class="mb-2 fw-bold" v-if="Product?.weight || Product?.unitName"> -->
          <!-- <span>{{ Product?.weight }}</span> -->
          <!-- <span class="mx-2">{{ Product?.unitName }}</span> -->
          <!-- </div> -->

          <!-- Desc -->
          <div class="desc mt-5" v-if="Product?.arabicDescription">
            <div
              v-html="
                $i18n.locale === 'ar'
                  ? Product?.arabicDescription
                  : Product?.englishDescription
              "
            ></div>
          </div>
          <div
            class="mt-5"
            v-if="
              !Product?.arabicDescription &&
              !Product?.weight &&
              !Product?.unitName
            "
          >
            <h5 class="fw-bold">
              {{
                $i18n.locale === "ar"
                  ? "لا يوجد وصف"
                  : "There is no description"
              }}
            </h5>
          </div>

          <!-- tabs -->
          <div class="my-4">
            <v-tabs v-model="tab" bg-color="transparent">
              <v-tab
                class="tabs"
                style="color: #78c044; font-weight: bold"
                value="one"
                >{{ $i18n.locale == "en" ? "Water" : "ماء" }}</v-tab
              >
              <v-tab
                class="tabs"
                style="color: #78c044; font-weight: bold"
                value="two"
                >{{
                  $i18n.locale == "en" ? "Part Sun" : "مشمس بشكل جزئي"
                }}</v-tab
              >

              <v-tab
                class="tabs"
                style="color: #78c044; font-weight: bold"
                value="three"
                >{{ $i18n.locale == "en" ? "Medium" : "وسط" }}</v-tab
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
                  <h5 style="color: #78c044; font-weight: bold">
                    Lorem ipsum dolor sit
                  </h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem placeat facereut ex aspernatur aliquam officiis libero
                    sint nesciunt ipsum inventore rerum voluptatibus! facilis
                    modi sed earum, voluptates praesentium ea ut ex aspernatur
                    aliquam off
                  </p>
                </v-window-item>
                <v-window-item value="two" class="">
                  <h5 style="color: #78c044; font-weight: bold">
                    Lorem ipsum dolor sit
                  </h5>
                  <p>
                    Lorem i psum dolor sit, amet consec psum dolor sit, amet
                    consec psum dolor sit, am rerum voluptatibus! et consectetur
                    adipisicing elioluptatibus!t. Autem placeat facere facilis
                    modi sed earum, volup
                  </p>
                </v-window-item>
                <v-window-item value="three" class="">
                  <h5 style="color: #78c044; font-weight: bold">
                    Lorem ipsum dolor sit
                  </h5>
                  <p>
                    Lorem ipsum dolospernatur aliquam officiis libero sint
                    nesciunt ipsuspernatur aliquam officiis libero sint nesciunt
                    ipsum inventore rerum voluptatibus! rerum voluptatibus!r
                    sit, amet consectetur adipisicing elit. Autem placeat facere
                    facilis modi sed earum,
                  </p>
                </v-window-item>
              </v-window>
            </div>
          </div>

          <!-- Add to cart button -->
          <div class="add-to-cart mt-4" @click="AddToCart(Product)">
            <button class="btn">
              <span>
                {{ $i18n.locale === "ar" ? "أضف للسلة" : "Add To Cart" }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container tabs-container">
      <v-tabs v-model="tab2" bg-color="transparent">
        <v-tab class="tabs2" value="one">{{
          $i18n.locale == "en" ? "Water" : "ماء"
        }}</v-tab>
        <v-tab class="tabs2" value="two">{{
          $i18n.locale == "en" ? "Light" : "الضوء"
        }}</v-tab>

        <v-tab class="tabs2" value="three">{{
          $i18n.locale == "en" ? "Humidity" : "الرطوبة"
        }}</v-tab>

        <v-tab class="tabs2" value="four">{{
          $i18n.locale == "en" ? "Fretilizing" : "التسميد"
        }}</v-tab>
      </v-tabs>
    </div>

    <div class="information container">
      <v-window v-model="tab2" style="color: #333 !important; opacity: 1">
        <v-window-item value="one" style="color: #333 !important; opacity: 1">
          <div class="row">
            <div class="col-lg-6 desc">
              <h2>{{ $i18n.locale === "ar" ? "الوصف" : "Description" }}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                exercitationem eligendi laudantium numquam consequuntur libero
                veniam, facilis perferendis sapiente ab ut est porro in maxime
                accusantium deleniti quisquam nemo ipsam!
              </p>
              <h5>Plant height with basin 35 cm</h5>
              <h5>Basin width 10 cm</h5>
              <h5>There is no drain hole under the sink.</h5>
            </div>

            <div class="col-lg-6 img">
              <img src="/photos/gifts.png" alt="" />
            </div>
          </div>
        </v-window-item>
      </v-window>
    </div>
    <!-- related items -->

    <!-- <div class="container my-10 py-10">
        <h1 class="color fw-bold">
          {{
            $i18n.locale === "ar"
              ? "اكتشف المنتجات المشابهة"
              : "Discover similar products"
          }}
        </h1>
        <div v-if="pending3" class="text-center text-white loader">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <div v-else>
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
            <SwiperSlide
              v-for="product in RelatedProducts.data"
              :key="product.id"
            >
              <div class="product" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
                <ProductCard
                  :product="product"
                  :productId="product?.productId"
                ></ProductCard>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> -->
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

// get product info
const { data: Product, pending } = await useGetSiteApi().GetAll(
  `${api.ProductdetailsApi}/${route.params.id}`
);

// get product images
// const { data: ProductImages, pending: pending2 } = await useGetSiteApi().GetAll(
//   `${api.ProductImages}${route.params.id}`
// );

// get related products
// const { data: RelatedProducts, pending: pending3 } =
//   await useGetSiteApi().GetAll(`${api.GetRelatedItems}/${route.params.id}`);

let tabOptions = ref("one");
onMounted(() => {
  if (route.query.option) {
    tabOptions.value = Number(route.query.option);
  }
});
let note = ref("");
const tab = ref("one");
const tab2 = ref("one");
let quantity = ref(1);
let rate = ref(0);

watchEffect(() => {
  if (process.client) {
    if (tabOptions.value) {
      quantity.value = 1;
      note.value = "";
      tab.value = "one";
    }
  }
});

const AddToCart = (item) => {
  item.note = note.value;
  item.qty = quantity.value;
  if (item.productOffer) {
    item.price = item.productOffer.newPrice;
  }
  // return
  useShoppingCartComposable().addToCartWithQty(item, item.qty);
  quantity.value = 1;
  note.value = "";
};

// favourite =================================================
const ProductForFavorite = ref(null);
const isAuth = useAuth().value;

// not logged in
const AddToFavoritebeforLogin = () => {
  $awn.alert(
    locale.value === "ar"
      ? "لا يمكن الإضافة إلى المفضلة، يجب عليك تسجيل الدخول أولاً"
      : "Can't add to favorites, You must log in first",
    {
      durations: { global: 5000 },
    }
  );
};

// if he is logged => is the product in fav or not ?
const GetProductByUserId = async () => {
  const {
    data: ProductFav,
    error: errorFav,
    pending: pendingFav,
    execute: executeFav,
  } = await useGetSiteApi().GetAll(
    `/api/v1/Products/GetProductByIdAndClientId/${route.params.id.toString()}/${
      useUserInfo().value.clientId
    }`
  );
  ProductForFavorite.value = ProductFav.value?.data;
};
isAuth.isAuthenticated ? GetProductByUserId() : "";

const AddToFavorite = async () => {
  const {
    data: addtofav,
    error,
    pending,
    execute,
  } = await $fetch(`${api.AddToFav}`, {
    baseURL: apiBase,
    method: "POST",
    body: {
      productId: route.params.id.toString(),
      clientId: useUserInfo().value.clientId,
    },
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  });
  $awn.success("Successfully added to favorites");
  // emit('ChangeIcon', productId)
  ChangeIcon();
};
const removeFromFavorite = async () => {
  if (isAuth.isAuthenticated) {
    const {
      data: removefromfav,
      error,
      pending,
      execute,
    } = await $fetch(
      `/api/v1/Products/RemoveProductFromFavorites/${
        useUserInfo().value.clientId
      }/${id}`,
      {
        baseURL: apiBase,
        method: "DELETE",
        body: {
          productId: id,
          clientId: useUserInfo().value.clientId,
        },
        headers: {
          Authorization: `Bearer ${useMainToken().value}`,
        },
      }
    );
    $awn.success("Successfully removed from favorites");
    ChangeIcon();
  } else {
    $awn.alert("Can't add to favorites, You must log in first");
  }
};
</script>
<style lang="scss" scoped>
.product-info {
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
      font-size: 25px;
      span {
        color: #78c044;
      }
    }

    .quantity {
      margin-top: 20px;
      width: 50%;
    }

    .add-to-cart {
      button {
        width: 150px;
        border-radius: 30px;
        padding: 10px 20px;
        background: linear-gradient(45deg, $main, $second, $main);
        span {
          color: #fff;
          font-weight: bold;
        }
      }
    }

    .desc {
      // margin-top: 20px;
    }
  }
}
.ar {
  .heart {
    right: auto !important;
    left: 12px;
  }
  // .tabs {
  //   padding-left: 1rem !important;
  //   padding-right: 0 !important;
  //   justify-content: flex-start !important;
  // }
  .disscount {
    right: 0px;
    left: auto !important;
  }
}
.loading {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs {
  padding-right: 1rem;
  padding-left: 0;
  min-width: auto !important;
}

.disscount {
  position: absolute;
  top: -8px;
  left: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ec9605, #ffc35f, #ec9605);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.textarea {
  border: 2px solid $main;
  border-radius: 8px;
  width: 100%;
  padding: 10px;
  outline: 0 !important;
}
.go-back {
  width: 40px;
  height: 40px;
  background: $main;
  color: #fff;
  position: absolute;
  left: 0;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin: 0px 12px;
  border-radius: 0.25rem;
  cursor: pointer;
}
.links {
  color: #333;
  font-weight: bold;
  padding: 40px 12px 10px 60px;
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
.tabs {
  &.v-slide-group-item--active,
  &.v-tab--selected {
    background-color: #78c044 !important;
    color: #fff !important;
  }
}
.tabs-container {
  margin-top: 80px;
  margin-bottom: 50px;
  .tabs2 {
    color: rgba(190, 86, 198, 0.4941176471);
    font-weight: bold;
    &.v-slide-group-item--active,
    &.v-tab--selected {
      background-color: rgba(190, 86, 198, 0.4941176471) !important;
      color: #fff !important;
    }
  }
}

.information {
  .img {
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .desc {
    h2 {
      color: $main;
      font-weight: bold;
      margin-bottom: 20px;
    }
    h5 {
      border-inline-start: 2px solid $main;
      padding-inline-start: 15px;
      padding-top: 10px;
      padding-bottom: 10px;
      margin: 20px 0px;
    }
  }
}
</style>
