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
          <div class="news-img">
            <img
              v-if="newsItem?.image"
              :src="`${apiBase}${newsItem?.image}`"
              :alt="newsItem?.englishName"
            />
          </div>
          <div class="news-title" :class="locale === 'ar' ? 'ar' : ''">
            <h5 class="">
              {{ locale === "ar" ? newsItem?.name : newsItem?.englishName }}
            </h5>
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
  ["id", "image", "englishName", "name", "description", "englishDescription"]
);
</script>
<style lang="scss" scoped>
.news {
  .news-wrapper {
    .news-block {
      padding: 15px;
      position: relative;
      cursor: pointer;
      &:hover {
        .news-img {
          img {
            transform: scale(1.1);
          }
        }
        .news-title {
          height: 200px;
        }
      }
      .news-img {
        height: 300px;
        overflow: hidden;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border: 1px solid $main;
        img {
          height: 100%;
          width: 100%;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          transition: all 0.3s ease;
          object-fit: cover;
        }
      }
      .news-title {
        background: linear-gradient(360deg, transparent,#bf9847);
        padding: 20px;
        color: #fff;
        position: absolute;
        bottom: 15px;
        width: calc(100% - 30px);
        transition: all 0.3s ease-in-out;
        height: 30px;
        h5 {
          font-size: 16px;
          height: 25px;
        }
      }
    }
  }
}
</style>
