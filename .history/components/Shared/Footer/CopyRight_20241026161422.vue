<template>
  <div class="c">
    <div>
      <ul class="links">
        <li>
          <nuxt-link to="">
            {{ $i18n.locale === "ar" ? "الرئيسية" : "Home" }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="">
            {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="">
            {{ $i18n.locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy" }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="">
            {{ $i18n.locale === "ar" ? "البوم الصور" : "Photo Album" }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.c {
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding-bottom: 1px;
  margin: 0px 0px 0px 0px;
  padding-top: 10px;
  background: linear-gradient(to left, $main, $second, $main);

  @media (max-width: 768px) {
    width: 100vw;
    margin: 60px 0px 0px 0px;
    font-size: 15px;
  }

  .name {
    color: #fff;
    font-weight: bold;
  }
}
.links {
  display: flex;
  justify-content: center;
  padding: 0;
  li {
    padding: 10px;
  }
}
</style>
