<template>
  <div class="categories">
    <div class="container">
      <h1>
        <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
        <span>
          {{ $i18n.locale === "ar" ? "الفئات" : "Categories" }}
        </span>
      </h1>
      <div class="cup d-flex justify-content-center">
        <img
          class="main"
          data-aos-duration="1000"
          data-aos="zoom-out"
          src="/photos/17-1.png"
          alt=""
        />

        <nuxt-link
          v-for="(cat, index) in FoodCategories?.data"
          :to="`/FoodByCategory/${cat.id}`"
        >
          <img
            :class="`cat figure image cat${index + 1}`"
            :src="`${apiBase}${cat.imageDataURL}`"
            alt=""
            data-aos-duration="600"
            :data-aos="(index + 1) % 2 === 0 ? 'fade-left' : 'fade-right'"
          />
        </nuxt-link>

        <p
          v-for="(cat, index) in FoodCategories?.data"
          :class="`cat cat-info cat-info${index + 1}`"
        >
          {{ $i18n.locale === "ar" ? cat.nameAr : cat.nameEn }}
        </p>
      </div>

      <div class="cats-mobile">
        <div class="cats">
          <nuxt-link
            class="wrap"
            v-for="cat in FoodCategories?.data"
            :to="`/FoodByCategory/${cat.id}`"
          >
            <div class="cat-img">
              <img class="" :src="`${apiBase}${cat.imageDataURL}`" alt="" />
            </div>
            <div class="cat-name text-center">
              {{ $i18n.locale === "ar" ? cat.nameAr : cat.nameEn }}
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="fresh">
        <h1>
          <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
          <span>
            {{ $i18n.locale === "ar" ? "مشروبات غازية" : "Soft Drinks" }}
          </span>
        </h1>
        <div v-if="pending" class="text-center text-white loader">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <div v-else>
          <Swiper
            style="direction: ltr"
            :modules="[SwiperAutoplay, SwiperPagination]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
            :pagination="{
              clickable: true,
            }"
          >
            <SwiperSlide
              v-for="(productGroup, index) in groupedProducts"
              :key="index"
            >
              <div class="products">
                <nuxt-link
                  :to="`/Products/${product.id}`"
                  class="product"
                  :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
                  v-for="product in productGroup"
                  :key="product?.nameEn"
                >
                  <div class="product-img">
                    <img
                      v-if="product?.productImageUrl"
                      :src="apiBase + product?.productImageUrl"
                      alt=""
                    />
                    <img v-else src="/photos/5-1.png" alt="" />
                  </div>

                  <div class="product-info">
                    <div class="title-price">
                      <h5 class="truncate">
                        {{
                          $i18n.locale === "ar"
                            ? product.nameAr
                            : product.nameEn
                        }}
                      </h5>

                      <h5 class="price">
                        <span
                          :class="
                            product?.productOffer?.newPrice
                              ? 'line-through'
                              : ''
                          "
                        >
                          {{ product?.price }}
                          {{ $i18n.locale === "ar" ? "AED" : "AED" }}
                        </span>
                      </h5>
                      <h5 class="price" v-if="product?.productOffer?.newPrice">
                        {{ product?.productOffer?.newPrice }}
                        {{ $i18n.locale === "ar" ? "AED" : "AED" }}
                      </h5>
                    </div>
                    <!-- <div class="desc">
                      <div
                        v-html="
                          $i18n.locale === 'ar'
                            ? product.descriptionAr
                            : product.descriptionEn
                        "
                      ></div>
                    </div> -->
                  </div>
                </nuxt-link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();

const { data: Products, pending } = await useGetSiteApi().GetAll(
  `${api.GetProducts}?CategoryId=${useAllFoodesTypes().value[5]?.id}&type=B2B`
);

// Function to group products into arrays of 4
const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

// Listen for window resize events
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

// Function to group products based on window width
const groupedProducts = computed(() => {
  const groups = [];
  if (windowWidth.value < 768) {
    for (let i = 0; i < Products.value?.data.length; i += 1) {
      groups.push(Products.value?.data.slice(i, i + 1));
    }
  } else {
    for (let i = 0; i < Products.value?.data.length; i += 4) {
      groups.push(Products.value?.data.slice(i, i + 4));
    }
  }
  console.log(groups);
  return groups;
});

