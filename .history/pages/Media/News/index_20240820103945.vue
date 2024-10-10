<template>
    <Socials></Socials>
  <div class="news card  nav-margin">
    <h1
      class="title text-center fw-bold d-flex justify-content-center align-items-end"
    >
      <!-- <img width="80" src="/photos/icons/Asset 1.png" alt="" /> -->
      {{ $t("News") }}
    </h1>
    <div class="news-wrapper container mb-15">
      <div class="row" :class="locale === 'ar' ? 'ar-flex' : ''">
        <div v-if="pending" class="text-center text-white">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <nuxt-link
          v-else
          v-for="newsItem in News.items"
          :to="`/Media/News/${newsItem?.id?.toString()}`"
          :key="newsItem.id"
          class="news-block col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="news-img">
            <img
              v-if="newsItem.image1"
              :src="`${apiBase}/${newsItem?.image1}`"
              :alt="newsItem?.englishName"
            />
            <img v-else src="/photos/icons/Asset 1.png" alt="" />
          </div>
          <div class="news-title" :class="locale === 'ar' ? 'ar' : ''">
            <h5>
              {{
                $i18n.locale === "ar" ? newsItem?.name : newsItem?.englishName
              }}
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
  public: { apiBase, api },
} = useRuntimeConfig();

// get News
const { data: News, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=6`,
  ["id", "image1", "englishName", "name", "englishDescription1", "description1"]
);
</script>
<style lang="scss" scoped>
.news {
  .title {
    color: $main;
    font-weight: bold;
    padding: 40px;
    font-size: 50px;
    font-family: Herova, "Arial", "sans-serif";
    letter-spacing: 2px;
  }
  .news-wrapper {
    .news-block {
      block-size: 100%;
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
        height: 70px;
        h5 {
          text-overflow: ellipsis;
          /* will make [...] at the end */
          white-space: nowrap;
          /* paragraph to one line */
          overflow: hidden;
          /* older browsers */
        }
      }
    }
  }
}
</style>
