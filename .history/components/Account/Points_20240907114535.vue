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
  padding-bottom: 40px;
  .container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .card {
      padding: 30px 60px;
      color: #fff;
      background: linear-gradient(to left, #146890, #45b2e9, #146890);
      display: block;
      box-shadow: 3px 7px 13px 0px #44b1e8;
      .point {
        background: linear-gradient(to left, #ec9605, #ffc35f, #ec9605);
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
