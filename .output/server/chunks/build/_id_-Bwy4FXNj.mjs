import { _ as __nuxt_component_0 } from './Spinner-BezqYXW-.mjs';
import { _ as __nuxt_component_1 } from './ProductCard2-DeAAMULl.mjs';
import { _ as _export_sfc, r as useRoute$1, u as useI18n, a as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { h as useMainToken } from './useState-DDQ6Qtd2.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BTB3BaHh.mjs';
import './icon-jIl0hTBH.mjs';
import '@fortawesome/fontawesome-svg-core';
import './nuxt-link-DVTfn8MM.mjs';
import './index-BmTln-ia.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/utils/uuid';
import './virtual_public-CPhNCZXW.mjs';
import './virtual_public-C4j98MNm.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    useI18n();
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { data: Products, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${api.Search}/${route.params.id.toString()}`,
      {
        baseURL: apiBase,
        credentials: "include",
        headers: {
          Authorization: `Bearer ${useMainToken().value}`
        }
      },
      "$z2SrOJWygA"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ElementsSpinner = __nuxt_component_0;
      const _component_ProductCard2 = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid nav-margin" }, _attrs))} data-v-1186f7c4><div class="title" data-v-1186f7c4><h1 class="d-flex align-items-center justify-content-center" data-v-1186f7c4><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-1186f7c4><span class="underline" data-v-1186f7c4>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B" : "Search Result")}</span></h1></div>`);
      if (unref(pending)) {
        _push(`<div class="d-flex justify-center align-items-center" style="${ssrRenderStyle({ "height": "500px" })}" data-v-1186f7c4>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-1186f7c4>`);
        if (unref(Products)) {
          _push(`<div data-v-1186f7c4>`);
          if (((_a = unref(Products)) == null ? void 0 : _a.length) > 0) {
            _push(`<div class="row" data-v-1186f7c4><div class="grid3" data-v-1186f7c4><!--[-->`);
            ssrRenderList(unref(Products), (product) => {
              _push(`<div class="product" data-aos="fade-up" data-v-1186f7c4><div data-v-1186f7c4>`);
              _push(ssrRenderComponent(_component_ProductCard2, { product }, null, _parent));
              _push(`</div></div>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<div class="d-flex justify-center align-items-center" style="${ssrRenderStyle({ "height": "400px" })}" data-v-1186f7c4><h1 class="color fw-bold" data-v-1186f7c4>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0646\u0639\u062A\u0630\u0631 \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A" : "Sorry No Items")}</h1></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Search/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1186f7c4"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Bwy4FXNj.mjs.map
