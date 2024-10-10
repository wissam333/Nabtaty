<template>
  <div class="services">
    <img class="back" src="/photos/icons/Asset 7.png" alt="" />
    <Swiper
      style="direction: ltr"
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :speed="1000"
      :pagination="{
        clickable: true,
      }"
    >
      <SwiperSlide>
        <div class="container">
          <div class="row">
            <div class="col-lg-5 services-img">
              <img src="/photos/images/Artboard 6.png" alt="" />
            </div>
            <div class="col-lg-5 services-info">
              <img class="back" src="/photos/icons/Asset 7.png" alt="" />

              <div class="px-10">
                <h1>
                  {{ $i18n.locale === "ar" ? "خدماتنا" : "Our Services" }}
                </h1>
                <h3>Wood Works</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore animi quo, numquam, ut aliquid rerum velit consequatur
                  soluta quisquam, a at aut non accusamus similique
                  reprehenderit voluptatum. Quod, eaque quia.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore animi quo, numquam, ut aliquid rerum velit consequatur
                  soluta quisquam, a at aut non accusamus similique
                  reprehenderit voluptatum. Quod, eaque quia.
                </p>

                <div class="learn-more">
                  <img src="/photos/icons/Asset 6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="container">
          <div class="row">
            <div class="col-lg-5 services-img">
              <img src="/photos/images/Artboard 6.png" alt="" />
            </div>
            <div class="col-lg-5 services-info">
              <h1>{{ $i18n.locale === "ar" ? "خدماتنا" : "Our Services" }}</h1>
              <h3>Wood Works</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                animi quo, numquam, ut aliquid rerum velit consequatur soluta
                quisquam, a at aut non accusamus similique reprehenderit
                voluptatum. Quod, eaque quia.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                animi quo, numquam, ut aliquid rerum velit consequatur soluta
                quisquam, a at aut non accusamus similique reprehenderit
                voluptatum. Quod, eaque quia.
              </p>

              <div class="learn-more">
                <img src="/photos/icons/Asset 6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.services {
  background-color: $basic;
  padding: 50px 0px;
  position: relative;
  .back {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .services-img {
    img {
      width: 100%;
    }
  }
  .services-info {
    padding: 30px 0px;
    position: relative;

    h1 {
      font-size: 70px;
      font-family: Herova, "Arial", "sans-serif";
      color: $main;
      margin-bottom: 100px;
    }
    h3 {
      color: #fff;
    }
    p {
      color: #fff;
    }
    .learn-more {
      width: 60%;
      height: 25px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
