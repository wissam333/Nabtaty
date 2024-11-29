<template>
  <!-- Pc -->
  <nav class="d-flex flex-column justify-content-between">
    <ul class="d-flex" :class="locale === 'ar' ? 'ar-flex' : ''">
      <li v-for="menu in Menus" :key="menu?.id" class="menu-item">
        <div class="paste-button">
          <div v-if="menu.type == 'Drop Down Menu'">
            <nuxt-link
              :to="`/Products/${menu.id}`"
              class="button d-flex align-items-center"
              :class="locale === 'ar' ? 'ar-flex' : ''"
            >
              {{ menu.category_name }}
              <font-awesome
                :class="locale === 'ar' ? 'ms-2' : 'ms-2'"
                :icon="['fas', 'caret-down']"
              />
            </nuxt-link>
            <div class="dropdown-content" :class="locale === 'ar' ? 'ar' : ''">
              <nuxt-link
                v-for="child in menu.children"
                :key="child.id"
                :to="`/Products/${child.id}`"
                class="dropdown-item"
              >
                {{ child.category_name }}
              </nuxt-link>
            </div>
          </div>
          <div v-else>
            <nuxt-link class="button" :to="`/Products/${menu.id}`">
              {{ menu.category_name }}
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
const { locale } = useI18n();
const { $awn } = useNuxtApp();
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};

const isAuth = useAuth().value;
const cart = useCart();

let AllCategories = ref();
let AllSubCategories = ref();
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
  const { data: MenusData2, pending2 } = await useFetch(`${api.GetSubCat}`, {
    baseURL: apiBase,
    credentials: "include",
    headers: {
      "accept-language": "ar",
    },
  });
  watchEffect(() => {
    if (process.client) {
      if (MenusData.value) {
        AllCategories.value = MenusData.value;
        AllSubCategories.value = MenusData2.value;
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
  const { data: MenusData2, pending2 } = await useFetch(`${api.GetSubCat}`, {
    baseURL: apiBase,
    credentials: "include",
    headers: {
      "accept-language": "en",
    },
  });
  watchEffect(() => {
    if (process.client) {
      if (MenusData.value) {
        AllCategories.value = MenusData.value;
        AllSubCategories.value = MenusData2.value;
      }
    }
  });
}

let AllCats = ref([]);

watchEffect(() => {
  if (process.client) {
    if (AllCategories.value) {
      // Build categories with subcategories
      AllCats.value = AllCategories.value.map((parent) => {
        const items = AllSubCategories.value.filter((cat) => {
          if (cat.category_id === parent.id) {
            cat.category_name = cat.subcategory_name;

            return cat;
          }
        });
        return items.length ? { ...parent, items } : { ...parent };
      });

      // Fetch products for selected category
      AllCats.value.forEach((cat) => {
        if (cat.id == route.params.id) {
          fetchProductsForCategory(cat.items);
        }
      });
    }
  }
});

// const Menus = [
//   { id: 3, englishName: "Green Plants", name: "النباتات الخضراء" },
//   { id: 4, englishName: "Flower Plants", name: "نباتات الزهور" },
//   { id: 5, englishName: "Cacti", name: "الصبار" },
//   { id: 6, englishName: "Hanging Plants", name: "النباتات المعلقة" },
//   { id: 7, englishName: "Tree Plants", name: "نباتات الأشجار" },
//   { id: 8, englishName: "Gifts", name: "الهدايا" },
//   { id: 9, englishName: "Subscription", name: "الاشتراك" },
//   {
//     id: 10,
//     englishName: "Accessories and Pottery",
//     name: "الاكسسوارات والفخار",
//   },
// ];

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
    background: #003d2ea2;
    width: 100vw;
    margin: 0;
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 0px 10px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
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
        font-size: 14px;
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
