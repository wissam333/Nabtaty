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
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { data: Privacy } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetPrivacy}`, {
      baseURL: apiBase,
      credentials: "include",
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en"
      }
    }, "$H393OfoU7O")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-d29e5ca0><div class="container" data-v-d29e5ca0><div class="title" data-v-d29e5ca0><h1 class="d-flex align-items-center justify-content-center" data-v-d29e5ca0><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-d29e5ca0><span class="underline" data-v-d29e5ca0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629" : "Privacy Policy")}</span></h1><div class="" data-v-d29e5ca0><!--[-->`);
      ssrRenderList(unref(Privacy), (about, index) => {
        _push(`<div class="row mb-5" data-v-d29e5ca0><div class="col-lg-12 about-text"${ssrRenderAttr("data-aos", _ctx.$i18n.locale === "ar" ? "fade-left" : "fade-right")} data-aos-duration="800" data-v-d29e5ca0><div data-v-d29e5ca0><p data-v-d29e5ca0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? about == null ? void 0 : about.content : about == null ? void 0 : about.content)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/PrivacyPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d29e5ca0"]]);

export { PrivacyPolicy as default };
//# sourceMappingURL=PrivacyPolicy-BUBBBKlX.mjs.map
