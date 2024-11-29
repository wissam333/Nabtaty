<template>
  <div>
    <ClientOnly>
      <div :class="locale == 'ar' ? 'bodyAR' : 'bodyEN'">
        <SharedAdmin />
        <slot />
      </div>
    </ClientOnly>
  </div>
</template>
<script setup>
const { locale } = useI18n();
useLang().value = locale;

// // get the country
// const arabicCountries = [
//   "SA",
//   "AE",
//   "EG",
//   "LY",
//   "JO",
//   "LB",
//   "DZ",
//   "MA",
//   "SY",
//   "SD",
//   "IQ",
//   "YE",
//   "OM",
//   "KW",
//   "QA",
//   "BH",
//   "PS",
//   "MR",
//   "SO",
//   "TN",
//   "DJ",
// ];
// const { data, error } = await useFetch("https://ipapi.co/json/");

// let changed = ref(false);
// watchEffect(() => {
//   if (process.client) {
//     if (data.value) {
//       if (!changed.value)
//         if (!error.value && data.value?.country_code) {
//           locale.value = arabicCountries.includes(data.value.country_code)
//             ? "ar"
//             : "en";
//         }
//       changed.value = true;
//     }
//   }
// });

// watchEffect(() => {
//   if (locale.value) {
//     if (locale.value === "ar") {
//       useCookie("lang").value = "ar";
//       useCookie("i18n_redirected").value = "ar";
//     } else {
//       useCookie("lang").value = "en";
//       useCookie("i18n_redirected").value = "en";
//     }
//   }
// });
</script>
<style lang="scss">
input,
textarea {
  padding: 7px 14px;
  border-radius: 6px;
  border: 1px solid #c5c5c5;
  transition: all 0.2s linear;
  color: #333;
  &:hover {
    border: 1px solid #898989;
  }

  &:focus,
  &:focus-visible {
    box-shadow: 0px 2px 6px rgba(4, 119, 81, 0.3);
    border: 1px solid #19ad7b;
    border-radius: 6px;
    outline: 0;

    + label {
      color: #19ad7b;
    }
    &::placeholder {
      padding-inline-start: 4px !important;
    }
  }
  &::placeholder {
    color: #c5c5c5;
    font-size: 15px;
    transition: all 0.2s linear;
  }
}
.bodyAR {
  input,
  textarea {
    + label {
      direction: rtl;
    }
  }
}
.contain {
  margin-top: 120px !important;
}
.drop-area {
  width: 100%;
  height: 300px;
  border: 2px dashed rgb(102 255 204 / 46%);
  border-radius: 6px;
  text-align: center;
  transition: all 0.2s linear;
  &:hover {
    box-shadow: 0px 2px 6px rgba(4, 119, 81, 0.3);
  }
  .upload-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .upload-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      margin-bottom: 5px;
      background-color: rgb(102 255 204 / 46%);
      border-radius: 6px;
      svg {
        color: #19ad7b;
        font-size: 20px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}

.bodyAR {
  .contain {
    float: left !important;
    &.shrink {
      float: left !important;
    }
  }
}
h1,
h2,
h3,
h4,
h5 {
  font-weight: bold;
}

// dialog
.p-dialog {
  background-color: #fff !important;
  color: #333 !important;
}
.p-dialog-close-button {
  transition: all 0.2s linear !important;
  &:hover {
    color: #fff !important;
    background-color: #19ad7b !important;
  }
}
.dialog {
  padding: 30px;
  overflow-y: auto;
}
</style>
