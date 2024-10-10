<template>
  <div
    class="projects"
    :class="$i18n.locale === 'ar' ? 'ar' : ''"
    data-aos-duration="1000"
    data-aos="zoom-in"
  >
    <div class="container">
      <h1>{{ $i18n.locale === "ar" ? "مشاريعنا" : "Projects" }}</h1>
      <Swiper
        style="direction: ltr"
        :modules="[SwiperAutoplay, SwiperPagination]"
        :breakpoints="{
          '1100': {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          '992': {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },

          '768': {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          '450': {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          '1': {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }"
        :loop="false"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :speed="1000"
        :pagination="{
          clickable: true,
        }"
      >
        <SwiperSlide v-for="Project in Projects?.items">
          <div
            class="project-block"
            :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
          >
            <div class="project-img">
              <img
                v-if="Project?.image1"
                :src="`${apiBase}/${Project?.image1}`"
                alt=""
              />
              <img v-else src="/photos/images/Artboard 7.png" alt="" />
            </div>
            <div class="project-info">
              <h2 class="truncate">
                {{
                  $i18n.locale === "ar" ? Project?.name : Project?.englishName
                }}
              </h2>

              <div
                v-html="
                  $i18n.locale === 'ar'
                    ? truncateDescription(Project?.description1)
                    : truncateDescription(Project?.englishDescription1)
                "
              ></div>

              <div class="learn-more">
                {{ $i18n.locale === "ar" ? "اعرف المزيد" : "Learn More" }}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: Projects, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=3`,
  [
    "image1",
    "description1",
    "englishDescription1",
    "description2",
    "englishDescription2",
    "blockPhotos",
    "englishName",
    "name",
  ]
);

// cut the desc
const truncateDescription = (desc) => {
  const wordLimit = 30;
  const words = desc?.split(" ");
  if (words?.length <= wordLimit) {
    return desc;
  }
  return words?.slice(0, wordLimit).join(" ") + "...";
};
</script>
<style lang="scss" scoped>
.projects {
  .container {
    @media (max-width: 768px) {
      max-width: 100% !important;
    }
  }
  h1 {
    font-size: 60px;
    font-family: Herova, "Arial", "sans-serif";
    color: $main;
    margin-top: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .project-block {
    margin: 10px;
    .project-img {
      overflow: hidden;
      height: 420px;
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
      }
    }
    .project-info {
      h2 {
        font-weight: bold;
        font-family: NeutraText-bold, "Arial", "sans-serif";
        color: $basic;
        margin-top: 10px;
      }
      .learn-more {
        position: relative;
        font-weight: bold;
        font-family: Herova, "Arial", "sans-serif";
        color: $main;
        font-size: 20px;
        letter-spacing: 2px;
        cursor: pointer;

        &::after {
          content: "";
          position: absolute;
          height: 3px;
          width: 60%;
          left: 0;
          background: $main;
          bottom: 0;
        }
      }
    }
  }
}
.swiper {
  padding-bottom: 100px;
}
.projects {
  &.ar {
    .learn-more {
      letter-spacing: normal !important;
      &::after {
        left: auto !important;
        right: 0;
      }
    }
  }
}
</style>
