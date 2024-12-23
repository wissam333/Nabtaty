// https://nuxt.com/docs/api/configuration/nuxt-config
import nora from "@primevue/themes/nora";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@vesp/nuxt-fontawesome",
    "nuxt-swiper",
    "@invictus.codes/nuxt-vuetify",
    "nuxt-icon",
    "nuxt-aos",
    "@vee-validate/nuxt",
    "@primevue/nuxt-module",
    "nuxt-vue3-google-signin",
    "@nuxtjs/leaflet",
  ],
  googleSignIn: {
    clientId:
      "508145345514-ok1e5qv5lb208op3kmnsruji3oq55m91.apps.googleusercontent.com", // Replace with your actual Google Client ID
  },
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
        "plus",
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
        "heart",
        "magnifying-glass",
        "power-off",
        "cart-shopping",
        "file-pdf",
        "sliders",
        "snowflake",
        "cloud-sun",
        "droplet",
        "temperature-high",
        "sun",
      ],
      brands: [
        "facebook",
        "x-twitter",
        "linkedin",
        "whatsapp",
        "instagram",
        "youtube",
      ],
      regular: ["heart", "user"],
    },
  },

  primevue: {
    components: {
      include: [
        "Galleria",
        "Select",
        "InputNumber",
        "Rating",
        "Popover",
        "DatePicker",
        "Tooltip",
        "Image",
        "Panelmenu",
        "skeleton",
      ],
    },
    directives: {
      Tooltip: "tooltip",
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
      title: "Nabtaty",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Nabtaty" },
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
          href: "/photos/tabLogo.png",
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
    serverApiBase: "https://nabtaty.com",
    serverApi: {},
    public: {
      apiBase: "https://nabtaty.com",
      api: {
        //home photos
        GetHomePhotos: "/api/findAllHomePhotos",
        //get all cats
        findAllCategories: "/api/findAllCategories",
        //get category by id
        GetCatById: "/api/findCategoryById",
        //get all locations
        GetLocations: "/api/findAllLocations",
        //get plant by id
        GetPlantById: "/api/findPlantById",
        //get sub category
        GetSubCat: "/api/findAllSubcategory",
        //get sub category by id
        GetSubById: "/api/findSubcategoryById",
        //get reviews
        GetReviews: "/api/findAllReviews",
        //get album photos
        GetPhotoAlbum: "/api/findAllAlbumPhotos",
        //create fav
        CreateFav: "/api/createFavorite",
        //remove fav
        RemoveFav: "/api/deleteFavorite",
        //get all fav
        GetAllFav: "/api/findFavoriteByCustomerId",
        //is it in fav
        IsInFav: "/api/isFavorite",
        //add order
        AddOrder: "/createOrder",
        //get all orders
        GetOrders: "/api/findMyAllOrders",
        //get plant by id
        GetPlant: "/api/findPlantById",
        //get plant by sub category
        GetPlantsBySubCat: "/api/findPlantsBySubcategory",
        //login
        Login: "/auth/providers/google",
        //get my Info
        GetMyInfo: "/api/findMyInfo",
        //logout
        Logout: "/auth/logout",
        //create order
        createOrder: "/api/createOrder",
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
