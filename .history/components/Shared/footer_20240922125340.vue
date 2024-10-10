<template>
  <div class="bottom">
    <!-- <div class="go-up" @click="scrollToTop">
      <img src="/photos/icons/Asset 20.png" alt="" />
    </div> -->
    <div class="overlay"></div>
    <div class="overlay"></div>
    <div class="foot cont" :class="$i18n.locale === 'ar' ? 'ar' : ''">
      <div class="logo">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img src="/AlMuadalahLogoRamli.60ed7b1.png" alt="" />
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

      <div class="links" data-aos="fade-up">
        <h4 class="sub-title" :class="$i18n.locale === 'ar' ? 'ar' : ''">
          {{ $i18n.locale === "ar" ? "روابط مفيدة" : "Useful Links" }}
        </h4>
        <div class="d-flex align-items-start justify-content-start">
          <ul class="menu-list">
            <li
              v-for="menu in Menus?.items.slice(0, 3)"
              :key="menu.id"
              class="menu-item"
            >
              <div class="paste-button">
                <div>
                  <nuxt-link class="button" :to="menu.pageUrl">
                    {{ locale === "ar" ? menu.name : menu.englishName }}
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ul>
          <ul class="menu-list">
            <li
              v-for="menu in Menus?.items.slice(3)"
              :key="menu.id"
              class="menu-item"
            >
              <div class="paste-button">
                <div>
                  <nuxt-link class="button" :to="menu.pageUrl">
                    {{ locale === "ar" ? menu.name : menu.englishName }}
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="contact">
        <h4 class="sub-title" :class="$i18n.locale === 'ar' ? 'ar' : ''">
          {{ $i18n.locale === "ar" ? "الإتصال بنا" : "Contact Us" }}
        </h4>

        <br />

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

        <br />

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

        <br />

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
      </div>
    </div>
    <div class="c">
      <p>
        &copy;
        <span class="name">
          {{ $i18n.locale === "ar" ? "بدار للمفروشات" : "Baddar Furniture" }}
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
  `${api.GetMenuDetail}?categoryId=3`
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
  background: url("/footer.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: $main;

  .overlay {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, #00000091, transparent);
    z-index: 9;
  }

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
      border-bottom: 2px solid #fff;
    }

    .socials {
      display: flex;
      justify-content: center;
      margin-top: -15px;
      @media (max-width: 1200px) {
        flex-direction: row;
        margin-bottom: 50px;
      }

      &.ar {
        .socials-img {
          margin-left: 20px !important;
          margin-right: 0px !important;
        }
        @media (max-width: 991px) {
          justify-content: flex-end;
        }
      }
      .socials-img {
        width: 30px;
        font-size: 30px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        color: $second;

        a {
          color: $second;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          &:hover {
            color: $second;
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
      display: flex;
      flex-direction: column;
      margin-top: -25px;
      // align-items: flex-start;
      img {
        width: 300px;
        margin-bottom: 40px;
        @media (max-width: 1400px) {
          width: 250px;
        }
      }
    }
  }

  .c {
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding-bottom: 1px;
    margin: 40px 100px 0px 100px;

    @media (max-width: 991px) {
      margin: 60px 20px 0px 20px;
    }
  }
  .name {
    color: $second;
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
  color: $second;
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

.sub-title {
  position: relative;
  margin-bottom: 30px;
  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    right: auto;
    height: 4px;
    width: 100%;
    background-color: $second;
  }
  &.ar {
    &::after {
      content: "";
      position: absolute;
      bottom: -15px;
      right: 0;
      left: auto;
      height: 4px;
      width: 100%;
      background-color: rgb(213, 0, 0);
    }
  }
}
.menu-list {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
}

.menu-item {
  flex: 0 0 50%; /* Each item takes up 50% of the container's width */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  list-style: none; /* Remove bullet points */
  padding: 0.5rem; /* Optional: add padding for spacing */
  white-space: nowrap;
  text-wrap: nowrap;
}
.links {
  width: 100%;
}
</style>
