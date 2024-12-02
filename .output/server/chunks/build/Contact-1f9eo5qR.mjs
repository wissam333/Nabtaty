import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as _export_sfc, u as useI18n, a as useRuntimeConfig } from './server.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BTB3BaHh.mjs';
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
  __name: "Contact",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    ref(null);
    ref({
      latitude: 33.5102,
      longitude: 36.29128
    });
    ref(20);
    ref({
      latitude: 33.5102,
      longitude: 36.29128
    });
    const { data: Contact2, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetContact}`, {
      baseURL: apiBase,
      credentials: "include",
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en"
      }
    }, "$vHSJyi2zOe")), __temp = await __temp, __restore(), __temp);
    ref();
    ref();
    ref();
    let name = ref();
    let phone = ref();
    let email = ref();
    let message = ref();
    ref();
    let loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_font_awesome = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["contact nav-margin", _ctx.$i18n.locale == "ar" ? "ar" : ""]
      }, _attrs))} data-v-93d38e85><div class="container" data-v-93d38e85><div class="title mb-5" data-v-93d38e85><h1 class="d-flex align-items-center justify-content-center" data-v-93d38e85><img width="70"${ssrRenderAttr("src", _imports_0)} alt="" data-v-93d38e85><span class="underline" data-v-93d38e85>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627" : "Contact Us")}</span></h1></div><div class="form" data-v-93d38e85><div class="container" data-v-93d38e85><div class="row" data-v-93d38e85><div class="col-lg-8" data-v-93d38e85><form style="${ssrRenderStyle({ "margin-top": "50px", "position": "relative", "z-index": "4", "width": "100%" })}" class="${ssrRenderClass([_ctx.$i18n.locale == "ar" ? "ar" : "", "text-left form"])}" data-v-93d38e85><div class="" data-v-93d38e85>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        border_color: "000",
        color: "000",
        type: "text",
        name: "name",
        id: "name",
        label: _ctx.$t("Name"),
        modelValue: unref(name),
        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : name = $event,
        required: ""
      }, null, _parent));
      _push(`</div><div class="" data-v-93d38e85>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        border_color: "000",
        color: "000",
        type: "eamil",
        name: "Email",
        id: "Email",
        label: _ctx.$t("Email"),
        class: "email",
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
        required: ""
      }, null, _parent));
      _push(`</div><div class="" data-v-93d38e85>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        name: "Phone",
        id: "Phone",
        label: _ctx.$t("Phone"),
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : phone = $event,
        required: ""
      }, null, _parent));
      _push(`</div><div class="" data-v-93d38e85>`);
      _push(ssrRenderComponent(_component_v_textarea, {
        class: "mt-2 w-100",
        style: { "height": "150px" },
        id: "Message",
        name: "Message",
        label: _ctx.$t("Message"),
        modelValue: unref(message),
        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : message = $event,
        required: ""
      }, null, _parent));
      _push(`</div><div class="d-flex justify-content-center" data-v-93d38e85><button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="btn send" data-v-93d38e85>${ssrInterpolate(unref(loading) ? "Loading" : _ctx.$t("Send"))}</button></div></form></div><div class="col-lg-4 contact-text" data-v-93d38e85><ul class="info" data-v-93d38e85><h4 class="" data-v-93d38e85><span class="mx-2" data-v-93d38e85>${ssrInterpolate(_ctx.$t("Baddar Furniture"))}</span></h4><div class="d-flex align-items-start justify-content-start flex-column" data-v-93d38e85><!--[-->`);
      ssrRenderList((_a = unref(Contact2)) == null ? void 0 : _a.data, (info) => {
        _push(`<div class="d-flex align-items-center contacts-content" data-aos="fade-up" data-aos-duration="1000" style="${ssrRenderStyle(info.email ? null : { display: "none" })}" data-v-93d38e85><span class="icon" data-v-93d38e85>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "envelope"] }, null, _parent));
        _push(`</span><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "ar" : "", "contacts-info"])}" data-v-93d38e85><p data-v-93d38e85>${ssrInterpolate(info.email)}</p></div></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList((_b = unref(Contact2)) == null ? void 0 : _b.data, (info) => {
        _push(`<div class="d-flex align-items-center contacts-content" data-aos="fade-up" data-aos-duration="1000" style="${ssrRenderStyle(info.phone ? null : { display: "none" })}" data-v-93d38e85><span class="icon" data-v-93d38e85>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "phone"] }, null, _parent));
        _push(`</span><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "ar" : "", "contacts-info"])}" data-v-93d38e85><p data-v-93d38e85>${ssrInterpolate(info.phone)}</p></div></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList((_c = unref(Contact2)) == null ? void 0 : _c.data, (info) => {
        _push(`<div class="d-flex align-items-center contacts-content" data-aos="fade-up" data-aos-duration="1000" style="${ssrRenderStyle(info.website ? null : { display: "none" })}" data-v-93d38e85><span class="icon" data-v-93d38e85>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "location-dot"] }, null, _parent));
        _push(`</span><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "ar" : "", "contacts-info"])}" data-v-93d38e85><p data-v-93d38e85>${ssrInterpolate(info.website)}</p></div></div>`);
      });
      _push(`<!--]--></div></ul></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93d38e85"]]);

export { Contact as default };
//# sourceMappingURL=Contact-1f9eo5qR.mjs.map
