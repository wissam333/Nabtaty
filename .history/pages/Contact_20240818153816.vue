<template>
  <div class="contact nav-margin" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <img class="back" src="/photos/images/Artboard 12.png" alt="" />
    <div class="container">
      <div class="wrap">
        <form action="" @submit.prevent="sendContactForm">
          <div style="position: relative">
            <!-- <img class="logo" src="/photos/icons/Asset 26.png" alt="" /> -->

            <h1 class="text-center">
              {{ $i18n.locale === "ar" ? "تواصل معنا" : "Contact Us" }}
            </h1>

            <div class="field">
              <v-text-field
                border_color="000"
                color="000"
                type="text"
                name="name"
                id="name"
                :label="$t('Name')"
                v-model="name"
                required
              ></v-text-field>
            </div>

            <div class="field">
              <v-text-field
                name="Phone"
                id="Phone"
                :label="$t('Phone')"
                v-model="phone"
                required
              ></v-text-field>
            </div>

            <div class="field">
              <v-text-field
                border_color="000"
                color="000"
                type="eamil"
                name="Email"
                id="Email"
                :label="$t('Email')"
                class="email"
                v-model="email"
                required
              ></v-text-field>
            </div>

            <div class="field">
              <v-textarea
                class="mt-2 w-100"
                style="height: 150px"
                id="Message"
                name="Message"
                :label="$t('Message')"
                v-model="message"
                required
              ></v-textarea>
            </div>

            <button :disabled="loading" class="btn btn-main mt-10">
              <span>
                {{ loading ? "Loading" : $t("Send") }}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { api },
} = useRuntimeConfig();
const { $awn } = useNuxtApp();
const { locale } = useI18n();

let message = ref();
let email = ref();
let phone = ref();
let name = ref();

let dataa = ref();
let loading = ref(false);

const sendContactForm = async () => {
  try {
    loading.value = true;
    dataa.value = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    const response = await useHttpForUserApi().post(api.Contact, dataa.value);
    console.log("Response:", response);
    // rest values
    name.value = "";
    phone.value = "";
    email.value = "";
    message.value = "";
    // toast
    if (response.data.value.succeeded) {
      $awn.success(
        locale.value === "ar"
          ? "تم إرسال الطلب بنجاح"
          : "Request Sent Successfully",
        { durations: { global: 5000 } }
      );
    } else {
      $awn.alert("Something Error", { durations: { global: 5000 } });
    }
  } catch (error) {
    console.error("Error posting contact form:", error);
  } finally {
    loading.value = false;
  }
};
</script>
<style lang="scss" scoped>
.contact {
  position: relative;
  background: url("/photos/images/Artboard 12.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  .back {
    width: 100%;
    height: 100%;
    display: none;
  }
  .wrap {
    width: 80%;
    margin: auto;
    @media (max-width: 991px) {
      width: 100%;
      padding: 40px 0px;
    }

    .logo {
      position: absolute;
      width: 100%;
      right: 0;
      transform: rotate(270deg);
      top: 0;
    }
  }
  h1 {
    font-size: 60px;
    font-family: Herova, "Arial", "sans-serif";
    color: $main;
    margin-bottom: 20px;
  }
  form {
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 1px 1px 20px 0px #3333334f;
    // padding: 50px 100px;
    padding: 30px;
    width: 100%;
    left: auto;
    right: auto;
    position: relative;
    transform: none;
    display: flex;
    align-items: center;

    .field {
      width: 100%;
    }
    .btn {
      width: 100%;
    }
  }
}

// arabic
.contact {
  &.ar {
    form {
      left: 50%;
      right: auto !important;
    }
  }
}
</style>
