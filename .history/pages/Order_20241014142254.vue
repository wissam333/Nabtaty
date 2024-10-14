<template>
  <div>
    <Order
      v-if="allcities && countries"
      :allcities="allcities.data"
      :countries="countries.data"
    ></Order>
  </div>
</template>

<script setup>
const allcities = ref({
  data: [
    {
      id: 1,
      nameAr: "دبي",
      nameEn: "Dubai",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 4,
      nameAr: "أبوظبي",
      nameEn: "Abu Dhabi",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 5,
      nameAr: "الشارقة",
      nameEn: "\tSharjah",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 6,
      nameAr: "عجمان",
      nameEn: "Ajman",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 7,
      nameAr: "أم القيوين",
      nameEn: "Umm Al Quwain",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 8,
      nameAr: "رأس الخيمة",
      nameEn: "Ras Al-Khaimah",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 9,
      nameAr: "الفجيرة",
      nameEn: "Fujairah",
      nationId: 1,
      nation: null,
      shippingCost: 100.0,
      parentPrincedomId: null,
      parentPrincedom: null,
    },
    {
      id: 10,
      nameAr: "rrrrrrr",
      nameEn: "rrrrrr",
      nationId: 1,
      nation: null,
      shippingCost: 130.0,
      parentPrincedomId: 1,
      parentPrincedom: null,
    },
  ],
  messages: [],
  succeeded: true,
});

const countries = ref([]);
</script>

<style lang="scss" scoped></style>
