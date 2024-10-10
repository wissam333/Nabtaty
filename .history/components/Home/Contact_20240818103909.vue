<template>
  <div class="contact">
    <div class="container">
      <form action="">
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
            :label="$t('name')"
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
      </form>
    </div>
  </div>
</template>
<script setup>
let message = ref();
let email = ref();
let phone = ref();
let name = ref();
</script>
<style lang="scss" scoped>
.contact {
  h1 {
    font-size: 60px;
    font-family: Herova, "Arial", "sans-serif";
    color: $main;
    margin-top: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 1px 1px 10px 0px #333;
    .field {
      width: 100%;
    }
  }
}
</style>
