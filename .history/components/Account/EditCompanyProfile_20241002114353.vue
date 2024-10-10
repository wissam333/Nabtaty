<template>
  <div class="register nav-margin">
    <div class="container">
      <h1 class="text-center mt-5 mb-5 fw-bold">
        <span>
          <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
          {{ $i18n.locale === "ar" ? "تعديل الحساب" : "Edit Profile" }}
        </span>
      </h1>
      <div class="row justify-center">
        <div class="col-lg-6">
          <VForm
            id=""
            class="w-auto"
            :validation-schema="schema"
            :initial-values="initialValues"
            v-slot="{ meta: formMeta }"
            @submit="handleSubmit"
          >
            <div v-if="hasError" class="error-messages mb-3">
              <div class="alert alert-danger text-center">
                <ul class="list-unstyled mb-0">
                  <li v-for="(error, index) in errorMessage" :key="index">
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
            <ElementsFormVTextInput
              v-if="$i18n.locale == 'ar'"
              astricts="true"
              border_color="146890"
              color="146890"
              type="text"
              name="fullNameAr"
              id="fullNameAr"
              :label="$t('Full Name Ar')"
              :placeholder="$t('Full Name Ar')"
            />

            <ElementsFormVTextInput
              v-if="$i18n.locale == 'en'"
              astricts="true"
              border_color="146890"
              color="146890"
              type="text"
              name="fullNameEn"
              id="fullNameEn"
              :label="$t('Full Name En')"
              :placeholder="$t('Full Name En')"
            />

            <ElementsFormVTextInput
              astricts="false"
              border_color="146890"
              color="146890"
              type="text"
              name="Phone"
              id="Phone"
              :label="$i18n.locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'"
              :placeholder="
                $i18n.locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'
              "
              style="width: 100%"
            />

            <div class="row">
              <!-- <div class="col-lg-6">
                <label
                  for="buttondisplay"
                  class="fw-bold d-block color"
                  style="margin-bottom: -20px"
                >
                  {{ $i18n.locale === "ar" ? "البلد" : "Country" }}
                  <span>*</span>
                </label>
                <ElementsFormVSelect
                  border_color="146890"
                  color="146890"
                  @change="changeCountry"
                  name="countryName"
                  :items="allcountries?.data"
                  id="countryName"
                  :placeholder="$i18n.locale === 'ar' ? 'البلد' : 'Country'"
                  astricts="false"
                  style="margin-bottom: 20px"
                />
              </div> -->

              <div class="col-lg-12">
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

            <ElementsFormVTextInput
              border_color="146890"
              color="146890"
              type="text"
              name="website"
              id="website"
              :label="$t('Company Website')"
              :placeholder="$t('Company Website')"
              astricts="false"
            />

            <ElementsFormVTextInput
              v-if="$i18n.locale == 'ar'"
              astricts="false"
              border_color="146890"
              color="146890"
              type="text"
              name="responsiblePersonNameAr"
              id="responsiblePersonNameAr"
              :label="$i18n.locale === 'ar' ? 'اسم الشخص المسؤول بالعربية' : ''"
              :placeholder="
                $i18n.locale === 'ar' ? 'اسم الشخص المسؤول بالعربية' : ''
              "
            />
            <ElementsFormVTextInput
              v-else
              astricts="false"
              border_color="146890"
              color="146890"
              type="text"
              name="responsiblePersonNameEn"
              id="responsiblePersonNameEn"
              :label="
                $i18n.locale === 'ar'
                  ? ''
                  : 'Name of responsible Person in English'
              "
              :placeholder="$t('Full Name Ar')"
            />

            <ElementsFormVTextInput
              astricts="false"
              border_color="146890"
              color="146890"
              type="text"
              name="responsiblePersonMobile"
              id="responsiblePersonMobile"
              :label="
                $i18n.locale === 'ar'
                  ? 'رقم موبايل الشخص المسؤول'
                  : 'Responsible Person mobile number'
              "
              :placeholder="
                $i18n.locale === 'ar'
                  ? 'رقم موبايل الشخص المسؤول'
                  : 'Responsible Person mobile number'
              "
              style="width: 100%"
            />

            <div class="row">
              <!-- License date -->
              <!-- <div class="col-lg-6">
                <label for="buttondisplay" class="fw-bold d-block mb-3 color">
                  {{
                    $i18n.locale === "ar"
                      ? "تاريخ إصدار الرخصة"
                      : "License issuance date"
                  }}
                </label>

                <DatePicker
                  v-model="date"
                  dateFormat="dd/mm/yy"
                  style="width: 100%"
                  showIcon
                />
              </div> -->

              <div class="col-lg-12">
                <ElementsFormVTextInput
                  astricts="false"
                  border_color="146890"
                  color="146890"
                  type="address"
                  name="address"
                  id="address"
                  :label="$t('address')"
                  :placeholder="$t('address')"
                />
              </div>
            </div>

            <!-- For Error -->
            <div v-if="hasError" class="py-2 mb-3">
              <div class="alert-danger text-center">
                <ul class="list-unstyled mb-0">
                  <li
                    class="p-2"
                    v-for="(error, index) in errorMessage"
                    :key="index"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
            <!-- For Error -->

            <div class="form-group">
              <button
                type="submit"
                value="Login"
                class="btn text-black text-uppercase specialbtn"
                style="width: 100%; border-radius: 0"
                :class="{ background: formMeta.valid }"
                :disabled="!formMeta.valid || isLoading"
              >
                <span class="" v-if="!isLoading">
                  {{ $i18n.locale === "ar" ? "حفظ" : "Save" }}
                </span>
                <span class="" v-else>{{ $t("loading...") }}</span>
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["not-authorize"],
});

