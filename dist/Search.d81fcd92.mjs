import { defineComponent, openBlock, createElementBlock, createElementVNode } from "vue";
const _hoisted_1 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000",
  width: "30px",
  height: "30px",
  viewBox: "0 0 32 32",
  version: "1.1"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("title", null, "search", -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", { d: "M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000",
  width: "24px",
  height: "24px",
  viewBox: "0 0 32 32",
  version: "1.1"
};
const _hoisted_6 = /* @__PURE__ */ createElementVNode("title", null, "search", -1);
const _hoisted_7 = /* @__PURE__ */ createElementVNode("path", { d: "M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" }, null, -1);
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000",
  width: "20px",
  height: "20px",
  viewBox: "0 0 32 32",
  version: "1.1"
};
const _hoisted_10 = /* @__PURE__ */ createElementVNode("title", null, "search", -1);
const _hoisted_11 = /* @__PURE__ */ createElementVNode("path", { d: "M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" }, null, -1);
const _hoisted_12 = [
  _hoisted_10,
  _hoisted_11
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Search",
  props: {
    size: {
      type: String,
      default: "medium"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.size === "big" ? (openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4)) : __props.size === "medium" ? (openBlock(), createElementBlock("svg", _hoisted_5, _hoisted_8)) : (openBlock(), createElementBlock("svg", _hoisted_9, _hoisted_12));
    };
  }
});
export {
  _sfc_main as default
};
