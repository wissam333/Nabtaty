<template>
  <div class="food-by-cat nav-margin">
    <h1>
      {{ $i18n.locale === "ar" ? "المنتجات" : "Products" }}
    </h1>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.food-by-cat {
  h1 {
    text-align: center;
    padding: 40px;
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
}
</style>
