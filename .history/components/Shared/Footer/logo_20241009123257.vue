<template>
  <div class="logo">
    <div data-aos="fade-up" data-aos-duration="1000">
      <img src="/logo/logo nabtaty-03.png" alt="" />
    </div>

    <div class="d-flex align-items-start justify-content-start flex-column">
      <div
        class="d-flex align-items-center contacts-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span class="icon">
          <font-awesome :icon="['fas', 'envelope']" />
        </span>

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
        <span class="icon">
          <font-awesome :icon="['fas', 'phone']" />
        </span>

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
        <span class="icon">
          <font-awesome :icon="['fas', 'globe']" />
        </span>

        <div class="contacts-info" :class="$i18n.locale === 'ar' ? 'ar' : ''">
          <p>{{ websiteData }}</p>
        </div>
      </div>
    </div>

    <!-- social -->
    <!-- <div
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
    </div> -->
  </div>
</template>
<script setup>
// const Socials = useSocialMenus().value;
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { locale } = useI18n();

const { data: ContactsDetails, pending } = await useGetSiteApi().GetAll(
  `${api.GetPagesDetail}/1`
);

let mobileData = ref();
let emailData = ref();
let websiteData = ref();

watchEffect(() => {
  if (process.client) {
    if (ContactsDetails.value) {
      // Create a DOMParser to parse the string as HTML
      const parser = new DOMParser();
      let doc;
      if (locale.value === "en") {
        doc = parser.parseFromString(
          ContactsDetails.value.englishDescription,
          "text/html"
        );
      } else {
        doc = parser.parseFromString(
          ContactsDetails.value.description,
          "text/html"
        );
      }

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
// .socials {
//   display: flex;
//   justify-content: center;
//   margin-top: -15px;
//   align-items: center;
//   @media (max-width: 1200px) {
//     flex-direction: row;
//     margin-bottom: 50px;
//   }

//   &.ar {
//     .socials-img {
//       margin-left: 20px !important;
//       margin-right: 0px !important;
//     }
//     @media (max-width: 991px) {
//       justify-content: flex-end;
//     }
//   }
//   .socials-img {
//     width: 30px;
//     font-size: 30px;
//     margin: 0px 10px;
//     display: flex;
//     justify-content: center;
//     color: $second;

//     a {
//       color: $second;
//       transition: all 0.3s ease-in-out;
//       cursor: pointer;
//       &:hover {
//         color: $second;
//       }
//     }
//     img {
//       width: 100%;
//     }
//   }
// }
.contacts-info {
  word-break: break-all;
  font-size: 16px;
  color: #333;
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
    }
  }
}
.logo {
  display: flex;
  flex-direction: column;
  margin-top: -25px;
  // align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
  img {
    width: 300px;
    margin-bottom: 40px;
    @media (max-width: 1400px) {
      width: 250px;
    }
  }
}
</style>
