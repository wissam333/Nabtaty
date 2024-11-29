<template>
  <!-- burger -->
  <div
    class="burger"
    @click.stop="useOpenNav().value = !useOpenNav().value"
    :class="useOpenNav().value ? 'open' : ''"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>

  <!-- Mobile -->
  <div
    class="navCollapsed"
    @click.stop="useOpenNav().value = true"
    :class="useOpenNav().value ? 'open' : ''"
  >
    <div class="container">
      <nuxt-link
        to="/"
        class="logoMob"
        style="border: none !important"
        :class="$i18n.locale === 'en' ? 'en' : ''"
      >
        <img :src="`${apiBase}/${Logo?.data?.photoPath}`" alt="Logo" />
      </nuxt-link>
      <ul>
        <li v-for="menu in Menus" :key="menu.id" class="menu-item">
          <div
            class="paste-button"
            @click.stop="
              openMedia === menu.id ? (openMedia = '') : (openMedia = menu.id)
            "
          >
            <div>
              <nuxt-link
                class="button"
                :to="`/Products/${menu.id}`"
                @click.stop="useOpenNav().value = false"
              >
                {{ menu.category_name }}
              </nuxt-link>
            </div>
          </div>
          <!-- Static -->
        </li>
        <li @click.stop="useOpenNav().value = false">
          <!-- Fav -->
          <nuxt-link
            to="/Fav"
            class="cart pointer mx-3 item d-flex align-items-center"
            style="position: relative"
          >
            <font-awesome :icon="['fas', 'heart']" />
            <span class="mx-2">{{
              $i18n.locale === "ar" ? "المفضلة" : "Favourite"
            }}</span>
          </nuxt-link>
        </li>
        <li @click.stop="useOpenNav().value = false">
          <!-- cart -->
          <nuxt-link
            to="/Cart"
            class="cart pointer mx-3 item d-flex align-items-center"
            style="position: relative"
          >
            <small class="cartbox" v-if="cart.totalQty > 0">{{
              cart.totalQty
            }}</small>
            <font-awesome :icon="['fas', 'cart-shopping']" />
            <span class="mx-2">{{
              $i18n.locale === "ar" ? "السلة" : "Cart"
            }}</span>
          </nuxt-link>
        </li>
        <li>
          <!-- search -->
          <div
            class="search pointer mx-3 item d-flex align-items-center"
            style="color: rgba(0, 61, 46, 0.7607843137)"
            @click.stop="toggle"
          >
            <font-awesome :icon="['fas', 'magnifying-glass']" />
            <span class="mx-2">{{
              $i18n.locale === "ar" ? "البحث" : "Search"
            }}</span>
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
        </li>

        <li
          class="menu-item color"
          v-if="useUserInfo().value?.email"
          style="padding: 16px 12px"
        >
          <div @click="logoutModal = true">
            <font-awesome :icon="['fas', 'power-off']" />
            {{ $i18n.locale === "ar" ? "تسجيل الخروج" : "Log out" }}
          </div>
        </li>
        <li
          v-if="useUserInfo().value?.is_admin"
          class="menu-item color"
          style="padding: 16px 12px"
        >
          <nuxt-link to="/admin" class="fw-bold" style="color: #073e2f">{{
            $i18n.locale === "ar" ? "لوحة التحكم" : "Admin Panel"
          }}</nuxt-link>
        </li>
      </ul>
    </div>
    <!-- logout modal -->
    <ElementsAppModal :isOpen="logoutModal" @updateIsOpen="updateLogoutModal">
      <template #header>
        <h5 class="color">
          {{ $i18n.locale === "ar" ? "تسجيل الخروج" : "Logging out" }}
        </h5>
      </template>
      <template #content>
        <p>
          {{
            $i18n.locale === "ar"
              ? "هل تريد تسجيل الخروج؟"
              : "Do you want to log out?"
          }}
        </p>
      </template>
      <template #footer>
        <button
          class="btn text-white"
          style="background-color: #bf9847"
          @click="logoutModal = false"
        >
          {{ $i18n.locale === "ar" ? "إغلاق" : "Close" }}
        </button>
        <button
          class="btn"
          @click="
            logout();
            logoutModal = false;
          "
        >
          {{ $i18n.locale === "ar" ? "تسجيل الخروج" : "Log out" }}
        </button>
      </template>
    </ElementsAppModal>
  </div>
</template>
<script setup>
const { locale } = useI18n();
const { $awn } = useNuxtApp();
const {
  public: { apiBase, api },
} = useRuntimeConfig();

let Menus = ref();
if (locale.value === "ar") {
  const { data: MenusData, pending } = await useFetch(
    `${api.findAllCategories}`,
    {
      credentials: "include",
      baseURL: apiBase,
      headers: {
        "accept-language": "ar",
      },
    }
  );
  watchEffect(() => {
    if (process.client) {
      if (MenusData.value) {
        Menus.value = MenusData.value.sort((a, b) => a.priority - b.priority);
      }
    }
  });
} else {
  const { data: MenusData, pending } = await useFetch(
    `${api.findAllCategories}`,
    {
      credentials: "include",
      baseURL: apiBase,
      headers: {
        "accept-language": "en",
      },
    }
  );
  watchEffect(() => {
    if (process.client) {
      if (MenusData.value) {
        Menus.value = MenusData.value.sort((a, b) => a.priority - b.priority);
      }
    }
  });
}

