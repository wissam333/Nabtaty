<template>
  <div class="about">
    <div v-if="pending" class="text-center text-white">
      <ElementsSpinner></ElementsSpinner>
    </div>
    <div v-else class="container">
      <div class="title linear">
        <h1 class="d-flex align-items-center">
          <img
            src="/logo.png"
            alt=""
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
            width="90"
          />
          <span class="underline">
            {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
          </span>
        </h1>
      </div>
      <div class="about-content row">
        <div
          class="about-img col-lg-6"
          :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
        >
          <img v-if="About.image" :src="`${apiBase}${About?.image}`" alt="" />
          <!-- <img v-else src="/photos/7-1.png" alt="" /> -->
        </div>
        <div
          class="about-info col-lg-6"
          :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
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

          <div class="mt-10 d-flex justify-content-end">
            <nuxt-link to="/About/AboutUnion" class="btn btn-main">
              <span>
                {{ $i18n.locale === "ar" ? "اقرأ المزيد" : "Read More" }}
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
  const wordLimit = 130;
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
      margin-right: 10px;
      &.ar {
        margin-left: 10px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -15px;
      width: 100%;
      height: 3px;
      background: linear-gradient(
        to left,
        $main,
        $second,
        $main,
        $second,
        $main,
        $second,
        $main
      );
      box-shadow: 0px 6px 7px 0px #33333362;
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
        object-fit: contain;
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
          width: 81%;
          height: 91%;
        }
      }
    }
    .about-info {
      margin-top: -20px;
      padding: 0px 30px;
      h3 {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: -10px;
          width: 50%;
          height: 3px;
          background: red;
          box-shadow: 0px 6px 7px 0px #333;
          left: 0;
          right: auto;
        }
        &.ar {
          &::after {
            content: "";
            position: absolute;
            bottom: -20px;
            width: 50%;
            height: 3px;
            background: red;
            box-shadow: 0px 6px 7px 0px #333;
            right: 0;
            left: auto;
          }
        }
      }
      .desc {
        margin-top: 0px;
      }
    }
  }
}
</style>
