import { defineComponent, openBlock, createElementBlock, createStaticVNode } from "vue";
import { C as Colors } from "./index.b74707c9.mjs";
const _hoisted_1 = ["stroke"];
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line id="primary-upstroke" x1="11.95" y1="16.5" x2="12.05" y2="16.5" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.95;"></line><path id="primary" d="M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5;"></path></g>', 3);
const _hoisted_5 = [
  _hoisted_2
];
const _hoisted_6 = ["stroke"];
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line id="primary-upstroke" x1="11.95" y1="16.5" x2="12.05" y2="16.5" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.95;"></line><path id="primary" d="M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5;"></path></g>', 3);
const _hoisted_10 = [
  _hoisted_7
];
const _hoisted_11 = ["stroke"];
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line id="primary-upstroke" x1="11.95" y1="16.5" x2="12.05" y2="16.5" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.95;"></line><path id="primary" d="M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5;"></path></g>', 3);
const _hoisted_15 = [
  _hoisted_12
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Caution",
  props: {
    size: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: Colors.notice
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.size === "big" ? (openBlock(), createElementBlock("svg", {
        key: 0,
        id: "caution-sign-circle",
        fill: "#999999",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        class: "icon line",
        stroke: __props.color,
        width: "30",
        height: "30"
      }, _hoisted_5, 8, _hoisted_1)) : __props.size === "medium" ? (openBlock(), createElementBlock("svg", {
        key: 1,
        id: "caution-sign-circle",
        fill: "#999999",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        class: "icon line",
        stroke: __props.color,
        width: "24",
        height: "24"
      }, _hoisted_10, 8, _hoisted_6)) : (openBlock(), createElementBlock("svg", {
        key: 2,
        id: "caution-sign-circle",
        fill: "#999999",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        class: "icon line",
        stroke: __props.color,
        width: "20",
        height: "20"
      }, _hoisted_15, 8, _hoisted_11));
    };
  }
});
export {
  _sfc_main as default
};
