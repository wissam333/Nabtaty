<template>
  <div>
    <Home />
  </div>
</template>

<script setup>
// get the country
const arabicCountries = [
  "SA",
  "AE",
  "EG",
  "LY",
  "JO",
  "LB",
  "DZ",
  "MA",
  "SY",
  "SD",
  "IQ",
  "YE",
  "OM",
  "KW",
  "QA",
  "BH",
  "PS",
  "MR",
  "SO",
  "TN",
  "DJ",
];
const { data, error } = await useFetch("https://ipapi.co/json/");
if (!error.value && data.value?.country_code) {
  locale.value = arabicCountries.includes(data.value.country_code)
    ? "ar"
    : "en";
}
</script>

<style lang="scss" scoped></style>
