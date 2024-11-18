import { _ as __nuxt_component_0$2 } from './Spinner-BezqYXW-.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { p as publicAssetsURL, B as BaseStyle, _ as _export_sfc, u as useI18n, a as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { useSSRContext, withAsyncContext, ref, watchEffect, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createElementBlock, createElementVNode, renderSlot, normalizeClass, resolveDynamicComponent } from 'vue';
import { Autoplay, EffectFade, Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_2$1 } from './nuxt-link-FZwR9qik.mjs';
import { _ as _imports_0$2 } from './virtual_public-BTB3BaHh.mjs';
import { _ as __nuxt_component_5$1 } from './ProductCard-NAIYWLLA.mjs';
import { U as UniqueComponentId, s as script$6 } from './index-DlmtoEba.mjs';
import { getFirstFocusableElement, focus } from '@primeuix/utils/dom';
import { s as script$5 } from './index-CfpEh06J.mjs';
import { _ as _imports_0$3 } from './virtual_public-C_LRNEiw.mjs';
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
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@primeuix/utils/uuid';

const _sfc_main$a = {
  __name: "MainImg",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { data: MainImg, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetHomePhotos}`, {
      baseURL: apiBase,
      credentials: "include",
      method: "GET"
    }, "$nDgijvoM1P")), __temp = await __temp, __restore(), __temp);
    ref(false);
    [__temp, __restore] = withAsyncContext(() => useFetch(`https://server.nabtaty.com/api/findMyInfo`, {
      credentials: "include"
    }, "$vML4fiuVup")), __temp = await __temp, __restore();
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSpinner = __nuxt_component_0$2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-8d88b800><div class="slider" data-v-8d88b800>`);
      if (unref(pending)) {
        _push(`<div class="text-center text-white loader" data-v-8d88b800>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else if (!unref(pending)) {
        _push(`<div data-v-8d88b800>`);
        _push(ssrRenderComponent(_component_Swiper, {
          style: { "direction": "ltr" },
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperEffectFade" in _ctx ? _ctx.SwiperEffectFade : unref(EffectFade), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
          "slides-per-view": 1,
          loop: true,
          autoplay: {
            delay: 5e3,
            disableOnInteraction: true
          },
          effect: "fade",
          speed: 1e3,
          pagination: {
            clickable: true
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(MainImg), (image) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: image.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="main-img" data-v-8d88b800${_scopeId2}><img class="main"${ssrRenderAttr("src", `${unref(apiBase)}/${image.photo}`)} data-v-8d88b800${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "main-img" }, [
                          createVNode("img", {
                            class: "main",
                            src: `${unref(apiBase)}/${image.photo}`
                          }, null, 8, ["src"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(MainImg), (image) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: image.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "main-img" }, [
                        createVNode("img", {
                          class: "main",
                          src: `${unref(apiBase)}/${image.photo}`
                        }, null, 8, ["src"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/MainImg.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8d88b800"]]);
const _imports_0$1 = publicAssetsURL("/photos/nabt2.png");
const _sfc_main$9 = {
  __name: "CategoryCard",
  __ssrInlineRender: true,
  props: ["product", "productId"],
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_nuxt_link = __nuxt_component_2$1;
      _push(`<!--[-->`);
      if ((_b = (_a = __props.product) == null ? void 0 : _a.data) == null ? void 0 : _b.productOffer.discountRatio) {
        _push(`<div class="disscount" data-v-3103affe>${ssrInterpolate(((_d = (_c = __props.product) == null ? void 0 : _c.data) == null ? void 0 : _d.productOffer.discountRatio) + "%")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-3103affe><div class="product-img" data-v-3103affe>`);
      if ((_e = __props.product) == null ? void 0 : _e.photo) {
        _push(`<img${ssrRenderAttr("src", unref(apiBase) + "/" + ((_f = __props.product) == null ? void 0 : _f.photo))} alt="" data-v-3103affe>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-3103affe>`);
      }
      _push(`</div><div class="product-info" data-v-3103affe><h5 class="title" data-v-3103affe>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? __props.product.category_name : __props.product.category_name)}</h5></div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/Products/${(_a2 = (_h = (_g = __props.product) == null ? void 0 : _g.id) == null ? void 0 : _h.toString()) != null ? _a2 : (_i = __props.productId) == null ? void 0 : _i.toString()}`,
        class: "btn btn-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-3103affe${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0634\u0627\u0647\u062F \u0627\u0644\u0645\u0632\u064A\u062F" : "See More")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0634\u0627\u0647\u062F \u0627\u0644\u0645\u0632\u064A\u062F" : "See More"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CategoryCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-3103affe"]]);
const _sfc_main$8 = {
  __name: "Categories",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    let Products = ref();
    if (locale.value === "ar") {
      [__temp, __restore] = withAsyncContext(() => useFetch(
        `${api.findAllCategories}`,
        {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "ar"
          }
        },
        "$bVB1W1Hcea"
      )), __temp = await __temp, __restore();
      watchEffect(() => {
      });
    } else {
      [__temp, __restore] = withAsyncContext(() => useFetch(
        `${api.findAllCategories}`,
        {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "en"
          }
        },
        "$ZKJTXmzXJr"
      )), __temp = await __temp, __restore();
      watchEffect(() => {
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSpinner = __nuxt_component_0$2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CategoryCard = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["Categories", _ctx.$i18n.locale === "ar" ? "ar" : ""]
      }, _attrs))} data-v-3abd737c><div class="container mt-10" data-v-3abd737c><h1 data-v-3abd737c><img width="70"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-3abd737c><span data-v-3abd737c>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0641\u0626\u0627\u062A" : "Categories")}</span></h1>`);
      if (_ctx.pending) {
        _push(`<div class="text-center text-white loader" data-v-3abd737c>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-3abd737c>`);
        _push(ssrRenderComponent(_component_Swiper, {
          style: { "direction": "ltr" },
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
          loop: false,
          autoplay: {
            delay: 5e3,
            disableOnInteraction: true
          },
          pagination: {
            clickable: true
          },
          breakpoints: {
            "1200": {
              slidesPerView: 4,
              slidesPerGroup: 4
            },
            "992": {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            "768": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "250": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "1": {
              slidesPerView: 1,
              slidesPerGroup: 1
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(Products), (product) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: product.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="product"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-aos="fade-up" data-aos-duration="800" data-v-3abd737c${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_CategoryCard, { product }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "product",
                          dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr",
                          "data-aos": "fade-up",
                          "data-aos-duration": "800"
                        }, [
                          createVNode(_component_CategoryCard, { product }, null, 8, ["product"])
                        ], 8, ["dir"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(Products), (product) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: product.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "product",
                        dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr",
                        "data-aos": "fade-up",
                        "data-aos-duration": "800"
                      }, [
                        createVNode(_component_CategoryCard, { product }, null, 8, ["product"])
                      ], 8, ["dir"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Categories.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-3abd737c"]]);
const _sfc_main$7 = {
  __name: "Arrivals",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    let loading = ref(false);
    let Products = ref();
    const getProducts = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetPlantByCat}/11`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$O6PvhtnQkg"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetPlantByCat}/11`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$VSg0UzGRA8"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getProducts();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_2$1;
      const _component_ElementsSpinner = __nuxt_component_0$2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_ProductCard = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["Categories", _ctx.$i18n.locale === "ar" ? "ar" : ""]
      }, _attrs))} data-v-9d8746a6><div class="container mt-10" data-v-9d8746a6><div class="see-all" data-v-9d8746a6>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/Products/11`,
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0644" : "See All")}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0644" : "See All"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 data-v-9d8746a6><img width="70"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-9d8746a6><span data-v-9d8746a6>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0646\u0628\u0627\u062A\u0627\u062A \u062E\u0636\u0631\u0627\u0621" : "Green Plants")}</span></h1>`);
      if (unref(loading)) {
        _push(`<div class="text-center text-white loader" data-v-9d8746a6>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-9d8746a6>`);
        _push(ssrRenderComponent(_component_Swiper, {
          style: { "direction": "ltr" },
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
          loop: false,
          autoplay: {
            delay: 5e3,
            disableOnInteraction: true
          },
          pagination: {
            clickable: true
          },
          breakpoints: {
            "1200": {
              slidesPerView: 4,
              slidesPerGroup: 4
            },
            "992": {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            "768": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "250": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "1": {
              slidesPerView: 1,
              slidesPerGroup: 1
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(Products), (product) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: product.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="product"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-aos="fade-up" data-aos-duration="800" data-v-9d8746a6${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_ProductCard, { product }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "product",
                          dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr",
                          "data-aos": "fade-up",
                          "data-aos-duration": "800"
                        }, [
                          createVNode(_component_ProductCard, { product }, null, 8, ["product"])
                        ], 8, ["dir"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(Products), (product) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: product.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "product",
                        dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr",
                        "data-aos": "fade-up",
                        "data-aos-duration": "800"
                      }, [
                        createVNode(_component_ProductCard, { product }, null, 8, ["product"])
                      ], 8, ["dir"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Arrivals.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9d8746a6"]]);
const _imports_0 = publicAssetsURL("/photos/gifts.png");
const _sfc_main$6 = {
  __name: "GiftCard",
  __ssrInlineRender: true,
  props: ["product", "productId"],
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_nuxt_link = __nuxt_component_2$1;
      _push(`<!--[-->`);
      if ((_b = (_a = __props.product) == null ? void 0 : _a.data) == null ? void 0 : _b.productOffer.discountRatio) {
        _push(`<div class="disscount" data-v-8d29da16>${ssrInterpolate(((_d = (_c = __props.product) == null ? void 0 : _c.data) == null ? void 0 : _d.productOffer.discountRatio) + "%")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="product-img" data-v-8d29da16>`);
      if ((_e = __props.product) == null ? void 0 : _e.photos.photoPath) {
        _push(`<img${ssrRenderAttr("src", unref(apiBase) + "/" + ((_f = __props.product) == null ? void 0 : _f.photos.photoPath))} alt="" data-v-8d29da16>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-8d29da16>`);
      }
      _push(`</div><div class="product-info" data-v-8d29da16><h5 class="title" data-v-8d29da16>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? __props.product.plant_name : __props.product.plant_name)}</h5>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/Product/${(_a2 = (_h = (_g = __props.product) == null ? void 0 : _g.id) == null ? void 0 : _h.toString()) != null ? _a2 : (_i = __props.productId) == null ? void 0 : _i.toString()}`,
        class: "btn btn-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-8d29da16${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="price" data-v-8d29da16><span class="${ssrRenderClass(((_k = (_j = __props.product) == null ? void 0 : _j.productOffer) == null ? void 0 : _k.newPrice) ? "old-price" : "")}" data-v-8d29da16>${ssrInterpolate((_l = __props.product) == null ? void 0 : _l.price)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "AED" : "AED")}</span></p>`);
      if ((_n = (_m = __props.product) == null ? void 0 : _m.productOffer) == null ? void 0 : _n.newPrice) {
        _push(`<p class="price" data-v-8d29da16>${ssrInterpolate((_p = (_o = __props.product) == null ? void 0 : _o.productOffer) == null ? void 0 : _p.newPrice)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "AED" : "AED")}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GiftCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-8d29da16"]]);
const _sfc_main$5 = {
  __name: "Gifts",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    let loading = ref(false);
    let Products = ref();
    const getProducts = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetPlantByCat}/16`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$FvndF04Yjx"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetPlantByCat}/16`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$slXzrCw2Wq"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getProducts();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_link = __nuxt_component_2$1;
      const _component_ElementsSpinner = __nuxt_component_0$2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_GiftCard = __nuxt_component_4$1;
      if ((_a = unref(Products)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Categories", _ctx.$i18n.locale === "ar" ? "ar" : ""]
        }, _attrs))} data-v-e4dba2c3><div class="container mt-10" data-v-e4dba2c3><div class="see-all" data-v-e4dba2c3>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/Products/16`,
          class: "btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0644" : "See All")}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0644" : "See All"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><h1 data-v-e4dba2c3><img width="70"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-e4dba2c3><span data-v-e4dba2c3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u062F\u0627\u064A\u0627" : "Gifts")}</span></h1>`);
        if (unref(loading)) {
          _push(`<div class="text-center text-white loader" data-v-e4dba2c3>`);
          _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div data-v-e4dba2c3>`);
          _push(ssrRenderComponent(_component_Swiper, {
            style: { "direction": "ltr" },
            modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
            loop: false,
            autoplay: {
              delay: 5e3,
              disableOnInteraction: true
            },
            pagination: {
              clickable: true
            },
            breakpoints: {
              "1200": {
                slidesPerView: 4,
                slidesPerGroup: 4
              },
              "992": {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
              "768": {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              "250": {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              "1": {
                slidesPerView: 1,
                slidesPerGroup: 1
              }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(Products), (product) => {
                  _push2(ssrRenderComponent(_component_SwiperSlide, {
                    key: product.id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="product"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-aos="fade-up" data-aos-duration="800" data-v-e4dba2c3${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_GiftCard, { product }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "product",
                            dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr",
                            "data-aos": "fade-up",
                            "data-aos-duration": "800"
                          }, [
                            createVNode(_component_GiftCard, { product }, null, 8, ["product"])
                          ], 8, ["dir"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(Products), (product) => {
                    return openBlock(), createBlock(_component_SwiperSlide, {
                      key: product.id
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "product",
                          dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr",
                          "data-aos": "fade-up",
                          "data-aos-duration": "800"
                        }, [
                          createVNode(_component_GiftCard, { product }, null, 8, ["product"])
                        ], 8, ["dir"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Gifts.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e4dba2c3"]]);
const _sfc_main$4 = {
  __name: "About",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { data: About, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetAbout}`, {
      baseURL: apiBase,
      credentials: "include",
      headers: {
        "accept-language": locale.value === "ar" ? "ar" : "en"
      }
    }, "$5kt8ux5YnH")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ElementsSpinner = __nuxt_component_0$2;
      const _component_nuxt_link = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-6d75b0ac>`);
      if (unref(pending)) {
        _push(`<div class="text-center text-white" data-v-6d75b0ac>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="container" data-v-6d75b0ac><div class="about-content row" data-v-6d75b0ac><div class="about-info col-lg-6"${ssrRenderAttr("data-aos", _ctx.$i18n.locale === "ar" ? "fade-left" : "fade-right")} data-aos-duration="800" data-v-6d75b0ac><div class="title" data-v-6d75b0ac><h1 class="d-flex align-items-center" data-v-6d75b0ac><img width="70"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-6d75b0ac><span class="underline" data-v-6d75b0ac>${ssrInterpolate(_ctx.$t("AboutUs"))}</span></h1></div><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "ar" : "", "desc"])}" data-v-6d75b0ac>${ssrInterpolate((_a = unref(About)[0]) == null ? void 0 : _a.description)}</div><div class="mt-7 d-flex justify-content-end" data-v-6d75b0ac>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/About",
          class: "btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-6d75b0ac${_scopeId}>${ssrInterpolate(_ctx.$t("ReadMore"))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(_ctx.$t("ReadMore")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="about-img col-lg-6"${ssrRenderAttr("data-aos", _ctx.$i18n.locale === "ar" ? "fade-right" : "fade-left")} data-aos-duration="800" data-v-6d75b0ac><img${ssrRenderAttr("src", `${unref(apiBase)}/${(_b = unref(About)[0]) == null ? void 0 : _b.photo}`)} alt="" data-v-6d75b0ac></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6d75b0ac"]]);
const _sfc_main$3 = {
  __name: "Album",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { data: Album, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetPhotoAlbum}`, {
      baseURL: apiBase,
      credentials: "include",
      method: "GET"
    }, "$z19i8YPHPk")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSpinner = __nuxt_component_0$2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home container" }, _attrs))} data-v-712052e4><div class="title" data-v-712052e4><h1 class="d-flex align-items-center" data-v-712052e4><img width="70"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-712052e4><span class="underline" data-v-712052e4>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0648\u0645\u0646\u0627" : "Our Album")}</span></h1></div><div class="slider" data-v-712052e4>`);
      if (unref(pending)) {
        _push(`<div class="text-center text-white loader" data-v-712052e4>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else if (!unref(pending)) {
        _push(`<div data-v-712052e4>`);
        _push(ssrRenderComponent(_component_Swiper, {
          style: { "direction": "ltr" },
          modules: [
            "SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay),
            "SwiperEffectCoverflow" in _ctx ? _ctx.SwiperEffectCoverflow : unref(EffectCoverflow),
            "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination),
            "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)
          ],
          loop: false,
          autoplay: {
            delay: 5e3,
            disableOnInteraction: true
          },
          effect: "coverflow",
          speed: 1e3,
          pagination: {
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          breakpoints: {
            "1200": {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            "992": {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            "768": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "250": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "1": {
              slidesPerView: 2,
              slidesPerGroup: 2
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(Album), (photo) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: photo.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="main-img" data-v-712052e4${_scopeId2}><img class="main"${ssrRenderAttr("src", unref(apiBase) + "/" + photo.photo)} data-v-712052e4${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "main-img" }, [
                          createVNode("img", {
                            class: "main",
                            src: unref(apiBase) + "/" + photo.photo
                          }, null, 8, ["src"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(Album), (photo) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: photo.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "main-img" }, [
                        createVNode("img", {
                          class: "main",
                          src: unref(apiBase) + "/" + photo.photo
                        }, null, 8, ["src"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="swiper-navigation" data-v-712052e4><button class="swiper-button-next" data-v-712052e4></button><button class="swiper-button-prev" data-v-712052e4></button></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Album.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-712052e4"]]);
var script$4 = {
  name: "BanIcon",
  "extends": script$5
};
var _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = [_hoisted_1$3];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$3, 16);
}
script$4.render = render$3;
var script$3 = {
  name: "StarIcon",
  "extends": script$5
};
var _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$2 = [_hoisted_1$2];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$2, 16);
}
script$3.render = render$2;
var script$2 = {
  name: "StarFillIcon",
  "extends": script$5
};
var _hoisted_1$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$1];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-rating {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: ".concat(dt("rating.gap"), ";\n}\n\n.p-rating-option {\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    outline-color: transparent;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: background ").concat(dt("rating.transition.duration"), ", color ").concat(dt("rating.transition.duration"), ", border-color ").concat(dt("rating.transition.duration"), ", outline-color ").concat(dt("rating.transition.duration"), ", box-shadow ").concat(dt("rating.transition.duration"), ";\n}\n\n.p-rating-option.p-focus-visible {\n    box-shadow: ").concat(dt("focus.ring.shadow"), ";\n    outline: ").concat(dt("focus.ring.width"), " ").concat(dt("focus.ring.style"), " ").concat(dt("focus.ring.color"), ";\n    outline-offset: ").concat(dt("focus.ring.offset"), ";\n}\n\n.p-rating-icon {\n    color: ").concat(dt("rating.icon.color"), ";\n    transition: background ").concat(dt("rating.transition.duration"), ", color ").concat(dt("rating.transition.duration"), ", border-color ").concat(dt("rating.transition.duration"), ", outline-color ").concat(dt("rating.transition.duration"), ", box-shadow ").concat(dt("rating.transition.duration"), ";\n    font-size: ").concat(dt("rating.icon.size"), ";\n    width: ").concat(dt("rating.icon.size"), ";\n    height: ").concat(dt("rating.icon.size"), ";\n}\n\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {\n    color: ").concat(dt("rating.icon.hover.color"), ";\n}\n\n.p-rating-option-active .p-rating-icon {\n    color: ").concat(dt("rating.icon.active.color"), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-rating", {
      "p-readonly": props.readonly,
      "p-disabled": props.disabled
    }];
  },
  option: function option(_ref3) {
    var instance = _ref3.instance, props = _ref3.props, value = _ref3.value;
    return ["p-rating-option", {
      "p-rating-option-active": value <= props.modelValue,
      "p-focus-visible": value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }];
  },
  onIcon: "p-rating-icon p-rating-on-icon",
  offIcon: "p-rating-icon p-rating-off-icon"
};
var RatingStyle = BaseStyle.extend({
  name: "rating",
  theme,
  classes
});
var script$1 = {
  name: "BaseRating",
  "extends": script$6,
  props: {
    modelValue: {
      type: Number,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    stars: {
      type: Number,
      "default": 5
    },
    onIcon: {
      type: String,
      "default": void 0
    },
    offIcon: {
      type: String,
      "default": void 0
    }
  },
  style: RatingStyle,
  provide: function provide() {
    return {
      $pcRating: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Rating",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "focus", "blur"],
  data: function data() {
    return {
      name: this.$attrs.name,
      focusedOptionIndex: -1,
      isFocusVisibleItem: true
    };
  },
  watch: {
    "$attrs.name": function $attrsName(newValue) {
      this.name = newValue || UniqueComponentId();
    }
  },
  mounted: function mounted() {
    this.name = this.name || UniqueComponentId();
  },
  methods: {
    getPTOptions: function getPTOptions(key, value) {
      return this.ptm(key, {
        context: {
          active: value <= this.modelValue,
          focused: value === this.focusedOptionIndex
        }
      });
    },
    onOptionClick: function onOptionClick(event, value) {
      if (!this.readonly && !this.disabled) {
        this.onOptionSelect(event, value);
        this.isFocusVisibleItem = false;
        var firstFocusableEl = getFirstFocusableElement(event.currentTarget);
        firstFocusableEl && focus(firstFocusableEl);
      }
    },
    onFocus: function onFocus(event, value) {
      this.focusedOptionIndex = value;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
    },
    onChange: function onChange(event, value) {
      this.onOptionSelect(event, value);
      this.isFocusVisibleItem = true;
    },
    onOptionSelect: function onOptionSelect(event, value) {
      if (this.focusedOptionIndex === value || this.modelValue === value) {
        this.focusedOptionIndex = -1;
        this.updateModel(event, null);
      } else {
        this.focusedOptionIndex = value;
        this.updateModel(event, value || null);
      }
    },
    updateModel: function updateModel(event, value) {
      this.$emit("update:modelValue", value);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    },
    starAriaLabel: function starAriaLabel(value) {
      return value === 1 ? this.$primevue.config.locale.aria.star : this.$primevue.config.locale.aria.stars.replace(/{star}/g, value);
    }
  },
  components: {
    StarFillIcon: script$2,
    StarIcon: script$3,
    BanIcon: script$4
  }
};
var _hoisted_1 = ["onClick", "data-p-active", "data-p-focused"];
var _hoisted_2 = ["value", "name", "checked", "disabled", "readonly", "aria-label", "onFocus", "onChange"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stars, function(value) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: value,
      "class": _ctx.cx("option", {
        value
      }),
      onClick: function onClick($event) {
        return $options.onOptionClick($event, value);
      },
      ref_for: true
    }, $options.getPTOptions("option", value), {
      "data-p-active": value <= _ctx.modelValue,
      "data-p-focused": value === $data.focusedOptionIndex
    }), [createElementVNode("span", mergeProps({
      "class": "p-hidden-accessible",
      ref_for: true
    }, _ctx.ptm("hiddenOptionInputContainer"), {
      "data-p-hidden-accessible": true
    }), [createElementVNode("input", mergeProps({
      type: "radio",
      value,
      name: $data.name,
      checked: _ctx.modelValue === value,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      "aria-label": $options.starAriaLabel(value),
      onFocus: function onFocus2($event) {
        return $options.onFocus($event, value);
      },
      onBlur: _cache[0] || (_cache[0] = function() {
        return $options.onBlur && $options.onBlur.apply($options, arguments);
      }),
      onChange: function onChange2($event) {
        return $options.onChange($event, value);
      },
      ref_for: true
    }, _ctx.ptm("hiddenOptionInput")), null, 16, _hoisted_2)], 16), value <= _ctx.modelValue ? renderSlot(_ctx.$slots, "onicon", {
      key: 0,
      value,
      "class": normalizeClass(_ctx.cx("onIcon"))
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.onIcon ? "span" : "StarFillIcon"), mergeProps({
        "class": [_ctx.cx("onIcon"), _ctx.onIcon],
        ref_for: true
      }, _ctx.ptm("onIcon")), null, 16, ["class"]))];
    }) : renderSlot(_ctx.$slots, "officon", {
      key: 1,
      value,
      "class": normalizeClass(_ctx.cx("offIcon"))
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.offIcon ? "span" : "StarIcon"), mergeProps({
        "class": [_ctx.cx("offIcon"), _ctx.offIcon],
        ref_for: true
      }, _ctx.ptm("offIcon")), null, 16, ["class"]))];
    })], 16, _hoisted_1);
  }), 128))], 16);
}
script.render = render;
const _imports_2 = publicAssetsURL("/photos/user.png");
const _sfc_main$2 = {
  __name: "Reviews",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    let Reviews = ref();
    if (locale.value === "ar") {
      [__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetReviews}`, {
        baseURL: apiBase,
        credentials: "include",
        headers: {
          "accept-language": "ar"
        }
      }, "$3dFRRwKHzk")), __temp = await __temp, __restore();
      watchEffect(() => {
      });
    } else {
      [__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetReviews}`, {
        baseURL: apiBase,
        credentials: "include",
        headers: {
          "accept-language": "en"
        }
      }, "$ylL79Wtgv4")), __temp = await __temp, __restore();
      watchEffect(() => {
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSpinner = __nuxt_component_0$2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_Rating = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "reviews" }, _attrs))} data-v-545af5b3><div class="container" data-v-545af5b3><h1 data-v-545af5b3><img width="70"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-545af5b3><span data-v-545af5b3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A" : "Reviews")}</span></h1>`);
      if (_ctx.pending) {
        _push(`<div class="text-center text-white loader" data-v-545af5b3>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-545af5b3>`);
        _push(ssrRenderComponent(_component_Swiper, {
          style: { "direction": "ltr" },
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
          loop: false,
          autoplay: {
            delay: 5e3,
            disableOnInteraction: true
          },
          spaceBetween: "30",
          pagination: {
            clickable: true
          },
          breakpoints: {
            "1200": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "992": {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            "768": {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            "250": {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            "1": {
              slidesPerView: 1,
              slidesPerGroup: 1
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(Reviews), (review) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="review" data-v-545af5b3${_scopeId2}><div class="leaf" data-v-545af5b3${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-545af5b3${_scopeId2}></div><div class="title" data-v-545af5b3${_scopeId2}><img width="40"${ssrRenderAttr("src", _imports_2)} alt="" data-v-545af5b3${_scopeId2}><h2 class="mx-3" data-v-545af5b3${_scopeId2}>${ssrInterpolate(review.customer_name)}</h2></div><div class="desc" data-v-545af5b3${_scopeId2}>${ssrInterpolate(review.message)}</div><div class="rate" data-v-545af5b3${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Rating, {
                        modelValue: review.rate,
                        "onUpdate:modelValue": ($event) => review.rate = $event,
                        readonly: ""
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "review" }, [
                          createVNode("div", { class: "leaf" }, [
                            createVNode("img", {
                              src: _imports_0$3,
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "title" }, [
                            createVNode("img", {
                              width: "40",
                              src: _imports_2,
                              alt: ""
                            }),
                            createVNode("h2", { class: "mx-3" }, toDisplayString(review.customer_name), 1)
                          ]),
                          createVNode("div", { class: "desc" }, toDisplayString(review.message), 1),
                          createVNode("div", { class: "rate" }, [
                            createVNode(_component_Rating, {
                              modelValue: review.rate,
                              "onUpdate:modelValue": ($event) => review.rate = $event,
                              readonly: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(Reviews), (review) => {
                  return openBlock(), createBlock(_component_SwiperSlide, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "review" }, [
                        createVNode("div", { class: "leaf" }, [
                          createVNode("img", {
                            src: _imports_0$3,
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "title" }, [
                          createVNode("img", {
                            width: "40",
                            src: _imports_2,
                            alt: ""
                          }),
                          createVNode("h2", { class: "mx-3" }, toDisplayString(review.customer_name), 1)
                        ]),
                        createVNode("div", { class: "desc" }, toDisplayString(review.message), 1),
                        createVNode("div", { class: "rate" }, [
                          createVNode(_component_Rating, {
                            modelValue: review.rate,
                            "onUpdate:modelValue": ($event) => review.rate = $event,
                            readonly: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Reviews.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-545af5b3"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_HomeMainImg = __nuxt_component_0$1;
  const _component_HomeCategories = __nuxt_component_1;
  const _component_HomeArrivals = __nuxt_component_2;
  const _component_HomeGifts = __nuxt_component_3;
  const _component_HomeAbout = __nuxt_component_4;
  const _component_HomeAlbum = __nuxt_component_5;
  const _component_HomeReviews = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "overflow": "hidden" } }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HomeMainImg, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeCategories, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeArrivals, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeGifts, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAlbum, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeReviews, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Home = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Home, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-hERvd8PQ.mjs.map
