<template>
  <div class="videos nav-margin">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale == "ar" ? "ألبوم الفيديو" : "Video Album" }}
      </span>
    </h1>
    <div class="container py-15">
      <div v-if="pending" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div
        v-else
        class="row justify-content-between"
        :class="locale === 'ar' ? 'ar-flex' : ''"
      >
        <div
          class="video col-lg-6"
          v-for="(video, index) in Videos?.items"
          :key="index"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a
            class="video-wrapper"
            href="javascript:void(0);"
            @click="openModal(video.videoUrl)"
          ></a>
          <iframe
            class="w-100"
            :src="`https://www.youtube.com/embed/${video?.videoUrl}`"
            style="border-radius: 12px; height: 340px"
          ></iframe>

          <!-- Attachments -->
          <h3 v-if="video?.blockAttachements?.length">
            {{ $t("Attachments") }} :
          </h3>
          <ul v-if="video?.blockAttachements?.length">
            <li
              v-for="(attachment, index) in video.blockAttachements"
              :key="index"
            >
              <a :href="`${apiBase}/${attachment.file}`" target="_blank">
                {{ attachment.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <iframe
          class="modal-video"
          :src="`https://www.youtube.com/embed/${modalVideoUrl}?autoplay=1`"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { locale } = useI18n();
const {
  public: { api, apiBase },
} = useRuntimeConfig();

// get Videos
const { data: Videos, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=3`,
  ["name", "englishName", "url1", "blockVideos", "blockAttachements"]
);

// Modal state
const showModal = ref(false);
const modalVideoUrl = ref("");

// Open modal and set the video URL
const openModal = (url) => {
  modalVideoUrl.value = url;
  showModal.value = true;
};

// Close modal
const closeModal = () => {
  showModal.value = false;
  modalVideoUrl.value = "";
};
</script>

<style lang="scss" scoped>
.videos {
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
  .video {
    padding: 10px;
    color: #fff;
    background: $main;
    border-radius: 16px;
    position: relative;
    p {
      font-family: Cairo, Arial, "sans-serif" !important;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }
    .video-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      cursor: pointer;
    }
    iframe {
      z-index: 1;
    }
  }
}

.col-lg-6 {
  margin-bottom: 20px;
  @media (min-width: 991px) {
    width: calc(50% - 20px);
  }
}

/* Modal styles */
.modal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  width: 80%;
  max-width: 800px;
  background: #000;
  padding: 0;
  border-radius: 12px;
  // overflow: hidden;
}

.modal-video {
  width: 100%;
  height: 450px;
}
</style>
