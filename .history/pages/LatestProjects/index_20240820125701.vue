<template>
  <div class="Projects nav-margin" :class="locale === 'ar' ? 'ar' : ''">
    <h1
      class="my-10 title fw-bold d-flex justify-content-center align-items-end"
    >
      <!-- <img width="80" src="/photos/icons/Asset 1.png" alt="" /> -->
      {{
        $i18n.locale === "ar" ? "معرض صور المشاريع" : "Projects Photo Gallery"
      }}
    </h1>
    <div class="container" :class="locale === 'ar' ? 'ar' : ''">
      <div class="row mb-5">
        <!-- Hotel -->
        <nuxt-link
          v-for="type in ProjectsTypes?.items"
          :to="`LatestProjects/${type.id.toString()}`"
          class="Project-block col-lg-4"
          data-aos="fade-up"
        >
          <div class="Project-img">
            <img v-if="type.image1" :src="`${apiBase}/${type.image1}`" alt="" />
            <img v-else src="/photos/icons/Asset 1.png" alt="" />
          </div>
          <h6 class="Project-title">
            {{ $i18n.locale === "ar" ? type.name : type.englishName }}
          </h6>
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

const { data: ProjectsTypes, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=2`,
  ["id", "englishName", "name", "blockPhotos", "image1"]
);
</script>
<style lang="scss" scoped>
.Projects {
  .title {
    color: $main;
    font-weight: bold;
    padding: 40px 40px 10px 40px;
  }
  &.ar {
    direction: rtl;
  }
  .Project-block {
    padding: 15px;
    cursor: pointer;
    &:hover {
      .Project-img {
        img {
          transform: scale(1.1);
        }
      }
    }
    .Project-img {
      height: 200px;
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
    .Project-title {
      height: 40px;
      background-color: $main;
      padding: 10px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      color: #fff;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
}
</style>