const { data: FoodCategories } = await useGetSiteApi().GetAll(
  `${api.FoodCategories}?type=B2B&categoryId=0`
);
</script>

<style lang="scss" scoped>
.categories {
  position: relative;
  background: url("/photos/16-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-top: 150px;
  @media (max-width: 1200px) {
    padding-top: 50px;
  }

  h1 {
    padding-bottom: 100px;
    @media (max-width: 991px) {
      padding-bottom: 20px;
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

  .cup {
    position: relative;
    width: 800px;
    margin: auto;
    .main {
      width: 100%;
    }
    .cat {
      position: absolute;
      color: $main;
      font-weight: bold;
      cursor: pointer;

      &.cat-info {
        width: 80px;
        white-space: nowrap;
        direction: rtl;
      }
      &.image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
      }
      &:hover {
        &.image {
          transform: scale(1.1);
          border: 1px solid $main;
        }
      }
      &.cat1 {
        left: -30px;
        top: 60%;
      }
      &.cat2 {
        right: -30px;
        top: 60%;
      }

      &.cat3 {
        left: -65px;
        top: 35%;
      }
      &.cat4 {
        right: -65px;
        top: 35%;
      }

      &.cat5 {
        left: -10px;
        top: 15%;
      }
      &.cat6 {
        right: -10px;
        top: 15%;
      }

      &.cat7 {
        left: 150px;
        top: -2%;
      }
      &.cat8 {
        right: 150px;
        top: -2%;
      }

      &.cat9 {
        left: 50%;
        top: 1%;
        transform: translate(-50%, -50%);
        &:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
      }

      // info
      &.cat-info1 {
        left: -100px;
        top: 58%;
      }
      &.cat-info2 {
        right: -100px;
        top: 58%;
      }

      &.cat-info3 {
        left: -120px;
        top: 32%;
      }
      &.cat-info4 {
        right: -120px;
        top: 32%;
      }

      &.cat-info5 {
        left: -60px;
        top: 11%;
      }
      &.cat-info6 {
        right: -60px;
        top: 11%;
      }

      &.cat-info7 {
        left: 115px;
        top: -5%;
      }
      &.cat-info8 {
        right: 115px;
        top: -5%;
      }

      &.cat-info9 {
        left: 50%;
        top: -10%;
        transform: translate(-50%, -50%);
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .cats-mobile {
    display: none;
    .cats {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-items: center;
      row-gap: 20px;
      column-gap: 20px;

      @media (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
      }
      .wrap {
        width: 180px;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0px 0px 7px 0px $main;
        // background-color: $second;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        @media (max-width: 991px) {
          width: 100%;
        }
        .cat-name {
          color: $main;
          font-weight: bold;
          padding-bottom: 20px;
          white-space: wrap;
          padding: 10px;
        }
        .cat-img {
          width: 100%;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
  // fresh swiper
  .fresh {
    padding: 100px 0px;

    h1 {
      padding-bottom: 40px !important;
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

    .products {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      row-gap: 40px;
      padding: 20px;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      .product {
        color: $main;
        display: flex;
        align-items: center;
        border: 1px solid #c5c5c5;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 1px 1px 13px 2px #33333373;
        cursor: pointer;

        &:hover {
          .product-img {
            img {
              transform: scale(1.1);
            }
          }
        }
        .product-img {
          width: 126px;
          height: 126px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease-in-out;
          }
        }
        .product-info {
          margin: 0px 20px;
          width: 330px;
          .title-price {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            h5 {
              font-weight: bold;
            }
            .price {
              color: $main;
              width: 40%;
              display: flex;
              justify-content: flex-end;
            }
            .truncate {
              width: 60%;
              margin: 0;
            }
          }
          .desc {
          }
        }
      }
    }
  }
}
.swiper {
  padding-bottom: 100px;
}

@media (max-width: 1200px) {
  .categories {
    .cup {
      display: none !important;
    }
    .cats-mobile {
      display: block !important;
    }
    .fresh {
      .products {
        column-gap: 50px;
        .product {
          display: flex;
          flex-direction: column;
          padding: 20px;
          .product-info {
            width: 100% !important;
            margin-top: 20px;
            .desc {
            }
          }
          .product-img {
            width: auto !important;
            height: auto !important;
          }
        }
      }
    }
  }
}

</style>
