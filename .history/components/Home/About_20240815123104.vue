<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 about-img">
          <img src="/photos/images/Artboard 1 copy.png" alt="" />
        </div>
        <div class="col-lg-6 about-info">
          <div>
            <img src="/photos/icons/Asset 26.png" alt="" />
            <h1>Welcom To</h1>
            <h2>Royal Art Factory</h2>
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
          <img src="/photos/icons/Asset 6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.about {
  background-color: #eee;
  .about-img {
    img {
      width: 100%;
    }
  }
  .about-info {
    background-color: #fff;
    h1 {
      font-family: Herova, "Arial", "sans-serif";
      color: $main;
      font-size: 50px;
    }
    h2 {
      font-weight: bold;
      font-family: NeutraText-bold, "Arial", "sans-serif";
      color: $basic;
    }
  }
}
</style>
