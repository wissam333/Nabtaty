import { _ as __nuxt_component_0 } from './Spinner-BezqYXW-.mjs';
import { _ as __nuxt_component_1 } from './ProductCard2-DeAAMULl.mjs';
import { _ as _export_sfc, u as useI18n, a as useRuntimeConfig } from './server.mjs';
import { d as useUserInfo } from './useState-DDQ6Qtd2.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { withAsyncContext, ref, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
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
  __name: "Fav",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const user = useUserInfo().value;
    useI18n();
    const { data: Favs, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${api.GetCustomerFav}/${user.id}`,
      {
        baseURL: apiBase,
        method: "GET",
        credentials: "include"
      },
      "$Drjt3QvB8J"
    )), __temp = await __temp, __restore(), __temp);
    let Products = ref([]);
    watchEffect(() => {
    });
    let deleted = ref([]);
    const deleteFav = (favId) => {
      deleted.value[favId] = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSpinner = __nuxt_component_0;
      const _component_ProductCard2 = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))} data-v-2c1b5050><div class="title" data-v-2c1b5050><h1 class="d-flex align-items-center justify-content-center" data-v-2c1b5050><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-2c1b5050><span class="underline" data-v-2c1b5050>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0641\u0636\u0644\u0629" : "Favorites")}</span></h1></div>`);
      if (unref(pending)) {
        _push(`<div class="d-flex justify-center align-items-center" style="${ssrRenderStyle({ "height": "500px" })}" data-v-2c1b5050>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-2c1b5050>`);
        if (unref(Products)) {
          _push(`<div data-v-2c1b5050>`);
          if (unref(Products).length > 0) {
            _push(`<div class="grid3" data-v-2c1b5050><!--[-->`);
            ssrRenderList(unref(Products), (item) => {
              _push(`<div class="product" style="${ssrRenderStyle(!unref(deleted)[item.id] ? null : { display: "none" })}" data-v-2c1b5050>`);
              _push(ssrRenderComponent(_component_ProductCard2, {
                onDeleteFav: deleteFav,
                product: item,
                FavoriteId: item.id
              }, null, _parent));
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<div class="d-flex justify-center align-items-center" style="${ssrRenderStyle({ "height": "400px" })}" data-v-2c1b5050><h1 class="color fw-bold" data-v-2c1b5050>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u0636\u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629" : "No Items In Favorites")}</h1></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Fav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Fav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c1b5050"]]);

export { Fav as default };
//# sourceMappingURL=Fav-Ckwvaa7K.mjs.map
