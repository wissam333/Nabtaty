<template>
  <div>
    <!-- mobile bottom bar -->
    <SharedNavbarBottomBar v-if="mobile"></SharedNavbarBottomBar>

    <div class="top" :class="$i18n.locale === 'en' ? 'en' : ''">
      <header
        class="d-flex align-items-start"
        :class="locale === 'ar' ? 'ar-flex' : ''"
      >
        <div class="wrapper">
          <!-- logo for mobile and pc navbar -->
          <div>
            <nuxt-link to="/" class="logo" style="border: none !important">
              <img src="/logo/logo nabtaty copy-03.svg" alt="" />
            </nuxt-link>
          </div>

          <div class="buttons" :class="locale === 'ar' ? 'ar' : ''" style="">
            <!-- user -->
            <nuxt-link
              v-if="!isAuth.isAuthenticated"
              to="/auth/Login"
              class="login mx-2 pointer"
            >
              <font-awesome :icon="['far', 'user']" />
            </nuxt-link>
            <div
              v-else
              class="pointer login text-center dropdown mx-2"
              aria-current="page"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              <font-awesome :icon="['far', 'user']" />
            </div>
            <ul v-if="isAuth.isAuthenticated" class="dropdown-menu">
              <NuxtLink to="/Account" class="" style="border-bottom: none">
                <li class="dropdown-item text-white">
                  {{
                    useUserInfo().value?.fullNameAr ??
                    useUserInfo().value?.fullNameEn ??
                    useUserInfo().value?.nameAr ??
                    useUserInfo().value?.nameEn ??
                    $t("My Account")
                  }}
                </li>
              </NuxtLink>
              <li class="dropdown-item" @click.stop="logout">
                <NuxtLink to="/" class="text-white" style="border-bottom: none">
                  {{
                    $i18n.locale === "ar" ? "تسجيل الخروج" : "Log Out"
                  }}</NuxtLink
                >
              </li>
            </ul>
            <!-- cart -->
            <nuxt-link
              to="/Cart"
              class="cart mx-2 pointer"
              style="position: relative"
            >
              <small class="cartbox" v-if="cart.totalQty > 0">{{
                cart.totalQty
              }}</small>
              <font-awesome :icon="['fas', 'cart-shopping']" />
            </nuxt-link>
            <!-- search -->
            <div
              class="search mx-2 pointer"
              @click.stop="toggle"
              v-tooltip.bottom="$i18n.locale === 'ar' ? 'البحث' : 'Search'"
            >
              <font-awesome :icon="['fas', 'magnifying-glass']" />
            </div>

            <Popover ref="op" class="search-content">
              <div class="flex flex-col gap-4 w-[25rem]">
                <form class="container" @submit.prevent="search()">
                  <input
                    :class="$i18n.locale === 'ar' ? 'ar' : ''"
                    v-model="searchText"
                    type="text"
                    name="text"
                    class="input"
                    :placeholder="
                      $i18n.locale === 'ar'
                        ? 'ابحث بجميع المنتجات'
                        : 'Search in all products'
                    "
                    required
                  />
                  <button class="search__btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                        fill="#efeff1"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </Popover>
          </div>
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

const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};

const isAuth = useAuth().value;
const cart = useCart();
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
  height: 125px;
  border-bottom: 2px solid $second;
  @media (max-width: 991px) {
    height: 80px;
    border-bottom: 2px solid transparent;
  }
  header {
    width: 100vw;
    height: 125px;
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
      height: 100px;
      margin: 0px 10px;
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

.buttons {
  display: flex;
  align-items: center;
  text-wrap: nowrap;
  // position: absolute;
  // top: 0;
  // left: auto;
  // right: 0;
  // padding: 35px;
  svg {
    color: #bf9847;
    width: 25px;
    height: 25px;
    font-size: 25px;
  }
  // &.ar {
  //   left: 0;
  //   right: auto;
  // }
}
.wrapper{
  display: flex;
  
}
</style>
