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
  width: 200px;
  height: 200px;
}
</style>
