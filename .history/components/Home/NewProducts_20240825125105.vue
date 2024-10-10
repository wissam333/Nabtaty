<template>
  <div class="new">
    <div class="row">
      <div class="col-lg-6 info">
        <h1>
          {{ $i18n.locale === "ar" ? "المنتجات الجديدة" : "New Products" }}
        </h1>
        <div class="content">
          <h2>Lorem ipsum dolor sit, amet c</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            eligendi nesciunt laboriosam veritatis culpa assumenda similique et,
            inventore consectetur sequi tempore aperiam animi dicta doloribus
            eum ducimus! Aperiam, hic cum?
          </p>
        </div>
      </div>
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
    padding: 80px 0px;
    .content {
      color: #fff;
      padding: 0px 80px;
      @media (max-width: 991px) {
        padding: 30px;
      }
    }

    h1 {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 3px;
      background-color: $second;
      display: flex;
      justify-content: flex-start;
      padding: 15px 40px;
      width: max-content;
      @media (max-width: 991px) {
      }
    }
  }
}
</style>
