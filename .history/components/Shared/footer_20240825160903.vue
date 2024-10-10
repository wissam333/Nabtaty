<template>
  <div class="bottom">
    <!-- <div class="go-up" @click="scrollToTop">
      <img src="/photos/icons/Asset 20.png" alt="" />
    </div> -->
    <div class="overlay"></div>
    <div class="foot cont" :class="$i18n.locale === 'ar' ? 'ar' : ''">
      <div class="logo">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img class="mb-5" src="/photos/48-1.png" alt="" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="contact-info"
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          v-html="
            $i18n.locale === 'ar'
              ? ContactDetails?.description1
              : ContactDetails?.englishDescription1
          "
        ></div>

        <div
          class="d-flex socials"
          data-aos="fade-up"
          data-aos-duration="1000"
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
        >
          <div class="socials-img">
            <a href="https://www.facebook.com/" target="_blank" class="mx-2">
              <font-awesome :icon="['fab', 'facebook']" />
            </a>
          </div>

          <div class="socials-img">
            <a href="https://web.whatsapp.com/" target="_blank" class="mx-2">
              <font-awesome :icon="['fab', 'whatsapp']" />
            </a>
          </div>

          <div class="socials-img">
            <a href="https://x.com/" target="_blank" class="mx-2">
              <font-awesome :icon="['fab', 'x-twitter']" />
            </a>
          </div>

          <div class="socials-img">
            <a href="https://www.linkedin.com/" target="_blank" class="mx-2">
              <font-awesome :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
      </div>

      <form
        @submit.prevent="sendContactForm"
        class="text-left"
        style="margin-top: 50px; position: relative; z-index: 4; width: 100%"
        :class="$i18n.locale == 'en' ? '' : 'form_ar'"
      >
        <div class="mb-4">
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
        <div class="mb-4">
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

        <div class="mb-4">
          <v-text-field
            name="Phone"
            id="Phone"
            :label="$t('Phone')"
            v-model="phone"
            required
          ></v-text-field>
        </div>
        <div class="mb-4">
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
    <div class="c">
      <!-- <p>
        &copy;
        <span class="gulf-if">
          {{
            $i18n.locale === "ar"
              ? "مصنع الفن الملكي للأخشاب"
              : "Royal Art Wooden Factory"
          }}
        </span>
        {{ new Date().getFullYear() }}.
        {{
          $i18n.locale === "ar" ? " كل الحقوق محفوظة." : "All Rights Reserved."
        }}
      </p> -->
      <div class="contact">
        <ul>
          <li
            v-for="menu in Menus?.items"
            :key="menu.id"
            class="menu-item"
            v-show="menu.type !== 'Drop Down Menu'"
          >
            <div class="paste-button">
              <div>
                <nuxt-link class="button" :to="menu.pageUrl">
                  {{ $i18n.locale === "ar" ? menu.name : menu.englishName }}
                </nuxt-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { $awn } = useNuxtApp();
const { locale } = useI18n();

const { data: Menus } = await useGetSiteApi().GetAll(
  `${api.MenusMasterGetByCategoryApi}?categoryId=4`
);

const { data: Socials } = await useGetSiteApi().GetAll(
  `${api.MenusMasterGetByCategoryApi}?categoryId=2`
);

