<template>
  <div class="login nav-margin">
    <div class="container">
      <h1 class="text-center color mt-5 mb-5 fw-bold">{{ $t("Login") }}</h1>
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
            <!-- <ElementsFormVTextInput astricts="true" border_color="00c2ec" color="00c2ec" type="email" name="email"
                          id="email" :label="$t('email')" :placeholder="$t('email')" /> -->
            <ElementsFormVTextInput
              astricts="true"
              border_color="00c2ec"
              color="00c2ec"
              type="text"
              name="phone"
              id="phone"
              :label="$t('phone')"
              :placeholder="$t('phone')"
            />
            <p
              class="d-flex justify-content-end"
              style="
                color: #00c2ec;
                margin-bottom: -22px;
                z-index: 5;
                position: relative;
                font-size: 14px;
              "
            >
              <NuxtLink
                class="text-black text-decoration-underline pointer"
                to="/auth/ForgotPass"
              >
                {{
                  $i18n.locale === "ar" ? "نسيت كلمة السر؟" : "Forgot Password?"
                }}
              </NuxtLink>
            </p>
            <!-- :phoneCode="`+218 (0)`" -->
            <ElementsFormVTextInput
              astricts="true"
              border_color="00c2ec"
              color="00c2ec"
              type="password"
              name="password"
              id="password"
              :label="$t('password')"
              :placeholder="$t('password')"
              autocomplete="false"
              :activePasswordEye="true"
            />
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
                style="color: #00c2ec"
              >
                <strong>{{
                  $i18n.locale == "en"
                    ? "Don't have an account?"
                    : "ليس لديك حساب؟"
                }}</strong>
                <NuxtLink
                  class="mx-2 text-black text-decoration-underline"
                  to="/auth/Register"
                >
                  {{
                    $i18n.locale === "ar"
                      ? "انشاء حساب جديد"
                      : "Create a new account here."
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

const {
  public: { apiBase, api },
} = useRuntimeConfig();
const isLoading = ref(false);
const hasError = ref(false);
const cart = useCart().value;
const errorMessage = ref("");
const router = useRouter();

// Handle Form Submit
const handleSubmit = async (values, actions) => {
  //   values.phone = "0" + values.phone;
  //   values.phone = values.phone.replace(/^0/, "00218"); // delete

  isLoading.value = true;
  const { data, error } = await useFetch(`${api.AuthLoginApi}`, {
    baseURL: apiBase,
    method: "POST",
    body: values,
  });
  // console.log('response :', data.value.succeeded, data.value.data);
  // return
  if (data.value && data.value.succeeded) {
    if (data.value.data.status == "Accepted") {
      isLoading.value = false;
      hasError.value = false;
      localStorage.setItem("token", data.value.data.token);
      localStorage.setItem("accountType", data.value.data.type);
      useToken().value = data.value.data.token;
      useAuth().value.isAuthenticated = true;
      useAccountType().value = data.value.data.type;
      const userInfoApi =
        data.value.data.type == "Person"
          ? api.PersonClientsApi
          : api.CompanyClientsApi;
      const { data: infoData, error: infoError } = await useGetSiteApi().GetAll(
        `${userInfoApi}/${data.value.data.id}`
      );
      // console.log('get info : ', infoData.value, infoError.value);
      if (infoData.value.succeeded) {
        localStorage.setItem("userInfo", JSON.stringify(infoData.value.data)); // storage the user info inside inside localstorage
        useUserInfo().value = infoData.value.data;
        useAuth().value.isAuthenticated = true; // make global isAuthenticated state true
        actions.resetForm();
        if (cart.items.length) {
          await navigateTo("/order");
        } else {
          await navigateTo("/");
        }
      } else {
        isLoading.value = false;
        localStorage.removeItem("token");
        useToken().value = null;
        useAuth().value.isAuthenticated = false; // make global isAuthenticated state false
        $awn.alert("بيانات الدخول غير صحيحة", { durations: { global: 5000 } });
      }
    } else {
      isLoading.value = false;
      $awn.alert("الحساب محذوف", { durations: { global: 5000 } });
    }
  } else {
    isLoading.value = false;
    localStorage.removeItem("token");
    useToken().value = null;
    useAuth().value.isAuthenticated = false;
    $awn.alert("بيانات الدخول غير صحيحة", { durations: { global: 5000 } });
  }
  if (error.value) {
    console.log(error.value);
    isLoading.value = false;
    $awn.alert("بيانات الدخول غير صحيحة", { durations: { global: 5000 } });
  }
};
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const schema = object({
  password: string().required().label("Your Password"),
  phone: string()
    .required("Phone number is required")
    .min(10, "Phone number must be exactly 10 characters")
    .max(10, "Phone number must be exactly 10 characters")
    .matches(/^09\d{8}$/, "Phone number must be in the format 09XXXXXXXX")
    .label("Phone Number"),
});
const initialValues = { phone: "", password: "", loginWithPhone: true };
</script>

<style lang="scss" scoped>
.login {
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
  .specialbtn {
    border: 1px solid $primary;
    background-color: $primary !important;
    color: white !important;
    font-weight: bold;
    // font-size: 20px;
    padding: 0.6rem 0;
  }
}
</style>
