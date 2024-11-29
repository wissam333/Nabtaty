<template>
  <div class="bottom">
    <div class="overlay"></div>
    <div class="overlay"></div>
    <div class="foot cont" :class="$i18n.locale === 'ar' ? 'ar' : ''">
      <SharedFooterLogo></SharedFooterLogo>
      <!-- <div></div> -->
      <!-- <SharedFooterForm></SharedFooterForm> -->
      <SharedFooterLinks></SharedFooterLinks>
      <SharedFooterLinks2></SharedFooterLinks2>
      <!-- <SharedFooterContactInfo></SharedFooterContactInfo> -->
    </div>
    <SharedFooterCopyRight></SharedFooterCopyRight>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bottom {
  position: relative;
  background-color: rgb(255 255 255 / 90%);
  background-image: url("/photos/footer.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-attachment: fixed;
  border-top: 4px solid $second;
  @media (max-width: 1250px) {
    margin-bottom: 68px;
  }

  .foot {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    align-items: start;
    justify-items: center;
    color: $main;
    position: relative;
    padding: 30px;
    column-gap: 40px;
    z-index: 10;
    &.ar {
      @media (max-width: 550px) {
        justify-items: end;
      }
    }
    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-items: start;
      padding: 30px 0px;
    }

    // &::after {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   bottom: -30px;
    //   right: 0;
    //   border-bottom: 2px solid $main;
    // }
  }
}
</style>
