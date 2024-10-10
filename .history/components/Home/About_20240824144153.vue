<template>
  <div class="about">
    <div class="">
      <div class="row">
        <div class="col-lg-5 image">
          <img src="/photos/22-1.png" alt="" />
        </div>
        <div class="col-lg-7 info">
          <h1>Butterfly Dubai</h1>
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
    h1 {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
}
</style>
