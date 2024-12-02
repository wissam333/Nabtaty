import { _ as __nuxt_component_2 } from './nuxt-link-DVTfn8MM.mjs';
import { _ as _export_sfc, a as useRuntimeConfig } from './server.mjs';
import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1 } from './virtual_public-CPhNCZXW.mjs';
import { _ as _imports_1$1 } from './virtual_public-Bp1dU-vu.mjs';

const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: ["product", "productId"],
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
      const _component_nuxt_link = __nuxt_component_2;
      _push(`<!--[--><div class="leaf" data-v-e2299b76><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-e2299b76></div><div class="leaf2" data-v-e2299b76><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-e2299b76></div><div class="leaf3" data-v-e2299b76><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-e2299b76></div><div class="leaf4" data-v-e2299b76><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-e2299b76></div>`);
      if ((_b = (_a = __props.product) == null ? void 0 : _a.data) == null ? void 0 : _b.productOffer.discountRatio) {
        _push(`<div class="disscount" data-v-e2299b76>${ssrInterpolate(((_d = (_c = __props.product) == null ? void 0 : _c.data) == null ? void 0 : _d.productOffer.discountRatio) + "%")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="product-img" data-v-e2299b76>`);
      if ((_f = (_e = __props.product) == null ? void 0 : _e.photos) == null ? void 0 : _f.photoPath) {
        _push(`<img${ssrRenderAttr("src", unref(apiBase) + "/" + ((_h = (_g = __props.product) == null ? void 0 : _g.photos) == null ? void 0 : _h.photoPath))} alt="" data-v-e2299b76>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-e2299b76>`);
      }
      _push(`</div><div class="product-info" data-v-e2299b76><h5 class="title" data-v-e2299b76>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? __props.product.plant_name : __props.product.plant_name)}</h5>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/Product/${(_a2 = (_j = (_i = __props.product) == null ? void 0 : _i.id) == null ? void 0 : _j.toString()) != null ? _a2 : (_k = __props.productId) == null ? void 0 : _k.toString()}`,
        class: "btn btn-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-e2299b76${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="price" data-v-e2299b76><span data-v-e2299b76>${ssrInterpolate(((_l = __props.product) == null ? void 0 : _l.price4) > 0 ? (_m = __props.product) == null ? void 0 : _m.price4 : ((_n = __props.product) == null ? void 0 : _n.price3) > 0 ? (_o = __props.product) == null ? void 0 : _o.price3 : ((_p = __props.product) == null ? void 0 : _p.price2) > 0 ? (_q = __props.product) == null ? void 0 : _q.price2 : ((_r = __props.product) == null ? void 0 : _r.price1) > 0 ? (_s = __props.product) == null ? void 0 : _s.price1 : 0)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "JOD" : "JOD")}</span></p></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e2299b76"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=ProductCard-C1B8AG00.mjs.map
