<template>
  <div class="points">
    <h1 class="text-center mt-4 fw-bold color">
      {{ $i18n.locale == "en" ? "Hello" : "مرحباً" }}
      {{ $i18n.locale == "en" ? user.fullNameEn : user.fullNameAr }}
    </h1>
    <div class="container">
      <div class="card">
        {{ $i18n.locale == "en" ? "You have" : "لديك" }}

        50 {{ $i18n.locale == "en" ? "You have" : "لديك" }}
      </div>
    </div>
  </div>
</template>
<script setup>
const user = useUserInfo().value;
</script>
<style lang="scss" scoped>
.points {
  .container {
    display: flex;
    justify-content: center;
  }
}
</style>