// search
const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};
let searchText = ref("");
const search = async () => {
  let a = searchText.value;
  searchText.value = "";
  useOpenNav().value = false;
  return navigateTo(`/Search/${a}`);
};

let openMedia = ref(false);
const isAuth = useAuth().value;

let logoutModal = ref(false);
const updateLogoutModal = (value) => {
  logoutModal.value = value;
};

const cart = useCart();
const logout = async () => {
  const { data } = await useFetch(`/auth/logout`, {
    credentials: "include",
    baseURL: apiBase,
    method: "GET",
  });

  useUserInfo().value = null;
  localStorage.removeItem("userInfo");
  if (localStorage.getItem("cart")) {
    localStorage.removeItem("cart");
    useCart().value.items = new Array();
    useCart().value.totalPrice = 0;
    useCart().value.totalQty = 0;
  }
  useAuth().value.isAuthenticated = false;
  $awn.success(
    locale.value === "ar"
      ? "تم تسجيل الخروج بنجاح"
      : "You have successfully logged out",
    {
      durations: { global: 5000 },
    }
  );
  location.reload();
  return navigateTo("/");
};

const { data: Logo, pending } = await useFetch(`${api.GetActiveLogo}`, {
  baseURL: apiBase,
  credentials: "include",
});
</script>
<style lang="scss" scoped>
.burger {
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  justify-content: space-around;
  margin: 0px;
  z-index: 10001;
  padding: 5px;
  border-radius: 6px;
  &.open {
    span {
      &:nth-child(1) {
        transform: rotate(45deg) translate(6px, 8px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -8px);
      }
    }
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background-color: $main;
    transition: all 0.3s ease-in-out;
  }
}

.navCollapsed {
  overflow-y: auto;
  position: fixed;
  width: 100vw;
  z-index: 10000;
  color: #fff;
  top: 0;
  left: 0;
  transform: translateX(100%);
  right: 0;
  bottom: 0;
  background: rgb(255 255 255 / 92%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 100dvh;
  transition: all 0.3s ease-in-out;
  border: 1px solid $second;

  &.open {
    transform: translateX(20%);
  }

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-right: 20%;
    padding-left: 0;
    margin-top: 170px;
    border-top: 2px solid $second;
    max-width: none;

    @media (max-width: 991px) {
      margin-top: 78px;
    }
    // .socials {
    //   display: flex;
    //   justify-content: flex-start;
    //   align-items: center;
    //   margin: 0px 15px;
    //   &.ar {
    //     justify-content: flex-end;
    //   }
    //   .socials-img {
    //     width: 35px;
    //     margin: 5px;
    //     img {
    //       width: 100%;
    //     }
    //   }
    // }
    ul {
      margin: 0;
      color: #fff;
      padding: 20px 0px 0px 0px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      a {
        color: $main;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          color: $main;
        }
      }

      li {
        padding: 10px;
        font-size: 16px;
        margin: 0 15px;
        width: 100%;
        border-bottom: 1px solid #ccb47370;
        @media (max-width: 1480px) {
          padding: 16px 0px;
          font-size: 14px;
          margin: 0;
        }
        .paste-button {
          .button,
          a {
            padding: 0px 12px;
          }
          .dropdown-content {
            font-weight: 300 !important;
            display: flex;
            flex-direction: column;
            background: rgba(210, 210, 210, 0.34);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            height: 0;
            padding: 0px;
            width: 100%;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            opacity: 0;
            &.active {
              height: auto;
              padding: 0px 20px;
              opacity: 1;
              margin-top: 8px;
            }

            a {
              padding: 16px 0px;
            }
          }
        }
      }
    }
  }
}

.top {
  &.en {
    .navCollapsed {
      transform: translateX(-100%);
      &.open {
        transform: translateX(-20%);
      }
      .container {
        padding-right: 0;
        padding-left: 20%;
      }
    }
  }
}
.logoMob {
  position: absolute;
  top: -194px;
  right: 20%;
  padding: 12px 32px;
  @media (max-width: 991px) {
    padding: 89.5px 11px;
  }
  @media (max-width: 768px) {
    padding: 88.5px 10px 0px 10px;
  }

  .img {
    @media (max-width: 1250px) {
      width: 200px;
    }

    @media (max-width: 991px) {
      width: 130px;
      margin: 0px;
    }
  }

  &.en {
    top: -194px;
    left: 20%;
    right: auto !important;
    padding: 12px 32px;
    @media (max-width: 991px) {
      padding: 89.5px 11px;
    }
    @media (max-width: 768px) {
      padding: 88.5px 10px 0px 10px;
    }
  }
  img {
    @media (max-width: 1250px) {
      width: 200px;
    }

    @media (max-width: 991px) {
      width: 130px;
      margin: 0px;
    }
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
.cartbox {
  position: absolute;
  top: -8px;
  right: 7px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(45deg, $main, $second, $main);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  @media (max-width: 1250px) {
    width: 20px;
    height: 20px;
    top: -12px;
    font-size: 14px;
    inset-inline-start: -8px;
  }
}
</style>
