<template>
  <div class="categories">
    <div class="container">
      <div class="cup d-flex justify-content-center">
        <img class="main" src="/photos/17-1.png" alt="" />

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
  padding: 100px 0px;
  .cup {
    position: relative;
    width: 800px;
    margin: auto;
    .main {
      width: 100%;
    }
    .cat {
      position: absolute;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
      &.cat1 {
        left: -30px;
        top: 60%;
      }
      &.cat2 {
        right: -30px;
        top: 60%;
      }

      &.cat3 {
        left: -55px;
        top: 35%;
      }
      &.cat4 {
        right: -60px;
        top: 35%;
      }

      &.cat5 {
        left: -10px;
        top: 15%;
      }
      &.cat6 {
        right: -10px;
        top: 15%;
      }

      &.cat7 {
        left: 150px;
        top: -2%;
      }
      &.cat8 {
        right: 150px;
        top: -2%;
      }

      &.cat9 {
        left: 50%;
        top: 0%;
        transform: translate(-50%, -50%);
        &:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
      }
    }
  }
}
</style>