const { data: ContactDetails, pending } = await useGetSiteApi().GetAll(
  `${api.GetPagesDetail}/1`,
  [
    "image",
    "image1",
    "description1",
    "englishDescription1",
    "description2",
    "englishDescription2",
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
    console.log("Response:", response);
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
    console.error("Error posting contact form:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.bottom {
  position: relative;
  background: url("/photos/47-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: $main;

  @media (max-width: 550px) {
    direction: rtl;
    text-align: left;
  }
  // .overlay {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   background: $basic;
  // }

  .foot {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    align-items: center;
    color: #fff;
    position: relative;
    padding: 30px;
    gap: 0px;
    @media (max-width: 991px) {
      direction: ltr;
      text-align: left;
      margin: 0;

      &.ar {
        direction: ltr;
        text-align: right;
      }
    }

    &.ar {
      @media (max-width: 991px) {
        justify-items: end;
      }
    }
    @media (max-width: 1200px) {
      grid-template-columns: 2fr 2fr;
      justify-items: start;
      .socials {
        margin-top: 50px;
      }
    }
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      justify-items: start;
    }

    @media (max-width: 550px) {
      grid-template-columns: 1fr;
      justify-items: start;
    }

    // &::after {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   bottom: -30px;
    //   right: 0;
    //   border-bottom: 2px solid #fff;
    // }

    .socials {
      display: flex;
      @media (max-width: 1200px) {
        flex-direction: row;
        margin-bottom: 50px;
      }

      &.ar {
        .socials-img {
          margin-left: 20px !important;
          margin-right: 0px !important;
        }
      }
      .socials-img {
        width: 40px;
        font-size: 35px;
        margin-right: 20px;
        display: flex;
        justify-content: center;

        a {
          color: #fff;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          &:hover {
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
        img {
          width: 100%;
        }
      }
    }

    ul {
      padding: 0;
      a {
        &.router-link-active {
          li {
            font-size: 22px;
            color: #fff;
            @media (max-width: 1300px) {
              font-size: 20px;
            }
          }
        }
      }

      li {
        font-size: 18px;
        line-height: 50px;
        transition: all 0.3s ease;
        cursor: pointer;
        a {
          color: #fff;
          transition: all 0.3s ease;
        }
        &:hover {
          transform: translateX(10px);
          .paste-button a {
            color: $main;
          }
        }
      }
    }

    .logo {
      width: 300px;
      // mix-blend-mode: difference;
      @media (max-width: 1400px) {
        width: 250px;
      }
      // @media (max-width: 991px) {
      //   display: none;
      // }
      // @media (max-width: 550px) {
      //   margin: auto;
      //   margin-bottom: 30px;
      // }

      img {
        width: 100%;
        //   mix-blend-mode: difference;
      }
    }
  }

  .c {
    color: #fff;
    font-size: 16px;
    // text-align: left;
    padding: 20px;
    // margin: 50px 100px 0px 100px;
    position: relative;

    background-color: rgb(5 5 6 / 60%);
    // @media (max-width: 991px) {
    //   margin: 60px 20px 0px 20px;
    // }
  }
  .gulf-if {
    color: #fff;
    font-weight: bold;
  }
}
.icon {
  color: #fff;
  margin-right: 5px;
}
.contact-info {
  font-size: 16px;
  color: #fff;
  &.ar {
    direction: rtl;
  }
}

.menu-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.menu-item {
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  list-style: none; /* Remove bullet points */
  padding: 0.5rem; /* Optional: add padding for spacing */
  white-space: nowrap;
  text-wrap: nowrap;
}
.sub-title {
  position: relative;
  margin-bottom: 30px;
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    right: auto;
    height: 2px;
    width: 25%;
    background-color: $DarkBlue;
  }
  &.ar {
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 0;
      left: auto;
      height: 2px;
      width: 25%;
      background-color: $DarkBlue;
    }
  }
}
.contact {
  margin: 0px;
  @media (max-width: 991px) {
    margin: 0px;
  }
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
}
.router-link-active.router-link-exact-active {
  -webkit-background-clip: text;
  font-weight: bold;
  background-color: #146890;
  background-image: linear-gradient(45deg, #146890, #45b2e9, #146890);
  background-repeat: repeat;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 18px;
}

.go-up {
  position: absolute;
  bottom: 0;
  z-index: 100000000000000000000;
  right: 0;
  margin: 80px 55px;
  img {
    width: 60px;
    height: 60px;
    box-shadow: 0px 0px 8px 1px #18202d;
  }
  @media (max-width: 991px) {
    margin: 20px;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
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
