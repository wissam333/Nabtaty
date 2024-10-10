<template>
  <main class="main-black-background mt-10 mb-10">
    <section class="col-lg-8 login_box_area mx-auto">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-11 col-lg-10 col-xl-9 mx-auto">
            <div class="login_form_inne">
              <h3 class="fs-3 mb-3 font-philosopher text-white">
                {{
                  $i18n.locale == "en"
                    ? "Edit Personal Profile"
                    : "تعديل المعلومات الشخصية"
                }}
              </h3>
              <VForm
                id="loginForm"
                class="row register_form px-3"
                :validation-schema="schema"
                :initial-values="initialValues"
                v-slot="{ meta: formMeta }"
                @submit="handleSubmit"
              >
                <!-- {{ initialValues }} -->
                <div v-if="hasError" class="error-messages mb-3">
                  <div class="alert alert-danger text-center">
                    <ul class="list-unstyled mb-0">
                      <li v-for="(error, index) in errorMessage" :key="index">
                        <p
                          class="mb-1"
                          v-for="(msg, j) in error.errors"
                          :key="`error_${j}`"
                        >
                          {{ error.field + " " + msg }}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- <div class="row"> -->
                <div class="col-12 col-sm-6">
                  <ElementsFormVTextInput
                    border_color="d2bd6c"
                    color="d2bd6c"
                    type="text"
                    :name="$i18n.locale == 'en' ? 'firstNameEn' : 'firstNameAr'"
                    :id="$i18n.locale == 'en' ? 'firstNameEn' : 'firstNameAr'"
                    :label="$t('firstname')"
                    :placeholder="$t('firstname')"
                    astricts="true"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <ElementsFormVTextInput
                    border_color="d2bd6c"
                    color="d2bd6c"
                    type="text"
                    :name="$i18n.locale == 'en' ? 'lastNameEn' : 'lastNameAr'"
                    :id="$i18n.locale == 'en' ? 'lastNameEn' : 'lastNameAr'"
                    :label="$t('lastname')"
                    :placeholder="$t('lastname')"
                    astricts="true"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <ElementsFormVTextInput
                    border_color="af9458"
                    color="af9458"
                    type="text"
                    name="email"
                    id="email"
                    :label="$t('email')"
                    :placeholder="$t('email')"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <ElementsFormVTextInput
                    border_color="af9458"
                    color="af9458"
                    type="text"
                    name="phone"
                    id="phone"
                    :label="$t('phone')"
                    :placeholder="$t('phone')"
                  />
                </div>
                <div class="col-sm-12 col-md-6">
                  <label class="text-start text-white w-100 m-0 mb-3"
                    >{{ $t("gender") }} </label
                  ><br />
                  <div
                    class="d-flex justify-center align-items-center"
                    style="border: 1px solid #d2bd6c; height: 54px"
                  >
                    <div class="px-1 w-50">
                      <ElementsFormVRadioInput
                        type="radio"
                        name="sex"
                        id="male"
                        :label="$t('Male')"
                        value="male"
                      />
                    </div>
                    <div class="px-1 w-50">
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
                <!-- <div class="col-sm-12 col-md-6 col-lg-6">
                  <ElementsFormVSelect
                    border_color="d2bd6c"
                    astricts="true"
                    color="d2bd6c"
                    name="countryId"
                    id="countryId"
                    :items="countries.data"
                    :placeholder="$t('Country')"
                    :label="$t('Country')"
                  />
                </div> -->

                <div class="col-sm-12 col-md-6 col-lg-6 mt-5">
                  <ElementsFormVTextInput
                    border_color="d2bd6c"
                    color="d2bd6c"
                    type="text"
                    name="princedom"
                    id="princedom"
                    :label="$t('City')"
                    :placeholder="$t('City')"
                    astricts="true"
                  />
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 mt-5">
                  <ElementsFormVTextInput
                    border_color="af9458"
                    color="af9458"
                    type="date"
                    name="birthDate"
                    format="yyyy-MM-dd"
                    id="birthDate"
                    :label="$t('birthDate')"
                    :placeholder="$t('birthDate')"
                  />
                </div>

                <div class="col-sm-12 col-md-6 mt-5">
                  <ElementsFormVTextInput
                    border_color="d2bd6c"
                    color="d2bd6c"
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    :label="$t('StreetAddress1')"
                    :placeholder="$t('StreetAddress1')"
                    astricts="false"
                  />
                </div>
                <!-- <div class="col-sm-12 col-md-6 ">
                    <ElementsFormVTextInput
                      border_color="d2bd6c" color="d2bd6c"
                      type="text"
                      name="location"
                      id="location"
                      :label="$t('StreetAddress2')"
                      :placeholder="$t('StreetAddress2')"
                      astricts="false"
                    />
                  </div> -->

                <div class="col-md-12 form-group mt-4">
                  <button
                    type="submit"
                    value="Login"
                    class="btn background btn-block px-3"
                    style="width: 100%"
                    :class="{ btn: formMeta.valid }"
                    :disabled="!formMeta.valid || isLoading"
                  >
                    <span v-if="!isLoading">{{ $t("save") }}</span>
                    <span v-else>{{ $t("loading...") }}</span>
                  </button>
                </div>
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
const { countries } = defineProps(["countries"]);
const { $awn } = useNuxtApp();
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const userInfo = useUserInfo().value;
// console.log(userInfo);
const { locale } = useI18n();
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");
const month = ref(
  new Date(userInfo.birthDate).getMonth() + 1 < 10
    ? `0${new Date(userInfo.birthDate).getMonth() + 1}`
    : new Date(userInfo.birthDate).getMonth() + 1
);
const itemName = ref([]);

