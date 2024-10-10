<template>
  <div>
    <ClientOnly>
      <div :class="locale == 'ar' ? 'bodyAR' : 'bodyEN'">
        <SharedNavbar />
        <slot @click="useOpenNav().value = false" />

        <SharedFooter />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
const { locale } = useI18n();
useLang().value = locale;
</script>
<style lang="scss" scoped></style>
