<template>
  <div class="offers">
    <div class="container">
      <h1>{{ $i18n.locale === "ar" ? "العروض" : "Special" }}</h1>
      <h1>{{ $i18n.locale === "ar" ? "المميزة" : "Offers" }}</h1>

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
                  <h5 class="title">
                    {{
                      $i18n.locale === "ar" ? product.name : product.englishName
                    }}
                  </h5>

                  <div class="desc">
                    <p>
                      {{
                        $i18n.locale === "ar"
                          ? product.description
                          : product.englishDescription
                      }}
                    </p>
                  </div>

                  <h5 class="price">{{ product.price }} AED</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
    image: "/photos/25-1.png",
    description: "دبس الرمان لذيذ ومثالي للأطباق الشرقية.",
    englishDescription:
      "Delicious pomegranate molasses, perfect for Middle Eastern dishes.",
  },
  {
    name: "زيت الزيتون البكر",
    englishName: "Extra Virgin Olive Oil",
    price: 15.99,
    image: "/photos/25-1.png",
    description: "زيت زيتون نقي وعالي الجودة من المزارع المحلية.",
    englishDescription: "Pure, high-quality olive oil from local farms.",
  },
  {
    name: "عسل نحل طبيعي",
    englishName: "Natural Honey",
    price: 12.5,
    image: "/photos/25-1.png",
    description: "عسل طبيعي 100% من زهور متنوعة.",
    englishDescription: "100% natural honey from various flowers.",
  },
  {
    name: "قهوة عربية",
    englishName: "Arabic Coffee",
    price: 8.99,
    image: "/photos/25-1.png",
    description: "قهوة عربية مطحونة حديثًا مع هيل.",
    englishDescription: "Freshly ground Arabic coffee with cardamom.",
  },
  {
    name: "زعفران ممتاز",
    englishName: "Premium Saffron",
    price: 25.0,
    image: "/photos/25-1.png",
    description: "زعفران عالي الجودة لإضافة نكهة فريدة لأطباقك.",
    englishDescription:
      "High-quality saffron for adding a unique flavor to your dishes.",
  },
  {
    name: "ماء ورد",
    englishName: "Rose Water",
    price: 5.99,
    image: "/photos/25-1.png",
    description: "ماء ورد طبيعي نقي للاستخدامات الغذائية والتجميلية.",
    englishDescription:
      "Pure natural rose water for culinary and cosmetic uses.",
  },
  {
    name: "بهارات مشكلة",
    englishName: "Mixed Spices",
    price: 6.5,
    image: "/photos/25-1.png",
    description: "خليط من البهارات التقليدية لإضافة نكهة مميزة.",
    englishDescription:
      "A blend of traditional spices for adding a distinctive flavor.",
  },
  {
    name: "طحينة",
    englishName: "Tahini",
    price: 4.99,
    image: "/photos/25-1.png",
    description: "طحينة سائلة ناعمة مصنوعة من السمسم.",
    englishDescription: "Smooth liquid tahini made from sesame seeds.",
  },
  {
    name: "كعك بالسمسم",
    englishName: "Sesame Cookies",
    price: 3.99,
    image: "/photos/25-1.png",
    description: "كعك لذيذ مصنوع من السمسم والزبدة.",
    englishDescription: "Delicious cookies made with sesame seeds and butter.",
  },
  {
    name: "تمور مجدول",
    englishName: "Medjool Dates",
    price: 14.99,
    image: "/photos/25-1.png",
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
</script>
<style lang="scss" scoped>
.offers {
  padding-top: 100px;
  position: relative;
  background: url("/photos/31-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .container {
    h1 {
      font-weight: bold;
      &:first-of-type {
        color: $main;
      }
      &:last-of-type {
        color: $second;
        margin-left: 50px;
        position: relative;
        &::after {
          content: "";
          height: 2px;
          background-color: #ec9605;
          width: calc(100% - 120px);
          position: absolute;
          right: 0px;
          bottom: 12px;
        }
      }
    }
  }
  .products {
    display: flex;
    text-align: center;
    .product {
      height: 600px;
      width: 300px;
      border-radius: 300px;
      box-shadow: 1px 1px 1px 1px $main;
      margin: 0px 20px;
      .product-info {
        .title {
          color: $main;
          font-weight: bold;
          margin-top: 10px;
        }
      }
      .product-img {
        border-radius: 50%;
      }
    }
  }
}
</style>
