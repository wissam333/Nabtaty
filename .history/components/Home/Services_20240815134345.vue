<template>
  <div class="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 services-img">
          <img src="/photos/images/Artboard 6.png" alt="" />
        </div>
        <div class="col-lg-7 services-info">
          <h1>{{ $i18n.locale === "ar" ? "خدماتنا" : "Our Services" }}</h1>
          <h3>Wood Works</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            animi quo, numquam, ut aliquid rerum velit consequatur soluta
            quisquam, a at aut non accusamus similique reprehenderit voluptatum.
            Quod, eaque quia.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.services {
  background-color: $basic;
  padding: 50px 0px;
  .services-img {
    img {
      width: 100%;
    }
  }
  .services-info {
    padding: 30px 100px;
    h1 {
      font-size: 70px;
      font-family: Herova, "Arial", "sans-serif";
      color: $main;
      margin-bottom: 50px;
    }
    h3{
        
    }
  }
}
</style>
