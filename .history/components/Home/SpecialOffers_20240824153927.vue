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
    padding-top: 100px;
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
}
</style>
