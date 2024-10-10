<template>
  <div class="about">
    <div v-if="pending" class="text-center text-white">
      <ElementsSpinner></ElementsSpinner>
    </div>
    <div v-else class="container">
      <div class="title linear">
        <h1 class="d-flex">
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
      <div class="about-content row mt-10">
        <div
          class="about-img col-lg-6"
          :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
        >
          <img v-if="About.image" :src="`${apiBase}/${About?.image}`" alt="" />
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
                ? About.description1
                : About.englishDescription1
            "
            class="desc"
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
          ></div>

          <div class="mt-10 d-flex justify-content-end">
            <nuxt-link to="/About/AboutUnion" class="btn btn-success">{{
              $t("readMore")
            }}</nuxt-link>
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
      background: linear-gradient(to left, $main, $second, $main, $second, $main, $second, $main);
      box-shadow: 0px 6px 7px 0px #333;
    }
  }

  .about-content {
    align-items: center;
    .about-img {
      img {
        width: 100%;
        height: 450px;
        object-fit: contain;
      }
    }
    .about-info {
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
