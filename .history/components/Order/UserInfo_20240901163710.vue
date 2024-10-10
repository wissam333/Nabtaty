<template>
  <section class="user-info">
    <div class="row">
      <div class="col-12">
        <h4 class="mt-5 text-white text-center text-sm-start">
          {{ $i18n.locale === "ar" ? "معلومات المستخدم" : "user Information" }}
        </h4>
      </div>
      <div class="col-lg-6">
        <ElementsFormVTextInput
          border_color="146890"
          color="146890"
          type="text"
          name="fullNameEn"
          id="fullNameEn"
          :label="$i18n.locale == 'ar' ? 'الاسم' : 'Name'"
          placeholder="Name"
          astricts="true"
          :readonly="true"
        />
      </div>

      <div class="col-lg-6">
        <ElementsFormVTextInput
          border_color="146890"
          color="146890"
          type="text"
          name="phone"
          id="phone"
          :label="$t('phone')"
          :placeholder="$t('phone')"
          astricts="true"
          :readonly="true"
        />
      </div>

      <div class="col-lg-6 mb-5" v-if="princedomORMap().value">
        <ElementsFormVSelect
          border_color="146890"
          color="146890"
          @change="changeCity"
          name="cityName"
          :items="filteredCities"
          id="cityName"
          :label="$t('City')"
          :placeholder="$t('City')"
          astricts="false"
        />
      </div>

      <!-- <div class="col-lg-6 mb-5" v-if="princedomORMap().value">
        <ElementsFormVSelect
          border_color="146890"
          color="146890"
          @change="changeprincedom"
          name="princedomName"
          :items="filteredPrincedom"
          id="princedomName"
          :label="$t('Place')"
          :placeholder="$t('PlaceOrResort')"
          astricts="false"
        />
      </div> -->

      <!-- <div class="col-lg-6">
        <ElementsFormVTextInput
          border_color="146890"
          color="146890"
          :astricts="`false`"
          type="text"
          name="addressEn"
          id="addressEn"
          :label="$t('address')"
          :placeholder="$t('address') + ' ' + '(' + $t('optional') + ')'"
        />
      </div> -->

      <!-- Currency -->
      <!-- <div class="col-lg-6">
        <ElementsFormVSelect
          border_color="146890"
          color="146890"
          name="currencyId"
          :items="Currency"
          id="currencyId"
          :label="$t('Currency1')"
          :placeholder="$t('Currency1')"
          astricts="true"
        />
      </div> -->

      <VForm id="orderForm" class="col-lg-6 order_form" @submit="checkCoupon">
        <div class="Coupon-contain">
          <ElementsFormVTextInput
            border_color="146890"
            color="146890"
            type="text"
            name="Coupon"
            id="Coupon"
            :label="$i18n.locale == 'ar' ? 'الكوبون' : 'Coupon'"
            :placeholder="$i18n.locale == 'ar' ? 'الكوبون' : 'Coupon'"
          />
          <button
            type="submit"
            :class="$i18n.locale == 'ar' ? 'btn-ar' : 'btn-en'"
            class="background text-black btn-block py-0 px-10"
          >
            <span class="text-black">{{
              $i18n.locale === "ar" ? "تحقق" : "Check"
            }}</span>
          </button>
        </div>
      </VForm>
    </div>
  </section>
</template>
<script setup>
const { countries, countryId, accountType, allcities } = defineProps([
  "countries",
  "countryId",
  "accountType",
  "allcities",
]);
// const countryName = ref([]);
const emit = defineEmits([
  "addchippengcost",
  "addResta",
  "changeprincedom",
  "changeCity",
]);
const countryid = ref([]);
countryid.value = countryId;
const selectCountryId = ref(null);
const isLoaded = ref(false);
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { $awn } = useNuxtApp();

let filteredPrincedom = ref();
const changeCity = (e) => {
  console.log(e.target.value);
  filteredPrincedom.value = allcities.filter(
    (city) => city.parentPrincedomId == e.target.value
  );
  emit("changeCity", e.target.value);
};

const changeprincedom = (e) => {
  emit("changeprincedom", e.target.value);
  emit("addchippengcost", e.target.value);
};

// const changeResta = (e) => {
//   emit('addResta',e.target.value)
// }

const checkCoupon = async (values) => {
  console.log(values);

  const { data: check } = await useFetch(
    `${api.CheckCouponsApi}/${values.Coupon}`,
    {
      baseURL: apiBase,
      method: "GET",
      headers: {
        Authorization: `Bearer ${useMainToken().value}`,
      },
    }
  );

  if (check.value.data == true) {
    $awn.success("Coupon is vaild");
  } else {
    $awn.alert("Coupon Not Found!");
  }
};
//  const setcountry = (Name,id) => {
//   countryName.value = Name;
//   countryid.value = id;
//   console.log('countryName :',countryName.value);
//   console.log('countryid :',countryid.value);

// }

const filteredCities = allcities.filter(
  (city) => city.parentPrincedomId === null
);
</script>

<style lang="scss" scoped>
.Coupon-contain {
  padding-inline-start: 12px;
  padding-inline-end: 0;
  position: relative;
  button {
    position: absolute;
    top: 43px;
  }
  .btn-en {
    right: 0px;
    height: 42px;
  }
  .btn-ar {
    left: 0px;
    height: 52px;
  }
}
h4 {
  color: $main;
}
.user-info label {
  color: #aaa !important;
}
.user-info .form-floating label {
  color: #faaaff !important;
}
.user-info .form-control {
  height: 54px;
  border: none;
  border-bottom: 1px solid #aaa;
  border-radius: 0px;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  color: #146890;
}
.Coupon-contain {
  padding: 0;
}
</style>
