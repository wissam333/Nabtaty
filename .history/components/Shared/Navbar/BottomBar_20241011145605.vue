<template>
  <div class="d-flex align-items-center bottom-bar">
    <!-- user -->
    <!-- <nuxt-link
      v-if="!isAuth.isAuthenticated"
      to="/auth/Login"
      class="login pointer mx-2 item"
    >
      <font-awesome :icon="['far', 'user']" />
      <p>{{ $i18n.locale === "ar" ? "الحساب" : "Account" }}</p>
    </nuxt-link>
    <nuxt-link v-else class="pointer login text-center mx-2 item" to="/Account">
      <font-awesome :icon="['far', 'user']" />
      <p>{{ $i18n.locale === "ar" ? "الحساب" : "Account" }}</p>
    </nuxt-link> -->

    <!-- <ul v-if="isAuth.isAuthenticated" class="dropdown-menu">
        <NuxtLink to="/Account" class="" style="border-bottom: none">
          <li class="dropdown-item text-white">
            {{
              useUserInfo().value?.fullNameAr ??
              useUserInfo().value?.fullNameEn ??
              $t("My Account")
            }}
          </li>
        </NuxtLink>
        <li class="dropdown-item" @click.stop="logout">
          <NuxtLink to="/" class="text-white" style="border-bottom: none">
            {{ $i18n.locale === "ar" ? "تسجيل الخروج" : "Log Out" }}</NuxtLink
          >
        </li>
      </ul> -->
    <!-- Fav -->
    <nuxt-link
      to="/Fav"
      class="cart pointer mx-2 item"
      style="position: relative"
    >
      <font-awesome :icon="['fas', 'heart']" />
      <p>{{ $i18n.locale === "ar" ? "المفضلة" : "Favourite" }}</p>
    </nuxt-link>

    <!-- cart -->
    <nuxt-link
      to="/Cart"
      class="cart pointer mx-2 item"
      style="position: relative"
    >
      <small class="cartbox" v-if="cart.totalQty > 0">{{
        cart.totalQty
      }}</small>
      <font-awesome :icon="['fas', 'cart-shopping']" />
      <p>{{ $i18n.locale === "ar" ? "السلة" : "Cart" }}</p>
    </nuxt-link>
    <!-- search -->
    <div class="search pointer mx-2 item" @click.stop="toggle">
      <font-awesome :icon="['fas', 'magnifying-glass']" />
      <p>{{ $i18n.locale === "ar" ? "البحث" : "Search" }}</p>
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

    <div
      class="buttons item"
      :class="locale === 'ar' ? 'ar' : ''"
      style="
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #fff;
      "
    >
      <font-awesome :icon="['fas', 'globe']" />
      <ElementsLanguageToggle></ElementsLanguageToggle>
    </div>
  </div>
</template>
<script setup>
const isAuth = useAuth().value;
const cart = useCart();

// search
const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};
let searchText = ref("");
const search = async () => {
  let a = searchText.value;
  searchText.value = "";
  return navigateTo(`/SearchProducts/${a}`);
};
</script>
<style lang="scss" scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: $main;
  justify-content: space-evenly;
  z-index: 999;
  .buttons {
    padding: 0 !important;
    position: relative;
    svg {
      margin-bottom: 0px;
    }
  }
  .search,
  .cart,
  .login {
    svg {
      margin-bottom: 3px;
    }
  }
  .item {
    margin: 0px 0px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    p {
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 0;
    }
    svg {
      font-size: 20px;
      width: 25px;
      height: 25px;
      color: #fff !important;
      margin-bottom: 3px;
    }
    .language-picker {
      margin-top: 0px !important;
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
</style>
