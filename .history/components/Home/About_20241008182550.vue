<template>
  <div class="about">
    <div v-if="pending" class="text-center text-white">
      <ElementsSpinner></ElementsSpinner>
    </div>
    <div v-else class="container">
      <div class="title linear">
        <h1 class="d-flex align-items-center">
          <img width="70" src="/logo/logo nabtaty-08.png" alt="" />
          <span class="underline">
            {{ $t("AboutUs") }}
          </span>
        </h1>
      </div>
      <div class="about-content row">
        <div
          class="about-img col-lg-6"
          :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
          data-aos-duration="800"
        >
          <img v-if="About.image" :src="`${apiBase}${About?.image}`" alt="" />
          <img
            v-else
            src="/photos/2619fafceaedd791a39fd2a196ec0641.png"
            alt=""
          />
        </div>
        <div
          class="about-info col-lg-6"
          :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
          data-aos-duration="800"
        >
          <!-- <h3 class="fw-bold" :class="$i18n.locale === 'ar' ? 'ar' : ''">
              {{ $i18n.locale === "ar" ? About.name : About.englishName }}
            </h3> -->

          <div
            v-html="
              $i18n.locale === 'ar'
                ? truncateDescription(About.description)
                : truncateDescription(About.englishDescription)
            "
            class="desc"
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
          ></div>

          <div class="mt-7 d-flex justify-content-end">
            <nuxt-link to="/about" class="btn btn-main">
              <span>
                {{ $t("ReadMore") }}
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: About, pending } = await useGetSiteApi().GetAll(`${api.Menus}/3`);

// cut the desc
const truncateDescription = (desc) => {
  const wordLimit = 120;
  const words = desc?.split(" ");
  if (words?.length <= wordLimit) {
    return desc;
  }
  return words?.slice(0, wordLimit).join(" ") + "...";
};
</script>
<style lang="scss" scoped>
.about {
  // background: url("/photos/8-1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0px;
  background-attachment: fixed;
  .title {
    position: relative;
    img {
      margin-left: 0px;
      margin-right: 10px;
      &.ar {
        margin-right: 0px;
        margin-left: 10px;
      }
    }
  }

  .about-content {
    margin-top: 80px;
    // align-items: center;
    .about-img {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &::after {
        content: "";
        position: absolute;
        width: 96%;
        height: 99%;
        border: 2px solid #e3c472;
        right: -5px;
        top: -15px;
        @media (max-width: 768px) {
          width: 88%;
          height: 99%;
          right: 6%;
          top: -10px;
        }
      }
    }
    .about-info {
      margin-top: -20px;
      padding: 0px 30px;
      @media (max-width: 991px) {
        margin-top: 20px;
        padding: 0px 12px;
      }
      h3 {
        position: relative;
      }
      .desc {
        margin-top: 0px;
      }
    }
  }
}
</style>
