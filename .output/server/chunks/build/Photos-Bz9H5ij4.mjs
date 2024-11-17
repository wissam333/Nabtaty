import { _ as __nuxt_component_0 } from './Spinner-BezqYXW-.mjs';
import { _ as _export_sfc, u as useI18n, a as useRuntimeConfig, q as __nuxt_component_0$1 } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { withAsyncContext, reactive, shallowReactive, ref, onUnmounted, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BTB3BaHh.mjs';
import { Fade } from 'vue-flux';
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
  __name: "Photos",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useI18n();
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { data: Photos2, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetPhotoAlbum}`, {
      baseURL: apiBase
    }, "$NiwSbG1CDo")), __temp = await __temp, __restore(), __temp);
    reactive({
      allowFullscreen: true,
      allowToSkipTransition: false,
      autohideTime: 2500,
      autoplay: false,
      bindKeys: false,
      delay: 5e3,
      enableGestures: false,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3
    });
    shallowReactive([]);
    shallowReactive([Fade]);
    let openGallery = ref();
    const handleClick = (event) => {
      if (event.target.classList.contains("overlay")) {
        openGallery.value = false;
      }
      if (event.target.classList.contains("overlay")) {
        openGallery.value = false;
      }
    };
    onUnmounted(() => {
      (void 0).removeEventListener("click", handleClick);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSpinner = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-b2cc218a><div class="container" data-v-b2cc218a><div class="title" data-v-b2cc218a><h1 class="d-flex align-items-center justify-content-center" data-v-b2cc218a><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-b2cc218a><span class="underline" data-v-b2cc218a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0648\u0645 \u0627\u0644\u0635\u0648\u0631" : "Photo Album")}</span></h1></div></div><div class="cont" data-v-b2cc218a>`);
      if (unref(pending)) {
        _push(`<div class="text-center text-white" data-v-b2cc218a>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="row" data-v-b2cc218a>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`<div class="images col-lg-4" data-v-b2cc218a><img${ssrRenderAttr("src", `${unref(apiBase)}/${unref(Photos2)[0].photo}`)} alt="" data-v-b2cc218a></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Photos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Photos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2cc218a"]]);

export { Photos as default };
//# sourceMappingURL=Photos-Bz9H5ij4.mjs.map
