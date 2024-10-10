<template>
  <div class="categories">
    <div class="container">
      <h1>{{ $i18n.locale === "ar" ? "الفئات" : "Categories" }}</h1>
      <div class="cup d-flex justify-content-center">
        <img
          class="main"
          data-aos-duration="600"
          data-aos="zoom-out"
          src="/photos/17-1.png"
          alt=""
        />

        <img
          v-for="(cat, index) in FoodCategories?.data"
          :class="`cat image cat${index + 1}`"
          :src="`${apiBase}${cat.imageDataURL}`"
          alt=""
          data-aos-duration="600"
          :data-aos="(index + 1) % 2 === 0 ? 'fade-left' : 'fade-right'"
        />

        <p
          v-for="(cat, index) in FoodCategories?.data"
          :class="`cat cat-info cat-info${index + 1}`"
        >
          {{ $i18n.locale === "ar" ? cat.nameAr : cat.nameEn }}
        </p>
      </div>

      <div class="cats-mobile">
        <div class="cats">
          <div class="wrap" v-for="cat in FoodCategories?.data">
            <div class="cat-img">
              <img class="" :src="`${apiBase}${cat.imageDataURL}`" alt="" />
            </div>
            <div class="cat-name text-center">
              {{ $i18n.locale === "ar" ? cat.nameAr : cat.nameEn }}
            </div>
          </div>
        </div>
      </div>

      <div class="fresh">
        <h1>
          {{
            $i18n.locale === "ar"
              ? "العصائر الطازجة والصحية"
              : "Fresh & Healthy Juices"
          }}
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
                <div
                  class="product"
                  :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
                  v-for="product in productGroup"
                  :key="product.name"
                >
                  <div class="product-img">
                    <img :src="product.image" alt="" />
                  </div>
                  <div class="product-info">
                    <div class="title-price">
                      <h5 class="truncate">
                        {{
                          $i18n.locale === "ar"
                            ? product.name
                            : product.englishName
                        }}
                      </h5>
                      <h5 class="price">{{ product.price }} AED</h5>
                    </div>
                    <div class="desc">
                      <p>
                        {{
                          $i18n.locale === "ar"
                            ? product.description
                            : product.englishDescription
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let Products = ref([
  {
    name: "دبس الرمان",
    englishName: "Pomegranate Molasses",
    price: 10.99,
    image: "/photos/18-1.png",
    description: "دبس الرمان لذيذ ومثالي للأطباق الشرقية.",
    englishDescription:
      "Delicious pomegranate molasses, perfect for Middle Eastern dishes.",
  },
  {
    name: "زيت الزيتون البكر",
    englishName: "Extra Virgin Olive Oil",
    price: 15.99,
    image: "/photos/18-1.png",
    description: "زيت زيتون نقي وعالي الجودة من المزارع المحلية.",
    englishDescription: "Pure, high-quality olive oil from local farms.",
  },
  {
    name: "عسل نحل طبيعي",
    englishName: "Natural Honey",
    price: 12.5,
    image: "/photos/18-1.png",
    description: "عسل طبيعي 100% من زهور متنوعة.",
    englishDescription: "100% natural honey from various flowers.",
  },
  {
    name: "قهوة عربية",
    englishName: "Arabic Coffee",
    price: 8.99,
    image: "/photos/18-1.png",
    description: "قهوة عربية مطحونة حديثًا مع هيل.",
    englishDescription: "Freshly ground Arabic coffee with cardamom.",
  },
  {
    name: "زعفران ممتاز",
    englishName: "Premium Saffron",
    price: 25.0,
    image: "/photos/18-1.png",
    description: "زعفران عالي الجودة لإضافة نكهة فريدة لأطباقك.",
    englishDescription:
      "High-quality saffron for adding a unique flavor to your dishes.",
  },
  {
    name: "ماء ورد",
    englishName: "Rose Water",
    price: 5.99,
    image: "/photos/18-1.png",
    description: "ماء ورد طبيعي نقي للاستخدامات الغذائية والتجميلية.",
    englishDescription:
      "Pure natural rose water for culinary and cosmetic uses.",
  },
  {
    name: "بهارات مشكلة",
    englishName: "Mixed Spices",
    price: 6.5,
    image: "/photos/18-1.png",
    description: "خليط من البهارات التقليدية لإضافة نكهة مميزة.",
    englishDescription:
      "A blend of traditional spices for adding a distinctive flavor.",
  },
  {
    name: "طحينة",
    englishName: "Tahini",
    price: 4.99,
    image: "/photos/18-1.png",
    description: "طحينة سائلة ناعمة مصنوعة من السمسم.",
    englishDescription: "Smooth liquid tahini made from sesame seeds.",
  },
  {
    name: "كعك بالسمسم",
    englishName: "Sesame Cookies",
    price: 3.99,
    image: "/photos/18-1.png",
    description: "كعك لذيذ مصنوع من السمسم والزبدة.",
    englishDescription: "Delicious cookies made with sesame seeds and butter.",
  },
  {
    name: "تمور مجدول",
    englishName: "Medjool Dates",
    price: 14.99,
    image: "/photos/18-1.png",
    description: "تمور مجدول كبيرة وحلوة، مثالية للوجبات الخفيفة.",
    englishDescription: "Large, sweet Medjool dates, perfect for snacking.",
  },
]);

// Function to group products into arrays of 4
const groupedProducts = computed(() => {
  const groups = [];
  for (let i = 0; i < Products.value.length; i += 4) {
    groups.push(Products.value.slice(i, i + 4));
  }
  return groups;
});

const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: FoodCategories, pending } = await useGetSiteApi().GetAll(
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
  h1 {
    padding-bottom: 100px;
    color: $main;
    font-weight: bold;
    @media (max-width: 991px) {
      padding-bottom: 20px;
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
      color: $main;
      margin-bottom: 40px;
    }
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 100px;
      row-gap: 40px;
      .product {
        display: flex;
        align-items: center;
        .product-img {
          margin: 0px 20px;
          width: 106px;
          height: 106px;
        }
        .product-info {
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
