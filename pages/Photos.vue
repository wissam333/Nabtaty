<template>
  <div class="about">
    <div class="container">
      <div class="title">
        <h1 class="d-flex align-items-center justify-content-center">
          <img width="70" src="/photos/nabtaty8.png" alt="" />
          <span class="underline">
            {{ $i18n.locale === "ar" ? "البوم الصور" : "Photo Album" }}
          </span>
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
  padding: 40px 0px;
  span {
    -webkit-background-clip: text;
    font-weight: bold;
    background-color: #8cc63e;
    background-image: linear-gradient(to right, #191d23, #8cc63e);
    background-repeat: repeat;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
</style>
