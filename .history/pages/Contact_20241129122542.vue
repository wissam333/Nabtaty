<template>
  <div class="contact nav-margin" :class="$i18n.locale == 'ar' ? 'ar' : ''">
    <div class="container">
      <div class="title mb-5">
        <h1 class="d-flex align-items-center justify-content-center">
          <img width="70" src="/photos/nabtaty8.png" alt="" />
          <span class="underline">
            {{ $i18n.locale === "ar" ? "اتصل بنا" : "Contact Us" }}
          </span>
        </h1>
      </div>
      <div class="form">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <form
                @submit.prevent="sendContactsForm"
                class="text-left form"
                style="
                  margin-top: 50px;
                  position: relative;
                  z-index: 4;
                  width: 100%;
                "
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
            </div>
            <div class="col-lg-4 contact-text">
              <!-- <img src="/ENQUIRIES/ENQUIRIES.png" alt="" /> -->
              <ul class="info">
                <h4 class="">
                  <img width="50" src="/photos/nabtaty8.png" alt="" />
                  <span>
                    {{ $t("Baddar Furniture") }}
                  </span>
                </h4>
                <div
                  class="d-flex align-items-start justify-content-start flex-column"
                >
                  <div
                    class="d-flex align-items-center contacts-content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    v-for="info in Contact?.data"
                    :key="info.id"
                    v-show="info.email"
                  >
                    <span class="icon">
                      <font-awesome :icon="['fas', 'envelope']" />
                    </span>

                    <div
                      class="contacts-info"
                      :class="$i18n.locale === 'ar' ? 'ar' : ''"
                    >
                      <p>{{ info.email }}</p>
                    </div>
                  </div>

                  <div
                    class="d-flex align-items-center contacts-content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    v-for="info in Contact?.data"
                    :key="info.id"
                    v-show="info.phone"
                  >
                    <span class="icon">
                      <font-awesome :icon="['fas', 'phone']" />
                    </span>

                    <div
                      class="contacts-info"
                      :class="$i18n.locale === 'ar' ? 'ar' : ''"
                    >
                      <p>{{ info.phone }}</p>
                    </div>
                  </div>

                  <div
                    class="d-flex align-items-center contacts-content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    v-for="info in Contact?.data"
                    :key="info.id"
                    v-show="info.website"
                  >
                    <span class="icon">
                      <font-awesome :icon="['fas', 'location-dot']" />
                    </span>

                    <div
                      class="contacts-info"
                      :class="$i18n.locale === 'ar' ? 'ar' : ''"
                    >
                      <p>{{ info.website }}</p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="map" v-if="Contact?.geoLocation">
      <iframe
        :src="Contact?.geoLocation"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { $awn } = useNuxtApp();
const { locale } = useI18n();

const { data: Contact, pending } = await useFetch(`${api.GetContact}`, {
  baseURL: apiBase,
  credentials: "include",
  headers: {
    "accept-language": locale.value === "ar" ? "ar" : "en",
  },
});

let mobileData = ref();
let emailData = ref();
let websiteData = ref();

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
    const response = await useFetch(api.SendMessage, {
      method: "POST",
      credentials: "include",
      baseURL: apiBase,
      body: dataa.value,
    });
    console.log("Response:", response.data.value);
    // rest values
    name.value = "";
    phone.value = "";
    email.value = "";
    message.value = "";
    // toast
    if (response.data.value.success) {
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
.title {
  font-weight: bold;
  padding: 40px 0px;
  span {
    -webkit-background-clip: text;
    font-weight: bold;
    background-color: #8cc63e;
    background-image: linear-gradient(to right, #191d23, #8cc63e);
    background-repeat: repeat;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
.col-lg-8 {
  padding: 0px 100px;
}
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
      background-color: $main;
      background-image: linear-gradient(45deg, $main, $second, $main);
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

.contacts-content {
  margin-bottom: 20px;
  .icon {
    background-color: $main;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 15px;
    margin-bottom: 16px;
    svg {
      width: 20px;
      font-size: 20px;
      color: #fff;
    }
  }
}
.send {
  width: 100%;
  border: 1px solid #fff;
  font-weight: bold;
  background-color: $basic;
  color: #fff;
  border-radius: 30px;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  &:hover {
    background-color: #fff;
    color: $basic;
  }
}
</style>
