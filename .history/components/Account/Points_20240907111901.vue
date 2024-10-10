<template>
  <div class="points">
    <h1 class="text-center">
      Hello {{ $i18n.locale == "en" ? user.fullNameEn : user.fullNameAr }}
    </h1>
  </div>
</template>
<script setup>
const user = useUserInfo().value;
</script>
<style lang="scss" scoped>
.points {
  h1 {
    color: #000;
  }
}
</style>
