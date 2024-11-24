<template>
  <div class="c">
    <div>
      <ul class="links">
        <li>
          <nuxt-link to="/">
            {{ $i18n.locale === "ar" ? "الرئيسية" : "Home" }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/About">
            {{ $i18n.locale === "ar" ? "من نحن" : "About Us" }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/PrivacyPolicy">
            {{ $i18n.locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy" }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Photos">
            {{ $i18n.locale === "ar" ? "البوم الصور" : "Photo Album" }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="c banner">
    <p>
      &copy;
      <span class="name">
        {{ $t("Baddar Furniture") }}
      </span>
      {{ new Date().getFullYear() }}.
      {{
        $i18n.locale === "ar" ? " كل الحقوق محفوظة." : "All Rights Reserved."
      }}
    </p>
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
  @media (max-width: 600px) {
    flex-direction: column;
  }
  li {
    padding: 10px 20px;
    cursor: pointer;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.banner {
  background: linear-gradient(to left, #be56c6, #db8fe0, #be56c6);
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
