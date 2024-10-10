<template>
  <div>
    <div class="members">
      <h1 class="linear cont mb-10">
        <img
          src="/logo.png"
          alt=""
          :class="$i18n.locale === 'ar' ? 'ar' : ''"
          width="90"
        />
        <span class="underline">
          {{ $i18n.locale === "ar" ? "الشركاء" : "Partners" }}
        </span>
      </h1>
      <div class="cont">
        <div class="slider">
          <div v-if="loadingMembers" class="text-center text-white">
            <ElementsSpinner></ElementsSpinner>
          </div>

          <div v-else>
            <Swiper
              style="direction: ltr"
              :modules="[SwiperAutoplay, SwiperNavigation]"
              :loop="false"
              :autoplay="{
                delay: 5000,
              }"
              :slides-per-view="'auto'"
              :space-between="40"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }"
            >
              <SwiperSlide v-for="member in Members?.items" :key="member.id">
                <a
                  class="sponser"
                  data-aos="fade-up"
                  :href="member.url1"
                  target="_blank"
                >
                  <div class="sponser-img">
                    <img
                      :alt="member?.englishName"
                      :src="`${apiBase}${member.image}`"
                      v-if="member.image"
                    />
                    <img v-else src="/logo.png" alt="" />
                  </div>
                  <div class="sponser-desc mt-4">
                    <!-- <h4>
                      {{ locale === "ar" ? member?.name : member?.englishName }}
                    </h4> -->
                    <!-- <h5
                      class="text-center"
                      v-html="
                        locale === 'ar'
                          ? member?.description1
                          : member?.englishDescription1
                      "
                    ></h5> -->
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <!-- Custom Navigation Buttons -->
        <div class="swiper-navigation">
          <button class="swiper-button-next"></button>
          <button class="swiper-button-prev"></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: {
    apiBase,
    api: { Blocks },
  },
} = useRuntimeConfig();
// get Members
const { data: Members, pending: loadingMembers } = await useGetSiteApi().GetAll(
  `${Blocks}?categoryId=4`,
  ["name", "englishName", "image", "id", "blockPhotos", "url1", "parent"]
);
</script>
<style lang="scss" scoped>
.sponser {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f6f6;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 0;
  }
  &:hover {
    border: 2px solid $main;
  }

  .sponser-img {
    margin-right: 18px;
    transition: all 0.2s ease;
    mix-blend-mode: darken;
    width: 250px;
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

    h4 {
      color: #231f1e;
      text-align: center;
      font-size: 18px;
    }
    h5 {
      color: #231f1e;
      font-weight: bold;
      text-align: center;
    }
  }
}

.members {
  position: relative;
  .cont {
    .swiper-slide {
      display: flex;
      justify-content: center;
      width: 300px;
      height: auto;
      @media (max-width: 991px) {
        width: auto;
      }
    }
  }
}
</style>
