import { _ as __nuxt_component_2 } from './nuxt-link-DVTfn8MM.mjs';
import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as _export_sfc, u as useI18n, r as useRoute$1, a as useRuntimeConfig } from './server.mjs';
import { ref, withAsyncContext, watchEffect, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { u as useSidebar } from './useState-DDQ6Qtd2.mjs';
import { s as script$2 } from './index-B3lqQCyA.mjs';
import { s as script$1 } from './index-DHC3nPP1.mjs';
import { s as script } from './index-Dgly9DQV.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
import '@primeuix/utils/zindex';
import './index-BmTln-ia.mjs';
import '@primeuix/utils/uuid';
import './index-DvJXdbWX.mjs';
import './index-C7iL46Cz.mjs';
import './index-DvokLXLf.mjs';
import './index-nFQnausA.mjs';
import './index-ChTkkqYU.mjs';
import './index-DxK02X-z.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const route = useRoute$1();
    let descAr = ref();
    let descEn = ref();
    let titleAr = ref();
    let titleEn = ref();
    ref();
    let waterAr = ref();
    let waterEn = ref();
    let lightAr = ref();
    let lightEn = ref();
    let temperaturesAr = ref();
    let temperaturesEn = ref();
    let mediumAr = ref();
    let mediumEn = ref();
    let partAr = ref();
    let partEn = ref();
    let potEn = ref();
    let potAr = ref();
    ref([]);
    let newest = ref(false);
    let recommended = ref(false);
    const src = ref({
      photo: null,
      id: 0
    });
    const srcFile = ref(null);
    const onFileSelect = async (event) => {
      const file = event.files[0];
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
      new FormData();
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
      new FormData();
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
      src4File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src4.value.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    let selectedCat = ref();
    ref();
    const { data: cats, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(api.findAllCategories, {
      baseURL: apiBase,
      credentials: "include",
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en"
      },
      method: "GET"
    }, "$2604qXVpez")), __temp = await __temp, __restore(), __temp);
    watchEffect(async () => {
    });
    let selectedSubCat = ref();
    let Subcats = ref();
    ref();
    ref();
    [__temp, __restore] = withAsyncContext(() => useFetch(
      `${api.GetPlant}/${route.params.id}`,
      {
        credentials: "include",
        baseURL: apiBase,
        headers: {
          "accept-language": "ar"
        }
      },
      "$udxKBTmYCs"
    )), __temp = await __temp, __restore();
    watchEffect(() => {
    });
    [__temp, __restore] = withAsyncContext(() => useFetch(
      `${api.GetPlant}/${route.params.id}`,
      {
        credentials: "include",
        baseURL: apiBase,
        headers: {
          "accept-language": "en"
        }
      },
      "$NrJuLotEJq"
    )), __temp = await __temp, __restore();
    watchEffect(() => {
    });
    const Sizes = ref([
      {
        Price: null,
        name: "XL"
      },
      {
        Price: null,
        name: "L"
      },
      {
        Price: null,
        name: "M"
      },
      {
        Price: null,
        name: "SM"
      }
    ]);
    watchEffect(() => {
    });
    ref([]);
    const getSubCats = async () => {
      const { data, error: error2 } = await useFetch(api.GetSubCat, {
        baseURL: apiBase,
        credentials: "include",
        method: "GET",
        headers: {
          "accept-language": locale.value === "ar" ? "ar" : "en"
        }
      }, "$rkEyepKD8E");
      Subcats.value = data.value;
      Subcats.value = Subcats.value.filter(
        (e) => selectedCat.value.id == e.category_id
      );
    };
    ref(["XL", "L", "M", "SM"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_2;
      const _component_font_awesome = _sfc_main$1;
      const _component_FileUpload = script;
      const _component_Checkbox = script$1;
      const _component_Select = script$2;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: ["contain", ("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : ""]
      }, _attrs))} data-v-b39fd0f6><div class="title-container" data-v-b39fd0f6><div class="head-title" data-v-b39fd0f6><h4 class="header4" data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</h4><p data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0643\u0644 \u0627\u0644\u0646\u0628\u0627\u062A\u0627\u062A \u0645\u0648\u062C\u0648\u062F\u064A\u0646" : "All Plants are listed")} `);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/admin/ListProduct" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0646\u0627" : "here")}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0646\u0627" : "here"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><main data-v-b39fd0f6><div class="form row gy-3" data-v-b39fd0f6><div class="col-sm-12 col-lg-8" data-v-b39fd0f6><div class="main-info box block-border" data-v-b39fd0f6><h5 data-v-b39fd0f6> \u{1F331} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0646 \u0627\u0644\u0646\u0628\u0627\u062A " : "Plant Information ")}</h5><div class="d-flex flex-column" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><input${ssrRenderAttr("value", unref(titleAr))} id="titleAr" type="text" maxlength="30" autocomplete="off"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic"
      )} title="Enter only letters and spaces" data-v-b39fd0f6><label for="titleAr" data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="descAr" rows="5"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Description In Arabic"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(descAr))}</textarea><label for="descAr" data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Description In Arabic")}</label></div></div><div class="d-flex flex-column mt-5" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><input${ssrRenderAttr("value", unref(titleEn))} id="titleEn" type="text" maxlength="30" autocomplete="off"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English"
      )} title="Enter only letters and spaces" data-v-b39fd0f6><label for="titleEn" data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="descEn" rows="5"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Description In English"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(descEn))}</textarea><label for="descEn" data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Description In English")}</label></div></div><div class="d-flex flex-column mt-5" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="waterAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Water in Arabic"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(waterAr))}</textarea><label for="waterAr" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "droplet"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Water in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="waterEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Water in English"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(waterEn))}</textarea><label for="waterEn" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "droplet"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Water in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="temperaturesAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Temperatures in Arabic"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(temperaturesAr))}</textarea><label for="temperaturesAr" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "temperature-high"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Temperatures in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="temperaturesEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Temperatures in English"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(temperaturesEn))}</textarea><label for="temperaturesEn" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "temperature-high"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Temperatures in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="partAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Part Sun in Arabic"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(partAr))}</textarea><label for="partAr" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cloud-sun"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Part Sun in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="partEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Part Sun in English"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(partEn))}</textarea><label for="partEn" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cloud-sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Part Sun in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="mediumAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Ease of care in Arabic"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(mediumAr))}</textarea><label for="mediumAr" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "hands-holding"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Ease of care in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="mediumEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Ease of care in English"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(mediumEn))}</textarea><label for="mediumEn" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "hands-holding"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Ease of care in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="lightAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0636\u0648\u0621 \u0627\u0644\u0634\u0645\u0633 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Direct sunlight in Arabic"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(lightAr))}</textarea><label for="lightAr" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0636\u0648\u0621 \u0627\u0644\u0634\u0645\u0633 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Direct sunlight in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="lightEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0636\u0648\u0621 \u0627\u0644\u0634\u0645\u0633 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Direct sunlight in English"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(lightEn))}</textarea><label for="lightEn" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0636\u0648\u0621 \u0627\u0644\u0634\u0645\u0633 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Direct sunlight in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="potAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0635\u064A\u0635 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Pot in Arabic"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(potAr))}</textarea><label for="potAr" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "square"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0635\u064A\u0635 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Pot in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-b39fd0f6><div class="d-flex flex-column-reverse mb-3" data-v-b39fd0f6><textarea id="potEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0635\u064A\u0635 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Pot in English"
      )} data-v-b39fd0f6>${ssrInterpolate(unref(potEn))}</textarea><label for="potEn" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "square"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0635\u064A\u0635 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Pot in English")}</label></div></div></div></div><div class="col-sm-12 col-lg-4" data-v-b39fd0f6><div class="second-info box block-border d-flex flex-column justify-content-start" data-v-b39fd0f6><div data-v-b39fd0f6><h5 data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : "Main Image")}</h5>`);
      if (unref(src).id) {
        _push(`<div class="drop-area my-4" data-v-b39fd0f6><div class="upload-box" data-v-b39fd0f6>`);
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
        if (unref(src).photo) {
          _push(`<img${ssrRenderAttr("src", unref(src).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-b39fd0f6>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(src).photo) {
          _push(`<button class="btn btn-danger clear" data-v-b39fd0f6>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            class: "xmark",
            icon: ["fas", "xmark"]
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(src1).id || unref(src2).id || unref(src3).id || unref(src4).id) {
        _push(`<div data-v-b39fd0f6><h5 data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0635\u0648\u0631 \u0627\u0644\u0627\u0644\u0628\u0648\u0645" : "Album Images")}</h5>`);
        if (unref(src1).id) {
          _push(`<div class="drop-area my-4" data-v-b39fd0f6><div class="upload-box" data-v-b39fd0f6>`);
          _push(ssrRenderComponent(_component_FileUpload, {
            mode: "basic",
            onSelect: onFileSelect1,
            customUpload: "",
            maxFileSize: 1e6,
            accept: "image/*",
            auto: "",
            class: "form-control p-button-outlined"
          }, null, _parent));
          if (unref(src1).photo) {
            _push(`<img${ssrRenderAttr("src", unref(src1).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-b39fd0f6>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(src1).photo) {
            _push(`<button class="btn btn-danger clear" data-v-b39fd0f6>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "xmark",
              icon: ["fas", "xmark"]
            }, null, _parent));
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src2).id) {
        _push(`<div class="drop-area my-4" data-v-b39fd0f6><div class="upload-box" data-v-b39fd0f6>`);
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect2,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
        if (unref(src2).photo) {
          _push(`<img${ssrRenderAttr("src", unref(src2).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-b39fd0f6>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(src2).photo) {
          _push(`<button class="btn btn-danger clear" data-v-b39fd0f6>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            class: "xmark",
            icon: ["fas", "xmark"]
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src3).id) {
        _push(`<div class="drop-area my-4" data-v-b39fd0f6><div class="upload-box" data-v-b39fd0f6>`);
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect3,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
        if (unref(src3).photo) {
          _push(`<img${ssrRenderAttr("src", unref(src3).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-b39fd0f6>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(src3).photo) {
          _push(`<button class="btn btn-danger clear" data-v-b39fd0f6>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            class: "xmark",
            icon: ["fas", "xmark"]
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src4).id) {
        _push(`<div class="drop-area my-4" data-v-b39fd0f6><div class="upload-box" data-v-b39fd0f6>`);
        _push(ssrRenderComponent(_component_FileUpload, {
          mode: "basic",
          onSelect: onFileSelect4,
          customUpload: "",
          maxFileSize: 1e6,
          accept: "image/*",
          auto: "",
          class: "form-control p-button-outlined"
        }, null, _parent));
        if (unref(src4).photo) {
          _push(`<img${ssrRenderAttr("src", unref(src4).photo)} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-b39fd0f6>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(src4).photo) {
          _push(`<button class="btn btn-danger clear" data-v-b39fd0f6>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            class: "xmark",
            icon: ["fas", "xmark"]
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-sm-12 col-lg-8" data-v-b39fd0f6><div class="uplod-image box block-border" data-v-b39fd0f6><h5 data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A" : "Options")}</h5><div class="row" data-v-b39fd0f6><div class="col-lg-3 checkbox" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        modelValue: unref(newest),
        "onUpdate:modelValue": ($event) => isRef(newest) ? newest.value = $event : newest = $event,
        binary: ""
      }, null, _parent));
      _push(`<label for="ingredient1" class="mx-2 fw-bold" data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062C\u062F\u064A\u062F" : "New")}</label></div><div class="col-lg-3 checkbox" data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        modelValue: unref(recommended),
        "onUpdate:modelValue": ($event) => isRef(recommended) ? recommended.value = $event : recommended = $event,
        binary: ""
      }, null, _parent));
      _push(`<label for="ingredient1" class="mx-2 fw-bold" data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0642\u062A\u0631\u062D" : "Recommended")}</label></div><!--[-->`);
      ssrRenderList(unref(Sizes), (size) => {
        _push(`<div class="col-lg-12 d-flex align-items-center mt-5" data-v-b39fd0f6><span class="sizeBox" data-v-b39fd0f6>${ssrInterpolate(size.name)}</span><div class="d-flex flex-column-reverse mb-3 w-100" data-v-b39fd0f6><input${ssrRenderAttr("value", size.Price)} id="price" type="number" maxlength="6" min="0"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0633\u0639\u0631" : "Price")} data-v-b39fd0f6></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-12 col-lg-4" data-v-b39fd0f6><div class="category-price box block-border" data-v-b39fd0f6><div class="d-flex flex-column" data-v-b39fd0f6><h5 data-v-b39fd0f6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0641\u0626\u0627\u062A" : "Please Select Categories")}</h5><div data-v-b39fd0f6>`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(selectedCat),
        "onUpdate:modelValue": ($event) => isRef(selectedCat) ? selectedCat.value = $event : selectedCat = $event,
        options: unref(cats),
        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u062E\u062A\u0627\u0631 \u0641\u0626\u0629" : "Select A Category",
        onChange: getSubCats,
        class: "w-full md:w-56 select"
      }, {
        option: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "selectAr" : "", "d-flex align-items-center"])}" data-v-b39fd0f6${_scopeId}><div data-v-b39fd0f6${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? slotProps.option.category_name : slotProps.option.category_name)}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["d-flex align-items-center", _ctx.$i18n.locale === "ar" ? "selectAr" : ""]
              }, [
                createVNode("div", null, toDisplayString(_ctx.$i18n.locale === "ar" ? slotProps.option.category_name : slotProps.option.category_name), 1)
              ], 2)
            ];
          }
        }),
        value: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (slotProps.value) {
              _push2(`<div class="flex items-center" data-v-b39fd0f6${_scopeId}><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "selectAr" : "", "d-flex align-items-center"])}" data-v-b39fd0f6${_scopeId}><div data-v-b39fd0f6${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? slotProps.value.category_name : slotProps.value.category_name)}</div></div></div>`);
            } else {
              _push2(`<span data-v-b39fd0f6${_scopeId}>${ssrInterpolate(slotProps.placeholder)}</span>`);
            }
          } else {
            return [
              slotProps.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center"
              }, [
                createVNode("div", {
                  class: ["d-flex align-items-center", _ctx.$i18n.locale === "ar" ? "selectAr" : ""]
                }, [
                  createVNode("div", null, toDisplayString(_ctx.$i18n.locale === "ar" ? slotProps.value.category_name : slotProps.value.category_name), 1)
                ], 2)
              ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(selectedSubCat),
        "onUpdate:modelValue": ($event) => isRef(selectedSubCat) ? selectedSubCat.value = $event : selectedSubCat = $event,
        options: unref(Subcats),
        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u062E\u062A\u0627\u0631 \u0641\u0626\u0629 \u0641\u0631\u0639\u064A\u0629" : "Select A Sub Category",
        class: "w-full md:w-56 mx-2 select"
      }, {
        option: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "selectAr" : "", "d-flex align-items-center"])}" data-v-b39fd0f6${_scopeId}><div data-v-b39fd0f6${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? slotProps.option.subcategory_name : slotProps.option.subcategory_name)}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["d-flex align-items-center", _ctx.$i18n.locale === "ar" ? "selectAr" : ""]
              }, [
                createVNode("div", null, toDisplayString(_ctx.$i18n.locale === "ar" ? slotProps.option.subcategory_name : slotProps.option.subcategory_name), 1)
              ], 2)
            ];
          }
        }),
        value: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (slotProps.value) {
              _push2(`<div class="flex items-center" data-v-b39fd0f6${_scopeId}><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "selectAr" : "", "d-flex align-items-center"])}" data-v-b39fd0f6${_scopeId}><div data-v-b39fd0f6${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? slotProps.value.subcategory_name : slotProps.value.subcategory_name)}</div></div></div>`);
            } else {
              _push2(`<span data-v-b39fd0f6${_scopeId}>${ssrInterpolate(slotProps.placeholder)}</span>`);
            }
          } else {
            return [
              slotProps.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center"
              }, [
                createVNode("div", {
                  class: ["d-flex align-items-center", _ctx.$i18n.locale === "ar" ? "selectAr" : ""]
                }, [
                  createVNode("div", null, toDisplayString(_ctx.$i18n.locale === "ar" ? slotProps.value.subcategory_name : slotProps.value.subcategory_name), 1)
                ], 2)
              ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-10 d-flex justify-content-end" data-v-b39fd0f6><input type="submit"${ssrRenderAttr(
        "value",
        _ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0646\u0628\u0627\u062A" : " Edit Plant"
      )} class="btn btn-success text-white" data-v-b39fd0f6></div></div></div></div></div></div></main></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/EditProduct/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b39fd0f6"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DoHKGS5c.mjs.map
