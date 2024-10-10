<template>
  <div class="language-picker" :class="locale === 'ar' ? 'ar-flex' : ''">
    <Select
      v-model="locale"
      :options="langs"
      optionLabel="name"
      optionValue="code"
      checkmark
      :highlightOnSelect="false"
      class="w-full md:w-56"
    />
    <div class="switch">
      <input
        @click="handle()"
        id="language-toggle"
        class="check-toggle check-toggle-round-flat"
        type="checkbox"
        :class="locale == 'ar' ? 'AR' : 'EN'"
      />
      <label for="language-toggle"></label>
      <span class="on">AR</span>
      <span class="off">EN</span>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();

let handle = () => {
  locale.value == "ar" ? setLocale("en") : setLocale("ar");
};

let langs = ref([
  { name: "Arabic", code: "en" },
  { name: "English", code: "en" },
]);
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  margin: 0 5px;
}

.switch > span {
  position: absolute;
  top: 10px;
  pointer-events: none;
  font-family: "Helvetica", Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  width: 50%;
  text-align: cENter;
}

input.check-toggle-round-flat.EN ~ .off {
  color: $main;
}

input.check-toggle-round-flat.EN ~ .on {
  color: #fff;
}

.switch > span.on {
  left: 0;
  padding-left: 2px;
  color: $main;
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: #fff;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hiddEN;
}

.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat + label {
  padding: 2px;
  width: 99px;
  height: 35px;
  background-color: $main;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}

input.check-toggle-round-flat + label:before,
input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: $main;
  border-radius: 60px;
}

input.check-toggle-round-flat + label:after {
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 48px;
  background-color: #fff;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}

input.check-toggle-round-flat.EN + label:after {
  margin-left: 44px;
}
</style>
