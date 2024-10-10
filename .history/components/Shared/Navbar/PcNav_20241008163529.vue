<template>
  <!-- Pc -->
  <nav class="d-flex flex-column justify-content-between">
    <ul class="d-flex" :class="locale === 'ar' ? 'ar-flex' : ''">
      <li v-for="menu in Menus" :key="menu?.id" class="menu-item">
        <div class="paste-button">
          <!-- <div v-if="menu.type == 'Drop Down Menu'">
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
          </div> -->
          <div>
            <nuxt-link class="button" :to="menu?.pageUrl">
              {{ $i18n.locale === "ar" ? menu.name : menu.englishName }}
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
  <!-- <div class="social-icons" :class="locale === 'ar' ? 'ar' : ''">
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
  </div> -->
</template>
<script setup>
import Menu from "primevue/menu";

const { locale } = useI18n();
const { $awn } = useNuxtApp();

const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};

const isAuth = useAuth().value;
const cart = useCart();

const Menus = [
  { id: 3, englishName: "Ferns", name: "السرخسيات" },
  { id: 4, englishName: "Flowering Plants", name: "النباتات المزهرة" },
  { id: 5, englishName: "Herbs", name: "الأعشاب" },
  { id: 6, englishName: "Air Plants", name: "نباتات الهواء" },
  { id: 7, englishName: "Climbers", name: "النباتات المتسلقة" },
  { id: 8, englishName: "Aquatic Plants", name: "النباتات المائية" },
  { id: 9, englishName: "Trees", name: "الأشجار" },
  { id: 10, englishName: "Shrubs", name: "الشجيرات" },
];

// const Socials = useSocialMenus().value;

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
<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  align-items: center;
  color: $main;
  border-radius: 16px;
  // padding: 10px;
  padding-top: 0px;
  // box-shadow: -2px 2px 8px 0px #333;
  ul {
    background: linear-gradient(to left, $main, $second, $main);
    width: 100vw;
    margin: 0;
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 0px 10px;
    a {
      color: #fff;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        color: $main;
      }
    }

    li {
      font-size: 14px;
      margin: 0 4px;
      padding: 2px 10px;
      font-weight: bold;
      a {
        padding: 2px;
      }

      @media (max-width: 1650px) {
        padding: 5px;
        font-size: 15px;
        margin: 0 3px;
      }
      @media (max-width: 1450px) {
        padding: 3px;
        font-size: 14px;
        margin: 0 3px;
      }

      .paste-button {
        position: relative;
        display: block;
      }

      .button {
        color: #fff;
        cursor: pointer;
      }

      .dropdown-content {
        overflow: hidden;
        height: 0px;
        font-size: 15px;
        position: absolute;
        z-index: 1;
        min-width: 200px;
        // border: 2px solid transparent;
        // border-radius: 15px 15px 15px 15px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
      }

      .dropdown-content a {
        color: #333;
        padding: 8px 10px;
        text-decoration: none;
        opacity: 0;
        display: block;
        transition: 0.1s;

        &.router-link-active.router-link-exact-active {
          background-color: $main !important;
          color: #fff !important;
        }
      }

      .dropdown-content a:hover {
        background-color: #fff;
        color: $main !important;
      }

      .dropdown-content a:focus {
        background-color: #212121;
        color: #fff;
      }

      .paste-button:hover .dropdown-content {
        height: auto;
        border: 2px solid #fff;
        background-color: #fff;
        padding: 5px 0px;
        a {
          opacity: 1;
        }
      }
    }
  }
}
.nav-links {
  position: absolute;
  top: 40px;
  right: 35px;
  left: auto;
  display: flex;
  &.ar-flex {
    top: 40px;
    left: 35px;
    right: auto;
    // .socials {
    //   margin: 0px;
    // }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &.ar {
      justify-content: flex-start;
    }
  }

  // .socials {
  //   display: flex;
  //   justify-content: flex-start;
  //   align-items: center;
  //   margin: 0px 10px 5px 10px;
  //   &.ar {
  //     justify-content: flex-end;
  //   }
  //   .socials-img {
  //     width: 30px;
  //     margin: 5px;
  //     img {
  //       width: 100%;
  //     }
  //   }
  // }
}

.buttons {
  display: flex;
  align-items: center;
  text-wrap: nowrap;
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  padding: 25px;
  svg {
    color: #bf9847;
    width: 25px;
    height: 25px;
    font-size: 25px;
  }
  &.ar {
    left: 0;
    right: auto;
  }
}

.social-icons {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: auto;
  left: 0;
  padding: 20px;
  &.ar {
    right: 0;
    left: auto;
  }
  .Social-item {
    svg {
      width: 25px;
      height: 25px;
      font-size: 25px;
      color: #bf9847;
      transition: all 0.3s ease-in-out;
    }
  }
}
.lang-toggle {
  &.en {
    margin-bottom: 10px;
  }
}
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
</style>
