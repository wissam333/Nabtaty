<template>
  <div>
    <div class="top container" :class="$i18n.locale === 'en' ? 'en' : ''">
      <header
        class="d-flex justify-content-between align-items-center"
        :class="locale === 'ar' ? 'ar-flex' : ''"
      >
        <nuxt-link to="/" class="logo" style="border: none !important;">
          <img src="/photos/1-1.png" alt="" />
        </nuxt-link>
        <div
          v-if="mobile"
          class="burger"
          @click="open = !open"
          :class="open ? 'open' : ''"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- Mobile -->
        <div v-if="mobile" class="navCollapsed" :class="open ? 'open' : ''">
          <div class="container">
            <ul>
              <!-- <li v-for="menu in Menus?.items" :key="menu.id" class="menu-item">
                <div
                  class="paste-button"
                  @click="
                    openMedia === menu.id
                      ? (openMedia = '')
                      : (openMedia = menu.id)
                  "
                >
                  <div v-if="menu.type === 'Drop Down Menu'">
                    <button class="button">
                      {{ locale === "ar" ? menu.name : menu.englishName }}
                    </button>
                    <div
                      class="dropdown-content"
                      :class="openMedia === menu.id ? 'active' : ''"
                    >
                      <nuxt-link
                        @click="open = false"
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
                      @click="open = false"
                    >
                      {{ locale === "ar" ? menu.name : menu.englishName }}
                    </nuxt-link>
                  </div>
                </div>
              </li> -->
            </ul>
            <div
              v-if="mobile"
              class="buttons"
              :class="locale === 'ar' ? 'ar' : ''"
              style="display: flex; align-items: center; flex-direction: column"
            >
              <!-- <ElementsLanguageToggle></ElementsLanguageToggle> -->
            </div>
          </div>
        </div>
        <!-- Pc -->
        <nav v-else class="d-flex flex-column justify-content-between">
          <ul class="d-flex" :class="locale === 'ar' ? 'ar-flex' : ''">
            <li v-for="menu in Menus?.items" :key="menu?.id" class="menu-item">
              <div class="paste-button">
                <div v-if="menu.type == 'Drop Down Menu'">
                  <button
                    class="button d-flex align-items-center"
                    :class="locale === 'ar' ? 'ar-flex' : ''"
                  >
                    <font-awesome
                      :class="locale === 'ar' ? 'me-2' : 'me-2'"
                      :icon="['fas', 'caret-down']"
                    />
                    {{ locale === "ar" ? menu.name : menu.englishName }}
                  </button>
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
        </nav>

        <div
          v-if="!mobile"
          class="buttons"
          :class="locale === 'ar' ? 'ar' : ''"
          style="display: flex; align-items: center; text-wrap: nowrap"
        >
          <!-- <ElementsLanguageToggle></ElementsLanguageToggle> -->
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

let open = ref(false);
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

const { data: Menus } = await useGetSiteApi().GetAll(
  `${api.MenusMasterGetByCategoryApi}?categoryId=1`
);
</script>

<style lang="scss" scoped>
.router-link-active.router-link-exact-active {
  border-bottom: 2px solid $main;
}
.top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  header {
    height: 110px;
    background-color: rgb(5 5 6 / 60%);
    @media (max-width: 991px) {
      height: 80px;
    }
    padding: 0px 30px;
    background-position: center;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 991px) {
      padding: 20px;
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
      width: 100px;
      cursor: pointer;
      @media (max-width: 991px) {
        width: 220px;
      }

      @media (max-width: 768px) {
        width: 120px;
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
            border: 2px solid transparent;
            border-radius: 15px;
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
</style>
