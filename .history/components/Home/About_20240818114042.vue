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
        </div>
      </div>

      <!-- our vision -->
      <div class="row vision">
        <div class="col-lg-6 vision-info">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero
            accusantium officia itaque adipisci magni beatae doloremque eveniet
            labore. Accusantium laudantium repellat molestiae quasi saepe,
            deleniti autem vel quaerat quas. icia itaque adipisci magni beatae
            doloremque eveniet labore. Accusantium laudantium repellat molestiae
            quasi saepe, deleniti autem vel quaerat quas.
          </p>
          <div class="learn-more">
            <img src="/photos/icons/Asset 6.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6 vision-img">
          <div class="three-lines">
            <img src="/photos/icons/Asset 5.png" alt="" />
          </div>
          <img
            class="vision-img-main"
            src="/photos/images/Artboard 3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.about {
  padding-top: 50px;
  margin-bottom: 100px;
  .about-img {
    z-index: 2;
    img {
      width: 100%;
    }
  }
  .about-info {
    background-color: #fff;
    padding: 50px 70px;
    margin-top: 50px;
    margin-left: -50px;
    padding-bottom: 200px;
    z-index: 1;
    box-shadow: 0px 0px 20px 12px #33333324;

    @media (max-width: 991px) {
      margin-left: 0px;
    }
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
    height: 28px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .vision {
    margin-top: 20px;
    align-items: center;

    @media (max-width: 991px) {
      flex-direction: column-reverse;
    }
    .vision-img {
      display: flex;
      justify-content: flex-start;
      position: relative;
      .vision-img-main {
        width: 400px;
        z-index: 11;
        @media (max-width: 991px) {
          width: 100%;
        }
      }
      .three-lines {
        position: absolute;
        width: 150px;
        height: calc(100% + 300px);
        margin-top: -200px;
        margin-bottom: -100px;
        z-index: 10;
        left: 130px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .vision-info {
      h1 {
        font-family: Herova, "Arial", "sans-serif";
        color: $main;
      }
    }
  }
}
</style>
