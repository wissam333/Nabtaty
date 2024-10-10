<template>
  <div class="review">
    <div class="overlay">
      <div class="container">
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          navigation
        >
          <SwiperSlide>
            <div class="block">
              <div class="block-img">
                <img width="200" src="/photos/5-1.png" alt="" />
              </div>
              <div class="block-info">
                <h4
                  v-html="
                    $i18n.locale === 'ar'
                      ? Reviews?.items[0]?.description1
                      : Reviews?.items[0]?.englishDescription1
                  "
                ></h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="block">
              <div class="block-img">
                <img width="200" src="/photos/5-1.png" alt="" />
              </div>
              <div class="block-info">
                <h4
                  v-html="
                    $i18n.locale === 'ar'
                      ? Reviews?.items[0]?.description2
                      : Reviews?.items[0]?.englishDescription2
                  "
                ></h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { data: Reviews, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=8`
);
</script>
<style lang="scss" scoped>
.review {
  position: relative;
  background: url("/photos/4-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .overlay {
    padding: 50px;
    @media (max-width: 991px) {
      padding: 10px;
    }
    .block {
      padding: 20px 80px;
      border-radius: 100px;
      background-color: #00000076;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #fff;
      &.ar {
        flex-direction: row-reverse;
      }
      @media (max-width: 991px) {
        flex-direction: column;
        padding: 20px 10px;
        justify-content: center;
      }
      .block-info {
        padding: 0px 40px;
        @media (max-width: 991px) {
          padding: 20px;
        }
      }
    }
  }
}
</style>
