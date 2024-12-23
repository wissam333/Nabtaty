import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-B50kbo-r.mjs';
import { _ as _export_sfc, u as useI18n, g as _imports_0, a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { ref, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext, watchEffect } from 'vue';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { u as useSidebar } from './useState-DDQ6Qtd2.mjs';
import { s as script$1 } from './index-Dgly9DQV.mjs';
import { s as script } from './index-C8_752XK.mjs';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_1 } from './virtual_public-Bp1dU-vu.mjs';
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
  __name: "Category",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    const visible = ref(false);
    const visible2 = ref(false);
    let titleAr = ref();
    let titleEn = ref();
    let edittitleAr = ref();
    let edittitleEn = ref();
    let priority = ref(0);
    let editPriority = ref();
    let deleteRegion = ref();
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let loading = ref(false);
    let cats = ref();
    const getCats = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.findAllCategories}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$FJ19DBBFI1"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.findAllCategories}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$9lYKQQEgVe"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getCats();
    const DeleteCat = async () => {
      await useFetch(
        `${api.RemoveCat}/${deleteRegion.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$LkaI59UOEh"
      );
      getCats();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Category Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0641\u0626\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
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
    const addCat = async () => {
      const formData = new FormData();
      formData.append("category_name_AR", titleAr.value);
      formData.append("category_name_EN", titleEn.value);
      formData.append("priority", priority.value);
      if (srcFile.value) {
        formData.append("photoPath", srcFile.value);
      }
      await useFetch(api.AddCat, {
        baseURL: apiBase,
        method: "POST",
        credentials: "include",
        body: formData
      }, "$okLdEIHKAL");
      getCats();
      visible.value = false;
      src.value = null;
      srcFile.value = null;
      priority.value = 0;
      locale.value === "en" ? $awn.success("Category Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u0626\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    let editedCat = ref();
    const editCat = async () => {
      const formData = new FormData();
      formData.append("category_name_AR", edittitleAr.value);
      formData.append("category_name_EN", edittitleEn.value);
      formData.append("priority", editPriority.value);
      if (editsrcFile.value) {
        formData.append("photoPath", editsrcFile.value);
      }
      await useFetch(
        `${api.EditCat}/${editedCat.value.id}`,
        {
          credentials: "include",
          body: formData,
          baseURL: apiBase,
          method: "PUT"
        },
        "$CEX3arzEhg"
      );
      getCats();
      visible2.value = false;
      editsrc.value = null;
      editsrcFile.value = null;
      locale.value === "en" ? $awn.success("Category Edited Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u0626\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$1;
      const _component_Dialog = script;
      const _component_FileUpload = script$1;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-e958c56a><div class="title-container" data-v-e958c56a><div class="head-title" data-v-e958c56a><h4 class="header4" data-v-e958c56a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0641\u0626\u0627\u062A" : "Categories List")}</h4></div><div class="options" data-v-e958c56a><div class="reload btn btn-success mx-2" data-v-e958c56a>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "plus"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629" : "Add")}</div><div class="reload btn btn-success" data-v-e958c56a>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-e958c56a>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-e958c56a><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-e958c56a></div>`);
      } else {
        _push(`<div class="cat-tabel" data-v-e958c56a><table data-v-e958c56a><thead data-v-e958c56a><tr data-v-e958c56a><th data-v-e958c56a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority")}</th><th data-v-e958c56a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-e958c56a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-e958c56a><!--[-->`);
        ssrRenderList(unref(cats), (cat) => {
          _push(`<tr class="rows" data-v-e958c56a><td data-v-e958c56a><span data-v-e958c56a>${ssrInterpolate(cat.priority)}</span></td><td class="d-flex align-items-center" data-v-e958c56a><div class="cat-img mx-2" data-v-e958c56a>`);
          if (cat.photo) {
            _push(`<img${ssrRenderAttr("src", unref(apiBase) + "/" + cat.photo)} alt="" data-v-e958c56a>`);
          } else {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-e958c56a>`);
          }
          _push(`</div><div class="cat-info d-flex flex-column align-items-start" data-v-e958c56a><h5 data-v-e958c56a>${ssrInterpolate(cat.category_name)}</h5></div></td><td data-v-e958c56a><span class="delete" data-v-e958c56a>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span><span class="edit-link" data-v-e958c56a><span class="edit" data-v-e958c56a>`);
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
        style: { width: "25rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-e958c56a${_scopeId}><h5 data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0641\u0626\u0629 \u062C\u062F\u064A\u062F\u0629" : "Add New Category")}</h5><div class="content" data-v-e958c56a${_scopeId}><div data-v-e958c56a${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-e958c56a${_scopeId}><input${ssrRenderAttr("value", unref(priority))} id="priority" type="number" autocomplete="off"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority")} required data-v-e958c56a${_scopeId}><label for="priority" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-e958c56a${_scopeId}><input${ssrRenderAttr("value", unref(titleAr))} id="titleAr" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic"
            )} title="Enter only letters and spaces" required data-v-e958c56a${_scopeId}><label for="titleAr" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-e958c56a${_scopeId}><input${ssrRenderAttr("value", unref(titleEn))} id="titleEn" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English"
            )} required title="Enter only letters and spaces" data-v-e958c56a${_scopeId}><label for="titleEn" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English")}</label></div><div class="drop-area my-4" data-v-e958c56a${_scopeId}><div class="upload-box" data-v-e958c56a${_scopeId}>`);
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
              _push2(`<img${ssrRenderAttr("src", unref(src))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e958c56a${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(src)) {
              _push2(`<button class="btn btn-danger clear" data-v-e958c56a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome, {
                class: "xmark",
                icon: ["fas", "xmark"]
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-e958c56a${_scopeId}><button class="btn btn-secondary" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$t("Add"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("h5", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0641\u0626\u0629 \u062C\u062F\u064A\u062F\u0629" : "Add New Category"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(priority) ? priority.value = $event : priority = $event,
                        id: "priority",
                        type: "number",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(priority)]
                      ]),
                      createVNode("label", { for: "priority" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(titleAr) ? titleAr.value = $event : titleAr = $event,
                        id: "titleAr",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic",
                        title: "Enter only letters and spaces",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(titleAr)]
                      ]),
                      createVNode("label", { for: "titleAr" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(titleEn) ? titleEn.value = $event : titleEn = $event,
                        id: "titleEn",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English",
                        required: "",
                        title: "Enter only letters and spaces"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(titleEn)]
                      ]),
                      createVNode("label", { for: "titleEn" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English"), 1)
                    ]),
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
                  ])
                ]),
                createVNode("div", { class: "mt-5 d-flex w-100 justify-content-end" }, [
                  createVNode("button", {
                    class: "btn btn-secondary",
                    onClick: closeCallback
                  }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-success mx-2",
                    onClick: ($event) => addCat(),
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
        style: { width: "25rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-e958c56a${_scopeId}><h5 data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0641\u0626\u0629" : "Edit Category")}</h5><div class="content" data-v-e958c56a${_scopeId}><div data-v-e958c56a${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-e958c56a${_scopeId}><input${ssrRenderAttr("value", unref(editPriority))} id="editPriority" type="number" autocomplete="off"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority")} required data-v-e958c56a${_scopeId}><label for="editPriority" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-e958c56a${_scopeId}><input${ssrRenderAttr("value", unref(edittitleAr))} id="edittitleAr" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic"
            )} title="Enter only letters and spaces" required data-v-e958c56a${_scopeId}><label for="edittitleAr" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-e958c56a${_scopeId}><input${ssrRenderAttr("value", unref(edittitleEn))} id="edittitleEn" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English"
            )} required title="Enter only letters and spaces" data-v-e958c56a${_scopeId}><label for="edittitleEn" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English")}</label></div><div class="drop-area my-4" data-v-e958c56a${_scopeId}><div class="upload-box" data-v-e958c56a${_scopeId}>`);
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
              _push2(`<img${ssrRenderAttr("src", unref(editsrc))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-e958c56a${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(editsrc)) {
              _push2(`<button class="btn btn-danger clear" data-v-e958c56a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome, {
                class: "xmark",
                icon: ["fas", "xmark"]
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-e958c56a${_scopeId}><button class="btn btn-secondary" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$t("Edit"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("h5", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0641\u0626\u0629" : "Edit Category"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editPriority) ? editPriority.value = $event : editPriority = $event,
                        id: "editPriority",
                        type: "number",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editPriority)]
                      ]),
                      createVNode("label", { for: "editPriority" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Priority"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(edittitleAr) ? edittitleAr.value = $event : edittitleAr = $event,
                        id: "edittitleAr",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic",
                        title: "Enter only letters and spaces",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(edittitleAr)]
                      ]),
                      createVNode("label", { for: "edittitleAr" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(edittitleEn) ? edittitleEn.value = $event : edittitleEn = $event,
                        id: "edittitleEn",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English",
                        required: "",
                        title: "Enter only letters and spaces"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(edittitleEn)]
                      ]),
                      createVNode("label", { for: "edittitleEn" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English"), 1)
                    ]),
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
            _push2(`<h4 data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} &quot;${ssrInterpolate(unref(deleteRegion).category_name)}&quot;${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + ' "' + toDisplayString(unref(deleteRegion).category_name) + '"' + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-e958c56a${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Category = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e958c56a"]]);

export { Category as default };
//# sourceMappingURL=Category-k40wYEw6.mjs.map
