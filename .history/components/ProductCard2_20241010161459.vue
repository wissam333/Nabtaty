<template>
  <div class="leaf">
    <img src="/photos/leaf.png" alt="" />
  </div>
  <div class="leaf2">
    <img src="/photos/leaf.png" alt="" />
  </div>

  <div class="disscount" v-if="product?.data?.productOffer.discountRatio">
    {{ product?.data?.productOffer.discountRatio + "%" }}
  </div>
  <!-- <div class="hot">
        <img src="/photos/29-1.png" alt="" />
      </div> -->

  <nuxt-link
    :to="`/Product/${product?.id?.toString() ?? productId?.toString()}`"
    class="product-img"
  >
    <!-- <div v-if="product?.imageDataUrl" style="width: 100%; height: 100%">
        <img
          v-show="isLoaded"
          :src="apiBase + product?.imageDataUrl"
          @load="onImageLoad"
          alt=""
        />
      </div>
      <img v-else src="/logo.png" alt="" />
      <div v-show="!isLoaded">
        <Skeleton class="skeleton-loader"></Skeleton>
      </div> -->

    <ElementsImage
      :src="apiBase + product?.imageDataUrl"
      classes="image-rendered"
    ></ElementsImage>
  </nuxt-link>
  <div class="product-info">
    <div class="d-flex justify-content-between px-5 mt-4">
      <h5 class="title">
        {{ $i18n.locale === "ar" ? product.arabicName : product.englishName }}
      </h5>
      <div class="d-flex">
        <p class="price">
          <!-- v-if="product?.price" -->
          <span
            :class="product?.productOffer?.newPrice ? 'old-price' : ''"
            class="old-price mx-2"
          >
            {{ product?.price ?? "999" }}
            {{ $i18n.locale === "ar" ? "AED" : "AED" }}
          </span>
        </p>
        <p class="price">
          <!-- v-if="product?.productOffer?.newPrice" -->
          {{ product?.productOffer?.newPrice ?? "555" }}
          {{ $i18n.locale === "ar" ? "AED" : "AED" }}
        </p>
      </div>
    </div>

    <nuxt-link
      :to="`/Product/${product?.id?.toString() ?? productId?.toString()}`"
      class="btn btn-main"
    >
      <span>{{ $t("OrderNow") }}</span>
    </nuxt-link>
  </div>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const { product, productId } = defineProps(["product", "productId"]);
const GoTo = (id) => {
  return navigateTo(`products/${id}`);
};

const isLoaded = ref(false);

const onImageLoad = () => {
  isLoaded.value = true;
};
</script>
<style lang="scss" scoped>
.product {
  border-radius: 40px;
  width: 100%;
  &:hover {
    .product-img {
      .image-rendered {
        transform: scale(1.1);
      }
    }
  }

  .disscount {
    position: absolute;
    top: 40%;
    right: -25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ec9605, #ffc35f, #ec9605);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .hot {
    position: absolute;
    top: 75%;
    right: -25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .product-info {
    text-align: center;
    .title {
      text-align: start;
      color: $main;
      font-weight: bold;
      font-size: 20px;
      padding: 0px 10px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
    .price {
      font-weight: bold;
      color: $basic;
      font-size: 18px;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
    .old-price {
      color: #777;
      text-decoration-line: line-through;
      font-size: 15px;
      opacity: 0.8;
      @media (max-width: 768px) {
        font-size: 12px;
        width: 100%;
      }
    }
  }
  .product-img {
    position: relative;
    display: block;
    // border-radius: 50%;
    width: 100%;
    height: 400px;
    // border-radius: 40px;
    // border: 1px solid $second;
    overflow: hidden;
    @media (max-width: 768px) {
      height: 200px;
    }
    @media (max-width: 380px) {
      height: 150px;
    }
    .image-rendered {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
      object-fit: contain;
    }
  }
  .btn {
    border-radius: 8px;
    padding: 8px 15px;
    margin-top: 15px;
    font-weight: bold;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      padding: 2px 8px;
      margin-top: 0px;
      span {
        font-size: 12px !important;
        margin-bottom: 4px;
      }
    }
    // &::before {
    //   background-color: #dddfe1 !important;
    // }
  }
}
.leaf {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.leaf2 {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
}
.leaf3 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.leaf4 {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
}
@media (max-width: 768px) {
  .leaf,
  .leaf2 {
    img {
      width: 50px;
    }
  }
}

@media (max-width: 350px) {
  .px-5 {
    padding: 0px 10px !important;
  }
}
.skeleton-loader {
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
}
</style>
