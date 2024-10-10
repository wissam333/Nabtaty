<template>
  <div>
    <!-- mobile bottom bar -->
    <SharedNavbarBottomBar v-if="mobile"></SharedNavbarBottomBar>

    <div class="top" :class="$i18n.locale === 'en' ? 'en' : ''">
      <header
        class="d-flex align-items-start"
        :class="locale === 'ar' ? 'ar-flex' : ''"
      >
        <!-- logo for mobile and pc navbar -->
        <div>
          <nuxt-link to="/" class="logo" style="border: none !important">
            <img src="/logo/logo nabtaty copy-03.svg" alt="" />
          </nuxt-link>
        </div>

        <!-- mobile navbar & sidebar -->
        <SharedNavbarMobileNav v-if="mobile"></SharedNavbarMobileNav>

        <!-- pc navbar -->
        <SharedNavbarPcNav v-if="!mobile"></SharedNavbarPcNav>
      </header>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

let mobile = ref(false);
const checkWindowSize = () => {
  mobile.value = window.matchMedia("(max-width: 1250px)").matches;
};
if (process.client) {
  onBeforeMount(() => {
    checkWindowSize();
  });
  onMounted(() => {
    window.addEventListener("resize", checkWindowSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkWindowSize);
  });
}
</script>

<style lang="scss" scoped>
.router-link-active.router-link-exact-active {
  transition: all 0.3s ease-in-out;
  // border-bottom: 2px solid #fff;
}

.top {
  position: sticky;
  width: 100%;
  z-index: 100;
  height: 170px;
  border-bottom: 2px solid $second;
  @media (max-width: 991px) {
    height: 80px;
    border-bottom: 2px solid transparent;
  }
  header {
    width: 100vw;
    height: 170px;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.279);
    // border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-position: center;
    position: relative;
    position: fixed;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 1250px) {
      flex-direction: row;
      padding: 0px 20px;
    }
    @media (max-width: 991px) {
      height: 80px;
      padding: 10px;
    }

    // &::after {
    //   content: "";
    //   position: absolute;
    //   bottom: -15px;
    //   left: 0;
    //   right: 0;
    //   width: 100%;
    //   height: 15px;
    //   background: linear-gradient(90deg, #9e6b30, #bf9847);
    // }

    .logo {
      display: flex;
      align-items: center;
      width: 160px;
      height: 80px;
      cursor: pointer;
      @media (max-width: 1250px) {
        width: 150px;
      }

      @media (max-width: 991px) {
        width: 90px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
