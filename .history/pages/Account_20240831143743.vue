<template>
  <div class="nav-margin">
    <h1 class="color mt-5 mb-5 text-center fw-bold">
      <span> {{ $i18n.locale === "ar" ? "حسابي" : "My Account" }}</span>
    </h1>
    <div class="container">
      <div class="mt-5" style="min-height: calc(100vh - 110px)">
        <ul
          class="nav nav-pills d-flex justify-content-center justify-content-sm-start nav-pills-mobile mb-5"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              data-index="profile"
              class="nav-link py-2 active"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="true"
            >
              <span class="fs-sm-4">{{
                $i18n.locale == "en" ? "My Profile" : "حسابي"
              }}</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              data-index="orders"
              class="nav-link py-2"
              id="v-pills-orders-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-orders"
              type="button"
              role="tab"
              aria-controls="v-pills-orders"
              aria-selected="true"
            >
              <span class="fs-sm-4">{{ $t("Orders") }}</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              data-index="pass"
              class="nav-link py-2"
              id="v-pills-pass-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-pass"
              type="button"
              role="tab"
              aria-controls="v-pills-pass"
              aria-selected="true"
            >
              <span class="fs-sm-4">{{
                $i18n.locale == "en" ? "Change password" : "تغيير كلمة المرور"
              }}</span>
            </button>
          </li>
        </ul>
        <div class="container-fluid" style="min-height: 450px">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <AccountProfile />
            </div>
            <div
              class="tab-pane fade show"
              id="v-pills-orders"
              role="tabpanel"
              aria-labelledby="v-pills-orders-tab"
            >
              <AccountUserOrder v-if="data" :order="data.data" />
              <AccountUserOrderMobile v-if="data" :order="data.data" />
            </div>

            <div
              class="tab-pane fade show"
              id="v-pills-pass"
              role="tabpanel"
              aria-labelledby="v-pills-pass-tab"
            >
              <AccountChangePassword />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();

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
  .nav-item {
    width: 165px;
    margin: 0 5px;
  }
  .nav-link {
    width: 100%;
    background-color: #fff;
    color: $main;
    // border: 1px solid $main;
    border-radius: 0 !important;
    // margin: 0 0.5rem;
    @media (max-width: 768px) {
      // margin: 0 0.1rem;
      // padding: .4rem;
    }
    &.active {
      background: linear-gradient(45deg, #146890, #45b2e9, #146890);

      color: white !important;
      span {
        color: white !important;
      }
    }
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
</style>
