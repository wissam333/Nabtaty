<template>
    <div class="card nav-margin flex justify-content-center">
      <h1
        class="title text-center fw-bold d-flex justify-content-center align-items-end"
      >
        <img width="80" src="/photos/icons/Asset 1.png" alt="" />
        {{ $i18n.locale === "ar" ? "ألبوم الصور" : "Photo Album" }}
      </h1>
  
      <div class="container">
        <div v-if="pending" class="text-center text-white">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <div v-else class="row" :class="locale === 'ar' ? 'ar-flex' : ''">
          <div
            class="col-lg-6"
            v-for="photo in Photos?.items"
            :key="photo?.id"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Galleria
              v-model:visible="displayBasic[photo?.id]"
              :value="photo?.blockPhotos"
              :responsiveOptions="responsiveOptions"
              containerStyle="max-width: 50%"
              :circular="true"
              :fullScreen="true"
              :showItemNavigators="true"
              :showThumbnailNavigators="true"
            >
              <template #item="slotProps">
                <img
                  :src="`${apiBase}/${slotProps.item.image}`"
                  :alt="slotProps.item.blockId"
                  style="
                    width: 100%;
                    display: block;
                    object-fit: contain;
                    border-radius: 8px;
                    height: 500px;
                  "
                />
              </template>
              <template #thumbnail="slotProps">
                <div style="padding: 20px; width: 150px; height: 150px">
                  <img
                    :src="`${apiBase}/${slotProps.item.image}`"
                    :alt="slotProps.item.blockId"
                    style="
                      display: block;
                      object-fit: cover;
                      width: 100%;
                      height: 100%;
                      border-radius: 8px;
                      border: 2px solid #32b34d;
                    "
                  />
                </div>
              </template>
            </Galleria>
  
            <div class="images">
              <div class="img-title" :class="locale === 'ar' ? 'ar' : ''">
                <p>
                  {{ $i18n.locale === "ar" ? photo?.name : photo?.englishName }}
                </p>
              </div>
              <img
                @click="displayBasic[photo?.id] = true"
                v-if="photo?.image1"
                :src="`${apiBase}/${photo?.image1}`"
                alt=""
              />
              <img
                v-else
                @click="displayBasic[photo?.id] = true"
                src="/photos/icons/Asset 1.png"
                alt=""
              />
  
              <!-- Attachments  -->
              <h3 v-if="photo?.blockAttachements?.length">
                {{ $t("Attachments") }} :
              </h3>
              <ul v-if="photo?.blockAttachements?.length">
                <li
                  v-for="(attachment, index) in photo?.blockAttachements"
                  :key="index"
                >
                  <a :href="`${apiBase}/${attachment?.file}`" target="_blank">{{
                    attachment?.name
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  const { locale } = useI18n();
  const {
    public: { apiBase, api },
  } = useRuntimeConfig();
  
  const displayBasic = ref([]);
  
  const responsiveOptions = ref([
    {
      breakpoint: "1500px",
      numVisible: 5,
    },
    {
      breakpoint: "1024px",
      numVisible: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ]);
  
  // get Photos
  const { data: Photos, pending } = await useGetSiteApi().GetAll(
    `${api.Blocks}?categoryId=6`,
    ["id", "blockPhotos", "name", "englishName", "image1", "blockAttachements"]
  );
  
  const handleClick = (event) => {
    // Check if the click was on the .p-galleria-mask element
    if (event.target.classList.contains("p-galleria-mask")) {
      for (let i = 0; i < displayBasic.value.length; i++) {
        displayBasic.value[i] = false;
      }
    }
  };
  
  onMounted(() => {
    document.addEventListener("click", handleClick);
  });
  
  // Remove event listener on unmounted
  onUnmounted(() => {
    document.removeEventListener("click", handleClick);
  });
  </script>
  <style lang="scss" scoped>
  .card {
    .title {
      color: $main;
      font-weight: bold;
      padding: 40px;
    }
    .images {
      padding: 20px;
      margin-bottom: 50px;
      position: relative;
      color: #fff;
      background: $basic;
      border-radius: 16px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid $main;
        object-fit: cover;
        cursor: pointer;
      }
      .img-title {
        position: absolute;
        top: 35%;
        right: auto;
        left: 0;
        padding: 30px;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        &.ar {
          right: 0;
          left: auto;
        }
      }
    }
  }
  </style>
  