import { defineComponent, openBlock, createElementBlock, createElementVNode } from "vue";
import { C as Colors } from "./index.b74707c9.mjs";
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
    d: "M0 0h24v24H0z"
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
  __name: "Right",
  props: {
    size: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: Colors.grey_666
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.size === "big" ? (openBlock(), createElementBlock("svg", _hoisted_1, [
        _hoisted_2,
        createElementVNode("g", _hoisted_3, [
          createElementVNode("path", {
            d: "M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z",
            fill: __props.color
          }, null, 8, _hoisted_4)
        ])
      ])) : __props.size === "medium" ? (openBlock(), createElementBlock("svg", _hoisted_5, [
        _hoisted_6,
        createElementVNode("g", _hoisted_7, [
          createElementVNode("path", {
            d: "M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z",
            fill: __props.color
          }, null, 8, _hoisted_8)
        ])
      ])) : (openBlock(), createElementBlock("svg", _hoisted_9, [
        _hoisted_10,
        createElementVNode("g", _hoisted_11, [
          createElementVNode("path", {
            d: "m8 14.7-.77-.76L11.17 10 7.23 6.06 8 5.3 12.7 10 8 14.7Z",
            fill: __props.color
          }, null, 8, _hoisted_12)
        ])
      ]));
    };
  }
});
export {
  _sfc_main as default
};
