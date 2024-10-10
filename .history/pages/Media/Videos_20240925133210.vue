<template>
  <div class="card videos nav-margin">
    <h1 class="linear page-title">
      <img
        src="/logo.png"
        alt=""
        :class="$i18n.locale === 'ar' ? 'ar' : ''"
        width="90"
      />
      <span>
        {{ $i18n.locale == "ar" ? "البوم الفيديو" : "Videos" }}
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
            @click="openModal(video.url.slice(32))"
          ></a>
          <iframe
            class="w-100"
            :src="`https://www.youtube.com/embed/${video.url.slice(32)}`"
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
    <div :class="showModal ? 'active' : ''" class="modal" @click="closeModal">
      <span class="close" @click="closeModal">&times;</span>
      <div class="modal-content">
        <!-- :src="`https://www.youtube.com/embed/${modalVideoUrl}?autoplay=1`" -->
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
  `${api.Blocks}?categoryId=7`,
  ["name", "englishName", "url", "blockVideos", "blockAttachements"]
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
  .video {
    padding: 0px;
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
  background: rgba(255, 255, 255, 0.279);
  // border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &.active {
    opacity: 1;
  }
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

.close {
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 999999;
  color: #ffffffe6;
  font-size: 45px;
  background: #0000006b;
  padding: 20px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
    font-size: 35px;
    top: 5px;
    right: 5px;
  }
}
</style>
