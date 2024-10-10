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
          class="col-lg-4 catalog"
          v-for="catalog in Catalogues?.items"
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
    padding: 0;
    margin: 10px
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .title {
      position: absolute;
      top: 40%;
      width: 100%;
      text-align: center;
      background-color: #00000036;
      padding: 10px;
    }
  }
}
</style>
