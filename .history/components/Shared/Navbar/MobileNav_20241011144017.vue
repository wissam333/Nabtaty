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
        <img src="/photos/nabt.png" alt="" />
      </nuxt-link>
      <ul>
        <li v-for="menu in Menus" :key="menu.id" class="menu-item">
          <div
            class="paste-button"
            @click.stop="
              openMedia === menu.id ? (openMedia = '') : (openMedia = menu.id)
            "
          >
            <div v-if="menu.type === 'Drop Down Menu'">
              <nuxt-link :to="`${menu.pageUrl}`" class="button">
                {{ locale === "ar" ? menu.name : menu.englishName }}
                <font-awesome class="mx-1" :icon="['fas', 'caret-down']" />
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
        <li
          class="menu-item color"
          v-if="isAuth.isAuthenticated"
          style="padding: 16px 12px"
        >
          <div @click="logoutModal = true">
            <font-awesome :icon="['fas', 'power-off']" />
            {{ $i18n.locale === "ar" ? "تسجيل الخروج" : "Log out" }}
          </div>
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

const Menus = [
  { id: 3, englishName: "Green Plants", name: "النباتات الخضراء" },
  { id: 4, englishName: "Flower Plants", name: "نباتات الزهور" },
  { id: 5, englishName: "Cacti", name: "الصبار" },
  { id: 6, englishName: "Hanging Plants", name: "النباتات المعلقة" },
  { id: 7, englishName: "Tree Plants", name: "نباتات الأشجار" },
  { id: 8, englishName: "Gifts", name: "الهدايا" },
  { id: 9, englishName: "Subscription", name: "الاشتراك" },
  {
    id: 10,
    englishName: "Accessories and Pottery",
    name: "الاكسسوارات والفخار",
  },
];

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
  height: calc(100vh - 66px);
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
  top: -150px;
  right: 20%;
  padding: 12px 32px;
  @media (max-width: 991px) {
    padding: 76.5px 10px 0px 10px;
  }
  @media (max-width: 768px) {
    padding: 76.5px 10px 0px 10px;
  }

  .img {
    @media (max-width: 1250px) {
      width: 200px;
    }
    @media (max-width: 991px) {
      width: 110px;
      margin: 0px;
    }
  }

  &.en {
    top: -150px;
    left: 20%;
    right: auto !important;
    padding: 12px 32px;
    @media (max-width: 991px) {
      padding: 76.5px 10px;
    }
    @media (max-width: 768px) {
      padding: 76.5px 10px;
    }
  }
  img {
    @media (max-width: 1250px) {
      width: 200px;
    }
    @media (max-width: 991px) {
      width: 110px;
      margin: 0px;
    }
  }
}
</style>
