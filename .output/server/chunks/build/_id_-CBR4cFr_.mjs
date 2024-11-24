import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_0 } from './Spinner-BezqYXW-.mjs';
import { _ as __nuxt_component_2 } from './nuxt-link-DVTfn8MM.mjs';
import { _ as __nuxt_component_1 } from './ProductCard2-BZr6qlhI.mjs';
import { B as BaseStyle, _ as _export_sfc, u as useI18n, r as useRoute$1, a as useRuntimeConfig } from './server.mjs';
import { ref, withAsyncContext, watchEffect, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, isRef, useSSRContext, resolveComponent, resolveDirective, createElementBlock, normalizeClass, Fragment, renderList, createElementVNode, withDirectives, resolveDynamicComponent, Transition, vShow, renderSlot } from 'vue';
import { u as useFetch } from './fetch-lUyIvxII.mjs';
import { h as useMainToken } from './useState-DDQ6Qtd2.mjs';
import { s as script$4 } from './index-B3lqQCyA.mjs';
import { s as script$5, U as UniqueComponentId } from './index-BmTln-ia.mjs';
import { findSingle, focus, getAttribute } from '@primeuix/utils/dom';
import { resolve, isNotEmpty, isPrintableCharacter, findLast, isEmpty, equals } from '@primeuix/utils/object';
import { a as script$2$1 } from './index-DvokLXLf.mjs';
import { s as script$6 } from './index-DoNRbErN.mjs';
import { R as Ripple } from './index-ChTkkqYU.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import '@fortawesome/fontawesome-svg-core';
import './virtual_public-CPhNCZXW.mjs';
import './virtual_public-C4j98MNm.mjs';
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
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@primeuix/utils/zindex';
import './index-DvJXdbWX.mjs';
import './index-C7iL46Cz.mjs';
import './index-nFQnausA.mjs';
import '@primeuix/utils/uuid';

