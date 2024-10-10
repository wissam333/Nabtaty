<template>
  <div class="mb-5 position-relative">    
    <VField :name="name" v-slot="{ field, meta }">
      <label class=" w-100 text-start" :for="id" :style="`color: #${color}`" :class="`form-label mb-3   ${$i18n.locale == 'ar' ? 'rtl' : '' }`" v-if="label">
      {{ label }} 
     <span v-if="astricts == 'true' ?? false" class="astricts">*</span>
     <span v-if="astricts == 'false' ?? false" class="astricts"></span>
    </label>
      <input
        v-bind="field"
        class="form-control"
        :style="`border:1px solid #${color};color: #${color};height: ${height};padding`"
        :id="id"
        :class="{
          'rtl': $i18n.locale != 'en',
          'is-valid': meta.valid && meta.touched,
          'is-invalid': !meta.valid && meta.touched,
        }"
        :placeholder="placeholder"
        :type="type"
        :autocomplete="autocomplete"
      />
      <span :class="`show-hide-password ${$i18n.locale == 'ar' ? 'rtl' : '' }`" v-if="activePasswordEye">
        <i class="fa fa-eye fa-fw" id="show_password" @click="showPassword"></i>
        <i class="fa fa-eye-slash d-none fa-fw" id="hide_password" @click="hidePassword"></i>
      </span>

      <VErrorMessage :name="name" as="div" class="help w-100 text-start is-invalid" />
    </VField>
    
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: "text",
    required: true,
  },
  label: {
    type: String
  },
  placeholder: {
    type: String,
    default: "",
  },
  autocomplete: {
    type: String,
    default: `true`,
  },
  activePasswordEye: {
    type: Boolean,
    default: false
  },
  astricts: {
    type: String,
    default: `false`
  },
  border_color: {
    type: String,
    default: `fff`
  },
  color: {
    type: String,
    default: `fff`
  },
  height: {
    type: String,
    default: `54px`
  },
  
});
// console.log(value);



const showPassword = (event) => {
  
  event.target.parentNode.parentNode.children[1].setAttribute('type', 'text')
  event.target.parentNode.parentNode.children[2].children[0].classList.add('d-none')
  event.target.parentNode.parentNode.children[2].children[1].classList.remove('d-none')
  
}

const hidePassword = (event) => {
  event.target.parentNode.parentNode.children[1].setAttribute('type', 'password')
  event.target.parentNode.parentNode.children[2].children[0].classList.remove('d-none')
  event.target.parentNode.parentNode.children[2].children[1].classList.add('d-none')
}

</script>

<style lang="scss" scoped>
  input { 
   
    &.rtl { direction: rtl; }
   }
   .form-floating > label { 
      &.rtl { right: 0; left: unset; }
   }
    
    .form-control {
      height: 54px;
      border: none;
     
      border-radius: 0px;
      outline: none;
      box-shadow: none; 
      background-color: transparent;
    }
    .help.is-invalid { letter-spacing: .03rem; }
  .form-control:focus,
  .form-control.is-invalid:focus, 
  .was-validated .form-control:invalid:focus {
    box-shadow: none;
  }

  .just-bottom-border {
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  .form-control::placeholder {
    color: $main !important;
  }

  .help {
    margin-top: 10px;
    &.is-invalid {
      color: #dc3545;
    }
  }
  #confirmPassword.form-control.is-valid, 
  .was-validated #confirmPassword.form-control:valid,
  #password.form-control.is-valid, 
  .was-validated #password.form-control:valid,
  #confirmPassword.form-control.is-invalid, 
  .was-validated #confirmPassword.form-control:invalid,
  #password.form-control.is-invalid, 
  .was-validated #password.form-control:invalid {
    background-image: none;
  }
  .form-control.rtl.is-valid, 
  .was-validated .rtl.form-control:valid,
  .form-control.rtl.is-invalid, 
  .was-validated .rtl.form-control:invalid {
    background-position: left calc(.375em + .1875rem) center;
  }
  .show-hide-password {
    color: $main;
    position: absolute;
    top: 50px;
    right: 20px;
    i:hover { color: #c81f24; cursor: pointer;transition: .5s; }
    &.rtl { right: unset; left: 20px; }
  }

  .astricts {
    color: #c81f24;
    font-size: 12px;
  }

</style>