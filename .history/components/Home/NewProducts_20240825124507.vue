<template>
  <div class="new">
    <div class="row">
      <div class="col-lg-6 info"></div>
      <div class="col-lg-6 image">
        <div class="image1">
          <img src="/photos/33-1.png" alt="" />
        </div>
        <div class="image2">
          <img src="/photos/32-1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.new {
  .image {
    padding: 0 !important;
    display: flex;
    background-color: #222222;
    .image1 {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-end;
      img {
        width: 100%;
        object-fit: cover;
        height: 80%;
      }
    }
    .image2 {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-start;
      img {
        width: 100%;
        object-fit: cover;
        height: 80%;
      }
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
