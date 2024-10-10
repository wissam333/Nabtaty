<template>
  <div class="about nav-margin">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
      </span>
    </h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div
            v-html="
              $i18n.locale === 'ar'
                ? About.description
                : About.englishDescription
            "
          ></div>

          <br />

          <div
            v-html="
              $i18n.locale === 'ar'
                ? About.description1
                : About.englishDescription1
            "
          ></div>

          <br />

          <div
            v-html="
              $i18n.locale === 'ar'
                ? About.description2
                : About.englishDescription2
            "
          ></div>

          <br />

          <div
            v-html="
              $i18n.locale === 'ar'
                ? About.description3
                : About.englishDescription3
            "
          ></div>
        </div>
        <div class="col-lg-6 image">
          <img v-if="About.image1" :src="`${apiBase}${About.image1}`" alt="" />
          <img v-else src="/photos/22-1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { data: About, pending } = await useGetSiteApi().GetAll(
  `${api.GetPagesDetail}/2`,
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
</script>
<style lang="scss" scoped>
.about {
  h1 {
    text-align: center;
    padding: 40px;
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
  .image {
    border: 2px solid $main;
    img {
      width: 100%;
      padding: 30px;
    }
  }
}
</style>
