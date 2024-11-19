import { s as script$3 } from './index-DvJXdbWX.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode } from 'vue';
import { isEmpty } from '@primeuix/utils/object';
import { s as script$4 } from './index-BmTln-ia.mjs';
import { B as BaseStyle } from './server.mjs';

var script$2 = {
  name: "ChevronDownIcon",
  "extends": script$3
};
var _hoisted_1$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2 = [_hoisted_1$1];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2, 16);
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputtext {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: ".concat(dt("inputtext.color"), ";\n    background: ").concat(dt("inputtext.background"), ";\n    padding: ").concat(dt("inputtext.padding.y"), " ").concat(dt("inputtext.padding.x"), ";\n    border: 1px solid ").concat(dt("inputtext.border.color"), ";\n    transition: background ").concat(dt("inputtext.transition.duration"), ", color ").concat(dt("inputtext.transition.duration"), ", border-color ").concat(dt("inputtext.transition.duration"), ", outline-color ").concat(dt("inputtext.transition.duration"), ", box-shadow ").concat(dt("inputtext.transition.duration"), ";\n    appearance: none;\n    border-radius: ").concat(dt("inputtext.border.radius"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("inputtext.shadow"), ";\n}\n\n.p-inputtext:enabled:hover {\n    border-color: ").concat(dt("inputtext.hover.border.color"), ";\n}\n\n.p-inputtext:enabled:focus {\n    border-color: ").concat(dt("inputtext.focus.border.color"), ";\n    box-shadow: ").concat(dt("inputtext.focus.ring.shadow"), ";\n    outline: ").concat(dt("inputtext.focus.ring.width"), " ").concat(dt("inputtext.focus.ring.style"), " ").concat(dt("inputtext.focus.ring.color"), ";\n    outline-offset: ").concat(dt("inputtext.focus.ring.offset"), ";\n}\n\n.p-inputtext.p-invalid {\n    border-color: ").concat(dt("inputtext.invalid.border.color"), ";\n}\n\n.p-inputtext.p-variant-filled {\n    background: ").concat(dt("inputtext.filled.background"), ";\n}\n\n.p-inputtext.p-variant-filled:enabled:focus {\n    background: ").concat(dt("inputtext.filled.focus.background"), ";\n}\n\n.p-inputtext:disabled {\n    opacity: 1;\n    background: ").concat(dt("inputtext.disabled.background"), ";\n    color: ").concat(dt("inputtext.disabled.color"), ";\n}\n\n.p-inputtext::placeholder {\n    color: ").concat(dt("inputtext.placeholder.color"), ";\n}\n\n.p-inputtext-sm {\n    font-size: ").concat(dt("inputtext.sm.font.size"), ";\n    padding: ").concat(dt("inputtext.sm.padding.y"), " ").concat(dt("inputtext.sm.padding.x"), ";\n}\n\n.p-inputtext-lg {\n    font-size: ").concat(dt("inputtext.lg.font.size"), ";\n    padding: ").concat(dt("inputtext.lg.padding.y"), " ").concat(dt("inputtext.lg.padding.x"), ";\n}\n\n.p-inputtext-fluid {\n    width: 100%;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-inputtext p-component", {
      "p-filled": instance.filled,
      "p-inputtext-sm": props.size === "small",
      "p-inputtext-lg": props.size === "large",
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : instance.$primevue.config.inputStyle === "filled" || instance.$primevue.config.inputVariant === "filled",
      "p-inputtext-fluid": instance.hasFluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: "inputtext",
  theme,
  classes
});
var script$1 = {
  name: "BaseInputText",
  "extends": script$4,
  props: {
    modelValue: null,
    size: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    variant: {
      type: String,
      "default": null
    },
    fluid: {
      type: Boolean,
      "default": null
    }
  },
  style: InputTextStyle,
  provide: function provide() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputText",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          filled: this.filled,
          disabled: this.$attrs.disabled || this.$attrs.disabled === ""
        }
      });
    },
    onInput: function onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
  computed: {
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  }
};
var _hoisted_1 = ["value", "aria-invalid"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    "class": _ctx.cx("root"),
    value: _ctx.modelValue,
    "aria-invalid": _ctx.invalid || void 0,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.getPTOptions("root")), null, 16, _hoisted_1);
}
script.render = render;

export { script$2 as a, script as s };
//# sourceMappingURL=index-DvokLXLf.mjs.map
