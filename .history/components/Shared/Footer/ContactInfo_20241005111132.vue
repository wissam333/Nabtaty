<template>
  <div class="contact w-100">
    <h4 class="sub-title linear" :class="$i18n.locale === 'ar' ? 'ar' : ''">
      <span> {{ $i18n.locale === "ar" ? "الاتصال بنا" : "Contact Us" }}</span>
    </h4>

    <br />

    <div class="d-flex align-items-start justify-content-start flex-column">
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
</template>
<script setup>
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
</style>
