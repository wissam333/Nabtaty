<template>
  <div class="studio cont">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale === "ar" ? "المركز الإعلامي" : "Media Center" }}
      </span>
    </h1>
    <nuxt-link to="/Media/Photos" class="row images">
      <div class="col-sm-6">
        <div
          class="image-box"
          :data-aos="$i18n.locale === 'ar' ? 'flip-right' : 'flip-left'"
          data-aos-offset="200"
          data-aos-duration="1500"
        >
          <img
            class="bigImage"
            :src="apiBase + Photos?.items[0]?.blockPhotos[4]?.image"
            alt=""
          />
        </div>
      </div>
      <div
        class="col-sm-6 box"
        data-aos-offset="200"
        data-aos-duration="1500"
        :data-aos="$i18n.locale === 'ar' ? 'flip-left' : 'flip-right'"
      >
        <div class="row" style="margin-bottom: 20px">
          <div class="col-sm-6" style="width: 50% !important">
            <div class="image-box">
              <img
                class="image"
                :src="apiBase + Photos?.items[0]?.blockPhotos[0]?.image"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-6" style="width: 50% !important">
            <div class="image-box">
              <img
                class="image"
                :src="apiBase + Photos?.items[0]?.blockPhotos[1]?.image"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6" style="width: 50% !important">
            <div class="image-box">
              <img
                class="image"
                :src="apiBase + Photos?.items[0]?.blockPhotos[2]?.image"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-6" style="width: 50% !important">
            <div class="image-box">
              <img
                class="image"
                :src="apiBase + Photos?.items[0]?.blockPhotos[3]?.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script setup>
const {
  public: {
    apiBase,
    api: { Blocks },
  },
} = useRuntimeConfig();
// get Photos
const { data: Photos, pending } = await useGetSiteApi().GetAll(
  `${Blocks}?categoryId=2`,
  ["id", "blockPhotos", "name", "englishName", "image1", "blockAttachements"]
);
</script>
<style lang="scss" scoped>
.studio {
  padding: 100px 0px;
  @media (max-width: 991px) {
    padding: 20px 0px;
  }
  h1 {
    padding: 10px;
    color: $main;
    font-weight: bold;
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
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 991px) {
      height: 125px;
    }
  }
  .bigImage {
    width: 100%;
    object-fit: cover;
    height: 540px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 991px) {
      height: 270px;
    }
  }
}
.images {
  @media (max-width: 575px) {
    flex-direction: column !important;
    .box {
      margin-bottom: 20px;
    }
  }
}
.col-sm-6 {
  .image-box {
    overflow: hidden;
  }
}
</style>
