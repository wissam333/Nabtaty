<template>
  <div class="logo">
    <div data-aos="fade-up" data-aos-duration="1000">
      <img src="/logo/logo nabtaty copy-03.svg" alt="" />
    </div>

    <div class="d-flex align-items-start justify-content-start flex-column">
      <div
        class="d-flex align-items-center contacts-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <font-awesome :icon="['fas', 'envelope']" />
        <div class="contacts-info" :class="$i18n.locale === 'ar' ? 'ar' : ''">
          <p>{{ emailData }}</p>
        </div>
      </div>

      <br />

      <div
        class="d-flex align-items-center contacts-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <font-awesome :icon="['fas', 'phone']" />

        <div class="contacts-info" :class="$i18n.locale === 'ar' ? 'ar' : ''">
          <p>{{ mobileData }}</p>
        </div>
      </div>

      <br />

      <div
        class="d-flex align-items-center contacts-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <font-awesome :icon="['fas', 'globe']" />

        <div class="contacts-info" :class="$i18n.locale === 'ar' ? 'ar' : ''">
          <p>{{ websiteData }}</p>
        </div>
      </div>
    </div>

    <!-- social -->
    <!-- <div
      class="d-flex socials"
      data-aos="fade-up"
      data-aos-duration="1000"
      :class="$i18n.locale === 'ar' ? 'ar' : ''"
    >
      <a
        :href="Socials?.items[0]?.pageUrl"
        target="_blank"
        class="socials-img"
        style=""
      >
        <font-awesome :icon="['fab', 'x-twitter']" />
      </a>

      <a
        :href="Socials?.items[1]?.pageUrl"
        target="_blank"
        class="socials-img"
        style=""
      >
        <font-awesome :icon="['fab', 'youtube']" />
      </a>

      <a
        :href="Socials?.items[2]?.pageUrl"
        target="_blank"
        class="socials-img"
        style=""
      >
        <font-awesome :icon="['fab', 'facebook']" />
      </a>
    </div> -->
  </div>
</template>
<script setup>
// const Socials = useSocialMenus().value;
</script>
<style lang="scss" scoped>
.socials {
  display: flex;
  justify-content: center;
  margin-top: -15px;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: row;
    margin-bottom: 50px;
  }

  &.ar {
    .socials-img {
      margin-left: 20px !important;
      margin-right: 0px !important;
    }
    @media (max-width: 991px) {
      justify-content: flex-end;
    }
  }
  .socials-img {
    width: 30px;
    font-size: 30px;
    margin: 0px 10px;
    display: flex;
    justify-content: center;
    color: $second;

    a {
      color: $second;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: $second;
      }
    }
    img {
      width: 100%;
    }
  }
}

.logo {
  display: flex;
  flex-direction: column;
  margin-top: -25px;
  // align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
  img {
    width: 300px;
    margin-bottom: 40px;
    @media (max-width: 1400px) {
      width: 250px;
    }
  }
}
</style>
