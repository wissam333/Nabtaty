import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_2 } from './nuxt-link-lwVJCSad.mjs';
import { u as useCart, a as useAuth } from './useState-D7RI69Dw.mjs';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { u as useShoppingCartComposable } from './useShoppingCartComposable-B-3ggHa4.mjs';
import { resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BTB3BaHh.mjs';
import { _ as _imports_0$1 } from './virtual_public-C_LRNEiw.mjs';
import { _ as _imports_1 } from './virtual_public-DdiQcbvu.mjs';
import '@fortawesome/fontawesome-svg-core';
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
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';

const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCart();
    const isAuth = useAuth();
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const increaseQty = (id, index) => {
      const quantityElm = (void 0).getElementById(`quantity_${id}`);
      if (new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)) {
        let quantity = parseInt(quantityElm.dataset.qty) + 1;
        quantityElm.setAttribute("data-qty", quantity);
        quantityElm.textContent = quantity;
        useShoppingCartComposable().CartincreaseQty(index);
      }
    };
    const decreaseQty = (id, index) => {
      const quantityElm = (void 0).getElementById(`quantity_${id}`);
      if (parseInt(quantityElm.dataset.qty) > 1 && new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)) {
        let quantity = parseInt(quantityElm.dataset.qty) - 1;
        quantityElm.setAttribute("data-qty", quantity);
        quantityElm.textContent = quantity;
        useShoppingCartComposable().CartdecreaseQty(index);
      }
    };
    console.log(cart.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_font_awesome = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart nav-margin" }, _attrs))} data-v-248edd4f><div class="title" data-v-248edd4f><h1 class="d-flex align-items-center justify-content-center" data-v-248edd4f><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-248edd4f><span class="underline" data-v-248edd4f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0633\u0644\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A" : "My Cart")}</span></h1></div><div class="container" data-v-248edd4f>`);
      if (unref(cart).totalQty > 0) {
        _push(`<div class="row" data-v-248edd4f><div class="col-lg-8" data-v-248edd4f><!--[-->`);
        ssrRenderList(unref(cart).items, (item, index) => {
          var _a2, _b;
          _push(`<div class="cartbox mb-5 d-flex justify-start" data-v-248edd4f><div class="leaf" data-v-248edd4f><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-248edd4f></div><div class="leaf2" data-v-248edd4f><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-248edd4f></div><div class="imagebox" data-v-248edd4f>`);
          if ((_a2 = item.item) == null ? void 0 : _a2.photos[0]) {
            _push(`<img${ssrRenderAttr("src", `${unref(apiBase)}/${(_b = item.item) == null ? void 0 : _b.photos[0].photoPath}`)} width="250" height="180" class="" alt="" data-v-248edd4f>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="mx-5" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "space-around" })}" data-v-248edd4f><h4 class="fw-bold" data-v-248edd4f>${ssrInterpolate(_ctx.$i18n.locale == "en" ? item.item.plant_name : item.item.plant_name)}</h4>`);
          if (item.item.note != "") {
            _push(`<p class="text-muted fw-bold" data-v-248edd4f>${ssrInterpolate(item.item.note)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="color price fw-bold" data-v-248edd4f>${ssrInterpolate(item.price)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u0631\u0647\u0645 \u0625\u0645\u0627\u0631\u0627\u062A\u064A" : "AED")}</p><div class="d-flex align-items-center justify-space-between mb-2" data-v-248edd4f><div style="${ssrRenderStyle({ "border": "2px solid #003d2ec2" })}" class="d-inline-flex align-items-center py-2 px-10" data-v-248edd4f>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            style: { "color": "#003d2ec2", "cursor": "pointer" },
            onClick: ($event) => decreaseQty(item.id, index),
            icon: ["fas", "minus"]
          }, null, _parent));
          _push(`<span class="mx-3 quantity"${ssrRenderAttr("id", `quantity_${item.id}`)}${ssrRenderAttr("data-qty", item.qty)} data-v-248edd4f>${ssrInterpolate(item.qty)}</span>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            style: { "color": "#003d2ec2", "cursor": "pointer" },
            onClick: ($event) => increaseQty(item.id, index),
            icon: ["fas", "plus"]
          }, null, _parent));
          _push(`</div><button class="${ssrRenderClass([_ctx.$i18n.locale === "en" ? "en" : "", "mb-0 text-white border-0 rounded-0 mx-5 btn delete"])}" data-v-248edd4f>${ssrInterpolate(_ctx.$i18n.locale == "en" ? "REMOVE" : "\u062D\u0630\u0641")}</button></div></div></div>`);
        });
        _push(`<!--]--></div><div class="col-lg-4" data-v-248edd4f><div class="result-box" style="${ssrRenderStyle({ "border": "2px solid #003d2ec2", "border-radius": "8px", "padding-bottom": "10px" })}" data-v-248edd4f><h4 class="background text-white fw-bold d-flex justify-space-between px-3 p-2" data-v-248edd4f><span class="text-white" data-v-248edd4f>${ssrInterpolate(_ctx.$i18n.locale == "en" ? "Summary" : "\u0645\u0644\u062E\u0635")}</span><span class="text-white" data-v-248edd4f>${ssrInterpolate(("useCart" in _ctx ? _ctx.useCart : unref(useCart))().value.totalQty)} <span class="text-white" data-v-248edd4f>${ssrInterpolate(_ctx.$i18n.locale == "en" ? "Item" : "\u0639\u0646\u0635\u0631")}</span></span></h4><div class="d-flex justify-content-between align-items-center px-8 mt-5" data-v-248edd4f><span class="text-black fw-bold" data-v-248edd4f>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0643\u0644\u064A " : "Order Total")}</span><span class="totalPrice fw-bold text-black" style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-248edd4f>${ssrInterpolate((_a = unref(cart).totalPrice) == null ? void 0 : _a.toFixed(2))} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u0631\u0647\u0645 \u0625\u0645\u0627\u0631\u0627\u062A\u064A" : "AED")}</span></div><div class="text-center mt-5" data-v-248edd4f>`);
        if (unref(isAuth).isAuthenticated) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "w-75",
            to: "/order"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="Check background px-5 py-2 text-white" data-v-248edd4f${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u064A\u0629" : "ORDER NOW")}</button>`);
              } else {
                return [
                  createVNode("button", { class: "Check background px-5 py-2 text-white" }, toDisplayString(_ctx.$i18n.locale == "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u064A\u0629" : "ORDER NOW"), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<a class="w-75" href="https://nabtaty.com/auth/providers/google" data-v-248edd4f><button class="Check background px-5 py-2 text-white" data-v-248edd4f>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u064A\u0629" : "Order Now")}</button></a>`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "mx-1",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="Check background px-5 py-2 text-white" data-v-248edd4f${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u062A\u0627\u0628\u0639 \u0627\u0644\u062A\u0633\u0648\u0642" : "Keep Shopping")}</button>`);
            } else {
              return [
                createVNode("button", { class: "Check background px-5 py-2 text-white" }, toDisplayString(_ctx.$i18n.locale == "ar" ? "\u062A\u0627\u0628\u0639 \u0627\u0644\u062A\u0633\u0648\u0642" : "Keep Shopping"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<div class="bg- d-flex justify-center align-items-center" style="${ssrRenderStyle({ "height": "calc(100vh - 300px)" })}" data-v-248edd4f><div data-v-248edd4f><h5 class="text-center" data-v-248edd4f>`);
        _push(ssrRenderComponent(_component_v_icon, {
          size: "x-large",
          color: " darken-2",
          icon: "mdi-cart-off"
        }, null, _parent));
        _push(`</h5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "d-flex justify-center mt-9 align-items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="background px-10 py-3 text-white mx-auto" data-v-248edd4f${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0645\u0644\u0623 \u0627\u0644\u0633\u0644\u0629" : "Fill Your Cart")}</button>`);
            } else {
              return [
                createVNode("button", { class: "background px-10 py-3 text-white mx-auto" }, toDisplayString(_ctx.$i18n.locale == "ar" ? "\u0627\u0645\u0644\u0623 \u0627\u0644\u0633\u0644\u0629" : "Fill Your Cart"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-248edd4f"]]);

export { Cart as default };
//# sourceMappingURL=Cart-DMJdX5L3.mjs.map