// Handle Form Submit
const handleSubmit = async (values, actions) => {
  isLoading.value = true;
  values.id = userInfo.id;
  values.clientId = userInfo.clientId;
  // const { data, error, execute } = await useHttpForUserApi().put(
  //   api.PersonClientsEditProfileApi,
  //   values
  // );
  if (values.countryId) values.countryId = values.countryId;
  if (values.sex != "") values.sex = values.sex;
  if (values.address != "") values.address = values.address;
  if (values.location != "") values.location = values.location;
  if (values.birthDate != "") values.birthDate = values.birthDate;
  values.lastNameAr && values.lastNameAr != ""
    ? (values.lastNameAr = values.lastNameAr)
    : (values.lastNameAr = values.lastNameEn);
  values.lastNameEn && values.lastNameEn != ""
    ? (values.lastNameEn = values.lastNameEn)
    : (values.lastNameEn = values.lastNameAr);
  values.firstNameEn && values.firstNameEn != ""
    ? (values.firstNameEn = values.firstNameEn)
    : (values.firstNameEn = values.firstNameAr);
  values.firstNameAr && values.firstNameAr != ""
    ? (values.firstNameAr = values.firstNameAr)
    : (values.firstNameAr = values.firstNameEn);
  // console.log(values)
  const { data, error } = await useFetch(`${api.PersonClientsApi}`, {
    baseURL: apiBase,
    method: "POST",
    body: values,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  });
  // return;
  if (data.value) {
    if (data.value.hasErrors) {
      isLoading.value = false;
      hasError.value = true;
      errorMessage.value = data.value.validationErrors;
    } else {
      isLoading.value = false;
      hasError.value = false;
      const { data: UserInfo } = await useGetSiteApi().GetById(
        `${api.PersonClientsApi}/`,
        userInfo.id
      );
      localStorage.setItem("userInfo", JSON.stringify(UserInfo.value.data));
      useUserInfo().value = UserInfo.value.data;
      await navigateTo("/newsite/my-account");
    }
  }
  if (error.value && error.value.statusCode == 401) {
    await useReauthorization().reAuthorize();
    if (!data.value) execute();
  } else if (error.value && error.value.statusCode != 401) {
    isLoading.value = false;
    console.log(error.value);
    $awn.alert(
      "Server Error, Please communicate with the administration to solve the problem",
      { durations: { global: 6000 } }
    );
  }
};
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const schema = object({
  // fullNameAr: string().required().min(3).label("Your First Name"),
  // fullNameEn: string().required().min(3).label("Your Last Name"),
  firstNameEn:
    locale.value == "en"
      ? string().required().min(3).label("Your First Name")
      : "",
  firstNameAr:
    locale.value == "ar"
      ? string().required().min(3).label("Your First Name")
      : "",
  lastNameEn:
    locale.value == "en"
      ? string().required().min(3).label("Your Last Name")
      : "",
  lastNameAr:
    locale.value == "ar"
      ? string().required().min(3).label("Your Last Name")
      : "",
  // phoneNumber: string().nullable().min(3).label("Your Phone Number"),
  // birthDate: string().nullable().label("Your Phone Number"),
  // address: string().nullable().min(3).label("Your Address"),
  // addressAr: string().nullable().min(3).label("Your Address In Arabic"),
  // addressEn: string().nullable().min(3).label("Your Address In English"),
  phone: string().nullable().min(3).label("Your phone"),
  princedom: string().required().label("Your City"),

  // mobile: string().nullable().min(3).label("Your phone"),
  email: string().required().email().label("Email Address"),
});
const initialValues = {
  fullNameAr: userInfo.fullNameAr,
  fullNameEn: userInfo.fullNameEn,
  firstNameEn: userInfo.firstNameEn,
  firstNameAr: userInfo.firstNameAr,
  lastNameEn: userInfo.lastNameEn,
  lastNameAr: userInfo.lastNameAr,
  email: userInfo.email,
  sex: userInfo.sex,
  birthDate: userInfo.birthDate ? userInfo.birthDate.slice(0, 10) : null,
  streetAddress: userInfo.streetAddress,
  location: userInfo.location,
  princedom: userInfo.princedom,

  // addressEn: userInfo.addressEn,
  phone: userInfo.phone,
  countryId: userInfo.country ? userInfo.country.id : null,
  // nationalityId: userInfo.nationalityId,
};

