<template>
  <div class="new">
    <div class="row">
      <div class="col-lg-6 image"></div>
      <div class="col-lg-6 info"></div>
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
      object-fit: cover;
      height: 100%;
    }
  }
  .info {
    position: relative;
    background: url("/photos/23-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 80px;
    @media (max-width: 991px) {
      padding: 30px;
    }

    h1 {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 70px;
      letter-spacing: 3px;
      @media (max-width: 991px) {
        font-size: 40px;
      }
    }
  }
}
</style>
