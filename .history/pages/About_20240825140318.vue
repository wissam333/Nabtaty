<template>
  <div class="about">
    <h1>
      <img width="60" src="/photos/1-1.png" alt="" />
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
    text-align: center;
    color: $main;
    font-weight: bold;
  }
}
</style>
