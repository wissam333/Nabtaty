<template>
    <div class="card nav-margin flex justify-content-center">
      <h1 class="title text-center">{{ $t("PhotoAlbum") }}</h1>
  
      <div class="container">
        <div v-if="loadingPhotos" class="text-center text-white">
          <ElementsSpinner></ElementsSpinner>
        </div>
        <div v-else class="row">
          <div
            class="col-lg-6"
            v-for="photo in Photos"
            :key="photo.id"
            data-aos="fade-up"
          >
            <Galleria
              v-model:visible="displayBasic[photo.id]"
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
  
            <div class="images" @click="displayBasic[photo.id] = true">
              <div class="img-title">
                <p>{{ locale === "ar" ? photo?.name : photo?.englishName }}</p>
              </div>
              <img
                v-if="photo.image1"
                :src="`${apiBase}/${photo.image1}`"
                alt=""
              />
              <!-- <img v-else src="/logo/photo_5996792557864075100_x.jpg" alt="" /> -->
  
              <!-- Attachments  -->
              <h3 v-if="photo?.blockAttachements?.length" class="mt-4">
                {{ $t("Attachments") }} :
              </h3>
              <ul class="Attachments" v-if="photo?.blockAttachements?.length">
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
    public: {
      apiBase,
      api: { Blocks },
    },
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
  const Photos = ref(null);
  const loadingPhotos = ref(false);
  const errorPhotos = ref(null);
  
  const fetchPhotos = async () => {
    loadingPhotos.value = true;
    try {
      const { GetAll } = await useGetSiteApi();
      const { data, error: fetchError } = await GetAll(
        `${Blocks}?pageNumber=0&pageSize=500&orderBy=RecordOrder&categoryId=7&parentId=0`,
        [
          "id",
          "blockPhotos",
          "name",
          "englishName",
          "image1",
          "blockAttachements",
        ]
      );
      if (fetchError.value) {
        errorPhotos.value = fetchError.value;
        console.error("Failed to fetch Photos :", fetchError.value);
      } else {
        Photos.value = data.value.items;
        console.log("Fetched Photos :", Photos.value);
      }
    } catch (err) {
      errorPhotos.value = err.message || "Unexpected error occurred";
      console.error("Unexpected error:", err);
    } finally {
      loadingPhotos.value = false;
    }
  };
  
  onMounted(() => {
    // Check if the about data has been fetched previously
    if (!photosData().value) {
      // Fetch and store the about data
      fetchPhotos().then(() => {
        photosData().value = Photos.value;
      });
    } else {
      // Use the cached data
      Photos.value = photosData().value;
    }
  });
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
      // padding: 20px;
      margin-bottom: 50px;
      position: relative;
      color: #fff;
      background: $main;
      border-radius: 16px;
      border: 1px solid $main;
      overflow: hidden;
      &:hover {
        img {
          transform: scale(1.1);
        }
        .img-title {
          background-color: #14944e;
        }
      }
      img {
        width: 100%;
        height: 400px;
        border-radius: 8px;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }
      .img-title {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 30px;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        background-color: #14944ebc;
        transform: translate(-50%, -50%);
        width: max-content;
        border-radius: 16px;
        transition: all 0.3s ease-in-out;
        z-index: 55;
      }
    }
  }
  </style>
  