<template>
  <div class="studio">
    <h1>
      <img class="mx-2" width="65" src="/photos/1-1.png" alt="" />
      <span>
        {{ $i18n.locale === "ar" ? "المركز الإعلامي" : "Media Center" }}
      </span>
    </h1>
    <nuxt-link to="/Media/Photos" class="wraper">
      <div
        class="block"
        v-for="photo in Photos?.items[0]?.blockPhotos.slice(0, 6)"
      >
        <img :src="apiBase + photo.image" alt="" />
      </div>
    </nuxt-link>
  </div>
</template>
<script setup>
const {
  public: {
    apiBase,
    api: { Blocks },
  },
} = useRuntimeConfig();
// get Photos
const { data: Photos, pending } = await useGetSiteApi().GetAll(
  `${Blocks}?categoryId=2`,
  ["id", "blockPhotos", "name", "englishName", "image1", "blockAttachements"]
);
</script>
<style lang="scss" scoped>
.studio {
  padding: 100px 0px;

  h1 {
    padding: 10px;
    color: $main;
    font-weight: bold;
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
  .wraper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    padding: 10px;
    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }
    .block {
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
    }
  }
}
</style>
