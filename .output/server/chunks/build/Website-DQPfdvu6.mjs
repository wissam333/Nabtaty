import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-B50kbo-r.mjs';
import { _ as _export_sfc, u as useI18n, g as _imports_0, a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { ref, withAsyncContext, watchEffect, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { u as useSidebar } from './useState-DDQ6Qtd2.mjs';
import { s as script$2 } from './index-C8_752XK.mjs';
import { s as script$1 } from './index-DxwsuaU6.mjs';
import { s as script } from './index-Dgly9DQV.mjs';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import '@fortawesome/fontawesome-svg-core';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/object';
import '@primeuix/utils/dom';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import './index-BmTln-ia.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import './index-ChTkkqYU.mjs';
import './index-DvJXdbWX.mjs';
import './index-DxK02X-z.mjs';
import './index-nFQnausA.mjs';
import './index-DAHeqTll.mjs';
import './index-C7iL46Cz.mjs';

const _sfc_main = {
  __name: "Website",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    const src = ref({
      photo: null,
      id: 0
    });
    const srcFile = ref(null);
    const onFileSelect = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.CreatHomePhoto, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$E27ggs5VwR");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      srcFile.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src1File = ref(null);
    const src1 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect1 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.CreatHomePhoto, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$wOKH9ctkDp");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src1File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src1.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src2File = ref(null);
    const src2 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect2 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.CreatHomePhoto, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$oZhlwZDNRT");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src2File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src2.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src3File = ref(null);
    const src3 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect3 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.CreatHomePhoto, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$JkD2uKqoLV");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src3File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src3.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src4File = ref(null);
    const src4 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect4 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.AddAlbumPhoto, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$gb4oe0jbGa");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src4File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src4.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src5File = ref(null);
    const src5 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect5 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.AddAlbumPhoto, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$BhZf6RJiU7");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src5File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src5.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src6File = ref(null);
    const src6 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect6 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.AddAlbumPhoto, {
        baseURL: apiBase,
        method: "POST",
        body: formData,
        credentials: "include"
      }, "$JB1r0hST2B");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src6File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src6.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src7File = ref(null);
    const src7 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect7 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.AddAlbumPhoto, {
        baseURL: apiBase,
        method: "POST",
        body: formData,
        credentials: "include"
      }, "$197Vaf0Y2Z");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src7File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src7.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src8File = ref(null);
    const src8 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect8 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.AddAlbumPhoto, {
        baseURL: apiBase,
        method: "POST",
        credentials: "include",
        body: formData
      }, "$c3BaVaDjaW");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src8File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src8.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src9File = ref(null);
    const src9 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect9 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.AddAlbumPhoto, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$S26zVXuDb7");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src9File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src9.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src10File = ref(null);
    const src10 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect10 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.AddAlbumPhoto, {
        baseURL: apiBase,
        method: "POST",
        credentials: "include",
        body: formData
      }, "$vQghh274UU");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src10File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src10.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const src11File = ref(null);
    const src11 = ref({
      photo: null,
      id: 0
    });
    const onFileSelect11 = async (event) => {
      const file = event.files[0];
      const formData = new FormData();
      formData.append("photoPath", file);
      await useFetch(api.AddAlbumPhoto, {
        baseURL: apiBase,
        method: "POST",
        body: formData,
        credentials: "include"
      }, "$ZduXPGheqm");
      locale.value === "en" ? $awn.success("Photo Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
      src11File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src11.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    [__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetHomePhotos}`, {
      baseURL: apiBase,
      credentials: "include",
      method: "GET"
    }, "$zseQwXgKwR")), __temp = await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetAllAlbumPhotos}`, {
      baseURL: apiBase,
      credentials: "include",
      method: "GET"
    }, "$KkmljCS4rz")), __temp = await __temp, __restore();
    watchEffect(() => {
    });
    watchEffect(() => {
    });
    let visible = ref(false);
    let customer_name_AR = ref();
    let customer_name_EN = ref();
    let message_AR = ref();
    let message_EN = ref();
    let rate = ref(5);
    let loading = ref(false);
    let reviews = ref();
    const getreviews = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetReviews}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$4XugPMFdK5"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetReviews}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$tVFFlpzJhM"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getreviews();
    const addCat = async () => {
      await useFetch(api.AddReview, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: {
          customer_name_AR: customer_name_AR.value,
          customer_name_EN: customer_name_EN.value,
          message_AR: message_AR.value,
          message_EN: message_EN.value,
          rate: rate.value
        }
      }, "$X2AHkqViDq");
      visible.value = false;
      customer_name_AR.value = "";
      customer_name_EN.value = "";
      message_AR.value = "";
      message_EN.value = "";
      rate.value = 5;
      getreviews();
      locale.value === "en" ? $awn.success("Review Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let deleteReview = ref();
    const DeleteReview = async () => {
      await useFetch(
        `${api.DeleteReview}/${deleteReview.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$nUwO9zN6re"
      );
      getreviews();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Review Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FileUpload = script;
      const _component_font_awesome = _sfc_main$1;
      const _component_Rating = script$1;
      const _component_Dialog = script$2;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-e86f1da3><div class="title-container" data-v-e86f1da3><div class="head-title" data-v-e86f1da3><h4 class="header4 mb-10" data-v-e86f1da3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639" : "Website Management")}</h4><div class="box block-border main-info" data-v-e86f1da3><h5 class="header4 mb-10" data-v-e86f1da3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : "Home Photos")}</h5><div class="row second-info d-flex justify-content-between" data-v-e86f1da3><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src1).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect1,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src1).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src1).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src1).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src2).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect2,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src2).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src2).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src2).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src3).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect3,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src3).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src3).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src3).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div><div class="box block-border main-info mt-5" data-v-e86f1da3><div class="title-container d-flex justify-content-between" data-v-e86f1da3><div class="head-title" data-v-e86f1da3><h4 class="header4" data-v-e86f1da3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0627\u062A" : "Review")}</h4></div><div class="options" data-v-e86f1da3><div class="reload btn btn-success mx-2" data-v-e86f1da3>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "plus"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629" : "Add")}</div><div class="reload btn btn-success" data-v-e86f1da3>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-e86f1da3>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-e86f1da3><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-e86f1da3></div>`);
      } else {
        _push(`<div class="cat-tabel" data-v-e86f1da3><table data-v-e86f1da3><thead data-v-e86f1da3><tr data-v-e86f1da3><th data-v-e86f1da3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-e86f1da3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629" : "Message")}</th><th data-v-e86f1da3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0642\u064A\u064A\u0645" : "Rate")}</th><th data-v-e86f1da3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-e86f1da3><!--[-->`);
        ssrRenderList(unref(reviews), (cat) => {
          _push(`<tr class="rows" data-v-e86f1da3><td data-v-e86f1da3><h5 data-v-e86f1da3>${ssrInterpolate(cat.customer_name)}</h5></td><td data-v-e86f1da3><p data-v-e86f1da3>${ssrInterpolate(cat.message)}</p></td><td data-v-e86f1da3>`);
          _push(ssrRenderComponent(_component_Rating, {
            modelValue: cat.rate,
            "onUpdate:modelValue": ($event) => cat.rate = $event,
            readonly: ""
          }, null, _parent));
          _push(`</td><td data-v-e86f1da3><span class="delete" data-v-e86f1da3>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div></div><div class="box block-border main-info mt-5" data-v-e86f1da3><div class="title-container d-flex justify-content-between" data-v-e86f1da3><div class="head-title" data-v-e86f1da3><h4 class="header4" data-v-e86f1da3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0648\u0645 \u0627\u0644\u0635\u0648\u0631" : "Photos Album")}</h4></div></div><div class="row second-info d-flex justify-content-between" data-v-e86f1da3><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src4).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect4,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src4).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src4).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src4).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src5).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect5,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src5).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src5).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src5).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src6).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect6,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src6).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src6).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src6).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src7).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect7,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src7).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src7).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src7).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src8).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect8,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src8).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src8).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src8).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src9).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect9,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src9).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src9).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src9).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src10).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect10,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src10).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src10).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src10).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-3" data-v-e86f1da3><div class="drop-area my-4 col-lg-3" data-v-e86f1da3><div class="upload-box" data-v-e86f1da3>`);
      if (!unref(src11).photo) {
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect11,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(src11).photo) {
        _push(`<img${ssrRenderAttr("src", unref(src11).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e86f1da3>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src11).photo) {
        _push(`<button class="btn btn-danger clear" data-v-e86f1da3>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : visible = $event,
        modal: "",
        style: { width: "25rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-e86f1da3${_scopeId}><h5 data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0627\u062C\u0639\u0629 \u062C\u062F\u064A\u062F\u0629" : "Add New Review")}</h5><div class="content" data-v-e86f1da3${_scopeId}><div class="d-flex flex-column mt-5" data-v-e86f1da3${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-e86f1da3${_scopeId}><input${ssrRenderAttr("value", unref(customer_name_AR))} id="customer_name_AR" type="text" required maxlength="30" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Customer Name In Arabic"
            )} pattern="[A-Za-z\\s]+" title="Enter only letters and spaces" data-v-e86f1da3${_scopeId}><label for="customer_name_AR" data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Customer Name In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-e86f1da3${_scopeId}><input${ssrRenderAttr("value", unref(customer_name_EN))} id="customer_name_EN" type="text" required maxlength="30" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Customer Name In English"
            )} pattern="[A-Za-z\\s]+" title="Enter only letters and spaces" data-v-e86f1da3${_scopeId}><label for="customer_name_EN" data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Customer Name In English")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-e86f1da3${_scopeId}><textarea id="message_AR" rows="5" required minlength="30"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Message In Arabic"
            )} data-v-e86f1da3${_scopeId}>${ssrInterpolate(unref(message_AR))}</textarea><label for="message_AR" data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Message In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-e86f1da3${_scopeId}><textarea id="message_EN" rows="5" required minlength="30"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Message In English"
            )} data-v-e86f1da3${_scopeId}>${ssrInterpolate(unref(message_EN))}</textarea><label for="message_AR" data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Message In English")}</label></div><div class="d-flex mt-5 mb-3" data-v-e86f1da3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Rating, {
              modelValue: unref(rate),
              "onUpdate:modelValue": ($event) => isRef(rate) ? rate.value = $event : rate = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-e86f1da3${_scopeId}><button class="btn btn-secondary" data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$t("Add"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("h5", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0627\u062C\u0639\u0629 \u062C\u062F\u064A\u062F\u0629" : "Add New Review"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", { class: "d-flex flex-column mt-5" }, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(customer_name_AR) ? customer_name_AR.value = $event : customer_name_AR = $event,
                        id: "customer_name_AR",
                        type: "text",
                        required: "",
                        maxlength: "30",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Customer Name In Arabic",
                        pattern: "[A-Za-z\\s]+",
                        title: "Enter only letters and spaces"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(customer_name_AR)]
                      ]),
                      createVNode("label", { for: "customer_name_AR" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Customer Name In Arabic"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(customer_name_EN) ? customer_name_EN.value = $event : customer_name_EN = $event,
                        id: "customer_name_EN",
                        type: "text",
                        required: "",
                        maxlength: "30",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Customer Name In English",
                        pattern: "[A-Za-z\\s]+",
                        title: "Enter only letters and spaces"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(customer_name_EN)]
                      ]),
                      createVNode("label", { for: "customer_name_EN" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Customer Name In English"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => isRef(message_AR) ? message_AR.value = $event : message_AR = $event,
                        id: "message_AR",
                        rows: "5",
                        required: "",
                        minlength: "30",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Message In Arabic"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(message_AR)]
                      ]),
                      createVNode("label", { for: "message_AR" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Message In Arabic"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => isRef(message_EN) ? message_EN.value = $event : message_EN = $event,
                        id: "message_EN",
                        rows: "5",
                        required: "",
                        minlength: "30",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Message In English"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(message_EN)]
                      ]),
                      createVNode("label", { for: "message_AR" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Message In English"), 1)
                    ]),
                    createVNode("div", { class: "d-flex mt-5 mb-3" }, [
                      createVNode(_component_Rating, {
                        modelValue: unref(rate),
                        "onUpdate:modelValue": ($event) => isRef(rate) ? rate.value = $event : rate = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-5 d-flex w-100 justify-content-end" }, [
                  createVNode("button", {
                    class: "btn btn-secondary",
                    onClick: closeCallback
                  }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-success mx-2",
                    onClick: ($event) => addCat(),
                    autofocus: ""
                  }, toDisplayString(_ctx.$t("Add")), 9, ["onClick"])
                ])
              ], 8, ["dir"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElementsAppModal, {
        isOpen: unref(deleteModal),
        onUpdateIsOpen: updateDeleteModal
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} &quot;${ssrInterpolate(_ctx.$i18n.locale === "ar" ? unref(deleteReview).customer_name : unref(deleteReview).customer_name)}&quot;${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + ' "' + toDisplayString(_ctx.$i18n.locale === "ar" ? unref(deleteReview).customer_name : unref(deleteReview).customer_name) + '"' + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-e86f1da3${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "btn btn-secondary",
                onClick: ($event) => isRef(deleteModal) ? deleteModal.value = false : deleteModal = false
              }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
              createVNode("button", {
                class: "btn btn-danger",
                onClick: ($event) => DeleteReview()
              }, toDisplayString(_ctx.$t("Delete")), 9, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/Website.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Website = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e86f1da3"]]);

export { Website as default };
//# sourceMappingURL=Website-DQPfdvu6.mjs.map
