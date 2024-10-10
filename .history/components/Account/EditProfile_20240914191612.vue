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
              :label="$t('phone')"
              :placeholder="$t('phone')"
              style="width: 100%"
            />

            <!-- gender -->
            <div class="mb-5 row">
              <div class="col-lg-6">
                <label class="text-start color fw-bold w-100 m-0 mb-3"
                  >{{ $t("gender") }} </label
                ><br />
                <div
                  class="d-flex justify-space-around align-items-center"
                  style="border: 1px solid #146890; height: 54px"
                >
                  <div class="px-1 w-40">
                    <ElementsFormVRadioInput
                      type="radio"
                      name="sex"
                      id="male"
                      :label="$t('Male')"
                      value="male"
                    />
                  </div>
                  <div class="px-1 w-40">
                    <ElementsFormVRadioInput
                      type="radio"
                      name="sex"
                      id="female"
                      :label="$t('Female')"
                      value="female"
                    />
                  </div>
                </div>
              </div>

              <!-- birth date -->
              <div class="col-lg-6">
                <label for="buttondisplay" class="fw-bold d-block mb-3 color">
                  {{ $t("birthDate") }}
                </label>

                <DatePicker
                  v-model="date"
                  dateFormat="dd/mm/yy"
                  style="width: 100%"
                  showIcon
                />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
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
                  :items="allcountries?.data"
                  id="countryName"
                  :placeholder="$i18n.locale === 'ar' ? 'البلد' : 'Country'"
                  astricts="false"
                  style="margin-bottom: 20px"
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

            <div class="row">
              <div class="col-lg-6">
                <ElementsFormVTextInput
                  astricts="false"
                  border_color="146890"
                  color="146890"
                  type="fax"
                  name="fax"
                  id="fax"
                  :label="$t('fax')"
                  :placeholder="$t('fax')"
                />
              </div>
              <div class="col-lg-6">
                <ElementsFormVTextInput
                  astricts="false"
                  border_color="146890"
                  color="146890"
                  type="mailBox"
                  name="mailBox"
                  id="mailBox"
                  :label="$t('mailBox')"
                  :placeholder="$t('mailBox')"
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
  middleware: ["auth"],
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
const errorMessage = ref("");
const userInfo = useUserInfo().value;

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
  isLoading.value = true;

  const AddPersonValue = {
    id: userInfo.id,
    clientId: userInfo.clientId,
    phone: values.Phone,
    status: "Accepted",
    additionalInfo: null,
    address: values.address,
    birthDate: date.value,
    cvFileUploadRequest: null,
    cvFileUrl: null,
    fax: values.fax,
    geoLocation: "",
    identifierImageUploadRequest: null,
    identifierImageUrl: null,
    mailBox: values.mailBox,
    persomImageUploadRequest: null,
    persomImageUrl: null,
    princedomId: selectedcity.value,
    sectionId: 0,
    email: userInfo.email,
  };

  if (locale.value === "ar") {
    values.fullNameAr != ""
      ? (AddPersonValue.fullNameAr = values.fullNameAr)
      : "";
    values.fullNameAr != ""
      ? (AddPersonValue.fullNameEn = values.fullNameAr)
      : "";
  } else {
    values.fullNameEn != ""
      ? (AddPersonValue.fullNameEn = values.fullNameEn)
      : "";
    values.fullNameEn != ""
      ? (AddPersonValue.fullNameAr = values.fullNameEn)
      : "";
  }

  AddPersonValue.sex = values.sex;

  const { data: AddPersonData, error } = await useFetch(
    `${api.PersonClientsApi}`,
    {
      baseURL: apiBase,
      method: "POST",
      body: AddPersonValue,
      headers: {
        Authorization: `Bearer ${useMainToken().value}`,
      },
    }
  );
  if (AddPersonData.value) {
    isLoading.value = false;
    hasError.value = false;
    const { data: UserInfo, error } = await useGetSiteApi().GetAll(
      `${api.PersonClientsApi}/${userInfo.id}?${Date.now()}`
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
      ? string().required().min(3).label("Your Arabic Full Name")
      : "",
  fullNameEn:
    lang == "en"
      ? string().required().min(3).label("Your English Full Name")
      : "",
  Phone: string()
    .required("Phone number is required")
    .min(10, "Phone number must be exactly 10 characters")
    .max(10, "Phone number must be exactly 10 characters"),
});
const initialValues = {
  fullNameAr: userInfo.fullNameAr,
  fullNameEn: userInfo.fullNameEn,
  sex: userInfo.sex.toString().toLowerCase(),
  Phone: userInfo.phone,
  fax: userInfo.fax,
  mailBox: userInfo.mailBox,
  address: userInfo.address,
  cityName: userInfo.sectionId,
};
selectedcity.value = userInfo.sectionId;
date.value = userInfo.birthDate ? userInfo.birthDate.slice(0, 10) : null;
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
