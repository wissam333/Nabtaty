<template>
  <div
    class="product"
    @click="GoTo(product.id)"
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <div class="disscount">30%</div>
    <div class="hot">
      <img src="/photos/29-1.png" alt="" />
    </div>

    <div class="product-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="product-info">
      <h5 class="title">
        {{ $i18n.locale === "ar" ? product.name : product.englishName }}
      </h5>

      <nuxt-link to="/" class="btn btn-main mt-5">
        <span>{{ $i18n.locale === "ar" ? "اطلب الآن" : "Order Now" }}</span>
      </nuxt-link>

      <p class="old-price">
        {{ product.price }}
        {{ $i18n.locale === "ar" ? "درهم اماراتي" : "AED" }}
      </p>
      <p class="price">
        {{ product.price }}
        {{ $i18n.locale === "ar" ? "درهم اماراتي" : "AED" }}
      </p>
    </div>
  </div>
</template>
<script setup>
const { product } = defineProps(["product"]);
const GoTo = (id) => {
  return navigateTo(`product/${id}`);
};
</script>
<style lang="scss" scoped></style>
