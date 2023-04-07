import { defineComponent, openBlock, createElementBlock, createElementVNode } from "vue";
const _hoisted_1 = {
  "data-v-1cb5ec28": "",
  width: "17",
  height: "34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  "data-v-1cb5ec28": "",
  d: "M1 30H.5v.5H1V30Zm15.35.35a.5.5 0 0 0 0-.7l-3.18-3.19a.5.5 0 1 0-.7.71L15.28 30l-2.83 2.83a.5.5 0 1 0 .71.7l3.18-3.18ZM.5 0v30h1V0h-1ZM1 30.5h15v-1H1v1Z",
  fill: "#CFD4DD"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Depth",
  props: {
    width: null,
    height: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
    };
  }
});
export {
  _sfc_main as default
};
