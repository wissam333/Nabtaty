<template>
  <!-- Pc -->
  <nav class="d-flex flex-column justify-content-between">
    <ul class="d-flex" :class="locale === 'ar' ? 'ar-flex' : ''">
      <li
        v-for="menu in Menus?.items"
        :key="menu?.id"
        class="menu-item"
        v-show="menu.isActive && !menu.parentId"
      >
        <div class="paste-button">
          <div v-if="menu.type == 'Drop Down Menu'">
            <nuxt-link
              :to="`${menu.pageUrl}`"
              class="button d-flex align-items-center"
              :class="locale === 'ar' ? 'ar-flex' : ''"
            >
              {{ locale === "ar" ? menu.name : menu.englishName }}
              <font-awesome
                :class="locale === 'ar' ? 'ms-2' : 'ms-2'"
                :icon="['fas', 'caret-down']"
              />
            </nuxt-link>
            <div class="dropdown-content" :class="locale === 'ar' ? 'ar' : ''">
              <nuxt-link
                v-for="child in menu.children"
                :key="child.id"
                :to="`${child.pageUrl}`"
                class="dropdown-item"
              >
                {{ locale === "ar" ? child.name : child.englishName }}
              </nuxt-link>
            </div>
          </div>
          <div v-else>
            <nuxt-link class="button" :to="menu.pageUrl">
              {{ locale === "ar" ? menu.name : menu.englishName }}
            </nuxt-link>
          </div>
        </div>
      </li>
      <li class="lang-toggle" :class="$i18n.locale === 'en' ? 'en' : ''">
        <ElementsLanguageToggle :color="`#fff`"></ElementsLanguageToggle>
      </li>
    </ul>
    <!-- <ul class="d-flex cat-links">
            <li
              class="menu-item"
              v-for="child in useAllProductsTypes().value"
              :key="child.id"
            >
              <div class="paste-button">
                <div>
                  <nuxt-link
                    :to="`/FoodByCategory/${child.id}`"
                    class="button fw-bold"
                  >
                    {{ locale === "ar" ? child.nameAr : child.nameEn }}
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ul> -->
  </nav>

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
          {{ $i18n.locale === "ar" ? "تسجيل الخروج" : "Log Out" }}</NuxtLink
        >
      </li>
    </ul>
    <!-- cart -->
    <nuxt-link to="/Cart" class="cart mx-2 pointer" style="position: relative">
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

  <!-- social -->
  <div class="social-icons" :class="locale === 'ar' ? 'ar' : ''">
    <a
      :href="Socials?.items[0]?.pageUrl"
      target="_blank"
      class="Social-item mx-2"
      style=""
    >
      <font-awesome :icon="['fab', 'x-twitter']" />
    </a>

    <a
      :href="Socials?.items[1]?.pageUrl"
      target="_blank"
      class="Social-item mx-2"
      style=""
    >
      <font-awesome :icon="['fab', 'youtube']" />
    </a>

    <a
      :href="Socials?.items[2]?.pageUrl"
      target="_blank"
      class="Social-item mx-2"
      style=""
    >
      <font-awesome :icon="['fab', 'facebook']" />
    </a>
  </div>
</template>
<script setup>
const { locale } = useI18n();
const { $awn } = useNuxtApp();

const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};

const isAuth = useAuth().value;
const cart = useCart();

const Menus = useMainMenus().value;
const Socials = useSocialMenus().value;

// log out
const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("accountType");
  localStorage.removeItem("UserId");
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
  return navigateTo("/");
};

// search
let searchText = ref("");
const search = async () => {
  let a = searchText.value;
  searchText.value = "";
  return navigateTo(`/SearchProducts/${a}`);
};
</script>
<style lang="scss"></style>
