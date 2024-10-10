<template>
  <div class="points">
    <h2 class="text-center mt-4 fw-bold color">
      {{ $i18n.locale == "en" ? "Hello" : "مرحباً" }}
      {{ user?.fullNameEn ?? user?.nameEn }}
    </h2>
    <div class="container">
      <div class="wrap">
        <div class="card text-center">
          <div class="card__border"></div>
          <div class="d-flex">
            {{ $i18n.locale == "en" ? "You have" : "لديك" }}
            <span class="point"> {{ user?.clientPoints }} </span>
            {{ $i18n.locale == "en" ? "Points" : "نقطة" }}
          </div>
          <p class="mt-5">
            {{ $i18n.locale == "en" ? "Valid until" : "صالحة لغاية " }}
            2024/12/15 (Static test)
          </p>
        </div>
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
    .wrap {
      .card {
        border-radius: 50%;
        height: 300px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 60px;
        color: #fff;
        background: linear-gradient(to left, $main, $second, $main)
          linear-gradient(to top, #bf9847, #e3c472, #bf9847);
        box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
        border: none;
        .card__border {
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 8px);
          height: calc(100% + 8px);
          background-image: linear-gradient(0deg, hsl(0, 0%, 100%) -50%);

          &::before {
            position: absolute;
            content: " ";
            display: block;
            width: 60px;
            height: 500px;
            left: 40%;
            top: -30%;
            border-radius: 1rem;
            background: #ffc156;
            animation: rotation 5000ms infinite linear;
          }
        }
        @keyframes rotation {
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
