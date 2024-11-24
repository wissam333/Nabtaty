<template>
  <div class="about">
    <div class="container">
      <div class="title">
        <h1 class="d-flex align-items-center justify-content-center">
          <img width="70" src="/photos/nabtaty8.png" alt="" />
          <span class="underline">
            {{ $i18n.locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy" }}
          </span>
        </h1>
        <div class="">
          <div
            class="row mb-10"
            v-for="(about, index) in Privacy"
            :key="about.id"
          >
            <div
              class="col-lg-12 about-text"
              :data-aos="$i18n.locale === 'ar' ? 'fade-left' : 'fade-right'"
              data-aos-duration="800"
            >
              <div>
                <p>
                  {{ $i18n.locale === "ar" ? about?.content : about?.content }}
                </p>
              </div>
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

const { data: Privacy } = await useFetch(`${api.GetPrivacy}`, {
  baseURL: apiBase,
  credentials: "include",
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
</style>
