<template>
  <main id="EditAccount" class="mb-10">
    <AccountEditProfile v-if="accountType == 'Person'" />
    <AccountEditCompanyProfile v-if="accountType == 'Company'" />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
const accountType = useAccountType();
</script>
