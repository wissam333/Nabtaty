<template>
  <div class="nav-margin">
    <!-- <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{
          $i18n.locale === "ar"
            ? "سجل دخول إلى حسابك الآن"
            : "Sign In to Your Account"
        }}</span
      >
    </h1> -->
    <div class="container pt-10">
      <div class="row row-line">
        <div class="col-lg-6 px-10">
          <div class="login">
            <div class="">
              <h2 class="mt-5 mb-5 fw-bold">
                <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
                <span>{{ $t("Login") }}</span>
              </h2>
              <div class="row">
                <div class="col-lg-12 px-0 pe-15 mt-5">
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
                          <li
                            v-for="(error, index) in errorMessage"
                            :key="index"
                          >
                            {{ error }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ElementsFormVTextInput
                      astricts="true"
                      border_color="146890"
                      color="146890"
                      type="email"
                      name="email"
                      id="email"
                      :label="
                        $i18n.locale === 'ar' ? 'البريد الإلكتروني' : 'Email'
                      "
                      :placeholder="$t('email')"
                    />

                    <!-- forget password -->
                    <!-- <p
              class="d-flex justify-content-end"
              style="
                color: #146890;
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
            </p> -->

                    <!-- :phoneCode="`+218 (0)`" -->
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
                        class="d-flex mt-5 justify-content-start"
                        style="color: #146890"
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
        </div>

        <div class="col-lg-6 px-10">
          <div class="login">
            <h2 class="mt-5 mb-5 fw-bold">
              <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
              <span>{{
                $i18n.locale === "ar" ? "طلب للانضمام" : "Request to join"
              }}</span>
            </h2>
            <div class="client">
              <h3>
                {{
                  $i18n.locale === "ar"
                    ? "تسجيل الأفراد"
                    : "Individual Registration"
                }}
              </h3>
              <p>
                {{
                  $i18n.locale === "ar"
                    ? "أنشئ حسابًا لتكون جزءًا من عائلتنا واستمتع بعملية دفع أسرع عبر الإنترنت "
                    : "Create an account to be part of our family and enjoy faster online checkout"
                }}
              </p>
              <nuxt-link to="/auth/Register" class="btn btn-special">
                {{
                  $i18n.locale === "ar" ? "انشئ حسابك" : "Create your account"
                }}
              </nuxt-link>
            </div>

            <div class="company">
              <h3>
                {{
                  $i18n.locale === "ar"
                    ? "تسجيل الشركات"
                    : "Company Registration"
                }}
              </h3>
              <p>
                {{
                  $i18n.locale === "ar"
                    ? "تم تصميم منصتنا مع أخذ التصميم الاحترافي في الاعتبار، وتوفر تجربة مخصصة. قم بالتسجيل للحصول على حساب للحجز والشراء عبر الإنترنت بسهولة، والتحقق من أسعار المنتجات والمخزون، وإنشاء القوائم وإدارتها. كل ما تحتاجه للحفاظ على مشاريعك على المسار الصحيح، كل ذلك في مكان واحد."
                    : "Designed with design professional in mind, our platform offers a tailored experince. Sign up for an account to easily reserve and purchase online, check product pricing and inventory, create and manage lists. Everything you need to keep your projects on track, all in one place."
                }}
              </p>
              <nuxt-link to="/auth/CompanyRegister" class="btn btn-special">
                {{
                  $i18n.locale === "ar"
                    ? "انشئ حساب شركة"
                    : "Create Company account"
                }}
              </nuxt-link>
            </div>
          </div>
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
        // success message
        locale.value === "en"
          ? $awn.success("welcome, you can now benefit from our services", {
              durations: { global: 5000 },
            })
          : $awn.success("مرحباً بك، يمكنك الآن الاستفادة من خدماتنا", {
              durations: { global: 5000 },
            });

        // save data in localStorage and store
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
  password: string()
    .required(
      locale.value === "ar" ? "كلمة المرور مطلوبة" : "Password is required"
    )
    .min(6),

});
const initialValues = { email: "", password: "", loginWithPhone: false };
</script>

<style lang="scss" scoped>
.login {
  h2 {
    margin: 0px -15px;
    padding: 20px 0px;
    @media (max-width: 768px) {
      padding: 12px;
      margin: 0px -20px;
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
    border: 1px solid $main;
    background: linear-gradient(45deg, #146890, #45b2e9, #146890);
    color: white !important;
    font-weight: bold;
    // font-size: 20px;
    padding: 0.6rem 0;
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
.row-line {
  position: relative;
  margin-bottom: 40px;
  &::before {
    border: 1px solid #45b2e9;
    content: "";
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%);
    @media (max-width: 991px) {
      display: none;
    }
  }
}
.btn-special {
  border: 1px solid #45b2e9;
  border-radius: 0 !important;
  color: $main;
  padding: 0.5rem 3rem;
  text-align: start;
  width: 80%;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: $main;
    color: #fff;
    border: 1px solid $main;
  }
}
h3 {
  color: $main;
  font-weight: bold;
  margin-top: 20px;
}
@media (max-width: 768px) {
  .px-10 {
    padding: 0 10px !important;
  }
  .pe-15 {
    padding: 0 10px !important;
  }
}
</style>
