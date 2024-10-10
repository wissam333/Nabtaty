<template>
  <div class="about">
    <div class="">
      <div class="row">
        <div class="col-lg-5 image">
          <img src="/photos/22-1.png" alt="" />
        </div>
        <div class="col-lg-7 info">
          <h1>Butterfly Caffe</h1>
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
    h1 {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 70px;
      letter-spacing: 3px;
    }
    h5 {
      margin-top: 100px;
      color: #fff;
      line-height: 40px;
    }
    .go-about {
      margin-top: 100px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
