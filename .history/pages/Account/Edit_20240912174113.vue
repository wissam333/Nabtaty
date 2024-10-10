<template>
  <main id="EditAccount" class="mb-10">
    <AccountEditProfile v-if="accountType == 'Person'" />
    <AccountEditCompanyProfile
      v-if="accountType == 'Company' && countries"
      :countries="countries"
    />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
const {
  public: { api },
} = useRuntimeConfig();
const accountType = useAccountType();
// Fetch The Data
// const { data, error, execute } = await useGetSiteApi().GetAll(`${api.NationalitiesGetAllApi}`)
// const {
//   data: countries,
//   error: countriesError,
//   execute: countriesExecute,
// } = await useGetSiteApi().GetAll(api.CountriesGetAllApi);
// // refetch the token if 401 error occure
// if (countriesError.value && countriesError.value.statusCode == 401) {
//   await useReauthorization().reAuthorize();
// }

// onMounted(() => {
//   // Reexecute fetch data on mounted
//   // if (!data.value) execute()
//   location.href = "#EditAccount";

//   if (!countries.value) countriesExecute();
// });
</script>
