import { _ as __nuxt_component_0 } from './Spinner-BezqYXW-.mjs';
import { _ as __nuxt_component_1 } from './ProductCard2-DgEYaTOw.mjs';
import { _ as _export_sfc, r as useRoute$1, u as useI18n, a as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { f as useMainToken } from './useState-4PtMRSTy.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BTB3BaHh.mjs';
import './nuxt-link-FZwR9qik.mjs';
import './index-DlmtoEba.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/utils/uuid';
import './virtual_public-C_LRNEiw.mjs';
import './virtual_public-DdiQcbvu.mjs';
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
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const { locale } = useI18n();
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const {
      data: Products,
      error,
      pending
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${api.GetProducts}?ProductNameAr=${locale.value === "ar" ? route.params.id.toString() : ""}&searchString=${locale.value === "en" ? route.params.id.toString() : ""}`,
      {
        baseURL: apiBase,
        headers: {
          Authorization: `Bearer ${useMainToken().value}`
        }
      },
      "$z2SrOJWygA"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSpinner = __nuxt_component_0;
      const _component_ProductCard2 = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid nav-margin" }, _attrs))} data-v-5b6f0bce><div class="title" data-v-5b6f0bce><h1 class="d-flex align-items-center justify-content-center" data-v-5b6f0bce><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-5b6f0bce><span class="underline" data-v-5b6f0bce>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B" : "Search Result")}</span></h1></div>`);
      if (unref(pending)) {
        _push(`<div class="d-flex justify-center align-items-center" style="${ssrRenderStyle({ "height": "500px" })}" data-v-5b6f0bce>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-5b6f0bce>`);
        if (unref(Products)) {
          _push(`<div data-v-5b6f0bce>`);
          if (unref(Products).data.length > 0) {
            _push(`<div class="row" data-v-5b6f0bce><!--[-->`);
            ssrRenderList(unref(Products).data, (item) => {
              _push(`<div class="mb-4 col-6 col-sm-6 col-md-3 col-lg-3" data-v-5b6f0bce>`);
              _push(ssrRenderComponent(_component_ProductCard2, {
                class: "mt-8",
                id: item.id,
                image: `${item.productImageUrl}`,
                name: _ctx.$i18n.locale === "ar" ? item.nameAr : item.nameEn,
                price: item.price,
                arivals: true,
                productId: item.id,
                category_id: item.productDefaultCategoryId,
                isFavorite: item.isFavorite,
                item,
                onChangeIcon: _ctx.ChangeIcon
              }, null, _parent));
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<div class="d-flex justify-center align-items-center" style="${ssrRenderStyle({ "height": "400px" })}" data-v-5b6f0bce><h1 class="color fw-bold" data-v-5b6f0bce>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0646\u0639\u062A\u0630\u0631 \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A" : "Sorry No Items")}</h1></div>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b6f0bce"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CrJSHCIq.mjs.map
