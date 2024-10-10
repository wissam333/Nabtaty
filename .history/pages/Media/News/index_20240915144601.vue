<template>
  <div class="news nav-margin">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $t("News") }}
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
              v-if="newsItem?.image1"
              :src="`${apiBase}${newsItem?.image1}`"
              :alt="newsItem?.englishName"
            />
            <img v-else width="65" src="/photos/1-1.png" alt="" />
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
  ["id", "image1", "englishName", "name", "description1", "englishDescription1"]
);
</script>
<style lang="scss" scoped>
.news {
  h1 {
    text-align: center;
    padding: 40px;
    @media (max-width: 768px) {
      padding: 12px;
    }
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
  .news-wrapper {
    .news-block {
      padding: 15px;
      cursor: pointer;
      &:hover {
        .news-img {
          img {
            transform: scale(1.1);
          }
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
        background-color: $main;
        padding: 20px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        color: #fff;
        h5 {
          font-size: 16px;
          height: 25px;
        }
      }
    }
  }
}
</style>
