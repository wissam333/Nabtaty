import { _ as __nuxt_component_2 } from './nuxt-link-DVTfn8MM.mjs';
import { useSSRContext, ref, withCtx, unref, createVNode, toDisplayString, mergeProps, openBlock, createElementBlock } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
import { B as BaseStyle, _ as _export_sfc, a as useRuntimeConfig } from './server.mjs';
import { s as script$2 } from './index-BmTln-ia.mjs';
import { _ as _imports_0 } from './virtual_public-C_LRNEiw.mjs';
import { _ as _imports_1 } from './virtual_public-DdiQcbvu.mjs';

const _sfc_main$2 = {
  __name: "VPlaceLoad",
  __ssrInlineRender: true,
  props: ["width", "height", "classes", "light"],
  setup(__props) {
    const islight = ref("loads");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `${unref(islight)} ${__props.classes}`,
        style: { "width": __props.width, "height": __props.height, "max-width": "100%" }
      }, _attrs))} data-v-b62404ca></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/VPlaceLoad.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b62404ca"]]);
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-skeleton {\n    overflow: hidden;\n    background: ".concat(dt("skeleton.background"), ";\n    border-radius: ").concat(dt("skeleton.border.radius"), ';\n}\n\n.p-skeleton::after {\n    content: "";\n    animation: p-skeleton-animation 1.2s infinite;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translateX(-100%);\n    z-index: 1;\n    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), ').concat(dt("skeleton.animation.background"), ", rgba(255, 255, 255, 0) );\n}\n\n.p-skeleton-circle {\n    border-radius: 50%;\n}\n\n.p-skeleton-animation-none::after {\n    animation: none;\n}\n\n@keyframes p-skeleton-animation {\n    from {\n        transform: translateX(-100%);\n    }\n    to {\n        transform: translateX(100%);\n    }\n}\n");
};
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": props.shape === "circle",
      "p-skeleton-animation-none": props.animation === "none"
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: "skeleton",
  theme,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseSkeleton",
  "extends": script$2,
  props: {
    shape: {
      type: String,
      "default": "rectangle"
    },
    size: {
      type: String,
      "default": null
    },
    width: {
      type: String,
      "default": "100%"
    },
    height: {
      type: String,
      "default": "1rem"
    },
    borderRadius: {
      type: String,
      "default": null
    },
    animation: {
      type: String,
      "default": "wave"
    }
  },
  style: SkeletonStyle,
  provide: function provide() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Skeleton",
  "extends": script$1,
  inheritAttrs: false,
  computed: {
    containerStyle: function containerStyle() {
      if (this.size)
        return {
          width: this.size,
          height: this.size,
          borderRadius: this.borderRadius
        };
      else
        return {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadius
        };
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: [_ctx.sx("root"), $options.containerStyle],
    "aria-hidden": "true"
  }, _ctx.ptmi("root")), null, 16);
}
script.render = render;
const _sfc_main$1 = {
  __name: "Image",
  __ssrInlineRender: true,
  props: [
    "src",
    "id",
    "classes",
    "style",
    "width",
    "height",
    "loadClasses",
    "light",
    "alt"
  ],
  setup(__props) {
    const loaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsVPlaceLoad = __nuxt_component_0;
      const _component_Skeleton = script;
      _push(`<!--[-->`);
      if (!unref(loaded)) {
        _push(ssrRenderComponent(_component_ElementsVPlaceLoad, {
          width: __props.width,
          height: __props.height,
          classes: __props.loadClasses,
          light: __props.light
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loaded)) {
        _push(`<img${ssrRenderAttr("id", __props.id)} class="${ssrRenderClass(__props.classes)}"${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.alt)}${ssrRenderAttr("sytle", __props.style)} data-v-7d636516>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loaded)) {
        _push(ssrRenderComponent(_component_Skeleton, { class: "skeleton-loader" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Image.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7d636516"]]);
const _sfc_main = {
  __name: "ProductCard2",
  __ssrInlineRender: true,
  props: ["product", "productId"],
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const _component_nuxt_link = __nuxt_component_2;
      const _component_ElementsImage = __nuxt_component_1$1;
      _push(`<!--[--><div class="leaf" data-v-0fa3f737><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-0fa3f737></div><div class="leaf2" data-v-0fa3f737><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-0fa3f737></div><div class="leaf3" data-v-0fa3f737><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-0fa3f737></div><div class="leaf4" data-v-0fa3f737><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-0fa3f737></div>`);
      if ((_b = (_a = __props.product) == null ? void 0 : _a.data) == null ? void 0 : _b.productOffer.discountRatio) {
        _push(`<div class="disscount" data-v-0fa3f737>${ssrInterpolate(((_d = (_c = __props.product) == null ? void 0 : _c.data) == null ? void 0 : _d.productOffer.discountRatio) + "%")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/Product/${(_a2 = (_f = (_e = __props.product) == null ? void 0 : _e.id) == null ? void 0 : _f.toString()) != null ? _a2 : (_g = __props.productId) == null ? void 0 : _g.toString()}`,
        class: "product-img"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a22, _b22, _c2, _d2;
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElementsImage, {
              src: `${unref(apiBase)}/${(_b22 = (_a22 = __props.product) == null ? void 0 : _a22.photos) == null ? void 0 : _b22.photoPath}`,
              classes: "image-rendered"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElementsImage, {
                src: `${unref(apiBase)}/${(_d2 = (_c2 = __props.product) == null ? void 0 : _c2.photos) == null ? void 0 : _d2.photoPath}`,
                classes: "image-rendered"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="product-info" data-v-0fa3f737><div class="d-flex justify-content-between px-5 mt-4" data-v-0fa3f737><h5 class="title" data-v-0fa3f737>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? __props.product.plant_name : __props.product.plant_name)}</h5><div class="d-flex" data-v-0fa3f737><p class="price" data-v-0fa3f737><span class="${ssrRenderClass([((_i = (_h = __props.product) == null ? void 0 : _h.productOffer) == null ? void 0 : _i.newPrice) ? "old-price" : "", "mx-2"])}" data-v-0fa3f737>${ssrInterpolate((_j = __props.product) == null ? void 0 : _j.price)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "AED" : "AED")}</span></p><p class="price" data-v-0fa3f737>${ssrInterpolate((_l = (_k = __props.product) == null ? void 0 : _k.productOffer) == null ? void 0 : _l.newPrice)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "AED" : "AED")}</p></div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/Product/${(_b2 = (_n = (_m = __props.product) == null ? void 0 : _m.id) == null ? void 0 : _n.toString()) != null ? _b2 : (_o = __props.productId) == null ? void 0 : _o.toString()}`,
        class: "btn btn-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-0fa3f737${_scopeId}>${ssrInterpolate(_ctx.$t("OrderNow"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("OrderNow")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0fa3f737"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ProductCard2-DgD4kXZr.mjs.map
