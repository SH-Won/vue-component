import { defineComponent, defineAsyncComponent, computed, openBlock, createElementBlock, normalizeStyle, unref, createBlock, resolveDynamicComponent, normalizeProps, guardReactiveProps, normalizeClass, withDirectives, createVNode, vShow, createElementVNode, toDisplayString, renderSlot, createCommentVNode, withModifiers, withCtx } from "vue";
const colorValidator = (value) => {
  if (value.startsWith("#") && value.length < 8)
    return true;
  return false;
};
const sizeValidator = (value) => {
  return ["small", "medium", "big"].indexOf(value) !== -1;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Element",
  props: {
    size: {
      type: String,
      validator: sizeValidator,
      default: "medium"
    },
    name: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  setup(__props) {
    const props = __props;
    const iconComponent = defineAsyncComponent(async () => {
      const modules = /* @__PURE__ */ Object.assign({ "./icons/Adult.vue": () => import("./Adult.15ab5b54.mjs"), "./icons/ArrowLeft.vue": () => import("./ArrowLeft.8f1c81d4.mjs"), "./icons/Caution.vue": () => import("./Caution.96c81aa7.mjs"), "./icons/Check.vue": () => import("./Check.0e7a4ba8.mjs"), "./icons/Close.vue": () => import("./Close.9530cc8c.mjs"), "./icons/Depth.vue": () => import("./Depth.e8d538f1.mjs"), "./icons/Gear.vue": () => import("./Gear.12ff9ea7.mjs"), "./icons/Hamburger.vue": () => import("./Hamburger.a5ec564b.mjs"), "./icons/Plus.vue": () => import("./Plus.ba7f6104.mjs"), "./icons/Right.vue": () => import("./Right.309ea5ac.mjs"), "./icons/Search.vue": () => import("./Search.d81fcd92.mjs"), "./icons/Setting.vue": () => import("./Setting.6254800b.mjs") });
      const entries = Object.entries(modules);
      const findModule = entries.find(([fileName]) => {
        const findName = "./icons/" + props.name + ".vue";
        return fileName === findName;
      });
      if (!findModule)
        throw new Error("cannot find icon component: " + props.name);
      return await findModule[1]();
    });
    const adjustHeigth = computed(() => {
      if (props.size === "big")
        return "30px";
      else if (props.size === "medium")
        return "24px";
      else
        return "20px";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle({ height: unref(adjustHeigth) })
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent)), normalizeProps(guardReactiveProps(props)), null, 16))
      ], 4);
    };
  }
});
const Element_vue_vue_type_style_index_0_scoped_fcba675e_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Element = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-fcba675e"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeaderBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    backFunc: {
      type: Function,
      default: void 0
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#111"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["appBar", __props.isMobile ? "mobile" : ""])
      }, [
        withDirectives(createVNode(unref(Element), {
          name: "ArrowLeft",
          color: __props.color,
          size: "big",
          onClick: _cache[0] || (_cache[0] = ($event) => __props.backFunc ? __props.backFunc() : () => {
          })
        }, null, 8, ["color"]), [
          [vShow, __props.backFunc]
        ]),
        createElementVNode("span", null, toDisplayString(__props.title), 1)
      ], 2);
    };
  }
});
const HeaderBar_vue_vue_type_style_index_0_scoped_c7c93b19_lang = "";
const HeaderBar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-c7c93b19"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "OverLay",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: 0.6,
      validator: (num) => {
        return num >= 0 && num <= 1;
      }
    }
  },
  setup(__props) {
    const props = __props;
    const style = computed(() => {
      return {
        backgroundColor: `rgba(0,0,0,${props.opacity})`
      };
    });
    return (_ctx, _cache) => {
      return __props.isShow ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "overlay",
        style: normalizeStyle(unref(style)),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("onClick:overlay", $event))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)) : createCommentVNode("", true);
    };
  }
});
const OverLay_vue_vue_type_style_index_0_scoped_50d1e515_lang = "";
const OverLay = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-50d1e515"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Popup",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click:overlay"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(OverLay), {
        "is-show": __props.isShow,
        opacity: 0.4,
        "onOnClick:overlay": _cache[0] || (_cache[0] = withModifiers((event) => emits("click:overlay", event), ["self"]))
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(["wrapper", __props.isMobile ? "mobile" : ""])
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2)
        ]),
        _: 3
      }, 8, ["is-show", "opacity"]);
    };
  }
});
const Popup_vue_vue_type_style_index_0_scoped_fbbcabeb_lang = "";
const Popup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fbbcabeb"]]);
const main = "#6440dd";
const main_sub = "#5934D8";
const notice = "#F5222D";
const grey_111 = "#111111";
const grey_666 = "#666666";
const grey_333 = "#333333";
const grey_999 = "#999999";
const grey_bbb = "#bbbbbb";
const grey_ccc = "#cccccc";
const grey_f4 = "#f4f4f4";
const bg_main = "#f5f6f8";
const bg_noti = "#f2f4f7";
const bg_disable = "#dbd6eb";
const bg_sub = "#eeebff";
const bg_trans = "#b6b7b9";
const line_01 = "#e7e9ef";
const line_02 = "#cfd4dd";
const plus = "#d42a21";
const minus = "#1968e5";
const code = "#27c4b8";
const white = "#fff";
const option_hover = "#f4f0ff";
const m_gnb_normal = "#ABAEBF";
const Colors = {
  main,
  main_sub,
  notice,
  grey_111,
  grey_666,
  grey_333,
  grey_999,
  grey_bbb,
  grey_ccc,
  grey_f4,
  bg_main,
  bg_noti,
  bg_disable,
  bg_sub,
  bg_trans,
  line_01,
  line_02,
  plus,
  minus,
  code,
  white,
  option_hover,
  m_gnb_normal
};
const _hoisted_1$2 = { class: "popup-icon" };
const _hoisted_2$2 = {
  key: 0,
  class: "title"
};
const _hoisted_3$2 = { class: "popup-icon" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PopupHeader",
  props: {
    title: { default: "" },
    back: { type: Function, default: void 0 },
    close: { type: Function, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const style = computed(() => {
      if (props.title) {
        return { padding: "20px" };
      } else {
        return { padding: "16px" };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "popup-header",
        style: normalizeStyle(unref(style))
      }, [
        createElementVNode("div", _hoisted_1$2, [
          __props.back ? (openBlock(), createBlock(Element, {
            key: 0,
            name: "ArrowLeft",
            size: "big",
            color: unref(Colors).grey_999,
            onClick: __props.back
          }, null, 8, ["color", "onClick"])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", null, [
          __props.title ? (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(__props.title), 1)) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_3$2, [
          __props.close ? (openBlock(), createBlock(Element, {
            key: 0,
            name: "Close",
            size: "big",
            color: unref(Colors).grey_999,
            onClick: __props.close
          }, null, 8, ["color", "onClick"])) : createCommentVNode("", true)
        ])
      ], 4);
    };
  }
});
const PopupHeader_vue_vue_type_style_index_0_scoped_0306b43c_lang = "";
const PopupHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0306b43c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    size: { default: "medium" },
    color: { default: Colors.main },
    border: { default: "" },
    disable: { type: Boolean, default: false },
    width: { default: "100px" },
    fontColor: { default: "#111" }
  },
  setup(__props) {
    const props = __props;
    const style = computed(() => {
      if (props.disable) {
        return {
          backgroundColor: Colors.bg_disable,
          padding: props.size === "big" ? "14px 24px" : "12px 20px",
          border: props.border ? `1px solid ${props.border}` : "",
          width: props.width,
          color: props.fontColor
        };
      } else {
        return {
          backgroundColor: props.color,
          padding: props.size === "big" ? "14px 24px" : "12px 20px",
          border: props.border ? `1px solid ${props.border}` : "",
          width: props.width,
          color: props.fontColor
        };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "common-button",
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4);
    };
  }
});
const Button_vue_vue_type_style_index_0_scoped_ab888e53_lang = "";
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ab888e53"]]);
const _hoisted_1$1 = { class: "card-container" };
const _hoisted_2$1 = { class: "card" };
const _hoisted_3$1 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    imageUrl: { default: "" },
    height: { default: "280px" },
    objectFit: { default: "fill" }
  },
  setup(__props) {
    const props = __props;
    const computedStyle = computed(() => {
      return {
        height: props.height,
        objectFit: props.objectFit
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2$1, [
          createElementVNode("img", {
            src: __props.imageUrl,
            style: normalizeStyle(unref(computedStyle))
          }, null, 12, _hoisted_3$1)
        ])
      ]);
    };
  }
});
const Card_vue_vue_type_style_index_0_scoped_d80a2ffa_lang = "";
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d80a2ffa"]]);
const _hoisted_1 = { class: "group-card" };
const _hoisted_2 = { class: "card" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "card-explain" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GroupCard",
  props: {
    imageUrl: { default: "" },
    label: { default: "" },
    isSub: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.isSub ? (openBlock(), createBlock(Element, {
          key: 0,
          name: "Depth",
          width: 17,
          height: 34
        })) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("img", {
            class: "card-image",
            src: __props.imageUrl
          }, null, 8, _hoisted_3),
          createElementVNode("div", _hoisted_4, [
            createElementVNode("span", null, toDisplayString(__props.label), 1)
          ])
        ])
      ]);
    };
  }
});
const GroupCard_vue_vue_type_style_index_0_scoped_0080c61b_lang = "";
const GroupCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0080c61b"]]);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Colors as C,
  Element as E,
  GroupCard as G,
  HeaderBar as H,
  OverLay as O,
  Popup as P,
  PopupHeader as a,
  Card as b,
  colorValidator as c,
  index as i
};
