<template>
  <div class="categories py-10">
    <div class="container">
      <div class="cup d-flex justify-content-center">
        <img src="/photos/17-1.png" alt="" />

        <img class="cat cat1" src="/photos/7-1.png" alt="" />
        <img class="cat cat2" src="/photos/8-1.png" alt="" />
        <img class="cat cat3" src="/photos/9-1.png" alt="" />
        <img class="cat cat4" src="/photos/10-1.png" alt="" />
        <img class="cat cat5" src="/photos/11-1.png" alt="" />
        <img class="cat cat6" src="/photos/12-1.png" alt="" />
        <img class="cat cat7" src="/photos/13-1.png" alt="" />
        <img class="cat cat8" src="/photos/14-1.png" alt="" />
        <img class="cat cat9" src="/photos/15-1.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.categories {
  position: relative;
  background: url("/photos/16-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .cup {
    position: relative;
    .cat {
      position: absolute;
    }
  }
}
</style>
