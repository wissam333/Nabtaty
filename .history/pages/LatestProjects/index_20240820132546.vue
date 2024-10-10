<template>
  <div class="cursor"></div>
  <div class="projects nav-margin">
    <h1 class="fw-bold title d-flex justify-content-center align-items-end">
      <!-- <img width="80" src="/photos/icons/Asset 1.png" alt="" /> -->
      {{
        $i18n.locale === "ar"
          ? "ألبوم صور مشاريع الفنادق"
          : "Hotels Projects Photo Album"
      }}
    </h1>
    <div class="d-flex justify-content-center mb-5">
      <!-- <img class="logo" src="/photos/icons/Asset 4.png" /> -->
    </div>
    <div class="">
      <div class="project" v-for="project in Projects?.items">
        <div
          class="project-img"
          :style="{ backgroundImage: `url(${apiBase}/${project?.image1})` }"
        >
          <div class="overlay"></div>
          <!-- <img :src="`${apiBase}/${project?.image1}`" alt="" /> -->
          <nuxt-link
            :to="`/ProjectPhotoAlbum/${project?.id?.toString()}`"
            class="project-info hover-this"
            data-aos-duration="1000"
            data-aos="zoom-out"
          >
            <span>
              {{ $i18n.locale === "ar" ? project?.name : project?.englishName }}
            </span>
          </nuxt-link>
          <nuxt-link
            data-aos-duration="1000"
            data-aos="zoom-out"
            class="cssbuttons-io-button"
            :to="`/ProjectPhotoAlbum/${project?.id?.toString()}`"
          >
            {{ $i18n.locale === "ar" ? "أكتشف" : "Discover" }}
            <div class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();

const { data: Projects, pending } = await useGetSiteApi().GetAll(
  `${api.Blocks}?categoryId=2`,
  [
    "id",
    "englishName",
    "name",
    "image1",
    "image2",
    "image3",
    "image4",
    "description1",
    "englishDescription1",
    "description2",
    "englishDescription2",
    "description3",
    "englishDescription3",
    "description4",
    "englishDescription4",
    "blockPhotos",
  ]
);

const effect = () => {
  const link = document.querySelectorAll(".hover-this");
  const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const span = this.querySelector("span");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  const cursorScaleUp = () => {
    cursor.style.transform = `translate(-50%, -50%) scale(8)`; // Adjust the scale value as needed
  };

  const cursorScaleDown = () => {
    cursor.style.transform = `translate(-50%, -50%) scale(1)`; // Reset to original size
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));

  link.forEach((b) => {
    b.addEventListener("mouseenter", cursorScaleUp); // Scale up on hover
    b.addEventListener("mouseleave", cursorScaleDown); // Scale down on hover out
  });

  window.addEventListener("mousemove", editCursor);
};

onMounted(() => {
  watchEffect(() => {
    if (pending.value) {
      return 0;
    } else {
      effect();
    }
  });
});
</script>
<style lang="scss" scoped>
.projects {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  .title {
    color: $basic;
    font-weight: bold;
    padding: 40px;
    font-size: 35px;
    font-family: Herova, "Arial", "sans-serif";
    letter-spacing: 2px;
  }
  .project {
    position: relative;
    .project-img {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      width: 100%;
      object-fit: cover;
      height: 80vh;
      @media (max-width: 768px) {
        height: 80vh;
      }
    }
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #00000089;
    }
    .project-info {
      position: absolute;
      top: 40%;
      display: flex;
      justify-content: center;
      width: 100%;
      color: #fff;
      font-size: 40px;
      padding: 30px;
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: 25px;
      }
    }

    .cssbuttons-io-button {
      position: absolute;
      transform: translate(-50%, -50%) !important;
      left: 50%;
      bottom: 10%;
      background: transparent;
      color: white;
      padding: 0.35em;
      padding-left: 1.2em;
      font-size: 17px;
      font-weight: 500;
      border-radius: 0.9em;
      border: 2px solid $main;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      // box-shadow: inset 0 0 1.6em -0.6em #714da6;
      overflow: hidden;
      height: 2.8em;
      padding-right: 3.3em;
      cursor: pointer;
    }

    .cssbuttons-io-button .icon {
      background: white;
      margin-left: 1em;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.2em;
      width: 2.2em;
      border-radius: 0.7em;
      box-shadow: 0em 0em 5px 5px $main;
      right: 0.3em;
      transition: all 0.3s;
    }

    .cssbuttons-io-button:hover .icon {
      width: calc(100% - 0.6em);
    }

    .cssbuttons-io-button .icon svg {
      width: 1.1em;
      transition: transform 0.3s;
      color: $basic;
    }

    .cssbuttons-io-button:hover .icon svg {
      transform: translateX(0.1em);
    }

    .cssbuttons-io-button:active .icon {
      transform: scale(0.95);
    }
  }
}

// effect

.nav-wrapper {
  width: 100%;
  height: 100vh;
  background: #161616;
}

nav {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 50%;
}

.hover-this {
  transition: all 0.3s ease;
}

span {
  display: inline-block;
  font-weight: bold;
  color: #fff;
  font-size: 36px;
  text-transform: uppercase;
  pointer-event: none;
  transition: transform 0.1s linear;
}

.cursor {
  pointer-events: none;
  position: fixed;
  padding: 0.3rem;
  background-color: #fff;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: transform 0.3s ease;
  z-index: 444;
}

.hover-this:hover ~ .cursor {
  transform: translate(-50%, -50%) scale(8);
}

@media (min-width: 900px) {
  nav {
    display: flex;
    justify-content: space-around;
  }
}

@media (max-width: 900px) {
  nav {
    top: 30%;
  }

  .hover-this {
    width: 100%;
    padding: 20px 0;
    display: inline-block;
  }
}
</style>
