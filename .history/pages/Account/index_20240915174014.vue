<template>
  <div class="nav-margin">
    <h1 class="color mt-5 mb-5 text-center fw-bold">
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span> {{ $i18n.locale === "ar" ? "حسابي" : "My Account" }}</span>
    </h1>
    <div class="container">
      <div class="mt-5" style="min-height: calc(100vh - 110px)">
        <ul
          class="nav nav-pills d-flex justify-content-center justify-content-sm-start nav-pills-mobile mb-5"
          id="pills-tab"
          role="tablist"
        >
          <v-tabs v-model="tab" bg-color="transparent">
            <v-tab
              class="nav-item"
              style="color: #146890; font-weight: bold"
              value="1"
            >
              <button class="py-2">
                <span class="fs-sm-4">{{
                  $i18n.locale == "en" ? "My Profile" : "حسابي"
                }}</span>
              </button>
            </v-tab>
            <v-tab
              class="nav-item"
              style="color: #146890; font-weight: bold"
              value="2"
            >
              <button class="py-2">
                <span class="fs-sm-4">{{
                  $i18n.locale === "ar" ? "الطلبات" : "Orders"
                }}</span>
              </button>
            </v-tab>

            <v-tab
              class="nav-item"
              style="color: #146890; font-weight: bold"
              value="3"
            >
              <button class="py-2">
                <span class="fs-sm-4">{{
                  $i18n.locale == "en" ? "Change password" : "تغيير كلمة المرور"
                }}</span>
              </button>
            </v-tab>

            <v-tab
              class="nav-item"
              style="color: #146890; font-weight: bold"
              value="4"
            >
              <button class="py-2">
                <span class="fs-sm-4">{{
                  $i18n.locale == "en" ? "Bouns Points" : "نقاط المكافأة"
                }}</span>
              </button>
            </v-tab>
          </v-tabs>
        </ul>
        <div class="container-fluid" style="min-height: 450px">
          <v-window v-model="tab" style="color: #333 !important; opacity: 1">
            <v-window-item value="1" style="color: #333 !important; opacity: 1">
              <AccountProfile />
            </v-window-item>

            <v-window-item value="2" style="color: #333 !important; opacity: 1">
              <AccountUserOrder v-if="data" :order="data.data" />
              <AccountUserOrderMobile v-if="data" :order="data.data" />
            </v-window-item>
            <v-window-item value="3" style="color: #333 !important; opacity: 1">
              <AccountChangePassword />
            </v-window-item>
            <v-window-item value="4" style="color: #333 !important; opacity: 1">
              <AccountPoints />
            </v-window-item>
          </v-window>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();

let tab = ref(1);
const { data, pending } = await useFetch(
  `${api.GetAllPagedFinalOrdinaryOrders}`,
  {
    baseURL: apiBase,
    query: { clientid: useUserInfo().value.clientId, orderBy: "id Desc" },
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  }
);

// const { data } = await useGetSiteApi().GetAll(`${api.GetAllPagedFinalOrdinaryOrders}?clientid=${useUserInfo().value.clientId}&orderBy=id Desc`)
</script>

<style lang="scss" scoped>
.mobile {
  display: none !important;
}

@media screen and (max-width: 992px) {
  .mobile {
    display: block !important;
  }

  .large {
    display: none !important;
  }

  .nav-item {
    width: auto !important;
    margin: 0 5px;
  }
}

.nav-pills {
  // background-color: $green2;
  direction: ltr !important;
  .nav-item {
    width: 200px;
    margin: 0 5px;
  }
}
h1 {
  text-align: center;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 12px;
  }
  span {
    -webkit-background-clip: text;
    font-weight: bold;
    background-color: #146890;
    background-image: linear-gradient(45deg, #146890, #45b2e9, #146890);
    background-repeat: repeat;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
.nav-item {
  font-size: 18px;
}
.v-slide-group-item--active {
  background: linear-gradient(to left, #146890, #45b2e9, #146890);
  color: #fff !important;
}
</style>
