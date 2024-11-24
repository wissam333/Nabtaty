import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-B50kbo-r.mjs';
import { ref, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext, watchEffect } from 'vue';
import { _ as _export_sfc, u as useI18n, g as _imports_0, a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { u as useSidebar } from './useState-DDQ6Qtd2.mjs';
import { s as script$2 } from './index-Dgly9DQV.mjs';
import { s as script$1 } from './index-C8_752XK.mjs';
import { s as script } from './index-DHC3nPP1.mjs';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
import './index-DvJXdbWX.mjs';
import './index-BmTln-ia.mjs';
import '@primeuix/utils/uuid';
import './index-ChTkkqYU.mjs';
import './index-DxK02X-z.mjs';
import './index-nFQnausA.mjs';
import './index-C7iL46Cz.mjs';
import '@primeuix/utils/zindex';
import './index-DAHeqTll.mjs';

const _sfc_main = {
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    const visible = ref(false);
    const visible2 = ref(false);
    const editsrc = ref(null);
    const editsrcFile = ref(null);
    function editsrconFileSelect(event) {
      const file = event.files[0];
      editsrcFile.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        editsrc.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    const src = ref(null);
    const srcFile = ref(null);
    function onFileSelect(event) {
      const file = event.files[0];
      srcFile.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
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
        await useFetch(`${api.GetLogo}`, {
          baseURL: apiBase,
          credentials: "include",
          headers: {
            "accept-language": "ar"
          }
        }, "$ZJbn5DNoM5");
        watchEffect(() => {
        });
      } else {
        await useFetch(`${api.GetLogo}`, {
          baseURL: apiBase,
          credentials: "include",
          headers: {
            "accept-language": "en"
          }
        }, "$L2sBV8x3t1");
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getInfo();
    const DeleteCat = async () => {
      await useFetch(
        `${api.DeleteLogo}/${deleteRegion.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$Ks7qEQX75G"
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
      const formData = new FormData();
      formData.append("photoPath", srcFile.value);
      await useFetch(api.AddLogo, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$wYoW7JofEM");
      srcFile.value = null;
      src.value = null;
      visible.value = false;
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
        `${api.UpdateLogo}/${editedCat.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "PUT"
        },
        "$EUjgFSQC6f"
      );
      getInfo();
      locale.value === "en" ? $awn.success("Edited Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    const isActive = (active) => {
      return !!active;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_font_awesome = _sfc_main$1;
      const _component_Checkbox = script;
      const _component_Dialog = script$1;
      const _component_FileUpload = script$2;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-b846ce13><div class="title-container" data-v-b846ce13><div class="head-title" data-v-b846ce13><h4 class="header4" data-v-b846ce13>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629" : "Privacy Policy")}</h4></div><div class="options" data-v-b846ce13><div class="reload btn btn-success mx-2" data-v-b846ce13>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "plus"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629" : "Add")}</div><div class="reload btn btn-success" data-v-b846ce13>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-b846ce13>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-b846ce13><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-b846ce13></div>`);
      } else {
        _push(`<div class="cat-tabel" data-v-b846ce13><table data-v-b846ce13><thead data-v-b846ce13><tr data-v-b846ce13><th data-v-b846ce13>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0635\u0648\u0631\u0629" : "Image")}</th><th data-v-b846ce13>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0641\u0639\u0627\u0644\u061F" : "Active?")}</th><th data-v-b846ce13>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-b846ce13><!--[-->`);
        ssrRenderList((_a = unref(About)) == null ? void 0 : _a.data, (cat) => {
          _push(`<tr class="rows" data-v-b846ce13><td class="truncate" data-v-b846ce13><div data-v-b846ce13><span data-v-b846ce13><img style="${ssrRenderStyle({ "object-fit": "contain" })}" height="100" width="100"${ssrRenderAttr("src", `${unref(apiBase)}/${cat.photoPath}`)} alt="" data-v-b846ce13></span></div></td><td class="" data-v-b846ce13>`);
          if (cat.is_active) {
            _push(`<div data-v-b846ce13>`);
            _push(ssrRenderComponent(_component_Checkbox, {
              modelValue: isActive(cat.is_active),
              binary: ""
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<div data-v-b846ce13>`);
            _push(ssrRenderComponent(_component_Checkbox, {
              modelValue: isActive(cat.is_active),
              binary: ""
            }, null, _parent));
            _push(`</div>`);
          }
          _push(`</td><td data-v-b846ce13><span class="delete" data-v-b846ce13>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span></td></tr>`);
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
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-b846ce13${_scopeId}><h5 class="fw-bold mb-5" data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0644\u0648\u063A\u0648 \u062C\u062F\u064A\u062F" : "Add New Logo")}</h5><div class="content" data-v-b846ce13${_scopeId}><div class="drop-area my-4" data-v-b846ce13${_scopeId}><div class="upload-box" data-v-b846ce13${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FileUpload, {
              mode: "basic",
              onSelect: onFileSelect,
              customUpload: "",
              maxFileSize: 1e6,
              accept: "image/*",
              auto: "",
              class: "form-control p-button-outlined"
            }, null, _parent2, _scopeId));
            if (unref(src)) {
              _push2(`<img${ssrRenderAttr("src", unref(src))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-b846ce13${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(src)) {
              _push2(`<button class="btn btn-danger clear" data-v-b846ce13${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome, {
                class: "xmark",
                icon: ["fas", "xmark"]
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-b846ce13${_scopeId}><button class="btn btn-secondary" data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$t("Add"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("h5", { class: "fw-bold mb-5" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0644\u0648\u063A\u0648 \u062C\u062F\u064A\u062F" : "Add New Logo"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", { class: "drop-area my-4" }, [
                    createVNode("div", { class: "upload-box" }, [
                      createVNode(_component_FileUpload, {
                        mode: "basic",
                        onSelect: onFileSelect,
                        customUpload: "",
                        maxFileSize: 1e6,
                        accept: "image/*",
                        auto: "",
                        class: "form-control p-button-outlined"
                      }),
                      unref(src) ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: unref(src),
                        alt: "Image",
                        class: "shadow-md w-100 h-100 sm:w-64"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      unref(src) ? (openBlock(), createBlock("button", {
                        key: 1,
                        class: "btn btn-danger clear",
                        onClick: withModifiers(($event) => {
                          src.value = null;
                          srcFile.value = null;
                        }, ["prevent"])
                      }, [
                        createVNode(_component_font_awesome, {
                          class: "xmark",
                          icon: ["fas", "xmark"]
                        })
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-5 d-flex w-100 justify-content-end" }, [
                  createVNode("button", {
                    class: "btn btn-secondary",
                    onClick: ($event) => {
                      src.value = null;
                      srcFile.value = null;
                    }
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
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-b846ce13${_scopeId}><span data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A " : "Edit Information")}</span><div class="content" data-v-b846ce13${_scopeId}><div class="drop-area my-4" data-v-b846ce13${_scopeId}><div class="upload-box" data-v-b846ce13${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FileUpload, {
              mode: "basic",
              onSelect: editsrconFileSelect,
              customUpload: "",
              maxFileSize: 1e6,
              accept: "image/*",
              auto: "",
              class: "form-control p-button-outlined"
            }, null, _parent2, _scopeId));
            if (unref(editsrc)) {
              _push2(`<img${ssrRenderAttr("src", unref(editsrc))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-b846ce13${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(editsrc)) {
              _push2(`<button class="btn btn-danger clear" data-v-b846ce13${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome, {
                class: "xmark",
                icon: ["fas", "xmark"]
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-b846ce13${_scopeId}><button class="btn btn-secondary" data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$t("Edit"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A " : "Edit Information"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", { class: "drop-area my-4" }, [
                    createVNode("div", { class: "upload-box" }, [
                      createVNode(_component_FileUpload, {
                        mode: "basic",
                        onSelect: editsrconFileSelect,
                        customUpload: "",
                        maxFileSize: 1e6,
                        accept: "image/*",
                        auto: "",
                        class: "form-control p-button-outlined"
                      }),
                      unref(editsrc) ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: unref(editsrc),
                        alt: "Image",
                        class: "shadow-md w-100 h-100 sm:w-64"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      unref(editsrc) ? (openBlock(), createBlock("button", {
                        key: 1,
                        class: "btn btn-danger clear",
                        onClick: withModifiers(($event) => {
                          editsrc.value = null;
                          editsrcFile.value = null;
                        }, ["prevent"])
                      }, [
                        createVNode(_component_font_awesome, {
                          class: "xmark",
                          icon: ["fas", "xmark"]
                        })
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-5 d-flex w-100 justify-content-end" }, [
                  createVNode("button", {
                    class: "btn btn-secondary",
                    onClick: ($event) => {
                      editsrc.value = null;
                      editsrcFile.value = null;
                    }
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
            _push2(`<h4 data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + " " + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-b846ce13${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b846ce13"]]);

export { Logo as default };
//# sourceMappingURL=Logo-CVQWTcxi.mjs.map
