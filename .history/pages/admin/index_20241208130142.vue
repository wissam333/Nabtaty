<template>
  <div>
    <AdminHome />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin", // This will disable the default layout
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped></style>
