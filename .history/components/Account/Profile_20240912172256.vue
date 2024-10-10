<template>
  <section class="profile-section container" dir="auto">
    <div class="row w-100 mx-auto">
      <div class="col-12 py-5 mb-5">
        <NuxtLink
          v-if="AccountType == 'Person'"
          to="/Account/Edit"
          class="edit-profile"
        >
          <i class="fa fa-edit"></i>
          {{ $i18n.locale == "en" ? "Edit Profile" : "تعديل حسابي" }}
        </NuxtLink>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span class="">
            {{ $i18n.locale == "en" ? "Full Name :" : " الاسم الكامل :" }}</span
          >
          {{ $i18n.locale == "en" ? user?.fullNameEn : user?.fullNameAr }}
        </div>
        <div class="profile-info p-3" v-else>
          <span class="">
            {{
              $i18n.locale == "en"
                ? "Company Full Name :"
                : " اسم الشركة الكامل :"
            }}
          </span>
          {{ $i18n.locale == "en" ? user?.fullNameEn : user?.fullNameAr }}
        </div>
      </div>
      <!-- {{ AccountType }} -->
      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("email") }} :</span>
          {{ user?.email }}
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("phone") }} :</span>
          {{ user?.phone }}
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("address") }} :</span>
          {{ user?.address }}
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("fax") }} :</span>
          {{ user?.fax }}
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("mailBox") }} :</span>
          {{ user?.mailBox }}
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("birthDate") }} :</span>
          {{ user?.birthDate?.slice(0, 10) }}
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("City") }} :</span>
          {{ $i18n.locale === "ar" ? city?.nameAr : city?.nameEn }}
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4 mb-10">
        <div class="profile-info p-3" v-if="AccountType == 'Person'">
          <span>{{ $t("gender") }} :</span>
          {{ $t(user.sex) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const locale = useI18n();
const user = useUserInfo().value;
const AccountType = useAccountType().value;
const { data: allcities } = await useGetSiteApi().GetAll(`${api.cityIdApi}`);

let city = ref();
watchEffect(() => {
  if (process.client) {
    if (allcities.value) {
      allcities.value.data.map((cit) => {
        if (cit.id === user.princedomId) {
          city.value = cit;
        }
      });
    }
  }
});
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
