<template>
  <div class="about" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 about-img"
          data-aos-duration="1000"
          :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
        >
          <img v-if="About?.image" :src="`${apiBase}/${About?.image}`" alt="" />
          <!-- <img v-else src="/photos/images/Artboard 1 copy.png" alt="" /> -->
        </div>
        <div
          class="col-lg-6 about-info"
          data-aos-duration="1000"
          :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
        >
          <div class="about-info-header">
            <img src="/photos/icons/Asset 26.png" alt="" />
            <h1>
              {{ $i18n.locale === "ar" ? "مرحباً بكم في" : "Welcom To" }}
            </h1>
            <h2>
              {{
                $i18n.locale === "ar"
                  ? "مصنع الفن الملكي للأخشاب"
                  : "Royal Art Wooden Factory"
              }}
            </h2>
          </div>

          <div
            v-html="
              $i18n.locale === 'ar'
                ? About?.description1
                : About?.englishDescription1
            "
          ></div>
          <!-- <nuxt-link to="/About" class="learn-more">
            {{ $i18n.locale === "ar" ? "اعرف المزيد" : "Learn More" }}
          </nuxt-link> -->
          <nuxt-link to="/About" class="btn btn-main">
            <span>
              {{ $i18n.locale === "ar" ? "اعرف المزيد" : "Learn More" }}</span
            >
          </nuxt-link>
        </div>
      </div>

      <!-- our vision -->
      <div class="row vision">
        <div class="col-lg-6 vision-info" v-if="About?.description2">
          <h1>Our Vision</h1>
          <div
            v-html="
              $i18n.locale === 'ar'
                ? About?.description2
                : About?.englishDescription2
            "
          ></div>
          <!-- <nuxt-link to="/About" class="learn-more">
            {{ $i18n.locale === "ar" ? "اعرف المزيد" : "Learn More" }}
          </nuxt-link> -->
          <nuxt-link to="/About" class="btn btn-main">
            <span>
              {{ $i18n.locale === "ar" ? "اعرف المزيد" : "Learn More" }}</span
            >
          </nuxt-link>
        </div>
        <div
          class="col-lg-6 vision-img"
          data-aos-duration="1000"
          data-aos="zoom-out"
        >
          <div class="three-lines">
            <img src="/photos/icons/Asset 5.png" alt="" />
          </div>
          <img
            class="vision-img-main"
            v-if="About?.image1"
            :src="`${apiBase}/${About?.image1}`"
            alt=""
          />
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
    "geoLocation",
  ]
);
</script>
<style lang="scss" scoped>
.about {
  padding-top: 50px;
  margin-bottom: 100px;
  @media (max-width: 991px) {
    padding-top: 20px;
  }
  .about-img {
    z-index: 12;
    padding: 0;
    img {
      width: 100%;
    }
  }
  .about-info {
    // background-color: #fff;
    padding: 50px 70px;
    // margin-top: 50px;
    // margin-left: -50px;
    // padding-bottom: 200px;
    background-color: #f3f3f3;
    z-index: 1;
    // box-shadow: 0px 0px 20px 12px #33333324;

    @media (max-width: 991px) {
      padding: 20px;
      padding-bottom: 200px;
      // margin-left: 0px !important;
      // margin-right: 0px !important;
      margin-top: 20px;
    }
    .about-info-header {
      img {
        width: 170px;
      }
      h1 {
        font-family: Herova, "Arial", "sans-serif";
        color: $main;
        margin-bottom: 0px;
      }
      h2 {
        font-weight: bold;
        font-family: NeutraText-bold, "Arial", "sans-serif";
        color: $basic;
      }
      .btn {
        &::before {
          background-color: transparent !important;
        }
      }
    }
  }
  .learn-more {
    display: block;
    position: relative;
    font-weight: bold;
    font-family: Herova, "Arial", "sans-serif";
    color: $main;
    font-size: 20px;
    letter-spacing: 2px;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      height: 3px;
      width: 60%;
      left: 0;
      background: $main;
      bottom: 0;
    }
  }
  .vision {
    margin-top: 20px;
    align-items: center;

    @media (max-width: 991px) {
      flex-direction: column-reverse;
    }
    .vision-img {
      display: flex;
      justify-content: flex-start;
      position: relative;
      .vision-img-main {
        width: 400px;
        z-index: 11;
        @media (max-width: 991px) {
          width: 100%;
        }
      }
      .three-lines {
        position: absolute;
        width: 150px;
        height: calc(100% + 300px);
        margin-top: -200px;
        margin-bottom: -100px;
        z-index: 10;
        left: 130px;

        @media (max-width: 991px) {
          left: calc(50% - 75px);
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .vision-info {
      @media (max-width: 991px) {
        z-index: 12;
        background: #fff;
        margin-top: 20px;
      }
      h1 {
        font-family: Herova, "Arial", "sans-serif";
        color: $main;
      }
    }
  }
}

// arabic
.about {
  &.ar {
    // .about-info {
    //   margin-right: -50px;
    //   margin-left: 0px !important;
    // }

    .three-lines {
      right: 130px;
      left: auto !important;
    }
    .learn-more {
      letter-spacing: normal !important;
      &::after {
        left: auto !important;
        right: 0;
      }
    }
  }
}
</style>
