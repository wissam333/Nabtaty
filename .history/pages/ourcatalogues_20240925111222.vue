<template>
  <div class="about">
    <div class="nav-margin">
      <h1 class="linear">
        <img
          src="/logo.png"
          alt=""
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          width="90"
        />
        <span>
          {{ $i18n.locale === "ar" ? "كتالوجات" : "Catalogues" }}
        </span>
      </h1>
    </div>
    <div class="container">
      <div class="row" data-aos="fade-up" data-aos-duration="800">
        <a
          :href="apiBase + catalog.file"
          target="_blank"
          class="col-lg-4 catalog"
          v-for="catalog in Catalogues?.items"
        >
          <div style="position: relative; height: 100%; overflow: hidden">
            <img :src="apiBase + catalog.image" alt="" />
            <div class="title">
              <h5>
                <font-awesome
                  style="font-size: 25px"
                  :icon="['fas', 'file-pdf']"
                />
                {{ $i18n.locale === "ar" ? catalog.name : catalog.englishName }}
              </h5>
            </div>
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
  padding-bottom: 50px;
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
  .catalog {
    position: relative;
    transition: all 0.3s ease-in-out;
    @media (max-width: 991px) {
      margin-bottom: 20px;
    }
    &:hover {
      color: $second;
      img {
        transform: scale(1.1);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
    }
    .title {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      background-color: rgb(0 0 0 / 42%);
      padding: 10px;
    }
  }
}
</style>
