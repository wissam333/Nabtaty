<template>
  <div class="about">
    <div class="nav-margin mb-10">
      <h1 class="linear">
        <img
          src="/logo.png"
          alt=""
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          width="90"
        />
        <span>
          {{ $i18n.locale === "ar" ? "الكتالوجات" : "Catalogues" }}
        </span>
      </h1>
    </div>
    <div class="container">
      <div class="row">
        <a
          :href="apiBase + catalog.file"
          target="_blank"
          class="col-lg-4"
          v-for="catalog in Catalogues"
        >
          <img :src="apiBase + catalog.image" alt="" />
          <div class="title">
            <h5>
              {{ $i18n.locale === "ar" ? catalog.name : catalog.englishName }}
            </h5>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { data: Catalogues, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=1`
);
</script>
<style lang="scss" scoped>
.about {
  .nav-padding {
    position: relative;
    // background: url("/photos/4-1.png");
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    // .overlay {
    //   top: 0;
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   background: linear-gradient(360deg, #00000091, transparent);
    //   z-index: 9;
    // }
  }

  h1 {
    text-align: center;
    padding: 40px;
    position: relative;
    z-index: 10;
    img {
      margin-right: 10px;
      &.ar {
        margin-left: 10px;
      }
    }
    @media (max-width: 768px) {
      padding: 12px;
    }
  }
  .image {
    position: relative;
    margin-bottom: 20px;
    img {
      width: 100%;
      //   height: 650px;
      //   padding: 30px;
      object-fit: cover;
      @media (max-width: 768px) {
        // padding: 20px;
        // height: 350px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 96%;
      height: 99%;
      border: 2px solid #e3c472;
      right: -5px;
      top: -15px;
      @media (max-width: 768px) {
        width: 88%;
        height: 99%;
        right: 6%;
        top: -10px;
      }
    }
  }
  .about-text {
    height: 100%;
  }
}
</style>
