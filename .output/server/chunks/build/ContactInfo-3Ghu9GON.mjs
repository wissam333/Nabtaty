import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-B50kbo-r.mjs';
import { _ as _export_sfc, u as useI18n, g as _imports_0, a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { ref, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, useSSRContext, watchEffect } from 'vue';
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
  __name: "ContactInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    const visible = ref(false);
    const visible2 = ref(false);
    let editPhone = ref();
    let editEmail = ref();
    let editWebsite = ref();
    let phone = ref();
    let email = ref();
    let website = ref();
    let deleteRegion = ref();
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let loading = ref(false);
    let Contact = ref();
    const getInfo = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetContactInfo}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$VlvQJkWyyW"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetContactInfo}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$vJTSmUgBmg"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getInfo();
    const DeleteCat = async () => {
      await useFetch(
        `${api.DeleteContactInfo}/${deleteRegion.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$U3lQN6n0mY"
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
      const { data } = await useFetch(api.AddContactInfo, {
        baseURL: apiBase,
        method: "POST",
        credentials: "include",
        body: {
          phone: phone.value,
          email: email.value,
          website: website.value
        }
      }, "$BzB99axbPF");
      if (!((_a = data.value) == null ? void 0 : _a.success)) {
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
      await useFetch(
        `${api.EditContactInfo}/${editedCat.value.id}`,
        {
          credentials: "include",
          body: {
            phone: editPhone.value,
            email: editEmail.value,
            website: editWebsite.value
          },
          baseURL: apiBase,
          method: "PUT"
        },
        "$HX1U6ZOnVI"
      );
      getInfo();
      visible2.value = false;
      editPhone.value = "";
      editEmail.value = "";
      editWebsite.value = "";
      locale.value === "en" ? $awn.success("Category Edited Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u0626\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_font_awesome = _sfc_main$1;
      const _component_Dialog = script;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-4fbde584><div class="title-container" data-v-4fbde584><div class="head-title" data-v-4fbde584><h4 class="header4" data-v-4fbde584>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644" : "Contact Information")}</h4></div><div class="options" data-v-4fbde584><div class="reload btn btn-success mx-2" data-v-4fbde584>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "plus"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629" : "Add")}</div><div class="reload btn btn-success" data-v-4fbde584>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-4fbde584>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-4fbde584><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-4fbde584></div>`);
      } else {
        _push(`<div class="cat-tabel" data-v-4fbde584><table data-v-4fbde584><thead data-v-4fbde584><tr data-v-4fbde584><th data-v-4fbde584>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "Phone")}</th><th data-v-4fbde584>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email")}</th><th data-v-4fbde584>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location")}</th><th data-v-4fbde584>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-4fbde584><!--[-->`);
        ssrRenderList((_a = unref(Contact)) == null ? void 0 : _a.data, (cat) => {
          _push(`<tr class="rows" data-v-4fbde584><td data-v-4fbde584><div data-v-4fbde584><span data-v-4fbde584>${ssrInterpolate(cat.phone)}</span></div></td><td data-v-4fbde584><div data-v-4fbde584><span data-v-4fbde584>${ssrInterpolate(cat.email)}</span></div></td><td data-v-4fbde584><div data-v-4fbde584><span data-v-4fbde584>${ssrInterpolate(cat.website)}</span></div></td><td data-v-4fbde584><span class="delete" data-v-4fbde584>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span><span class="edit-link" data-v-4fbde584><span class="edit" data-v-4fbde584>`);
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
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-4fbde584${_scopeId}><span data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0641\u0626\u0629 \u062C\u062F\u064A\u062F\u0629" : "Add New Category")}</span><div class="content" data-v-4fbde584${_scopeId}><div data-v-4fbde584${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-4fbde584${_scopeId}><input${ssrRenderAttr("value", unref(phone))} id="phone" type="text" autocomplete="off"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone")} required data-v-4fbde584${_scopeId}><label for="phone" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-4fbde584${_scopeId}><input${ssrRenderAttr("value", unref(email))} id="email" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email"
            )} required data-v-4fbde584${_scopeId}><label for="email" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-4fbde584${_scopeId}><input${ssrRenderAttr("value", unref(website))} id="website" type="text" autocomplete="off"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location")} required data-v-4fbde584${_scopeId}><label for="website" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location")}</label></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-4fbde584${_scopeId}><button class="btn btn-secondary" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$t("Add"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0641\u0626\u0629 \u062C\u062F\u064A\u062F\u0629" : "Add New Category"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : phone = $event,
                        id: "phone",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(phone)]
                      ]),
                      createVNode("label", { for: "phone" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
                        id: "email",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(email)]
                      ]),
                      createVNode("label", { for: "email" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(website) ? website.value = $event : website = $event,
                        id: "website",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(website)]
                      ]),
                      createVNode("label", { for: "website" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location"), 1)
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
        style: { width: "25rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-4fbde584${_scopeId}><span data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A " : "Edit Information")}</span><div class="content" data-v-4fbde584${_scopeId}><div data-v-4fbde584${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-4fbde584${_scopeId}><input${ssrRenderAttr("value", unref(editPhone))} id="editPhone" type="text" autocomplete="off"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone")} required data-v-4fbde584${_scopeId}><label for="editPhone" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-4fbde584${_scopeId}><input${ssrRenderAttr("value", unref(editEmail))} id="editEmail" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email"
            )} required data-v-4fbde584${_scopeId}><label for="editEmail" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-4fbde584${_scopeId}><input${ssrRenderAttr("value", unref(editWebsite))} id="editWebsite" type="text" autocomplete="off"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location")} required title="Enter only letters and spaces" data-v-4fbde584${_scopeId}><label for="editWebsite" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location")}</label></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-4fbde584${_scopeId}><button class="btn btn-secondary" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$t("Edit"))}</button></div></div>`);
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
                        "onUpdate:modelValue": ($event) => isRef(editPhone) ? editPhone.value = $event : editPhone = $event,
                        id: "editPhone",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editPhone)]
                      ]),
                      createVNode("label", { for: "editPhone" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editEmail) ? editEmail.value = $event : editEmail = $event,
                        id: "editEmail",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editEmail)]
                      ]),
                      createVNode("label", { for: "editEmail" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editWebsite) ? editWebsite.value = $event : editWebsite = $event,
                        id: "editWebsite",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location",
                        required: "",
                        title: "Enter only letters and spaces"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editWebsite)]
                      ]),
                      createVNode("label", { for: "editWebsite" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location"), 1)
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
            _push2(`<h4 data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + " " + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-4fbde584${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/ContactInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4fbde584"]]);

export { ContactInfo as default };
//# sourceMappingURL=ContactInfo-3Ghu9GON.mjs.map
