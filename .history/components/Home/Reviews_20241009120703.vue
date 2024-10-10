<template>
  <div class="reviews">
    <div class="container">
      <h1>
        <img width="70" src="/logo/logo nabtaty-08.png" alt="" />
        <span>
          {{ $i18n.locale === "ar" ? "التعليقات" : "Reviews" }}
        </span>
      </h1>

      <div v-if="pending" class="text-center text-white loader">
        <ElementsSpinner></ElementsSpinner>
      </div>
      <div v-else>
        <Swiper
          style="direction: ltr"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :loop="false"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '1200': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            '992': {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },

            '768': {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },

            '250': {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            '1': {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }"
        >
          <SwiperSlide v-for="review in 4">
            <div class="review">
              <div class="leaf">
                <img src="/photos/leaf.png" alt="" />
              </div>
              <div class="title">
                <img width="50" src="/photos/user.png" alt="" />
                <h2>Lorem Apsum</h2>
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
                sequi inventore sunt reiciendis, ratione dolores animi itaque ut
                exercitationem iure eligendi.
              </div>
              <div class="rate"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.reviews {
  margin-top: 40px;
  display: flow-root;
  padding: 100px 0px 50px 0px;
  position: relative;
  background: url("/photos/reviews.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  h1 {
    font-weight: bold;
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
  .review {
    padding: 20px;
    background: rgba(255, 255, 255, 0.523);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      h2 {
        margin: 0;
        color: rgb(190 86 198);
      }
    }
    .desc {
    }
    .rate {
    }
  }
}
.swiper {
  padding: 55px 0px;
}
</style>
