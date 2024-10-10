<template>
  <div class="register nav-margin">
    <div class="container">
      <h1 class="text-center mt-5 mb-5 fw-bold">
        <span>
          <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
          {{ $t("Register") }}
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
              astricts="true"
              border_color="146890"
              color="146890"
              type="text"
              name="Phone"
              id="Phone"
              :label="$t('phone')"
              :placeholder="$t('phone')"
              style="width: 100%"
            />
            <!-- <div class="phone-contain">
              <ElementsFormVTextInput
                astricts="true"
                border_color="146890"
                color="146890"
                type="text"
                name="Phone"
                id="Phone"
                :label="$t('phone')"
                :placeholder="$t('phone')"
              />
              <button
                @click="sendVerfiy()"
                :class="$i18n.locale == 'ar' ? 'btn-ar' : 'btn-en'"
                class="background text-black btn-block py-0 px-10"
              >
                <span class="text-black">{{
                  $i18n.locale === "ar" ? "تحقق" : "Check"
                }}</span>
              </button>
            </div> -->

            <ElementsFormVTextInput
              astricts="true"
              border_color="146890"
              color="146890"
              type="password"
              name="password"
              id="password"
              :label="$t('password')"
              :placeholder="$t('password')"
              autocomplete="false"
              :activePasswordEye="true"
            />
            <ElementsFormVTextInput
              astricts="true"
              border_color="146890"
              color="146890"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              :label="$t('confirmPassword')"
              :placeholder="$t('confirmPassword')"
              autocomplete="false"
              :activePasswordEye="true"
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

            <ElementsFormVTextInput
              astricts="false"
              border_color="146890"
              color="146890"
              type="email"
              name="email"
              id="email"
              :label="$t('email')"
              :placeholder="$t('email') + ' ' + '(' + $t('optional') + ')'"
            />

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
              :placeholder="$t('address') + ' ' + '(' + $t('optional') + ')'"
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
                  :placeholder="$t('fax') + ' ' + '(' + $t('optional') + ')'"
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
                  :placeholder="
                    $t('mailBox') + ' ' + '(' + $t('optional') + ')'
                  "
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
                  {{ $i18n.locale === "ar" ? "تسجيل دخول" : "sing in" }}
                </span>
                <span class="" v-else>{{ $t("loading...") }}</span>
              </button>

              <p
                class="d-flex mt-5 justify-content-center"
                style="color: #146890"
              >
                <strong>{{
                  $i18n.locale == "en" ? "You have an account?" : "لديك حساب؟"
                }}</strong>
                <NuxtLink
                  class="mx-2 text-black text-decoration-underline"
                  to="/auth/Login"
                >
                  {{
                    $i18n.locale === "ar" ? "سجّل دخول من هنا" : "Log in here."
                  }}
                </NuxtLink>
              </p>
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
const cart = useCart().value;
const errorMessage = ref("");

// date  ================================================
let date = ref();
// cities ================================================
let selectedcity = ref();
const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);
const changeCity = (e) => {
  selectedcity.value = e.target.value;
};
let allcitiesResult = ref();

// cities ================================================
let selectedCountry = ref();
const { data: allcountries } = await useGetSiteApi().GetAll(
  `${api.NationsApi}`
);
const changeCountry = (e) => {
  selectedCountry.value = e.target.value;
  const gg = allcities.value.data;
  allcitiesResult.value = gg.filter((city) => city.nationId === e.target.value);
};

