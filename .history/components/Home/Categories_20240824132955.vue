<template>
  <div class="categories">
    <div class="container">
      <div class="cup d-flex justify-content-center">
        <img class="main" src="/photos/17-1.png" alt="" />

        <div class="cat cat1">
          <p>Dessert</p>
          <img src="/photos/7-1.png" alt="" />
        </div>
        <div class="cat cat2">
          <p>Dessert</p>
          <img src="/photos/8-1.png" alt="" />
        </div>
        <div class="cat cat3">
          <p>Dessert</p>
          <img src="/photos/9-1.png" alt="" />
        </div>
        <div class="cat cat4">
          <p>Dessert</p>
          <img src="/photos/10-1.png" alt="" />
        </div>
        <div class="cat cat5">
          <p>Dessert</p>
          <img src="/photos/11-1.png" alt="" />
        </div>
        <div class="cat cat6">
          <p>Dessert</p>
          <img src="/photos/12-1.png" alt="" />
        </div>
        <div class="cat cat7">
          <p>Dessert</p>
          <img src="/photos/13-1.png" alt="" />
        </div>
        <div class="cat cat8">
          <p>Dessert</p>
          <img src="/photos/14-1.png" alt="" />
        </div>
        <div class="cat cat9">
          <p>Dessert</p>
          <img src="/photos/15-1.png" alt="" />
        </div>
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
      width: 150px;
      height: 150px;
      cursor: pointer;

      p {
        margin: 10px;
      }
      img {
        width: 135px;
        height: 135px;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
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
    }
  }
}
</style>
