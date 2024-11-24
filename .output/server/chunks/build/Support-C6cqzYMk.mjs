import { _ as _export_sfc, u as useI18n, a as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "Support",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { data: Support2 } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetSupport}`, {
      baseURL: apiBase,
      credentials: "include",
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en"
      }
    }, "$ig9b7XfVsa")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-9f929f2c><div class="container" data-v-9f929f2c><div class="title" data-v-9f929f2c><h1 class="d-flex align-items-center justify-content-center" data-v-9f929f2c><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-9f929f2c><span class="underline" data-v-9f929f2c>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0648 \u0627\u0644\u062F\u0639\u0645" : "Help & Support")}</span></h1><div class="" data-v-9f929f2c><!--[-->`);
      ssrRenderList(unref(Support2), (about, index) => {
        _push(`<div class="row mb-5" data-v-9f929f2c><div class="col-lg-12 about-text"${ssrRenderAttr("data-aos", _ctx.$i18n.locale === "ar" ? "fade-left" : "fade-right")} data-aos-duration="800" data-v-9f929f2c><h5 class="fw-bold" data-v-9f929f2c>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? about == null ? void 0 : about.title : about == null ? void 0 : about.title)}</h5><div data-v-9f929f2c><p data-v-9f929f2c>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? about == null ? void 0 : about.description : about == null ? void 0 : about.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Support.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Support = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f929f2c"]]);

export { Support as default };
//# sourceMappingURL=Support-C6cqzYMk.mjs.map
