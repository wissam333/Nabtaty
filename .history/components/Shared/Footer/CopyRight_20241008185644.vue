<template>
  <div class="c">
    <p>
      &copy;
      <span class="name">
        {{ $t("Baddar Furniture") }}
      </span>
      {{ new Date().getFullYear() }}.
      {{
        $i18n.locale === "ar" ? " كل الحقوق محفوظة." : "All Rights Reserved."
      }}
    </p>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.c {
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding-bottom: 1px;
  margin: 0px 0px 0px 0px;
  padding-top: 10px;
  background: linear-gradient(to left, $main, $second, $main);

  @media (max-width: 768px) {
    width: 100vw;
    margin: 60px 0px 0px 0px;
    font-size: 15px;
  }

  .name {
    color: #fff;
    font-weight: bold;
  }
}
</style>
