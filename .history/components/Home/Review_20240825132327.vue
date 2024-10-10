<template>
  <div class="review">
    <div class="overlay">
      <div class="container">
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
        >
          <SwiperSlide v-for="image in 3">
            <div class="block">
              <div class="block-img">
                <img src="/photos/36-1.png" alt="" />
              </div>
              <div class="block-info">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus perferendis ratione quod voluptas aliquid dolorum
                  eos officiis at odit harum excepturi distinctio, animi
                  similique error maxime dolores expedita ut? Eius.
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
    .block {
      padding: 20px;
      border-radius: 100px;
      background-color: #00000076;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      .block-info {
        padding: 0px 40px;
      }
    }
  }
}
</style>
