<template>
  <div class="contact">
    <div class="container">
      <form action="">
        <h1>
          {{ $i18n.locale === "ar" ? "تواصل معنا" : "Contact Us" }}
        </h1>
      </form>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.contact {
  h1 {
    font-size: 60px;
    font-family: Herova, "Arial", "sans-serif";
    color: $main;
    margin-top: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
