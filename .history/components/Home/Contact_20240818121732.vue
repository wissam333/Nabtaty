<template>
  <div class="contact">
    <img class="back" src="/photos/images/Artboard 12.png" alt="" />
    <div class="container">
      <div class="wrap">
        <form action="">
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
let message = ref();
let email = ref();
let phone = ref();
let name = ref();
let loading = ref(false);
</script>
<style lang="scss" scoped>
.contact {
  position: relative;
  @media (max-width: 991px) {
    background: url("/photos/images/Artboard 12.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .back {
    width: 100%;
    height: 100%;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .wrap {
    width: 80%;
    margin: auto;

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
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 1px 1px 20px 0px #3333334f;
    padding: 50px 100px;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 50%;

    @media (max-width: 991px) {
      padding: 30px;
      width: 80%;
      position: relative;
      transform: translate(-50%, -50%);
    }

    .field {
      width: 100%;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
