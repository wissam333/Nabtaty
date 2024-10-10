<template>
  <div class="offers">
    <div class="container">
      <h1>{{ $i18n.locale === "ar" ? "العروض" : "Special" }}</h1>
      <h1>{{ $i18n.locale === "ar" ? "المميزة" : "Offers" }}</h1>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.offers {
  .container {
    h1 {
      &:first-of-type {
        color: $main;
      }
      &:last-of-type {
        color: $second;
        margin-left: 20px;
      }
    }
  }
}
</style>
