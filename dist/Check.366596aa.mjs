import { defineComponent, openBlock, createElementBlock, createElementVNode } from "vue";
import { C as Colors } from "./index.199799f9.mjs";
const _hoisted_1 = {
  key: 0,
  width: "30",
  height: "30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("mask", {
  id: "a",
  width: "30",
  height: "30",
  x: "0",
  y: "0",
  maskUnits: "userSpaceOnUse",
  style: { "mask-type": "alpha" }
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
  width: "24",
  height: "24",
  x: "0",
  y: "0",
  maskUnits: "userSpaceOnUse",
  style: { "mask-type": "alpha" }
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
  width: "20",
  height: "20",
  x: "0",
  y: "0",
  maskUnits: "userSpaceOnUse",
  style: { "mask-type": "alpha" }
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "#D9D9D9",
    d: "M0 0h24v24H0z"
  })
], -1);
const _hoisted_11 = { mask: "url(#a)" };
const _hoisted_12 = ["fill"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Check",
  props: {
    size: { default: "medium" },
    color: { default: Colors.main }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.size === "big" ? (openBlock(), createElementBlock("svg", _hoisted_1, [
        _hoisted_2,
        createElementVNode("g", _hoisted_3, [
          createElementVNode("path", {
            fill: __props.color,
            d: "m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
          }, null, 8, _hoisted_4)
        ])
      ])) : __props.size === "medium" ? (openBlock(), createElementBlock("svg", _hoisted_5, [
        _hoisted_6,
        createElementVNode("g", _hoisted_7, [
          createElementVNode("path", {
            fill: __props.color,
            d: "m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
          }, null, 8, _hoisted_8)
        ])
      ])) : (openBlock(), createElementBlock("svg", _hoisted_9, [
        _hoisted_10,
        createElementVNode("g", _hoisted_11, [
          createElementVNode("path", {
            fill: __props.color,
            d: "m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
          }, null, 8, _hoisted_12)
        ])
      ]));
    };
  }
});
export {
  _sfc_main as default
};
