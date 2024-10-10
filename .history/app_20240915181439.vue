<template>
  <div class="whatsupp">
    <img src="/photos/whatsup.png" alt="" />
  </div>
  <div @click="useOpenNav().value = false">
    <ElementsLoader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.whatsupp {
  width: 70px;
  height: 70px;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 998;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
