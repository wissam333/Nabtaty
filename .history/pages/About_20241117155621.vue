<template>
  <div class="about">
    <div class="container">
      <div class="title mb-5">
        <h1 class="d-flex align-items-center justify-content-center">
          <img width="70" src="/photos/nabtaty8.png" alt="" />
          <span class="underline">
            {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
          </span>
        </h1>
      </div>
      <div class="container">
        <div
          class="row"
          v-for="(about, index) in About"
          :key="about.id"
          :class="index % 2 == 0 ? 'row-reverse' : ''"
        >
          <div
            class="col-lg-6 image"
            :data-aos="$i18n.locale === 'ar' ? 'fade-right' : 'fade-left'"
            data-aos-duration="800"
          >
            <img
              :src="`${apiBase}/${about.photo}`"
              alt=""
              class="img-fluid align-self-stretch"
            />
          </div>
          <div
            class="col-lg-6 about-text"
            :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
            data-aos-duration="800"
          >
            <div>
              {{
                $i18n.locale === "ar" ? about?.description : about?.description
              }}
            </div>
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
const { locale } = useI18n();
const { data: About, pending } = await useFetch(`${api.GetAbout}`, {
  baseURL: apiBase,
  headers: {
    "accept-language": locale.value === "ar" ? "ar" : "en",
  },
});
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
  padding: 40px 0px;
  span {
    -webkit-background-clip: text;
    font-weight: bold;
    background-color: #8cc63e;
    background-image: linear-gradient(to right, #191d23, #8cc63e);
    background-repeat: repeat;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
.row {
  margin-bottom: 50px;
  display: flex;
  .about-text {
  }
  .image {
    img {
      width: 100%;
    }
  }
}
.row-reverse {
  flex-direction: row-reverse;
}
</style>
