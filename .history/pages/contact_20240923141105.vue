<template>
  <div class="contact" :class="$i18n.locale == 'ar' ? 'ar' : ''">
    <div class="nav-padding pb-10 mb-10">
      <div class="overlay"></div>
      <h1>
        <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
        <span>
          {{ $i18n.locale === "ar" ? "تواصل معنا" : "Contact Us" }}
        </span>
      </h1>
    </div>
    <div class="form">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <form
              @submit.prevent="sendContactForm"
              class="card-body text-left"
              style="margin-top: 50px; position: relative; z-index: 4"
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
                <div
                  class="ml col-md-5 col-lg-5 mb-4"
                  :class="$i18n.locale === 'ar' ? 'ar' : ''"
                >
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
              <div class="col-lg-11 d-flex justify-content-center">
                <button :disabled="loading" class="btn btn-main">
                  <span>
                    {{ loading ? "Loading" : $t("Send") }}
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-4 contact-text">
            <!-- <img src="/ENQUIRIES/ENQUIRIES.png" alt="" /> -->
            <ul class="info">
              <h4 class="">
                <img width="65" src="/photos/1-1.png" alt="" />
                <span>
                  {{
                    $i18n.locale === "ar"
                      ? "كافيه بترفلي اف واي دي"
                      : "Butterfly Fyd Caffe"
                  }}
                </span>
              </h4>

              <div
                class="d-flex align-items-center contact-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <font-awesome :icon="['fas', 'envelope']" />

                <li
                  v-html="
                    $i18n.locale === 'ar'
                      ? ContactData?.description
                      : ContactData?.englishDescription
                  "
                ></li>
              </div>

              <div
                class="d-flex align-items-center contact-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <font-awesome :icon="['fas', 'phone']" />
                <li
                  v-html="
                    $i18n.locale === 'ar'
                      ? ContactData?.description1
                      : ContactData?.englishDescription1
                  "
                ></li>
              </div>

              <div
                class="d-flex align-items-center contact-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <font-awesome :icon="['fas', 'location-dot']" />
                <li
                  style="line-height: 30px"
                  v-html="
                    $i18n.locale === 'ar'
                      ? ContactData?.description2
                      : ContactData?.englishDescription2
                  "
                ></li>
              </div>

              <div
                class="d-flex align-items-center contact-content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <font-awesome :icon="['fas', 'box']" />
                <li
                  v-html="
                    $i18n.locale === 'ar'
                      ? ContactData?.description3
                      : ContactData?.englishDescription3
                  "
                ></li>
              </div>
              <li
                v-html="
                  $i18n.locale === 'ar'
                    ? ContactData?.description4
                    : ContactData?.englishDescription4
                "
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="map" v-if="ContactData?.geoLocation">
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

// get ContactData
const { data: ContactData, pending } = await useGetSiteApi().GetAll(
  `${api.GetPagesDetail}/1`,
  [
    "image",
    "image1",
    "description",
    "englishDescription",
    "description1",
    "englishDescription1",
    "description2",
    "englishDescription2",
    "description",
    "englishDescription",
    "description3",
    "englishDescription3",
    "description4",
    "englishDescription4",
    "geoLocation",
  ]
);

let firstName = ref();
let lastName = ref();
let phone = ref();
let email = ref();
let message = ref();

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
    const response = await useHttpForUserApi().post(api.Contact, dataa.value);
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
  .nav-padding {
    position: relative;
    //   background: url("/photos/4-1.png");
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    //   .overlay {
    //     top: 0;
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     background: linear-gradient(360deg, #00000091, transparent);
    //     z-index: 9;
    //   }
  }
  .container {
    background-color: #fff;
    border-radius: 16px;
  }
  h1 {
    z-index: 10;
    position: relative;
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
  .col-lg-11 {
    width: 86%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .btn {
    width: 200px;
    border-radius: 8px;
    margin-top: 20px;
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
  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
  ul {
    padding: 0px 12px;
  }
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
    &.ar {
      margin-right: 20px;
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

  img {
    margin-right: 10px;
    margin-left: -20px;
  }

  li {
    font-size: 18px;
    margin-left: 14px;
    margin-right: 14px;
    @media (max-width: 991px) {
      font-size: 14px !important;
    }
  }
  h4 {
    margin-bottom: 20px;
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
  h4,
  .icon {
    color: $basic;
  }
}

.contact-content {
  svg {
    width: 25px;
    font-size: 25px;
    margin-right: 4px;
    margin-bottom: 10px;
    color: $main;
  }
}
.contact {
  &.ar {
    .contact-content {
      svg {
        width: 25px;
        font-size: 25px;
        margin-left: 2px;
        margin-right: 0px !important;
      }
    }
    .info {
      img {
        margin-left: 10px;
        margin-right: -20px !important;
      }
    }
  }
}
@media (max-width: 768px) {
  .ml {
    margin: 0 !important;
  }
  .contact-text {
    // padding: 0 !important;
    img {
      display: none;
    }
  }
}
@media (max-width: 350px) {
  .contact-text {
    padding: 0 !important;
  }
  .col-lg-8 {
    padding: 0 !important;
  }
  .card-body {
    padding: 10px !important;
  }
}
</style>
