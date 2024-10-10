// https://nuxt.com/docs/api/configuration/nuxt-config
import nora from "@primevue/themes/nora";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@vesp/nuxt-fontawesome",
    "nuxt-swiper",
    "@invictus.codes/nuxt-vuetify",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-aos",
    "@vee-validate/nuxt",
    "@primevue/nuxt-module",
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      VForm: "VeeForm",
      VField: "VeeField",
      VErrorMessage: "VeeErrorMessage",
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  fontawesome: {
    icons: {
      solid: [
        "minus",
        "angle-down",
        "angle-up",
        "link",
        "globe",
        "arrow-left",
        "xmark",
        "caret-down",
        "phone",
        "location-dot",
        "envelope",
        "fax",
        "box",
        "eye",
      ],
      brands: ["facebook", "x-twitter", "linkedin", "whatsapp", "instagram"],
    },
  },

  primevue: {
    components: {
      include: ["Galleria", "Select"],
    },
    options: {
      theme: {
        preset: nora,
      },
    },
  },

  css: [
    "@/assets/styles/scss/custom.scss",
    "@/assets/styles/scss/animate/animate.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "awesome-notifications/dist/style.css",
  ],

  app: {
    head: {
      title: "Butterfly Caffe",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Butterfly Caffe" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "icon",
          href: "/photos/1-1.png",
          type: "image/x-icon",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    serverApiBase: "https://admin.butterflycaffe.net/",
    serverApi: {
      AuthLoginApi: "/api/identity/token",
      CurrencyGetDefaultApi: "/api/v1/Currencies/Defualt",
      CountriesGetAllApi: "/api/v1/Countries",
      NationalityGetAllApi: "api/v1/nations",

      BlocksApi: "/api/Blocks",

      //categories
      FoodCategories: "/api/v1/productCategories/GetAllSonsAndClassification",

      // Menus
      MenusByCategoryId: "/api/v1/Menus",
      SoceialMediaApi: "/api/v1/menus/GetMenuMaster?categoryId=3",

      //pages
      GetPagesDetail: "/api/Pages",
    },
    public: {
      apiBase: "https://admin.butterflycaffe.net/",
      api: {
        // Auth
        RegisterNewEmail: "/api/identity/user",
        AuthLoginApi: "/api/identity/token",
        AuthRefreshTokenApi: "/api/identity/token/refresh",
        PersonClientsEditProfileApi: "/api/identity/account/UpdateProfile",
        ChangePasswordAdminApi: "/api/identity/account/ChangePassword",
        CompanyClientsApi: "/api/v1/Companies",
        PersonClientsApi: "/api/v1/Persons",
        MenusMasterGetByCategoryApi: "/api/v1/menus/GetMenuMaster",

        // Menus
        MenusGetAllApi: "/api/v1/Menus/All",
        GetMenuDetail: "/api/v1/menus",
        MenusByCategoryId: "/api/v1/Menus",

        //categories
        FoodCategories: "/api/v1/productCategories/GetAllSonsAndClassification",

        //products
        GetProducts: "/api/v1/products/GetAllPaged",

        //pages
        GetPagesDetail: "/api/Pages",

        // Contact
        Contact: "/api/v1/ContactUS",

        // Blocks
        Blocks: "/api/blocks",
        BlocksCategories: "/api/blockcategories",
        // Countries
        NationsApi: "/api/v1/nations",
        CitiesApi: "/api/Cities",
        CountriesGetAllApi: "/api/v1/Countries",
      },
      globalDefaultImage: "/images/parfume-2.jpg",
      cachedTime: 60 * 60 * 2 * 1000, // 60: second(1 minutes), 60: minutes(1 hours), 2 hours, 1000: milliseconds
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/styles/scss/theme/_variables.scss" as *;',
        },
      },
    },
  },
});
