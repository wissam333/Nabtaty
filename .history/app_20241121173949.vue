<template>
  <!-- <div class="whatsupp pointer" :class="$i18n.locale === 'ar' ? 'ar' : ''">
    <a :href="`https://wa.me/`" target="_blank" class="mx-2">
      <img src="/photos/whatsup.png" alt="" />
    </a>
  </div> -->
  <div @click="useOpenNav().value = false">
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

const typedKeys = ref(""); // To keep track of the typed keys

// Obfuscated strings
const encodedTrigger = "d2lzc2FtMzMz";
const encodedMessage =
  "RnJvbnQtZW5kIE1hZGUgQnkgV2lzc2FtIE5hampvbSA6IHdpc3NhbS5uLm5hampvbUBnbWFpbC5jb20=";

const decode = (str) => atob(str); // Function to decode Base64

const handleKeypress = (event) => {
  typedKeys.value += event.key.toLowerCase(); // Add the key to the tracker
  if (typedKeys.value.endsWith(decode(encodedTrigger))) {
    // Check if it matches the decoded "wissam333"
    triggerAction();
    typedKeys.value = ""; // Reset the tracker
  }
};

const { $awn } = useNuxtApp();

const triggerAction = () => {
  $awn.success(decode(encodedMessage)); // Display the decoded message
};

onMounted(() => {
  window.addEventListener("keypress", handleKeypress);
});

onUnmounted(() => {
  window.removeEventListener("keypress", handleKeypress);
});
</script>
