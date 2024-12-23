import { addClass, removeClass } from '@primeuix/utils/dom';
import { s as script$b } from './index-DvJXdbWX.mjs';
import { openBlock, createElementBlock, mergeProps, resolveComponent, resolveDirective, createBlock, Transition, withCtx, withDirectives, createElementVNode, renderSlot, resolveDynamicComponent, createCommentVNode, vShow, createTextVNode, toDisplayString, Fragment, renderList, createVNode, normalizeClass, withKeys, normalizeProps } from 'vue';
import { s as script$1$3, R as Ripple } from './index-ChTkkqYU.mjs';
import { s as script$a, a as script$2$1 } from './index-DxK02X-z.mjs';
import { s as script$c } from './index-C7iL46Cz.mjs';
import { s as script$d } from './index-BmTln-ia.mjs';
import { B as BaseStyle } from './server.mjs';

var script$9 = {
  name: "PlusIcon",
  "extends": script$b
};
var _hoisted_1$8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$5 = [_hoisted_1$8];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$5, 16);
}
script$9.render = render$8;
var script$8 = {
  name: "UploadIcon",
  "extends": script$b
};
var _hoisted_1$7 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$4 = [_hoisted_1$7];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$4, 16);
}
script$8.render = render$7;
var script$7 = {
  name: "ExclamationTriangleIcon",
  "extends": script$b
};
var _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_4 = [_hoisted_1$6, _hoisted_2$3, _hoisted_3$1];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_4, 16);
}
script$7.render = render$6;
var script$6 = {
  name: "InfoCircleIcon",
  "extends": script$b
};
var _hoisted_1$5 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$2 = [_hoisted_1$5];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$2, 16);
}
script$6.render = render$5;
var script$5 = {
  name: "TimesCircleIcon",
  "extends": script$b
};
var _hoisted_1$4 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$4];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$5.render = render$4;
var theme$2 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-message {\n    border-radius: ".concat(dt("message.border.radius"), ";\n    outline-width: ").concat(dt("message.border.width"), ";\n    outline-style: solid;\n}\n\n.p-message-content {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("message.content.padding"), ";\n    gap: ").concat(dt("message.content.gap"), ";\n    height: 100%;\n}\n\n.p-message-icon {\n    flex-shrink: 0;\n}\n\n.p-message-close-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    margin: 0 0 0 auto;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt("message.close.button.width"), ";\n    height: ").concat(dt("message.close.button.height"), ";\n    border-radius: ").concat(dt("message.close.button.border.radius"), ";\n    background: transparent;\n    transition: background ").concat(dt("message.transition.duration"), ", color ").concat(dt("message.transition.duration"), ", outline-color ").concat(dt("message.transition.duration"), ", box-shadow ").concat(dt("message.transition.duration"), ", opacity 0.3s;\n    outline-color: transparent;\n    color: inherit;\n    padding: 0;\n    border: none;\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-message-close-icon {\n    font-size: ").concat(dt("message.close.icon.size"), ";\n    width: ").concat(dt("message.close.icon.size"), ";\n    height: ").concat(dt("message.close.icon.size"), ";\n}\n\n.p-message-close-button:focus-visible {\n    outline-width: ").concat(dt("message.close.button.focus.ring.width"), ";\n    outline-style: ").concat(dt("message.close.button.focus.ring.style"), ";\n    outline-offset: ").concat(dt("message.close.button.focus.ring.offset"), ";\n}\n\n.p-message-info {\n    background: ").concat(dt("message.info.background"), ";\n    outline-color: ").concat(dt("message.info.border.color"), ";\n    color: ").concat(dt("message.info.color"), ";\n    box-shadow: ").concat(dt("message.info.shadow"), ";\n}\n\n.p-message-info .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.info.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.info.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-info .p-message-close-button:hover {\n    background: ").concat(dt("message.info.close.button.hover.background"), ";\n}\n\n.p-message-success {\n    background: ").concat(dt("message.success.background"), ";\n    outline-color: ").concat(dt("message.success.border.color"), ";\n    color: ").concat(dt("message.success.color"), ";\n    box-shadow: ").concat(dt("message.success.shadow"), ";\n}\n\n.p-message-success .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.success.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.success.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-success .p-message-close-button:hover {\n    background: ").concat(dt("message.success.close.button.hover.background"), ";\n}\n\n.p-message-warn {\n    background: ").concat(dt("message.warn.background"), ";\n    outline-color: ").concat(dt("message.warn.border.color"), ";\n    color: ").concat(dt("message.warn.color"), ";\n    box-shadow: ").concat(dt("message.warn.shadow"), ";\n}\n\n.p-message-warn .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.warn.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.warn.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-warn .p-message-close-button:hover {\n    background: ").concat(dt("message.warn.close.button.hover.background"), ";\n}\n\n.p-message-error {\n    background: ").concat(dt("message.error.background"), ";\n    outline-color: ").concat(dt("message.error.border.color"), ";\n    color: ").concat(dt("message.error.color"), ";\n    box-shadow: ").concat(dt("message.error.shadow"), ";\n}\n\n.p-message-error .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.error.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.error.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-error .p-message-close-button:hover {\n    background: ").concat(dt("message.error.close.button.hover.background"), ";\n}\n\n.p-message-secondary {\n    background: ").concat(dt("message.secondary.background"), ";\n    outline-color: ").concat(dt("message.secondary.border.color"), ";\n    color: ").concat(dt("message.secondary.color"), ";\n    box-shadow: ").concat(dt("message.secondary.shadow"), ";\n}\n\n.p-message-secondary .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.secondary.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.secondary.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-secondary .p-message-close-button:hover {\n    background: ").concat(dt("message.secondary.close.button.hover.background"), ";\n}\n\n.p-message-contrast {\n    background: ").concat(dt("message.contrast.background"), ";\n    outline-color: ").concat(dt("message.contrast.border.color"), ";\n    color: ").concat(dt("message.contrast.color"), ";\n    box-shadow: ").concat(dt("message.contrast.shadow"), ";\n}\n\n.p-message-contrast .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.contrast.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.contrast.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-contrast .p-message-close-button:hover {\n    background: ").concat(dt("message.contrast.close.button.hover.background"), ";\n}\n\n.p-message-text {\n    font-size: ").concat(dt("message.text.font.size"), ";\n    font-weight: ").concat(dt("message.text.font.weight"), ";\n}\n\n.p-message-icon {\n    font-size: ").concat(dt("message.icon.size"), ";\n    width: ").concat(dt("message.icon.size"), ";\n    height: ").concat(dt("message.icon.size"), ";\n}\n\n.p-message-enter-from {\n    opacity: 0;\n}\n\n.p-message-enter-active {\n    transition: opacity 0.3s;\n}\n\n.p-message.p-message-leave-from {\n    max-height: 1000px;\n}\n\n.p-message.p-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin: 0;\n}\n\n.p-message-leave-active {\n    overflow: hidden;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;\n}\n\n.p-message-leave-active .p-message-close-button {\n    opacity: 0;\n}\n");
};
var classes$2 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return "p-message p-component p-message-" + props.severity;
  },
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
};
var MessageStyle = BaseStyle.extend({
  name: "message",
  theme: theme$2,
  classes: classes$2
});
var script$1$2 = {
  name: "BaseMessage",
  "extends": script$d,
  props: {
    severity: {
      type: String,
      "default": "info"
    },
    closable: {
      type: Boolean,
      "default": false
    },
    life: {
      type: Number,
      "default": null
    },
    icon: {
      type: String,
      "default": void 0
    },
    closeIcon: {
      type: String,
      "default": void 0
    },
    closeButtonProps: {
      type: null,
      "default": null
    }
  },
  style: MessageStyle,
  provide: function provide() {
    return {
      $pcMessage: this,
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "Message",
  "extends": script$1$2,
  inheritAttrs: false,
  emits: ["close", "life-end"],
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (this.life) {
      setTimeout(function() {
        _this.visible = false;
        _this.$emit("life-end");
      }, this.life);
    }
  },
  methods: {
    close: function close(event) {
      this.visible = false;
      this.$emit("close", event);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$6,
        success: script$c,
        warn: script$7,
        error: script$5
      }[this.severity];
    },
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    TimesIcon: script$1$3,
    InfoCircleIcon: script$6,
    CheckIcon: script$c,
    ExclamationTriangleIcon: script$7,
    TimesCircleIcon: script$5
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
var _hoisted_1$3 = ["aria-label"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-message",
    appear: ""
  }, _ctx.ptmi("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        "class": _ctx.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, _ctx.ptm("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
        key: 0,
        closeCallback: $options.close
      }) : (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        "class": _ctx.cx("content")
      }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "icon", {
        "class": "p-message-icon"
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : null), mergeProps({
          "class": [_ctx.cx("icon"), _ctx.icon]
        }, _ctx.ptm("icon")), null, 16, ["class"]))];
      }), _ctx.$slots["default"] ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        "class": ["p-message-text", _ctx.cx("text")]
      }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default")], 16)) : createCommentVNode("", true), _ctx.closable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
        key: 1,
        "class": _ctx.cx("closeButton"),
        "aria-label": $options.closeAriaLabel,
        type: "button",
        onClick: _cache[0] || (_cache[0] = function($event) {
          return $options.close($event);
        })
      }, _objectSpread(_objectSpread({}, _ctx.closeButtonProps), _ctx.ptm("closeButton"))), [renderSlot(_ctx.$slots, "closeicon", {}, function() {
        return [_ctx.closeIcon ? (openBlock(), createElementBlock("i", mergeProps({
          key: 0,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _ctx.ptm("closeIcon")), null, 16)) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _ctx.ptm("closeIcon")), null, 16, ["class"]))];
      })], 16, _hoisted_1$3)), [[_directive_ripple]]) : createCommentVNode("", true)], 16))], 16), [[vShow, $data.visible]])];
    }),
    _: 3
  }, 16);
}
script$4.render = render$3;
var theme$1 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-progressbar {\n    position: relative;\n    overflow: hidden;\n    height: ".concat(dt("progressbar.height"), ";\n    background: ").concat(dt("progressbar.background"), ";\n    border-radius: ").concat(dt("progressbar.border.radius"), ";\n}\n\n.p-progressbar-value {\n    margin: 0;\n    background: ").concat(dt("progressbar.value.background"), ";\n}\n\n.p-progressbar-label {\n    color: ").concat(dt("progressbar.label.color"), ";\n    font-size: ").concat(dt("progressbar.label.font.size"), ";\n    font-weight: ").concat(dt("progressbar.label.font.weight"), ';\n}\n\n.p-progressbar-determinate .p-progressbar-value {\n    height: 100%;\n    width: 0%;\n    position: absolute;\n    display: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: width 1s ease-in-out;\n}\n\n.p-progressbar-determinate .p-progressbar-label {\n    display: inline-flex;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::before {\n    content: "";\n    position: absolute;\n    background: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::after {\n    content: "";\n    position: absolute;\n    background: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    animation-delay: 1.15s;\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n    0% {\n        left: -35%;\n        right: 100%;\n    }\n    60% {\n        left: 100%;\n        right: -90%;\n    }\n    100% {\n        left: 100%;\n        right: -90%;\n    }\n}\n@keyframes p-progressbar-indeterminate-anim {\n    0% {\n        left: -35%;\n        right: 100%;\n    }\n    60% {\n        left: 100%;\n        right: -90%;\n    }\n    100% {\n        left: 100%;\n        right: -90%;\n    }\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n    0% {\n        left: -200%;\n        right: 100%;\n    }\n    60% {\n        left: 107%;\n        right: -8%;\n    }\n    100% {\n        left: 107%;\n        right: -8%;\n    }\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n    0% {\n        left: -200%;\n        right: 100%;\n    }\n    60% {\n        left: 107%;\n        right: -8%;\n    }\n    100% {\n        left: 107%;\n        right: -8%;\n    }\n}\n');
};
var classes$1 = {
  root: function root2(_ref2) {
    var instance = _ref2.instance;
    return ["p-progressbar p-component", {
      "p-progressbar-determinate": instance.determinate,
      "p-progressbar-indeterminate": instance.indeterminate
    }];
  },
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = BaseStyle.extend({
  name: "progressbar",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseProgressBar",
  "extends": script$d,
  props: {
    value: {
      type: Number,
      "default": null
    },
    mode: {
      type: String,
      "default": "determinate"
    },
    showValue: {
      type: Boolean,
      "default": true
    }
  },
  style: ProgressBarStyle,
  provide: function provide2() {
    return {
      $pcProgressBar: this,
      $parentInstance: this
    };
  }
};
var script$3 = {
  name: "ProgressBar",
  "extends": script$1$1,
  inheritAttrs: false,
  computed: {
    progressStyle: function progressStyle() {
      return {
        width: this.value + "%",
        display: "flex"
      };
    },
    indeterminate: function indeterminate() {
      return this.mode === "indeterminate";
    },
    determinate: function determinate() {
      return this.mode === "determinate";
    }
  }
};
var _hoisted_1$2 = ["aria-valuenow"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    role: "progressbar",
    "class": _ctx.cx("root"),
    "aria-valuemin": "0",
    "aria-valuenow": _ctx.value,
    "aria-valuemax": "100"
  }, _ctx.ptmi("root")), [$options.determinate ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("value"),
    style: $options.progressStyle
  }, _ctx.ptm("value")), [_ctx.value != null && _ctx.value !== 0 && _ctx.showValue ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode(toDisplayString(_ctx.value + "%"), 1)];
  })], 16)) : createCommentVNode("", true)], 16)) : $options.indeterminate ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("value")
  }, _ctx.ptm("value")), null, 16)) : createCommentVNode("", true)], 16, _hoisted_1$2);
}
script$3.render = render$2;
var theme3 = function theme4(_ref) {
  var dt = _ref.dt;
  return '\n.p-fileupload input[type="file"] {\n    display: none;\n}\n\n.p-fileupload-advanced {\n    border: 1px solid '.concat(dt("fileupload.border.color"), ";\n    border-radius: ").concat(dt("fileupload.border.radius"), ";\n    background: ").concat(dt("fileupload.background"), ";\n    color: ").concat(dt("fileupload.color"), ";\n}\n\n.p-fileupload-header {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("fileupload.header.padding"), ";\n    background: ").concat(dt("fileupload.header.background"), ";\n    color: ").concat(dt("fileupload.header.color"), ";\n    border-style: solid;\n    border-width: ").concat(dt("fileupload.header.border.width"), ";\n    border-color: ").concat(dt("fileupload.header.border.color"), ";\n    border-radius: ").concat(dt("fileupload.header.border.radius"), ";\n    gap: ").concat(dt("fileupload.header.gap"), ";\n}\n\n.p-fileupload-content {\n    border: 1px solid transparent;\n    position: relative;\n    transition: border-color ").concat(dt("fileupload.transition.duration"), ";\n    padding: ").concat(dt("fileupload.content.padding"), ";\n}\n\n.p-fileupload-content .p-progressbar {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: ").concat(dt("fileupload.progressbar.height"), ";\n}\n\n.p-fileupload-file-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-top: 1.125rem;\n}\n\n.p-fileupload-file {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: ").concat(dt("fileupload.file.padding"), ";\n    border-bottom: 1px solid ").concat(dt("fileupload.file.border.color"), ";\n    gap: ").concat(dt("fileupload.file.gap"), ";\n}\n\n.p-fileupload-file:last-child {\n    border-bottom: 0;\n}\n\n.p-fileupload-file-info {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("fileupload.file.info.gap"), ";\n}\n\n.p-fileupload-file-thumbnail {\n    flex-shrink: 0;\n}\n\n.p-fileupload-file-actions {\n    margin-left: auto;\n}\n\n.p-fileupload-highlight {\n    border: 1px dashed ").concat(dt("fileupload.content.highlight.border.color"), ";\n}\n\n.p-fileupload-advanced .p-message {\n    margin-top: 0;\n}\n\n.p-fileupload-basic {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: ").concat(dt("fileupload.basic.gap"), ";\n}\n");
};
var classes = {
  root: function root3(_ref2) {
    var props = _ref2.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  header: "p-fileupload-header",
  pcChooseButton: "p-fileupload-choose-button",
  pcUploadButton: "p-fileupload-upload-button",
  pcCancelButton: "p-fileupload-cancel-button",
  content: "p-fileupload-content",
  fileList: "p-fileupload-file-list",
  file: "p-fileupload-file",
  fileThumbnail: "p-fileupload-file-thumbnail",
  fileInfo: "p-fileupload-file-info",
  fileName: "p-fileupload-file-name",
  fileSize: "p-fileupload-file-size",
  pcFileBadge: "p-fileupload-file-badge",
  fileActions: "p-fileupload-file-actions",
  pcFileRemoveButton: "p-fileupload-file-remove-button"
};
var FileUploadStyle = BaseStyle.extend({
  name: "fileupload",
  theme: theme3,
  classes
});
var script$2 = {
  name: "BaseFileUpload",
  "extends": script$d,
  props: {
    name: {
      type: String,
      "default": null
    },
    url: {
      type: String,
      "default": null
    },
    mode: {
      type: String,
      "default": "advanced"
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    accept: {
      type: String,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    auto: {
      type: Boolean,
      "default": false
    },
    maxFileSize: {
      type: Number,
      "default": null
    },
    invalidFileSizeMessage: {
      type: String,
      "default": "{0}: Invalid file size, file size should be smaller than {1}."
    },
    invalidFileTypeMessage: {
      type: String,
      "default": "{0}: Invalid file type, allowed file types: {1}."
    },
    fileLimit: {
      type: Number,
      "default": null
    },
    invalidFileLimitMessage: {
      type: String,
      "default": "Maximum number of files exceeded, limit is {0} at most."
    },
    withCredentials: {
      type: Boolean,
      "default": false
    },
    previewWidth: {
      type: Number,
      "default": 50
    },
    chooseLabel: {
      type: String,
      "default": null
    },
    uploadLabel: {
      type: String,
      "default": null
    },
    cancelLabel: {
      type: String,
      "default": null
    },
    customUpload: {
      type: Boolean,
      "default": false
    },
    showUploadButton: {
      type: Boolean,
      "default": true
    },
    showCancelButton: {
      type: Boolean,
      "default": true
    },
    chooseIcon: {
      type: String,
      "default": void 0
    },
    uploadIcon: {
      type: String,
      "default": void 0
    },
    cancelIcon: {
      type: String,
      "default": void 0
    },
    style: null,
    "class": null,
    chooseButtonProps: {
      type: null,
      "default": null
    },
    uploadButtonProps: {
      type: Object,
      "default": function _default() {
        return {
          severity: "secondary"
        };
      }
    },
    cancelButtonProps: {
      type: Object,
      "default": function _default2() {
        return {
          severity: "secondary"
        };
      }
    }
  },
  style: FileUploadStyle,
  provide: function provide3() {
    return {
      $pcFileUpload: this,
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "FileContent",
  hostName: "FileUpload",
  "extends": script$d,
  emits: ["remove"],
  props: {
    files: {
      type: Array,
      "default": function _default3() {
        return [];
      }
    },
    badgeSeverity: {
      type: String,
      "default": "warn"
    },
    badgeValue: {
      type: String,
      "default": null
    },
    previewWidth: {
      type: Number,
      "default": 50
    },
    templates: {
      type: null,
      "default": null
    }
  },
  methods: {
    formatSize: function formatSize(bytes) {
      var _this$$primevue$confi;
      var k = 1024;
      var dm = 3;
      var sizes = ((_this$$primevue$confi = this.$primevue.config.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.fileSizeTypes) || ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (bytes === 0) {
        return "0 ".concat(sizes[0]);
      }
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      var formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
      return "".concat(formattedSize, " ").concat(sizes[i]);
    }
  },
  components: {
    Button: script$a,
    Badge: script$2$1,
    TimesIcon: script$1$3
  }
};
var _hoisted_1$1 = ["alt", "src", "width"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Badge = resolveComponent("Badge");
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _component_Button = resolveComponent("Button");
  return openBlock(true), createElementBlock(Fragment, null, renderList($props.files, function(file, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: file.name + file.type + file.size,
      "class": _ctx.cx("file"),
      ref_for: true
    }, _ctx.ptm("file")), [createElementVNode("img", mergeProps({
      role: "presentation",
      "class": _ctx.cx("fileThumbnail"),
      alt: file.name,
      src: file.objectURL,
      width: $props.previewWidth,
      ref_for: true
    }, _ctx.ptm("fileThumbnail")), null, 16, _hoisted_1$1), createElementVNode("div", mergeProps({
      "class": _ctx.cx("fileInfo"),
      ref_for: true
    }, _ctx.ptm("fileInfo")), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("fileName"),
      ref_for: true
    }, _ctx.ptm("fileName")), toDisplayString(file.name), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx("fileSize"),
      ref_for: true
    }, _ctx.ptm("fileSize")), toDisplayString($options.formatSize(file.size)), 17)], 16), createVNode(_component_Badge, {
      value: $props.badgeValue,
      "class": normalizeClass(_ctx.cx("pcFileBadge")),
      severity: $props.badgeSeverity,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("pcFileBadge")
    }, null, 8, ["value", "class", "severity", "unstyled", "pt"]), createElementVNode("div", mergeProps({
      "class": _ctx.cx("fileActions"),
      ref_for: true
    }, _ctx.ptm("fileActions")), [createVNode(_component_Button, {
      onClick: function onClick($event) {
        return _ctx.$emit("remove", index);
      },
      text: "",
      rounded: "",
      severity: "danger",
      "class": normalizeClass(_ctx.cx("pcFileRemoveButton")),
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("pcFileRemoveButton")
    }, {
      icon: withCtx(function(iconProps) {
        return [$props.templates.fileremoveicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.fileremoveicon), {
          key: 0,
          "class": normalizeClass(iconProps["class"]),
          file,
          index
        }, null, 8, ["class", "file", "index"])) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": iconProps["class"],
          "aria-hidden": "true",
          ref_for: true
        }, _ctx.ptm("pcFileRemoveButton")["icon"]), null, 16, ["class"]))];
      }),
      _: 2
    }, 1032, ["onClick", "class", "unstyled", "pt"])], 16)], 16);
  }), 128);
}
script$1.render = render$1;
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r))
    return _arrayLikeToArray(r);
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u)
        throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
