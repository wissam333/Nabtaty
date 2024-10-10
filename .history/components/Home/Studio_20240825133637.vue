<template>
  <div class="studio">
    <div class="wraper">
      <div class="block">
        <img src="/photos/41-1.png" alt="" />
      </div>
      <div class="block">
        <img src="/photos/42-1.png" alt="" />
      </div>
      <div class="block">
        <img src="/photos/43-1.png" alt="" />
      </div>
      <div class="block">
        <img src="/photos/44-1.png" alt="" />
      </div>
      <div class="block">
        <img src="/photos/45-1.png" alt="" />
      </div>
      <div class="block">
        <img src="/photos/46-1.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.studio {
  padding: 100px 0px;
  .wraper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    padding: 10px;
    .block {
      img {
        width: 100%;
      }
    }
  }
}
</style>
