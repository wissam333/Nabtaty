import { _ as _export_sfc, m as __nuxt_component_0$1 } from './server.mjs';
import { a as useAuth } from './useState-D7RI69Dw.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth().value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<!--[--><div class="title" data-v-844a9a4b><h1 class="d-flex align-items-center justify-content-center" data-v-844a9a4b><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-844a9a4b><span class="underline" data-v-844a9a4b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "Sign In")}</span></h1></div><div class="container" data-v-844a9a4b><div class="card" data-v-844a9a4b><h2 data-v-844a9a4b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0627\u0644\u0622\u0646 \u0639\u0646 \u0637\u0631\u064A\u0642 \u062D\u0633\u0627\u0628\u0643 \u0639\u0644\u0649 \u063A\u0648\u063A\u0644" : "Sign In Now By Your Google Account")}</h2>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SignIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SignIn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-844a9a4b"]]);

export { SignIn as default };
//# sourceMappingURL=SignIn-CXLAnFb0.mjs.map
