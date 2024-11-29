<template>
  <div class="links" data-aos="fade-up">
    <h4 class="sub-title linear" :class="$i18n.locale === 'ar' ? 'ar' : ''">
      <span>
        {{ $i18n.locale === "ar" ? "استكشف أكثر" : "Learn More" }}
      </span>
    </h4>
    <div class="d-flex align-items-start justify-content-start">
      <!-- social -->
      <div
        class="socials"
        data-aos="fade-up"
        data-aos-duration="1000"
        :class="$i18n.locale === 'ar' ? 'ar' : ''"
      >
        <a :href="Social[0]?.url" target="_blank" class="socials-img" style="">
          <font-awesome :icon="['fab', 'facebook']" />
        </a>

        <a :href="Social[1]?.url" target="_blank" class="socials-img" style="">
          <font-awesome :icon="['fab', 'instagram']" />
        </a>

        <a :href="Social[2]?.url" target="_blank" class="socials-img" style="">
          <font-awesome :icon="['fab', 'whatsapp']" />
          {{ Social[2].name }}
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { locale } = useI18n();

const { data: Social } = await useFetch(`${api.GetSoical}`, {
  baseURL: apiBase,
  credentials: "include",
  headers: {
    "accept-language": locale.value === "ar" ? "ar" : "en",
  },
});
</script>
<style lang="scss" scoped>
.socials {
  width: 100%;
  &.ar {
    .socials-img {
      margin-left: 20px !important;
      margin-right: 0px !important;
    }
  }
  .socials-img {
    font-size: 30px;
    margin: 30px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: $second;
    width: 100%;

    a {
      color: $second;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: $second;
      }
    }
    img {
      width: 100%;
    }
  }
}
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
