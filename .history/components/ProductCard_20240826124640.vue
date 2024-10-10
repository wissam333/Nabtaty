<template>
  <div class="disscount">30%</div>
  <div class="hot">
    <img src="/photos/29-1.png" alt="" />
  </div>

  <div class="product-img">
    <img
      v-if="product?.productImageUrl"
      :src="apiBase + product?.productImageUrl"
      alt=""
    />
    <img v-else src="/photos/1-1.png" alt="" />
  </div>
  <div class="product-info">
    <h5 class="title">
      {{ $i18n.locale === "ar" ? product.nameAr : product.nameEn }}
    </h5>

    <nuxt-link to="/" class="btn btn-main mt-5">
      <span>{{ $i18n.locale === "ar" ? "اطلب الآن" : "Order Now" }}</span>
    </nuxt-link>

    <p class="old-price">
      {{ product.price }}
      {{ $i18n.locale === "ar" ? "درهم اماراتي" : "AED" }}
    </p>
    <p class="price">
      {{ product.price }}
      {{ $i18n.locale === "ar" ? "درهم اماراتي" : "AED" }}
    </p>
  </div>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const { product } = defineProps(["product"]);
const GoTo = (id) => {
  return navigateTo(`product/${id}`);
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
      font-size: 20px;
      padding: 0px 10px;
      height: 52px;
      @media (max-width: 768px) {
        font-size: 14px;
        padding: 0px 5px;
        height: 30px;
      }
    }
    .price {
      position: absolute;
      bottom: 0;
      width: 250px;
      margin-bottom: 40px;
      font-weight: bold;
      color: $second;
    }
    .old-price {
      position: absolute;
      bottom: 0;
      width: 250px;
      margin-bottom: 70px;
      color: #777;
      text-decoration-line: line-through;
    }
  }
  .product-img {
    border-radius: 50%;
    width: 100%;
    height: 250px;
    overflow: hidden;
    @media (max-width: 768px) {
      height: 100px;
      border-radius: 0;
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
    &::before {
      background-color: #dddfe1 !important;
    }
  }
}
</style>
