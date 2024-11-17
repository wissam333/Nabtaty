import { _ as __nuxt_component_2 } from './nuxt-link-FZwR9qik.mjs';
import { p as publicAssetsURL, _ as _export_sfc, a as useRuntimeConfig } from './server.mjs';
import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-C_LRNEiw.mjs';

const _imports_1 = publicAssetsURL("/photos/2619fafceaedd791a39fd2a196ec0641.png");
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_nuxt_link = __nuxt_component_2;
      _push(`<!--[--><div class="leaf" data-v-213bca8e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-213bca8e></div><div class="leaf2" data-v-213bca8e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-213bca8e></div><div class="leaf3" data-v-213bca8e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-213bca8e></div><div class="leaf4" data-v-213bca8e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-213bca8e></div>`);
      if ((_b = (_a = __props.product) == null ? void 0 : _a.data) == null ? void 0 : _b.productOffer.discountRatio) {
        _push(`<div class="disscount" data-v-213bca8e>${ssrInterpolate(((_d = (_c = __props.product) == null ? void 0 : _c.data) == null ? void 0 : _d.productOffer.discountRatio) + "%")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="product-img" data-v-213bca8e>`);
      if ((_e = __props.product) == null ? void 0 : _e.photos.photoPath) {
        _push(`<img${ssrRenderAttr("src", unref(apiBase) + "/" + ((_f = __props.product) == null ? void 0 : _f.photos.photoPath))} alt="" data-v-213bca8e>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-213bca8e>`);
      }
      _push(`</div><div class="product-info" data-v-213bca8e><h5 class="title" data-v-213bca8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? __props.product.plant_name : __props.product.plant_name)}</h5>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/Product/${(_a2 = (_h = (_g = __props.product) == null ? void 0 : _g.id) == null ? void 0 : _h.toString()) != null ? _a2 : (_i = __props.productId) == null ? void 0 : _i.toString()}`,
        class: "btn btn-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-213bca8e${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="price" data-v-213bca8e><span class="${ssrRenderClass(((_k = (_j = __props.product) == null ? void 0 : _j.productOffer) == null ? void 0 : _k.newPrice) ? "old-price" : "")}" data-v-213bca8e>${ssrInterpolate((_l = __props.product) == null ? void 0 : _l.price)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "AED" : "AED")}</span></p>`);
      if ((_n = (_m = __props.product) == null ? void 0 : _m.productOffer) == null ? void 0 : _n.newPrice) {
        _push(`<p class="price" data-v-213bca8e>${ssrInterpolate((_p = (_o = __props.product) == null ? void 0 : _o.productOffer) == null ? void 0 : _p.newPrice)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "AED" : "AED")}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-213bca8e"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=ProductCard-NAIYWLLA.mjs.map
