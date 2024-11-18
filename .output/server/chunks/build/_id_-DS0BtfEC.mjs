import { _ as __nuxt_component_0 } from './Spinner-BezqYXW-.mjs';
import { _ as _sfc_main$2 } from './icon-jIl0hTBH.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import __nuxt_component_2$1 from './Icon-Bn_9PI8F.mjs';
import { B as BaseStyle, _ as _export_sfc, u as useI18n, r as useRoute$1, g as useRouter$1, a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { useSSRContext, withAsyncContext, ref, watchEffect, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, onUnmounted, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createElementVNode, toHandlers, resolveDynamicComponent, createCommentVNode, resolveDirective, withDirectives, Transition } from 'vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { focus, getFirstFocusableElement, getLastFocusableElement, isFocusableElement, createElement, getSelection, clearSelection, find, getAttribute, findSingle, removeClass, addClass, setAttribute, unblockBodyScroll, blockBodyScroll } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { isNotEmpty, isEmpty, localeComparator, sort } from '@primeuix/utils/object';
import { B as BaseDirective, s as script$9, a as script$3$2, R as Ripple, b as script$2$2, c as script$4$1, d as script$5$1 } from './index-wkK3NRtu.mjs';
import { s as script$a, U as UniqueComponentId } from './index-DlmtoEba.mjs';
import { s as script$8 } from './index-CfpEh06J.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_5 } from './ProductCard-NAIYWLLA.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { a as useAuth, e as useUserInfo, f as useMainToken } from './useState-4PtMRSTy.mjs';
import { u as useGetSiteApi } from './useGetSiteApi-BUAcv6Dp.mjs';
import { _ as _imports_1 } from './virtual_public-DdiQcbvu.mjs';
import '@fortawesome/fontawesome-svg-core';
import './index-DXpYusml.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@primeuix/utils/uuid';
import './nuxt-link-FZwR9qik.mjs';
import './virtual_public-C_LRNEiw.mjs';

var FocusTrapStyle = BaseStyle.extend({
  name: "focustrap-directive"
});
var BaseFocusTrap = BaseDirective.extend({
  style: FocusTrapStyle
});
function _typeof$4(o) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$4(o);
}
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$4(e, r, t) {
  return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$4(t) {
  var i = _toPrimitive$4(t, "string");
  return "symbol" == _typeof$4(i) ? i : i + "";
}
function _toPrimitive$4(t, r) {
  if ("object" != _typeof$4(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$4(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var FocusTrap = BaseFocusTrap.extend("focustrap", {
  mounted: function mounted(el, binding) {
    var _ref = binding.value || {}, disabled = _ref.disabled;
    if (!disabled) {
      this.createHiddenFocusableElements(el, binding);
      this.bind(el, binding);
      this.autoElementFocus(el, binding);
    }
    el.setAttribute("data-pd-focustrap", true);
    this.$el = el;
  },
  updated: function updated(el, binding) {
    var _ref2 = binding.value || {}, disabled = _ref2.disabled;
    disabled && this.unbind(el);
  },
  unmounted: function unmounted(el) {
    this.unbind(el);
  },
  methods: {
    getComputedSelector: function getComputedSelector(selector) {
      return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(selector !== null && selector !== void 0 ? selector : "");
    },
    bind: function bind(el, binding) {
      var _this = this;
      var _ref3 = binding.value || {}, onFocusIn = _ref3.onFocusIn, onFocusOut = _ref3.onFocusOut;
      el.$_pfocustrap_mutationobserver = new MutationObserver(function(mutationList) {
        mutationList.forEach(function(mutation) {
          if (mutation.type === "childList" && !el.contains((void 0).activeElement)) {
            var _findNextFocusableElement = function findNextFocusableElement(_el) {
              var focusableElement = isFocusableElement(_el) ? isFocusableElement(_el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) ? _el : getFirstFocusableElement(el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) : getFirstFocusableElement(_el);
              return isNotEmpty(focusableElement) ? focusableElement : _el.nextSibling && _findNextFocusableElement(_el.nextSibling);
            };
            focus(_findNextFocusableElement(mutation.nextSibling));
          }
        });
      });
      el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_mutationobserver.observe(el, {
        childList: true
      });
      el.$_pfocustrap_focusinlistener = function(event) {
        return onFocusIn && onFocusIn(event);
      };
      el.$_pfocustrap_focusoutlistener = function(event) {
        return onFocusOut && onFocusOut(event);
      };
      el.addEventListener("focusin", el.$_pfocustrap_focusinlistener);
      el.addEventListener("focusout", el.$_pfocustrap_focusoutlistener);
    },
    unbind: function unbind(el) {
      el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_focusinlistener && el.removeEventListener("focusin", el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
      el.$_pfocustrap_focusoutlistener && el.removeEventListener("focusout", el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
    },
    autoFocus: function autoFocus(options) {
      this.autoElementFocus(this.$el, {
        value: _objectSpread$4(_objectSpread$4({}, options), {}, {
          autoFocus: true
        })
      });
    },
    autoElementFocus: function autoElementFocus(el, binding) {
      var _ref4 = binding.value || {}, _ref4$autoFocusSelect = _ref4.autoFocusSelector, autoFocusSelector = _ref4$autoFocusSelect === void 0 ? "" : _ref4$autoFocusSelect, _ref4$firstFocusableS = _ref4.firstFocusableSelector, firstFocusableSelector = _ref4$firstFocusableS === void 0 ? "" : _ref4$firstFocusableS, _ref4$autoFocus = _ref4.autoFocus, autoFocus2 = _ref4$autoFocus === void 0 ? false : _ref4$autoFocus;
      var focusableElement = getFirstFocusableElement(el, "[autofocus]".concat(this.getComputedSelector(autoFocusSelector)));
      autoFocus2 && !focusableElement && (focusableElement = getFirstFocusableElement(el, this.getComputedSelector(firstFocusableSelector)));
      focus(focusableElement);
    },
    onFirstHiddenElementFocus: function onFirstHiddenElementFocus(event) {
      var _this$$el;
      var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
      var focusableElement = relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement || !((_this$$el = this.$el) !== null && _this$$el !== void 0 && _this$$el.contains(relatedTarget)) ? getFirstFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_lasthiddenfocusableelement;
      focus(focusableElement);
    },
    onLastHiddenElementFocus: function onLastHiddenElementFocus(event) {
      var _this$$el2;
      var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
      var focusableElement = relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement || !((_this$$el2 = this.$el) !== null && _this$$el2 !== void 0 && _this$$el2.contains(relatedTarget)) ? getLastFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_firsthiddenfocusableelement;
      focus(focusableElement);
    },
    createHiddenFocusableElements: function createHiddenFocusableElements(el, binding) {
      var _this2 = this;
      var _ref5 = binding.value || {}, _ref5$tabIndex = _ref5.tabIndex, tabIndex = _ref5$tabIndex === void 0 ? 0 : _ref5$tabIndex, _ref5$firstFocusableS = _ref5.firstFocusableSelector, firstFocusableSelector = _ref5$firstFocusableS === void 0 ? "" : _ref5$firstFocusableS, _ref5$lastFocusableSe = _ref5.lastFocusableSelector, lastFocusableSelector = _ref5$lastFocusableSe === void 0 ? "" : _ref5$lastFocusableSe;
      var createFocusableElement = function createFocusableElement2(onFocus) {
        return createElement("span", {
          "class": "p-hidden-accessible p-hidden-focusable",
          tabIndex,
          role: "presentation",
          "aria-hidden": true,
          "data-p-hidden-accessible": true,
          "data-p-hidden-focusable": true,
          onFocus: onFocus === null || onFocus === void 0 ? void 0 : onFocus.bind(_this2)
        });
      };
      var firstFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
      var lastFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
      firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
      firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
      firstFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
      lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
      lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
      lastFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
      el.prepend(firstFocusableElement);
      el.append(lastFocusableElement);
    }
  }
});
var theme$1 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-galleria {\n    overflow: hidden;\n    border-style: solid;\n    border-width: ".concat(dt("galleria.border.width"), ";\n    border-color: ").concat(dt("galleria.border.color"), ";\n    border-radius: ").concat(dt("galleria.border.radius"), ";\n}\n\n.p-galleria-content {\n    display: flex;\n    flex-direction: column;\n}\n\n.p-galleria-items-container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.p-galleria-items {\n    position: relative;\n    display: flex;\n    height: 100%;\n}\n\n.p-galleria-nav-button {\n    position: absolute;\n    top: 50%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    background: ").concat(dt("galleria.nav.button.background"), ";\n    color: ").concat(dt("galleria.nav.button.color"), ";\n    width: ").concat(dt("galleria.nav.button.size"), ";\n    height: ").concat(dt("galleria.nav.button.size"), ";\n    transition: background ").concat(dt("galleria.transition.duration"), ", color ").concat(dt("galleria.transition.duration"), ", outline-color ").concat(dt("galleria.transition.duration"), ", box-shadow ").concat(dt("galleria.transition.duration"), ";\n    margin: calc(-1 * calc(").concat(dt("galleria.nav.button.size"), ") / 2) ").concat(dt("galleria.nav.button.gutter"), " 0 ").concat(dt("galleria.nav.button.gutter"), ";\n    padding: 0;\n    user-select: none;\n    border: 0 none;\n    cursor: pointer;\n    outline-color: transparent;\n}\n\n.p-galleria-nav-button:not(.p-disabled):hover {\n    background: ").concat(dt("galleria.nav.button.hover.background"), ";\n    color: ").concat(dt("galleria.nav.button.hover.color"), ";\n}\n\n.p-galleria-nav-button:not(.p-disabled):focus-visible {\n    box-shadow: ").concat(dt("galleria.nav.button.focus.ring.shadow"), ";\n    outline: ").concat(dt("galleria.nav.button.focus.ring.width"), " ").concat(dt("galleria.nav.button.focus.ring.style"), " ").concat(dt("galleria.nav.button.focus.ring.color"), ";\n    outline-offset: ").concat(dt("galleria.nav.button.focus.ring.offset"), ";\n}\n\n.p-galleria-next-icon,\n.p-galleria-prev-icon {\n    font-size: ").concat(dt("galleria.nav.icon.size"), ";\n    width: ").concat(dt("galleria.nav.icon.size"), ";\n    height: ").concat(dt("galleria.nav.icon.size"), ";\n}\n\n.p-galleria-prev-button {\n    border-radius: ").concat(dt("galleria.nav.button.prev.border.radius"), ";\n    left: 0;\n}\n\n.p-galleria-next-button {\n    border-radius: ").concat(dt("galleria.nav.button.next.border.radius"), ";\n    right: 0;\n}\n\n.p-galleria-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n.p-galleria-hover-navigators .p-galleria-nav-button {\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity ").concat(dt("galleria.transition.duration"), " ease-in-out;\n}\n\n.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {\n    pointer-events: all;\n    opacity: 1;\n}\n\n.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {\n    pointer-events: none;\n}\n\n.p-galleria-caption {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: ").concat(dt("galleria.caption.background"), ";\n    color: ").concat(dt("galleria.caption.color"), ";\n    padding: ").concat(dt("galleria.caption.padding"), ";\n}\n\n.p-galleria-thumbnails {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    flex-shrink: 0;\n}\n\n.p-galleria-thumbnail-nav-button {\n    align-self: center;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n    margin: 0 ").concat(dt("galleria.thumbnail.nav.button.gutter"), ";\n    padding: 0;\n    border: none;\n    user-select: none;\n    cursor: pointer;\n    background: transparent;\n    color: ").concat(dt("galleria.thumbnail.nav.button.color"), ";\n    width: ").concat(dt("galleria.thumbnail.nav.button.size"), ";\n    height: ").concat(dt("galleria.thumbnail.nav.button.size"), ";\n    transition: background ").concat(dt("galleria.transition.duration"), ", color ").concat(dt("galleria.transition.duration"), ", outline-color ").concat(dt("galleria.transition.duration"), ";\n    outline-color: transparent;\n    border-radius: ").concat(dt("galleria.thumbnail.nav.button.border.radius"), ";\n}\n\n.p-galleria-thumbnail-nav-button:hover {\n    background: ").concat(dt("galleria.thumbnail.nav.button.hover.background"), ";\n    color: ").concat(dt("galleria.thumbnail.nav.button.hover.color"), ";\n}\n\n.p-galleria-thumbnail-nav-button:focus-visible {\n    box-shadow: ").concat(dt("galleria.thumbnail.nav.button.focus.ring.shadow"), ";\n    outline: ").concat(dt("galleria.thumbnail.nav.button.focus.ring.width"), " ").concat(dt("galleria.thumbnail.nav.button.focus.ring.style"), " ").concat(dt("galleria.thumbnail.nav.button.focus.ring.color"), ";\n    outline-offset: ").concat(dt("galleria.thumbnail.nav.button.focus.ring.offset"), ";\n}\n\n.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,\n.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {\n    font-size: ").concat(dt("galleria.thumbnail.nav.button.icon.size"), ";\n    width: ").concat(dt("galleria.thumbnail.nav.button.icon.size"), ";\n    height: ").concat(dt("galleria.thumbnail.nav.button.icon.size"), ";\n}\n\n.p-galleria-thumbnails-content {\n    display: flex;\n    flex-direction: row;\n    background: ").concat(dt("galleria.thumbnails.content.background"), ";\n    padding: ").concat(dt("galleria.thumbnails.content.padding"), ";\n}\n\n.p-galleria-thumbnails-viewport {\n    overflow: hidden;\n    width: 100%;\n}\n\n.p-galleria-thumbnail-items {\n    display: flex;\n}\n\n.p-galleria-thumbnail-item {\n    overflow: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    opacity: 0.5;\n}\n\n.p-galleria-thumbnail {\n    outline-color: transparent;\n}\n\n.p-galleria-thumbnail-item:hover {\n    opacity: 1;\n    transition: opacity 0.3s;\n}\n\n.p-galleria-thumbnail-item-current {\n    opacity: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-content,\n.p-galleria-thumbnails-right .p-galleria-content {\n    flex-direction: row;\n}\n\n.p-galleria-thumbnails-left .p-galleria-items-container,\n.p-galleria-thumbnails-right .p-galleria-items-container {\n    flex-direction: row;\n}\n\n.p-galleria-thumbnails-left .p-galleria-items-container,\n.p-galleria-thumbnails-top .p-galleria-items-container {\n    order: 2;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnails,\n.p-galleria-thumbnails-top .p-galleria-thumbnails {\n    order: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnails-content,\n.p-galleria-thumbnails-right .p-galleria-thumbnails-content {\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnail-items,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-items {\n    flex-direction: column;\n    height: 100%;\n}\n\n.p-galleria-indicator-list {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: ").concat(dt("galleria.indicator.list.padding"), ";\n    gap: ").concat(dt("galleria.indicator.list.gap"), ";\n    margin: 0;\n    list-style: none;\n}\n\n.p-galleria-indicator-button {\n    display: inline-flex;\n    align-items: center;\n    background: ").concat(dt("galleria.indicator.button.background"), ";\n    width: ").concat(dt("galleria.indicator.button.width"), ";\n    height: ").concat(dt("galleria.indicator.button.height"), ";\n    transition: background ").concat(dt("galleria.transition.duration"), ", color ").concat(dt("galleria.transition.duration"), ", outline-color ").concat(dt("galleria.transition.duration"), ", box-shadow ").concat(dt("galleria.transition.duration"), ";\n    outline-color: transparent;\n    border-radius: ").concat(dt("galleria.indicator.button.border.radius"), ";\n    margin: 0;\n    padding: 0;\n    border: none;\n    user-select: none;\n    cursor: pointer;\n}\n\n.p-galleria-indicator-button:hover {\n    background: ").concat(dt("galleria.indicator.button.hover.background"), ";\n}\n\n.p-galleria-indicator-button:focus-visible {\n    box-shadow: ").concat(dt("galleria.indicator.button.focus.ring.shadow"), ";\n    outline: ").concat(dt("galleria.indicator.button.focus.ring.width"), " ").concat(dt("galleria.indicator.button.focus.ring.style"), " ").concat(dt("galleria.indicator.button.focus.ring.color"), ";\n    outline-offset: ").concat(dt("galleria.indicator.button.focus.ring.offset"), ";\n}\n\n.p-galleria-indicator-active .p-galleria-indicator-button {\n    background: ").concat(dt("galleria.indicator.button.active.background"), ";\n}\n\n.p-galleria-indicators-left .p-galleria-items-container,\n.p-galleria-indicators-right .p-galleria-items-container {\n    flex-direction: row;\n    align-items: center;\n}\n\n.p-galleria-indicators-left .p-galleria-items,\n.p-galleria-indicators-top .p-galleria-items {\n    order: 2;\n}\n\n.p-galleria-indicators-left .p-galleria-indicator-list,\n.p-galleria-indicators-top .p-galleria-indicator-list {\n    order: 1;\n}\n\n.p-galleria-indicators-left .p-galleria-indicator-list,\n.p-galleria-indicators-right .p-galleria-indicator-list {\n    flex-direction: column;\n}\n\n.p-galleria-inset-indicators .p-galleria-indicator-list {\n    position: absolute;\n    display: flex;\n    z-index: 1;\n    background: ").concat(dt("galleria.inset.indicator.list.background"), ";\n}\n\n.p-galleria-inset-indicators .p-galleria-indicator-button {\n    background: ").concat(dt("galleria.inset.indicator.button.background"), ";\n}\n\n.p-galleria-inset-indicators .p-galleria-indicator-button:hover {\n    background: ").concat(dt("galleria.inset.indicator.button.hover.background"), ";\n}\n\n.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {\n    background: ").concat(dt("galleria.inset.indicator.button.active.background"), ";\n}\n\n.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {\n    top: 0;\n    left: 0;\n    width: 100%;\n    align-items: flex-start;\n}\n\n.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {\n    right: 0;\n    top: 0;\n    height: 100%;\n    align-items: flex-end;\n}\n\n.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    align-items: flex-end;\n}\n\n.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {\n    left: 0;\n    top: 0;\n    height: 100%;\n    align-items: flex-start;\n}\n\n.p-galleria-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-galleria-close-button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    margin: ").concat(dt("galleria.close.button.gutter"), ";\n    background: ").concat(dt("galleria.close.button.background"), ";\n    color: ").concat(dt("galleria.close.button.color"), ";\n    width: ").concat(dt("galleria.close.button.size"), ";\n    height: ").concat(dt("galleria.close.button.size"), ";\n    padding: 0;\n    border: none;\n    user-select: none;\n    cursor: pointer;\n    border-radius: ").concat(dt("galleria.close.button.border.radius"), ";\n    outline-color: transparent;\n    transition: background ").concat(dt("galleria.transition.duration"), ", color ").concat(dt("galleria.transition.duration"), ", outline-color ").concat(dt("galleria.transition.duration"), ";\n}\n\n.p-galleria-close-icon {\n    font-size: ").concat(dt("galleria.close.button.icon.size"), ";\n    width: ").concat(dt("galleria.close.button.icon.size"), ";\n    height: ").concat(dt("galleria.close.button.icon.size"), ";\n}\n\n.p-galleria-close-button:hover {\n    background: ").concat(dt("galleria.close.button.hover.background"), ";\n    color: ").concat(dt("galleria.close.button.hover.color"), ";\n}\n\n.p-galleria-close-button:focus-visible {\n    box-shadow: ").concat(dt("galleria.close.button.focus.ring.shadow"), ";\n    outline: ").concat(dt("galleria.close.button.focus.ring.width"), " ").concat(dt("galleria.close.button.focus.ring.style"), " ").concat(dt("galleria.close.button.focus.ring.color"), ";\n    outline-offset: ").concat(dt("galleria.close.button.focus.ring.offset"), ";\n}\n\n.p-galleria-mask .p-galleria-nav-button {\n    position: fixed;\n    top: 50%;\n}\n\n.p-galleria-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-galleria-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.p-galleria-enter-from,\n.p-galleria-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n\n.p-galleria-enter-active .p-galleria-nav-button {\n    opacity: 0;\n}\n\n.p-items-hidden .p-galleria-thumbnail-item {\n    visibility: hidden;\n}\n\n.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {\n    visibility: visible;\n}\n");
};
var classes$1 = {
  mask: "p-galleria-mask p-overlay-mask p-overlay-mask-enter",
  root: function root(_ref2) {
    var instance = _ref2.instance;
    var thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass("p-galleria-thumbnails", instance.$attrs.thumbnailsPosition);
    var indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass("p-galleria-indicators", instance.$attrs.indicatorsPosition);
    return ["p-galleria p-component", {
      "p-galleria-fullscreen": instance.$attrs.fullScreen,
      "p-galleria-inset-indicators": instance.$attrs.showIndicatorsOnItem,
      "p-galleria-hover-navigators": instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: "p-galleria-close-button",
  closeIcon: "p-galleria-close-icon",
  header: "p-galleria-header",
  content: "p-galleria-content",
  footer: "p-galleria-footer",
  itemsContainer: "p-galleria-items-container",
  items: "p-galleria-items",
  prevButton: function prevButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-galleria-prev-button p-galleria-nav-button", {
      "p-disabled": instance.isNavBackwardDisabled()
    }];
  },
  prevIcon: "p-galleria-prev-icon",
  item: "p-galleria-item",
  nextButton: function nextButton(_ref4) {
    var instance = _ref4.instance;
    return ["p-galleria-next-button p-galleria-nav-button", {
      "p-disabled": instance.isNavForwardDisabled()
    }];
  },
  nextIcon: "p-galleria-next-icon",
  caption: "p-galleria-caption",
  indicatorList: "p-galleria-indicator-list",
  indicator: function indicator(_ref5) {
    var instance = _ref5.instance, index = _ref5.index;
    return ["p-galleria-indicator", {
      "p-galleria-indicator-active": instance.isIndicatorItemActive(index)
    }];
  },
  indicatorButton: "p-galleria-indicator-button",
  thumbnails: "p-galleria-thumbnails",
  thumbnailContent: "p-galleria-thumbnails-content",
  thumbnailPrevButton: function thumbnailPrevButton(_ref6) {
    var instance = _ref6.instance;
    return ["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button", {
      "p-disabled": instance.isNavBackwardDisabled()
    }];
  },
  thumbnailPrevIcon: "p-galleria-thumbnail-prev-icon",
  thumbnailsViewport: "p-galleria-thumbnails-viewport",
  thumbnailItems: "p-galleria-thumbnail-items",
  thumbnailItem: function thumbnailItem(_ref7) {
    var instance = _ref7.instance, index = _ref7.index, activeIndex2 = _ref7.activeIndex;
    return ["p-galleria-thumbnail-item", {
      "p-galleria-thumbnail-item-current": activeIndex2 === index,
      "p-galleria-thumbnail-item-active": instance.isItemActive(index),
      "p-galleria-thumbnail-item-start": instance.firstItemAciveIndex() === index,
      "p-galleria-thumbnail-item-end": instance.lastItemActiveIndex() === index
    }];
  },
  thumbnail: "p-galleria-thumbnail",
  thumbnailNextButton: function thumbnailNextButton(_ref8) {
    var instance = _ref8.instance;
    return ["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button", {
      "p-disabled": instance.isNavForwardDisabled()
    }];
  },
  thumbnailNextIcon: "p-galleria-thumbnail-next-icon"
};
var GalleriaStyle = BaseStyle.extend({
  name: "galleria",
  theme: theme$1,
  classes: classes$1
});
var script$7 = {
  name: "ChevronLeftIcon",
  "extends": script$8
};
var _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$5 = [_hoisted_1$6];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$5, 16);
}
script$7.render = render$6;
var script$6 = {
  name: "ChevronUpIcon",
  "extends": script$8
};
var _hoisted_1$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$4 = [_hoisted_1$5];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$4, 16);
}
script$6.render = render$5;
var script$4 = {
  name: "BaseGalleria",
  "extends": script$a,
  props: {
    id: {
      type: String,
      "default": null
    },
    value: {
      type: Array,
      "default": null
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    fullScreen: {
      type: Boolean,
      "default": false
    },
    visible: {
      type: Boolean,
      "default": false
    },
    numVisible: {
      type: Number,
      "default": 3
    },
    responsiveOptions: {
      type: Array,
      "default": null
    },
    showItemNavigators: {
      type: Boolean,
      "default": false
    },
    showThumbnailNavigators: {
      type: Boolean,
      "default": true
    },
    showItemNavigatorsOnHover: {
      type: Boolean,
      "default": false
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      "default": false
    },
    circular: {
      type: Boolean,
      "default": false
    },
    autoPlay: {
      type: Boolean,
      "default": false
    },
    transitionInterval: {
      type: Number,
      "default": 4e3
    },
    showThumbnails: {
      type: Boolean,
      "default": true
    },
    thumbnailsPosition: {
      type: String,
      "default": "bottom"
    },
    verticalThumbnailViewPortHeight: {
      type: String,
      "default": "300px"
    },
    showIndicators: {
      type: Boolean,
      "default": false
    },
    showIndicatorsOnItem: {
      type: Boolean,
      "default": false
    },
    indicatorsPosition: {
      type: String,
      "default": "bottom"
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    maskClass: {
      type: String,
      "default": null
    },
    containerStyle: {
      type: null,
      "default": null
    },
    containerClass: {
      type: null,
      "default": null
    },
    containerProps: {
      type: null,
      "default": null
    },
    prevButtonProps: {
      type: null,
      "default": null
    },
    nextButtonProps: {
      type: null,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaRoledescription: {
      type: String,
      "default": null
    }
  },
  style: GalleriaStyle,
  provide: function provide() {
    return {
      $pcGalleria: this,
      $parentInstance: this
    };
  }
};
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r))
    return _arrayLikeToArray$1(r);
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
var script$3$1 = {
  name: "GalleriaItem",
  hostName: "Galleria",
  "extends": script$a,
  emits: ["start-slideshow", "stop-slideshow", "update:activeIndex"],
  props: {
    circular: {
      type: Boolean,
      "default": false
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    value: {
      type: Array,
      "default": null
    },
    showItemNavigators: {
      type: Boolean,
      "default": true
    },
    showIndicators: {
      type: Boolean,
      "default": true
    },
    slideShowActive: {
      type: Boolean,
      "default": true
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      "default": true
    },
    autoPlay: {
      type: Boolean,
      "default": false
    },
    templates: {
      type: null,
      "default": null
    },
    id: {
      type: String,
      "default": null
    }
  },
  mounted: function mounted2() {
    if (this.autoPlay) {
      this.$emit("start-slideshow");
    }
  },
  methods: {
    getIndicatorPTOptions: function getIndicatorPTOptions(index) {
      return {
        context: {
          highlighted: this.activeIndex === index
        }
      };
    },
    next: function next() {
      var nextItemIndex = this.activeIndex + 1;
      var activeIndex2 = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
    },
    prev: function prev() {
      var prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
      var activeIndex2 = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
    },
    stopSlideShow: function stopSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.$emit("stop-slideshow");
      }
    },
    navBackward: function navBackward(e) {
      this.stopSlideShow();
      this.prev();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward(e) {
      this.stopSlideShow();
      this.next();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    },
    onIndicatorClick: function onIndicatorClick(index) {
      this.stopSlideShow();
      this.$emit("update:activeIndex", index);
    },
    onIndicatorMouseEnter: function onIndicatorMouseEnter(index) {
      if (this.changeItemOnIndicatorHover) {
        this.stopSlideShow();
        this.$emit("update:activeIndex", index);
      }
    },
    onIndicatorKeyDown: function onIndicatorKeyDown(event, index) {
      switch (event.code) {
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.stopSlideShow();
          this.$emit("update:activeIndex", index);
          event.preventDefault();
          break;
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey();
          event.preventDefault();
          break;
        case "End":
          this.onEndKey();
          event.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
        case "ArrowDown":
        case "ArrowUp":
        case "PageUp":
        case "PageDown":
          event.preventDefault();
          break;
      }
    },
    onRightKey: function onRightKey() {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 + 1 === indicators.length ? indicators.length - 1 : activeIndex2 + 1);
    },
    onLeftKey: function onLeftKey() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 - 1 <= 0 ? 0 : activeIndex2 - 1);
    },
    onHomeKey: function onHomeKey() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, 0);
    },
    onEndKey: function onEndKey() {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, indicators.length - 1);
    },
    onTabKey: function onTabKey() {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var highlightedIndex = indicators.findIndex(function(ind) {
        return getAttribute(ind, "data-p-active") === true;
      });
      var activeIndicator = findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');
      var activeIndex2 = indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
      indicators[activeIndex2].children[0].tabIndex = "-1";
      indicators[highlightedIndex].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function findFocusedIndicatorIndex() {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndicator = findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');
      return indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
    },
    changedFocusedIndicator: function changedFocusedIndicator(prevInd, nextInd) {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      indicators[prevInd].children[0].tabIndex = "-1";
      indicators[nextInd].children[0].tabIndex = "0";
      indicators[nextInd].children[0].focus();
    },
    isIndicatorItemActive: function isIndicatorItemActive(index) {
      return this.activeIndex === index;
    },
    isNavBackwardDisabled: function isNavBackwardDisabled() {
      return !this.circular && this.activeIndex === 0;
    },
    isNavForwardDisabled: function isNavForwardDisabled() {
      return !this.circular && this.activeIndex === this.value.length - 1;
    },
    ariaSlideNumber: function ariaSlideNumber(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value) : void 0;
    },
    ariaPageLabel: function ariaPageLabel(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  computed: {
    activeItem: function activeItem() {
      return this.value[this.activeIndex];
    },
    ariaSlideLabel: function ariaSlideLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
    }
  },
  components: {
    ChevronLeftIcon: script$7,
    ChevronRightIcon: script$3$2
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$3 = ["disabled"];
var _hoisted_2$2$1 = ["id", "aria-label", "aria-roledescription"];
var _hoisted_3$2 = ["disabled"];
var _hoisted_4$1 = ["aria-label", "aria-selected", "aria-controls", "onClick", "onMouseenter", "onKeydown", "data-p-active"];
var _hoisted_5 = ["tabindex"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("itemsContainer")
  }, _ctx.ptm("itemsContainer")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("items")
  }, _ctx.ptm("items")), [$props.showItemNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    type: "button",
    "class": _ctx.cx("prevButton"),
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.navBackward($event);
    }),
    disabled: $options.isNavBackwardDisabled()
  }, _ctx.ptm("prevButton"), {
    "data-pc-group-section": "itemnavigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.previousitemicon || "ChevronLeftIcon"), mergeProps({
    "class": _ctx.cx("prevIcon")
  }, _ctx.ptm("prevIcon")), null, 16, ["class"]))], 16, _hoisted_1$3)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    id: $props.id + "_item_" + $props.activeIndex,
    "class": _ctx.cx("item"),
    role: "group",
    "aria-label": $options.ariaSlideNumber($props.activeIndex + 1),
    "aria-roledescription": $options.ariaSlideLabel
  }, _ctx.ptm("item")), [$props.templates.item ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
    key: 0,
    item: $options.activeItem
  }, null, 8, ["item"])) : createCommentVNode("", true)], 16, _hoisted_2$2$1), $props.showItemNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    type: "button",
    "class": _ctx.cx("nextButton"),
    onClick: _cache[1] || (_cache[1] = function($event) {
      return $options.navForward($event);
    }),
    disabled: $options.isNavForwardDisabled()
  }, _ctx.ptm("nextButton"), {
    "data-pc-group-section": "itemnavigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.nextitemicon || "ChevronRightIcon"), mergeProps({
    "class": _ctx.cx("nextIcon")
  }, _ctx.ptm("nextIcon")), null, 16, ["class"]))], 16, _hoisted_3$2)), [[_directive_ripple]]) : createCommentVNode("", true), $props.templates["caption"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 2,
    "class": _ctx.cx("caption")
  }, _ctx.ptm("caption")), [$props.templates.caption ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.caption), {
    key: 0,
    item: $options.activeItem
  }, null, 8, ["item"])) : createCommentVNode("", true)], 16)) : createCommentVNode("", true)], 16), $props.showIndicators ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 0,
    ref: "indicatorContent",
    "class": _ctx.cx("indicatorList")
  }, _ctx.ptm("indicatorList")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(item, index) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "p-galleria-indicator-".concat(index),
      "class": _ctx.cx("indicator", {
        index
      }),
      "aria-label": $options.ariaPageLabel(index + 1),
      "aria-selected": $props.activeIndex === index,
      "aria-controls": $props.id + "_item_" + index,
      onClick: function onClick($event) {
        return $options.onIndicatorClick(index);
      },
      onMouseenter: function onMouseenter($event) {
        return $options.onIndicatorMouseEnter(index);
      },
      onKeydown: function onKeydown($event) {
        return $options.onIndicatorKeyDown($event, index);
      },
      ref_for: true
    }, _ctx.ptm("indicator", $options.getIndicatorPTOptions(index)), {
      "data-p-active": $options.isIndicatorItemActive(index)
    }), [!$props.templates["indicator"] ? (openBlock(), createElementBlock("button", mergeProps({
      key: 0,
      type: "button",
      tabindex: $props.activeIndex === index ? "0" : "-1",
      "class": _ctx.cx("indicatorButton"),
      ref_for: true
    }, _ctx.ptm("indicatorButton", $options.getIndicatorPTOptions(index))), null, 16, _hoisted_5)) : createCommentVNode("", true), $props.templates.indicator ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.indicator), {
      key: 1,
      index
    }, null, 8, ["index"])) : createCommentVNode("", true)], 16, _hoisted_4$1);
  }), 128))], 16)) : createCommentVNode("", true)], 16);
}
script$3$1.render = render$3;
function _toConsumableArray$2(r) {
  return _arrayWithoutHoles$2(r) || _iterableToArray$2(r) || _unsupportedIterableToArray$2(r) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray$2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
  }
}
function _iterableToArray$2(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}
function _arrayWithoutHoles$2(r) {
  if (Array.isArray(r))
    return _arrayLikeToArray$2(r);
}
function _arrayLikeToArray$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
var script$2$1 = {
  name: "GalleriaThumbnails",
  hostName: "Galleria",
  "extends": script$a,
  emits: ["stop-slideshow", "update:activeIndex"],
  props: {
    containerId: {
      type: String,
      "default": null
    },
    value: {
      type: Array,
      "default": null
    },
    numVisible: {
      type: Number,
      "default": 3
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    isVertical: {
      type: Boolean,
      "default": false
    },
    slideShowActive: {
      type: Boolean,
      "default": false
    },
    circular: {
      type: Boolean,
      "default": false
    },
    responsiveOptions: {
      type: Array,
      "default": null
    },
    contentHeight: {
      type: String,
      "default": "300px"
    },
    showThumbnailNavigators: {
      type: Boolean,
      "default": true
    },
    templates: {
      type: null,
      "default": null
    },
    prevButtonProps: {
      type: null,
      "default": null
    },
    nextButtonProps: {
      type: null,
      "default": null
    }
  },
  startPos: null,
  thumbnailsStyle: null,
  sortedResponsiveOptions: null,
  data: function data() {
    return {
      d_numVisible: this.numVisible,
      d_oldNumVisible: this.numVisible,
      d_activeIndex: this.activeIndex,
      d_oldActiveItemIndex: this.activeIndex,
      totalShiftedItems: 0,
      page: 0
    };
  },
  watch: {
    numVisible: function numVisible(newValue, oldValue) {
      this.d_numVisible = newValue;
      this.d_oldNumVisible = oldValue;
    },
    activeIndex: function activeIndex(newValue, oldValue) {
      this.d_activeIndex = newValue;
      this.d_oldActiveItemIndex = oldValue;
    }
  },
  mounted: function mounted22() {
    this.createStyle();
    this.calculatePosition();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
  },
  updated: function updated2() {
    var totalShiftedItems = this.totalShiftedItems;
    if (this.d_oldNumVisible !== this.d_numVisible || this.d_oldActiveItemIndex !== this.d_activeIndex) {
      if (this.d_activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this.d_activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this.d_activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex();
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      if (this.d_oldActiveItemIndex !== this.d_activeIndex) {
        (void 0).body.setAttribute("data-p-items-hidden", "false");
        !this.isUnstyled && removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.d_oldActiveItemIndex = this.d_activeIndex;
      this.d_oldNumVisible = this.d_numVisible;
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.thumbnailsStyle) {
      this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
    }
  },
  methods: {
    step: function step(dir) {
      var totalShiftedItems = this.totalShiftedItems + dir;
      if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (dir > 0 && totalShiftedItems > 0) {
        totalShiftedItems = 0;
      }
      if (this.circular) {
        if (dir < 0 && this.value.length - 1 === this.d_activeIndex) {
          totalShiftedItems = 0;
        } else if (dir > 0 && this.d_activeIndex === 0) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        }
      }
      if (this.$refs.itemsContainer) {
        (void 0).body.setAttribute("data-p-items-hidden", "false");
        !this.isUnstyled && removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.totalShiftedItems = totalShiftedItems;
    },
    stopSlideShow: function stopSlideShow2() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.$emit("stop-slideshow");
      }
    },
    getMedianItemIndex: function getMedianItemIndex() {
      var index = Math.floor(this.d_numVisible / 2);
      return this.d_numVisible % 2 ? index : index - 1;
    },
    navBackward: function navBackward2(e) {
      this.stopSlideShow();
      var prevItemIndex = this.d_activeIndex !== 0 ? this.d_activeIndex - 1 : 0;
      var diff = prevItemIndex + this.totalShiftedItems;
      if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
        this.step(1);
      }
      var activeIndex2 = this.circular && this.d_activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward2(e) {
      this.stopSlideShow();
      var nextItemIndex = this.d_activeIndex === this.value.length - 1 ? this.value.length - 1 : this.d_activeIndex + 1;
      if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
        this.step(-1);
      }
      var activeIndex2 = this.circular && this.value.length - 1 === this.d_activeIndex ? 0 : nextItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onItemClick: function onItemClick(index) {
      this.stopSlideShow();
      var selectedItemIndex = index;
      if (selectedItemIndex !== this.d_activeIndex) {
        var diff = selectedItemIndex + this.totalShiftedItems;
        var dir = 0;
        if (selectedItemIndex < this.d_activeIndex) {
          dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
          if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
            this.step(dir);
          }
        } else {
          dir = this.getMedianItemIndex() - diff;
          if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
            this.step(dir);
          }
        }
        this.$emit("update:activeIndex", selectedItemIndex);
      }
    },
    onThumbnailKeydown: function onThumbnailKeydown(event, index) {
      if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
        this.onItemClick(index);
        event.preventDefault();
      }
      switch (event.code) {
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey();
          event.preventDefault();
          break;
        case "End":
          this.onEndKey();
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
      }
    },
    onRightKey: function onRightKey2() {
      var indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 + 1 === indicators.length ? indicators.length - 1 : activeIndex2 + 1);
    },
    onLeftKey: function onLeftKey2() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 - 1 <= 0 ? 0 : activeIndex2 - 1);
    },
    onHomeKey: function onHomeKey2() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, 0);
    },
    onEndKey: function onEndKey2() {
      var indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, indicators.length - 1);
    },
    onTabKey: function onTabKey2() {
      var indicators = _toConsumableArray$2(find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]'));
      var highlightedIndex = indicators.findIndex(function(ind) {
        return getAttribute(ind, "data-p-active") === true;
      });
      var activeIndicator = findSingle(this.$refs.itemsContainer, '[tabindex="0"]');
      var activeIndex2 = indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
      indicators[activeIndex2].children[0].tabIndex = "-1";
      indicators[highlightedIndex].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function findFocusedIndicatorIndex2() {
      var indicators = _toConsumableArray$2(find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]'));
      var activeIndicator = findSingle(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
      return indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
    },
    changedFocusedIndicator: function changedFocusedIndicator2(prevInd, nextInd) {
      var indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      indicators[prevInd].children[0].tabIndex = "-1";
      indicators[nextInd].children[0].tabIndex = "0";
      indicators[nextInd].children[0].focus();
    },
    onTransitionEnd: function onTransitionEnd(e) {
      if (this.$refs.itemsContainer && e.propertyName === "transform") {
        (void 0).body.setAttribute("data-p-items-hidden", "true");
        !this.isUnstyled && addClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "";
      }
    },
    onTouchStart: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    },
    onTouchMove: function onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];
      if (this.isVertical) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    },
    changePageOnTouch: function changePageOnTouch(e, diff) {
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    },
    getTotalPageNumber: function getTotalPageNumber() {
      return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
    },
    createStyle: function createStyle() {
      if (!this.thumbnailsStyle) {
        var _this$$primevue;
        this.thumbnailsStyle = (void 0).createElement("style");
        this.thumbnailsStyle.type = "text/css";
        setAttribute(this.thumbnailsStyle, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
        (void 0).body.appendChild(this.thumbnailsStyle);
      }
      var innerHTML = "\n                #".concat(this.containerId, ' [data-pc-section="thumbnailitem"] {\n                    flex: 1 0 ').concat(100 / this.d_numVisible, "%\n                }\n            ");
      if (this.responsiveOptions && !this.isUnstyled) {
        this.sortedResponsiveOptions = _toConsumableArray$2(this.responsiveOptions);
        var comparer = localeComparator();
        this.sortedResponsiveOptions.sort(function(data1, data22) {
          var value1 = data1.breakpoint;
          var value2 = data22.breakpoint;
          return sort(value1, value2, -1, comparer);
        });
        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          innerHTML += "\n                        @media screen and (max-width: ".concat(res.breakpoint, ") {\n                            #").concat(this.containerId, " .p-galleria-thumbnail-item {\n                                flex: 1 0 ").concat(100 / res.numVisible, "%\n                            }\n                        }\n                    ");
        }
      }
      this.thumbnailsStyle.innerHTML = innerHTML;
    },
    calculatePosition: function calculatePosition() {
      if (this.$refs.itemsContainer && this.sortedResponsiveOptions) {
        var windowWidth = (void 0).innerWidth;
        var matchedResponsiveData = {
          numVisible: this.numVisible
        };
        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
        if (this.d_numVisible !== matchedResponsiveData.numVisible) {
          this.d_numVisible = matchedResponsiveData.numVisible;
        }
      }
    },
    bindDocumentListeners: function bindDocumentListeners() {
      var _this = this;
      if (!this.documentResizeListener) {
        this.documentResizeListener = function() {
          _this.calculatePosition();
        };
        (void 0).addEventListener("resize", this.documentResizeListener);
      }
    },
    unbindDocumentListeners: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        (void 0).removeEventListener("resize", this.documentResizeListener);
        this.documentResizeListener = null;
      }
    },
    isNavBackwardDisabled: function isNavBackwardDisabled2() {
      return !this.circular && this.d_activeIndex === 0 || this.value.length <= this.d_numVisible;
    },
    isNavForwardDisabled: function isNavForwardDisabled2() {
      return !this.circular && this.d_activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
    },
    firstItemAciveIndex: function firstItemAciveIndex() {
      return this.totalShiftedItems * -1;
    },
    lastItemActiveIndex: function lastItemActiveIndex() {
      return this.firstItemAciveIndex() + this.d_numVisible - 1;
    },
    isItemActive: function isItemActive(index) {
      return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    },
    ariaPageLabel: function ariaPageLabel2(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  computed: {
    ariaPrevButtonLabel: function ariaPrevButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
    },
    ariaNextButtonLabel: function ariaNextButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
    }
  },
  components: {
    ChevronLeftIcon: script$7,
    ChevronRightIcon: script$3$2,
    ChevronUpIcon: script$6,
    ChevronDownIcon: script$2$2
  },
  directives: {
    ripple: Ripple
  }
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$2(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$2$1 = ["disabled", "aria-label"];
var _hoisted_2$1$1 = ["data-p-active", "aria-selected", "aria-controls", "onKeydown", "data-p-galleria-thumbnail-item-current", "data-p-galleria-thumbnail-item-active", "data-p-galleria-thumbnail-item-start", "data-p-galleria-thumbnail-item-end"];
var _hoisted_3$1 = ["tabindex", "aria-label", "aria-current", "onClick"];
var _hoisted_4$2 = ["disabled", "aria-label"];
function render$2$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("thumbnails")
  }, _ctx.ptm("thumbnails")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("thumbnailContent")
  }, _ctx.ptm("thumbnailContent")), [$props.showThumbnailNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    "class": _ctx.cx("thumbnailPrevButton"),
    disabled: $options.isNavBackwardDisabled(),
    type: "button",
    "aria-label": $options.ariaPrevButtonLabel,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.navBackward($event);
    })
  }, _objectSpread$2(_objectSpread$2({}, $props.prevButtonProps), _ctx.ptm("thumbnailPrevButton")), {
    "data-pc-group-section": "thumbnailnavigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.previousthumbnailicon || ($props.isVertical ? "ChevronUpIcon" : "ChevronLeftIcon")), mergeProps({
    "class": _ctx.cx("thumbnailPrevIcon")
  }, _ctx.ptm("thumbnailPrevIcon")), null, 16, ["class"]))], 16, _hoisted_1$2$1)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("thumbnailsViewport"),
    style: {
      height: $props.isVertical ? $props.contentHeight : ""
    }
  }, _ctx.ptm("thumbnailsViewport")), [createElementVNode("div", mergeProps({
    ref: "itemsContainer",
    "class": _ctx.cx("thumbnailItems"),
    role: "tablist",
    onTransitionend: _cache[1] || (_cache[1] = function($event) {
      return $options.onTransitionEnd($event);
    }),
    onTouchstart: _cache[2] || (_cache[2] = function($event) {
      return $options.onTouchStart($event);
    }),
    onTouchmove: _cache[3] || (_cache[3] = function($event) {
      return $options.onTouchMove($event);
    }),
    onTouchend: _cache[4] || (_cache[4] = function($event) {
      return $options.onTouchEnd($event);
    })
  }, _ctx.ptm("thumbnailItems")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(item, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: "p-galleria-thumbnail-item-".concat(index),
      "class": _ctx.cx("thumbnailItem", {
        index,
        activeIndex: $props.activeIndex
      }),
      role: "tab",
      "data-p-active": $props.activeIndex === index,
      "aria-selected": $props.activeIndex === index,
      "aria-controls": $props.containerId + "_item_" + index,
      onKeydown: function onKeydown($event) {
        return $options.onThumbnailKeydown($event, index);
      },
      ref_for: true
    }, _ctx.ptm("thumbnailItem"), {
      "data-p-galleria-thumbnail-item-current": $props.activeIndex === index,
      "data-p-galleria-thumbnail-item-active": $options.isItemActive(index),
      "data-p-galleria-thumbnail-item-start": $options.firstItemAciveIndex() === index,
      "data-p-galleria-thumbnail-item-end": $options.lastItemActiveIndex() === index
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("thumbnail"),
      tabindex: $props.activeIndex === index ? "0" : "-1",
      "aria-label": $options.ariaPageLabel(index + 1),
      "aria-current": $props.activeIndex === index ? "page" : void 0,
      onClick: function onClick($event) {
        return $options.onItemClick(index);
      },
      ref_for: true
    }, _ctx.ptm("thumbnail")), [$props.templates.thumbnail ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.thumbnail), {
      key: 0,
      item
    }, null, 8, ["item"])) : createCommentVNode("", true)], 16, _hoisted_3$1)], 16, _hoisted_2$1$1);
  }), 128))], 16)], 16), $props.showThumbnailNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    "class": _ctx.cx("thumbnailNextButton"),
    disabled: $options.isNavForwardDisabled(),
    type: "button",
    "aria-label": $options.ariaNextButtonLabel,
    onClick: _cache[5] || (_cache[5] = function($event) {
      return $options.navForward($event);
    })
  }, _objectSpread$2(_objectSpread$2({}, $props.nextButtonProps), _ctx.ptm("thumbnailNextButton")), {
    "data-pc-group-section": "thumbnailnavigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.nextthumbnailicon || ($props.isVertical ? "ChevronDownIcon" : "ChevronRightIcon")), mergeProps({
    "class": _ctx.cx("thumbnailNextIcon")
  }, _ctx.ptm("thumbnailNextIcon")), null, 16, ["class"]))], 16, _hoisted_4$2)), [[_directive_ripple]]) : createCommentVNode("", true)], 16)], 16);
}
script$2$1.render = render$2$1;
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$1$1 = {
  name: "GalleriaContent",
  hostName: "Galleria",
  "extends": script$a,
  inheritAttrs: false,
  interval: null,
  emits: ["activeitem-change", "mask-hide"],
  data: function data2() {
    return {
      id: this.$attrs.id || UniqueComponentId(),
      activeIndex: this.$attrs.activeIndex,
      numVisible: this.$attrs.numVisible,
      slideShowActive: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    "$attrs.value": function $attrsValue(newVal) {
      if (newVal && newVal.length < this.numVisible) {
        this.numVisible = newVal.length;
      }
    },
    "$attrs.activeIndex": function $attrsActiveIndex(newVal) {
      this.activeIndex = newVal;
    },
    "$attrs.numVisible": function $attrsNumVisible(newVal) {
      this.numVisible = newVal;
    },
    "$attrs.autoPlay": function $attrsAutoPlay(newVal) {
      newVal ? this.startSlideShow() : this.stopSlideShow();
    }
  },
  mounted: function mounted3() {
    this.id = this.id || UniqueComponentId();
  },
  updated: function updated22() {
    this.$emit("activeitem-change", this.activeIndex);
  },
  beforeUnmount: function beforeUnmount2() {
    if (this.slideShowActive) {
      this.stopSlideShow();
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        props: _objectSpread$1(_objectSpread$1({}, this.$attrs), {}, {
          pt: this.pt,
          unstyled: this.unstyled
        })
      });
    },
    isAutoPlayActive: function isAutoPlayActive() {
      return this.slideShowActive;
    },
    startSlideShow: function startSlideShow() {
      var _this = this;
      this.interval = setInterval(function() {
        var activeIndex2 = _this.$attrs.circular && _this.$attrs.value.length - 1 === _this.activeIndex ? 0 : _this.activeIndex + 1;
        _this.activeIndex = activeIndex2;
      }, this.$attrs.transitionInterval);
      this.slideShowActive = true;
    },
    stopSlideShow: function stopSlideShow3() {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.slideShowActive = false;
    },
    getPositionClass: function getPositionClass(preClassName, position) {
      var positions = ["top", "left", "bottom", "right"];
      var pos = positions.find(function(item) {
        return item === position;
      });
      return pos ? "".concat(preClassName, "-").concat(pos) : "";
    },
    isVertical: function isVertical() {
      return this.$attrs.thumbnailsPosition === "left" || this.$attrs.thumbnailsPosition === "right";
    }
  },
  computed: {
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    GalleriaItem: script$3$1,
    GalleriaThumbnails: script$2$1,
    TimesIcon: script$4$1
  },
  directives: {
    ripple: Ripple
  }
};
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$3(e, r, t) {
  return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == _typeof$3(i) ? i : i + "";
}
function _toPrimitive$3(t, r) {
  if ("object" != _typeof$3(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$3(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$1$1 = ["id", "aria-label", "aria-roledescription"];
var _hoisted_2$3 = ["aria-label"];
var _hoisted_3$3 = ["aria-live"];
function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GalleriaItem = resolveComponent("GalleriaItem");
  var _component_GalleriaThumbnails = resolveComponent("GalleriaThumbnails");
  var _directive_ripple = resolveDirective("ripple");
  return _ctx.$attrs.value && _ctx.$attrs.value.length > 0 ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    id: $data.id,
    role: "region",
    "class": [_ctx.cx("root"), _ctx.$attrs.containerClass],
    style: _ctx.$attrs.containerStyle,
    "aria-label": _ctx.$attrs.ariaLabel,
    "aria-roledescription": _ctx.$attrs.ariaRoledescription
  }, _objectSpread$3(_objectSpread$3({}, _ctx.$attrs.containerProps), $options.getPTOptions("root"))), [_ctx.$attrs.fullScreen ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    autofocus: "",
    type: "button",
    "class": _ctx.cx("closeButton"),
    "aria-label": $options.closeAriaLabel,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return _ctx.$emit("mask-hide");
    })
  }, $options.getPTOptions("closeButton")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["closeicon"] || "TimesIcon"), mergeProps({
    "class": _ctx.cx("closeIcon")
  }, $options.getPTOptions("closeIcon")), null, 16, ["class"]))], 16, _hoisted_2$3)), [[_directive_ripple]]) : createCommentVNode("", true), _ctx.$attrs.templates && _ctx.$attrs.templates["header"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("header")
  }, $options.getPTOptions("header")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["header"])))], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content"),
    "aria-live": _ctx.$attrs.autoPlay ? "polite" : "off"
  }, $options.getPTOptions("content")), [createVNode(_component_GalleriaItem, {
    id: $data.id,
    activeIndex: $data.activeIndex,
    "onUpdate:activeIndex": _cache[1] || (_cache[1] = function($event) {
      return $data.activeIndex = $event;
    }),
    slideShowActive: $data.slideShowActive,
    "onUpdate:slideShowActive": _cache[2] || (_cache[2] = function($event) {
      return $data.slideShowActive = $event;
    }),
    value: _ctx.$attrs.value,
    circular: _ctx.$attrs.circular,
    templates: _ctx.$attrs.templates,
    showIndicators: _ctx.$attrs.showIndicators,
    changeItemOnIndicatorHover: _ctx.$attrs.changeItemOnIndicatorHover,
    showItemNavigators: _ctx.$attrs.showItemNavigators,
    autoPlay: _ctx.$attrs.autoPlay,
    onStartSlideshow: $options.startSlideShow,
    onStopSlideshow: $options.stopSlideShow,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, null, 8, ["id", "activeIndex", "slideShowActive", "value", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "showItemNavigators", "autoPlay", "onStartSlideshow", "onStopSlideshow", "pt", "unstyled"]), _ctx.$attrs.showThumbnails ? (openBlock(), createBlock(_component_GalleriaThumbnails, {
    key: 0,
    activeIndex: $data.activeIndex,
    "onUpdate:activeIndex": _cache[3] || (_cache[3] = function($event) {
      return $data.activeIndex = $event;
    }),
    slideShowActive: $data.slideShowActive,
    "onUpdate:slideShowActive": _cache[4] || (_cache[4] = function($event) {
      return $data.slideShowActive = $event;
    }),
    containerId: $data.id,
    value: _ctx.$attrs.value,
    templates: _ctx.$attrs.templates,
    numVisible: $data.numVisible,
    responsiveOptions: _ctx.$attrs.responsiveOptions,
    circular: _ctx.$attrs.circular,
    isVertical: $options.isVertical(),
    contentHeight: _ctx.$attrs.verticalThumbnailViewPortHeight,
    showThumbnailNavigators: _ctx.$attrs.showThumbnailNavigators,
    prevButtonProps: _ctx.$attrs.prevButtonProps,
    nextButtonProps: _ctx.$attrs.nextButtonProps,
    onStopSlideshow: $options.stopSlideShow,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, null, 8, ["activeIndex", "slideShowActive", "containerId", "value", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "prevButtonProps", "nextButtonProps", "onStopSlideshow", "pt", "unstyled"])) : createCommentVNode("", true)], 16, _hoisted_3$3), _ctx.$attrs.templates && _ctx.$attrs.templates["footer"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 2,
    "class": _ctx.cx("footer")
  }, $options.getPTOptions("footer")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["footer"])))], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1$1)) : createCommentVNode("", true);
}
script$1$1.render = render$1$1;
var script$5 = {
  name: "Galleria",
  "extends": script$4,
  inheritAttrs: false,
  emits: ["update:activeIndex", "update:visible"],
  container: null,
  mask: null,
  data: function data3() {
    return {
      containerVisible: this.visible
    };
  },
  updated: function updated3() {
    if (this.fullScreen && this.visible) {
      this.containerVisible = this.visible;
    }
  },
  beforeUnmount: function beforeUnmount3() {
    if (this.fullScreen) {
      unblockBodyScroll();
    }
    this.mask = null;
    if (this.container) {
      ZIndex.clear(this.container);
      this.container = null;
    }
  },
  methods: {
    onBeforeEnter: function onBeforeEnter(el) {
      ZIndex.set("modal", el, this.baseZIndex || this.$primevue.config.zIndex.modal);
    },
    onEnter: function onEnter(el) {
      this.mask.style.zIndex = String(parseInt(el.style.zIndex, 10) - 1);
      blockBodyScroll();
      this.focus();
    },
    onBeforeLeave: function onBeforeLeave() {
      !this.isUnstyled && addClass(this.mask, "p-overlay-mask-leave");
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndex.clear(el);
      this.containerVisible = false;
      unblockBodyScroll();
    },
    onActiveItemChange: function onActiveItemChange(index) {
      if (this.activeIndex !== index) {
        this.$emit("update:activeIndex", index);
      }
    },
    maskHide: function maskHide() {
      this.$emit("update:visible", false);
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    maskRef: function maskRef(el) {
      this.mask = el;
    },
    focus: function focus2() {
      var focusTarget = this.container.$el.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus();
      }
    }
  },
  components: {
    GalleriaContent: script$1$1,
    Portal: script$5$1
  },
  directives: {
    focustrap: FocusTrap
  }
};
var _hoisted_1$4 = ["aria-modal"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GalleriaContent = resolveComponent("GalleriaContent");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return _ctx.fullScreen ? (openBlock(), createBlock(_component_Portal, {
    key: 0
  }, {
    "default": withCtx(function() {
      return [$data.containerVisible ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        "class": [_ctx.cx("mask"), _ctx.maskClass],
        role: "dialog",
        "aria-modal": _ctx.fullScreen ? "true" : void 0
      }, _ctx.ptm("mask")), [createVNode(Transition, mergeProps({
        name: "p-galleria",
        onBeforeEnter: $options.onBeforeEnter,
        onEnter: $options.onEnter,
        onBeforeLeave: $options.onBeforeLeave,
        onAfterLeave: $options.onAfterLeave,
        appear: ""
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [_ctx.visible ? withDirectives((openBlock(), createBlock(_component_GalleriaContent, mergeProps({
            key: 0,
            ref: $options.containerRef,
            onMaskHide: $options.maskHide,
            templates: _ctx.$slots,
            onActiveitemChange: $options.onActiveItemChange,
            pt: _ctx.pt,
            unstyled: _ctx.unstyled
          }, _ctx.$props), null, 16, ["onMaskHide", "templates", "onActiveitemChange", "pt", "unstyled"])), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 1
      }, 16, ["onBeforeEnter", "onEnter", "onBeforeLeave", "onAfterLeave"])], 16, _hoisted_1$4)) : createCommentVNode("", true)];
    }),
    _: 1
  })) : (openBlock(), createBlock(_component_GalleriaContent, mergeProps({
    key: 1,
    templates: _ctx.$slots,
    onActiveitemChange: $options.onActiveItemChange,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, _ctx.$props), null, 16, ["templates", "onActiveitemChange", "pt", "unstyled"]));
}
script$5.render = render$4;
const _sfc_main$1 = {
  __name: "ProductImagesCarousel",
  __ssrInlineRender: true,
  props: [
    "ProductImages",
    "ProductMainImg",
    "disscount"
  ],
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { ProductImages, ProductMainImg, disscount } = __props;
    const ind = ref(0);
    const allImgs = ref(ProductImages);
    ref();
    watchEffect(() => {
    });
    const displayBasic = ref(false);
    const responsiveOptions = ref([
      {
        breakpoint: "1500px",
        numVisible: 5
      },
      {
        breakpoint: "1024px",
        numVisible: 3
      },
      {
        breakpoint: "768px",
        numVisible: 2
      },
      {
        breakpoint: "560px",
        numVisible: 1
      }
    ]);
    const handleClick = (event) => {
      if (event.target.classList.contains("p-galleria-mask")) {
        displayBasic.value = false;
      }
    };
    onUnmounted(() => {
      (void 0).removeEventListener("click", handleClick);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_icon = __nuxt_component_2$1;
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_Galleria = script$5;
      _push(`<!--[--><div style="${ssrRenderStyle({ "position": "relative" })}" class="${ssrRenderClass([_ctx.$i18n.locale === "en" ? "en" : "", "preview-section d-flex"])}" data-v-8ccbfbdd>`);
      if (__props.disscount) {
        _push(`<div class="disscount" data-v-8ccbfbdd>${ssrInterpolate(__props.disscount + "%")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nav-imgs"${ssrRenderAttr("dir", _ctx.$i18n.locale === "en" ? "rtl" : "ltr")} data-v-8ccbfbdd><div class="nav-frame d-flex" data-v-8ccbfbdd>`);
      _push(ssrRenderComponent(_component_Swiper, {
        style: { "direction": "ltr" },
        modules: ["SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
        breakpoints: {
          "1200": {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          "992": {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          "768": {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          "250": {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          "1": {
            slidesPerView: 3,
            slidesPerGroup: 3
          }
        },
        loop: false,
        speed: 1e3,
        pagination: {
          clickable: true
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(allImgs), (imgItem, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                class: ["nav-imgs-item cover", unref(ind) === index ? "active" : ""],
                key: imgItem
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `${unref(apiBase)}/${imgItem.photoPath}`)} alt="nav-img" data-v-8ccbfbdd${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `${unref(apiBase)}/${imgItem.photoPath}`,
                        alt: "nav-img",
                        onClick: ($event) => ind.value = index
                      }, null, 8, ["src", "onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_SwiperSlide, null, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(allImgs), (imgItem, index) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  class: ["nav-imgs-item cover", unref(ind) === index ? "active" : ""],
                  key: imgItem
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: `${unref(apiBase)}/${imgItem.photoPath}`,
                      alt: "nav-img",
                      onClick: ($event) => ind.value = index
                    }, null, 8, ["src", "onClick"])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128)),
              createVNode(_component_SwiperSlide)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="view-img" data-v-8ccbfbdd>`);
      _push(ssrRenderComponent(_component_v_carousel, {
        class: "h-100",
        "hide-delimiters": "",
        "show-arrows": "",
        modelValue: unref(ind),
        "onUpdate:modelValue": ($event) => isRef(ind) ? ind.value = $event : null
      }, {
        prev: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flip-icon pcc" data-v-8ccbfbdd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: _ctx.$i18n.locale === "en" ? "material-symbols:arrow-back-ios" : "material-symbols:arrow-forward-ios",
              size: "30px"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "flip-icon pcc",
                onClick: props.onClick
              }, [
                createVNode(_component_icon, {
                  name: _ctx.$i18n.locale === "en" ? "material-symbols:arrow-back-ios" : "material-symbols:arrow-forward-ios",
                  size: "30px"
                }, null, 8, ["name"])
              ], 8, ["onClick"])
            ];
          }
        }),
        next: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flip-icon pcc" data-v-8ccbfbdd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: _ctx.$i18n.locale === "ar" ? "material-symbols:arrow-back-ios" : "material-symbols:arrow-forward-ios",
              size: "30px"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "flip-icon pcc",
                onClick: props.onClick
              }, [
                createVNode(_component_icon, {
                  name: _ctx.$i18n.locale === "ar" ? "material-symbols:arrow-back-ios" : "material-symbols:arrow-forward-ios",
                  size: "30px"
                }, null, 8, ["name"])
              ], 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(allImgs), (item, i) => {
              _push2(ssrRenderComponent(_component_v_carousel_item, {
                key: i,
                src: `${unref(apiBase)}/${item.photoPath}`,
                onClick: ($event) => displayBasic.value = true,
                cover: ""
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(allImgs), (item, i) => {
                return openBlock(), createBlock(_component_v_carousel_item, {
                  key: i,
                  src: `${unref(apiBase)}/${item.photoPath}`,
                  onClick: ($event) => displayBasic.value = true,
                  cover: ""
                }, null, 8, ["src", "onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Galleria, {
        activeIndex: unref(ind),
        visible: unref(displayBasic),
        "onUpdate:visible": ($event) => isRef(displayBasic) ? displayBasic.value = $event : null,
        value: unref(allImgs),
        responsiveOptions: unref(responsiveOptions),
        containerStyle: "max-width: 50%",
        circular: true,
        fullScreen: true,
        showItemNavigators: true,
        showThumbnailNavigators: true
      }, {
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `${unref(apiBase)}/${slotProps.item.photoPath}`)}${ssrRenderAttr("alt", slotProps.item.id)} class="mainImg" data-v-8ccbfbdd${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: `${unref(apiBase)}/${slotProps.item.photoPath}`,
                alt: slotProps.item.id,
                class: "mainImg"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        thumbnail: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "padding": "20px", "width": "150px", "height": "150px" })}" data-v-8ccbfbdd${_scopeId}><img${ssrRenderAttr("src", `${unref(apiBase)}/${slotProps.item.photoPath}`)}${ssrRenderAttr("alt", slotProps.item.id)} style="${ssrRenderStyle({ "display": "block", "object-fit": "contain", "width": "100%", "height": "100%", "border-radius": "8px", "border": "2px solid #bf9847" })}" data-v-8ccbfbdd${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { style: { "padding": "20px", "width": "150px", "height": "150px" } }, [
                createVNode("img", {
                  src: `${unref(apiBase)}/${slotProps.item.photoPath}`,
                  alt: slotProps.item.id,
                  style: { "display": "block", "object-fit": "contain", "width": "100%", "height": "100%", "border-radius": "8px", "border": "2px solid #bf9847" }
                }, null, 8, ["src", "alt"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails/ProductImagesCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8ccbfbdd"]]);
var script$3 = {
  name: "AngleDownIcon",
  "extends": script$8
};
var _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$2 = [_hoisted_1$2];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$2, 16);
}
script$3.render = render$2;
var script$2 = {
  name: "AngleUpIcon",
  "extends": script$8
};
var _hoisted_1$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$1];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$2.render = render$1;
var theme = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputnumber {\n    display: inline-flex;\n    position: relative;\n}\n\n.p-inputnumber-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 auto;\n    cursor: pointer;\n    background: ".concat(dt("inputnumber.button.background"), ";\n    color: ").concat(dt("inputnumber.button.color"), ";\n    width: ").concat(dt("inputnumber.button.width"), ";\n    transition: background ").concat(dt("inputnumber.transition.duration"), ", color ").concat(dt("inputnumber.transition.duration"), ", border-color ").concat(dt("inputnumber.transition.duration"), ", outline-color ").concat(dt("inputnumber.transition.duration"), ";\n}\n\n.p-inputnumber-button:hover {\n    background: ").concat(dt("inputnumber.button.hover.background"), ";\n    color: ").concat(dt("inputnumber.button.hover.color"), ";\n}\n\n.p-inputnumber-button:active {\n    background: ").concat(dt("inputnumber.button.active.background"), ";\n    color: ").concat(dt("inputnumber.button.active.color"), ";\n}\n\n.p-inputnumber-stacked .p-inputnumber-button {\n    position: relative;\n    border: 0 none;\n}\n\n.p-inputnumber-stacked .p-inputnumber-button-group {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    height: calc(100% - 2px);\n}\n\n.p-inputnumber-stacked .p-inputnumber-increment-button {\n    padding: 0;\n    border-top-right-radius: calc(").concat(dt("inputnumber.button.border.radius"), " - 1px);\n}\n\n.p-inputnumber-stacked .p-inputnumber-decrement-button {\n    padding: 0;\n    border-bottom-right-radius: calc(").concat(dt("inputnumber.button.border.radius"), " - 1px);\n}\n\n.p-inputnumber-stacked .p-inputnumber-button {\n    flex: 1 1 auto;\n    border: 0 none;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button {\n    border: 1px solid ").concat(dt("inputnumber.button.border.color"), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button:hover {\n    border-color: ").concat(dt("inputnumber.button.hover.border.color"), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button:active {\n    border-color: ").concat(dt("inputnumber.button.active.border.color"), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-increment-button {\n    order: 3;\n    border-top-right-radius: ").concat(dt("inputnumber.button.border.radius"), ";\n    border-bottom-right-radius: ").concat(dt("inputnumber.button.border.radius"), ";\n    border-left: 0 none;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-decrement-button {\n    order: 1;\n    border-top-left-radius: ").concat(dt("inputnumber.button.border.radius"), ";\n    border-bottom-left-radius: ").concat(dt("inputnumber.button.border.radius"), ";\n    border-right: 0 none;\n}\n\n.p-inputnumber-vertical {\n    flex-direction: column;\n}\n\n.p-inputnumber-vertical .p-inputnumber-button {\n    border: 1px solid ").concat(dt("inputnumber.button.border.color"), ";\n    padding: ").concat(dt("inputnumber.button.vertical.padding"), "; 0;\n}\n\n.p-inputnumber-vertical .p-inputnumber-button:hover {\n    border-color: ").concat(dt("inputnumber.button.hover.border.color"), ";\n}\n\n.p-inputnumber-vertical .p-inputnumber-button:active {\n    border-color: ").concat(dt("inputnumber.button.active.border.color"), ";\n}\n\n.p-inputnumber-vertical .p-inputnumber-increment-button {\n    order: 1;\n    border-top-left-radius: ").concat(dt("inputnumber.button.border.radius"), ";\n    border-top-right-radius: ").concat(dt("inputnumber.button.border.radius"), ";\n    width: 100%;\n    border-bottom: 0 none;\n}\n\n.p-inputnumber-vertical .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n    text-align: center;\n}\n\n.p-inputnumber-vertical .p-inputnumber-decrement-button {\n    order: 3;\n    border-bottom-left-radius: ").concat(dt("inputnumber.button.border.radius"), ";\n    border-bottom-right-radius: ").concat(dt("inputnumber.button.border.radius"), ";\n    width: 100%;\n    border-top: 0 none;\n}\n\n.p-inputnumber-input {\n    flex: 1 1 auto;\n}\n\n.p-inputnumber-fluid {\n    width: 100%;\n}\n\n.p-inputnumber-fluid .p-inputnumber-input {\n    width: 1%;\n}\n\n.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {\n    width: 100%;\n}\n");
};
var classes = {
  root: function root2(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-inputnumber p-component p-inputwrapper", {
      "p-inputwrapper-filled": instance.filled || props.allowEmpty === false,
      "p-inputwrapper-focus": instance.focused,
      "p-inputnumber-stacked": props.showButtons && props.buttonLayout === "stacked",
      "p-inputnumber-horizontal": props.showButtons && props.buttonLayout === "horizontal",
      "p-inputnumber-vertical": props.showButtons && props.buttonLayout === "vertical",
      "p-inputnumber-fluid": instance.hasFluid
    }];
  },
  pcInput: "p-inputnumber-input",
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: function incrementButton(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-inputnumber-button p-inputnumber-increment-button", {
      "p-disabled": props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref4) {
    var instance = _ref4.instance, props = _ref4.props;
    return ["p-inputnumber-button p-inputnumber-decrement-button", {
      "p-disabled": props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var InputNumberStyle = BaseStyle.extend({
  name: "inputnumber",
  theme,
  classes
});
var script$1 = {
  name: "BaseInputNumber",
  "extends": script$a,
  props: {
    modelValue: {
      type: Number,
      "default": null
    },
    format: {
      type: Boolean,
      "default": true
    },
    showButtons: {
      type: Boolean,
      "default": false
    },
    buttonLayout: {
      type: String,
      "default": "stacked"
    },
    incrementButtonClass: {
      type: String,
      "default": null
    },
    decrementButtonClass: {
      type: String,
      "default": null
    },
    incrementButtonIcon: {
      type: String,
      "default": void 0
    },
    incrementIcon: {
      type: String,
      "default": void 0
    },
    decrementButtonIcon: {
      type: String,
      "default": void 0
    },
    decrementIcon: {
      type: String,
      "default": void 0
    },
    locale: {
      type: String,
      "default": void 0
    },
    localeMatcher: {
      type: String,
      "default": void 0
    },
    mode: {
      type: String,
      "default": "decimal"
    },
    prefix: {
      type: String,
      "default": null
    },
    suffix: {
      type: String,
      "default": null
    },
    currency: {
      type: String,
      "default": void 0
    },
    currencyDisplay: {
      type: String,
      "default": void 0
    },
    useGrouping: {
      type: Boolean,
      "default": true
    },
    minFractionDigits: {
      type: Number,
      "default": void 0
    },
    maxFractionDigits: {
      type: Number,
      "default": void 0
    },
    roundingMode: {
      type: String,
      "default": "halfExpand",
      validator: function validator(value) {
        return ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"].includes(value);
      }
    },
    min: {
      type: Number,
      "default": null
    },
    max: {
      type: Number,
      "default": null
    },
    step: {
      type: Number,
      "default": 1
    },
    allowEmpty: {
      type: Boolean,
      "default": true
    },
    highlightOnFocus: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    variant: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    fluid: {
      type: Boolean,
      "default": null
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: InputNumberStyle,
  provide: function provide2() {
    return {
      $pcInputNumber: this,
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r))
    return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
var script = {
  name: "InputNumber",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "input", "focus", "blur"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  numberFormat: null,
  _numeral: null,
  _decimal: null,
  _group: null,
  _minusSign: null,
  _currency: null,
  _suffix: null,
  _prefix: null,
  _index: null,
  groupChar: "",
  isSpecialChar: null,
  prefixChar: null,
  suffixChar: null,
  timer: null,
  data: function data4() {
    return {
      d_modelValue: this.modelValue,
      focused: false
    };
  },
  watch: {
    modelValue: function modelValue(newValue) {
      this.d_modelValue = newValue;
    },
    locale: function locale(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    localeMatcher: function localeMatcher(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    mode: function mode(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    currency: function currency(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    currencyDisplay: function currencyDisplay(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    useGrouping: function useGrouping(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    minFractionDigits: function minFractionDigits(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    maxFractionDigits: function maxFractionDigits(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    suffix: function suffix(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    prefix: function prefix(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    }
  },
  created: function created() {
    this.constructParser();
  },
  methods: {
    getOptions: function getOptions() {
      return {
        localeMatcher: this.localeMatcher,
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: this.useGrouping,
        minimumFractionDigits: this.minFractionDigits,
        maximumFractionDigits: this.maxFractionDigits,
        roundingMode: this.roundingMode
      };
    },
    constructParser: function constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
      var numerals = _toConsumableArray(new Intl.NumberFormat(this.locale, {
        useGrouping: false
      }).format(9876543210)).reverse();
      var index = new Map(numerals.map(function(d, i) {
        return [d, i];
      }));
      this._numeral = new RegExp("[".concat(numerals.join(""), "]"), "g");
      this._group = this.getGroupingExpression();
      this._minusSign = this.getMinusSignExpression();
      this._currency = this.getCurrencyExpression();
      this._decimal = this.getDecimalExpression();
      this._suffix = this.getSuffixExpression();
      this._prefix = this.getPrefixExpression();
      this._index = function(d) {
        return index.get(d);
      };
    },
    updateConstructParser: function updateConstructParser(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.constructParser();
      }
    },
    escapeRegExp: function escapeRegExp(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    },
    getDecimalExpression: function getDecimalExpression() {
      var formatter = new Intl.NumberFormat(this.locale, _objectSpread(_objectSpread({}, this.getOptions()), {}, {
        useGrouping: false
      }));
      return new RegExp("[".concat(formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, ""), "]"), "g");
    },
    getGroupingExpression: function getGroupingExpression() {
      var formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: true
      });
      this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
      return new RegExp("[".concat(this.groupChar, "]"), "g");
    },
    getMinusSignExpression: function getMinusSignExpression() {
      var formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: false
      });
      return new RegExp("[".concat(formatter.format(-1).trim().replace(this._numeral, ""), "]"), "g");
    },
    getCurrencyExpression: function getCurrencyExpression() {
      if (this.currency) {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: "currency",
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          roundingMode: this.roundingMode
        });
        return new RegExp("[".concat(formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, ""), "]"), "g");
      }
      return new RegExp("[]", "g");
    },
    getPrefixExpression: function getPrefixExpression() {
      if (this.prefix) {
        this.prefixChar = this.prefix;
      } else {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay
        });
        this.prefixChar = formatter.format(1).split("1")[0];
      }
      return new RegExp("".concat(this.escapeRegExp(this.prefixChar || "")), "g");
    },
    getSuffixExpression: function getSuffixExpression() {
      if (this.suffix) {
        this.suffixChar = this.suffix;
      } else {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          roundingMode: this.roundingMode
        });
        this.suffixChar = formatter.format(1).split("1")[1];
      }
      return new RegExp("".concat(this.escapeRegExp(this.suffixChar || "")), "g");
    },
    formatValue: function formatValue(value) {
      if (value != null) {
        if (value === "-") {
          return value;
        }
        if (this.format) {
          var formatter = new Intl.NumberFormat(this.locale, this.getOptions());
          var formattedValue2 = formatter.format(value);
          if (this.prefix) {
            formattedValue2 = this.prefix + formattedValue2;
          }
          if (this.suffix) {
            formattedValue2 = formattedValue2 + this.suffix;
          }
          return formattedValue2;
        }
        return value.toString();
      }
      return "";
    },
    parseValue: function parseValue(text) {
      var filteredText = text.replace(this._suffix, "").replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
      if (filteredText) {
        if (filteredText === "-")
          return filteredText;
        var parsedValue = +filteredText;
        return isNaN(parsedValue) ? null : parsedValue;
      }
      return null;
    },
    repeat: function repeat(event, interval, dir) {
      var _this = this;
      if (this.readonly) {
        return;
      }
      var i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(function() {
        _this.repeat(event, 40, dir);
      }, i);
      this.spin(event, dir);
    },
    spin: function spin(event, dir) {
      if (this.$refs.input) {
        var step2 = this.step * dir;
        var currentValue = this.parseValue(this.$refs.input.$el.value) || 0;
        var newValue = this.validateValue(currentValue + step2);
        this.updateInput(newValue, null, "spin");
        this.updateModel(event, newValue);
        this.handleOnInput(event, currentValue, newValue);
      }
    },
    onUpButtonMouseDown: function onUpButtonMouseDown(event) {
      if (!this.disabled) {
        this.$refs.input.$el.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
      }
    },
    onUpButtonMouseUp: function onUpButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonMouseLeave: function onUpButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonKeyUp: function onUpButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonKeyDown: function onUpButtonKeyDown(event) {
      if (event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") {
        this.repeat(event, null, 1);
      }
    },
    onDownButtonMouseDown: function onDownButtonMouseDown(event) {
      if (!this.disabled) {
        this.$refs.input.$el.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
      }
    },
    onDownButtonMouseUp: function onDownButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonMouseLeave: function onDownButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonKeyUp: function onDownButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonKeyDown: function onDownButtonKeyDown(event) {
      if (event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") {
        this.repeat(event, null, -1);
      }
    },
    onUserInput: function onUserInput() {
      if (this.isSpecialChar) {
        this.$refs.input.$el.value = this.lastValue;
      }
      this.isSpecialChar = false;
    },
    onInputKeyDown: function onInputKeyDown(event) {
      if (this.readonly) {
        return;
      }
      if (event.altKey || event.ctrlKey || event.metaKey) {
        this.isSpecialChar = true;
        this.lastValue = this.$refs.input.$el.value;
        return;
      }
      this.lastValue = event.target.value;
      var selectionStart = event.target.selectionStart;
      var selectionEnd = event.target.selectionEnd;
      var inputValue = event.target.value;
      var newValueStr = null;
      switch (event.code) {
        case "ArrowUp":
          this.spin(event, 1);
          event.preventDefault();
          break;
        case "ArrowDown":
          this.spin(event, -1);
          event.preventDefault();
          break;
        case "ArrowLeft":
          if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
            event.preventDefault();
          }
          break;
        case "ArrowRight":
          if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
            event.preventDefault();
          }
          break;
        case "Tab":
        case "Enter":
        case "NumpadEnter":
          newValueStr = this.validateValue(this.parseValue(inputValue));
          this.$refs.input.$el.value = this.formatValue(newValueStr);
          this.$refs.input.$el.setAttribute("aria-valuenow", newValueStr);
          this.updateModel(event, newValueStr);
          break;
        case "Backspace": {
          event.preventDefault();
          if (selectionStart === selectionEnd) {
            var deleteChar = inputValue.charAt(selectionStart - 1);
            var _this$getDecimalCharI = this.getDecimalCharIndexes(inputValue), decimalCharIndex = _this$getDecimalCharI.decimalCharIndex, decimalCharIndexWithoutPrefix = _this$getDecimalCharI.decimalCharIndexWithoutPrefix;
            if (this.isNumeralChar(deleteChar)) {
              var decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;
                if (decimalLength) {
                  this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                var insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
                newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
              } else if (decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            }
            this.updateValue(event, newValueStr, null, "delete-single");
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, "delete-range");
          }
          break;
        }
        case "Delete":
          event.preventDefault();
          if (selectionStart === selectionEnd) {
            var _deleteChar = inputValue.charAt(selectionStart);
            var _this$getDecimalCharI2 = this.getDecimalCharIndexes(inputValue), _decimalCharIndex = _this$getDecimalCharI2.decimalCharIndex, _decimalCharIndexWithoutPrefix = _this$getDecimalCharI2.decimalCharIndexWithoutPrefix;
            if (this.isNumeralChar(_deleteChar)) {
              var _decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(_deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
              } else if (this._decimal.test(_deleteChar)) {
                this._decimal.lastIndex = 0;
                if (_decimalLength) {
                  this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
                var _insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < _decimalLength ? "" : "0";
                newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
              } else if (_decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            }
            this.updateValue(event, newValueStr, null, "delete-back-single");
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, "delete-range");
          }
          break;
        case "Home":
          event.preventDefault();
          if (isNotEmpty(this.min)) {
            this.updateModel(event, this.min);
          }
          break;
        case "End":
          event.preventDefault();
          if (isNotEmpty(this.max)) {
            this.updateModel(event, this.max);
          }
          break;
      }
    },
    onInputKeyPress: function onInputKeyPress(event) {
      if (this.readonly) {
        return;
      }
      var _char = event.key;
      var isDecimalSign2 = this.isDecimalSign(_char);
      var isMinusSign2 = this.isMinusSign(_char);
      if (event.code !== "Enter") {
        event.preventDefault();
      }
      if (Number(_char) >= 0 && Number(_char) <= 9 || isMinusSign2 || isDecimalSign2) {
        this.insert(event, _char, {
          isDecimalSign: isDecimalSign2,
          isMinusSign: isMinusSign2
        });
      }
    },
    onPaste: function onPaste(event) {
      event.preventDefault();
      var data22 = (event.clipboardData || (void 0)["clipboardData"]).getData("Text");
      if (data22) {
        var filteredData = this.parseValue(data22);
        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    },
    allowMinusSign: function allowMinusSign() {
      return this.min === null || this.min < 0;
    },
    isMinusSign: function isMinusSign(_char2) {
      if (this._minusSign.test(_char2) || _char2 === "-") {
        this._minusSign.lastIndex = 0;
        return true;
      }
      return false;
    },
    isDecimalSign: function isDecimalSign(_char3) {
      if (this._decimal.test(_char3)) {
        this._decimal.lastIndex = 0;
        return true;
      }
      return false;
    },
    isDecimalMode: function isDecimalMode() {
      return this.mode === "decimal";
    },
    getDecimalCharIndexes: function getDecimalCharIndexes(val) {
      var decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      var filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
      var decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
      this._decimal.lastIndex = 0;
      return {
        decimalCharIndex,
        decimalCharIndexWithoutPrefix
      };
    },
    getCharIndexes: function getCharIndexes(val) {
      var decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      var minusCharIndex = val.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      var suffixCharIndex = val.search(this._suffix);
      this._suffix.lastIndex = 0;
      var currencyCharIndex = val.search(this._currency);
      this._currency.lastIndex = 0;
      return {
        decimalCharIndex,
        minusCharIndex,
        suffixCharIndex,
        currencyCharIndex
      };
    },
    insert: function insert(event, text) {
      var sign = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        isDecimalSign: false,
        isMinusSign: false
      };
      var minusCharIndexOnText = text.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
        return;
      }
      var selectionStart = this.$refs.input.$el.selectionStart;
      var selectionEnd = this.$refs.input.$el.selectionEnd;
      var inputValue = this.$refs.input.$el.value.trim();
      var _this$getCharIndexes = this.getCharIndexes(inputValue), decimalCharIndex = _this$getCharIndexes.decimalCharIndex, minusCharIndex = _this$getCharIndexes.minusCharIndex, suffixCharIndex = _this$getCharIndexes.suffixCharIndex, currencyCharIndex = _this$getCharIndexes.currencyCharIndex;
      var newValueStr;
      if (sign.isMinusSign) {
        if (selectionStart === 0) {
          newValueStr = inputValue;
          if (minusCharIndex === -1 || selectionEnd !== 0) {
            newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
          }
          this.updateValue(event, newValueStr, text, "insert");
        }
      } else if (sign.isDecimalSign) {
        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
          this.updateValue(event, inputValue, text, "insert");
        } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, "insert");
        } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, "insert");
        }
      } else {
        var maxFractionDigits2 = this.numberFormat.resolvedOptions().maximumFractionDigits;
        var operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
          if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits2) {
            var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
            this.updateValue(event, newValueStr, text, operation);
          }
        } else {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, operation);
        }
      }
    },
    insertText: function insertText(value, text, start, end) {
      var textSplit = text === "." ? text : text.split(".");
      if (textSplit.length === 2) {
        var decimalCharIndex = value.slice(start, end).search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : this.formatValue(text) || value;
      } else if (end - start === value.length) {
        return this.formatValue(text);
      } else if (start === 0) {
        return text + value.slice(end);
      } else if (end === value.length) {
        return value.slice(0, start) + text;
      } else {
        return value.slice(0, start) + text + value.slice(end);
      }
    },
    deleteRange: function deleteRange(value, start, end) {
      var newValueStr;
      if (end - start === value.length)
        newValueStr = "";
      else if (start === 0)
        newValueStr = value.slice(end);
      else if (end === value.length)
        newValueStr = value.slice(0, start);
      else
        newValueStr = value.slice(0, start) + value.slice(end);
      return newValueStr;
    },
    initCursor: function initCursor() {
      var selectionStart = this.$refs.input.$el.selectionStart;
      var inputValue = this.$refs.input.$el.value;
      var valueLength = inputValue.length;
      var index = null;
      var prefixLength = (this.prefixChar || "").length;
      inputValue = inputValue.replace(this._prefix, "");
      selectionStart = selectionStart - prefixLength;
      var _char4 = inputValue.charAt(selectionStart);
      if (this.isNumeralChar(_char4)) {
        return selectionStart + prefixLength;
      }
      var i = selectionStart - 1;
      while (i >= 0) {
        _char4 = inputValue.charAt(i);
        if (this.isNumeralChar(_char4)) {
          index = i + prefixLength;
          break;
        } else {
          i--;
        }
      }
      if (index !== null) {
        this.$refs.input.$el.setSelectionRange(index + 1, index + 1);
      } else {
        i = selectionStart;
        while (i < valueLength) {
          _char4 = inputValue.charAt(i);
          if (this.isNumeralChar(_char4)) {
            index = i + prefixLength;
            break;
          } else {
            i++;
          }
        }
        if (index !== null) {
          this.$refs.input.$el.setSelectionRange(index, index);
        }
      }
      return index || 0;
    },
    onInputClick: function onInputClick() {
      var currentValue = this.$refs.input.$el.value;
      if (!this.readonly && currentValue !== getSelection()) {
        this.initCursor();
      }
    },
    isNumeralChar: function isNumeralChar(_char5) {
      if (_char5.length === 1 && (this._numeral.test(_char5) || this._decimal.test(_char5) || this._group.test(_char5) || this._minusSign.test(_char5))) {
        this.resetRegex();
        return true;
      }
      return false;
    },
    resetRegex: function resetRegex() {
      this._numeral.lastIndex = 0;
      this._decimal.lastIndex = 0;
      this._group.lastIndex = 0;
      this._minusSign.lastIndex = 0;
    },
    updateValue: function updateValue(event, valueStr, insertedValueStr, operation) {
      var currentValue = this.$refs.input.$el.value;
      var newValue = null;
      if (valueStr != null) {
        newValue = this.parseValue(valueStr);
        newValue = !newValue && !this.allowEmpty ? 0 : newValue;
        this.updateInput(newValue, insertedValueStr, operation, valueStr);
        this.handleOnInput(event, currentValue, newValue);
      }
    },
    handleOnInput: function handleOnInput(event, currentValue, newValue) {
      if (this.isValueChanged(currentValue, newValue)) {
        this.$emit("input", {
          originalEvent: event,
          value: newValue,
          formattedValue: currentValue
        });
      }
    },
    isValueChanged: function isValueChanged(currentValue, newValue) {
      if (newValue === null && currentValue !== null) {
        return true;
      }
      if (newValue != null) {
        var parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
        return newValue !== parsedCurrentValue;
      }
      return false;
    },
    validateValue: function validateValue(value) {
      if (value === "-" || value == null) {
        return null;
      }
      if (this.min != null && value < this.min) {
        return this.min;
      }
      if (this.max != null && value > this.max) {
        return this.max;
      }
      return value;
    },
    updateInput: function updateInput(value, insertedValueStr, operation, valueStr) {
      insertedValueStr = insertedValueStr || "";
      var inputValue = this.$refs.input.$el.value;
      var newValue = this.formatValue(value);
      var currentLength = inputValue.length;
      if (newValue !== valueStr) {
        newValue = this.concatValues(newValue, valueStr);
      }
      if (currentLength === 0) {
        this.$refs.input.$el.value = newValue;
        this.$refs.input.$el.setSelectionRange(0, 0);
        var index = this.initCursor();
        var selectionEnd = index + insertedValueStr.length;
        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        var selectionStart = this.$refs.input.$el.selectionStart;
        var _selectionEnd = this.$refs.input.$el.selectionEnd;
        this.$refs.input.$el.value = newValue;
        var newLength = newValue.length;
        if (operation === "range-insert") {
          var startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
          var startValueStr = startValue !== null ? startValue.toString() : "";
          var startExpr = startValueStr.split("").join("(".concat(this.groupChar, ")?"));
          var sRegex = new RegExp(startExpr, "g");
          sRegex.test(newValue);
          var tExpr = insertedValueStr.split("").join("(".concat(this.groupChar, ")?"));
          var tRegex = new RegExp(tExpr, "g");
          tRegex.test(newValue.slice(sRegex.lastIndex));
          _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (newLength === currentLength) {
          if (operation === "insert" || operation === "delete-back-single") {
            this.$refs.input.$el.setSelectionRange(_selectionEnd + 1, _selectionEnd + 1);
          } else if (operation === "delete-single") {
            this.$refs.input.$el.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);
          } else if (operation === "delete-range" || operation === "spin") {
            this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
          }
        } else if (operation === "delete-back-single") {
          var prevChar = inputValue.charAt(_selectionEnd - 1);
          var nextChar = inputValue.charAt(_selectionEnd);
          var diff = currentLength - newLength;
          var isGroupChar = this._group.test(nextChar);
          if (isGroupChar && diff === 1) {
            _selectionEnd += 1;
          } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
            _selectionEnd += -1 * diff + 1;
          }
          this._group.lastIndex = 0;
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (inputValue === "-" && operation === "insert") {
          this.$refs.input.$el.setSelectionRange(0, 0);
          var _index = this.initCursor();
          var _selectionEnd2 = _index + insertedValueStr.length + 1;
          this.$refs.input.$el.setSelectionRange(_selectionEnd2, _selectionEnd2);
        } else {
          _selectionEnd = _selectionEnd + (newLength - currentLength);
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        }
      }
      this.$refs.input.$el.setAttribute("aria-valuenow", value);
    },
    concatValues: function concatValues(val1, val2) {
      if (val1 && val2) {
        var decimalCharIndex = val2.search(this._decimal);
        this._decimal.lastIndex = 0;
        if (this.suffixChar) {
          return decimalCharIndex !== -1 ? val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar : val1;
        } else {
          return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
        }
      }
      return val1;
    },
    getDecimalLength: function getDecimalLength(value) {
      if (value) {
        var valueSplit = value.split(this._decimal);
        if (valueSplit.length === 2) {
          return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
        }
      }
      return 0;
    },
    updateModel: function updateModel(event, value) {
      this.d_modelValue = value;
      this.$emit("update:modelValue", value);
    },
    onInputFocus: function onInputFocus(event) {
      this.focused = true;
      if (!this.disabled && !this.readonly && this.$refs.input.$el.value !== getSelection() && this.highlightOnFocus) {
        event.target.select();
      }
      this.$emit("focus", event);
    },
    onInputBlur: function onInputBlur(event) {
      this.focused = false;
      var input = event.target;
      var newValue = this.validateValue(this.parseValue(input.value));
      this.$emit("blur", {
        originalEvent: event,
        value: input.value
      });
      input.value = this.formatValue(newValue);
      input.setAttribute("aria-valuenow", newValue);
      this.updateModel(event, newValue);
      if (!this.disabled && !this.readonly && this.highlightOnFocus) {
        clearSelection();
      }
    },
    clearTimer: function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    maxBoundry: function maxBoundry() {
      return this.d_modelValue >= this.max;
    },
    minBoundry: function minBoundry() {
      return this.d_modelValue <= this.min;
    }
  },
  computed: {
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    upButtonListeners: function upButtonListeners() {
      var _this2 = this;
      return {
        mousedown: function mousedown(event) {
          return _this2.onUpButtonMouseDown(event);
        },
        mouseup: function mouseup(event) {
          return _this2.onUpButtonMouseUp(event);
        },
        mouseleave: function mouseleave(event) {
          return _this2.onUpButtonMouseLeave(event);
        },
        keydown: function keydown(event) {
          return _this2.onUpButtonKeyDown(event);
        },
        keyup: function keyup(event) {
          return _this2.onUpButtonKeyUp(event);
        }
      };
    },
    downButtonListeners: function downButtonListeners() {
      var _this3 = this;
      return {
        mousedown: function mousedown(event) {
          return _this3.onDownButtonMouseDown(event);
        },
        mouseup: function mouseup(event) {
          return _this3.onDownButtonMouseUp(event);
        },
        mouseleave: function mouseleave(event) {
          return _this3.onDownButtonMouseLeave(event);
        },
        keydown: function keydown(event) {
          return _this3.onDownButtonKeyDown(event);
        },
        keyup: function keyup(event) {
          return _this3.onDownButtonKeyUp(event);
        }
      };
    },
    formattedValue: function formattedValue() {
      var val = !this.modelValue && !this.allowEmpty ? 0 : this.modelValue;
      return this.formatValue(val);
    },
    getFormatter: function getFormatter() {
      return this.numberFormat;
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  components: {
    InputText: script$9,
    AngleUpIcon: script$2,
    AngleDownIcon: script$3
  }
};
var _hoisted_1 = ["disabled"];
var _hoisted_2 = ["disabled"];
var _hoisted_3 = ["disabled"];
var _hoisted_4 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = resolveComponent("InputText");
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createVNode(_component_InputText, {
    ref: "input",
    id: _ctx.inputId,
    role: "spinbutton",
    "class": normalizeClass([_ctx.cx("pcInput"), _ctx.inputClass]),
    style: normalizeStyle(_ctx.inputStyle),
    value: $options.formattedValue,
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-valuenow": _ctx.modelValue,
    inputmode: _ctx.mode === "decimal" && !_ctx.minFractionDigits ? "numeric" : "decimal",
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    placeholder: _ctx.placeholder,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    invalid: _ctx.invalid,
    variant: _ctx.variant,
    onInput: $options.onUserInput,
    onKeydown: $options.onInputKeyDown,
    onKeypress: $options.onInputKeyPress,
    onPaste: $options.onPaste,
    onClick: $options.onInputClick,
    onFocus: $options.onInputFocus,
    onBlur: $options.onInputBlur,
    pt: _ctx.ptm("pcInput"),
    unstyled: _ctx.unstyled
  }, null, 8, ["id", "class", "style", "value", "aria-valuemin", "aria-valuemax", "aria-valuenow", "inputmode", "disabled", "readonly", "placeholder", "aria-labelledby", "aria-label", "invalid", "variant", "onInput", "onKeydown", "onKeypress", "onPaste", "onClick", "onFocus", "onBlur", "pt", "unstyled"]), _ctx.showButtons && _ctx.buttonLayout === "stacked" ? (openBlock(), createElementBlock("span", mergeProps({
    key: 0,
    "class": _ctx.cx("buttonGroup")
  }, _ctx.ptm("buttonGroup")), [renderSlot(_ctx.$slots, "incrementbutton", {
    listeners: $options.upButtonListeners
  }, function() {
    return [createElementVNode("button", mergeProps({
      "class": [_ctx.cx("incrementButton"), _ctx.incrementButtonClass]
    }, toHandlers($options.upButtonListeners, true), {
      disabled: _ctx.disabled,
      tabindex: -1,
      "aria-hidden": "true",
      type: "button"
    }, _ctx.ptm("incrementButton")), [renderSlot(_ctx.$slots, _ctx.$slots.incrementicon ? "incrementicon" : "incrementbuttonicon", {}, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.incrementIcon || _ctx.incrementButtonIcon ? "span" : "AngleUpIcon"), mergeProps({
        "class": [_ctx.incrementIcon, _ctx.incrementButtonIcon]
      }, _ctx.ptm("incrementIcon"), {
        "data-pc-section": "incrementicon"
      }), null, 16, ["class"]))];
    })], 16, _hoisted_1)];
  }), renderSlot(_ctx.$slots, "decrementbutton", {
    listeners: $options.downButtonListeners
  }, function() {
    return [createElementVNode("button", mergeProps({
      "class": [_ctx.cx("decrementButton"), _ctx.decrementButtonClass]
    }, toHandlers($options.downButtonListeners, true), {
      disabled: _ctx.disabled,
      tabindex: -1,
      "aria-hidden": "true",
      type: "button"
    }, _ctx.ptm("decrementButton")), [renderSlot(_ctx.$slots, _ctx.$slots.decrementicon ? "decrementicon" : "decrementbuttonicon", {}, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.decrementIcon || _ctx.decrementButtonIcon ? "span" : "AngleDownIcon"), mergeProps({
        "class": [_ctx.decrementIcon, _ctx.decrementButtonIcon]
      }, _ctx.ptm("decrementIcon"), {
        "data-pc-section": "decrementicon"
      }), null, 16, ["class"]))];
    })], 16, _hoisted_2)];
  })], 16)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "incrementbutton", {
    listeners: $options.upButtonListeners
  }, function() {
    return [_ctx.showButtons && _ctx.buttonLayout !== "stacked" ? (openBlock(), createElementBlock("button", mergeProps({
      key: 0,
      "class": [_ctx.cx("incrementButton"), _ctx.incrementButtonClass]
    }, toHandlers($options.upButtonListeners, true), {
      disabled: _ctx.disabled,
      tabindex: -1,
      "aria-hidden": "true",
      type: "button"
    }, _ctx.ptm("incrementButton")), [renderSlot(_ctx.$slots, _ctx.$slots.incrementicon ? "incrementicon" : "incrementbuttonicon", {}, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.incrementIcon || _ctx.incrementButtonIcon ? "span" : "AngleUpIcon"), mergeProps({
        "class": [_ctx.incrementIcon, _ctx.incrementButtonIcon]
      }, _ctx.ptm("incrementIcon"), {
        "data-pc-section": "incrementicon"
      }), null, 16, ["class"]))];
    })], 16, _hoisted_3)) : createCommentVNode("", true)];
  }), renderSlot(_ctx.$slots, "decrementbutton", {
    listeners: $options.downButtonListeners
  }, function() {
    return [_ctx.showButtons && _ctx.buttonLayout !== "stacked" ? (openBlock(), createElementBlock("button", mergeProps({
      key: 0,
      "class": [_ctx.cx("decrementButton"), _ctx.decrementButtonClass]
    }, toHandlers($options.downButtonListeners, true), {
      disabled: _ctx.disabled,
      tabindex: -1,
      "aria-hidden": "true",
      type: "button"
    }, _ctx.ptm("decrementButton")), [renderSlot(_ctx.$slots, _ctx.$slots.decrementicon ? "decrementicon" : "decrementbuttonicon", {}, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.decrementIcon || _ctx.decrementButtonIcon ? "span" : "AngleDownIcon"), mergeProps({
        "class": [_ctx.decrementIcon, _ctx.decrementButtonIcon]
      }, _ctx.ptm("decrementIcon"), {
        "data-pc-section": "decrementicon"
      }), null, 16, ["class"]))];
    })], 16, _hoisted_4)) : createCommentVNode("", true)];
  })], 16);
}
script.render = render;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { $awn } = useNuxtApp();
    const { locale: locale2 } = useI18n();
    const route = useRoute$1();
    useRouter$1();
    const { data: Product, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${api.GetPlantById}/${route.params.id}`,
      {
        baseURL: apiBase,
        credentials: "include",
        headers: {
          "accept-language": locale2.value === "ar" ? "ar" : "en"
        }
      },
      "$y4Gy8v3e3A"
    )), __temp = await __temp, __restore(), __temp);
    let related = ref();
    watchEffect(() => {
    });
    ref("one");
    ref("");
    const tab = ref("one");
    ref("one");
    let quantity = ref(1);
    ref(0);
    watchEffect(() => {
    });
    const ProductForFavorite = ref(null);
    const isAuth = useAuth().value;
    const AddToFavoritebeforLogin = () => {
      $awn.alert(
        locale2.value === "ar" ? "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629\u060C \u064A\u062C\u0628 \u0639\u0644\u064A\u0643 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0623\u0648\u0644\u0627\u064B" : "Can't add to favorites, You must log in first",
        {
          durations: { global: 5e3 }
        }
      );
    };
    const GetProductByUserId = async () => {
      var _a;
      const {
        data: ProductFav,
        error: errorFav,
        pending: pendingFav,
        execute: executeFav
      } = await useGetSiteApi().GetAll(
        `/api/v1/Products/GetProductByIdAndClientId/${route.params.id.toString()}/${useUserInfo().value.clientId}`,
        {
          credentials: "include"
        }
      );
      ProductForFavorite.value = (_a = ProductFav.value) == null ? void 0 : _a.data;
    };
    isAuth.isAuthenticated ? GetProductByUserId() : "";
    const AddToFavorite = async () => {
      await $fetch(`${api.AddToFav}`, {
        credentials: "include",
        baseURL: apiBase,
        method: "POST",
        body: {
          productId: route.params.id.toString(),
          clientId: useUserInfo().value.clientId
        },
        headers: {
          Authorization: `Bearer ${useMainToken().value}`
        }
      });
      $awn.success("Successfully added to favorites");
      ChangeIcon();
    };
    const removeFromFavorite = async () => {
      if (isAuth.isAuthenticated) {
        await $fetch(
          `/api/v1/Products/RemoveProductFromFavorites/${useUserInfo().value.clientId}/${id}`,
          {
            baseURL: apiBase,
            method: "DELETE",
            credentials: "include",
            body: {
              productId: id,
              clientId: useUserInfo().value.clientId
            },
            headers: {
              Authorization: `Bearer ${useMainToken().value}`
            }
          }
        );
        $awn.success("Successfully removed from favorites");
        ChangeIcon();
      } else {
        $awn.alert("Can't add to favorites, You must log in first");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
      const _component_ElementsSpinner = __nuxt_component_0;
      const _component_font_awesome = _sfc_main$2;
      const _component_InputNumber = script;
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      const _component_ProductDetailsProductImagesCarousel = __nuxt_component_2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_ProductCard = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["product-info nav-margin pt-5", _ctx.$i18n.locale === "ar" ? "ar" : ""]
      }, _attrs))} data-v-0ca12f0f>`);
      if (unref(pending)) {
        _push(`<div class="loading" data-v-0ca12f0f>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="container" style="${ssrRenderStyle({ "position": "relative" })}" data-v-0ca12f0f><h5 class="links mb-10" data-v-0ca12f0f><span class="pointer" data-v-0ca12f0f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0646\u062A\u062C\u0627\u062A\u0646\u0627" : "Products")}</span> / ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? (_a = unref(Product)[0]) == null ? void 0 : _a.plant_name : (_b = unref(Product)[0]) == null ? void 0 : _b.plant_name)}</h5><div class="row" data-v-0ca12f0f><div class="info col-lg-6" data-v-0ca12f0f><div class="heart" data-v-0ca12f0f>`);
        if (unref(isAuth).isAuthenticated) {
          _push(`<span data-v-0ca12f0f>`);
          if (!((_c = unref(ProductForFavorite)) == null ? void 0 : _c.isFavorite)) {
            _push(ssrRenderComponent(_component_font_awesome, {
              onClick: ($event) => AddToFavorite(),
              icon: ["far", "heart"],
              class: "pointer"
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_font_awesome, {
              onClick: ($event) => removeFromFavorite(),
              icon: ["fas", "heart"]
            }, null, _parent));
          }
          _push(`</span>`);
        } else {
          _push(`<span data-v-0ca12f0f>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            onClick: ($event) => AddToFavoritebeforLogin(),
            icon: ["far", "heart"]
          }, null, _parent));
          _push(`</span>`);
        }
        _push(`</div><h2 class="title" data-v-0ca12f0f><img class="leaf"${ssrRenderAttr("src", _imports_1)} alt="" data-v-0ca12f0f> ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? (_d = unref(Product)[0]) == null ? void 0 : _d.plant_name : (_e = unref(Product)[0]) == null ? void 0 : _e.plant_name)}</h2><h2 class="price" data-v-0ca12f0f><span class="${ssrRenderClass(((_g = (_f = unref(Product)) == null ? void 0 : _f.productOffer) == null ? void 0 : _g.newPrice) ? "line-through" : "")}" data-v-0ca12f0f>${ssrInterpolate((_a2 = (_h = unref(Product)[0]) == null ? void 0 : _h.price) != null ? _a2 : "999")} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u0631\u0647\u0645 \u0625\u0645\u0627\u0631\u0627\u062A\u064A" : "AED")}</span>`);
        if ((_j = (_i = unref(Product)) == null ? void 0 : _i.productOffer) == null ? void 0 : _j.newPrice) {
          _push(`<span class="mx-2" data-v-0ca12f0f>${ssrInterpolate((_l = (_k = unref(Product)[0]) == null ? void 0 : _k.productOffer) == null ? void 0 : _l.newPrice)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062F\u0631\u0647\u0645 \u0625\u0645\u0627\u0631\u0627\u062A\u064A" : "AED")}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h2><div class="quantity" data-v-0ca12f0f><div class="flex-auto" data-v-0ca12f0f><label for="minmax-buttons" class="font-bold block mb-2" data-v-0ca12f0f><h5 class="mb-0" data-v-0ca12f0f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0643\u0645\u064A\u0629" : "Quantity")}</h5></label>`);
        _push(ssrRenderComponent(_component_InputNumber, {
          modelValue: unref(quantity),
          "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : quantity = $event,
          id: "minmax-buttons",
          inputId: "minmax-buttons",
          mode: "decimal",
          showButtons: "",
          min: 0,
          max: 100,
          fluid: ""
        }, null, _parent));
        _push(`</div></div>`);
        if ((_m = unref(Product)[0]) == null ? void 0 : _m.description) {
          _push(`<div class="desc mt-5" data-v-0ca12f0f><div data-v-0ca12f0f>${_ctx.$i18n.locale === "ar" ? (_n = unref(Product)[0]) == null ? void 0 : _n.description : (_o = unref(Product)[0]) == null ? void 0 : _o.description}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!((_p = unref(Product)[0]) == null ? void 0 : _p.description)) {
          _push(`<div class="mt-5" data-v-0ca12f0f><h5 class="fw-bold" data-v-0ca12f0f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0644\u0627 \u064A\u0648\u062C\u062F \u0648\u0635\u0641" : "There is no description")}</h5></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="add-to-cart mt-4" data-v-0ca12f0f><button class="btn" data-v-0ca12f0f><span data-v-0ca12f0f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629" : "Add To Cart")}</span></button></div><div class="my-4" data-v-0ca12f0f>`);
        _push(ssrRenderComponent(_component_v_tabs, {
          modelValue: unref(tab),
          "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
          "bg-color": "transparent"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_tab, {
                class: "tabs",
                style: { "color": "#78c044", "font-weight": "bold" },
                value: "one"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex flex-column" data-v-0ca12f0f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "droplet"] }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "droplet"] })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_tab, {
                class: "tabs",
                value: "two"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex flex-column" data-v-0ca12f0f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cloud-sun"] }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "cloud-sun"] })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_tab, {
                class: "tabs",
                value: "three"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex flex-column" data-v-0ca12f0f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "snowflake"] }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "snowflake"] })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_tab, {
                class: "tabs",
                value: "five"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "sun"] }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_font_awesome, { icon: ["fas", "sun"] })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_tab, {
                class: "tabs",
                value: "six"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "temperature-high"] }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_font_awesome, { icon: ["fas", "temperature-high"] })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_tab, {
                  class: "tabs",
                  style: { "color": "#78c044", "font-weight": "bold" },
                  value: "one"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode(_component_font_awesome, { icon: ["fas", "droplet"] })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, {
                  class: "tabs",
                  value: "two"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode(_component_font_awesome, { icon: ["fas", "cloud-sun"] })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, {
                  class: "tabs",
                  value: "three"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode(_component_font_awesome, { icon: ["fas", "snowflake"] })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, {
                  class: "tabs",
                  value: "five"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_font_awesome, { icon: ["fas", "sun"] })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, {
                  class: "tabs",
                  value: "six"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_font_awesome, { icon: ["fas", "temperature-high"] })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-4" style="${ssrRenderStyle({ "color": "#333 !important", "opacity": "1" })}" data-v-0ca12f0f>`);
        _push(ssrRenderComponent(_component_v_window, {
          modelValue: unref(tab),
          "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
          style: { "color": "#333 !important", "opacity": "1" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_window_item, {
                value: "one",
                style: { "color": "#333 !important", "opacity": "1" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 style="${ssrRenderStyle({ "color": "#78c044", "font-weight": "bold" })}" data-v-0ca12f0f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "droplet"] }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(_ctx.$i18n.locale == "en" ? "Water" : "\u0645\u0627\u0621")}</h5><p data-v-0ca12f0f${_scopeId2}>${ssrInterpolate(unref(Product)[0].water)}</p>`);
                  } else {
                    return [
                      createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "droplet"] }),
                        createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Water" : "\u0645\u0627\u0621"), 1)
                      ]),
                      createVNode("p", null, toDisplayString(unref(Product)[0].water), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_window_item, {
                value: "two",
                class: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 style="${ssrRenderStyle({ "color": "#78c044", "font-weight": "bold" })}" data-v-0ca12f0f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cloud-sun"] }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(_ctx.$i18n.locale == "en" ? "Part Sun" : "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A")}</h5><p data-v-0ca12f0f${_scopeId2}>${ssrInterpolate(unref(Product)[0].part_sun)}</p>`);
                  } else {
                    return [
                      createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "cloud-sun"] }),
                        createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Part Sun" : "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A"), 1)
                      ]),
                      createVNode("p", null, toDisplayString(unref(Product)[0].part_sun), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_window_item, {
                value: "three",
                class: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 style="${ssrRenderStyle({ "color": "#78c044", "font-weight": "bold" })}" data-v-0ca12f0f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "snowflake"] }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(_ctx.$i18n.locale == "en" ? "Medium" : "\u0648\u0633\u0637")}</h5><p data-v-0ca12f0f${_scopeId2}>${ssrInterpolate(unref(Product)[0].medium)}</p>`);
                  } else {
                    return [
                      createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "snowflake"] }),
                        createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Medium" : "\u0648\u0633\u0637"), 1)
                      ]),
                      createVNode("p", null, toDisplayString(unref(Product)[0].medium), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_window_item, {
                value: "five",
                class: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 style="${ssrRenderStyle({ "color": "#78c044", "font-weight": "bold" })}" data-v-0ca12f0f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "sun"] }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(_ctx.$i18n.locale == "en" ? "Light" : "\u0627\u0644\u0636\u0648\u0621")}</h5><p data-v-0ca12f0f${_scopeId2}>${ssrInterpolate(unref(Product)[0].light)}</p>`);
                  } else {
                    return [
                      createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "sun"] }),
                        createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Light" : "\u0627\u0644\u0636\u0648\u0621"), 1)
                      ]),
                      createVNode("p", null, toDisplayString(unref(Product)[0].light), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_window_item, {
                value: "six",
                class: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 style="${ssrRenderStyle({ "color": "#78c044", "font-weight": "bold" })}" data-v-0ca12f0f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "temperature-high"] }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(_ctx.$i18n.locale == "en" ? "Temperature" : "\u062F\u0631\u062C\u0629 \u062D\u0631\u0627\u0631\u0629")}</h5><p data-v-0ca12f0f${_scopeId2}>${ssrInterpolate(unref(Product)[0].temperatures)}</p>`);
                  } else {
                    return [
                      createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "temperature-high"] }),
                        createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Temperature" : "\u062F\u0631\u062C\u0629 \u062D\u0631\u0627\u0631\u0629"), 1)
                      ]),
                      createVNode("p", null, toDisplayString(unref(Product)[0].temperatures), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_window_item, {
                  value: "one",
                  style: { "color": "#333 !important", "opacity": "1" }
                }, {
                  default: withCtx(() => [
                    createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                      createVNode(_component_font_awesome, { icon: ["fas", "droplet"] }),
                      createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Water" : "\u0645\u0627\u0621"), 1)
                    ]),
                    createVNode("p", null, toDisplayString(unref(Product)[0].water), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_window_item, {
                  value: "two",
                  class: ""
                }, {
                  default: withCtx(() => [
                    createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                      createVNode(_component_font_awesome, { icon: ["fas", "cloud-sun"] }),
                      createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Part Sun" : "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A"), 1)
                    ]),
                    createVNode("p", null, toDisplayString(unref(Product)[0].part_sun), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_window_item, {
                  value: "three",
                  class: ""
                }, {
                  default: withCtx(() => [
                    createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                      createVNode(_component_font_awesome, { icon: ["fas", "snowflake"] }),
                      createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Medium" : "\u0648\u0633\u0637"), 1)
                    ]),
                    createVNode("p", null, toDisplayString(unref(Product)[0].medium), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_window_item, {
                  value: "five",
                  class: ""
                }, {
                  default: withCtx(() => [
                    createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                      createVNode(_component_font_awesome, { icon: ["fas", "sun"] }),
                      createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Light" : "\u0627\u0644\u0636\u0648\u0621"), 1)
                    ]),
                    createVNode("p", null, toDisplayString(unref(Product)[0].light), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_window_item, {
                  value: "six",
                  class: ""
                }, {
                  default: withCtx(() => [
                    createVNode("h5", { style: { "color": "#78c044", "font-weight": "bold" } }, [
                      createVNode(_component_font_awesome, { icon: ["fas", "temperature-high"] }),
                      createTextVNode(" " + toDisplayString(_ctx.$i18n.locale == "en" ? "Temperature" : "\u062F\u0631\u062C\u0629 \u062D\u0631\u0627\u0631\u0629"), 1)
                    ]),
                    createVNode("p", null, toDisplayString(unref(Product)[0].temperatures), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="col-12 col-lg-6 mb-10" data-v-0ca12f0f>`);
        if (unref(Product)) {
          _push(ssrRenderComponent(_component_ProductDetailsProductImagesCarousel, {
            ProductImages: (_q = unref(Product)[0]) == null ? void 0 : _q.photos,
            ProductMainImg: (_r = unref(Product)[0]) == null ? void 0 : _r.photos[0]
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      }
      if ((_s = unref(related)) == null ? void 0 : _s.length) {
        _push(`<div class="container my-10 py-10" data-v-0ca12f0f><h1 class="color fw-bold" data-v-0ca12f0f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0628\u0647\u0629" : "Discover similar products")}</h1><div data-v-0ca12f0f>`);
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
                      _push3(`<div class="product"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-0ca12f0f${_scopeId2}>`);
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0ca12f0f"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DS0BtfEC.mjs.map
