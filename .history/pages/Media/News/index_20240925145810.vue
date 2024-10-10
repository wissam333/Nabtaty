<template>
  <div class="news nav-margin">
    <h1 class="linear page-title">
      <img
        src="/logo.png"
        alt=""
        :class="$i18n.locale === 'ar' ? 'ar' : ''"
        width="90"
      />
      <span>
        <span>
          {{ $t("News") }}
        </span>
      </span>
    </h1>

    <div class="news-wrapper container mb-15">
      <div class="row mb-5">
        <div v-if="loadingNews" class="text-center text-white">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <nuxt-link
          v-else
          :to="`/Media/News/${newsItem?.id?.toString()}`"
          v-for="newsItem in News?.items"
          :key="newsItem?.id"
          class="news-block col-lg-4"
          data-aos="fade-up"
        >
          <div class="blog-card spring-fever">
            <div class="title-content">
              <h3><a href="#">10 inspiring photos</a></h3>
              <div class="intro"><a href="#">Inspiration</a></div>
            </div>
            <div class="card-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim...
              <a href="#"
                >Read Article<span class="licon icon-arr icon-black"></span
              ></a>
            </div>

            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
          </div>
        </nuxt-link>
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

// get News

const { data: News, pending } = await useGetSiteApi().GetAll(
  `${Blocks}?categoryId=6`,
  ["id", "image1", "englishName", "name", "description1", "englishDescription1"]
);
</script>
<style lang="scss" scoped>
.news {
  .news-wrapper {
  }
}
</style>
