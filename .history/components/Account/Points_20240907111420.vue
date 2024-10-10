<template>
  <div class="points">
    <h1>
      Hello {{ $i18n.locale == "en" ? user.fullNameEn : user.fullNameAr }}
    </h1>
  </div>
</template>
<script setup>
const user = useUserInfo().value;
</script>
<style lang="scss" scoped></style>
