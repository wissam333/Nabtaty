<template>
  <div class="points">
    <h1 class="text-center mt-4 fw-bold color">
      {{ $i18n.locale == "en" ? "Hello" : "مرحباً" }}
      {{ $i18n.locale == "en" ? user.fullNameEn : user.fullNameAr }}
    </h1>
    <div class="container">
      <div class="card">
        {{ $i18n.locale == "en" ? "You have" : "لديك" }}
        <span class="point"> 50 </span>
        {{ $i18n.locale == "en" ? "Points" : "نقطة" }}
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
    margin-top: 40px;
    .card {
      padding: 50px;
      color: #fff;
      background: linear-gradient(45deg, #146890, #45b2e9, #146890);
      display: block;
      .point {
        background: linear-gradient(45deg, #ec9605, #ffc35f, #ec9605);
        margin: 0px 5px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
