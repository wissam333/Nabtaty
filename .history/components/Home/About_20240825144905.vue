<template>
  <div class="about">
    <div class="">
      <div class="row">
        <div class="col-lg-5 image">
          <img src="/photos/22-1.png" alt="" />
        </div>
        <div class="col-lg-7 info">
          <h1>
            <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
            <span>
              {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
            </span>
          </h1>
          <h5
            v-html="
              $i18n.locale === 'ar'
                ? About?.description
                : About?.englishDescription
            "
          ></h5>
          <h5
            v-html="
              $i18n.locale === 'ar'
                ? About?.description1
                : About?.englishDescription1
            "
          ></h5>

          <div class="go-about">
            <nuxt-link to="/About" class="btn btn-main">
              <span>
                {{ $t("SeeMore") }}
              </span>
            </nuxt-link>
          </div>
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
    "geoLocation",
    "description3",
    "englishDescription3",
  ]
);
</script>
<style lang="scss" scoped>
.about {
  .image {
    padding: 0 !important;
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
  .info {
    position: relative;
    background: url("/photos/23-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 80px;
    @media (max-width: 991px) {
      padding: 30px;
    }

    h1 {
      padding: 40px 0px;
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
    h5 {
      margin-top: 100px;
      color: #fff;
      line-height: 40px;
      @media (max-width: 991px) {
        margin-top: 40px;
      }
    }
    .go-about {
      margin-top: 100px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media (max-width: 991px) {
        margin-top: 40px;
      }
      a {
        width: 150px;
      }
    }
    // h2 {
    //   color: #fff;
    //   margin-top: 100px;
    // }
    // h3 {
    //   padding: 40px;
    //   color: #fff;
    //   text-transform: uppercase;
    //   font-weight: bold;
    //   font-size: 70px;
    //   letter-spacing: 3px;
    //   background-color: $second;
    //   border-radius: 16px;
    //   margin-top: 100px;
    //   margin-left: -50%;
    //   width: 550px;
    // }
    // h4 {
    //   color: #fff;
    //   margin-top: -200px;
    //   margin-left: 20%;
    //   color: $second;
    //   font-size: 40px;
    // }
  }
}
</style>
