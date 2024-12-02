import { _ as _export_sfc, u as useI18n, a as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BTB3BaHh.mjs';
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
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';

const _sfc_main = {
  __name: "Care",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { data: About, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetAllCare}`, {
      baseURL: apiBase,
      credentials: "include",
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en"
      }
    }, "$kpDleL8u4B")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-0bdcebee><div class="container" data-v-0bdcebee><div class="title mb-5" data-v-0bdcebee><h1 class="d-flex align-items-center justify-content-center" data-v-0bdcebee><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-0bdcebee><span class="underline" data-v-0bdcebee>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0627\u0644\u0646\u0628\u0627\u062A\u0627\u062A" : "Plant Care")}</span></h1></div><div class="container" data-v-0bdcebee><!--[-->`);
      ssrRenderList(unref(About), (about, index) => {
        _push(`<div class="${ssrRenderClass([index % 2 == 0 ? "row-reverse" : "", "row"])}" data-v-0bdcebee><div class="col-lg-6 image"${ssrRenderAttr("data-aos", _ctx.$i18n.locale === "ar" ? "fade-right" : "fade-left")} data-aos-duration="800" data-v-0bdcebee><img${ssrRenderAttr("src", `${unref(apiBase)}/${about.photo}`)} alt="" class="img-fluid align-self-stretch" data-v-0bdcebee></div><div class="col-lg-6 about-text"${ssrRenderAttr("data-aos", _ctx.$i18n.locale === "ar" ? "fade-left" : "fade-right")} data-aos-duration="800" data-v-0bdcebee><div data-v-0bdcebee>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? about == null ? void 0 : about.description : about == null ? void 0 : about.description)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Care.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Care = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0bdcebee"]]);

export { Care as default };
//# sourceMappingURL=Care-0xzsKV5M.mjs.map
