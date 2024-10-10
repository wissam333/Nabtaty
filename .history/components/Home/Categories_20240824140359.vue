<template>
  <div class="categories">
    <div class="container">
      <div class="cup d-flex justify-content-center">
        <img class="main" src="/photos/17-1.png" alt="" />

        <img class="cat image cat1" src="/photos/7-1.png" alt="" />
        <img class="cat image cat2" src="/photos/8-1.png" alt="" />
        <img class="cat image cat3" src="/photos/9-1.png" alt="" />
        <img class="cat image cat4" src="/photos/10-1.png" alt="" />
        <img class="cat image cat5" src="/photos/11-1.png" alt="" />
        <img class="cat image cat6" src="/photos/12-1.png" alt="" />
        <img class="cat image cat7" src="/photos/13-1.png" alt="" />
        <img class="cat image cat8" src="/photos/14-1.png" alt="" />
        <img class="cat image cat9" src="/photos/15-1.png" alt="" />

        <p class="cat cat-info1">Dessert</p>
        <p class="cat cat-info2">Dessert</p>
        <p class="cat cat-info3">Dessert</p>
        <p class="cat cat-info4">Dessert</p>
        <p class="cat cat-info5">Dessert</p>
        <p class="cat cat-info6">Dessert</p>
        <p class="cat cat-info7">Dessert</p>
        <p class="cat cat-info8">Dessert</p>
        <p class="cat cat-info9">Dessert</p>
      </div>

      <div class="fresh">
        <h1>Fresh & Healthy Juices</h1>
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
                  v-for="product in productGroup"
                  :key="product.name"
                >
                  {{ product.name }}
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
    image: "https://example.com/images/pomegranate_molasses.jpg",
    description: "دبس الرمان لذيذ ومثالي للأطباق الشرقية.",
    englishDescription:
      "Delicious pomegranate molasses, perfect for Middle Eastern dishes.",
  },
  {
    name: "زيت الزيتون البكر",
    englishName: "Extra Virgin Olive Oil",
    price: 15.99,
    image: "https://example.com/images/extra_virgin_olive_oil.jpg",
    description: "زيت زيتون نقي وعالي الجودة من المزارع المحلية.",
    englishDescription: "Pure, high-quality olive oil from local farms.",
  },
  {
    name: "عسل نحل طبيعي",
    englishName: "Natural Honey",
    price: 12.5,
    image: "https://example.com/images/natural_honey.jpg",
    description: "عسل طبيعي 100% من زهور متنوعة.",
    englishDescription: "100% natural honey from various flowers.",
  },
  {
    name: "قهوة عربية",
    englishName: "Arabic Coffee",
    price: 8.99,
    image: "https://example.com/images/arabic_coffee.jpg",
    description: "قهوة عربية مطحونة حديثًا مع هيل.",
    englishDescription: "Freshly ground Arabic coffee with cardamom.",
  },
  {
    name: "زعفران ممتاز",
    englishName: "Premium Saffron",
    price: 25.0,
    image: "https://example.com/images/premium_saffron.jpg",
    description: "زعفران عالي الجودة لإضافة نكهة فريدة لأطباقك.",
    englishDescription:
      "High-quality saffron for adding a unique flavor to your dishes.",
  },
  {
    name: "ماء ورد",
    englishName: "Rose Water",
    price: 5.99,
    image: "https://example.com/images/rose_water.jpg",
    description: "ماء ورد طبيعي نقي للاستخدامات الغذائية والتجميلية.",
    englishDescription:
      "Pure natural rose water for culinary and cosmetic uses.",
  },
  {
    name: "بهارات مشكلة",
    englishName: "Mixed Spices",
    price: 6.5,
    image: "https://example.com/images/mixed_spices.jpg",
    description: "خليط من البهارات التقليدية لإضافة نكهة مميزة.",
    englishDescription:
      "A blend of traditional spices for adding a distinctive flavor.",
  },
  {
    name: "طحينة",
    englishName: "Tahini",
    price: 4.99,
    image: "https://example.com/images/tahini.jpg",
    description: "طحينة سائلة ناعمة مصنوعة من السمسم.",
    englishDescription: "Smooth liquid tahini made from sesame seeds.",
  },
  {
    name: "كعك بالسمسم",
    englishName: "Sesame Cookies",
    price: 3.99,
    image: "https://example.com/images/sesame_cookies.jpg",
    description: "كعك لذيذ مصنوع من السمسم والزبدة.",
    englishDescription: "Delicious cookies made with sesame seeds and butter.",
  },
  {
    name: "تمور مجدول",
    englishName: "Medjool Dates",
    price: 14.99,
    image: "https://example.com/images/medjool_dates.jpg",
    description: "تمور مجدول كبيرة وحلوة، مثالية للوجبات الخفيفة.",
    englishDescription: "Large, sweet Medjool dates, perfect for snacking.",
  },
]);
</script>

<style lang="scss" scoped>
.categories {
  position: relative;
  background: url("/photos/16-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 100px 0px;
  .cup {
    position: relative;
    width: 800px;
    margin: auto;
    .main {
      width: 100%;
    }
    .cat {
      position: absolute;
      transition: all 0.3s ease-in-out;
      color: $main;
      font-weight: bold;
      cursor: pointer;
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
        left: -90px;
        top: 66%;
      }
      &.cat-info2 {
        right: -90px;
        top: 66%;
      }

      &.cat-info3 {
        left: -120px;
        top: 40%;
      }
      &.cat-info4 {
        right: -120px;
        top: 40%;
      }

      &.cat-info5 {
        left: -60px;
        top: 17%;
      }
      &.cat-info6 {
        right: -60px;
        top: 17%;
      }

      &.cat-info7 {
        left: 115px;
        top: -2%;
      }
      &.cat-info8 {
        right: 115px;
        top: -2%;
      }

      &.cat-info9 {
        left: 50%;
        top: -9%;
        transform: translate(-50%, -50%);
        &:hover {
          img {
            transform: scale(1.1);
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
    }
  }
}
</style>
