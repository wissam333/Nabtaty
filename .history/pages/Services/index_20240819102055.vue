<template>
  <div class="Projects nav-margin" :class="locale === 'ar' ? 'ar' : ''">
    <h1 class="title fw-bold d-flex justify-content-center align-items-end">
      <!-- <img width="80" src="/photos/icons/Asset 1.png" alt="" /> -->
      {{ $i18n.locale === "ar" ? "خدماتنا" : "Services" }}
    </h1>
    <div class="container" :class="locale === 'ar' ? 'ar' : ''">
      <div class="row mb-5">
        <!-- Hotel -->
        <nuxt-link
          v-for="type in Services?.items"
          :to="`/Services/${type?.id?.toString()}`"
          class="Project-block col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="Project-img">
            <img
              v-if="type.image1"
              :src="`${apiBase}/${type?.image1}`"
              alt=""
            />
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
.Projects {
  .title {
    color: $main;
    font-weight: bold;
    padding: 40px;
    font-size: 50px;
    font-family: Herova, "Arial", "sans-serif";
    letter-spacing: 2px;
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
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
}
</style>
