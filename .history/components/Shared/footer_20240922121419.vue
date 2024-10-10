<template>
  <div class="bottom">
    <!-- <div class="go-up" @click="scrollToTop">
      <img src="/photos/icons/Asset 20.png" alt="" />
    </div> -->
    <div class="overlay"></div>
    <div class="foot cont" :class="$i18n.locale === 'ar' ? 'ar' : ''">
      <div class="logo">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img src="/AlMuadalahLogoRamli.60ed7b1.png" alt="" />
        </div>

        <div
          class="d-flex align-items-center contacts-content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <font-awesome :icon="['fas', 'envelope']" />
          <div class="contacts-info" :class="$i18n.locale === 'ar' ? 'ar' : ''">
            <p>{{ emailData }}</p>
          </div>
        </div>

        <div
          class="d-flex align-items-center contacts-content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <font-awesome :icon="['fas', 'phone']" />

          <div class="contacts-info" :class="$i18n.locale === 'ar' ? 'ar' : ''">
            <p>{{ mobileData }}</p>
          </div>
        </div>

        <div
          class="d-flex align-items-center contacts-content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <font-awesome :icon="['fas', 'globe']" />

          <div class="contacts-info" :class="$i18n.locale === 'ar' ? 'ar' : ''">
            <p>{{ websiteData }}</p>
          </div>
        </div>

        <!-- <div
          class="d-flex align-items-center contacts-content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <font-awesome :icon="['fas', 'box']" />

          <div
            class="contacts-info"
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
            v-html="
              $i18n.locale === 'ar'
                ? ContactsDetails?.description3
                : ContactsDetails?.englishDescription3
            "
          ></div>
        </div> -->

        <!-- <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="contacts-info"
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          v-html="
            $i18n.locale === 'ar'
              ? ContactsDetails?.description4
              : ContactsDetails?.englishDescription4
          "
        ></div> -->

        <!-- social -->
        <div
          class="d-flex socials"
          data-aos="fade-up"
          data-aos-duration="1000"
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
        >
          <a
            :href="Socials?.items[0]?.pageUrl"
            target="_blank"
            class="socials-img"
            style=""
          >
            <font-awesome :icon="['fab', 'x-twitter']" />
          </a>

          <a
            :href="Socials?.items[1]?.pageUrl"
            target="_blank"
            class="socials-img"
            style=""
          >
            <font-awesome :icon="['fab', 'youtube']" />
          </a>

          <a
            :href="Socials?.items[2]?.pageUrl"
            target="_blank"
            class="socials-img"
            style=""
          >
            <font-awesome :icon="['fab', 'facebook']" />
          </a>
        </div>
      </div>
    </div>
    <div class="c">
      <p>
        &copy;
        <span class="gulf-if">
          {{ $i18n.locale === "ar" ? "إتحاد التأمين الخليجي" : "Gulf-If" }}
        </span>
        {{ new Date().getFullYear() }}.
        {{
          $i18n.locale === "ar" ? " كل الحقوق محفوظة." : "All Rights Reserved."
        }}
      </p>
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
  `${api.GetMenuDetail}?categoryId=4`
);

const { data: Socials } = await useGetSiteApi().GetAll(
  `${api.GetMenuDetail}?categoryId=2`
);

const { data: ContactsDetails, pending } = await useGetSiteApi().GetAll(
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

let mobileData = ref();
let emailData = ref();
let websiteData = ref();

watchEffect(() => {
  if (process.client) {
    if (ContactsDetails.value) {
      // Create a DOMParser to parse the string as HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        ContactsDetails.value.englishDescription,
        "text/html"
      );

      // Use querySelectorAll to find all <p> elements
      const details = [...doc.querySelectorAll("p")].map((p) =>
        p.textContent.trim()
      );

      // Now we can extract the relevant details
      mobileData.value = details[0].trim();
      emailData.value = details[1].trim();
      websiteData.value = details[2].trim();
    }
  }
});
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    align-items: start;
    justify-items: center;
    color: $main;
    position: relative;
    padding: 30px;
    &.ar {
      @media (max-width: 550px) {
        justify-items: end;
      }
    }
    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-items: start;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -30px;
      right: 0;
      border-bottom: 2px solid #000;
    }

    // &::before {
    //   content: "";
    //   position: absolute;
    //   top: -10px;
    //   left: 0;
    //   bottom: 0;
    //   right: 0;
    //   height: 0;
    //   border-top: 2px solid $main;
    // }
    ul {
      padding: 0;
      a {
        &.router-link-active {
          li {
            font-size: 22px;
            color: $main;

            @media (max-width: 1300px) {
              font-size: 20px;
            }
          }
        }
      }

      li {
        font-size: 14px;
        line-height: 45px;
        transition: all 0.3s ease;
        cursor: pointer;
        a {
          color: #333;
        }
        &:hover {
          transform: translateX(10px);
          a {
            color: $main;
          }
        }
      }
    }

    .logo {
      width: 300px;
      @media (max-width: 1400px) {
        width: 250px;
      }
      @media (max-width: 550px) {
        margin: auto;
        margin-bottom: 30px;
      }

      img {
        width: 100%;
      }
    }
  }

  .c {
    color: #000;
    font-size: 22px;
    text-align: center;
    padding-bottom: 1px;
    margin: 40px 100px 0px 100px;

    @media (max-width: 991px) {
      margin: 60px 20px 0px 20px;
    }
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
.contacts-info {
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
.contacts {
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

.contacts-content {
  svg {
    width: 25px;
    font-size: 25px;
    margin-right: 10px;
    margin-bottom: 15px;
    color: $second;
  }
}
.foot {
  &.ar {
    .contacts-content {
      svg {
        width: 25px;
        font-size: 25px;
        margin-left: 10px;
        margin-right: 0px !important;
        margin-bottom: 10px;
      }
      @media (max-width: 991px) {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
