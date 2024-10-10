<template>
  <div class="card nav-margin flex justify-content-center">
    <h1 class="fw-bold d-flex justify-content-center align-items-end">
      <img width="80" src="/photos/icons/Asset 1.png" alt="" />
      <span> {{ $i18n.locale === "ar" ? "ألبوم الصور" : "Photo Album" }} </span>
    </h1>

    <div class="cont">
      <div v-if="loadingPhotos" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else class="row">
        <div>
          <ElementsGallery></ElementsGallery>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n();
const {
  public: {
    apiBase,
    api: { Blocks },
  },
} = useRuntimeConfig();

// get Photos
const { data: Photos, pending } = await useGetSiteApi().GetAll(
  `${Blocks}?categoryId=6`,
  ["id", "blockPhotos", "name", "englishName", "image1", "blockAttachements"]
);
</script>
<style lang="scss" scoped>
.card {
  h1 {
    padding: 40px;
    color: $main;
  }
  .images {
    // padding: 20px;
    aspect-ratio: 3 / 2;
    margin-bottom: 50px;
    position: relative;
    color: #fff;
    background: $main;
    border-radius: 16px;
    border: 1px solid $main;
    overflow: hidden;
    &:hover {
      img {
        transform: scale(1.1);
      }
      //      .img-title {
      //        background-color: #14944e;
      //      }
    }
    img {
      width: 100%;
      height: 400px;
      border-radius: 8px;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }
    .img-title {
      position: absolute;
      bottom: 0%;
      left: 50%;
      padding: 20px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      background-color: #0000008a;
      transform: translate(-50%, 0%);
      width: 100%;
      transition: all 0.3s ease-in-out;
      text-align: center;
      z-index: 55;
      cursor: pointer;
    }
  }
}
.gallery {
  display: none;
  &.active {
    display: flex !important;
  }
}

/* Modal styles */
.modal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999 !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.458);

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
}

.modal-content {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.458);
  padding: 0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
}

.modal-video {
  width: 100%;
}
.close {
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 999999;
  color: #ffffffe6;
  font-size: 45px;
  background: #0000006b;
  padding: 20px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
    font-size: 35px;
    top: 5px;
    right: 5px;
  }
}
</style>
