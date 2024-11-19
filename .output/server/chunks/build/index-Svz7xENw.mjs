import { _ as __nuxt_component_0$2 } from './Spinner-BezqYXW-.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { p as publicAssetsURL, _ as _export_sfc, u as useI18n, a as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { useSSRContext, withAsyncContext, ref, watchEffect, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode } from 'vue';
import { Autoplay, EffectFade, Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_2$1 } from './nuxt-link-DVTfn8MM.mjs';
import { _ as _imports_0$2 } from './virtual_public-BTB3BaHh.mjs';
import { _ as __nuxt_component_5$1 } from './ProductCard-DN3Ae-Nd.mjs';
import { s as script } from './index-DxwsuaU6.mjs';
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
import '@primeuix/utils/dom';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import './virtual_public-Bp1dU-vu.mjs';
import './index-BmTln-ia.mjs';
import '@primeuix/utils/uuid';
import './index-DvJXdbWX.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-7a61456d><div class="slider" data-v-7a61456d>`);
      if (unref(pending)) {
        _push(`<div class="text-center text-white loader" data-v-7a61456d>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else if (!unref(pending)) {
        _push(`<div data-v-7a61456d>`);
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
                      _push3(`<div class="main-img" data-v-7a61456d${_scopeId2}><img class="main"${ssrRenderAttr("src", `${unref(apiBase)}/${image.photo}`)} data-v-7a61456d${_scopeId2}></div>`);
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
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-7a61456d"]]);
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const _component_nuxt_link = __nuxt_component_2$1;
      _push(`<!--[-->`);
      if ((_b = (_a = __props.product) == null ? void 0 : _a.data) == null ? void 0 : _b.productOffer.discountRatio) {
        _push(`<div class="disscount" data-v-651e444c>${ssrInterpolate(((_d = (_c = __props.product) == null ? void 0 : _c.data) == null ? void 0 : _d.productOffer.discountRatio) + "%")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="product-img" data-v-651e444c>`);
      if ((_f = (_e = __props.product) == null ? void 0 : _e.photos) == null ? void 0 : _f.photoPath) {
        _push(`<img${ssrRenderAttr("src", unref(apiBase) + "/" + ((_h = (_g = __props.product) == null ? void 0 : _g.photos) == null ? void 0 : _h.photoPath))} alt="" data-v-651e444c>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-651e444c>`);
      }
      _push(`</div><div class="product-info" data-v-651e444c><h5 class="title" data-v-651e444c>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? __props.product.plant_name : __props.product.plant_name)}</h5>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/Product/${(_a2 = (_j = (_i = __props.product) == null ? void 0 : _i.id) == null ? void 0 : _j.toString()) != null ? _a2 : (_k = __props.productId) == null ? void 0 : _k.toString()}`,
        class: "btn btn-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-651e444c${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646" : "Order Now"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="price" data-v-651e444c><span class="${ssrRenderClass(((_m = (_l = __props.product) == null ? void 0 : _l.productOffer) == null ? void 0 : _m.newPrice) ? "old-price" : "")}" data-v-651e444c>${ssrInterpolate((_n = __props.product) == null ? void 0 : _n.price)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "AED" : "AED")}</span></p>`);
      if ((_p = (_o = __props.product) == null ? void 0 : _o.productOffer) == null ? void 0 : _p.newPrice) {
        _push(`<p class="price" data-v-651e444c>${ssrInterpolate((_r = (_q = __props.product) == null ? void 0 : _q.productOffer) == null ? void 0 : _r.newPrice)} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "AED" : "AED")}</p>`);
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
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-651e444c"]]);
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
//# sourceMappingURL=index-Svz7xENw.mjs.map