var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-panelmenu {\n    display: flex;\n    flex-direction: column;\n    gap: ".concat(dt("panelmenu.gap"), ";\n}\n\n.p-panelmenu-panel {\n    background: ").concat(dt("panelmenu.panel.background"), ";\n    border-width: ").concat(dt("panelmenu.panel.border.width"), ";\n    border-style: solid;\n    border-color: ").concat(dt("panelmenu.panel.border.color"), ";\n    color: ").concat(dt("panelmenu.panel.color"), ";\n    border-radius: ").concat(dt("panelmenu.panel.border.radius"), ";\n    padding: ").concat(dt("panelmenu.panel.padding"), ";\n}\n\n.p-panelmenu-panel:first-child {\n    border-width: ").concat(dt("panelmenu.panel.first.border.width"), ";\n    border-top-left-radius: ").concat(dt("panelmenu.panel.first.top.border.radius"), ";\n    border-top-right-radius: ").concat(dt("panelmenu.panel.first.top.border.radius"), ";\n}\n\n.p-panelmenu-panel:last-child {\n    border-width: ").concat(dt("panelmenu.panel.last.border.width"), ";\n    border-bottom-left-radius: ").concat(dt("panelmenu.panel.last.bottom.border.radius"), ";\n    border-bottom-right-radius: ").concat(dt("panelmenu.panel.last.bottom.border.radius"), ";\n}\n\n.p-panelmenu-header {\n    outline: 0 none;\n}\n\n.p-panelmenu-header-content {\n    border-radius: ").concat(dt("panelmenu.item.border.radius"), ";\n    transition: background ").concat(dt("panelmenu.transition.duration"), ", color ").concat(dt("panelmenu.transition.duration"), ", outline-color ").concat(dt("panelmenu.transition.duration"), ", box-shadow ").concat(dt("panelmenu.transition.duration"), ";\n    outline-color: transparent;\n    color: ").concat(dt("panelmenu.item.color"), ";\n}\n\n.p-panelmenu-header-link {\n    display: flex;\n    gap: ").concat(dt("panelmenu.item.gap"), ";\n    padding: ").concat(dt("panelmenu.item.padding"), ";\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    position: relative;\n    text-decoration: none;\n    color: inherit;\n}\n\n.p-panelmenu-header-icon,\n.p-panelmenu-item-icon {\n    color: ").concat(dt("panelmenu.item.icon.color"), ";\n}\n\n.p-panelmenu-submenu-icon {\n    color: ").concat(dt("panelmenu.submenu.icon.color"), ";\n}\n\n.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {\n    background: ").concat(dt("panelmenu.item.focus.background"), ";\n    color: ").concat(dt("panelmenu.item.focus.color"), ";\n}\n\n.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {\n    color: ").concat(dt("panelmenu.item.icon.focus.color"), ";\n}\n\n.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {\n    color: ").concat(dt("panelmenu.submenu.icon.focus.color"), ";\n}\n\n.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {\n    background: ").concat(dt("panelmenu.item.focus.background"), ";\n    color: ").concat(dt("panelmenu.item.focus.color"), ";\n}\n\n.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {\n    color: ").concat(dt("panelmenu.item.icon.focus.color"), ";\n}\n\n.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {\n    color: ").concat(dt("panelmenu.submenu.icon.focus.color"), ";\n}\n\n.p-panelmenu-submenu {\n    margin: 0;\n    padding: 0 0 0 ").concat(dt("panelmenu.submenu.indent"), ";\n    outline: 0;\n    list-style: none;\n}\n\n.p-panelmenu-item-link {\n    display: flex;\n    gap: ").concat(dt("panelmenu.item.gap"), ";\n    padding: ").concat(dt("panelmenu.item.padding"), ";\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    text-decoration: none;\n    color: inherit;\n    position: relative;\n    overflow: hidden;\n}\n\n.p-panelmenu-item-label {\n    line-height: 1;\n}\n\n.p-panelmenu-item-content {\n    border-radius: ").concat(dt("panelmenu.item.border.radius"), ";\n    transition: background ").concat(dt("panelmenu.transition.duration"), ", color ").concat(dt("panelmenu.transition.duration"), ", outline-color ").concat(dt("panelmenu.transition.duration"), ", box-shadow ").concat(dt("panelmenu.transition.duration"), ";\n    color: ").concat(dt("panelmenu.item.color"), ";\n    outline-color: transparent;\n}\n\n.p-panelmenu-item.p-focus > .p-panelmenu-item-content {\n    background: ").concat(dt("panelmenu.item.focus.background"), ";\n    color: ").concat(dt("panelmenu.item.focus.color"), ";\n}\n\n.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {\n    color: ").concat(dt("panelmenu.item.focus.color"), ";\n}\n\n.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {\n    color: ").concat(dt("panelmenu.submenu.icon.focus.color"), ";\n}\n\n.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {\n    background: ").concat(dt("panelmenu.item.focus.background"), ";\n    color: ").concat(dt("panelmenu.item.focus.color"), ";\n}\n\n.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {\n    color: ").concat(dt("panelmenu.item.icon.focus.color"), ";\n}\n\n.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {\n    color: ").concat(dt("panelmenu.submenu.icon.focus.color"), ";\n}\n");
};
var classes = {
  root: "p-panelmenu p-component",
  panel: "p-panelmenu-panel",
  header: function header(_ref2) {
    var instance = _ref2.instance, item2 = _ref2.item;
    return ["p-panelmenu-header", {
      "p-panelmenu-header-active": instance.isItemActive(item2) && !!item2.items,
      "p-disabled": instance.isItemDisabled(item2)
    }];
  },
  headerContent: "p-panelmenu-header-content",
  headerLink: "p-panelmenu-header-link",
  headerIcon: "p-panelmenu-header-icon",
  headerLabel: "p-panelmenu-header-label",
  contentContainer: "p-panelmenu-content-container",
  content: "p-panelmenu-content",
  rootList: "p-panelmenu-root-list",
  item: function item(_ref3) {
    var instance = _ref3.instance, processedItem = _ref3.processedItem;
    return ["p-panelmenu-item", {
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: "p-panelmenu-item-content",
  itemLink: "p-panelmenu-item-link",
  itemIcon: "p-panelmenu-item-icon",
  itemLabel: "p-panelmenu-item-label",
  submenuIcon: "p-panelmenu-submenu-icon",
  submenu: "p-panelmenu-submenu",
  separator: "p-menuitem-separator"
};
var PanelMenuStyle = BaseStyle.extend({
  name: "panelmenu",
  theme,
  classes
});
var script$3 = {
  name: "BasePanelMenu",
  "extends": script$5,
  props: {
    model: {
      type: Array,
      "default": null
    },
    expandedKeys: {
      type: Object,
      "default": null
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    }
  },
  style: PanelMenuStyle,
  provide: function provide() {
    return {
      $pcPanelMenu: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "PanelMenuSub",
  hostName: "PanelMenu",
  "extends": script$5,
  emits: ["item-toggle", "item-mousemove"],
  props: {
    panelId: {
      type: String,
      "default": null
    },
    focusedItemId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    templates: {
      type: Object,
      "default": null
    },
    activeItemPath: {
      type: Object,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": -1
    }
  },
  methods: {
    getItemId: function getItemId(processedItem) {
      return "".concat(this.panelId, "_").concat(processedItem.key);
    },
    getItemKey: function getItemKey(processedItem) {
      return this.getItemId(processedItem);
    },
    getItemProp: function getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name], params) : void 0;
    },
    getItemLabel: function getItemLabel(processedItem) {
      return this.getItemProp(processedItem, "label");
    },
    getPTOptions: function getPTOptions(key, processedItem, index) {
      return this.ptm(key, {
        context: {
          item: processedItem,
          index,
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem),
          disabled: this.isItemDisabled(processedItem)
        }
      });
    },
    isItemActive: function isItemActive(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.key;
      });
    },
    isItemVisible: function isItemVisible(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    },
    isItemFocused: function isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    },
    isItemGroup: function isItemGroup(processedItem) {
      return isNotEmpty(processedItem.items);
    },
    onItemClick: function onItemClick(event, processedItem) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.$emit("item-toggle", {
        processedItem,
        expanded: !this.isItemActive(processedItem)
      });
    },
    onItemToggle: function onItemToggle(event) {
      this.$emit("item-toggle", event);
    },
    onItemMouseMove: function onItemMouseMove(event, processedItem) {
      this.$emit("item-mousemove", {
        originalEvent: event,
        processedItem
      });
    },
    getAriaSetSize: function getAriaSetSize() {
      var _this = this;
      return this.items.filter(function(processedItem) {
        return _this.isItemVisible(processedItem) && !_this.getItemProp(processedItem, "separator");
      }).length;
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this2 = this;
      return index - this.items.slice(0, index).filter(function(processedItem) {
        return _this2.isItemVisible(processedItem) && _this2.getItemProp(processedItem, "separator");
      }).length + 1;
    },
    getMenuItemProps: function getMenuItemProps(processedItem, index) {
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          tabindex: -1,
          "aria-hidden": true
        }, this.getPTOptions("itemLink", processedItem, index)),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), this.getItemProp(processedItem, "icon")]
        }, this.getPTOptions("itemIcon", processedItem, index)),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", processedItem, index)),
        submenuicon: mergeProps({
          "class": this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", processedItem, index))
      };
    }
  },
  components: {
    ChevronRightIcon: script$6,
    ChevronDownIcon: script$2$1
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["tabindex"];
var _hoisted_2$1 = ["id", "aria-label", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-focused", "data-p-disabled"];
var _hoisted_3$1 = ["onClick", "onMousemove"];
var _hoisted_4$1 = ["href", "target"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PanelMenuSub = resolveComponent("PanelMenuSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", {
    "class": normalizeClass(_ctx.cx("submenu")),
    tabindex: $props.tabindex
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(processedItem, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getItemKey(processedItem)
    }, [$options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      id: $options.getItemId(processedItem),
      "class": [_ctx.cx("item", {
        processedItem
      }), $options.getItemProp(processedItem, "class")],
      style: $options.getItemProp(processedItem, "style"),
      role: "treeitem",
      "aria-label": $options.getItemLabel(processedItem),
      "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : void 0,
      "aria-level": $props.level + 1,
      "aria-setsize": $options.getAriaSetSize(),
      "aria-posinset": $options.getAriaPosInset(index),
      ref_for: true
    }, $options.getPTOptions("item", processedItem, index), {
      "data-p-focused": $options.isItemFocused(processedItem),
      "data-p-disabled": $options.isItemDisabled(processedItem)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("itemContent"),
      onClick: function onClick($event) {
        return $options.onItemClick($event, processedItem);
      },
      onMousemove: function onMousemove($event) {
        return $options.onItemMouseMove($event, processedItem);
      },
      ref_for: true
    }, $options.getPTOptions("itemContent", processedItem, index)), [!$props.templates.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      href: $options.getItemProp(processedItem, "url"),
      "class": _ctx.cx("itemLink"),
      target: $options.getItemProp(processedItem, "target"),
      tabindex: "-1",
      "aria-hidden": "true",
      ref_for: true
    }, $options.getPTOptions("itemLink", processedItem, index)), [$options.isItemGroup(processedItem) ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), mergeProps({
      key: 0,
      "class": _ctx.cx("submenuIcon"),
      active: $options.isItemActive(processedItem),
      ref_for: true
    }, $options.getPTOptions("submenuIcon", processedItem, index)), null, 16, ["class", "active"])) : (openBlock(), createBlock(resolveDynamicComponent($options.isItemActive(processedItem) ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({
      key: 1,
      "class": _ctx.cx("submenuIcon"),
      ref_for: true
    }, $options.getPTOptions("submenuIcon", processedItem, index)), null, 16, ["class"]))], 64)) : createCommentVNode("", true), $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
      key: 1,
      item: processedItem.item,
      "class": normalizeClass(_ctx.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("itemIcon"), $options.getItemProp(processedItem, "icon")],
      ref_for: true
    }, $options.getPTOptions("itemIcon", processedItem, index)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx("itemLabel"),
      ref_for: true
    }, $options.getPTOptions("itemLabel", processedItem, index)), toDisplayString($options.getItemLabel(processedItem)), 17)], 16, _hoisted_4$1)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
      key: 1,
      item: processedItem.item,
      root: false,
      active: $options.isItemActive(processedItem),
      hasSubmenu: $options.isItemGroup(processedItem),
      label: $options.getItemLabel(processedItem),
      props: $options.getMenuItemProps(processedItem, index)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"]))], 16, _hoisted_3$1), createVNode(Transition, mergeProps({
      name: "p-toggleable-content",
      ref_for: true
    }, _ctx.ptm("transition")), {
      "default": withCtx(function() {
        return [withDirectives(createElementVNode("div", mergeProps({
          "class": _ctx.cx("contentContainer"),
          ref_for: true
        }, _ctx.ptm("contentContainer")), [$options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_PanelMenuSub, mergeProps({
          key: 0,
          id: $options.getItemId(processedItem) + "_list",
          role: "group",
          panelId: $props.panelId,
          focusedItemId: $props.focusedItemId,
          items: processedItem.items,
          level: $props.level + 1,
          templates: $props.templates,
          activeItemPath: $props.activeItemPath,
          onItemToggle: $options.onItemToggle,
          onItemMousemove: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("item-mousemove", $event);
          }),
          pt: _ctx.pt,
          unstyled: _ctx.unstyled,
          ref_for: true
        }, _ctx.ptm("submenu")), null, 16, ["id", "panelId", "focusedItemId", "items", "level", "templates", "activeItemPath", "onItemToggle", "pt", "unstyled"])) : createCommentVNode("", true)], 16), [[vShow, $options.isItemActive(processedItem)]])];
      }),
      _: 2
    }, 1040)], 16, _hoisted_2$1)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 1,
      style: $options.getItemProp(processedItem, "style"),
      "class": [_ctx.cx("separator"), $options.getItemProp(processedItem, "class")],
      role: "separator",
      ref_for: true
    }, _ctx.ptm("separator")), null, 16)) : createCommentVNode("", true)], 64);
  }), 128))], 10, _hoisted_1$1);
}
script$2.render = render$2;
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l)
        ;
      else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r))
    return r;
}
var script$1 = {
  name: "PanelMenuList",
  hostName: "PanelMenu",
  "extends": script$5,
  emits: ["item-toggle", "header-focus"],
  props: {
    panelId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    templates: {
      type: Object,
      "default": null
    },
    expandedKeys: {
      type: Object,
      "default": null
    }
  },
  searchTimeout: null,
  searchValue: null,
  data: function data() {
    return {
      focused: false,
      focusedItem: null,
      activeItemPath: []
    };
  },
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.autoUpdateActiveItemPath(newValue);
    }
  },
  mounted: function mounted() {
    this.autoUpdateActiveItemPath(this.expandedKeys);
  },
  methods: {
    getItemProp: function getItemProp2(processedItem, name) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name]) : void 0;
    },
    getItemLabel: function getItemLabel2(processedItem) {
      return this.getItemProp(processedItem, "label");
    },
    isItemVisible: function isItemVisible2(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled2(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    },
    isItemActive: function isItemActive2(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.parentKey;
      });
    },
    isItemGroup: function isItemGroup2(processedItem) {
      return isNotEmpty(processedItem.items);
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.focusedItem = this.focusedItem || (this.isElementInPanel(event, event.relatedTarget) ? this.findFirstItem() : this.findLastItem());
    },
    onBlur: function onBlur() {
      this.focused = false;
      this.focusedItem = null;
      this.searchValue = "";
    },
    onKeyDown: function onKeyDown(event) {
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
        case "Tab":
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var processedItem = isNotEmpty(this.focusedItem) ? this.findNextItem(this.focusedItem) : this.findFirstItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        focusOnNext: true
      });
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var processedItem = isNotEmpty(this.focusedItem) ? this.findPrevItem(this.focusedItem) : this.findLastItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        selfCheck: true
      });
      event.preventDefault();
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var _this = this;
      if (isNotEmpty(this.focusedItem)) {
        var matched = this.activeItemPath.some(function(p) {
          return p.key === _this.focusedItem.key;
        });
        if (matched) {
          this.activeItemPath = this.activeItemPath.filter(function(p) {
            return p.key !== _this.focusedItem.key;
          });
        } else {
          this.focusedItem = isNotEmpty(this.focusedItem.parent) ? this.focusedItem.parent : this.focusedItem;
        }
        event.preventDefault();
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      var _this2 = this;
      if (isNotEmpty(this.focusedItem)) {
        var grouped = this.isItemGroup(this.focusedItem);
        if (grouped) {
          var matched = this.activeItemPath.some(function(p) {
            return p.key === _this2.focusedItem.key;
          });
          if (matched) {
            this.onArrowDownKey(event);
          } else {
            this.activeItemPath = this.activeItemPath.filter(function(p) {
              return p.parentKey !== _this2.focusedItem.parentKey;
            });
            this.activeItemPath.push(this.focusedItem);
          }
        }
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findFirstItem(),
        allowHeaderFocus: false
      });
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findLastItem(),
        focusOnNext: true,
        allowHeaderFocus: false
      });
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (isNotEmpty(this.focusedItem)) {
        var element = findSingle(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
        var anchorElement = element && (findSingle(element, '[data-pc-section="itemlink"]') || findSingle(element, "a,button"));
        anchorElement ? anchorElement.click() : element && element.click();
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onItemToggle: function onItemToggle2(event) {
      var processedItem = event.processedItem, expanded = event.expanded;
      if (this.expandedKeys) {
        this.$emit("item-toggle", {
          item: processedItem.item,
          expanded
        });
      } else {
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return p.parentKey !== processedItem.parentKey;
        });
        expanded && this.activeItemPath.push(processedItem);
      }
      this.focusedItem = processedItem;
      focus(this.$el);
    },
    onItemMouseMove: function onItemMouseMove2(event) {
      if (this.focused) {
        this.focusedItem = event.processedItem;
      }
    },
    isElementInPanel: function isElementInPanel(event, element) {
      var panel = event.currentTarget.closest('[data-pc-section="panel"]');
      return panel && panel.contains(element);
    },
    isItemMatched: function isItemMatched(processedItem) {
      var _this$getItemLabel;
      return this.isValidItem(processedItem) && ((_this$getItemLabel = this.getItemLabel(processedItem)) === null || _this$getItemLabel === void 0 ? void 0 : _this$getItemLabel.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)));
    },
    isVisibleItem: function isVisibleItem(processedItem) {
      return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
    },
    isValidItem: function isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem) && !this.getItemProp(processedItem, "separator");
    },
    findFirstItem: function findFirstItem() {
      var _this3 = this;
      return this.visibleItems.find(function(processedItem) {
        return _this3.isValidItem(processedItem);
      });
    },
    findLastItem: function findLastItem() {
      var _this4 = this;
      return findLast(this.visibleItems, function(processedItem) {
        return _this4.isValidItem(processedItem);
      });
    },
    findNextItem: function findNextItem(processedItem) {
      var _this5 = this;
      var index = this.visibleItems.findIndex(function(item2) {
        return item2.key === processedItem.key;
      });
      var matchedItem = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).find(function(pItem) {
        return _this5.isValidItem(pItem);
      }) : void 0;
      return matchedItem || processedItem;
    },
    findPrevItem: function findPrevItem(processedItem) {
      var _this6 = this;
      var index = this.visibleItems.findIndex(function(item2) {
        return item2.key === processedItem.key;
      });
      var matchedItem = index > 0 ? findLast(this.visibleItems.slice(0, index), function(pItem) {
        return _this6.isValidItem(pItem);
      }) : void 0;
      return matchedItem || processedItem;
    },
    searchItems: function searchItems(event, _char) {
      var _this7 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var matchedItem = null;
      var matched = false;
      if (isNotEmpty(this.focusedItem)) {
        var focusedItemIndex = this.visibleItems.findIndex(function(processedItem) {
          return processedItem.key === _this7.focusedItem.key;
        });
        matchedItem = this.visibleItems.slice(focusedItemIndex).find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        });
        matchedItem = isEmpty(matchedItem) ? this.visibleItems.slice(0, focusedItemIndex).find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        }) : matchedItem;
      } else {
        matchedItem = this.visibleItems.find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        });
      }
      if (isNotEmpty(matchedItem)) {
        matched = true;
      }
      if (isEmpty(matchedItem) && isEmpty(this.focusedItem)) {
        matchedItem = this.findFirstItem();
      }
      if (isNotEmpty(matchedItem)) {
        this.changeFocusedItem({
          originalEvent: event,
          processedItem: matchedItem,
          allowHeaderFocus: false
        });
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this7.searchValue = "";
        _this7.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedItem: function changeFocusedItem(event) {
      var originalEvent = event.originalEvent, processedItem = event.processedItem, focusOnNext = event.focusOnNext, selfCheck = event.selfCheck, _event$allowHeaderFoc = event.allowHeaderFocus, allowHeaderFocus = _event$allowHeaderFoc === void 0 ? true : _event$allowHeaderFoc;
      if (isNotEmpty(this.focusedItem) && this.focusedItem.key !== processedItem.key) {
        this.focusedItem = processedItem;
        this.scrollInView();
      } else if (allowHeaderFocus) {
        this.$emit("header-focus", {
          originalEvent,
          focusOnNext,
          selfCheck
        });
      }
    },
    scrollInView: function scrollInView() {
      var element = findSingle(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      }
    },
    autoUpdateActiveItemPath: function autoUpdateActiveItemPath(expandedKeys2) {
      var _this8 = this;
      this.activeItemPath = Object.entries(expandedKeys2 || {}).reduce(function(acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], val = _ref2[1];
        if (val) {
          var processedItem = _this8.findProcessedItemByItemKey(key);
          processedItem && acc.push(processedItem);
        }
        return acc;
      }, []);
    },
    findProcessedItemByItemKey: function findProcessedItemByItemKey(key, processedItems2) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      processedItems2 = processedItems2 || level === 0 && this.processedItems;
      if (!processedItems2)
        return null;
      for (var i = 0; i < processedItems2.length; i++) {
        var processedItem = processedItems2[i];
        if (this.getItemProp(processedItem, "key") === key)
          return processedItem;
        var matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
        if (matchedItem)
          return matchedItem;
      }
    },
    createProcessedItems: function createProcessedItems(items) {
      var _this9 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var processedItems2 = [];
      items && items.forEach(function(item2, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + index;
        var newItem = {
          item: item2,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem["items"] = _this9.createProcessedItems(item2.items, level + 1, newItem, key);
        processedItems2.push(newItem);
      });
      return processedItems2;
    },
    flatItems: function flatItems(processedItems2) {
      var _this10 = this;
      var processedFlattenItems = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      processedItems2 && processedItems2.forEach(function(processedItem) {
        if (_this10.isVisibleItem(processedItem)) {
          processedFlattenItems.push(processedItem);
          _this10.flatItems(processedItem.items, processedFlattenItems);
        }
      });
      return processedFlattenItems;
    }
  },
  computed: {
    processedItems: function processedItems() {
      return this.createProcessedItems(this.items || []);
    },
    visibleItems: function visibleItems() {
      return this.flatItems(this.processedItems);
    },
    focusedItemId: function focusedItemId() {
      return isNotEmpty(this.focusedItem) ? "".concat(this.panelId, "_").concat(this.focusedItem.key) : null;
    }
  },
  components: {
    PanelMenuSub: script$2
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PanelMenuSub = resolveComponent("PanelMenuSub");
  return openBlock(), createBlock(_component_PanelMenuSub, mergeProps({
    id: $props.panelId + "_list",
    "class": _ctx.cx("rootList"),
    role: "tree",
    tabindex: -1,
    "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
    panelId: $props.panelId,
    focusedItemId: $data.focused ? $options.focusedItemId : void 0,
    items: $options.processedItems,
    templates: $props.templates,
    activeItemPath: $data.activeItemPath,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onItemToggle: $options.onItemToggle,
    onItemMousemove: $options.onItemMouseMove,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, _ctx.ptm("rootList")), null, 16, ["id", "class", "aria-activedescendant", "panelId", "focusedItemId", "items", "templates", "activeItemPath", "onFocus", "onBlur", "onKeydown", "onItemToggle", "onItemMousemove", "pt", "unstyled"]);
}
script$1.render = render$1;
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script = {
  name: "PanelMenu",
  "extends": script$3,
  inheritAttrs: false,
  emits: ["update:expandedKeys", "panel-open", "panel-close"],
  data: function data2() {
    return {
      id: this.$attrs.id,
      activeItem: null,
      activeItems: []
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  mounted: function mounted2() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    getItemProp: function getItemProp3(item2, name) {
      return item2 ? resolve(item2[name]) : void 0;
    },
    getItemLabel: function getItemLabel3(item2) {
      return this.getItemProp(item2, "label");
    },
    getPTOptions: function getPTOptions2(key, item2, index) {
      return this.ptm(key, {
        context: {
          index,
          active: this.isItemActive(item2),
          focused: this.isItemFocused(item2),
          disabled: this.isItemDisabled(item2)
        }
      });
    },
    isItemActive: function isItemActive3(item2) {
      return this.expandedKeys ? this.expandedKeys[this.getItemProp(item2, "key")] : this.multiple ? this.activeItems.some(function(subItem) {
        return equals(item2, subItem);
      }) : equals(item2, this.activeItem);
    },
    isItemVisible: function isItemVisible3(item2) {
      return this.getItemProp(item2, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled3(item2) {
      return this.getItemProp(item2, "disabled");
    },
    isItemFocused: function isItemFocused2(item2) {
      return equals(item2, this.activeItem);
    },
    getPanelId: function getPanelId(index) {
      return "".concat(this.id, "_").concat(index);
    },
    getPanelKey: function getPanelKey(index) {
      return this.getPanelId(index);
    },
    getHeaderId: function getHeaderId(index) {
      return "".concat(this.getPanelId(index), "_header");
    },
    getContentId: function getContentId(index) {
      return "".concat(this.getPanelId(index), "_content");
    },
    onHeaderClick: function onHeaderClick(event, item2) {
      if (this.isItemDisabled(item2)) {
        event.preventDefault();
        return;
      }
      if (item2.command) {
        item2.command({
          originalEvent: event,
          item: item2
        });
      }
      this.changeActiveItem(event, item2);
      focus(event.currentTarget);
    },
    onHeaderKeyDown: function onHeaderKeyDown(event, item2) {
      switch (event.code) {
        case "ArrowDown":
          this.onHeaderArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onHeaderArrowUpKey(event);
          break;
        case "Home":
          this.onHeaderHomeKey(event);
          break;
        case "End":
          this.onHeaderEndKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onHeaderEnterKey(event, item2);
          break;
      }
    },
    onHeaderArrowDownKey: function onHeaderArrowDownKey(event) {
      var rootList = getAttribute(event.currentTarget, "data-p-active") === true ? findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      rootList ? focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: true
      });
      event.preventDefault();
    },
    onHeaderArrowUpKey: function onHeaderArrowUpKey(event) {
      var prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
      var rootList = getAttribute(prevHeader, "data-p-active") === true ? findSingle(prevHeader.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      rootList ? focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: false
      });
      event.preventDefault();
    },
    onHeaderHomeKey: function onHeaderHomeKey(event) {
      this.changeFocusedHeader(event, this.findFirstHeader());
      event.preventDefault();
    },
    onHeaderEndKey: function onHeaderEndKey(event) {
      this.changeFocusedHeader(event, this.findLastHeader());
      event.preventDefault();
    },
    onHeaderEnterKey: function onHeaderEnterKey(event, item2) {
      var headerAction = findSingle(event.currentTarget, '[data-pc-section="headerlink"]');
      headerAction ? headerAction.click() : this.onHeaderClick(event, item2);
      event.preventDefault();
    },
    findNextHeader: function findNextHeader(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
      var headerElement = findSingle(nextPanelElement, '[data-pc-section="header"]');
      return headerElement ? getAttribute(headerElement, "data-p-disabled") ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
    },
    findPrevHeader: function findPrevHeader(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
      var headerElement = findSingle(prevPanelElement, '[data-pc-section="header"]');
      return headerElement ? getAttribute(headerElement, "data-p-disabled") ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
    },
    findFirstHeader: function findFirstHeader() {
      return this.findNextHeader(this.$el.firstElementChild, true);
    },
    findLastHeader: function findLastHeader() {
      return this.findPrevHeader(this.$el.lastElementChild, true);
    },
    updateFocusedHeader: function updateFocusedHeader(event) {
      var originalEvent = event.originalEvent, focusOnNext = event.focusOnNext, selfCheck = event.selfCheck;
      var panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
      var header2 = selfCheck ? findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
      header2 ? this.changeFocusedHeader(originalEvent, header2) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
    },
    changeActiveItem: function changeActiveItem(event, item2) {
      var selfActive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (!this.isItemDisabled(item2)) {
        var active = this.isItemActive(item2);
        var eventName = !active ? "panel-open" : "panel-close";
        this.activeItem = selfActive ? item2 : this.activeItem && equals(item2, this.activeItem) ? null : item2;
        if (this.multiple) {
          if (this.activeItems.some(function(subItem) {
            return equals(item2, subItem);
          })) {
            this.activeItems = this.activeItems.filter(function(subItem) {
              return !equals(item2, subItem);
            });
          } else {
            this.activeItems.push(item2);
          }
        }
        this.changeExpandedKeys({
          item: item2,
          expanded: !active
        });
        this.$emit(eventName, {
          originalEvent: event,
          item: item2
        });
      }
    },
    changeExpandedKeys: function changeExpandedKeys(_ref) {
      var item2 = _ref.item, _ref$expanded = _ref.expanded, expanded = _ref$expanded === void 0 ? false : _ref$expanded;
      if (this.expandedKeys) {
        var _keys = _objectSpread({}, this.expandedKeys);
        if (expanded)
          _keys[item2.key] = true;
        else
          delete _keys[item2.key];
        this.$emit("update:expandedKeys", _keys);
      }
    },
    changeFocusedHeader: function changeFocusedHeader(event, element) {
      element && focus(element);
    },
    getMenuItemProps: function getMenuItemProps2(item2, index) {
      return {
        icon: mergeProps({
          "class": [this.cx("headerIcon"), this.getItemProp(item2, "icon")]
        }, this.getPTOptions("headerIcon", item2, index)),
        label: mergeProps({
          "class": this.cx("headerLabel")
        }, this.getPTOptions("headerLabel", item2, index))
      };
    }
  },
  components: {
    PanelMenuList: script$1,
    ChevronRightIcon: script$6,
    ChevronDownIcon: script$2$1
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "tabindex", "aria-label", "aria-expanded", "aria-controls", "aria-disabled", "onClick", "onKeydown", "data-p-active", "data-p-disabled"];
var _hoisted_3 = ["href"];
var _hoisted_4 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PanelMenuList = resolveComponent("PanelMenuList");
  return openBlock(), createElementBlock("div", mergeProps({
    id: $data.id,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item2, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getPanelKey(index)
    }, [$options.isItemVisible(item2) ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      style: $options.getItemProp(item2, "style"),
      "class": [_ctx.cx("panel"), $options.getItemProp(item2, "class")],
      ref_for: true
    }, _ctx.ptm("panel")), [createElementVNode("div", mergeProps({
      id: $options.getHeaderId(index),
      "class": [_ctx.cx("header", {
        item: item2
      }), $options.getItemProp(item2, "headerClass")],
      tabindex: $options.isItemDisabled(item2) ? -1 : _ctx.tabindex,
      role: "button",
      "aria-label": $options.getItemLabel(item2),
      "aria-expanded": $options.isItemActive(item2),
      "aria-controls": $options.getContentId(index),
      "aria-disabled": $options.isItemDisabled(item2),
      onClick: function onClick($event) {
        return $options.onHeaderClick($event, item2);
      },
      onKeydown: function onKeydown($event) {
        return $options.onHeaderKeyDown($event, item2);
      },
      ref_for: true
    }, $options.getPTOptions("header", item2, index), {
      "data-p-active": $options.isItemActive(item2),
      "data-p-disabled": $options.isItemDisabled(item2)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("headerContent"),
      ref_for: true
    }, $options.getPTOptions("headerContent", item2, index)), [!_ctx.$slots.item ? (openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      href: $options.getItemProp(item2, "url"),
      "class": _ctx.cx("headerLink"),
      tabindex: -1,
      ref_for: true
    }, $options.getPTOptions("headerLink", item2, index)), [$options.getItemProp(item2, "items") ? renderSlot(_ctx.$slots, "submenuicon", {
      key: 0,
      active: $options.isItemActive(item2)
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent($options.isItemActive(item2) ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({
        "class": _ctx.cx("submenuIcon"),
        ref_for: true
      }, $options.getPTOptions("submenuIcon", item2, index)), null, 16, ["class"]))];
    }) : createCommentVNode("", true), _ctx.$slots.headericon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.headericon), {
      key: 1,
      item: item2,
      "class": normalizeClass([_ctx.cx("headerIcon"), $options.getItemProp(item2, "icon")])
    }, null, 8, ["item", "class"])) : $options.getItemProp(item2, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("headerIcon"), $options.getItemProp(item2, "icon")],
      ref_for: true
    }, $options.getPTOptions("headerIcon", item2, index)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx("headerLabel"),
      ref_for: true
    }, $options.getPTOptions("headerLabel", item2, index)), toDisplayString($options.getItemLabel(item2)), 17)], 16, _hoisted_3)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item: item2,
      root: true,
      active: $options.isItemActive(item2),
      hasSubmenu: $options.getItemProp(item2, "items"),
      label: $options.getItemLabel(item2),
      props: $options.getMenuItemProps(item2, index)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"]))], 16)], 16, _hoisted_2), createVNode(Transition, mergeProps({
      name: "p-toggleable-content",
      ref_for: true
    }, _ctx.ptm("transition")), {
      "default": withCtx(function() {
        return [withDirectives(createElementVNode("div", mergeProps({
          id: $options.getContentId(index),
          "class": _ctx.cx("contentContainer"),
          role: "region",
          "aria-labelledby": $options.getHeaderId(index),
          ref_for: true
        }, _ctx.ptm("contentContainer")), [$options.getItemProp(item2, "items") ? (openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          "class": _ctx.cx("content"),
          ref_for: true
        }, _ctx.ptm("content")), [createVNode(_component_PanelMenuList, {
          panelId: $options.getPanelId(index),
          items: $options.getItemProp(item2, "items"),
          templates: _ctx.$slots,
          expandedKeys: _ctx.expandedKeys,
          onItemToggle: $options.changeExpandedKeys,
          onHeaderFocus: $options.updateFocusedHeader,
          pt: _ctx.pt,
          unstyled: _ctx.unstyled
        }, null, 8, ["panelId", "items", "templates", "expandedKeys", "onItemToggle", "onHeaderFocus", "pt", "unstyled"])], 16)) : createCommentVNode("", true)], 16, _hoisted_4), [[vShow, $options.isItemActive(item2)]])];
      }),
      _: 2
    }, 1040)], 16)) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1);
}
script.render = render;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { apiBase, api }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const route = useRoute$1();
    let AllCategories = ref();
    ref();
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
        "$Q0e4eqbBnn"
      )), __temp = await __temp, __restore();
      [__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetSubCat}`, {
        baseURL: apiBase,
        credentials: "include",
        headers: {
          "accept-language": "ar"
        }
      }, "$qyJx6hcQ2o")), __temp = await __temp, __restore();
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
        "$l0lXEPOHhG"
      )), __temp = await __temp, __restore();
      [__temp, __restore] = withAsyncContext(() => useFetch(`${api.GetSubCat}`, {
        baseURL: apiBase,
        credentials: "include",
        headers: {
          "accept-language": "en"
        }
      }, "$Wvtu7HlFpl")), __temp = await __temp, __restore();
      watchEffect(() => {
      });
    }
    let loading = ref(false);
    const selectedId = ref(route.params.id);
    const getMainCat = (parentId) => {
      const category = AllCategories.value.filter((cat) => cat.id === parentId);
      return locale.value === "ar" ? category[0].arabicName : category[0].englishName;
    };
    let Products = ref([]);
    const getProducts = async () => {
      loading.value = true;
      const { data: ProductsByCat, pending } = await useFetch(
        `${api.GetPlantByCat}/${selectedId.value}`,
        {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            Authorization: `Bearer ${useMainToken().value}`,
            "accept-language": locale.value === "ar" ? "ar" : "en"
          }
        },
        "$g83FP2qWrH"
      );
      Products.value = ProductsByCat.value;
      loading.value = false;
    };
    getProducts();
    let AllCats = ref([]);
    watchEffect(() => {
    });
    const searchText = ref("Default sorting");
    const options = ref([
      { label: "A To Z", value: "1" },
      { label: "Z To A", value: "2" },
      { label: "Max Price", value: "3" },
      { label: "Min Price", value: "4" }
    ]);
    const filteredProducts = computed(() => {
      if (searchText.value == 1) {
        return Products.value.sort(
          (a, b) => b.plant_name > a.plant_name ? -1 : a.plant_name == b.plant_name ? 0 : 1
        );
      }
      if (searchText.value == 2) {
        return Products.value.sort(
          (a, b) => b.plant_name > a.plant_name ? 1 : a.plant_name == b.plant_name ? 0 : -1
        );
      }
      if (searchText.value == 3) {
        return Products.value.sort((a, b) => b.price - a.price);
      }
      if (searchText.value == 4) {
        return Products.value.sort((a, b) => a.price - b.price);
      } else {
        return Products.value;
      }
    });
    const setselectedId = async (item2, hasSubmenu) => {
      loading.value = true;
      selectedId.value = item2.id;
      if (!item2.category_id) {
        const { data: ProductsByCat, pending } = await useFetch(
          `${api.GetPlantByCat}/${selectedId.value}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              Authorization: `Bearer ${useMainToken().value}`,
              "accept-language": locale.value === "ar" ? "ar" : "en"
            }
          },
          "$xIcoLomE8n"
        );
        Products.value = ProductsByCat.value;
        loading.value = false;
      } else {
        const { data: ProductsByCat, pending } = await useFetch(
          `${api.GetPlantsBySubCat}/${selectedId.value}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              Authorization: `Bearer ${useMainToken().value}`,
              "accept-language": locale.value === "ar" ? "ar" : "en"
            }
          },
          "$0lurRT5qlH"
        );
        Products.value = ProductsByCat.value;
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_font_awesome = _sfc_main$1;
      const _component_PanelMenu = script;
      const _component_ElementsSpinner = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_2;
      const _component_Select = script$4;
      const _component_ProductCard2 = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "Products" }, _attrs))} data-v-c12d88ea><div class="" data-v-c12d88ea><div class="row" data-v-c12d88ea><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "ar" : "", "col-lg-2"])}" data-v-c12d88ea><div class="wrapper" data-v-c12d88ea><h2 data-v-c12d88ea><span data-v-c12d88ea>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0641\u0626\u0627\u062A" : "Categories")} `);
      _push(ssrRenderComponent(_component_font_awesome, {
        style: { "transform": "rotate(90deg)" },
        icon: ["fas", "sliders"]
      }, null, _parent));
      _push(`</span></h2><div class="allfilter mt-8" data-v-c12d88ea>`);
      _push(ssrRenderComponent(_component_PanelMenu, {
        model: unref(AllCats),
        class: "w-full md:w-80",
        onPanelOpen: _ctx.OpenSubCat
      }, {
        item: withCtx(({ item: item2, hasSubmenu }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="filterbox pointer d-flex justify-content-between" data-v-c12d88ea${_scopeId}><span class="${ssrRenderClass([unref(selectedId) == item2.id ? "active" : "", "cat"])}" data-v-c12d88ea${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale == "en" ? item2.category_name : item2.category_name)}</span>`);
            if (hasSubmenu) {
              _push2(`<span class="drop-down" data-v-c12d88ea${_scopeId}><span data-v-c12d88ea${_scopeId}>&gt;</span></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "filterbox pointer d-flex justify-content-between" }, [
                createVNode("span", {
                  class: ["cat", unref(selectedId) == item2.id ? "active" : ""],
                  onClick: ($event) => setselectedId(item2)
                }, toDisplayString(_ctx.$i18n.locale == "en" ? item2.category_name : item2.category_name), 11, ["onClick"]),
                hasSubmenu ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "drop-down"
                }, [
                  createVNode("span", null, ">")
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      if (unref(loading) || _ctx.pending) {
        _push(`<div class="col-lg-10 loader" data-v-c12d88ea>`);
        _push(ssrRenderComponent(_component_ElementsSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="col-lg-10" data-v-c12d88ea><div class="links" data-v-c12d88ea>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Home"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Home")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` / ${ssrInterpolate(_ctx.$t("Products"))} `);
        if ((_a = _ctx.Categories) == null ? void 0 : _a.parentCategoryId) {
          _push(`<span data-v-c12d88ea> / ${ssrInterpolate(getMainCat(_ctx.Categories.parentCategoryId))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` / <span data-v-c12d88ea>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? (_b = _ctx.Categories) == null ? void 0 : _b.category_name : (_c = _ctx.Categories) == null ? void 0 : _c.category_name)}</span></div><div class="title" data-v-c12d88ea><h1 class="d-flex align-items-center" data-v-c12d88ea><span class="underline" data-v-c12d88ea>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? (_d = _ctx.Categories) == null ? void 0 : _d.category_name : (_e = _ctx.Categories) == null ? void 0 : _e.category_name)}</span></h1></div><div class="d-flex justify-content-start align-items-end mb-10" data-v-c12d88ea><div class="d-flex mt-5 justify-content-start align-items-center top" style="${ssrRenderStyle({ "flex-wrap": "wrap", "gap": "10px" })}" data-v-c12d88ea><div class="select" data-v-c12d88ea>`);
        _push(ssrRenderComponent(_component_Select, {
          modelValue: unref(searchText),
          "onUpdate:modelValue": ($event) => isRef(searchText) ? searchText.value = $event : null,
          options: unref(options),
          optionValue: "value",
          optionLabel: "label",
          placeholder: _ctx.$i18n.locale == "ar" ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A" : "Default Sorting"
        }, null, _parent));
        _push(`</div></div></div><div class="grid3" data-v-c12d88ea><!--[-->`);
        ssrRenderList(unref(filteredProducts), (product) => {
          _push(`<div class="product" data-aos="fade-up" data-v-c12d88ea><div data-v-c12d88ea>`);
          _push(ssrRenderComponent(_component_ProductCard2, { product }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><h1 style="${ssrRenderStyle([
          ((_g = (_f = unref(Products)) == null ? void 0 : _f.items) == null ? void 0 : _g.length) === 0 && !_ctx.pending && !unref(loading) ? null : { display: "none" },
          { "color": "#333" }
        ])}" class="text-center my-10 py-10" data-v-c12d88ea>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "\u0646\u0639\u062A\u0630\u0631 \u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A" : "Sorry No Items")}</h1></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c12d88ea"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CBR4cFr_.mjs.map
