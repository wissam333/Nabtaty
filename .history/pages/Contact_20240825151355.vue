<template>
  <div class="contact nav-margin">
    <h1 class="fw-bold title d-flex justify-content-center">
      <img width="65" src="/photos/1-1.png" alt="" />
      {{ $i18n.locale === "ar" ? "تواصل معنا" : "Contact Us" }}
    </h1>
    <div class="form">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <form
              @submit.prevent="sendContactForm"
              class="card-body text-left"
              style="
                margin-top: 50px;
                position: relative;
                z-index: 4;
                direction: ltr;
              "
              :class="$i18n.locale == 'en' ? '' : 'form_ar'"
            >
              <div class="d-flex wrap">
                <div class="col-md-5 col-lg-5 mb-4">
                  <v-text-field
                    border_color="000"
                    color="000"
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    :label="$t('FirstName')"
                    v-model="firstName"
                    required
                  ></v-text-field>
                </div>
                <div class="ml col-md-5 col-lg-5 mb-4">
                  <v-text-field
                    border_color="000"
                    color="000"
                    type="text"
                    name="LastName"
                    id="LastName"
                    v-model="lastName"
                    :label="$t('LastName')"
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-9 col-lg-10 col-lg-11 mb-4">
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
              <div class="d-flex wrap">
                <!-- <div class="col-md-5 col-lg-5 mb-4">
                    <select
                      :class="$i18n.locale == 'ar' ? 'ar' : ''"
                      class="form-control just-bottom-border"
                      style="
                        border-bottom: 1px solid #000;
                        color: #000;
                        padding: 24px 16px 6px;
                      "
                      v-model="Country"
                    >
                      <option selected disabled>
                        {{ $i18n.locale === "ar" ? "البلد" : "Country" }}
                      </option>
                      <option
                        v-for="item in data"
                        :key="item.id"
                        :value="item.name.common"
                      >
                        <span v-if="locale === 'en'">
                          {{
                            item.name && item.name.common ? item.name.common : ""
                          }}
                        </span>
                        <span v-else>
                          {{ item.translations.ara.common }}
                        </span>
                      </option>
                    </select>
                  </div> -->
                <div class="col-sm-9 col-lg-10 col-lg-11 mb-4">
                  <v-text-field
                    name="Phone"
                    id="Phone"
                    :label="$t('Phone')"
                    v-model="phone"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-9 col-lg-10 col-lg-11 mb-4">
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
              <button :disabled="loading" class="btn btn-danger">
                {{ $t("Send") }}
              </button>
            </form>
          </div>
          <div class="col-lg-4">
            <!-- <img src="/ENQUIRIES/ENQUIRIES.png" alt="" /> -->
            <ul class="info">
              <h4 class="">
                {{
                  $i18n.locale === "ar"
                    ? "جراند جولد انترناشيونال"
                    : "Grand Gold International"
                }}
              </h4>
              <li
                v-html="
                  $i18n.locale === 'ar'
                    ? ContactData?.description1
                    : ContactData?.englishDescription1
                "
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="map">
    <iframe
      :src="ContactData?.geoLocation"
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

const { $awn } = useNuxtApp();
const { locale } = useI18n();

// get contries codes
const { data } = await useFetch("https://restcountries.com/v3/all");

// get ContactData
const { data: ContactData, pending } = await useGetSiteApi().GetAll(
  `${api.GetPagesDetail}/1`,
  [
    "image",
    "image1",
    "description1",
    "englishDescription1",
    "description2",
    "englishDescription2",
    "description",
    "englishDescription",
    "description3",
    "englishDescription3",
    "geoLocation",
  ]
);

let firstName = ref();
let lastName = ref();
let phone = ref();
let email = ref();
let message = ref();
// let Country = ref(locale.value === "ar" ? "البلد" : "Country");

let dataa = ref();
let loading = ref(false);
const sendContactForm = async () => {
  try {
    loading.value = true;
    dataa.value = {
      name: firstName.value + " " + lastName.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    const response = await useHttpForUserApi().post(ContactForm, dataa.value);
    // rest values
    firstName.value = "";
    lastName.value = "";
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
  } finally {
    loading.value = false;
  }
};
</script>
<style lang="scss" scoped>
.contact {
  background-color: #fff;
  padding-bottom: 100px;
  .container {
    background-color: #fff;
    border-radius: 16px;
  }
  h1 {
    padding: 40px;
  }
  .col-lg-11 {
    width: 86%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .btn {
    width: 86%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .ENQUIRIES-img {
    @media (max-width: 991px) {
      position: absolute;
      width: 100px;
      right: 0;
      top: -20px;
    }
    img {
      width: 100%;
      margin-top: -200px;
      @media (max-width: 1400px) {
        margin-top: -100px;
      }
      @media (max-width: 1200px) {
        margin-top: -50px;
      }
      @media (max-width: 991px) {
        margin-top: 0px;
        position: relative;
        z-index: 1;
      }
    }
  }
}
.row {
  position: relative;
}
.wrap {
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .ml {
    margin-left: 20px;
    @media (max-width: 768px) {
      margin-left: 0px;
    }
  }
}
.map {
  background-color: $main;
  border: 2px solid $main;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 100px;
  iframe {
    border: none;
    width: 100%;
    height: 500px;
  }
}
.info {
  margin-top: 70px;
  color: #333;
  line-height: 50px;

  li {
    font-size: 18px;
    margin-bottom: 20px;
  }
  h4 {
    margin-bottom: 20px;
  }
  h4,
  .icon {
    color: $basic;
    margin-right: 5px;
  }
}
</style>
