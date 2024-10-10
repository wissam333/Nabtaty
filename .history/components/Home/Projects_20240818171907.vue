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
        <SwiperSlide v-for="Project in Projects?.items" :key="Project.id">
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

const truncateDescription = (desc) => {
  const lineLimit = 3;
  const containerWidth = 400; // Adjust this to match your container's width
  const fontSize = 16; // Adjust this to match your font size
  const lineHeight = 1.5; // Adjust this to match your line height

  if (!desc) return '';

  // Create a hidden div to measure text height
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.visibility = 'hidden';
  div.style.whiteSpace = 'pre-wrap'; // Respect line breaks
  div.style.width = `${containerWidth}px`; // Set container width
  div.style.fontSize = `${fontSize}px`; // Set font size
  div.style.lineHeight = `${lineHeight}`; // Set line height
  div.style.wordWrap = 'break-word'; // Wrap words
  div.innerText = desc; // Insert the full description

  document.body.appendChild(div);

  let truncatedDesc = desc;
  const maxHeight = lineLimit * fontSize * lineHeight;

  // If text height exceeds the max allowed height, truncate it
  if (div.clientHeight > maxHeight) {
    const words = desc.split(' ');
    let low = 0;
    let high = words.length;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      div.innerText = words.slice(0, mid).join(' ') + '...';
      if (div.clientHeight <= maxHeight) {
        low = mid + 1;
        truncatedDesc = div.innerText;
      } else {
        high = mid;
      }
    }
  }

  document.body.removeChild(div);
  return truncatedDesc;
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
      border-radius: 8px;
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
