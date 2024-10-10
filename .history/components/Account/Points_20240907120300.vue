<template>
  <div class="points">
    <h2 class="text-center mt-4 fw-bold color">
      {{ $i18n.locale == "en" ? "Hello" : "مرحباً" }}
      {{ $i18n.locale == "en" ? user.fullNameEn : user.fullNameAr }}
    </h2>
    <div class="container">
      <div class="card text-center">
        <div class="card__border"></div>
        {{ $i18n.locale == "en" ? "You have" : "لديك" }}
        <span class="point"> {{ Points.data[0].points }} </span>
        {{ $i18n.locale == "en" ? "Points" : "نقطة" }}
        <p class="mt-5">
          {{ $i18n.locale == "en" ? "Valid until" : "صالحة لغاية " }} 2024/12/15
        </p>
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
    .card {
      padding: 30px 60px;
      color: #fff;
      background: linear-gradient(to left, #146890, #45b2e9, #146890);
      display: block;
      box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;

      .card__border {
        overflow: hidden;
        pointer-events: none;

        position: absolute;
        z-index: -10;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: calc(100% + 2px);
        height: calc(100% + 2px);
        background-image: linear-gradient(
          0deg,
          hsl(0, 0%, 100%) -50%,
          hsl(0, 0%, 40%) 100%
        );

        border-radius: 1rem;
        &::before {
          content: "";
          pointer-events: none;
          position: fixed;
          z-index: 200;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%), rotate(0deg);
          transform-origin: left;
          width: 200%;
          height: 10rem;
          background-image: linear-gradient(
            0deg,
            hsla(0, 0%, 100%, 0) 0%,
            $main 40%,
            $main 60%,
            hsla(0, 0%, 40%, 0) 100%
          );

          animation: rotate 5s linear infinite;
        }
      }

      @keyframes rotate {
        to {
          transform: rotate(360deg);
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
</style>
