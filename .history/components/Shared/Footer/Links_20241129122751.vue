<template>
  <div class="links" data-aos="fade-up">
    <h4 class="sub-title linear" :class="$i18n.locale === 'ar' ? 'ar' : ''">
      <span>
        {{ $i18n.locale === "ar" ? "المساعدة" : "Help" }}
      </span>
    </h4>
    <div class="d-flex align-items-start justify-content-start">
      <ul class="menu-list">
        <li v-for="menu in Menus?.items" :key="menu.id" class="menu-item">
          <div class="paste-button">
            <div>
              <nuxt-link class="button" :to="menu.pageUrl">
                {{ locale === "ar" ? menu.name : menu.englishName }}
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { locale } = useI18n();

let Menus = ref({
  items: [
    {
      id: 0,
      name: "سياسة الخصوصية",
      englishName: "Privacy Policy",
      pageUrl: "/PrivacyPolicy",
    },
    {
      id: 1,
      name: "شروط الخدمة",
      englishName: "Terms of Services",
      pageUrl: "/",
    },
    {
      id: 2,
      name: "المساعدة و الدعم",
      englishName: "Help And Service",
      pageUrl: "/Support",
    },
    {
      id: 2,
      name: "اتصل بنا",
      englishName: "Contact Us",
      pageUrl: "/Contact",
    },
  ],
});
</script>
<style lang="scss" scoped>
.menu-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.menu-item {
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  list-style: none; /* Remove bullet points */
  padding: 0.5rem; /* Optional: add padding for spacing */
  white-space: nowrap;
  text-wrap: nowrap;
}

.router-link-active.router-link-exact-active {
  color: $main !important;
}
.menu-list {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
}

.menu-item {
  flex: 0 0 50%; /* Each item takes up 50% of the container's width */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  list-style: none; /* Remove bullet points */
  padding: 0.5rem; /* Optional: add padding for spacing */
  white-space: nowrap;
  text-wrap: nowrap;
}
.links {
  width: 100%;
}
ul {
  padding: 0;
  a {
    &.router-link-active {
      li {
        font-size: 22px;
        color: $main;
        @media (max-width: 1300px) {
          font-size: 20px;
        }
      }
    }
  }

  li {
    font-size: 18px;
    line-height: 50px;
    transition: all 0.3s ease;
    cursor: pointer;
    a {
      color: #333;
      transition: all 0.3s ease;
    }

    &:hover {
      transform: translateX(10px);
      .paste-button a {
        color: $main;
      }
    }
  }
}
.sub-title {
  position: relative;
  margin-bottom: 30px;
  color: $second;
  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    right: auto;
    height: 4px;
    width: 100%;
    background-color: $second;
  }
  &.ar {
    &::after {
      content: "";
      position: absolute;
      bottom: -15px;
      right: 0;
      left: auto;
      height: 4px;
      width: 100%;
      background-color: $second;
    }
  }
}
</style>
