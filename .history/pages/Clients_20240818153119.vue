<template>
  <div class="sponsers nav-margin">
    <h1
      class="my-10 title fw-bold d-flex justify-content-center align-items-end"
    >
      <img width="80" src="/photos/icons/Asset 1.png" alt="" />
      {{ $i18n.locale === "ar" ? "العملاء" : "Clients" }}
    </h1>
    <div class="container">
      <div v-if="loadingSponsers" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else class="sponsers-wrapper" :class="locale === 'ar' ? 'ar' : ''">
        <a
          v-for="client in Clients?.items[0]?.blockPhotos"
          :key="client?.id"
          class="sponser"
          data-aos="fade-up"
          :href="client?.url1"
          target="_blank"
        >
          <div class="sponser-img">
            <img
              :alt="client?.englishName"
              :src="`${apiBase}/${client?.image1}`"
              v-if="client?.image1"
            />
            <img v-else src="/photos/icons/Asset 1.png" alt="" />
          </div>
          <!-- <div class="sponser-desc text-center">
              <h5 class="mt-4">
                {{ locale === "ar" ? client?.name : client?.englishName }}
              </h5>
            </div> -->
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n();
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: Clients, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=4`,
  ["name", "englishName", "image1", "id", "blockPhotos", "url1"]
);
</script>
<style lang="scss" scoped>
.sponsers {
  .title {
    color: $main;
    font-weight: bold;
    padding: 40px;
  }
  .sponsers-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    margin: 50px 0px;

    &.ar {
      direction: rtl;
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 10px;
    }

    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 479px) {
      grid-template-columns: 1fr;
    }
    .sponser {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      padding: 20px;
      background-color: #f5f6f6;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        border: 1px solid $main;
      }

      .sponser-img {
        margin-right: 18px;
        transition: all 0.2s ease;
        mix-blend-mode: darken;
        width: 200px;
        height: 200px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          object-fit: contain;
        }

        &:hover {
          transform: scale(1.1);
        }
      }

      .sponser-desc {
        font-size: 13px;
        font-weight: 600;
        color: #333;

        h5 {
          color: #231f1e;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
