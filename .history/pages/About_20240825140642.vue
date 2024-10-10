<template>
  <div class="about nav-margin">
    <h1>
      <img width="65" src="/photos/1-1.png" alt="" />
      {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
    </h1>
    <div class="container">
      <div class="col-lg-6"></div>
      <div class="col-lg-6"></div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.about {
  h1 {
    -webkit-background-clip: text;
    background-color: $main;
    background-image: linear-gradient(45deg, $main, #f8edb1, $main);
    background-repeat: repeat;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
</style>
