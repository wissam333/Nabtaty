<template>
  <div class="line"></div>
  <div class="line2"></div>

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
    <img
      @load="loaded = true"
      v-if="product?.imageDataUrl && loaded"
      :src="apiBase + product?.imageDataUrl"
      alt=""
    />
    <div v-if="!loaded">
      <Skeleton class="loading"></Skeleton>
    </div>
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
  return navigateTo(`product/${id}`);
};
let loaded = ref(false);
</script>
<style lang="scss" scoped>
.product {
  border-radius: 40px;
  &:hover {
    .product-img {
      img {
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
      color: $second;
      font-size: 18px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
    .old-price {
      color: #777;
      text-decoration-line: line-through;
      font-size: 15px;
      opacity: 0.8;
      @media (max-width: 768px) {
        font-size: 14px;
        width: 100%;
      }
    }
  }
  .product-img {
    display: block;
    // border-radius: 50%;
    width: 100%;
    height: 400px;
    // border-radius: 40px;
    // border: 1px solid $second;
    overflow: hidden;
    @media (max-width: 768px) {
      height: 300px;
      // border-radius: 0;
    }
    @media (max-width: 380px) {
      height: 300px;
    }
    img {
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
.line {
  position: absolute;
  height: 15px;
  background: linear-gradient(
    to left,
    #ffce63,
    #e4b654,
    #ffce63,
    #e4b654,
    #ffce63
  );
  width: 100px;
  top: 20px;
  left: -20px;
  transform: rotate(-45deg);
  z-index: 50;
}
.line2 {
  position: absolute;
  height: 15px;
  background: linear-gradient(
    to left,
    #ffce63,
    #e4b654,
    #ffce63,
    #e4b654,
    #ffce63
  );
  width: 165px;
  top: 40px;
  left: -40px;
  transform: rotate(-45deg);
  z-index: 50;
  @media (max-width: 991px) {
    display: none;
  }
}
.loading {
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
}
</style>
