import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-B50kbo-r.mjs';
import { ref, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext, watchEffect } from 'vue';
import { _ as _export_sfc, u as useI18n, g as _imports_0, a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { u as useSidebar } from './useState-DDQ6Qtd2.mjs';
import { s as script$1 } from './index-Dgly9DQV.mjs';
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
  __name: "Care",
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
    let description_AR = ref();
    let description_EN = ref();
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
        await useFetch(
          `${api.GetAllCare}`,
          {
            baseURL: apiBase,
            credentials: "include",
            headers: {
              "accept-language": "ar"
            }
          },
          "$Brqn2iBQDO"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetAllCare}`,
          {
            baseURL: apiBase,
            credentials: "include",
            headers: {
              "accept-language": "en"
            }
          },
          "$pkEYNsS4OK"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getInfo();
    const DeleteCat = async () => {
      await useFetch(
        `${api.DeleteCare}/${deleteRegion.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$dSkKCFQF4y"
      );
      getInfo();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Information Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    const addInfo = async () => {
      var _a, _b, _c;
      const formData = new FormData();
      formData.append("description_AR", description_AR.value);
      formData.append("description_EN", description_EN.value);
      formData.append("photoPath", srcFile.value);
      const { data } = await useFetch(api.AddCare, {
        baseURL: apiBase,
        credentials: "include",
        method: "POST",
        body: formData
      }, "$7KDFngQiQN");
      visible.value = false;
      description_AR.value = "";
      description_EN.value = "";
      src.value = null;
      srcFile.value = null;
      if (!((_a = data.value) == null ? void 0 : _a.plantCareId)) {
        locale.value === "en" ? $awn.alert("error occurd: " + ((_b = data.value) == null ? void 0 : _b.error), {
          durations: { global: 5e3 }
        }) : $awn.alert(": \u062D\u062F\u062B \u062E\u0637\u0623" + ((_c = data.value) == null ? void 0 : _c.error), {
          durations: { global: 5e3 }
        });
      } else {
        locale.value === "en" ? $awn.success("Information Added Successfully", {
          durations: { global: 5e3 }
        }) : $awn.success("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u0646\u062C\u0627\u062D", {
          durations: { global: 5e3 }
        });
      }
      getInfo();
      visible.value = false;
      phone.value = "";
      email.value = "";
      website.value = "";
    };
    let editedCat = ref();
    const editCat = async () => {
      const formData = new FormData();
      formData.append("description_AR", editDescription_AR.value);
      formData.append("description_EN", editDescription_EN.value);
      formData.append("photoPath", editsrcFile.value);
      await useFetch(
        `${api.UpdateCare}/${editedCat.value.id}`,
        {
          credentials: "include",
          body: formData,
          baseURL: apiBase,
          method: "PUT"
        },
        "$o5k22bntYr"
      );
      getInfo();
      visible2.value = false;
      editDescription_AR.value = "";
      editDescription_EN.value = "";
      editsrcFile.value = null;
      editsrc.value = null;
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
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-5549e89d><div class="title-container" data-v-5549e89d><div class="head-title" data-v-5549e89d><h4 class="header4" data-v-5549e89d>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0635\u062D\u0627\u0641\u0629 \u0627\u0644\u0646\u0628\u0627\u062A\u064A\u0629" : "Plant Press")}</h4></div><div class="options" data-v-5549e89d><div class="reload btn btn-success mx-2" data-v-5549e89d>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "plus"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629" : "Add")}</div><div class="reload btn btn-success" data-v-5549e89d>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-5549e89d>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-5549e89d><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-5549e89d></div>`);
      } else {
        _push(`<div class="cat-tabel" data-v-5549e89d><table data-v-5549e89d><thead data-v-5549e89d><tr data-v-5549e89d><th data-v-5549e89d>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0635\u0648\u0631\u0629" : "Photo")}</th><th data-v-5549e89d>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641" : "Description")}</th><th data-v-5549e89d>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-5549e89d><!--[-->`);
        ssrRenderList(unref(About), (cat) => {
          var _a;
          _push(`<tr class="rows" data-v-5549e89d><td data-v-5549e89d><div data-v-5549e89d><span data-v-5549e89d><img height="100"${ssrRenderAttr("src", unref(apiBase) + "/" + cat.photo)} alt="" data-v-5549e89d></span></div></td><td data-v-5549e89d><div data-v-5549e89d><span data-v-5549e89d>${ssrInterpolate(((_a = cat.description) == null ? void 0 : _a.length) > 30 ? cat.description.slice(0, 30) + "..." : cat.description)}</span></div></td><td data-v-5549e89d><span class="delete" data-v-5549e89d>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span><span class="edit-link" data-v-5549e89d><span class="edit" data-v-5549e89d>`);
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
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-5549e89d${_scopeId}><h5 class="fw-bold mb-5" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062C\u062F\u064A\u062F" : "Add New Part")}</h5><div class="content" data-v-5549e89d${_scopeId}><div data-v-5549e89d${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-5549e89d${_scopeId}><textarea id="description_AR" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic"
            )} required data-v-5549e89d${_scopeId}>${ssrInterpolate(unref(description_AR))}</textarea><label for="description_AR" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-5549e89d${_scopeId}><textarea id="description_En" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English"
            )} required data-v-5549e89d${_scopeId}>${ssrInterpolate(unref(description_EN))}</textarea><label for="description_En" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English")}</label></div><div class="drop-area my-4" data-v-5549e89d${_scopeId}><div class="upload-box" data-v-5549e89d${_scopeId}>`);
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
              _push2(`<img${ssrRenderAttr("src", unref(src))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-5549e89d${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(src)) {
              _push2(`<button class="btn btn-danger clear" data-v-5549e89d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome, {
                class: "xmark",
                icon: ["fas", "xmark"]
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-5549e89d${_scopeId}><button class="btn btn-secondary" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$t("Add"))}</button></div></div>`);
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
                      createVNode("label", { for: "description_AR" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic"), 1)
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
                      createVNode("label", { for: "description_En" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English"), 1)
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
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-5549e89d${_scopeId}><span data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A " : "Edit Information")}</span><div class="content" data-v-5549e89d${_scopeId}><div data-v-5549e89d${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-5549e89d${_scopeId}><textarea id="editDescription_AR" type="text" autocomplete="off" rows="5"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic"
            )} required data-v-5549e89d${_scopeId}>${ssrInterpolate(unref(editDescription_AR))}</textarea><label for="editDescription_AR" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-5549e89d${_scopeId}><textarea id="editDescription_EN" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English"
            )} rows="5" required data-v-5549e89d${_scopeId}>${ssrInterpolate(unref(editDescription_EN))}</textarea><label for="editDescription_EN" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English")}</label></div><div class="drop-area my-4" data-v-5549e89d${_scopeId}><div class="upload-box" data-v-5549e89d${_scopeId}>`);
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
              _push2(`<img${ssrRenderAttr("src", unref(editsrc))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-5549e89d${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-5549e89d${_scopeId}><button class="btn btn-secondary" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$t("Edit"))}</button></div></div>`);
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
                      createVNode("label", { for: "editDescription_AR" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A" : "Description In Arabic"), 1)
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
                      createVNode("label", { for: "editDescription_EN" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A" : "Description In English"), 1)
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
                        }, null, 8, ["src"])) : createCommentVNode("", true)
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
            _push2(`<h4 data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + " " + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-5549e89d${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/Care.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Care = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5549e89d"]]);

export { Care as default };
//# sourceMappingURL=Care-hNNS2RV5.mjs.map
