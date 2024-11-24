import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderTeleport, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "AppModal",
  __ssrInlineRender: true,
  props: ["isOpen"],
  emits: ["updateIsOpen"],
  setup(__props, { emit: __emit }) {
    const $emit = __emit;
    const updateIsOpen = (value) => {
      $emit("updateIsOpen", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-6ffa0328>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="${ssrRenderClass([__props.isOpen ? "active" : "", "wrapper"])}" data-v-6ffa0328></div>`);
        if (__props.isOpen) {
          _push2(`<div class="modal" data-v-6ffa0328><div data-v-6ffa0328><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "ar" : "", "modal-header"])}" data-v-6ffa0328>`);
          ssrRenderSlot(_ctx.$slots, "header", { class: "modal-header" }, null, _push2, _parent);
          _push2(ssrRenderComponent(_component_font_awesome, {
            onClick: ($event) => updateIsOpen(false),
            icon: ["fas", "xmark"]
          }, null, _parent));
          _push2(`</div><div class="content"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-6ffa0328>`);
          ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent);
          _push2(`</div><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "ar" : "", "modal-footer"])}" data-v-6ffa0328>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent);
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/AppModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ffa0328"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AppModal-B50kbo-r.mjs.map
