<template>
  <!-- burger -->
  <div
    v-if="mobile"
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
    v-if="mobile"
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
        <img src="/AlMuadalahLogoRamli.60ed7b1.png" alt="" />
      </nuxt-link>
      <ul>
        <li
          v-for="menu in Menus?.items"
          :key="menu.id"
          class="menu-item"
          v-show="menu.isActive && !menu.parentId"
        >
          <div
            class="paste-button"
            @click.stop="
              openMedia === menu.id ? (openMedia = '') : (openMedia = menu.id)
            "
          >
            <div v-if="menu.type === 'Drop Down Menu'">
              <nuxt-link :to="`${menu.pageUrl}`" class="button">
                {{ locale === "ar" ? menu.name : menu.englishName }}
              </nuxt-link>
              <div
                class="dropdown-content"
                :class="openMedia === menu.id ? 'active' : ''"
              >
                <nuxt-link
                  @click.stop="useOpenNav().value = false"
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
              <nuxt-link
                class="button"
                :to="menu.pageUrl"
                @click.stop="useOpenNav().value = false"
              >
                {{ locale === "ar" ? menu.name : menu.englishName }}
              </nuxt-link>
            </div>
          </div>
          <!-- Static -->
        </li>
        <li class="menu-item" v-if="isAuth.isAuthenticated">
          <div @click="logoutModal = true">
            <font-awesome :icon="['fas', 'power-off']" />
            {{ $i18n.locale === "ar" ? "تسجيل الخروج" : "Log out" }}
          </div>
        </li>
      </ul>
    </div>
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
        style="background-color: #45b2e9"
        @click="logoutModal = false"
      >
        {{ $i18n.locale === "ar" ? "إغلاق" : "Close" }}
      </button>
      <button
        class="btn btn-mainary"
        @click="
          logout();
          logoutModal = false;
        "
      >
        {{ $i18n.locale === "ar" ? "تسجيل الخروج" : "Log out" }}
      </button>
    </template>
  </ElementsAppModal>
</template>
<script setup>
const { locale } = useI18n();
const { $awn } = useNuxtApp();

const Menus = useMainMenus().value;

let openMedia = ref(false);

const isAuth = useAuth().value;
let logoutModal = ref(false);
const updateLogoutModal = (value) => {
  logoutModal.value = value;
};

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
</script>
<style lang="scss"></style>
