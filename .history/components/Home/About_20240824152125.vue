<template>
  <div class="about">
    <div class="">
      <div class="row">
        <div class="col-lg-5 image">
          <img src="/photos/22-1.png" alt="" />
        </div>
        <div class="col-lg-7 info">
          <h1>Butterfly Dubai</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis
            minus voluptate porro nihil, rem a tempora sint cumque aut.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.about {
  .image {
    padding: 0 !important;
    img {
      width: 100%;
    }
  }
  .info {
    position: relative;
    background: url("/photos/23-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 80px;
    h1 {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 70px;
      letter-spacing: 3px;
    }
    h2 {
      color: #fff;
      font-size: 50px;
      letter-spacing: 3px;
    }
  }
}
</style>
