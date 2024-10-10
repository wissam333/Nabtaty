<template>
  <section class="profile-section container" dir="auto">
    <div class="row w-100 mx-auto">
      <!-- <div class="col-12 mb-3">
          <NuxtLink v-if="AccountType == 'Person'" to="/my-account/edit" class="edit-profile">
            <i class="fa fa-edit"></i>
            {{$i18n.locale == 'en' ? 'Edit Profile' : 'تعديل حسابي'}}
          </NuxtLink>
        </div> -->
      <!-- <div class="text-black">
          {{ user }}
        </div> -->
      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span class="">
            {{ $i18n.locale == "en" ? "Full Name :" : " الاسم الكامل:" }}</span
          >
          {{ $i18n.locale == "en" ? user.fullNameEn : user.fullNameAr }}
        </div>
      </div>
      <!-- {{ AccountType }} -->
      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("email") }} :</span>
          {{ user.email }}
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("phone") }} :</span>
          {{ user.phone }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const user = useUserInfo().value;
const AccountType = useAccountType().value;
</script>

<style lang="scss" scoped>
div {
  color: #000;
}
.edit-profile {
  color: $main;
  font-size: 1.3rem;
  &:hover {
    color: $main;
  }
}
.black-light-shadow {
  box-shadow: 0px 0px 45px -7px rgba(51, 51, 51, 0.247);
}
.profile-info {
  span {
    color: $main;
  }
  border-bottom: 1px solid #af9458;
  // color: white;
}
</style>
