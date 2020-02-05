webpackJsonp([14],{

/***/ 1285:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dashboard-editor-container"
  }, [_c('el-card', {
    staticClass: "box-card",
    staticStyle: {
      "height": "1300px"
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "10px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": ""
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择业务类型"
    },
    model: {
      value: (_vm.type),
      callback: function($$v) {
        _vm.type = $$v
      },
      expression: "type"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.name,
      staticStyle: {
        "width": "240px"
      },
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  })), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请输入产品名称"
    },
    model: {
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "icon": "el-icon-search",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.searchClick($event)
      }
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "icon": "el-icon-plus",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.addClick($event)
      }
    }
  }, [_vm._v("新增")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%",
      "padding-top": "10px",
      "margin-top": "10px"
    },
    attrs: {
      "data": _vm.list,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "num",
      "label": "编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "名称",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "type",
      "label": "产品类型",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "second",
      "label": "二级分类",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "screen",
      "label": "封面",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "width": "80px",
            "height": "80px"
          },
          attrs: {
            "src": scope.row.screen
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "fromUser",
      "label": "所属者",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "phoneNum",
      "label": "手机号",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "applyTime",
      "label": "上架时间",
      "align": "center",
      "width": "200px"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "status",
      "label": "状态",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "详情",
      "align": "center",
      "width": "100px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "icon": "el-icon-edit",
            "type": "small"
          },
          on: {
            "click": function($event) {
              _vm.checkDetail(scope.$index, scope.row)
            }
          }
        }, [_vm._v("详情")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "align": "center",
      "width": "100px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "icon": "el-icon-edit",
            "type": "small"
          },
          on: {
            "click": function($event) {
              _vm.reviewOrder(scope.$index, scope.row)
            }
          }
        }, [_vm._v("审核")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-size": 10,
      "layout": "total, prev, pager, next",
      "total": _vm.allpage
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        _vm.currentPage = $event
      }
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "产品详情",
      "visible": _vm.dialogFormVisible,
      "size": "large",
      "label-width": "150px",
      "width": "80%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormVisible = $event
      }
    }
  }, [_c('el-tabs', {
    attrs: {
      "type": "card"
    },
    on: {
      "tab-click": _vm.handleTagClick
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "基础详情",
      "name": "first"
    }
  }), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "产品参数",
      "name": "second"
    }
  }), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "进件要求",
      "name": "third"
    }
  }), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "材料要求",
      "name": "four"
    }
  }), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "业务流程",
      "name": "five"
    }
  })], 1), _vm._v(" "), (_vm.activeName === 'first') ? _c('div', [_c('el-form', {
    ref: "form",
    staticStyle: {
      "width": "50%",
      "margin-left": "20%",
      "margin-top": "20px"
    },
    attrs: {
      "model": _vm.form,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "产品名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品代码"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.code),
      callback: function($$v) {
        _vm.$set(_vm.form, "code", $$v)
      },
      expression: "form.code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "额度范围"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.moneyStart),
      callback: function($$v) {
        _vm.$set(_vm.form, "moneyStart", $$v)
      },
      expression: "form.moneyStart"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "5px",
      "margin-right": "5px"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.moneyEnd),
      callback: function($$v) {
        _vm.$set(_vm.form, "moneyEnd", $$v)
      },
      expression: "form.moneyEnd"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "5px",
      "float": "left"
    }
  }, [_vm._v("万")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "期限范围"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.timeStart),
      callback: function($$v) {
        _vm.$set(_vm.form, "timeStart", $$v)
      },
      expression: "form.timeStart"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "5px",
      "margin-right": "5px"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.timeEnd),
      callback: function($$v) {
        _vm.$set(_vm.form, "timeEnd", $$v)
      },
      expression: "form.timeEnd"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "5px",
      "float": "left"
    }
  }, [_vm._v("个月")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品优势"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.form.advantage))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品类型"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.type),
      callback: function($$v) {
        _vm.$set(_vm.form, "type", $$v)
      },
      expression: "form.type"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系人姓名"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.userName),
      callback: function($$v) {
        _vm.$set(_vm.form, "userName", $$v)
      },
      expression: "form.userName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系人电话"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.phoneNum),
      callback: function($$v) {
        _vm.$set(_vm.form, "phoneNum", $$v)
      },
      expression: "form.phoneNum"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.activeName === 'second') ? _c('div', [_c('el-form', {
    ref: "form",
    staticStyle: {
      "width": "50%",
      "margin-left": "20%",
      "margin-top": "20px"
    },
    attrs: {
      "model": _vm.form,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "产品名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "还款方式"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择还款方式"
    },
    model: {
      value: (_vm.form.payType),
      callback: function($$v) {
        _vm.$set(_vm.form, "payType", $$v)
      },
      expression: "form.payType"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "等额本息",
      "value": "等额本息"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "先息后本",
      "value": "先息后本"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "等额本金",
      "value": "等额本金"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "服务费代收"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择代收方式"
    },
    model: {
      value: (_vm.form.receive),
      callback: function($$v) {
        _vm.$set(_vm.form, "receive", $$v)
      },
      expression: "form.receive"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "不代收",
      "value": "不代收"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "代收",
      "value": "代收"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "放款时间"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "50%",
      "float": "left"
    },
    model: {
      value: (_vm.form.payTime),
      callback: function($$v) {
        _vm.$set(_vm.form, "payTime", $$v)
      },
      expression: "form.payTime"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "5px"
    }
  }, [_vm._v("天以内")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款费率"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.rateStart),
      callback: function($$v) {
        _vm.$set(_vm.form, "rateStart", $$v)
      },
      expression: "form.rateStart"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "5px",
      "margin-right": "5px"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.rateEnd),
      callback: function($$v) {
        _vm.$set(_vm.form, "rateEnd", $$v)
      },
      expression: "form.rateEnd"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "5px",
      "float": "left"
    }
  }, [_vm._v("%")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "放款成数"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.percentStart),
      callback: function($$v) {
        _vm.$set(_vm.form, "percentStart", $$v)
      },
      expression: "form.percentStart"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "5px",
      "margin-right": "5px"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.percentEnd),
      callback: function($$v) {
        _vm.$set(_vm.form, "percentEnd", $$v)
      },
      expression: "form.percentEnd"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "5px",
      "float": "left"
    }
  }, [_vm._v("成")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "放款倍数"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.beiStart),
      callback: function($$v) {
        _vm.$set(_vm.form, "beiStart", $$v)
      },
      expression: "form.beiStart"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "5px",
      "margin-right": "5px"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.beiEnd),
      callback: function($$v) {
        _vm.$set(_vm.form, "beiEnd", $$v)
      },
      expression: "form.beiEnd"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "5px",
      "float": "left"
    }
  }, [_vm._v("倍")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "服务费收取"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.severStart),
      callback: function($$v) {
        _vm.$set(_vm.form, "severStart", $$v)
      },
      expression: "form.severStart"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "5px",
      "margin-right": "5px"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "40%",
      "float": "left"
    },
    model: {
      value: (_vm.form.severEnd),
      callback: function($$v) {
        _vm.$set(_vm.form, "severEnd", $$v)
      },
      expression: "form.severEnd"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "5px",
      "float": "left"
    }
  }, [_vm._v("%")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.activeName === 'third') ? _c('div', [_c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "30px"
    },
    attrs: {
      "data": _vm.listData,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "50"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "attributeName",
      "label": "名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "attributeValue",
      "label": "属性"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.activeName === 'four') ? _c('div', [_c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "30px"
    },
    attrs: {
      "data": _vm.listData1,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "50"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "必要材料"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "30px"
    },
    attrs: {
      "data": _vm.listData2,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "50"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "附加资料"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.activeName === 'five') ? _c('div', [_c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "30px"
    },
    attrs: {
      "data": _vm.listData3,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "50"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "名称"
    }
  })], 1)], 1) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(977);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("b3392c58", content, true);

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1316)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(933),
  /* template */
  __webpack_require__(1285),
  /* scopeId */
  "data-v-f978445c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 933:
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
      type: '',
      name: '',
      options: [],
      list: [],
      listData: [],
      listData1: [],
      listData2: [],
      listData3: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      activeName: 'first',
      dialogFormVisible: false,

      form: {
        name: '',
        code: '',
        moneyStart: '',
        moneyEnd: '',
        timeStart: '',
        timeEnd: '',
        type: '',
        advantage: '',
        userName: '',
        phoneNum: '',

        payType: '',
        receive: '',
        payTime: '',
        rateStart: '',
        rateEnd: '',
        percentStart: '',
        percentEnd: '',
        beiStart: '',
        beiEnd: '',
        severStart: '',
        severEnd: ''

      }
    };
  },
  created() {
    this.fetchData();
    this.fetchProductData();
  },
  methods: {
    fetchData() {
      const _this = this;
      this.$fetch('freshProduct/listCategoryOne').then(data => {
        console.log(data);
        _this.options = [];
        var json1 = {
          name: '全部',
          code: '0'
        };
        _this.options.push(json1);

        for (let i = 0; i < data.length; i++) {
          var json = {
            name: data[i].name,
            code: data[i].id
          };
          _this.options.push(json);
        }
      });
    },

    fetchProductData() {
      const _this = this;
      var typeId = '';
      if (_this.type === '全部') {
        typeId = '';
      } else {
        for (let i = 0; i < _this.options.length; i++) {
          if (_this.options[i].name === _this.type) {
            typeId = _this.options[i].code;
          }
        }
      }

      this.$fetch('freshProduct/list?oneCategoryId=' + typeId + '&productName=' + this.name + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
        console.log(data);
        _this.allpage = data.recordsTotal;
        _this.list = [];
        for (let i = 0; i < data.data.length; i++) {
          var json = {
            num: data.data[i].id,
            name: data.data[i].name,
            type: data.data[i].oneCategoryName,
            second: data.data[i].extendCategoryName,
            screen: data.data[i].icon,
            fromUser: data.data[i].releaseUserName,
            phoneNum: data.data[i].releaseUserPhone,
            applyTime: data.data[i].addTime,
            status: data.data[i].verifyStatus,
            detail: data.data[i].name
          };
          _this.list.push(json);
        }
      });
    },

    fetchDetailData(productId) {
      const _this = this;
      this.$fetch('freshProduct/selectProductDetailForBms?productId=' + productId).then(data => {
        console.log(data);
        _this.form.name = data.name;
        _this.form.code = data.productNo;
        _this.form.moneyStart = data.amountStart;
        _this.form.moneyEnd = data.amountEnd;
        _this.form.timeStart = data.monthStart;
        _this.form.timeEnd = data.monthEnd;
        _this.form.type = data.oneCategoryName;
        _this.form.userName = data.releaseUserName;
        _this.form.phoneNum = data.releaseUserPhone;

        _this.form.payType = '';
        _this.form.receive = '';
        _this.form.payTime = data.loanTimeLimit;
        _this.form.rateStart = data.borrowRatioStart;
        _this.form.rateEnd = data.borrowRatioEnd;
        _this.form.percentStart = data.loanNumberStart;
        _this.form.percentEnd = data.loanNumberEnd;
        _this.form.beiStart = data.loanMultipleStart;
        _this.form.beiEnd = data.loanMultipleEnd;
        _this.form.severStart = data.serviceFeeRatioStart;
        _this.form.severEnd = data.serviceFeeRatioEnd;

        var array = [];
        for (let i = 0; i < data.advantage.length; i++) {
          array.push(data.advantage[i].value);
        }
        _this.form.advantage = array.join(';');

        _this.listData = data.attributes;
        _this.listData1 = [];
        _this.listData2 = [];
        _this.listData3 = [];

        for (let i = 0; i < data.necessaryList.length; i++) {
          var json = {
            name: data.necessaryList[i]
          };
          _this.listData1.push(json);
        }

        for (let i = 0; i < data.additionalList.length; i++) {
          var json1 = {
            name: data.additionalList[i]
          };
          _this.listData2.push(json1);
        }

        for (let i = 0; i < data.bizProcessList.length; i++) {
          var json2 = {
            name: data.bizProcessList[i]
          };
          _this.listData3.push(json2);
        }
      });
    },

    searchClick() {
      this.fetchProductData();
    },
    addClick() {
      this.clearForm();
      this.dialogFormVisible = true;
    },
    checkDetail(index, val) {
      this.dialogFormVisible = true;
      this.fetchDetailData(val.num);
    },
    reviewOrder(index, val) {
      const _this = this;
      this.$confirm('确认提交审核？').then(_ => {
        _this.$fetch('freshProduct/verifyForBms?id=' + val.num + '&shelves=' + 1).then(data => {
          console.log(data);
          if (data.code === '200') {
            _this.$notify({
              title: '成功',
              message: '操作成功',
              type: 'success'
            });
          }
        });
      }).catch(_ => {});
    },
    clearForm() {
      Object.assign(this.$data.form, this.$options.data().form);
    },
    handleTagClick(tab, event) {
      const _this = this;
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.currentPage = val;
      this.fetchProductData();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.fetchProductData();
    }
  }
});

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".dashboard-editor-container[data-v-f978445c]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-f978445c]{padding:8px}}", ""]);

// exports


/***/ })

});