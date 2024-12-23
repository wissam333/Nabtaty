import { _ as __nuxt_component_2 } from './nuxt-link-DVTfn8MM.mjs';
import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-B50kbo-r.mjs';
import { _ as _export_sfc, u as useI18n, g as _imports_0, a as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { ref, withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, useSSRContext, watchEffect } from 'vue';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { u as useSidebar } from './useState-DDQ6Qtd2.mjs';
import { s as script } from './index-DHC3nPP1.mjs';
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
import './index-C7iL46Cz.mjs';
import './index-DvJXdbWX.mjs';
import './index-BmTln-ia.mjs';
import '@primeuix/utils/uuid';

const _sfc_main = {
  __name: "ListProduct",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    let loading = ref(false);
    let products = ref();
    const getProduct = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetAllPlants}`,
          {
            credentials: "include",
            baseURL: apiBase,
            credentials: "include",
            headers: {
              "accept-language": "ar"
            }
          },
          "$8A8PffWCdr"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetAllPlants}`,
          {
            credentials: "include",
            baseURL: apiBase,
            credentials: "include",
            headers: {
              "accept-language": "en"
            }
          },
          "$ltvuhMbEk2"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getProduct();
    let cats = ref();
    const getCats = async () => {
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
          "$Ip1Tp9y4fL"
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
          "$JX1bQhQzOq"
        );
        watchEffect(() => {
        });
      }
    };
    getCats();
    let Subcats = ref();
    const getSubCats = async () => {
      if (locale.value === "ar") {
        await useFetch(`${api.GetSubCat}`, {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "ar"
          }
        }, "$AYmuxKNTdR");
        watchEffect(() => {
        });
      } else {
        await useFetch(`${api.GetSubCat}`, {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "en"
          }
        }, "$RfGEdJ5XOM");
        watchEffect(() => {
        });
      }
    };
    getSubCats();
    [__temp, __restore] = withAsyncContext(() => useFetch(api.GetSubCat, {
      baseURL: apiBase,
      credentials: "include",
      method: "GET"
    }, "$sha7XrrDWf")), __temp = await __temp, __restore();
    const subcat = (id) => {
      var _a, _b;
      let subcatName = (_a = cats.value) == null ? void 0 : _a.filter((sub) => sub.id === id);
      if (subcatName) {
        return (_b = subcatName[0]) == null ? void 0 : _b.category_name;
      }
    };
    const subSubcat = (id) => {
      var _a, _b;
      let subcatName = (_a = Subcats.value) == null ? void 0 : _a.filter((sub) => sub.id === id);
      if (subcatName) {
        return (_b = subcatName[0]) == null ? void 0 : _b.subcategory_name;
      }
    };
    let deleteProduct = ref();
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let searchText = ref("");
    const filteredArray = computed(() => {
      var _a;
      return (_a = products.value) == null ? void 0 : _a.filter(
        (item) => item.plant_name.toLowerCase().includes(searchText.value.toLowerCase())
      );
    });
    const removeImage = async (srcId) => {
      await useFetch(
        `${api.RemovePlantImage}/${srcId}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$OSXQxvLi7V"
      );
    };
    const deletePlant = async () => {
      var _a;
      const { data } = await useFetch(
        `${api.GetPlantById}/${deleteProduct.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "GET"
        },
        "$FdJDdU6ZfH"
      );
      await ((_a = data.value[0].photos) == null ? void 0 : _a.map(async (photo) => {
        await removeImage(photo.photo_id);
      }));
      await useFetch(
        `${api.DeletePlant}/${deleteProduct.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$ElredUOLhW"
      );
      getProduct();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Plant Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0646\u0628\u0627\u062A \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    const isActive = (active) => {
      return !!active;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_2;
      const _component_font_awesome = _sfc_main$1;
      const _component_Checkbox = script;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-3955de1a><div class="title-container" data-v-3955de1a><div class="head-title" data-v-3955de1a><h4 class="header4" data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0628\u0627\u062A\u0627\u062A" : "Plant List")}</h4><p data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0646\u0628\u0627\u062A \u062C\u062F\u064A\u062F \u0645\u0646" : "Add new Plant from")} `);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/admin/AddProduct" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0646\u0627" : "here")}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0646\u0627" : "here"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="options" data-v-3955de1a><div class="d-flex flex-column-reverse mx-2" data-v-3955de1a><input${ssrRenderAttr("value", unref(searchText))} id="price" type="text" required${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0628\u062D\u062B" : "Search")} data-v-3955de1a></div><div class="reload btn btn-success mx-1" data-v-3955de1a>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div><div class="reload btn btn-success mx-1" data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0635\u062F\u064A\u0631" : "Export")}</div></div></div><div class="table-responsive" data-v-3955de1a>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-3955de1a><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-3955de1a></div>`);
      } else {
        _push(`<div class="product-tabel" data-v-3955de1a><table data-v-3955de1a><thead data-v-3955de1a><tr data-v-3955de1a><th data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0641\u0626\u0629" : "Category")}</th><th data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0641\u0631\u0639\u064A\u0629" : "Sub Category")}</th><th data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062C\u062F\u064A\u062F" : "New")}</th><th data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0642\u062A\u0631\u062D" : "Recommended")}</th><th data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0641\u0639\u0627\u0644" : "Active")}</th><th data-v-3955de1a>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-3955de1a><!--[-->`);
        ssrRenderList(unref(filteredArray), (product) => {
          var _a;
          _push(`<tr class="rows" data-v-3955de1a><td class="d-flex align-items-center" data-v-3955de1a><div class="product-img" data-v-3955de1a>`);
          if ((_a = product == null ? void 0 : product.photos) == null ? void 0 : _a.photoPath) {
            _push(`<img${ssrRenderAttr("src", unref(apiBase) + "/" + product.photos.photoPath)} alt="" data-v-3955de1a>`);
          } else {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-3955de1a>`);
          }
          _push(`</div><div class="product-info d-flex flex-column align-items-start" data-v-3955de1a><h5 data-v-3955de1a>${ssrInterpolate(product.plant_name)}</h5></div></td><td data-v-3955de1a><p class="badge rounded-pill bg-primary me-1" data-v-3955de1a>${ssrInterpolate(subcat(product.category_id))}</p></td><td data-v-3955de1a><p class="badge rounded-pill bg-secondary me-1" data-v-3955de1a>${ssrInterpolate(subSubcat(product.subcategory_id))}</p></td><td data-v-3955de1a>`);
          if (product.newest) {
            _push(`<p class="badge rounded-pill bg-success me-1" data-v-3955de1a>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "check",
              icon: ["fas", "check"]
            }, null, _parent));
            _push(`</p>`);
          } else {
            _push(`<p class="badge rounded-pill bg-danger me-1" data-v-3955de1a>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "check",
              icon: ["fas", "xmark"]
            }, null, _parent));
            _push(`</p>`);
          }
          _push(`</td><td data-v-3955de1a>`);
          if (product.recommended) {
            _push(`<p class="badge rounded-pill bg-success me-1" data-v-3955de1a>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "check",
              icon: ["fas", "check"]
            }, null, _parent));
            _push(`</p>`);
          } else {
            _push(`<p class="badge rounded-pill bg-danger me-1" data-v-3955de1a>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "check",
              icon: ["fas", "xmark"]
            }, null, _parent));
            _push(`</p>`);
          }
          _push(`</td><td class="" data-v-3955de1a>`);
          if (product.is_active) {
            _push(`<div data-v-3955de1a>`);
            _push(ssrRenderComponent(_component_Checkbox, {
              modelValue: isActive(product.is_active),
              binary: ""
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<div data-v-3955de1a>`);
            _push(ssrRenderComponent(_component_Checkbox, {
              modelValue: isActive(product.is_active),
              binary: ""
            }, null, _parent));
            _push(`</div>`);
          }
          _push(`</td><td data-v-3955de1a><span class="delete" data-v-3955de1a>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/admin/EditProduct/${product.id}`,
            class: "edit-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="edit" data-v-3955de1a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "pen-to-square"] }, null, _parent2, _scopeId));
                _push2(`</span>`);
              } else {
                return [
                  createVNode("span", { class: "edit" }, [
                    createVNode(_component_font_awesome, { icon: ["fas", "pen-to-square"] })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ElementsAppModal, {
        isOpen: unref(deleteModal),
        onUpdateIsOpen: updateDeleteModal
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 data-v-3955de1a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-3955de1a${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} &quot;${ssrInterpolate(unref(deleteProduct).plant_name)}&quot;${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + ' "' + toDisplayString(unref(deleteProduct).plant_name) + '"' + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-3955de1a${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-3955de1a${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "btn btn-secondary",
                onClick: ($event) => isRef(deleteModal) ? deleteModal.value = false : deleteModal = false
              }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
              createVNode("button", {
                class: "btn btn-danger",
                onClick: ($event) => deletePlant()
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/ListProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListProduct = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3955de1a"]]);

export { ListProduct as default };
//# sourceMappingURL=ListProduct-DDwVZq3Q.mjs.map
