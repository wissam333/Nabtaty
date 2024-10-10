<template>
  <div>
    <img src="/photos/whatsup.png" alt="">
  </div>
  <div @click="useOpenNav().value = false">
    <ElementsLoader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
