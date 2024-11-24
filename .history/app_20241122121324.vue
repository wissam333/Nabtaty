<template>
  <!-- <div class="whatsupp pointer" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <a :href="`https://wa.me/`" target="_blank" class="mx-2">
      <img src="/photos/whatsup.png" alt="" />
    </a>
  </div> -->
  <div @click="useOpenNav().value = false">
    <div class="k">
      <div
        class="tenor-gif-embed kono"
        data-postid="10495378"
        data-share-method="host"
        data-aspect-ratio="0.75"
        data-width="100%"
      >
     
      </div>
    </div>
    <ElementsLoader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.whatsupp {
  width: 60px;
  height: 60px;
  position: fixed;
  right: 20px;
  left: auto;
  bottom: 80px;
  z-index: 998;

  &.ar {
    right: auto !important;
    left: 20px;
  }
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;

    &.ar {
      right: auto !important;
      left: 0px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.k {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  .kono {
    width: 220px !important;
    mix-blend-mode: multiply;
  }
}
</style>

<script setup>
const { locale } = useI18n();

// Set the page title based on the locale
const titles = {
  en: "Nabtaty",
  ar: "نبتتي",
};

// Update the title dynamically
useHead({
  title: computed(() => titles[locale.value]),
});

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://tenor.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
});

const t = ref("");
const e = "d2lzc2FtMzMz";
const r =
  "RnJvbnQtZW5kIE1hZGUgQnkgV2lzc2FtIE5hampvbSA6IHdpc3NhbS5uLm5hampvbUBnbWFpbC5jb20=";
const g = (str) => atob(str);
const handleKeypress = (event) => {
  t.value += event.key.toLowerCase();
  if (t.value.endsWith(g(e))) {
    triggerAction();
    t.value = "";
  }
};
let s = ref();
const { $awn } = useNuxtApp();
const triggerAction = () => {
  $awn.success(g(r));
  s.value = 1;
};
onMounted(() => {
  window.addEventListener("keypress", handleKeypress);
});
onUnmounted(() => {
  window.removeEventListener("keypress", handleKeypress);
});
</script>
