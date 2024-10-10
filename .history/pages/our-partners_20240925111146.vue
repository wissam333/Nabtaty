<template>
  <div class="Partiners nav-margin">
    <div class="cont">
      <h1 class="linear">
        <img
          src="/logo.png"
          alt=""
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          width="90"
        />
        <span>
          {{ $i18n.locale === "ar" ? "شركاؤنا" : "Partners" }}
        </span>
      </h1>
      <div v-if="loadingSponsers" class="text-center text-white">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else class="sponsers-wrapper" :class="locale === 'ar' ? 'ar' : ''">
        <a
          v-for="partner in Partiners?.items"
          :key="partner.id"
          class="sponser"
          data-aos="fade-up"
          :href="partner.url1"
          target="_blank"
        >
          <div class="sponser-img">
            <img
              :alt="partner?.englishName"
              :src="`${apiBase}${partner.image}`"
              v-if="partner.image"
            />
            <!-- <img v-else src="/photos/icons/Asset 1.png" alt="" /> -->
          </div>
          <div class="sponser-desc text-center">
            <h5 class="mt-4">
              {{ locale === "ar" ? partner?.name : partner?.englishName }}
            </h5>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

// get Partiners
const { data: Partiners, pending: loadingPartiners } =
  await useGetSiteApi().GetAll(`${api.Blocks}?categoryId=4`, [
    "name",
    "englishName",
    "image",
    "id",
    "blockPhotos",
    "url1",
    "parent",
  ]);
</script>
<style lang="scss" scoped>
.Partiners {
  margin-bottom: 50px;
  h1 {
    text-align: center;
    padding: 40px;
    position: relative;
    z-index: 10;
    img {
      margin-right: 10px;
      &.ar {
        margin-left: 10px;
      }
    }
    @media (max-width: 768px) {
      padding: 12px;
    }
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