const { locale } = useI18n();

import { object, string, ref as yupRef } from "yup";
import { configure, validate } from "vee-validate";

const { $awn } = useNuxtApp();
const lang = useCookie("lang").value;
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const isLoading = ref(false);
const hasError = ref(false);
const userInfo = useUserInfo().value;
const errorMessage = ref("");

// date  ================================================
let date = ref(null);
// cities ================================================
let selectedcity = ref(null);
const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);
const changeCity = (e) => {
  selectedcity.value = e.target.value;
};
let allcitiesResult = ref();

// countries ================================================
let selectedCountry = ref(null);
const { data: allcountries } = await useGetSiteApi().GetAll(
  `${api.NationsApi}`
);
const changeCountry = (e) => {
  selectedCountry.value = e.target.value;
  allcitiesResult.value = allcities.value.data.filter(
    (city) => city.nationId == e.target.value
  );
};

// Handle Form Submit ================================================
const handleSubmit = async (values, actions) => {
  actions.evt.target[2].classList.add("is-valid");
  actions.evt.target[2].classList.remove("is-invalid");
  actions.evt.target[3].classList.add("is-valid");
  actions.evt.target[3].classList.remove("is-invalid");
  isLoading.value = true;

  hasError.value = false;
  const AddCompanyValue = {
    activityCode: "client",
    additionalInfo: null,
    address: values.address,
    companyFileUploadRequest: null,
    companyFileUrl: null,
    companyImageUploadRequest: null,
    companyImageUrl: null,
    email: userInfo.email,
    geoLocation: "",
    id: 0,
    isFeatured: false,
    licenseIssuingDate: date.value,
    nameAr: values.fullNameAr ? values.fullNameAr : values.fullNameEn,
    nameEn: values.fullNameAr ? values.fullNameAr : values.fullNameEn,
    nationId: selectedCountry.value,
    phone: values.Phone,
    princedomId: selectedcity.value,
    responsiblePersonMobile: values.responsiblePersonMobile,
    responsiblePersonNameAr: values.responsiblePersonNameAr
      ? values.responsiblePersonNameAr
      : values.responsiblePersonNameEn,
    responsiblePersonNameEn: values.responsiblePersonNameAr
      ? values.responsiblePersonNameAr
      : values.responsiblePersonNameEn,
    sectionId: 0,
    status: "Accepted",
    id: userInfo.id,
    id: userInfo.id,
    clientId: userInfo.clientId,
    website: values.website,
  };

  const { data: AddCompanyData, error: AddCompanyDataError } = await useFetch(
    `${api.CompanyClientsApi}`,
    {
      baseURL: apiBase,
      method: "POST",
      body: AddCompanyValue,
      headers: {
        Authorization: `Bearer ${useMainToken().value}`,
      },
    }
  );

  if (AddCompanyData.value) {
    // Get All User Info
    const { data: UserInfo, error } = await useGetSiteApi().GetAll(
      `${api.CompanyClientsApi}/${userInfo.id}?${Date.now()}`
    );

    // success message
    locale == "en"
      ? $awn.success("The account has been modified successfully", {
          durations: { global: 5000 },
        })
      : $awn.success("تم تعديل الحساب بنجاح", {
          durations: { global: 5000 },
        });

    localStorage.setItem("userInfo", JSON.stringify(UserInfo.value.data));
    useUserInfo().value = UserInfo.value.data;
    await navigateTo("/Account");
  }
};
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const schema = object({
  fullNameAr:
    lang == "ar"
      ? string()
          .required(
            locale.value === "ar"
              ? "الاسم الكامل مطلوب"
              : "Full name is required"
          )
          .min(3)
          .label("Your Arabic Full Name")
      : "",
  fullNameEn:
    lang == "en"
      ? string()
          .required(
            locale.value === "ar"
              ? "الاسم الكامل مطلوب"
              : "Full name is required"
          )
          .min(3)
          .label("Your English Full Name")
      : "",
  // Phone: string()
  //   .required(
  //     locale.value === "ar" ? "رقم الهاتف مطلوب" : "Phone number is required"
  //   )
  //   .min(
  //     10,
  //     locale.value === "ar"
  //       ? "رقم الهاتف يجب أن يتكون من 10 أحرف بالضبط"
  //       : "Phone number must be exactly 10 characters"
  //   )
  //   .max(
  //     10,
  //     locale.value === "ar"
  //       ? "رقم الهاتف يجب أن يتكون من 10 أحرف بالضبط"
  //       : "Phone number must be exactly 10 characters"
  //   )
  //   .matches(
  //     /^09\d{8}$/,
  //     locale.value === "ar"
  //       ? "رقم الهاتف يجب أن يكون بالتنسيق 09XXXXXXXXX"
  //       : "Phone number must be in the format 09XXXXXXXX"
  //   ),

  // email: string().required().email().label("Email Address"),
});
const initialValues = {
  fullNameAr: userInfo.nameAr,
  fullNameEn: userInfo.nameEn,
  Phone: userInfo.phone,
  address: userInfo.address,
  responsiblePersonMobile: userInfo.responsiblePersonMobile,
  responsiblePersonNameAr: userInfo.responsiblePersonNameAr,
  responsiblePersonNameEn: userInfo.responsiblePersonNameEn,
  website: userInfo.website,
  countryName: userInfo.nationId,
  cityName: userInfo.princedomId,
};

selectedCountry.value = userInfo.nationId;
selectedcity.value = userInfo.princedomId;
allcitiesResult.value = allcities.value?.data.filter(
  (city) => city.nationId == userInfo.nationId
);

date.value = userInfo.licenseIssuingDate
  ? userInfo.licenseIssuingDate.slice(0, 10)
  : null;
</script>

<style lang="scss" scoped>
.specialbtn {
  border: 1px solid $main;
  background: linear-gradient(45deg, #146890, #45b2e9, #146890);
  color: white !important;
  font-weight: bold;
  // font-size: 20px;
  padding: 0.6rem 0;
}
.phone-contain {
  //   padding-inline-start: 12px;
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
.btn-success {
  background-color: #146890 !important;
  border-color: #146890 !important;
}
.register {
  margin-bottom: 100px;
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
}
</style>
