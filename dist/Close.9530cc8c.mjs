import { defineComponent, openBlock, createElementBlock, createElementVNode } from "vue";
const _hoisted_1 = {
  key: 0,
  width: "30",
  height: "30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = ["fill"];
const _hoisted_3 = {
  key: 1,
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_4 = ["fill"];
const _hoisted_5 = {
  key: 2,
  width: "20",
  height: "20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_6 = ["fill"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Close",
  props: {
    size: { default: "medium" },
    color: { default: "#111" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.size === "big" ? (openBlock(), createElementBlock("svg", _hoisted_1, [
        createElementVNode("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",
          fill: __props.color
        }, null, 8, _hoisted_2)
      ])) : __props.size === "medium" ? (openBlock(), createElementBlock("svg", _hoisted_3, [
        createElementVNode("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",
          fill: __props.color
        }, null, 8, _hoisted_4)
      ])) : (openBlock(), createElementBlock("svg", _hoisted_5, [
        createElementVNode("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",
          fill: __props.color
        }, null, 8, _hoisted_6)
      ]));
    };
  }
});
export {
  _sfc_main as default
};
