<template>
  <div class="disscount" v-if="product?.data?.productOffer.discountRatio">
    {{ product?.data?.productOffer.discountRatio + "%" }}
  </div>
  <!-- <div class="hot">
        <img src="/photos/29-1.png" alt="" />
      </div> -->

  <div class="product-img">
    <img v-if="product?.photos" :src="apiBase + '/' + product?.photos" alt="" />
    <img v-else src="/photos/gifts.png" alt="" />
  </div>
  <div class="product-info">
    <h5 class="title">
      {{ $i18n.locale === "ar" ? product.plant_name : product.plant_name }}
    </h5>

    <nuxt-link
      :to="`/Product/${product?.id?.toString() ?? productId?.toString()}`"
      class="btn btn-main"
    >
      <span>{{ $i18n.locale === "ar" ? "اطلب الآن" : "Order Now" }}</span>
    </nuxt-link>

    <p class="price">
      <span :class="product?.productOffer?.newPrice ? 'old-price' : ''">
        {{ product?.price }}
        {{ $i18n.locale === "ar" ? "AED" : "AED" }}
      </span>
    </p>
    <p class="price" v-if="product?.productOffer?.newPrice">
      {{ product?.productOffer?.newPrice }}
      {{ $i18n.locale === "ar" ? "AED" : "AED" }}
    </p>
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
</script>
<style lang="scss" scoped>
.product {
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
      margin-top: 20px;
      font-size: 18px;
      padding: 0px 10px;
      height: 52px;
      @media (max-width: 768px) {
        font-size: 14px;
        padding: 0px 5px;
        height: 30px;
        margin-top: 10px;
      }
    }
    .price {
      position: absolute;
      bottom: 0;
      width: 270px;
      margin-bottom: 40px;
      font-weight: bold;
      span {
        background: #003d2e;
        color: #fff;
        padding: 10px;
        border-radius: 100px;
      }
      @media (max-width: 768px) {
        font-size: 14px;
        width: 100%;
      }
    }
    .old-price {
      left: 0;
      position: absolute;
      bottom: 0;
      width: 270px;
      margin-bottom: 30px !important;
      color: #777;
      text-decoration-line: line-through;
      font-size: small;
      @media (max-width: 768px) {
        font-size: 14px;
        width: 100%;
      }
    }
  }
  .product-img {
    // border-radius: 50%;
    width: 100%;
    overflow: hidden;
    @media (max-width: 768px) {
      height: 150px;
      //   border-radius: 0;
    }
    img {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
      object-fit: cover;
    }
  }
  .btn {
    border-radius: 8px;
    padding: 8px 15px;
    margin-top: 15px;
    font-weight: bold;
    @media (max-width: 768px) {
      padding: 2px 8px;
      margin-top: 5px;
      span {
        font-size: 12px !important;
        margin-bottom: 4px;
      }
    }
    &::before {
      //   background-color: #dddfe1 !important;
    }
  }
}
</style>
