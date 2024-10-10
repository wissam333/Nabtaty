<template>
  <form
    @submit.prevent="sendContactsForm"
    class="text-left form"
    style="margin-top: 50px; position: relative; z-index: 4; width: 100%"
    :class="$i18n.locale == 'ar' ? 'ar' : ''"
  >
    <div class="">
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
    <div class="">
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

    <div class="">
      <v-text-field
        name="Phone"
        id="Phone"
        :label="$t('Phone')"
        v-model="phone"
        required
      ></v-text-field>
    </div>
    <div class="">
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
    <div class="d-flex justify-content-center">
      <button :disabled="loading" class="btn send">
        {{ loading ? "Loading" : $t("Send") }}
      </button>
    </div>
  </form>
</template>
<script setup>
const {
  public: { api },
} = useRuntimeConfig();
const { $awn } = useNuxtApp();
const { locale } = useI18n();

let name = ref();
let phone = ref();
let email = ref();
let message = ref();

let dataa = ref();
let loading = ref(false);
const sendContactsForm = async () => {
  try {
    loading.value = true;
    dataa.value = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    const response = await useHttpForUserApi().post(api.Contacts, dataa.value);
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
    console.error("Error posting contacts form:", error);
  } finally {
    loading.value = false;
  }
};
</script>
<style lang="scss" scoped>
.send {
  width: 100%;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 30px;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: $main;
  }
}
</style>