// Handle Form Submit ================================================
const handleSubmit = async (values, actions) => {
  actions.evt.target[2].classList.add("is-valid");
  actions.evt.target[2].classList.remove("is-invalid");
  actions.evt.target[3].classList.add("is-valid");
  actions.evt.target[3].classList.remove("is-invalid");
  isLoading.value = true;
  hasError.value = false;

  // Register User
  const RegisterEmailData = {
    userName: values.Phone,
    password: values.password,
    confirmPassword: values.confirmPassword,
    phoneNumber: values.Phone,
    activateUser: true,
    autoConfirmEmail: true,
  };
  values.email != "" ? (RegisterEmailData.email = values.email) : null,
    values.fullNameAr != ""
      ? (RegisterEmailData.firstName = values.fullNameAr)
      : "";
  values.fullNameAr != ""
    ? (RegisterEmailData.lastName = values.fullNameAr)
    : "";
  values.fullNameEn != ""
    ? (RegisterEmailData.lastName = values.fullNameEn)
    : "";
  values.fullNameEn != ""
    ? (RegisterEmailData.firstName = values.fullNameEn)
    : "";

  const { data, error } = await useFetch(api.RegisterNewEmail, {
    baseURL: apiBase,
    method: "POST",
    body: RegisterEmailData,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  });

  if (data.value) {
    if (!data.value.succeeded) {
      isLoading.value = false;
      hasError.value = true;
      // console.log(data.value.messages)
      errorMessage.value = data.value.messages;

      if (data.value.messages[0].includes("Email")) {
        actions.evt.target[2].classList.remove("is-valid");
        actions.evt.target[2].classList.add("is-invalid");
      }
      if (data.value.messages[0].includes("Username")) {
        actions.evt.target[2].classList.remove("is-valid");
        actions.evt.target[2].classList.add("is-invalid");
      }
      if (data.value.messages[0].includes("Phone")) {
        actions.evt.target[3].classList.remove("is-valid");
        actions.evt.target[3].classList.add("is-invalid");
      }
    } else {
      hasError.value = false;
      const AddPersonValue = {
        phone: values.Phone,
        userId: data.value.data,
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
        princedomId: 0,
        sectionId: selectedcity.value,
      };
      values.email != "" ? (AddPersonValue.email = values.email) : "",
        values.fullNameAr != ""
          ? (AddPersonValue.fullNameAr = values.fullNameAr)
          : "";
      values.fullNameAr != ""
        ? (AddPersonValue.fullNameEn = values.fullNameAr)
        : "";
      values.fullNameEn != ""
        ? (AddPersonValue.fullNameEn = values.fullNameEn)
        : "";
      values.fullNameEn != ""
        ? (AddPersonValue.fullNameAr = values.fullNameEn)
        : "";
      AddPersonValue.sex = values.sex;

      const { data: AddPersonData, error: AddPersonDataError } = await useFetch(
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
        const loginValue = {
          phone: values.Phone,
          password: values.password,
          loginWithPhone: true,
        };
        const { data: loginData, error: loginError } = await useFetch(
          `${api.AuthLoginApi}`,
          {
            baseURL: apiBase,
            method: "POST",
            body: loginValue,
          }
        );

        if (loginData.value && loginData.value.succeeded) {
          // save data in localStorage and store
          localStorage.setItem("UserId", data.value.data);
          useUserId().value.UserId = data.value.data;
          localStorage.setItem("token", loginData.value.data.token); // storage the token in localstorage
          useAuth().value.isAuthenticated = true; // make global isAuthenticated state true
          useToken().value = loginData.value.data.token; // store token in the store
          localStorage.setItem("accountType", loginData.value.data.type); // storage the Account Type in localstorage
          useAccountType().value = loginData.value.data.type;

          const id = loginData.value.data.id;

          // Get All User Info
          const { data: UserInfo } = await useGetSiteApi().GetById(
            `${api.PersonClientsApi}/`,
            [],
            id.toString()
          );

          // success message
          $awn.success(
            locale.value === "ar"
              ? ` اهلاً بك ${
                  UserInfo.value.data.nameAr
                    ? UserInfo.value.data.nameAr
                    : UserInfo.value.data.nameEn
                }`
              : `Welcome ${
                  UserInfo.value.data.nameEn
                    ? UserInfo.value.data.nameEn
                    : UserInfo.value.data.nameAr
                }`,
            { durations: { global: 5000 } }
          );

          localStorage.setItem("userInfo", JSON.stringify(UserInfo.value.data));
          useUserInfo().value = UserInfo.value.data;
          if (useCart().value.items.length) {
            return navigateTo("/Cart");
          } else {
            return navigateTo("/");
          }
        }
      }
    }
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
  Phone: string()
    .required(
      locale.value === "ar" ? "رقم الهاتف مطلوب" : "Phone number is required"
    )
    .min(
      10,
      locale.value === "ar"
        ? "رقم الهاتف يجب أن يتكون من 10 أحرف بالضبط"
        : "Phone number must be exactly 10 characters"
    )
    .max(
      10,
      locale.value === "ar"
        ? "رقم الهاتف يجب أن يتكون من 10 أحرف بالضبط"
        : "Phone number must be exactly 10 characters"
    )
    .matches(
      /^09\d{8}$/,
      locale.value === "ar"
        ? "رقم الهاتف يجب أن يكون بالتنسيق 09XXXXXXXXX"
        : "Phone number must be in the format 09XXXXXXXX"
    ),

  // email: string()
  //     .required()
  //     .email()
  //     .label("Email Address"),
  password: string()
    .required(
      locale.value === "ar" ? "كلمة المرور مطلوبة" : "Password is required"
    )
    .min(6)
    .label("Your Password"),
  confirmPassword: string()
    .required()
    .min(6)
    .oneOf(
      [yupRef("password")],
      locale.value === "ar"
        ? "كلمات المرور غير متطابقة"
        : "Passwords do not match"
    ) // Cross-Field Validation
    .label("Your Confirmation Password"),
});
const initialValues = {
  fullNameAr: "",
  fullNameEn: "",
  email: "",
  Phone: "",
  password: "",
  confirmPassword: "",
  sex: null,
};
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
