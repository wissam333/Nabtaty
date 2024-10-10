<template>
  <div class="studio">
    <h1>{{ $i18n.locale === "ar" ? "المركز الإعلامي" : "Media Center" }}</h1>
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
  h1 {
    padding: 10px;
    color: $main;
    font-weight: bold;
  }
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
