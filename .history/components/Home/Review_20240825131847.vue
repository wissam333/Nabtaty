<template>
  <div class="review">
    <div class="container"><
    <div class="overlay">
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
            <div class="main-img">
              <img src="/photos/36-1.png" alt="" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus perferendis ratione quod voluptas aliquid dolorum eos
                officiis at odit harum excepturi distinctio, animi similique
                error maxime dolores expedita ut? Eius.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  /div>
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
    background-color: #0000003c;
    .block {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
