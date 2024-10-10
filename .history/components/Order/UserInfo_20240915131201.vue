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

      <div class="row">
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

        <div class="col-lg-6">
          <label
            for="buttondisplay"
            class="fw-bold d-block color"
            style="margin-bottom: -20px"
          >
            {{ $t("City") }}
          </label>
          <ElementsFormVSelect
            border_color="146890"
            color="146890"
            @change="changeCity"
            name="cityName"
            :items="allcitiesResult"
            id="cityName"
            :placeholder="$t('City')"
            astricts="false"
            style="margin-bottom: 20px"
          />
        </div>
      </div>
      
      <div class="row">
        <!-- <div class="col-lg-6">
          <label
            for="buttondisplay"
            class="fw-bold d-block color"
            style="margin-bottom: -20px"
          >
            {{ $i18n.locale === "ar" ? "البلد" : "Country" }}
          </label>
          <ElementsFormVSelect
            border_color="146890"
            color="146890"
            @change="changeCountry"
            name="countryName"
            :items="countries"
            id="countryName"
            :placeholder="$i18n.locale === 'ar' ? 'البلد' : 'Country'"
            astricts="false"
            style="margin-bottom: 20px"
          />
        </div> -->
      </div>

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
const { locale } = useI18n();
const { countries, accountType, allcities } = defineProps([
  "countries",
  "accountType",
  "allcities",
]);
// const countryName = ref([]);
const emit = defineEmits(["changeCountry", "changeCity"]);

const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { $awn } = useNuxtApp();

const changeCity = (e) => {
  emit("changeCity", e.target.value);
};

let allcitiesResult = ref();
const changeCountry = (e) => {
  allcitiesResult.value = allcities.filter(
    (city) => city.nationId == e.target.value
  );
  emit("changeCountry", e.target.value);
};

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
    $awn.success(locale.value === "ar" ? "القسيمة صالحة" : "Coupon is vaild");
  } else {
    $awn.alert(
      locale.value === "ar" ? "لم يتم العثور على القسيمة!" : "Coupon Not Found!"
    );
  }
};
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
