<template>
  <div>
    <div class="top" :class="$i18n.locale === 'en' ? 'en' : ''">
      <header
        class="d-flex justify-content-between align-items-center"
        :class="locale === 'ar' ? 'ar-flex' : ''"
      >
        <div>
          <nuxt-link to="/" class="logo" style="border: none !important">
            <img src="/photos/5-1.png" alt="" />
          </nuxt-link>
        </div>

        <div class="d-flex align-items-center" v-if="mobile">
          <!-- user -->
          <nuxt-link
            v-if="!isAuth.isAuthenticated"
            to="/auth/Login"
            class="login pointer mx-2"
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
            class="cart pointer mx-2"
            style="position: relative"
          >
            <small class="cartbox" v-if="cart.totalQty > 0">{{
              cart.totalQty
            }}</small>
            <img width="30" src="/photos/cart.png" alt="" />
          </nuxt-link>
          <!-- search -->
          <div class="search pointer mx-2" @click.stop="toggle">
            <font-awesome
              v-tooltip.top="$i18n.locale === 'ar' ? 'البحث' : 'Search'"
              :icon="['fas', 'magnifying-glass']"
            />
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
        </div>

        <!-- Mobile -->
        <div
          v-if="mobile"
          class="navCollapsed"
          @click.stop="useOpenNav().value = true"
          :class="useOpenNav().value ? 'open' : ''"
        >
          <div class="container">
            <ul>
              <li v-for="menu in Menus?.items" :key="menu.id" class="menu-item">
                <div
                  class="paste-button"
                  v-if="menu.englishName !== 'Products'"
                  @click.stop="
                    openMedia === menu.id
                      ? (openMedia = '')
                      : (openMedia = menu.id)
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

                <div v-else class="paste-button">
                  <div>
                    <nuxt-link
                      @click.stop="useOpenNav().value = false"
                      to="/FoodByCategory/1"
                      class="button"
                      :class="locale === 'ar' ? 'ar-flex' : ''"
                    >
                      {{ locale === "ar" ? "المنتجات" : "Products" }}
                    </nuxt-link>
                    <div
                      class="dropdown-mobile"
                      :class="locale === 'ar' ? 'ar' : ''"
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
            <div
              v-if="mobile"
              class="buttons"
              :class="locale === 'ar' ? 'ar' : ''"
              style="display: flex; align-items: center; flex-direction: column"
            >
              <ElementsLanguageToggle></ElementsLanguageToggle>
            </div>
          </div>
        </div>
        <!-- Pc -->
        <nav v-else class="d-flex flex-column justify-content-between">
          <ul class="d-flex" :class="locale === 'ar' ? 'ar-flex' : ''">
            <li v-for="menu in Menus?.items" :key="menu?.id" class="menu-item">
              <div class="paste-button">
                <div v-if="menu.type == 'Drop Down Menu'">
                  <nuxt-link
                    :to="`${menu.pageUrl}`"
                    class="button d-flex align-items-center"
                    :class="locale === 'ar' ? 'ar-flex' : ''"
                  >
                    <font-awesome
                      :class="locale === 'ar' ? 'me-2' : 'me-2'"
                      :icon="['fas', 'caret-down']"
                    />
                    {{ locale === "ar" ? menu.name : menu.englishName }}
                  </nuxt-link>
                  <div
                    class="dropdown-content"
                    :class="locale === 'ar' ? 'ar' : ''"
                  >
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
          </ul>

          <ul class="d-flex">
            <li
              class="menu-item"
              v-for="child in useAllFoodesTypes().value"
              :key="child.id"
              style="font-size: 14px"
            >
              <div class="paste-button">
                <div>
                  <nuxt-link :to="`/FoodByCategory/${child.id}`" class="button">
                    {{ locale === "ar" ? child.nameAr : child.nameEn }}
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div
          v-if="!mobile"
          class="buttons"
          :class="locale === 'ar' ? 'ar' : ''"
          style="display: flex; align-items: center; text-wrap: nowrap"
        >
          <div class="mx-3">
            <ElementsLanguageToggle></ElementsLanguageToggle>
          </div>

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
            <img width="35" src="/photos/cart.png" alt="" />
          </nuxt-link>
          <!-- search -->
          <div class="search mx-2 pointer" @click.stop="toggle">
            <font-awesome
              v-tooltip.top="$i18n.locale === 'ar' ? 'البحث' : 'Search'"
              :icon="['fas', 'magnifying-glass']"
            />
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
      </header>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { $awn } = useNuxtApp();

const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};

const isAuth = useAuth().value;
const cart = useCart();

let mobile = ref(false);
let openMedia = ref(false);
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

