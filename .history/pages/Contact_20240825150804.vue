<template>
  <div v-if="data" class="container mb-5 nav-margin">
    <h1 class="color fw-bold text-center mt-5 mb-5">
      {{ $i18n.locale == "en" ? data.englishName : data.name }}
    </h1>

    <div class="container mt-12" dir="auto" v-if="data">
      <div class="row" style="align-items: flex-start">
        <div
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
          class="col-lg-6 mt-5 info"
        >
          <div class="d-flex align-items-start mb-5">
            <font-awesome class="icon" :icon="['fas', 'envelope']" />
            <div>
              <h4 :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
                {{ $t("email") }}
              </h4>
              <a :href="`mailto:${data?.description}`" target="_blank">
                <div
                  class="mx-auto"
                  v-html="
                    $i18n.locale == 'en'
                      ? data.englishDescription
                      : data.description
                  "
                ></div>
              </a>
            </div>
          </div>

          <div class="d-flex align-items-start mb-5">
            <font-awesome class="icon" :icon="['fab', 'whatsapp']" />
            <div>
              <h4 :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
                {{ $t("whatsapp") }}
              </h4>
              <a :href="useSocialMenus().value[1]?.pageUrl" target="_blank">
                <div
                  class="mx-auto"
                  v-html="
                    $i18n.locale == 'en'
                      ? data.englishDescription2
                      : data.description2
                  "
                ></div>
              </a>
            </div>
          </div>
          <div class="d-flex align-items-start mb-5">
            <font-awesome class="icon" :icon="['fas', 'phone']" />
            <div>
              <h4 :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
                {{ $t("phone") }}
              </h4>
              <div
                class="mx-auto"
                v-html="
                  $i18n.locale == 'en'
                    ? data.englishDescription1
                    : data.description1
                "
              ></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-5 mb-5">
          <form
            @submit.prevent="submit"
            :class="$i18n.locale == 'en' ? '' : 'form_ar'"
          >
            <v-text-field
              :class="!$i18n.locale == 'en' ? 'specialinput' : ''"
              v-model="name.value.value"
              :counter="10"
              :error-messages="name.errorMessage.value"
              :label="$t('name')"
            ></v-text-field>

            <v-text-field
              :class="!$i18n.locale == 'en' ? 'specialinput' : ''"
              v-model="phone.value.value"
              :counter="9"
              :error-messages="phone.errorMessage.value"
              :label="$t('phone')"
            ></v-text-field>

            <v-text-field
              :class="!$i18n.locale == 'en' ? 'specialinput' : ''"
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              :label="$t('email')"
            ></v-text-field>

            <v-textarea
              :class="!$i18n.locale == 'en' ? 'specialinput' : ''"
              :label="$t('message')"
            ></v-textarea>

            <div class="text-center">
              <v-btn class="me-4 senbtn" variant="outlined">
                {{ $t("send") }}
              </v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="map" v-if="data?.geoLocation">
    <iframe
      :src="data?.geoLocation"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { data, pending } = await useGetSiteApi().GetAll(
  `${api.GetPagesDetail}/1`
);

import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    select(value) {
      if (value) return true;

      return "Select an item.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
</script>

<style lang="scss" scoped>
.senbtn {
  background-color: $primary;
  color: white;
}

.info {
  color: #929496;
  margin-top: 30px;
  h4 {
    color: #00c2ec;
    font-size: 20px;
  }
  span,
  a {
    color: #929496;
  }
}
.icon {
  width: 23px;
  height: 30px;
  color: #00c2ec;
  padding: 0px 8px;
}
.map {
  background-color: #00c2ec;
  border: 2px solid #00c2ec;
  border-radius: 8px;
  overflow: hidden;
  iframe {
    border: none;
    width: 100%;
    height: 500px;
  }
}
</style>
