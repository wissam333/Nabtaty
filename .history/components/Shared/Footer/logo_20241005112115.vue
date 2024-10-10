<template>
  <div class="logo">
    <div data-aos="fade-up" data-aos-duration="1000">
      <img src="/AlMuadalahLogoRamli.60ed7b1.png" alt="" />
    </div>

    <!-- <div
          class="d-flex align-items-center contacts-content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <font-awesome :icon="['fas', 'box']" />

          <div
            class="contacts-info"
            :class="$i18n.locale === 'ar' ? 'ar' : ''"
            v-html="
              $i18n.locale === 'ar'
                ? ContactsDetails?.description3
                : ContactsDetails?.englishDescription3
            "
          ></div>
        </div> -->

    <!-- <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="contacts-info"
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          v-html="
            $i18n.locale === 'ar'
              ? ContactsDetails?.description4
              : ContactsDetails?.englishDescription4
          "
        ></div> -->

    <!-- social -->
    <div
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
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped></style>