const getItemName = (event) => {
  itemName.value = event;
};
</script>

<style lang="scss">
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";

.login_box_area {
  padding: 0;
  @include sm-mobile {
    padding: 50px 0;
  }
  .login_box_img {
    margin-right: -30px;
    position: relative;
    img {
      width: 100%;
    }
    &:before {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      content: "";
      background: #000;
      opacity: 0.5;
    }
    .hover {
      position: absolute;
      top: 50%;
      left: 0px;
      text-align: center;
      width: 100%;
      transform: translateY(-50%);
      h4 {
        font-size: 24px;
        color: $primary;
        margin-bottom: 15px;
      }
      p {
        max-width: 380px;
        margin: 0px auto 25px;
        color: $primary;
      }
      .primary-btn {
        border-radius: 0px;
        line-height: 38px;
        text-transform: uppercase;
        &:hover:before {
          left: 260px;
        }
      }
    }
  }
  .login_form_inner {
    // box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 10px 30px 0px rgb(250 250 250 / 7%);
    height: 100%;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 100px;
    background-color: #fff;
    @include tablet {
      padding-top: 80px;
      padding-bottom: 65px;
    }
    @include sm-mobile {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    h3 {
      color: $primary;
      text-transform: uppercase;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .register_form {
      margin: auto;
      a {
        font-size: 14px;
        color: #fff;
        // font-family: "Roboto", sans-serif;
        margin-top: 20px;
        display: block;
      }
      .form-check-input:checked {
        background-color: $primary;
        border-color: $primary;
      }
    }
  }

  .btn-custom {
    &:hover:before {
      left: 700px;
      opacity: 0.3;
    }
  }
}
</style>
