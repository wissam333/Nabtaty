<template>
  <div class="about nav-margin">
    <h1>
      <img width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
      </span>
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
