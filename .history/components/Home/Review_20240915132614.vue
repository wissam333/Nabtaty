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
          <SwiperSlide v-for="image in 3">
            <div class="block">
              <div class="block-img">
                <img width="200" src="/photos/5-1.png" alt="" />
              </div>
              <div class="block-info">
                <h4>
                  {{
                    $i18n.locale === "ar"
                      ? "كانت تجربة رائعة ، لقد اعجبني كل شي وخصوصاً العصائر التي تقدمونها"
                      : "It was a great experience, I liked everything especially the juices you serve."
                  }}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.review {
  position: relative;
  background: url("/photos/35-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .overlay {
    padding: 50px;
    @media (max-width: 991px) {
      padding: 20px;
    }
    .block {
      padding: 20px;
      border-radius: 100px;
      background-color: #00000076;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      @media (max-width: 991px) {
        flex-direction: column;
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
