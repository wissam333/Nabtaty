import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as _export_sfc, u as useI18n, g as _imports_0, a as useRuntimeConfig } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext, watchEffect } from 'vue';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { u as useSidebar } from './useState-DDQ6Qtd2.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
  __name: "Orders",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    let details = ref(false);
    let loading = ref(false);
    let Orders2 = ref([]);
    const getInfo = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(`${api.GetOrders}`, {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "ar"
          }
        }, "$y05l6RPPIh");
        watchEffect(() => {
        });
      } else {
        await useFetch(`${api.GetOrders}`, {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "en"
          }
        }, "$bsaH0Anhh9");
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getInfo();
    ref();
    ref(false);
    let customers = ref([]);
    const getCustomers = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetAllCustomers}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$QDLFnB9dfg"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetAllCustomers}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$Hq8sUmpAxF"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getCustomers();
    let Loactions = ref([]);
    const getLoactions = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetAllLocations}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$s00D4ga8bm"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetAllLocations}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$7YMUD0VMAw"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getLoactions();
    const getCustomerName = (id) => {
      var _a, _b, _c;
      let res = (_a = customers.value) == null ? void 0 : _a.filter((e) => e.id == id);
      return ((_b = res[0]) == null ? void 0 : _b.firstName) + ((_c = res[0]) == null ? void 0 : _c.lastName);
    };
    const getLocationName = (id) => {
      var _a, _b;
      let res = (_a = Loactions.value) == null ? void 0 : _a.filter((e) => e.id == id);
      return (_b = res[0]) == null ? void 0 : _b.name;
    };
    let OrderDetails = ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_font_awesome = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["contain", ("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : ""]
      }, _attrs))} data-v-d4d5fceb><div class="title-container" data-v-d4d5fceb><div class="head-title" data-v-d4d5fceb><h4 class="header4" data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A" : "Orders List")}</h4></div><div class="options" data-v-d4d5fceb>`);
      if (!unref(details)) {
        _push(`<div class="reload btn btn-success mx-2" data-v-d4d5fceb>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div>`);
      } else {
        _push(`<div class="reload btn btn-success mx-2" data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0631\u062C\u0648\u0639" : "Back")}</div>`);
      }
      _push(`</div></div>`);
      if (!unref(details)) {
        _push(`<div class="table-responsive" data-v-d4d5fceb>`);
        if (unref(loading)) {
          _push(`<div class="loading" data-v-d4d5fceb><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-d4d5fceb></div>`);
        } else {
          _push(`<div class="product-tabel" data-v-d4d5fceb><table data-v-d4d5fceb><thead data-v-d4d5fceb><tr data-v-d4d5fceb><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0643\u0644\u064A" : "Total Price")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0627\u0631\u064A\u062E" : "Date")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0646\u0648\u0639 \u0627\u0644\u062F\u0641\u0639" : "Payment Type")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0641\u0627\u0635\u064A\u0644" : "Details")}</th></tr></thead><tbody data-v-d4d5fceb><!--[-->`);
          ssrRenderList(unref(Orders2), (product) => {
            var _a3;
            var _a2;
            _push(`<tr class="rows" data-v-d4d5fceb><td class="fw-bold" data-v-d4d5fceb>${ssrInterpolate(getCustomerName(product.customer_id))}</td><td data-v-d4d5fceb><p class="badge rounded-pill bg-primary me-1" data-v-d4d5fceb> JOD ${ssrInterpolate(product.total_price)}</p></td><td class="fw-bold" data-v-d4d5fceb>${ssrInterpolate((_a2 = product.created_at) == null ? void 0 : _a2.slice(0, 10))}</td><td class="fw-bold" data-v-d4d5fceb>${ssrInterpolate(((_a3 = product.payment_id) != null ? _a3 : _ctx.$i18n.locale === "ar") ? "\u0644\u0627 \u064A\u0648\u062C\u062F" : "Not Found")}</td><td class="fw-bold" data-v-d4d5fceb>${ssrInterpolate(getLocationName(product.location_id))}</td><td class="fw-bold edit-link" data-v-d4d5fceb>`);
            _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "circle-info"] }, null, _parent));
            _push(`</td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="table-responsive" data-v-d4d5fceb>`);
        if (unref(loading)) {
          _push(`<div class="loading" data-v-d4d5fceb><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-d4d5fceb></div>`);
        } else {
          _push(`<div class="product-tabel" data-v-d4d5fceb><table data-v-d4d5fceb><thead data-v-d4d5fceb><tr data-v-d4d5fceb><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u062C\u0645" : "Size")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0643\u0645\u064A\u0629" : "Quantity")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u0641\u0631\u0627\u062F\u064A" : "Single Price")}</th><th data-v-d4d5fceb>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A" : "Total Price")}</th></tr></thead><tbody data-v-d4d5fceb><!--[-->`);
          ssrRenderList((_a = unref(OrderDetails)) == null ? void 0 : _a.items, (product) => {
            _push(`<tr class="rows" data-v-d4d5fceb><td class="fw-bold" data-v-d4d5fceb>${ssrInterpolate(product.plantName)}</td><td data-v-d4d5fceb><p class="badge rounded-pill bg-primary me-1" data-v-d4d5fceb>${ssrInterpolate(product.size ? product.size : _ctx.$i18n.locale === "ar" ? "\u0644\u0627 \u064A\u0648\u062C\u062F" : "No Size")}</p></td><td class="fw-bold" data-v-d4d5fceb>${ssrInterpolate(product.quantity)}</td><td class="fw-bold" data-v-d4d5fceb>JOD ${ssrInterpolate(Number(product == null ? void 0 : product.plantPrice))}</td><td class="fw-bold" data-v-d4d5fceb> JOD ${ssrInterpolate(Number(product == null ? void 0 : product.plantPrice) * product.quantity)}</td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/Orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d4d5fceb"]]);

export { Orders as default };
//# sourceMappingURL=Orders-B93h7cOz.mjs.map
