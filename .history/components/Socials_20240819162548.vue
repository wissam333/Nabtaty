<template>
  <div class="d-flex socials" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <div class="socials-img">
      <a href="https://www.facebook.com/" target="_blank" class="mx-2">
        <font-awesome :icon="['fab', 'facebook']" />
      </a>
    </div>

    <div class="socials-img">
      <a href="https://web.whatsapp.com/" target="_blank" class="mx-2">
        <font-awesome :icon="['fab', 'whatsapp']" />
      </a>
    </div>

    <div class="socials-img">
      <a href="https://x.com/" target="_blank" class="mx-2">
        <font-awesome :icon="['fab', 'x-twitter']" />
      </a>
    </div>

    <div class="socials-img">
      <a href="https://www.linkedin.com/" target="_blank" class="mx-2">
        <font-awesome :icon="['fab', 'linkedin']" />
      </a>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.socials {
  padding: 0px 30px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 110px;
  z-index: 3;
  @media (max-width: 991px) {
    padding: 0px 20px;
    height: 80px;
  }

  &.ar {
    left: auto !important;
    right: 0;
  }
  @media (max-width: 1200px) {
    flex-direction: row;
    margin-bottom: 50px;
  }

  &.ar {
    .socials-img {
      margin-left: 20px !important;
      margin-right: 0px !important;
    }
  }
  .socials-img {
    width: 40px;
    font-size: 35px;
    margin-right: 20px;
    display: flex;
    justify-content: center;

    a {
      color: $basic;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: $main;
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>
