<template>
  <div class="services">
    <h1 class="container title mt-5 fw-bold d-flex justify-content-start align-items-end">
      <!-- <img width="80" src="/photos/icons/Asset 1.png" alt="" /> -->
      {{ $i18n.locale === "ar" ? "خدماتنا" : "Services" }}
    </h1>
    <div class="container back" data-aos-duration="1000" data-aos="zoom-out">
      <!-- <div class="logo">
        <img src="/photos/icons/Asset 7.png" alt="" />
      </div> -->
      <div class="info">
        <div
          class="content"
          v-html="
            $i18n.locale === 'ar'
              ? truncateDescription(Services?.items[0]?.description1)
              : truncateDescription(Services?.items[0]?.englishDescription1)
          "
        ></div>
        <nuxt-link to="/Services" class="btn">
          {{ $i18n.locale === "ar" ? "شاهد المزيد" : "See More" }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: Services, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=1`,
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

// cut the desc
const truncateDescription = (desc) => {
  const wordLimit = 27;
  const words = desc?.split(" ");
  if (words?.length <= wordLimit) {
    return desc;
  }
  return words?.slice(0, wordLimit).join(" ") + "...";
};
</script>
<style lang="scss" scoped>
.services {
  margin: 50px 0px;
  .back {
    position: relative;
    background: url("/photos/Images/Artboard 7-100.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 550px;
  }
  .title {
    color: $basic;
    font-weight: bold;
    padding: 40px;
    font-size: 35px;
    font-family: Herova, "Arial", "sans-serif";
    letter-spacing: 2px;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  .info {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 40px;
    color: #fff;

    .content {
      background: #3333338c;
      padding: 35px;
      border-radius: 16px;
      margin-bottom: 10px;
    }

    @media (max-width: 991px) {
      padding: 20px;
    }
    .btn {
      background: transparent;
      border: 1px solid #fff;
      border-radius: 0;
      width: 150px;
      color: #fff;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: $basic;
        border-color: $basic;
      }
    }
  }
}
</style>
