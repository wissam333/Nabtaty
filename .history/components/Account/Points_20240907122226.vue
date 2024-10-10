<template>
  <div class="points">
    <h2 class="text-center mt-4 fw-bold color">
      {{ $i18n.locale == "en" ? "Hello" : "مرحباً" }}
      {{ $i18n.locale == "en" ? user.fullNameEn : user.fullNameAr }}
    </h2>
    <div class="container">
      <div class="wrap">
        <div class="card text-center">
          <div class="card__border"></div>
          {{ $i18n.locale == "en" ? "You have" : "لديك" }}
          <span class="point"> {{ Points.data[0].points }} </span>
          {{ $i18n.locale == "en" ? "Points" : "نقطة" }}
          <p class="mt-5">
            {{ $i18n.locale == "en" ? "Valid until" : "صالحة لغاية " }}
            2024/12/15
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const user = useUserInfo().value;
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { data: Points, pending } = await useGetSiteApi().GetAll(
  `${api.GetPoints}`
);
</script>
<style lang="scss" scoped>
.points {
  padding-bottom: 40px;
  .container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .wrap {
      .card {
        padding: 30px 60px;
        color: #fff;
        background: linear-gradient(to left, #146890, #45b2e9, #146890);
        display: block;
        border-radius: 1rem;
        // box-shadow: 3px 7px 13px 0px #44b1e8;
        .card__border {
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          background-image: linear-gradient(0deg, hsl(0, 0%, 100%) -50%);
          border-radius: 1rem;
          &::before {
            position: absolute;
            content: " ";
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background: $second;
            animation: rotation_481 5000ms infinite linear;
          }
        }
        @keyframes rotation_481 {
          0% {
            transform: rotateZ(0deg);
          }

          0% {
            transform: rotateZ(360deg);
          }
        }

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
}
</style>
