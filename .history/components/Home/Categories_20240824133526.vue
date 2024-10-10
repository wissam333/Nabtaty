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

        <p class="cat cat-info1">Dessert</p>
        <p class="cat cat-info2">Dessert</p>
        <p class="cat cat-info3">Dessert</p>
        <p class="cat cat-info4">Dessert</p>
        <p class="cat cat-info5">Dessert</p>
        <p class="cat cat-info6">Dessert</p>
        <p class="cat cat-info7">Dessert</p>
        <p class="cat cat-info8">Dessert</p>
        <p class="cat cat-info9">Dessert</p>
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
      color: $main;
      font-weight: bold;
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
        left: -65px;
        top: 35%;
      }
      &.cat4 {
        right: -65px;
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
        top: 1%;
        transform: translate(-50%, -50%);
        &:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
      }

      // info
      &.cat-info1 {
        left: -90px;
        top: 66%;
      }
      &.cat-info2 {
        right: -90px;
        top: 66%;
      }

      &.cat-info3 {
        left: -65px;
        top: 35%;
      }
      &.cat-info4 {
        right: -65px;
        top: 35%;
      }

      &.cat-info5 {
        left: -10px;
        top: 15%;
      }
      &.cat-info6 {
        right: -10px;
        top: 15%;
      }

      &.cat-info7 {
        left: 150px;
        top: -2%;
      }
      &.cat-info8 {
        right: 150px;
        top: -2%;
      }

      &.cat-info9 {
        left: 50%;
        top: 1%;
        transform: translate(-50%, -50%);
        &:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
      }
    }
  }
}
</style>
