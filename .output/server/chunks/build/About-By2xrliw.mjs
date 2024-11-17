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
  __name: "About",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { data: About2, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetAbout}`, {
      baseURL: apiBase,
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en"
      }
    }, "$ScoCAA9ImP")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-d05f4419><div class="container" data-v-d05f4419><div class="title mb-5" data-v-d05f4419><h1 class="d-flex align-items-center justify-content-center" data-v-d05f4419><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-d05f4419><span class="underline" data-v-d05f4419>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0646 \u0646\u062D\u0646" : "About Us")}</span></h1></div><div class="container" data-v-d05f4419><!--[-->`);
      ssrRenderList(unref(About2), (about, index) => {
        _push(`<div class="${ssrRenderClass([index % 2 == 0 ? "row-reverse" : "", "row"])}" data-v-d05f4419><div class="col-lg-6 image"${ssrRenderAttr("data-aos", _ctx.$i18n.locale === "ar" ? "fade-right" : "fade-left")} data-aos-duration="800" data-v-d05f4419><img${ssrRenderAttr("src", `${unref(apiBase)}/${about.photo}`)} alt="" class="img-fluid align-self-stretch" data-v-d05f4419></div><div class="col-lg-6 about-text"${ssrRenderAttr("data-aos", _ctx.$i18n.locale === "ar" ? "fade-left" : "fade-right")} data-aos-duration="800" data-v-d05f4419><div data-v-d05f4419>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? about == null ? void 0 : about.description : about == null ? void 0 : about.description)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d05f4419"]]);

export { About as default };
//# sourceMappingURL=About-By2xrliw.mjs.map