// get nav links
const { data: Menus } = await useGetSiteApi().GetAll(
  `${api.MenusMasterGetByCategoryApi}?categoryId=1`
);

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
.router-link-active.router-link-exact-active {
  border-bottom: 2px solid #23b8ff;
  transition: all 0.3s ease-in-out;
  // -webkit-background-clip: text;
  // font-weight: bold;
  // background-color: #146890;
  // background-image: linear-gradient(45deg, #146890, #45b2e9, #146890);
  // background-repeat: repeat;
  // background-size: 100%;
  // -webkit-text-fill-color: transparent;
  // -moz-background-clip: text;
  // -moz-text-fill-color: transparent;
}
.top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: rgb(5 5 6 / 76%);
  header {
    height: 200px;

    @media (max-width: 991px) {
      height: 80px;
    }
    padding: 0px 30px;
    background-position: center;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 991px) {
      padding: 10px;
    }

    position: relative;

    // &::after {
    //   content: "";
    //   position: absolute;
    //   bottom: -15px;
    //   left: 0;
    //   right: 0;
    //   width: 100%;
    //   height: 15px;
    //   background: linear-gradient(90deg, #9e6b30, #f7eb87);
    // }
    nav {
      width: 100%;
      display: flex;
      align-items: center;
      color: #fff;
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
        position: absolute;
        &.ar {
          justify-content: flex-start;
        }
      }
      .socials {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0px 10px 5px 10px;
        &.ar {
          justify-content: flex-end;
        }
        .socials-img {
          width: 30px;
          margin: 5px;
          img {
            width: 100%;
          }
        }
      }
    }
    .logo {
      display: flex;
      align-items: center;
      width: 150px;
      cursor: pointer;
      @media (max-width: 1250px) {
        width: 80px;
      }

      @media (max-width: 991px) {
        width: 60px;
      }

      img {
        width: 100%;
      }
    }

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
        background-color: #fff;
        transition: all 0.3s ease-in-out;
      }
    }

    .navCollapsed {
      overflow-y: scroll;
      position: fixed;
      width: 100vw;
      height: 0;
      z-index: 10000;
      color: #fff;
      top: 0;
      left: 0;
      transform: translateX(100%);
      right: 0;
      bottom: 0;
      background-color: #000;
      height: 100vh;
      transition: all 0.3s ease-in-out;

      &.open {
        transform: translateX(20%);
      }

      .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-right: 20%;

        .socials {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0px 15px;
          &.ar {
            justify-content: flex-end;
          }
          .socials-img {
            width: 35px;
            margin: 5px;
            img {
              width: 100%;
            }
          }
        }
        ul {
          margin: 0;
          color: #fff;
          padding: 20px 0px 0px 0px;

          a {
            color: #fff;
            transition: all 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
              color: $main;
            }
          }

          li {
            padding: 10px;
            font-size: 22px;
            margin: 0 15px;
            text-align: center;

            @media (max-width: 1480px) {
              padding: 8px;
              font-size: 16px;
              margin: 0 10px;
            }
            .paste-button {
              .dropdown-content {
                display: flex;
                flex-direction: column;
                background-color: #f7eb87;
                height: 0;
                padding: 0px;
                border-radius: 8px;
                overflow: hidden;
                transition: all 0.3s ease-in-out;
                opacity: 0;
                &.active {
                  height: auto;
                  padding: 5px;
                  opacity: 1;
                  margin-top: 8px;
                }
              }
            }
          }
        }
      }
    }

    nav {
      margin: 0px 25px;
      border-radius: 16px;
      padding: 10px;
      // box-shadow: -2px 2px 8px 0px #333;
      ul {
        margin: 0;
        align-items: center;
        color: #fff;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
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
          font-size: 16px;
          margin: 0 4px;
          padding: 2px;
          // font-weight: bold;
          // letter-spacing: 1px;

          // button {
          //   font-weight: bold;
          //   letter-spacing: 1px;
          // }
          a {
            padding: 2px;
          }

          @media (max-width: 1480px) {
            padding: 5px;
            font-size: 15px;
            margin: 0 3px;
          }
          @media (max-width: 1350px) {
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
            // border: 2px solid transparent;
            // border-radius: 15px;
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
            border-radius: 15px 15px 15px 15px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;
          }

          .dropdown-content a {
            color: #fff;
            padding: 8px 10px;
            text-decoration: none;
            opacity: 0;
            display: block;
            transition: 0.1s;
            &.router-link-active.router-link-exact-active {
              background-color: #fff !important;
              color: #333 !important;
            }
          }

          .dropdown-content a:hover {
            background-color: #fff;
            color: $main;
          }

          .dropdown-content a:focus {
            background-color: #212121;
            color: #fff;
          }

          .dropdown-content #top:hover {
            border-radius: 8px;
          }

          .paste-button:hover button {
            border-radius: 8px;
          }

          .paste-button:hover .dropdown-content {
            height: auto;
            border: 2px solid #fff;
            background-color: #212121;
            padding: 5px 0px;
            a {
              opacity: 1;
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
    font-size: 30px;
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
    top: -4px;
    font-size: 14px;
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
    width: 30px;
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
.search {
  svg {
    font-size: 30px;
    color: #fff;
    @media (max-width: 991px) {
      font-size: 25px;
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
</style>
