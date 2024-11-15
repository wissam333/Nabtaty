import { _ as __nuxt_component_2 } from './nuxt-link-lwVJCSad.mjs';
import { _ as _sfc_main$6 } from './icon-jIl0hTBH.mjs';
import { i as useI18n, r as useRoute$1, u as useRuntimeConfig, _ as _export_sfc, d as navigateTo, q as __nuxt_component_0$1$1, g as useNuxtApp } from './server.mjs';
import { u as useShoppingCartComposable } from './useShoppingCartComposable-B-3ggHa4.mjs';
import { p as princedomORMap, b as useUserInfo, c as useAccountType, d as useCurrency, u as useCart, e as useLang } from './useState-D7RI69Dw.mjs';
import { withAsyncContext, watchEffect, ref, unref, useSSRContext, withCtx, createVNode, toDisplayString, resolveComponent, mergeProps, openBlock, createBlock, createTextVNode, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useGetSiteApi } from './useGetSiteApi-DjwCSTUB.mjs';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import { u as useFetch } from './fetch-BFEkLjmZ.mjs';
import { _ as _imports_0 } from './virtual_public-BTB3BaHh.mjs';
import { object } from 'yup';
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
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-2ab2456a><div class="table-content table-responsive" id="cart-container" data-v-2ab2456a><table class="table" data-v-2ab2456a><thead class="${ssrRenderClass([_ctx.$i18n.locale == "en" ? "headen" : "headar", "tabel-title"])}" data-v-2ab2456a><tr data-v-2ab2456a><th data-v-2ab2456a>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0635\u0648\u0631\u0629" : "Photo")}</th><th data-v-2ab2456a>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-2ab2456a>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0643\u0645\u064A\u0629" : "Quantity")}</th><th data-v-2ab2456a>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0633\u0639\u0631" : "Price")}</th></tr></thead><tbody data-v-2ab2456a><!--[-->`);
      ssrRenderList(__props.cart.items, (item, index) => {
        var _a2;
        _push(`<!--[-->`);
        if (item) {
          _push(`<tr data-v-2ab2456a><td data-v-2ab2456a><img class="product-img"${ssrRenderAttr("src", `${unref(apiBase)}${(_a2 = item.item) == null ? void 0 : _a2.photos[0]}`)} alt="" width="75" height="50" data-v-2ab2456a></td><td data-v-2ab2456a>`);
          if (item.item.id) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/Product/${item.item.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<h6${ssrRenderAttr("title", ("useTranslate" in _ctx ? _ctx.useTranslate : unref(useTranslate))(item.item, "name"))} data-v-2ab2456a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale == "en" ? item.item.plant_name : item.item.plant_name)}</h6>`);
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
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/Product/${item.item.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<h6${ssrRenderAttr("title", ("useTranslate" in _ctx ? _ctx.useTranslate : unref(useTranslate))(item.item, "name"))} data-v-2ab2456a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale == "en" ? item.item.plant_name : item.item.plant_name)}</h6>`);
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
          _push(`</td><td data-v-2ab2456a>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            onClick: ($event) => increaseQty(item.id),
            icon: ["fas", "angle-up"],
            style: { "cursor": "pointer" }
          }, null, _parent));
          _push(`<span class="m-2 quantity text-black"${ssrRenderAttr("id", `quantity_${item.id}`)}${ssrRenderAttr("data-qty", item.qty)} data-v-2ab2456a>${ssrInterpolate(item.qty)}</span>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            style: { "cursor": "pointer" },
            onClick: ($event) => decreaseQty(item.id),
            icon: ["fas", "angle-down"]
          }, null, _parent));
          _push(`</td><td data-v-2ab2456a>${ssrInterpolate((item.qty * item.price).toFixed(2))} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u0631\u0647\u0645 \u0625\u0645\u0627\u0631\u0627\u062A\u064A" : "AED")}</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><tr data-v-2ab2456a><td class="py-3 text-center" colspan="1" data-v-2ab2456a><strong class="mb-0" data-v-2ab2456a>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A" : "Total Price")}</strong></td><td colspan="1" data-v-2ab2456a></td><td colspan="1" data-v-2ab2456a></td><td class="py-3" data-v-2ab2456a><strong class="mb-0" data-v-2ab2456a>${ssrInterpolate((_a = __props.cart.totalPrice) == null ? void 0 : _a.toFixed(2))} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u0631\u0647\u0645 \u0625\u0645\u0627\u0631\u0627\u062A\u064A" : "AED")}</strong></td></tr></tbody></table></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/ProductInfoTable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2ab2456a"]]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-b9be56f9><label style="${ssrRenderStyle([{ "opacity": "1" }, `color: #${__props.color}`])}"${ssrRenderAttr("for", __props.id)} class="${ssrRenderClass(` fw w-100 text-start  form-label mb-2 ${_ctx.$i18n.locale == "ar" ? "rtl" : ""}`)}" data-v-b9be56f9>${ssrInterpolate(__props.label)} `);
      if (__props.astricts == "true") {
        _push(`<span class="astricts" data-v-b9be56f9>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.astricts == "false") {
        _push(`<span class="astricts" data-v-b9be56f9></span>`);
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
            _push2(`<option value="" disabled data-v-b9be56f9${_scopeId}>${ssrInterpolate(__props.placeholder)}</option><!--[-->`);
            ssrRenderList(__props.items, (item) => {
              _push2(`<option${ssrRenderAttr("value", item.id)} style="${ssrRenderStyle(` color: #000;`)}"${ssrIncludeBooleanAttr(value && value == item.id) ? " selected" : ""} data-v-b9be56f9${_scopeId}>${ssrInterpolate(item.name)}</option>`);
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
                }, toDisplayString(item.name), 9, ["value", "selected"]);
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
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b9be56f9"]]);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "user-info" }, _attrs))} data-v-dd6d64a0><div class="row" data-v-dd6d64a0><div class="col-12" data-v-dd6d64a0><h4 class="mt-5 text-white text-center text-sm-start" data-v-dd6d64a0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" : "user Information")}</h4></div><div class="col-lg-6" data-v-dd6d64a0>`);
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
      _push(`</div><div class="col-lg-6" data-v-dd6d64a0>`);
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
      _push(`</div><div class="col-lg-6" data-v-dd6d64a0><label for="buttondisplay" class="fw-bold d-block color" style="${ssrRenderStyle({ "margin-bottom": "-16px", "color": "#003d2ec2" })}" data-v-dd6d64a0>${ssrInterpolate(_ctx.$t("City"))}</label>`);
      _push(ssrRenderComponent(_component_ElementsFormVSelect, {
        border_color: "003d2ec2",
        color: "003d2ec2",
        onChange: changeCity,
        name: "cityName",
        items: __props.allcities,
        id: "cityName",
        placeholder: _ctx.$t("City"),
        astricts: "false",
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dd6d64a0"]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["countries", "allcities"],
  setup(__props) {
    const { countries, allcities } = __props;
    defineRule("at_least_one", (value, [otherField], { form }) => {
      return !!value || !!form[otherField] || "At least one of these fields is required";
    });
    defineRule("princedom_required", (value, [otherField], { form }) => {
      const isPrincedomRequired = princedomORMap().value;
      return isPrincedomRequired && !value ? "Princedom Name is required" : true;
    });
    const { $awn } = useNuxtApp();
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const user = useUserInfo().value;
    const accountType = useAccountType();
    const currency = useCurrency();
    const cart = useCart();
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
    const schema = object({});
    const map = ref(null);
    let marker = ref({
      latitude: 33.5102,
      longitude: 36.29128
    });
    const zoom = ref(20);
    let clientGeoLocation = ref({
      latitude: 33.5102,
      longitude: 36.29128
    });
    const changeCity = (payload) => {
      allcities.forEach((city) => {
        if (city.id == payload) {
          selectedcity.value = city.id;
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
    const { locale } = useI18n();
    const handleSubmit = async (values, actions) => {
      isLoading.value = true;
      const finalOrderData = new Object();
      finalOrderData.location_id = values.cityName;
      finalOrderData.items = [];
      cart.value.items.forEach((item) => {
        let data = {
          plantId: item.product_id,
          quantity: item.qty
        };
        finalOrderData.items.push(data);
      });
      const { data: finalOrder } = await useFetch(api.createOrder, {
        baseURL: apiBase,
        method: "POST",
        body: finalOrderData
      }, "$dJe7PUhiLE");
      if (finalOrder.value && finalOrder.value.succeeded) {
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
      const _component_OrderProductInfoTable = __nuxt_component_0$2;
      const _component_VForm = resolveComponent("VForm");
      const _component_OrderUserInfo = __nuxt_component_1;
      const _component_ClientOnly = __nuxt_component_0$1$1;
      const _component_LMap = LMap;
      const _component_LTileLayer = LTileLayer;
      const _component_LMarker = LMarker;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "order nav-margin" }, _attrs))} data-v-d4519010><div class="container" data-v-d4519010><div class="title" data-v-d4519010><h1 class="d-flex align-items-center justify-content-center" data-v-d4519010><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-d4519010><span class="underline" data-v-d4519010>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0637\u0644\u0628" : "Checkout")}</span></h1></div><div class="row" data-v-d4519010><div class="col-md-12" data-v-d4519010><h4 class="my-3 text-center text-white text-sm-start" data-v-d4519010>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C" : "Product Information")}</h4>`);
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
            _push2(`<div data-v-d4519010${_scopeId}>`);
            if (unref(hasError)) {
              _push2(`<div class="error-messages mb-3" data-v-d4519010${_scopeId}><div class="alert alert-danger text-center" data-v-d4519010${_scopeId}><ul class="list-unstyled mb-0" data-v-d4519010${_scopeId}><!--[-->`);
              ssrRenderList(unref(errorMessage), (error, index) => {
                _push2(`<li data-v-d4519010${_scopeId}>${ssrInterpolate(error)}</li>`);
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
            _push2(`<div style="${ssrRenderStyle({ "height": "50vh", "width": "100%", "margin": "auto", "z-index": "10" })}" data-v-d4519010${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div><div class="col-md-12 form-group mt-4 d-flex justify-content-center justify-content-sm-start" data-v-d4519010${_scopeId}><button type="submit" value="Login" class="${ssrRenderClass([{ background: formMeta.valid }, "background btn px-10 py-2 text-black w-50 btn-block m-auto"])}" data-v-d4519010${_scopeId}>`);
            if (!unref(isLoading)) {
              _push2(`<span class="text-white" data-v-d4519010${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0623\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now")}</span>`);
            } else {
              _push2(`<span class="text-black" data-v-d4519010${_scopeId}>${ssrInterpolate(_ctx.$t("loading..."))}</span>`);
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
              createVNode("div", { style: { "height": "50vh", "width": "100%", "margin": "auto", "z-index": "10" } }, [
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    createVNode(_component_LMap, {
                      ref_key: "map",
                      ref: map,
                      zoom: unref(zoom),
                      center: [
                        unref(clientGeoLocation).latitude,
                        unref(clientGeoLocation).longitude
                      ],
                      "use-global-leaflet": false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_LTileLayer, {
                          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                          attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                          "layer-type": "base",
                          name: "OpenStreetMap"
                        }),
                        createVNode(_component_LMarker, {
                          "lat-lng": [unref(marker).latitude, unref(marker).longitude]
                        }, null, 8, ["lat-lng"])
                      ]),
                      _: 1
                    }, 8, ["zoom", "center"])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "col-md-12 form-group mt-4 d-flex justify-content-center justify-content-sm-start" }, [
                createVNode("button", {
                  type: "submit",
                  value: "Login",
                  class: ["background btn px-10 py-2 text-black w-50 btn-block m-auto", { background: formMeta.valid }]
                }, [
                  !unref(isLoading) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-white"
                  }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0623\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now"), 1)) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-black"
                  }, toDisplayString(_ctx.$t("loading...")), 1))
                ], 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4519010"]]);
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
    [__temp, __restore] = withAsyncContext(() => useGetSiteApi().GetAll(`${api.GetMyInfo}`)), __temp = await __temp, __restore();
    watchEffect(() => {
    });
    let allcities = ref();
    if (locale.value === "ar") {
      [__temp, __restore] = withAsyncContext(() => useFetch(
        `${api.GetLocations}`,
        {
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
//# sourceMappingURL=Order-C3xTH1Lu.mjs.map
