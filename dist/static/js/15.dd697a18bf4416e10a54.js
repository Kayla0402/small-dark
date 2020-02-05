webpackJsonp([15],{

/***/ 1282:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dashboard-editor-container"
  }, [_c('el-card', {
    staticClass: "box-card",
    staticStyle: {
      "height": "1200px"
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
      "placeholder": "请选择会员类型"
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
      key: item,
      attrs: {
        "label": item,
        "value": item
      }
    })
  })), _vm._v(" "), _c('el-select', {
    attrs: {
      "placeholder": "请选择权限"
    },
    model: {
      value: (_vm.permission),
      callback: function($$v) {
        _vm.permission = $$v
      },
      expression: "permission"
    }
  }, _vm._l((_vm.options1), function(item) {
    return _c('el-option', {
      key: item.name,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  })), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "193px"
    },
    attrs: {
      "placeholder": "请输入手机号码"
    },
    model: {
      value: (_vm.phoneNum),
      callback: function($$v) {
        _vm.phoneNum = $$v
      },
      expression: "phoneNum"
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
  }, [_vm._v("\n          搜索\n        ")])], 1)], 1), _vm._v(" "), _c('div', [_c('el-row', {
    attrs: {
      "gutter": 24
    }
  }, [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-card', {
    staticClass: "card_Pink",
    attrs: {
      "body-style": {
        padding: '0px'
      },
      "shadow": "always"
    }
  }, [_c('div', {
    staticClass: "grid-content",
    staticStyle: {
      "padding": "5px"
    }
  }, [_c('span', {
    staticStyle: {
      "color": "white"
    }
  }, [_vm._v("合计进件金额")]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "card_detail"
  }, [_vm._v("￥" + _vm._s(_vm.jinjianMoney))])])])])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-card', {
    staticClass: "card_Green",
    attrs: {
      "body-style": {
        padding: '0px'
      },
      "shadow": "always"
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "5px"
    }
  }, [_c('span', {
    staticStyle: {
      "color": "white"
    }
  }, [_vm._v("合计进件单数")]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "card_detail"
  }, [_vm._v(_vm._s(_vm.jinjianCount))])])])])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-card', {
    staticClass: "card_Light_Green",
    attrs: {
      "body-style": {
        padding: '0px'
      },
      "shadow": "always"
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "5px"
    }
  }, [_c('span', {
    staticStyle: {
      "color": "white"
    }
  }, [_vm._v("合计放款金额")]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "card_detail"
  }, [_vm._v("￥" + _vm._s(_vm.payoutMoney))])])])])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-card', {
    staticClass: "card_Light_Blue",
    attrs: {
      "body-style": {
        padding: '0px'
      },
      "shadow": "always"
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "5px"
    }
  }, [_c('span', {
    staticStyle: {
      "color": "white"
    }
  }, [_vm._v("合计放款单数")]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "card_detail"
  }, [_vm._v(_vm._s(_vm.payoutCount))])])])])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "city",
      "label": "城市",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "type",
      "label": "会员类型",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "permission",
      "label": "权限",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "phone",
      "label": "手机号码",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "count",
      "label": "进件单数",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "money",
      "label": "进件金额",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "outCount",
      "label": "放款单数",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "outMoney",
      "label": "放款金额",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "align": "center"
    }
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
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(974);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("4e8998d7", content, true);

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1313)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(923),
  /* template */
  __webpack_require__(1282),
  /* scopeId */
  "data-v-c4cc029c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 923:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      type: '',
      permission: '',
      phoneNum: '',
      list: [],
      options: ['全部类型', '白银会员', '黄金会员', '钻石会员'],
      options1: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      jinjianCount: 0,
      jinjianMoney: 0,
      payoutCount: 0,
      payoutMoney: 0

    };
  },
  created() {
    this.getPosition();
    this.fetchData();
  },
  methods: {
    getPosition() {
      const _this = this;
      this.$fetch('staff/position').then(data => {
        console.log(data);
        _this.options1 = [];
        var json1 = {
          name: '全部权限',
          code: '0'
        };
        _this.options1.push(json1);

        for (let i = 0; i < data.data.length; i++) {
          var json = {
            name: data.data[i].name,
            code: data.data[i].code
          };
          _this.options1.push(json);
        }
      });
    },
    fetchData() {
      const _this = this;
      var typeId = '';
      var positionId = '';

      if (_this.type === '全部类型') {
        typeId = '';
      } else if (_this.type === '白银会员') {
        typeId = '1';
      } else if (_this.type === '黄金会员') {
        typeId = '2';
      } else if (_this.type === '钻石会员') {
        typeId = '3';
      }

      if (_this.permission === '全部权限') {
        positionId = '';
      } else {
        for (let i = 0; i < _this.options1.length; i++) {
          if (_this.options1[i].name === _this.permission) {
            positionId = _this.options1[i].code;
          }
        }
      }

      this.$fetch('application-apply/list?levelType=' + typeId + '&staffPosition=' + positionId + '&phone=' + this.phoneNum + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
        console.log(data);
        _this.allpage = data.recordsTotal;
        _this.list = [];
        _this.jinjianCount = 0;
        _this.jinjianMoney = 0;
        _this.payoutCount = 0;
        _this.payoutMoney = 0;

        for (let i = 0; i < data.data.length; i++) {
          var json = {
            num: data.data[i].id,
            city: data.data[i].city,
            type: data.data[i].levelName,
            permission: data.data[i].staffPositionName,
            name: data.data[i].username,
            phone: data.data[i].phone,
            count: data.data[i].applyCount,
            money: data.data[i].applyAmount,
            outCount: data.data[i].loanCount,
            outMoney: data.data[i].loanAmount
          };
          _this.list.push(json);
          _this.jinjianCount += Number(data.data[i].applyCount);
          _this.jinjianMoney += Number(data.data[i].applyAmount);
          _this.payoutCount += Number(data.data[i].loanCount);
          _this.payoutMoney += Number(data.data[i].loanAmount);
        }
      });
    },

    searchClick() {
      this.fetchData();
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.currentPage = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.fetchData();
    }
  }
});

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".card_Pink[data-v-c4cc029c]{background-color:#ff9997;border-radius:5px;padding:10px}.card_Green[data-v-c4cc029c]{background-color:#79d4cc;border-radius:5px;padding:10px}.card_Light_Green[data-v-c4cc029c]{background-color:#7cd96a;border-radius:5px;padding:10px}.card_Light_Blue[data-v-c4cc029c]{background-color:#88aedf;border-radius:5px;padding:10px}.card_Light_purple[data-v-c4cc029c]{background-color:#eaa5d5;border-radius:5px;padding:10px}.card_Light_blue1[data-v-c4cc029c]{background-color:#9be3ee;border-radius:5px;padding:10px}.card_icon[data-v-c4cc029c]{font-size:25px;color:#fff;padding-bottom:20px}.card_detail[data-v-c4cc029c]{margin-top:20px;color:#fff;font-size:20px}.dashboard-editor-container[data-v-c4cc029c]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-c4cc029c]{padding:8px}}", ""]);

// exports


/***/ })

});