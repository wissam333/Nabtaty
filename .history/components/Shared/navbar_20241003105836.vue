<template>
  <div>
    <SharedNavbarBottomBar v-if="mobile"></SharedNavbarBottomBar>
    <div class="top" :class="$i18n.locale === 'en' ? 'en' : ''">
      <header
        class="d-flex justify-content-between align-items-center"
        :class="locale === 'ar' ? 'ar-flex' : ''"
      >
        <!-- logo -->
        <div>
          <nuxt-link to="/" class="logo" style="border: none !important">
            <img src="/AlMuadalahLogoRamli.60ed7b1.png" alt="" />
          </nuxt-link>
        </div>
        <SharedNavbarMobileNav v-if="mobile"></SharedNavbarMobileNav>

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

    @media (max-width: 1250px) {
      flex-direction: row;
    }
    @media (max-width: 991px) {
      height: 80px;
    }
    // padding: 0px 30px;
    background-position: center;
    position: relative;

    position: fixed;
    top: 0;

    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 991px) {
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
      cursor: pointer;
      @media (max-width: 1250px) {
        width: 150px;
      }

      @media (max-width: 991px) {
        width: 90px;
      }

      img {
        width: 100%;
      }
    }
  }
}

.dropdown-content-products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  overflow: hidden;
  height: 0px;
  font-size: 16px;
  position: absolute;
  z-index: 1;
  min-width: 200px;
  // border: 2px solid transparent;
  border-radius: 15px 15px 15px 15px;
  transition: all 0.3s ease-in-out;
  a {
    color: $main;
    padding: 5px !important;
    text-decoration: none;
    opacity: 0;
    display: block;
    transition: 0.1s;
    //   &.router-link-active.router-link-exact-active {
    //     background-color: $main !important;
    //     color: #fff !important;
    //   }
  }

  a:hover {
    background-color: $main;
    color: #fff !important;
  }

  a:focus {
    background-color: #212121;
    color: $main;
  }

  #top:hover {
    border-radius: 8px;
  }

  button {
    border-radius: 8px;
  }
}
.paste-button:hover .dropdown-content-products {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  height: auto;
  border: 2px solid $main;
  background-color: #212121;
  padding: 15px;
  margin-top: 20px;
  a {
    opacity: 1;
  }
}
.cat-thumb {
  width: 60px;
  height: 50px;
  object-fit: cover;
  margin: 5px;
}
.login {
  svg {
    color: #fff;
    font-size: 25px;
    @media (max-width: 1250px) {
      font-size: 25px;
    }
  }
}
.dropdown-item:focus,
.dropdown-item:hover {
  color: #fff !important;
  background-color: $main;
  a {
    color: #fff !important;
  }
}
.dropdown-menu.show {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  height: auto;
  border: 2px solid #146890;
  background-color: #212121;
}
.ar {
  .dropdown-menu.show {
    text-align: right;
  }
}
.cartbox {
  position: absolute;
  top: -6px;
  right: 7px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ec9605, #ffc35f, #ec9605);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  @media (max-width: 1250px) {
    width: 20px;
    height: 20px;
    top: 5px;
    font-size: 14px;
    right: 17px;
  }
}
.search-content {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
  }

  .input {
    max-width: 190px;
    height: 100%;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    background-color: #53535f;
    caret-color: #f7f7f8;
    color: #fff;
    padding: 7px 10px;
    border: 2px solid transparent;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    margin-right: 1px;
    transition: all 0.2s ease;
    &.ar {
      text-align: right;
    }
  }

  .input::placeholder {
    color: #fff;
  }
  .input:hover {
    border: 2px solid rgba(255, 255, 255, 0.16);
  }

  .input:focus {
    border: 2px solid $main;
    background-color: #0e0e10;
  }

  .search__btn {
    border: none;
    cursor: pointer;
    background-color: $main;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    height: 100%;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search__btn:hover {
    background-color: #1e87b9;
  }
}
.paste-button {
  @media (min-width: 1250px) {
    padding: 10px 0px;
  }
}
.search,
.cart {
  svg {
    font-size: 25px;
    color: #fff;
    @media (max-width: 991px) {
      font-size: 20px;
    }
  }
}
// .dropdown-mobile {
//   display: grid;
//   grid-template-columns: 1fr;
//   border-top: 2px solid $main;
//   border-bottom: 2px solid $main;
//   display: none;
//   .dropdown-item {
//     display: flex;
//     align-items: center;
//   }
// }

.cat-links {
  padding-top: 30px !important;
  li {
    font-size: 14px !important;
    @media (max-width: 1650px) {
      padding: 5px;
      font-size: 13px !important;
      margin: 0 3px;
    }
    @media (max-width: 1450px) {
      padding: 0px;
      font-size: 12px !important;
      margin: 0;
    }
  }
}
</style>
