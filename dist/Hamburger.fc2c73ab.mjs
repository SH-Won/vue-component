import { defineComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode } from "vue";
import { c as colorValidator } from "./index.e309f9ca.mjs";
const _hoisted_1 = {
  key: 0,
  width: "30",
  height: "30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("mask", {
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
const _hoisted_3 = { mask: "url(#a)" };
const _hoisted_4 = ["fill"];
const _hoisted_5 = {
  key: 1,
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_6 = /* @__PURE__ */ createElementVNode("mask", {
  id: "a",
  style: { "mask-type": "alpha" },
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "24",
  height: "24"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "#D9D9D9",
    d: "M0 0h24v24H0z"
  })
], -1);
const _hoisted_7 = { mask: "url(#a)" };
const _hoisted_8 = ["fill"];
const _hoisted_9 = {
  key: 2,
  width: "20",
  height: "20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_10 = /* @__PURE__ */ createElementVNode("mask", {
  id: "a",
  style: { "mask-type": "alpha" },
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "20",
  height: "20"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "#D9D9D9",
    d: "M0 0h20v20H0z"
  })
], -1);
const _hoisted_11 = { mask: "url(#a)" };
const _hoisted_12 = ["fill"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hamburger",
  props: {
    size: {
      type: String,
      default: "big",
      validator: (value) => {
        return ["big", "medium", "small"].indexOf(value) !== -1;
      }
    },
    color: {
      type: String,
      validator: colorValidator,
      default: "#111"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.size === "big" ? (openBlock(), createElementBlock("svg", _hoisted_1, [
        _hoisted_2,
        createElementVNode("g", _hoisted_3, [
          createElementVNode("path", {
            d: "M6 20.25v-1.5h17.5v1.5H6Zm0-4.88v-1.5h17.5v1.5H6Zm0-4.87V9h17.5v1.5H6Z",
            fill: __props.color
          }, null, 8, _hoisted_4)
        ])
      ])) : __props.size === "medium" ? (openBlock(), createElementBlock("svg", _hoisted_5, [
        _hoisted_6,
        createElementVNode("g", _hoisted_7, [
          createElementVNode("path", {
            d: "M3.25 17.63v-1.5h17.5v1.5H3.25Zm0-4.88v-1.5h17.5v1.5H3.25Zm0-4.88v-1.5h17.5v1.5H3.25Z",
            fill: __props.color
          }, null, 8, _hoisted_8)
        ])
      ])) : __props.size === "small" ? (openBlock(), createElementBlock("svg", _hoisted_9, [
        _hoisted_10,
        createElementVNode("g", _hoisted_11, [
          createElementVNode("path", {
            d: "M3.2 14.19V13.1h13.6v1.09H3.2Zm0-3.65V9.46h13.6v1.08H3.2Zm0-3.64V5.8h13.6V6.9H3.2Z",
            fill: __props.color
          }, null, 8, _hoisted_12)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
