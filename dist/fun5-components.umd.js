(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash-es'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash-es', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Fun5Components = {}, global._, global.Vue));
})(this, (function (exports, lodashEs, vue) { 'use strict';

  const commonDefaultProps = {
      // actions
      actionType: '',
      url: '',
      // size
      height: '',
      width: '373px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      // border type
      borderStyle: 'none',
      borderColor: '#000',
      borderWidth: '0',
      borderRadius: '0',
      // shadow and opacity
      boxShadow: '0 0 0 #000000',
      opacity: '1',
      // position and x,y
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0'
  };
  const textDefaultProps = {
      // basic props - font styles
      text: '正文内容',
      fontSize: '14px',
      fontFamily: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      textAlign: 'left',
      lineHeight: '1',
      color: '#000000',
      backgroundColor: '',
      ...commonDefaultProps
  };
  const imageDefaultProps = {
      src: 'test.url',
      ...commonDefaultProps
  };
  const shapeDefaultProps = {
      backgroundColor: '',
      ...commonDefaultProps
  };
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false
      }
  };
  const textStylePropNames = lodashEs.without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
  const imageStylePropsNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src');
  const shapeStylePropsNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url');
  const transformToComponentProps = (props) => {
      const mapProps = lodashEs.mapValues(props, (item) => {
          return {
              type: item.constructor,
              default: item
          };
      });
      return { ...mapProps, ...isEditingProp };
  };

  const useComponentCommon = (props, picks) => {
      const styleProps = vue.computed(() => lodashEs.pick(props, picks));
      const handleClick = () => {
          if (props.actionType === 'url' && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return {
          styleProps,
          handleClick
      };
  };

  const defaultProps$2 = transformToComponentProps(textDefaultProps);
  // array that contains style props
  var script$2 = vue.defineComponent({
      name: 'f-text',
      props: {
          tag: {
              type: String,
              default: 'div'
          },
          ...defaultProps$2
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "f-text-component",
      onClick: _ctx.handleClick
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style", "onClick"]))
  }

  script$2.render = render$2;
  script$2.__scopeId = "data-v-35443ab7";
  script$2.__file = "src/components/FText/FText.vue";

  script$2.install = (app) => {
      app.component(script$2.name, script$2);
  };

  const defaultProps$1 = transformToComponentProps(imageDefaultProps);
  // array that contains style props
  var script$1 = vue.defineComponent({
      name: 'f-image',
      props: {
          ...defaultProps$1
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, imageStylePropsNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  const _hoisted_1 = ["src"];

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("img", {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "f-image-component",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
      src: _ctx.src
    }, null, 12 /* STYLE, PROPS */, _hoisted_1))
  }

  script$1.render = render$1;
  script$1.__scopeId = "data-v-53009fef";
  script$1.__file = "src/components/FImage/FImage.vue";

  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  const defaultProps = transformToComponentProps(shapeDefaultProps);
  // array that contains style props
  var script = vue.defineComponent({
      name: 'f-shape',
      props: {
          ...defaultProps
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, shapeStylePropsNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "f-shape-component",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
    }, null, 4 /* STYLE */))
  }

  script.render = render;
  script.__file = "src/components/FShape/FShape.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script$2,
      script$1,
      script
  ];
  const install = (app) => {
      components.forEach(component => {
          app.component(component.name, component);
      });
  };
  var index = {
      install
  };

  exports.FImage = script$1;
  exports.FShape = script;
  exports.FText = script$2;
  exports["default"] = index;
  exports.imageDefaultProps = imageDefaultProps;
  exports.imageStylePropsNames = imageStylePropsNames;
  exports.install = install;
  exports.shapeDefaultProps = shapeDefaultProps;
  exports.shapeStylePropsNames = shapeStylePropsNames;
  exports.textDefaultProps = textDefaultProps;
  exports.textStylePropNames = textStylePropNames;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
