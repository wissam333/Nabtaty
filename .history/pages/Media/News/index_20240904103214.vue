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
          :to="`/Media/News/${newsItem.id.toString()}`"
          v-for="newsItem in News"
          :key="newsItem.id"
          class="news-block col-lg-4"
          data-aos="fade-up"
        >
          <div class="news-img">
            <img
              v-if="newsItem.image1"
              :src="`${apiBase}/${newsItem?.image1}`"
              :alt="newsItem?.englishName"
            />
            <img v-else src="/logo/photo_5996792557864075100_x.jpg" alt="" />
          </div>
          <div class="news-title" :class="locale === 'ar' ? 'ar' : ''">
            <h5 class="truncate">
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
const News = ref(null);
const loadingNews = ref(false);
const errorNews = ref(null);

const fetchNews = async () => {
  loadingNews.value = true;
  try {
    const { GetAll } = await useGetSiteApi();
    const { data, error: fetchError } = await GetAll(
      `${Blocks}?categoryId=2&parentId=0`,
      [
        "id",
        "image1",
        "englishName",
        "name",
        "description1",
        "englishDescription1",
      ]
    );
    if (fetchError.value) {
      errorNews.value = fetchError.value;
    } else {
      News.value = data.value.items;
    }
  } catch (err) {
    errorNews.value = err.message || "Unexpected error occurred";
  } finally {
    loadingNews.value = false;
  }
};

onMounted(() => {
  // Check if the about data has been fetched previously
  if (!NewsData().value) {
    // Fetch and store the about data
    fetchNews().then(() => {
      NewsData().value = News.value;
    });
  } else {
    // Use the cached data
    News.value = NewsData().value;
  }
});
</script>
<style lang="scss" scoped>
.news {
  .title {
    color: $main;
    font-weight: bold;
    padding: 40px 40px 10px 40px;
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
          object-fit: contain;
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
        }
      }
    }
  }
}
</style>