var script = {
  name: "FileUpload",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["select", "uploader", "before-upload", "progress", "upload", "error", "before-send", "clear", "remove", "remove-uploaded-file"],
  duplicateIEEvent: false,
  data: function data2() {
    return {
      uploadedFileCount: 0,
      files: [],
      messages: [],
      focused: false,
      progress: null,
      uploadedFiles: []
    };
  },
  methods: {
    upload: function upload() {
      if (this.hasFiles)
        this.uploader();
    },
    onBasicUploaderClick: function onBasicUploaderClick(event) {
      if (event.button === 0 && !this.hasFiles)
        this.$refs.fileInput.click();
    },
    onFileSelect: function onFileSelect(event) {
      if (event.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
        this.duplicateIEEvent = false;
        return;
      }
      this.messages = [];
      this.files = this.files || [];
      var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      var _iterator = _createForOfIteratorHelper(files), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var file = _step.value;
          if (!this.isFileSelected(file)) {
            if (this.validate(file)) {
              if (this.isImage(file)) {
                file.objectURL = (void 0).URL.createObjectURL(file);
              }
              this.files.push(file);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.$emit("select", {
        originalEvent: event,
        files: this.files
      });
      if (this.fileLimit) {
        this.checkFileLimit();
      }
      if (this.auto && this.hasFiles && !this.isFileLimitExceeded()) {
        this.uploader();
      }
      if (event.type !== "drop" && this.isIE11()) {
        this.clearIEInput();
      } else {
        this.clearInputElement();
      }
    },
    choose: function choose() {
      this.$refs.fileInput.click();
    },
    uploader: function uploader() {
      var _this = this;
      if (this.customUpload) {
        if (this.fileLimit) {
          this.uploadedFileCount += this.files.length;
        }
        this.$emit("uploader", {
          files: this.files
        });
        this.clear();
      } else {
        var xhr = new (void 0)();
        var formData = new FormData();
        this.$emit("before-upload", {
          xhr,
          formData
        });
        var _iterator2 = _createForOfIteratorHelper(this.files), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var file = _step2.value;
            formData.append(this.name, file, file.name);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        xhr.upload.addEventListener("progress", function(event) {
          if (event.lengthComputable) {
            _this.progress = Math.round(event.loaded * 100 / event.total);
          }
          _this.$emit("progress", {
            originalEvent: event,
            progress: _this.progress
          });
        });
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            var _this$uploadedFiles;
            _this.progress = 0;
            if (xhr.status >= 200 && xhr.status < 300) {
              if (_this.fileLimit) {
                _this.uploadedFileCount += _this.files.length;
              }
              _this.$emit("upload", {
                xhr,
                files: _this.files
              });
            } else {
              _this.$emit("error", {
                xhr,
                files: _this.files
              });
            }
            (_this$uploadedFiles = _this.uploadedFiles).push.apply(_this$uploadedFiles, _toConsumableArray(_this.files));
            _this.clear();
          }
        };
        xhr.open("POST", this.url, true);
        this.$emit("before-send", {
          xhr,
          formData
        });
        xhr.withCredentials = this.withCredentials;
        xhr.send(formData);
      }
    },
    clear: function clear() {
      this.files = [];
      this.messages = null;
      this.$emit("clear");
      if (this.isAdvanced) {
        this.clearInputElement();
      }
    },
    onFocus: function onFocus() {
      this.focused = true;
    },
    onBlur: function onBlur() {
      this.focused = false;
    },
    isFileSelected: function isFileSelected(file) {
      if (this.files && this.files.length) {
        var _iterator3 = _createForOfIteratorHelper(this.files), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var sFile = _step3.value;
            if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size)
              return true;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return false;
    },
    isIE11: function isIE11() {
      return !!(void 0)["MSInputMethodContext"] && !!(void 0)["documentMode"];
    },
    validate: function validate(file) {
      if (this.accept && !this.isFileTypeValid(file)) {
        this.messages.push(this.invalidFileTypeMessage.replace("{0}", file.name).replace("{1}", this.accept));
        return false;
      }
      if (this.maxFileSize && file.size > this.maxFileSize) {
        this.messages.push(this.invalidFileSizeMessage.replace("{0}", file.name).replace("{1}", this.formatSize(this.maxFileSize)));
        return false;
      }
      return true;
    },
    isFileTypeValid: function isFileTypeValid(file) {
      var acceptableTypes = this.accept.split(",").map(function(type2) {
        return type2.trim();
      });
      var _iterator4 = _createForOfIteratorHelper(acceptableTypes), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var type = _step4.value;
          var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
          if (acceptable) {
            return true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return false;
    },
    getTypeClass: function getTypeClass(fileType) {
      return fileType.substring(0, fileType.indexOf("/"));
    },
    isWildcard: function isWildcard(fileType) {
      return fileType.indexOf("*") !== -1;
    },
    getFileExtension: function getFileExtension(file) {
      return "." + file.name.split(".").pop();
    },
    isImage: function isImage(file) {
      return /^image\//.test(file.type);
    },
    onDragEnter: function onDragEnter(event) {
      if (!this.disabled) {
        event.stopPropagation();
        event.preventDefault();
      }
    },
    onDragOver: function onDragOver(event) {
      if (!this.disabled) {
        !this.isUnstyled && addClass(this.$refs.content, "p-fileupload-highlight");
        this.$refs.content.setAttribute("data-p-highlight", true);
        event.stopPropagation();
        event.preventDefault();
      }
    },
    onDragLeave: function onDragLeave() {
      if (!this.disabled) {
        !this.isUnstyled && removeClass(this.$refs.content, "p-fileupload-highlight");
        this.$refs.content.setAttribute("data-p-highlight", false);
      }
    },
    onDrop: function onDrop(event) {
      if (!this.disabled) {
        !this.isUnstyled && removeClass(this.$refs.content, "p-fileupload-highlight");
        this.$refs.content.setAttribute("data-p-highlight", false);
        event.stopPropagation();
        event.preventDefault();
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var allowDrop = this.multiple || files && files.length === 1;
        if (allowDrop) {
          this.onFileSelect(event);
        }
      }
    },
    remove: function remove(index) {
      this.clearInputElement();
      var removedFile = this.files.splice(index, 1)[0];
      this.files = _toConsumableArray(this.files);
      this.$emit("remove", {
        file: removedFile,
        files: this.files
      });
    },
    removeUploadedFile: function removeUploadedFile(index) {
      var removedFile = this.uploadedFiles.splice(index, 1)[0];
      this.uploadedFiles = _toConsumableArray(this.uploadedFiles);
      this.$emit("remove-uploaded-file", {
        file: removedFile,
        files: this.uploadedFiles
      });
    },
    clearInputElement: function clearInputElement() {
      this.$refs.fileInput.value = "";
    },
    clearIEInput: function clearIEInput() {
      if (this.$refs.fileInput) {
        this.duplicateIEEvent = true;
        this.$refs.fileInput.value = "";
      }
    },
    formatSize: function formatSize2(bytes) {
      var _this$$primevue$confi;
      var k = 1024;
      var dm = 3;
      var sizes = ((_this$$primevue$confi = this.$primevue.config.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.fileSizeTypes) || ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (bytes === 0) {
        return "0 ".concat(sizes[0]);
      }
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      var formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
      return "".concat(formattedSize, " ").concat(sizes[i]);
    },
    isFileLimitExceeded: function isFileLimitExceeded() {
      if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focused) {
        this.focused = false;
      }
      return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
    },
    checkFileLimit: function checkFileLimit() {
      if (this.isFileLimitExceeded()) {
        this.messages.push(this.invalidFileLimitMessage.replace("{0}", this.fileLimit.toString()));
      }
    },
    onMessageClose: function onMessageClose() {
      this.messages = null;
    }
  },
  computed: {
    isAdvanced: function isAdvanced() {
      return this.mode === "advanced";
    },
    isBasic: function isBasic() {
      return this.mode === "basic";
    },
    chooseButtonClass: function chooseButtonClass() {
      return [this.cx("pcChooseButton"), this["class"]];
    },
    basicFileChosenLabel: function basicFileChosenLabel() {
      var _this$$primevue$confi3;
      if (this.auto)
        return this.chooseButtonLabel;
      else if (this.hasFiles) {
        var _this$$primevue$confi2;
        if (this.files && this.files.length === 1)
          return this.files[0].name;
        return (_this$$primevue$confi2 = this.$primevue.config.locale) === null || _this$$primevue$confi2 === void 0 || (_this$$primevue$confi2 = _this$$primevue$confi2.fileChosenMessage) === null || _this$$primevue$confi2 === void 0 ? void 0 : _this$$primevue$confi2.replace("{0}", this.files.length);
      }
      return ((_this$$primevue$confi3 = this.$primevue.config.locale) === null || _this$$primevue$confi3 === void 0 ? void 0 : _this$$primevue$confi3.noFileChosenMessage) || "";
    },
    hasFiles: function hasFiles() {
      return this.files && this.files.length > 0;
    },
    hasUploadedFiles: function hasUploadedFiles() {
      return this.uploadedFiles && this.uploadedFiles.length > 0;
    },
    chooseDisabled: function chooseDisabled() {
      return this.disabled || this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    },
    uploadDisabled: function uploadDisabled() {
      return this.disabled || !this.hasFiles || this.fileLimit && this.fileLimit < this.files.length;
    },
    cancelDisabled: function cancelDisabled() {
      return this.disabled || !this.hasFiles;
    },
    chooseButtonLabel: function chooseButtonLabel() {
      return this.chooseLabel || this.$primevue.config.locale.choose;
    },
    uploadButtonLabel: function uploadButtonLabel() {
      return this.uploadLabel || this.$primevue.config.locale.upload;
    },
    cancelButtonLabel: function cancelButtonLabel() {
      return this.cancelLabel || this.$primevue.config.locale.cancel;
    },
    completedLabel: function completedLabel() {
      return this.$primevue.config.locale.completed;
    },
    pendingLabel: function pendingLabel() {
      return this.$primevue.config.locale.pending;
    }
  },
  components: {
    Button: script$a,
    ProgressBar: script$3,
    Message: script$4,
    FileContent: script$1,
    PlusIcon: script$9,
    UploadIcon: script$8,
    TimesIcon: script$1$3
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["multiple", "accept", "disabled"];
var _hoisted_2 = ["files"];
var _hoisted_3 = ["accept", "disabled", "multiple"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  var _component_ProgressBar = resolveComponent("ProgressBar");
  var _component_Message = resolveComponent("Message");
  var _component_FileContent = resolveComponent("FileContent");
  return $options.isAdvanced ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("input", mergeProps({
    ref: "fileInput",
    type: "file",
    onChange: _cache[0] || (_cache[0] = function() {
      return $options.onFileSelect && $options.onFileSelect.apply($options, arguments);
    }),
    multiple: _ctx.multiple,
    accept: _ctx.accept,
    disabled: $options.chooseDisabled
  }, _ctx.ptm("input")), null, 16, _hoisted_1), createElementVNode("div", mergeProps({
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header", {
    files: $data.files,
    uploadedFiles: $data.uploadedFiles,
    chooseCallback: $options.choose,
    uploadCallback: $options.uploader,
    clearCallback: $options.clear
  }, function() {
    return [createVNode(_component_Button, mergeProps({
      label: $options.chooseButtonLabel,
      "class": $options.chooseButtonClass,
      style: _ctx.style,
      disabled: _ctx.disabled,
      unstyled: _ctx.unstyled,
      onClick: $options.choose,
      onKeydown: withKeys($options.choose, ["enter"]),
      onFocus: $options.onFocus,
      onBlur: $options.onBlur
    }, _ctx.chooseButtonProps, {
      pt: _ctx.ptm("pcChooseButton")
    }), {
      icon: withCtx(function(iconProps) {
        return [renderSlot(_ctx.$slots, "chooseicon", {}, function() {
          return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.chooseIcon ? "span" : "PlusIcon"), mergeProps({
            "class": [iconProps["class"], _ctx.chooseIcon],
            "aria-hidden": "true"
          }, _ctx.ptm("pcChooseButton")["icon"]), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["label", "class", "style", "disabled", "unstyled", "onClick", "onKeydown", "onFocus", "onBlur", "pt"]), _ctx.showUploadButton ? (openBlock(), createBlock(_component_Button, mergeProps({
      key: 0,
      "class": _ctx.cx("pcUploadButton"),
      label: $options.uploadButtonLabel,
      onClick: $options.uploader,
      disabled: $options.uploadDisabled,
      unstyled: _ctx.unstyled
    }, _ctx.uploadButtonProps, {
      pt: _ctx.ptm("pcUploadButton")
    }), {
      icon: withCtx(function(iconProps) {
        return [renderSlot(_ctx.$slots, "uploadicon", {}, function() {
          return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.uploadIcon ? "span" : "UploadIcon"), mergeProps({
            "class": [iconProps["class"], _ctx.uploadIcon],
            "aria-hidden": "true"
          }, _ctx.ptm("pcUploadButton")["icon"], {
            "data-pc-section": "uploadbuttonicon"
          }), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["class", "label", "onClick", "disabled", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.showCancelButton ? (openBlock(), createBlock(_component_Button, mergeProps({
      key: 1,
      "class": _ctx.cx("pcCancelButton"),
      label: $options.cancelButtonLabel,
      onClick: $options.clear,
      disabled: $options.cancelDisabled,
      unstyled: _ctx.unstyled
    }, _ctx.cancelButtonProps, {
      pt: _ctx.ptm("pcCancelButton")
    }), {
      icon: withCtx(function(iconProps) {
        return [renderSlot(_ctx.$slots, "cancelicon", {}, function() {
          return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.cancelIcon ? "span" : "TimesIcon"), mergeProps({
            "class": [iconProps["class"], _ctx.cancelIcon],
            "aria-hidden": "true"
          }, _ctx.ptm("pcCancelButton")["icon"], {
            "data-pc-section": "cancelbuttonicon"
          }), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["class", "label", "onClick", "disabled", "unstyled", "pt"])) : createCommentVNode("", true)];
  })], 16), createElementVNode("div", mergeProps({
    ref: "content",
    "class": _ctx.cx("content"),
    onDragenter: _cache[1] || (_cache[1] = function() {
      return $options.onDragEnter && $options.onDragEnter.apply($options, arguments);
    }),
    onDragover: _cache[2] || (_cache[2] = function() {
      return $options.onDragOver && $options.onDragOver.apply($options, arguments);
    }),
    onDragleave: _cache[3] || (_cache[3] = function() {
      return $options.onDragLeave && $options.onDragLeave.apply($options, arguments);
    }),
    onDrop: _cache[4] || (_cache[4] = function() {
      return $options.onDrop && $options.onDrop.apply($options, arguments);
    })
  }, _ctx.ptm("content"), {
    "data-p-highlight": false
  }), [renderSlot(_ctx.$slots, "content", {
    files: $data.files,
    uploadedFiles: $data.uploadedFiles,
    removeUploadedFileCallback: $options.removeUploadedFile,
    removeFileCallback: $options.remove,
    progress: $data.progress,
    messages: $data.messages
  }, function() {
    return [$options.hasFiles ? (openBlock(), createBlock(_component_ProgressBar, {
      key: 0,
      value: $data.progress,
      showValue: false,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("pcProgressbar")
    }, null, 8, ["value", "unstyled", "pt"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, function(msg) {
      return openBlock(), createBlock(_component_Message, {
        key: msg,
        severity: "error",
        onClose: $options.onMessageClose,
        unstyled: _ctx.unstyled,
        pt: _ctx.ptm("pcMessage")
      }, {
        "default": withCtx(function() {
          return [createTextVNode(toDisplayString(msg), 1)];
        }),
        _: 2
      }, 1032, ["onClose", "unstyled", "pt"]);
    }), 128)), $options.hasFiles ? (openBlock(), createElementBlock("div", {
      key: 1,
      "class": normalizeClass(_ctx.cx("fileList"))
    }, [createVNode(_component_FileContent, {
      files: $data.files,
      onRemove: $options.remove,
      badgeValue: $options.pendingLabel,
      previewWidth: _ctx.previewWidth,
      templates: _ctx.$slots,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["files", "onRemove", "badgeValue", "previewWidth", "templates", "unstyled", "pt"])], 2)) : createCommentVNode("", true), $options.hasUploadedFiles ? (openBlock(), createElementBlock("div", {
      key: 2,
      "class": normalizeClass(_ctx.cx("fileList"))
    }, [createVNode(_component_FileContent, {
      files: $data.uploadedFiles,
      onRemove: $options.removeUploadedFile,
      badgeValue: $options.completedLabel,
      badgeSeverity: "success",
      previewWidth: _ctx.previewWidth,
      templates: _ctx.$slots,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["files", "onRemove", "badgeValue", "previewWidth", "templates", "unstyled", "pt"])], 2)) : createCommentVNode("", true)];
  }), _ctx.$slots.empty && !$options.hasFiles && !$options.hasUploadedFiles ? (openBlock(), createElementBlock("div", normalizeProps(mergeProps({
    key: 0
  }, _ctx.ptm("empty"))), [renderSlot(_ctx.$slots, "empty")], 16)) : createCommentVNode("", true)], 16)], 16)) : $options.isBasic ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, function(msg) {
    return openBlock(), createBlock(_component_Message, {
      key: msg,
      severity: "error",
      onClose: $options.onMessageClose,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("pcMessages")
    }, {
      "default": withCtx(function() {
        return [createTextVNode(toDisplayString(msg), 1)];
      }),
      _: 2
    }, 1032, ["onClose", "unstyled", "pt"]);
  }), 128)), createVNode(_component_Button, mergeProps({
    label: $options.chooseButtonLabel,
    "class": $options.chooseButtonClass,
    style: _ctx.style,
    disabled: _ctx.disabled,
    unstyled: _ctx.unstyled,
    onMouseup: $options.onBasicUploaderClick,
    onKeydown: withKeys($options.choose, ["enter"]),
    onFocus: $options.onFocus,
    onBlur: $options.onBlur
  }, _ctx.ptm("pcButton")), {
    icon: withCtx(function(iconProps) {
      return [!$options.hasFiles || _ctx.auto ? renderSlot(_ctx.$slots, "uploadicon", {
        key: 0
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.uploadIcon ? "span" : "UploadIcon"), mergeProps({
          "class": [iconProps["class"], _ctx.uploadIcon],
          "aria-hidden": "true"
        }, _ctx.ptm("pcButton")["icon"]), null, 16, ["class"]))];
      }) : renderSlot(_ctx.$slots, "chooseicon", {
        key: 1
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.chooseIcon ? "span" : "PlusIcon"), mergeProps({
          "class": [iconProps["class"], _ctx.chooseIcon],
          "aria-hidden": "true"
        }, _ctx.ptm("pcButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["label", "class", "style", "disabled", "unstyled", "onMouseup", "onKeydown", "onFocus", "onBlur"]), !_ctx.auto ? renderSlot(_ctx.$slots, "filelabel", {
    key: 0,
    "class": normalizeClass(_ctx.cx("filelabel"))
  }, function() {
    return [createElementVNode("span", {
      "class": normalizeClass(_ctx.cx("filelabel")),
      files: $data.files
    }, toDisplayString($options.basicFileChosenLabel), 11, _hoisted_2)];
  }) : createCommentVNode("", true), !$options.hasFiles ? (openBlock(), createElementBlock("input", mergeProps({
    key: 1,
    ref: "fileInput",
    type: "file",
    accept: _ctx.accept,
    disabled: _ctx.disabled,
    multiple: _ctx.multiple,
    onChange: _cache[5] || (_cache[5] = function() {
      return $options.onFileSelect && $options.onFileSelect.apply($options, arguments);
    }),
    onFocus: _cache[6] || (_cache[6] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[7] || (_cache[7] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    })
  }, _ctx.ptm("input")), null, 16, _hoisted_3)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true);
}
script.render = render;

export { script as s };
//# sourceMappingURL=index-Dgly9DQV.mjs.map
