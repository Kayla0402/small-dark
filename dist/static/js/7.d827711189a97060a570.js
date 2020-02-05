webpackJsonp([7],{

/***/ 1272:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dashboard-editor-container"
  }, [_c('el-card', {
    staticClass: "box-card",
    staticStyle: {
      "height": "1000px"
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "80px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "未审核"
    }
  }, [_c('el-switch', {
    attrs: {
      "active-color": "#13ce66",
      "inactive-color": "gray"
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(963);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("e03bb730", content, true);

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1302)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(940),
  /* template */
  __webpack_require__(1272),
  /* scopeId */
  "data-v-4ae38a0a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      value: ''
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {}
  }
});

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".dashboard-editor-container[data-v-4ae38a0a]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-4ae38a0a]{padding:8px}}", ""]);

// exports


/***/ })

});