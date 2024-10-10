<template>
  <div class="services">
    <div
      class="container"
      :style="{
        backgroundImage: `url(${apiBase}/${Services?.items[0]?.image1})`,
      }"
    >
      <div class="logo">
        <img src="/photos/icons/Asset 7.png" alt="" />
      </div>
      <div class="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          blanditiis laborum facere adipisci possimus perferendis id
        </p>
        <button class="btn btn-main">
          <span>{{ $i18n.locale === "ar" ? "شاهد المزيد" : "See More" }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: Services, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=1`,
  [
    "id",
    "englishName",
    "name",
    "image1",
    "image2",
    "image3",
    "image4",
    "description1",
    "englishDescription1",
    "description2",
    "englishDescription2",
    "description3",
    "englishDescription3",
    "description4",
    "englishDescription4",
    "blockPhotos",
  ]
);
</script>
<style lang="scss" scoped>
.services {
  .container {
    position: relative;
    // background: url("/photos/icons/Asset 7.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: $basic;
    height: 500px;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  .info {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    color: #fff;
    .btn {
      background: transparent;
    
      &::before {
        background: transparent !important;
      }
      span{
        color: #fff !important;
      }
    }
  }
}
</style>
