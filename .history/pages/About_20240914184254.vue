<template>
  <div class="about">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
      </span>
    </h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 about-text">
          <div
            v-html="
              $i18n.locale === 'ar'
                ? About?.description
                : About?.englishDescription
            "
          ></div>

          <br />

          <div
            v-html="
              $i18n.locale === 'ar'
                ? About?.description1
                : About?.englishDescription1
            "
          ></div>

          <br />

          <div
            v-html="
              $i18n.locale === 'ar'
                ? About?.description2
                : About?.englishDescription2
            "
          ></div>

          <br />
        </div>
        <div class="col-lg-6 image">
          <img
            v-if="About?.image"
            :src="`${apiBase}${About?.image}`"
            alt=""
            class="img-fluid align-self-stretch"
          />
          <img v-else src="/photos/22-1.png" alt="" />
        </div>
      </div>

      <div
        v-html="
          $i18n.locale === 'ar'
            ? About?.description3
            : About?.englishDescription3
        "
      ></div>
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
    background: url("/photos/4-1.png");
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;

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
  .image {
    position: relative;
    img {
      width: 100%;
      height: 650px;
      padding: 30px;
      object-fit: cover;
      @media (max-width: 768px) {
        padding: 20px;
        height: 350px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 87%;
      height: 92%;
      border: 2px solid #146890;
      right: 20px;
      top: 5px;
      @media (max-width: 768px) {
        width: 81%;
        height: 91%;
      }
    }
  }
  .about-text{
    height: 100%;
  }
}
</style>
