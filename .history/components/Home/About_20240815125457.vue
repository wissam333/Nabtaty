<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 about-img">
          <img src="/photos/images/Artboard 1 copy.png" alt="" />
        </div>
        <div class="col-lg-6 about-info">
          <div class="about-info-header">
            <img src="/photos/icons/Asset 26.png" alt="" />
            <h1>Welcom To</h1>
            <h2>Royal Art Wooden Factory</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            sequi ducimus neque ut unde, labore magnam perspiciatis! Nobis
            blanditiis nulla vero, dolorem commodi impedit, expedita molestias
            cum doloremque veniam dolores? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Omnis, placeat in? Esse, temporibus
            eaque beatae quam blanditiis natus exercitationem non illum soluta.
            Temporibus beatae repudiandae dolore deserunt maxime, cumque enim.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            sequi ducir sit, amet consectetur adipisicing elit. Omnis, placeat
            in? Esse, temporibus eaque beatae quam blanditiis natus
            exercitationem non illum soluta. Temporibus beatae repudiandae
            dolore deserunt maxime, cumque enim.
          </p>
          <div class="learn-more">
            <img src="/photos/icons/Asset 6.png" alt="" />
          </div>
          <!-- <div class="three-lines">
            <img src="/photos/icons/Asset 5.png" alt="" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.about {
  padding-top: 50px;
  .about-img {
    z-index: 2;
    img {
      width: 100%;
    }
  }
  .about-info {
    background-color: #fff;
    padding: 50px;
    margin-top: 50px;
    margin-left: -50px;
    padding-bottom: 100px;
    z-index: 1;
    box-shadow: 1px 1px 1px 1px #333;
    .about-info-header {
      img {
        width: 170px;
      }
      h1 {
        font-family: Herova, "Arial", "sans-serif";
        color: $main;
        margin-bottom: 0px;
      }
      h2 {
        font-weight: bold;
        font-family: NeutraText-bold, "Arial", "sans-serif";
        color: $basic;
      }
    }
  }
  .learn-more {
    width: 60%;
    height: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
