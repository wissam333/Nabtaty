<template>
  <div class="about">
    <div class="nav-padding pb-10 mb-10">
      <div class="overlay"></div>
      <h1>
        <img
          src="/logo.png"
          alt=""
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          width="90"
        />
        <span>
          {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
        </span>
      </h1>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-lg-12 about-text"
          :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
        >
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
        <div
          class="col-lg-12 image"
          :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
        >
          <img
            v-if="About?.image"
            :src="`${apiBase}${About?.image}`"
            alt=""
            class="img-fluid align-self-stretch"
          />
          <!-- <img v-else src="/photos/22-1.png" alt="" /> -->
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
const { data: About, pending } = await useGetSiteApi().GetAll(`${api.Menus}/3`);
</script>
<style lang="scss" scoped>
.about {
  .nav-padding {
    position: relative;
    // background: url("/photos/4-1.png");
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    .overlay {
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(360deg, #00000091, transparent);
      z-index: 9;
    }
  }

  h1 {
    text-align: center;
    padding: 40px;
    position: relative;
    z-index: 10;

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
  .about-text {
    height: 100%;
  }
}
</style>
