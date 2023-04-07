import { defineComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode } from "vue";
import { c as colorValidator } from "./index.b74707c9.mjs";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("mask", {
  id: "a",
  style: { "mask-type": "alpha" },
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "30",
  height: "30"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "#D9D9D9",
    d: "M0 0h30v30H0z"
  })
], -1);
const _hoisted_2 = { mask: "url(#a)" };
const _hoisted_3 = ["fill"];
const _hoisted_4 = /* @__PURE__ */ createElementVNode("mask", {
  id: "a",
  style: { "mask-type": "alpha" },
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "30",
  height: "30"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "#D9D9D9",
    d: "M0 0h30v30H0z"
  })
], -1);
const _hoisted_5 = { mask: "url(#a)" };
const _hoisted_6 = ["fill"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("mask", {
  id: "a",
  style: { "mask-type": "alpha" },
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "30",
  height: "30"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "#D9D9D9",
    d: "M0 0h30v30H0z"
  })
], -1);
const _hoisted_8 = { mask: "url(#a)" };
const _hoisted_9 = ["fill"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArrowLeft",
  props: {
    color: {
      type: String,
      default: "#111",
      validator: colorValidator
    },
    size: {
      type: String,
      default: "big",
      validator: (value) => {
        return ["big", "medium", "small"].indexOf(value) !== -1;
      }
    }
  },
  emits: ["custom:close"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      return __props.size === "big" ? (openBlock(), createElementBlock("svg", {
        key: 0,
        width: "30",
        height: "30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: _cache[0] || (_cache[0] = ($event) => emits("custom:close"))
      }, [
        _hoisted_1,
        createElementVNode("g", _hoisted_2, [
          createElementVNode("path", {
            d: "M15 23.53 6.47 15 15 6.47l1.16 1.19-6.57 6.53h13.94v1.62H9.6l6.57 6.53-1.16 1.2Z",
            fill: __props.color
          }, null, 8, _hoisted_3)
        ])
      ])) : __props.size === "medium" ? (openBlock(), createElementBlock("svg", {
        key: 1,
        width: "30",
        height: "30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: _cache[1] || (_cache[1] = ($event) => emits("custom:close"))
      }, [
        _hoisted_4,
        createElementVNode("g", _hoisted_5, [
          createElementVNode("path", {
            d: "M15 23.53 6.47 15 15 6.47l1.16 1.19-6.57 6.53h13.94v1.62H9.6l6.57 6.53-1.16 1.2Z",
            fill: __props.color
          }, null, 8, _hoisted_6)
        ])
      ])) : __props.size === "small" ? (openBlock(), createElementBlock("svg", {
        key: 2,
        width: "30",
        height: "30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: _cache[2] || (_cache[2] = ($event) => emits("custom:close"))
      }, [
        _hoisted_7,
        createElementVNode("g", _hoisted_8, [
          createElementVNode("path", {
            d: "M15 23.53 6.47 15 15 6.47l1.16 1.19-6.57 6.53h13.94v1.62H9.6l6.57 6.53-1.16 1.2Z",
            fill: __props.color
          }, null, 8, _hoisted_9)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
