import { _ as __nuxt_component_2 } from './nuxt-link-DVTfn8MM.mjs';
import { _ as _sfc_main$6 } from './icon-jIl0hTBH.mjs';
import { u as useI18n, r as useRoute$1, a as useRuntimeConfig, i as useRouter$1, _ as _export_sfc, o as navigateTo, c as useNuxtApp } from './server.mjs';
import { u as useShoppingCartComposable } from './useShoppingCartComposable-Dr5BbBEA.mjs';
import { e as useDelviryCost, a as useCart, p as princedomORMap, f as useAccountType, g as useCurrency, c as useLang } from './useState-DDQ6Qtd2.mjs';
import { ref, withAsyncContext, watchEffect, unref, useSSRContext, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, resolveComponent, mergeProps, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_5 } from './ProductCard-C1B8AG00.mjs';
import { Autoplay, Pagination } from 'swiper/modules';
import { _ as _imports_0 } from './virtual_public-BTB3BaHh.mjs';
import { object, string } from 'yup';
import { defineRule, configure } from 'vee-validate';
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
import './virtual_public-CPhNCZXW.mjs';
import './virtual_public-Bp1dU-vu.mjs';

const useTranslate = (object2, value) => {
  if (object2 && value) {
    const lang = useLang().value ? useLang().value : "ar";
    const langUpperCase = lang.charAt(0).toUpperCase() + lang.slice(1);
    const word = value + langUpperCase;
    return object2[`${word}`];
  }
};
const _sfc_main$5 = {
  __name: "ProductInfoTable",
  __ssrInlineRender: true,
  props: [
    "cart",
    "currency",
    "chippengcost"
  ],
  setup(__props) {
    const { cart, currency, chippengcost } = __props;
    console.log(cart);
    const {
      public: { apiBase }
    } = useRuntimeConfig();
    const increaseQty = (id) => {
      const quantityElm = (void 0).getElementById(`quantity_${id}`);
      if (new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)) {
        let quantity = parseInt(quantityElm.dataset.qty) + 1;
        quantityElm.setAttribute("data-qty", quantity);
        quantityElm.textContent = quantity;
        useShoppingCartComposable().CartincreaseQty(id, quantity);
      }
    };
    const decreaseQty = (id) => {
      const quantityElm = (void 0).getElementById(`quantity_${id}`);
      if (parseInt(quantityElm.dataset.qty) > 1 && new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)) {
        let quantity = parseInt(quantityElm.dataset.qty) - 1;
        quantityElm.setAttribute("data-qty", quantity);
        quantityElm.textContent = quantity;
        useShoppingCartComposable().CartdecreaseQty(id, quantity);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_font_awesome = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-4aa635ed><div class="table-content table-responsive" id="cart-container" data-v-4aa635ed><table class="table" data-v-4aa635ed><thead class="${ssrRenderClass([_ctx.$i18n.locale == "en" ? "headen" : "headar", "tabel-title"])}" data-v-4aa635ed><tr data-v-4aa635ed><th data-v-4aa635ed>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0635\u0648\u0631\u0629" : "Photo")}</th><th data-v-4aa635ed>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-4aa635ed>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0643\u0645\u064A\u0629" : "Quantity")}</th><th data-v-4aa635ed>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0633\u0639\u0631" : "Price")}</th></tr></thead><tbody data-v-4aa635ed><!--[-->`);
      ssrRenderList(__props.cart.items, (item, index) => {
        var _a2;
        _push(`<!--[-->`);
        if (item) {
          _push(`<tr data-v-4aa635ed><td data-v-4aa635ed><img class="product-img"${ssrRenderAttr("src", `${unref(apiBase)}/${(_a2 = item.item) == null ? void 0 : _a2.photos[0].photoPath}`)} alt="" width="75" height="50" data-v-4aa635ed></td><td data-v-4aa635ed>`);
          if (item.item.id) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/Product/${item.item.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<h6${ssrRenderAttr("title", ("useTranslate" in _ctx ? _ctx.useTranslate : unref(useTranslate))(item.item, "name"))} data-v-4aa635ed${_scopeId}>`);
                  if (item.selectedSize) {
                    _push2(`<span style="${ssrRenderStyle({ "font-size": "smaller", "color": "#00916d" })}" data-v-4aa635ed${_scopeId}>(${ssrInterpolate(item.selectedSize)})</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(` ${ssrInterpolate(_ctx.$i18n.locale == "en" ? item.item.plant_name : item.item.plant_name)}</h6>`);
                } else {
                  return [
                    createVNode("h6", {
                      title: ("useTranslate" in _ctx ? _ctx.useTranslate : unref(useTranslate))(item.item, "name")
                    }, [
                      item.selectedSize ? (openBlock(), createBlock("span", {
                        key: 0,
                        style: { "font-size": "smaller", "color": "#00916d" }
                      }, "(" + toDisplayString(item.selectedSize) + ")", 1)) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? item.item.plant_name : item.item.plant_name), 1)
                    ], 8, ["title"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/Product/${item.item.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<h6${ssrRenderAttr("title", ("useTranslate" in _ctx ? _ctx.useTranslate : unref(useTranslate))(item.item, "name"))} data-v-4aa635ed${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale == "en" ? item.item.plant_name : item.item.plant_name)}</h6>`);
                } else {
                  return [
                    createVNode("h6", {
                      title: ("useTranslate" in _ctx ? _ctx.useTranslate : unref(useTranslate))(item.item, "name")
                    }, toDisplayString(_ctx.$i18n.locale == "en" ? item.item.plant_name : item.item.plant_name), 9, ["title"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</td><td data-v-4aa635ed>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            onClick: ($event) => increaseQty(item.id),
            icon: ["fas", "angle-up"],
            style: { "cursor": "pointer" }
          }, null, _parent));
          _push(`<span class="m-2 quantity text-black"${ssrRenderAttr("id", `quantity_${item.id}`)}${ssrRenderAttr("data-qty", item.qty)} data-v-4aa635ed>${ssrInterpolate(item.qty)}</span>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            style: { "cursor": "pointer" },
            onClick: ($event) => decreaseQty(item.id),
            icon: ["fas", "angle-down"]
          }, null, _parent));
          _push(`</td><td data-v-4aa635ed>${ssrInterpolate((item.qty * item.price).toFixed(2))} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u064A\u0646\u0627\u0631" : "JOD")}</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><tr data-v-4aa635ed><td class="py-3 text-center" colspan="1" data-v-4aa635ed><strong class="mb-0" data-v-4aa635ed>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0643\u0644\u0641\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644" : "Delviry Cost")}</strong></td><td colspan="1" data-v-4aa635ed></td><td colspan="1" data-v-4aa635ed></td><td class="py-3" data-v-4aa635ed><strong class="mb-0" data-v-4aa635ed>${ssrInterpolate(Number(("useDelviryCost" in _ctx ? _ctx.useDelviryCost : unref(useDelviryCost))().value))} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u064A\u0646\u0627\u0631" : "JOD")}</strong></td></tr><tr data-v-4aa635ed><td class="py-3 text-center" colspan="1" data-v-4aa635ed><strong class="mb-0" data-v-4aa635ed>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A" : "Total Price")}</strong></td><td colspan="1" data-v-4aa635ed></td><td colspan="1" data-v-4aa635ed></td><td class="py-3" data-v-4aa635ed><strong class="mb-0" data-v-4aa635ed>${ssrInterpolate(Number((_a = __props.cart.totalPrice) == null ? void 0 : _a.toFixed(2)) + Number(("useDelviryCost" in _ctx ? _ctx.useDelviryCost : unref(useDelviryCost))().value))} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u064A\u0646\u0627\u0631" : "JOD")}</strong></td></tr></tbody></table></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/ProductInfoTable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4aa635ed"]]);
const _sfc_main$4 = {
  __name: "VTextInput",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "text",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: "text",
      required: true
    },
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: ""
    },
    autocomplete: {
      type: String,
      default: `true`
    },
    activePasswordEye: {
      type: Boolean,
      default: false
    },
    astricts: {
      type: String,
      default: `false`
    },
    readonly: {
      type: Boolean,
      default: false
    },
    border_color: {
      type: String,
      default: `fff`
    },
    color: {
      type: String,
      default: `fff`
    },
    height: {
      type: String,
      default: `54px`
    },
    phoneCode: {
      type: String
    }
  },
  setup(__props) {
    const showPassword = (event) => {
      const inputField = event.target.closest(".position-relative").querySelector("input");
      const showIcon = event.target.closest(".show-hide-password").querySelector("#show_password");
      const hideIcon = event.target.closest(".show-hide-password").querySelector("#hide_password");
      inputField.setAttribute("type", "text");
      showIcon.classList.add("d-none");
      hideIcon.classList.remove("d-none");
    };
    const hidePassword = (event) => {
      const inputField = event.target.closest(".position-relative").querySelector("input");
      const showIcon = event.target.closest(".show-hide-password").querySelector("#show_password");
      const hideIcon = event.target.closest(".show-hide-password").querySelector("#hide_password");
      inputField.setAttribute("type", "password");
      showIcon.classList.remove("d-none");
      hideIcon.classList.add("d-none");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VField = resolveComponent("VField");
      const _component_VErrorMessage = resolveComponent("VErrorMessage");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5 position-relative" }, _attrs))} data-v-3f21d5ac>`);
      _push(ssrRenderComponent(_component_VField, { name: __props.name }, {
        default: withCtx(({ field, meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.label) {
              _push2(`<label${ssrRenderAttr("for", __props.id)} style="${ssrRenderStyle(`color: #${__props.color}`)}" class="${ssrRenderClass(`form-label fw-bold mb-3   ${_ctx.$i18n.locale == "ar" ? "rtl" : ""}`)}" data-v-3f21d5ac${_scopeId}>${ssrInterpolate(__props.label)} `);
              if (__props.astricts == "true") {
                _push2(`<span class="astricts" data-v-3f21d5ac${_scopeId}>*</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.astricts == "false") {
                _push2(`<span class="astricts" data-v-3f21d5ac${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</label>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="d-flex align-items-center justify-content-between" data-v-3f21d5ac${_scopeId}><input${ssrRenderAttrs(mergeProps(field, {
              readonly: __props.readonly,
              class: ["form-control", {
                rtl: _ctx.$i18n.locale != "en",
                "is-valid": meta.valid && meta.touched,
                "is-invalid": !meta.valid && meta.touched
              }],
              style: `border:1px solid #${__props.color};color: #${__props.color};height: ${__props.height};padding`,
              id: __props.id,
              placeholder: __props.placeholder,
              type: __props.type,
              autocomplete: __props.autocomplete
            }))} data-v-3f21d5ac${_scopeId}>`);
            if (__props.phoneCode) {
              _push2(`<div class="country-code" data-v-3f21d5ac${_scopeId}>${ssrInterpolate(__props.phoneCode)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.activePasswordEye) {
              _push2(`<span class="${ssrRenderClass(`show-hide-password ${_ctx.$i18n.locale == "ar" ? "rtl" : ""}`)}" data-v-3f21d5ac${_scopeId}><i class="fa fa-eye fa-fw" id="show_password" data-v-3f21d5ac${_scopeId}></i><i class="fa fa-eye-slash d-none fa-fw" id="hide_password" data-v-3f21d5ac${_scopeId}></i></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_VErrorMessage, {
              name: __props.name,
              as: "div",
              class: "help is-invalid"
            }, null, _parent2, _scopeId));
          } else {
            return [
              __props.label ? (openBlock(), createBlock("label", {
                key: 0,
                for: __props.id,
                style: `color: #${__props.color}`,
                class: `form-label fw-bold mb-3   ${_ctx.$i18n.locale == "ar" ? "rtl" : ""}`
              }, [
                createTextVNode(toDisplayString(__props.label) + " ", 1),
                __props.astricts == "true" ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "astricts"
                }, "*")) : createCommentVNode("", true),
                __props.astricts == "false" ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "astricts"
                })) : createCommentVNode("", true)
              ], 14, ["for"])) : createCommentVNode("", true),
              createVNode("div", { class: "d-flex align-items-center justify-content-between" }, [
                createVNode("input", mergeProps(field, {
                  readonly: __props.readonly,
                  class: ["form-control", {
                    rtl: _ctx.$i18n.locale != "en",
                    "is-valid": meta.valid && meta.touched,
                    "is-invalid": !meta.valid && meta.touched
                  }],
                  style: `border:1px solid #${__props.color};color: #${__props.color};height: ${__props.height};padding`,
                  id: __props.id,
                  placeholder: __props.placeholder,
                  type: __props.type,
                  autocomplete: __props.autocomplete
                }), null, 16, ["readonly", "id", "placeholder", "type", "autocomplete"]),
                __props.phoneCode ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "country-code"
                }, toDisplayString(__props.phoneCode), 1)) : createCommentVNode("", true)
              ]),
              __props.activePasswordEye ? (openBlock(), createBlock("span", {
                key: 1,
                class: `show-hide-password ${_ctx.$i18n.locale == "ar" ? "rtl" : ""}`
              }, [
                createVNode("i", {
                  class: "fa fa-eye fa-fw",
                  id: "show_password",
                  onClick: showPassword
                }),
                createVNode("i", {
                  class: "fa fa-eye-slash d-none fa-fw",
                  id: "hide_password",
                  onClick: hidePassword
                })
              ], 2)) : createCommentVNode("", true),
              createVNode(_component_VErrorMessage, {
                name: __props.name,
                as: "div",
                class: "help is-invalid"
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Form/VTextInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3f21d5ac"]]);
const pick = (obj, ...keys) => {
  return keys.reduce((result, key) => {
    if (obj && key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {});
};
const useGetSiteApi = () => {
  const {
    serverApiBase,
    public: { apiBase, api, cachedTime }
  } = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const GetAll = async (endpoint, fields = [], isServer = true, isLazy = false) => {
    return useFetch(() => `${endpoint}`, {
      key: `${endpoint}`,
      baseURL: apiBase,
      server: isServer,
      lazy: isLazy,
      transform(input) {
        const transformed = {
          ...input,
          fetchedAt: /* @__PURE__ */ new Date()
        };
        if (fields.length) {
          if (input.items && Array.isArray(input.items)) {
            transformed.items = input.items.map(
              (item) => pick(item, ...fields)
            );
          } else {
            return pick(transformed, ...fields);
          }
        }
        return transformed;
      },
      getCachedData(key) {
        return handleCachingDataTime(key);
      }
    }, "$ZClKFvD9Nb");
  };
  const GetById = async (endpointWithoutId, fields = [], id, isServer = true, isLazy = false) => {
    return useFetch(() => `${endpointWithoutId}${id}`, {
      key: `${endpointWithoutId}${id}`,
      baseURL: apiBase,
      server: isServer,
      lazy: isLazy,
      transform(input) {
        const transformed = {
          ...input,
          fetchedAt: /* @__PURE__ */ new Date()
        };
        if (fields.length) {
          return pick(transformed, ...fields);
        }
        return transformed;
      },
      getCachedData(key) {
        return handleCachingDataTime(key);
      }
    }, "$TGG8Mkno4i");
  };
  const handleCachingDataTime = (key) => {
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    if (!data)
      return;
    const expirationDate = new Date(data.fetchedAt);
    expirationDate.setTime(expirationDate.getTime() + cachedTime);
    const isExpired = expirationDate.getTime() < Date.now();
    if (isExpired)
      return;
    return data;
  };
  return {
    GetAll,
    GetById
  };
};
const _sfc_main$3 = {
  __name: "VSelect",
  __ssrInlineRender: true,
  props: {
    items: {
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: "text",
      required: true
    },
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: ""
    },
    border_color: {
      type: String,
      default: `000`
    },
    color: {
      type: String,
      default: `000`
    },
    astricts: {
      type: String,
      default: `false`
    }
  },
  emits: ["cities", "isLoaded"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { apiBase, api } = useRuntimeConfig();
    const getCitiesForCountry = async (event, name) => {
      if (name == "countries") {
        emit("isLoaded", true);
        let countryId = event.target.value;
        const { data, error, pending, refresh } = await useGetSiteApi().GetById(
          api.CitiesByCountryApi,
          countryId
        );
        if (error.value && error.value.statusCode == 401) {
          await useReauthorization().reAuthorize();
        }
        if (data.value) {
          emit("cities", data.value);
          emit("isLoaded", false);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VField = resolveComponent("VField");
      const _component_VErrorMessage = resolveComponent("VErrorMessage");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-a22f705f><label style="${ssrRenderStyle([{ "opacity": "1" }, `color: #${__props.color}`])}"${ssrRenderAttr("for", __props.id)} class="${ssrRenderClass(` fw w-100 text-start  form-label mb-2 ${_ctx.$i18n.locale == "ar" ? "rtl" : ""}`)}" data-v-a22f705f>${ssrInterpolate(__props.label)} `);
      if (__props.astricts == "true") {
        _push(`<span class="astricts" data-v-a22f705f>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.astricts == "false") {
        _push(`<span class="astricts" data-v-a22f705f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
      _push(ssrRenderComponent(_component_VField, {
        name: __props.name,
        class: "form-control just-bottom-border mt-1",
        style: `border:1px solid #${__props.color}; color: #${__props.color};`,
        id: __props.id,
        as: "select",
        onChange: ($event) => getCitiesForCountry($event, __props.name)
      }, {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="" disabled data-v-a22f705f${_scopeId}>${ssrInterpolate(__props.placeholder)}</option><!--[-->`);
            ssrRenderList(__props.items, (item) => {
              _push2(`<option${ssrRenderAttr("value", item.id)} style="${ssrRenderStyle(` color: #000;`)}"${ssrIncludeBooleanAttr(value && value == item.id) ? " selected" : ""} data-v-a22f705f${_scopeId}>${ssrInterpolate(item.name)} ${ssrInterpolate(item.price)}</option>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("option", {
                value: "",
                disabled: ""
              }, toDisplayString(__props.placeholder), 1),
              (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                return openBlock(), createBlock("option", {
                  key: item,
                  value: item.id,
                  style: ` color: #000;`,
                  selected: value && value == item.id
                }, toDisplayString(item.name) + " " + toDisplayString(item.price), 9, ["value", "selected"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VErrorMessage, {
        name: __props.name,
        as: "div",
        class: "help is-invalid"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Form/VSelect.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a22f705f"]]);
const _sfc_main$2 = {
  __name: "UserInfo",
  __ssrInlineRender: true,
  props: [
    "countries",
    "accountType",
    "allcities"
  ],
  emits: ["changeCountry", "changeCity"],
  setup(__props, { emit: __emit }) {
    useI18n();
    const emit = __emit;
    const changeCity = (e) => {
      emit("changeCity", e.target.value);
    };
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsFormVTextInput = __nuxt_component_0$1;
      const _component_ElementsFormVSelect = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "user-info" }, _attrs))} data-v-8f2d9da7><div class="row" data-v-8f2d9da7><div class="col-12" data-v-8f2d9da7><h4 class="mt-5 text-white text-center text-sm-start" data-v-8f2d9da7>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" : "user Information")}</h4></div><div class="col-lg-6" data-v-8f2d9da7>`);
      _push(ssrRenderComponent(_component_ElementsFormVTextInput, {
        border_color: "003d2ec2",
        color: "003d2ec2",
        type: "text",
        name: "fullNameEn",
        id: "fullNameEn",
        label: _ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name",
        placeholder: "Name",
        astricts: "true",
        readonly: true
      }, null, _parent));
      _push(`</div><div class="col-lg-6" data-v-8f2d9da7>`);
      _push(ssrRenderComponent(_component_ElementsFormVTextInput, {
        border_color: "003d2ec2",
        color: "003d2ec2",
        type: "text",
        name: "email",
        id: "email",
        label: _ctx.$t("email"),
        placeholder: _ctx.$t("email"),
        astricts: "true",
        readonly: true
      }, null, _parent));
      _push(`</div><div class="col-lg-6" data-v-8f2d9da7><label for="buttondisplay" class="fw-bold d-block color" style="${ssrRenderStyle({ "margin-bottom": "-16px", "color": "#003d2ec2" })}" data-v-8f2d9da7>${ssrInterpolate(_ctx.$t("City"))} * </label>`);
      _push(ssrRenderComponent(_component_ElementsFormVSelect, {
        border_color: "003d2ec2",
        color: "003d2ec2",
        onChange: changeCity,
        name: "cityName",
        items: __props.allcities,
        id: "cityName",
        placeholder: _ctx.$t("City"),
        style: { "margin-bottom": "20px" }
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/UserInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8f2d9da7"]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["countries", "allcities"],
  setup(__props) {
    const { $awn } = useNuxtApp();
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const route = useRoute$1();
    useRouter$1();
    const cart = useCart();
    const { countries, allcities } = __props;
    defineRule("at_least_one", (value, [otherField], { form }) => {
      return !!value || !!form[otherField] || "At least one of these fields is required";
    });
    defineRule("princedom_required", (value, [otherField], { form }) => {
      const isPrincedomRequired = princedomORMap().value;
      return isPrincedomRequired && !value ? "Princedom Name is required" : true;
    });
    let related = ref();
    const getProductRelatedItems = async () => {
      var _a, _b, _c;
      const { data: RelatedProducts } = await useFetch(
        `${api.GetPlantByCat}/${(_c = (_b = (_a = cart.value) == null ? void 0 : _a.items[0]) == null ? void 0 : _b.item) == null ? void 0 : _c.category_id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": locale.value === "ar" ? "ar" : "en"
          }
        },
        "$dJe7PUhiLE"
      );
      related.value = RelatedProducts.value.filter((e) => e.recommended == 1);
      related.value = related.value.filter((e) => e.id != route.params.id);
    };
    getProductRelatedItems();
    let user = JSON.parse(localStorage.getItem("userInfo"));
    const accountType = useAccountType();
    const currency = useCurrency();
    const chippengcost = ref(0);
    const selectedcity = ref(3);
    ref(null);
    const isLoading = ref(false);
    const hasError = ref(false);
    const errorMessage = ref("");
    const initialValues = {
      email: user == null ? void 0 : user.email,
      fullNameEn: (user == null ? void 0 : user.firstName) + " " + (user == null ? void 0 : user.lastName)
    };
    configure({
      validateOnBlur: true,
      validateOnInput: true,
      // validate on input event
      validateOnChange: true,
      validateOnModelUpdate: true,
      generateMessage: (ctx) => {
        const messages = {
          required: `${ctx.field} is required`,
          at_least_one: "At least one of these fields is required"
        };
        return messages[ctx.rule.name] ? messages[ctx.rule.name] : `The ${ctx.field} field is invalid`;
      }
    });
    const schema = object({
      cityName: string().required()
    });
    const changeCity = (payload) => {
      allcities.forEach((city) => {
        if (city.id == payload) {
          selectedcity.value = city.id;
          useDelviryCost().value = city.price;
        }
      });
    };
    let selectCountry = ref();
    const changeCountry = (payload) => {
      countries.forEach((city) => {
        if (city.id == payload) {
          selectCountry.value = city;
        }
      });
    };
    const handleSubmit = async (values, actions) => {
      isLoading.value = true;
      const finalOrderData = new Object();
      finalOrderData.location_id = values.cityName;
      finalOrderData.items = [];
      cart.value.items.forEach((item) => {
        let data = {
          plantId: item.product_id,
          quantity: item.qty,
          size: item.selectedSize
        };
        finalOrderData.items.push(data);
      });
      const { data: finalOrder } = await useFetch(api.createOrder, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: finalOrderData
      }, "$KwebRMSQz7");
      if (finalOrder.value && finalOrder.value.cartId) {
        locale.value == "ar" ? $awn.success("\u062A\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D") : $awn.success("The request was completed successfully");
        isLoading.value = false;
        resetCart();
        return navigateTo("/");
      } else {
        isLoading.value = false;
      }
    };
    const resetCart = () => {
      localStorage.removeItem("cart");
      useCart().value.items = [];
      useCart().value.totalPrice = 0;
      useCart().value.totalQty = 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_OrderProductInfoTable = __nuxt_component_0$2;
      const _component_VForm = resolveComponent("VForm");
      const _component_OrderUserInfo = __nuxt_component_1;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_ProductCard = __nuxt_component_5;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "order nav-margin" }, _attrs))} data-v-c70a5f6a><div class="container" data-v-c70a5f6a><div class="title" data-v-c70a5f6a><h1 class="d-flex align-items-center justify-content-center" data-v-c70a5f6a><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-c70a5f6a><span class="underline" data-v-c70a5f6a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0637\u0644\u0628" : "Checkout")}</span></h1></div><div class="row" data-v-c70a5f6a><div class="col-md-12" data-v-c70a5f6a><h4 class="my-3 text-center text-white text-sm-start" data-v-c70a5f6a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C" : "Product Information")}</h4>`);
      if (unref(cart) && unref(currency)) {
        _push(ssrRenderComponent(_component_OrderProductInfoTable, {
          cart: unref(cart),
          chippengcost: unref(chippengcost),
          currency: unref(currency)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_VForm, {
        id: "orderForm",
        class: "row order_form",
        "validation-schema": unref(schema),
        "initial-values": initialValues,
        onSubmit: handleSubmit
      }, {
        default: withCtx(({ meta: formMeta, values }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-c70a5f6a${_scopeId}>`);
            if (unref(hasError)) {
              _push2(`<div class="error-messages mb-3" data-v-c70a5f6a${_scopeId}><div class="alert alert-danger text-center" data-v-c70a5f6a${_scopeId}><ul class="list-unstyled mb-0" data-v-c70a5f6a${_scopeId}><!--[-->`);
              ssrRenderList(unref(errorMessage), (error, index) => {
                _push2(`<li data-v-c70a5f6a${_scopeId}>${ssrInterpolate(error)}</li>`);
              });
              _push2(`<!--]--></ul></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_OrderUserInfo, {
              onAddchippengcost: _ctx.addchippengcost,
              onChangeprincedom: _ctx.changeprincedom,
              onChangeCity: changeCity,
              allcities: __props.allcities,
              countries: __props.countries,
              onChangeCountry: changeCountry,
              accountType: unref(accountType)
            }, null, _parent2, _scopeId));
            _push2(`<div class="col-md-12 form-group mt-4 mb-10 d-flex justify-content-center justify-content-sm-start" data-v-c70a5f6a${_scopeId}><button type="submit" value="Login"${ssrIncludeBooleanAttr(!formMeta.valid) ? " disabled" : ""} class="${ssrRenderClass([{ background: formMeta.valid }, "background btn px-10 py-2 text-black w-50 btn-block m-auto"])}" data-v-c70a5f6a${_scopeId}>`);
            if (!unref(isLoading)) {
              _push2(`<span class="text-white" data-v-c70a5f6a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0623\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now")}</span>`);
            } else {
              _push2(`<span class="text-black" data-v-c70a5f6a${_scopeId}>${ssrInterpolate(_ctx.$t("loading..."))}</span>`);
            }
            _push2(`</button></div>`);
          } else {
            return [
              createVNode("div", null, [
                unref(hasError) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "error-messages mb-3"
                }, [
                  createVNode("div", { class: "alert alert-danger text-center" }, [
                    createVNode("ul", { class: "list-unstyled mb-0" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(errorMessage), (error, index) => {
                        return openBlock(), createBlock("li", { key: index }, toDisplayString(error), 1);
                      }), 128))
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createVNode(_component_OrderUserInfo, {
                onAddchippengcost: _ctx.addchippengcost,
                onChangeprincedom: _ctx.changeprincedom,
                onChangeCity: changeCity,
                allcities: __props.allcities,
                countries: __props.countries,
                onChangeCountry: changeCountry,
                accountType: unref(accountType)
              }, null, 8, ["onAddchippengcost", "onChangeprincedom", "allcities", "countries", "accountType"]),
              createVNode("div", { class: "col-md-12 form-group mt-4 mb-10 d-flex justify-content-center justify-content-sm-start" }, [
                createVNode("button", {
                  type: "submit",
                  value: "Login",
                  class: ["background btn px-10 py-2 text-black w-50 btn-block m-auto", { background: formMeta.valid }],
                  disabled: !formMeta.valid
                }, [
                  !unref(isLoading) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-white"
                  }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0623\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now"), 1)) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-black"
                  }, toDisplayString(_ctx.$t("loading...")), 1))
                ], 10, ["disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if ((_a = unref(related)) == null ? void 0 : _a.length) {
        _push(`<div class="container my-10 py-10" data-v-c70a5f6a><h1 class="color fw-bold" data-v-c70a5f6a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0628\u0647\u0629" : "Discover similar products")}</h1><div data-v-c70a5f6a>`);
        _push(ssrRenderComponent(_component_Swiper, {
          style: { "direction": "ltr" },
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
          loop: false,
          autoplay: {
            delay: 5e3,
            disableOnInteraction: true
          },
          pagination: {
            clickable: true
          },
          breakpoints: {
            "1200": {
              slidesPerView: 4,
              slidesPerGroup: 4
            },
            "992": {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            "768": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "250": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "1": {
              slidesPerView: 1,
              slidesPerGroup: 1
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(related), (product) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: product.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="product"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-c70a5f6a${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_ProductCard, {
                        product,
                        productId: product == null ? void 0 : product.productId
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "product",
                          dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
                        }, [
                          createVNode(_component_ProductCard, {
                            product,
                            productId: product == null ? void 0 : product.productId
                          }, null, 8, ["product", "productId"])
                        ], 8, ["dir"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(related), (product) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: product.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "product",
                        dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
                      }, [
                        createVNode(_component_ProductCard, {
                          product,
                          productId: product == null ? void 0 : product.productId
                        }, null, 8, ["product", "productId"])
                      ], 8, ["dir"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c70a5f6a"]]);
const _sfc_main = {
  __name: "Order",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    useRoute$1();
    let allcities = ref();
    if (locale.value === "ar") {
      [__temp, __restore] = withAsyncContext(() => useFetch(
        `${api.GetLocations}`,
        {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "ar"
          }
        },
        "$05ezSoPLSo"
      )), __temp = await __temp, __restore();
      watchEffect(() => {
      });
    } else {
      [__temp, __restore] = withAsyncContext(() => useFetch(
        `${api.GetLocations}`,
        {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "en"
          }
        },
        "$B9P2JKAxdJ"
      )), __temp = await __temp, __restore();
      watchEffect(() => {
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Order = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(allcities)) {
        _push(ssrRenderComponent(_component_Order, { allcities: unref(allcities) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Order-BX_bYxEa.mjs.map
