import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-B50kbo-r.mjs';
import { ref, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, useSSRContext, watchEffect } from 'vue';
import { _ as _export_sfc, u as useI18n, g as _imports_0, a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { u as useSidebar } from './useState-DDQ6Qtd2.mjs';
import { s as script } from './index-C8_752XK.mjs';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
import './index-BmTln-ia.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import './index-ChTkkqYU.mjs';
import './index-DvJXdbWX.mjs';
import './index-DxK02X-z.mjs';
import './index-nFQnausA.mjs';
import './index-DAHeqTll.mjs';

const _sfc_main = {
  __name: "Support",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    const visible = ref(false);
    const visible2 = ref(false);
    let editDescription_AR = ref();
    let editDescription_EN = ref();
    let editTitle_EN = ref();
    let editTitle_Ar = ref();
    let title_AR = ref();
    let title_EN = ref();
    let description_AR = ref();
    let description_EN = ref();
    let deleteRegion = ref();
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let loading = ref(false);
    let About = ref();
    const getInfo = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetSupport}`,
          {
            baseURL: apiBase,
            credentials: "include",
            headers: {
              "accept-language": "ar"
            }
          },
          "$eANcyxHRPq"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetSupport}`,
          {
            baseURL: apiBase,
            credentials: "include",
            headers: {
              "accept-language": "en"
            }
          },
          "$gFeYGgPXX8"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getInfo();
    const DeleteCat = async () => {
      await useFetch(
        `${api.DeleteSupport}/${deleteRegion.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$k33pBCAKTD"
      );
      getInfo();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062D\u0630\u0641 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    const addInfo = async () => {
      await useFetch(api.AddSupport, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: {
          title_AR: title_AR.value,
          title_EN: title_EN.value,
          description_AR: description_AR.value,
          description_EN: description_EN.value
        }
      }, "$jU76BXfi8W");
      visible.value = false;
      description_AR.value = "";
      description_EN.value = "";
      title_AR.value = "";
      title_EN.value = "";
      getInfo();
      locale.value === "en" ? $awn.success("Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    let editedCat = ref();
    const editCat = async () => {
      await useFetch(
        `${api.UpdateSupport}/${editedCat.value.id}`,
        {
          credentials: "include",
          body: {
            title_AR: editTitle_Ar.value,
            title_EN: editTitle_EN.value,
            description_AR: editDescription_AR.value,
            description_EN: editDescription_EN.value
          },
          baseURL: apiBase,
          method: "PUT"
        },
        "$MVoTKcZCJt"
      );
      getInfo();
      visible2.value = false;
      editDescription_AR.value = "";
      editDescription_EN.value = "";
      editTitle_EN.value = "";
      editTitle_Ar.value = "";
      locale.value === "en" ? $awn.success("Edited Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$1;
      const _component_Dialog = script;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-a1d17adf><div class="title-container" data-v-a1d17adf><div class="head-title" data-v-a1d17adf><h4 class="header4" data-v-a1d17adf>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0648 \u0627\u0644\u062F\u0639\u0645" : "Help & Support")}</h4></div><div class="options" data-v-a1d17adf><div class="reload btn btn-success mx-2" data-v-a1d17adf>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "plus"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629" : "Add")}</div><div class="reload btn btn-success" data-v-a1d17adf>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-a1d17adf>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-a1d17adf><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-a1d17adf></div>`);
      } else {
        _push(`<div class="cat-tabel" data-v-a1d17adf><table data-v-a1d17adf><thead data-v-a1d17adf><tr data-v-a1d17adf><th data-v-a1d17adf>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646" : "Title")}</th><th data-v-a1d17adf>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641" : "Description")}</th><th data-v-a1d17adf>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-a1d17adf><!--[-->`);
        ssrRenderList(unref(About), (cat) => {
          _push(`<tr class="rows" data-v-a1d17adf><td class="truncate" data-v-a1d17adf><div data-v-a1d17adf><span data-v-a1d17adf>${ssrInterpolate(cat.title)}</span></div></td><td class="truncate" data-v-a1d17adf><div data-v-a1d17adf><span data-v-a1d17adf>${ssrInterpolate(cat.description)}</span></div></td><td data-v-a1d17adf><span class="delete" data-v-a1d17adf>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span><span class="edit-link" data-v-a1d17adf><span class="edit" data-v-a1d17adf>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "pen-to-square"] }, null, _parent));
          _push(`</span></span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
        modal: "",
        style: { width: "50rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-a1d17adf${_scopeId}><h5 class="fw-bold mb-5" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062C\u062F\u064A\u062F" : "Add New Part")}</h5><div class="content" data-v-a1d17adf${_scopeId}><div data-v-a1d17adf${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-a1d17adf${_scopeId}><input${ssrRenderAttr("value", unref(title_AR))} id="title_AR" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Title In Arabic"
            )} title="Enter only letters and spaces" required data-v-a1d17adf${_scopeId}><label for="title_AR" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Title In Arabic")} *</label></div><div class="d-flex flex-column-reverse mb-3" data-v-a1d17adf${_scopeId}><input${ssrRenderAttr("value", unref(title_EN))} id="title_EN" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Title In English"
            )} title="Enter only letters and spaces" required data-v-a1d17adf${_scopeId}><label for="title_EN" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Title In English")} *</label></div><div class="d-flex flex-column-reverse mb-3" data-v-a1d17adf${_scopeId}><textarea id="description_AR" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic"
            )} required data-v-a1d17adf${_scopeId}>${ssrInterpolate(unref(description_AR))}</textarea><label for="description_AR" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic")} *</label></div><div class="d-flex flex-column-reverse mb-3" data-v-a1d17adf${_scopeId}><textarea id="description_En" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English"
            )} required data-v-a1d17adf${_scopeId}>${ssrInterpolate(unref(description_EN))}</textarea><label for="description_En" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English")} *</label></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-a1d17adf${_scopeId}><button class="btn btn-secondary" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$t("Add"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("h5", { class: "fw-bold mb-5" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062C\u062F\u064A\u062F" : "Add New Part"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(title_AR) ? title_AR.value = $event : title_AR = $event,
                        id: "title_AR",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Title In Arabic",
                        title: "Enter only letters and spaces",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(title_AR)]
                      ]),
                      createVNode("label", { for: "title_AR" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Title In Arabic") + " *", 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(title_EN) ? title_EN.value = $event : title_EN = $event,
                        id: "title_EN",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Title In English",
                        title: "Enter only letters and spaces",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(title_EN)]
                      ]),
                      createVNode("label", { for: "title_EN" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Title In English") + " *", 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => isRef(description_AR) ? description_AR.value = $event : description_AR = $event,
                        id: "description_AR",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(description_AR)]
                      ]),
                      createVNode("label", { for: "description_AR" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic") + " *", 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => isRef(description_EN) ? description_EN.value = $event : description_EN = $event,
                        id: "description_En",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(description_EN)]
                      ]),
                      createVNode("label", { for: "description_En" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English") + " *", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-5 d-flex w-100 justify-content-end" }, [
                  createVNode("button", {
                    class: "btn btn-secondary",
                    onClick: closeCallback
                  }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-success mx-2",
                    onClick: ($event) => addInfo(),
                    autofocus: ""
                  }, toDisplayString(_ctx.$t("Add")), 9, ["onClick"])
                ])
              ], 8, ["dir"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(visible2),
        "onUpdate:visible": ($event) => isRef(visible2) ? visible2.value = $event : null,
        modal: "",
        style: { width: "50rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-a1d17adf${_scopeId}><span data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A " : "Edit Information")}</span><div class="content" data-v-a1d17adf${_scopeId}><div data-v-a1d17adf${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-a1d17adf${_scopeId}><input${ssrRenderAttr("value", unref(editTitle_Ar))} id="editTitle_Ar" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Title In Arabic"
            )} title="Enter only letters and spaces" required data-v-a1d17adf${_scopeId}><label for="editTitle_Ar" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Title In Arabic")} *</label></div><div class="d-flex flex-column-reverse mb-3" data-v-a1d17adf${_scopeId}><input${ssrRenderAttr("value", unref(editTitle_EN))} id="editTitle_EN" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Title In English"
            )} title="Enter only letters and spaces" required data-v-a1d17adf${_scopeId}><label for="editTitle_EN" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Title In English")} *</label></div><div class="d-flex flex-column-reverse mb-3" data-v-a1d17adf${_scopeId}><textarea id="editDescription_AR" type="text" autocomplete="off" rows="5"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic"
            )} required data-v-a1d17adf${_scopeId}>${ssrInterpolate(unref(editDescription_AR))}</textarea><label for="editDescription_AR" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic")} *</label></div><div class="d-flex flex-column-reverse mb-3" data-v-a1d17adf${_scopeId}><textarea id="editDescription_EN" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English"
            )} rows="5" required data-v-a1d17adf${_scopeId}>${ssrInterpolate(unref(editDescription_EN))}</textarea><label for="editDescription_EN" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English")} *</label></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-a1d17adf${_scopeId}><button class="btn btn-secondary" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$t("Edit"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A " : "Edit Information"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editTitle_Ar) ? editTitle_Ar.value = $event : editTitle_Ar = $event,
                        id: "editTitle_Ar",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Title In Arabic",
                        title: "Enter only letters and spaces",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editTitle_Ar)]
                      ]),
                      createVNode("label", { for: "editTitle_Ar" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Title In Arabic") + " *", 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editTitle_EN) ? editTitle_EN.value = $event : editTitle_EN = $event,
                        id: "editTitle_EN",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Title In English",
                        title: "Enter only letters and spaces",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editTitle_EN)]
                      ]),
                      createVNode("label", { for: "editTitle_EN" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Title In English") + " *", 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => isRef(editDescription_AR) ? editDescription_AR.value = $event : editDescription_AR = $event,
                        id: "editDescription_AR",
                        type: "text",
                        autocomplete: "off",
                        rows: "5",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editDescription_AR)]
                      ]),
                      createVNode("label", { for: "editDescription_AR" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic") + " *", 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => isRef(editDescription_EN) ? editDescription_EN.value = $event : editDescription_EN = $event,
                        id: "editDescription_EN",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English",
                        rows: "5",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editDescription_EN)]
                      ]),
                      createVNode("label", { for: "editDescription_EN" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English") + " *", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-5 d-flex w-100 justify-content-end" }, [
                  createVNode("button", {
                    class: "btn btn-secondary",
                    onClick: closeCallback
                  }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-success mx-2",
                    onClick: ($event) => editCat(),
                    autofocus: ""
                  }, toDisplayString(_ctx.$t("Edit")), 9, ["onClick"])
                ])
              ], 8, ["dir"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElementsAppModal, {
        isOpen: unref(deleteModal),
        onUpdateIsOpen: updateDeleteModal
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + " " + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-a1d17adf${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "btn btn-secondary",
                onClick: ($event) => isRef(deleteModal) ? deleteModal.value = false : deleteModal = false
              }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
              createVNode("button", {
                class: "btn btn-danger",
                onClick: ($event) => DeleteCat()
              }, toDisplayString(_ctx.$t("Delete")), 9, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/Support.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Support = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1d17adf"]]);

export { Support as default };
//# sourceMappingURL=Support-BxpWWCeg.mjs.map
