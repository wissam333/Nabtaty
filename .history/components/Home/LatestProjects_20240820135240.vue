<template>
  <div
    class="projects"
    :class="$i18n.locale === 'ar' ? 'ar' : ''"
    data-aos-duration="1000"
    data-aos="zoom-in"
  >
    <h1>{{ $i18n.locale === "ar" ? "احدث المشاريع" : "Latest Projects" }}</h1>
    <Swiper
      style="direction: ltr"
      :modules="[SwiperAutoplay, SwiperScrollbar]"
      :breakpoints="{
        '1100': {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        '992': {
          slidesPerView: 2,
          slidesPerGroup: 2,
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
      scrollbar
    >
      <SwiperSlide
        v-for="(Project, index) in Projects.items"
        :key="index"
        v-if="index % 2 === 0"
      >
        <!-- first project-->
        <div class="project-block" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
          <div class="project-img">
            <img
              v-if="Project?.image1"
              :src="`${apiBase}/${Project?.image1}`"
              alt=""
            />
            <img v-else src="/photos/images/Artboard 7.png" alt="" />
          </div>
          <div class="project-info">
            <!-- <h2 class="truncate">
                  {{
                    $i18n.locale === "ar" ? Project?.name : Project?.englishName
                  }}
                </h2> -->

            <!-- <div
                  class="desc"
                  v-html="
                    $i18n.locale === 'ar'
                      ? truncateDescription(Project?.description1)
                      : truncateDescription(Project?.englishDescription1)
                  "
                ></div> -->
            <!-- 
                <div class="learn-more">
                  {{ $i18n.locale === "ar" ? "اعرف المزيد" : "Learn More" }}
                </div> -->
          </div>
        </div>

        <!-- second project -->
        <div class="project-block" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
          <div class="project-img">
            <img
              v-if="Projects.items[index + 1]?.image1"
              :src="`${apiBase}/${Projects.items[index + 1]?.image1}`"
              alt=""
            />
            <img v-else src="/photos/images/Artboard 7.png" alt="" />
          </div>
          <div class="project-info">
            <!-- <h2 class="truncate">
                  {{
                    $i18n.locale === "ar" ? Project?.name : Project?.englishName
                  }}
                </h2> -->

            <!-- <div
                  class="desc"
                  v-html="
                    $i18n.locale === 'ar'
                      ? truncateDescription(Project?.description1)
                      : truncateDescription(Project?.englishDescription1)
                  "
                ></div> -->
            <!-- 
                <div class="learn-more">
                  {{ $i18n.locale === "ar" ? "اعرف المزيد" : "Learn More" }}
                </div> -->
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="d-flex justify-content-center">
    <nuxt-link to="/Projects" class="btn btn-main">
      <span>
        {{ $i18n.locale === "ar" ? "شاهد المزيد" : "See More" }}
      </span>
    </nuxt-link>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: Projects, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=2`,
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
.projects {
  .container {
    @media (max-width: 768px) {
      max-width: 100% !important;
    }
  }
  h1 {
    font-family: Herova, "Arial", "sans-serif";
    color: $basic;
    margin-top: 100px;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 50px;
    text-align: center;
  }
  .project-block {
    .project-img {
      overflow: hidden;
      // border-radius: 8px;
      height: 550px;
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
  padding-bottom: 50px;
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
.desc {
  height: 45px;
  overflow: hidden;
  margin: 20px 0px;
}
.btn {
  width: 200px;
  margin-bottom: 50px;
  margin-top: 5px;
}
</style>
