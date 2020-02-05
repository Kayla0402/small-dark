webpackJsonp([16],{

/***/ 1278:
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
  }, [_c('el-input', {
    staticStyle: {
      "width": "150px"
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
  }), _vm._v(" "), _c('el-select', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请选择产品类型"
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
  })), _vm._v(" "), _c('el-button', {
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
  }, [_vm._v("合计放款单数")]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "card_detail"
  }, [_vm._v(_vm._s(_vm.jinjianMoney))])])])])], 1), _vm._v(" "), _c('el-col', {
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
  }, [_vm._v("合计放款金额")]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "card_detail"
  }, [_vm._v("￥" + _vm._s(_vm.jinjianCount))])])])])], 1), _vm._v(" "), _c('el-col', {
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
  }, [_vm._v("合计产品数")]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "card_detail"
  }, [_vm._v(_vm._s(_vm.productCount) + "人")])])])])], 1), _vm._v(" "), _c('el-col', {
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
  }, [_vm._v("合计会员数")]), _vm._v(" "), _c('div', {
    staticClass: "bottom clearfix"
  }, [_c('div', {
    staticClass: "card_detail"
  }, [_vm._v(_vm._s(_vm.memberCount) + "人")])])])])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "type",
      "label": "产品类型",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "account",
      "label": "服务商账号",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "endTime",
      "label": "到期时间",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "applyCount",
      "label": "产品上架数量",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "count",
      "label": "放款单数",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "money",
      "label": "放款金额",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalCount",
      "label": "会员邀请总数",
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

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(970);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("8c74ccd0", content, true);

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1309)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(922),
  /* template */
  __webpack_require__(1278),
  /* scopeId */
  "data-v-7ceea63a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 922:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      type: '',
      phoneNum: '',
      list: [],
      options: ['全部类型', '车贷', '房贷', '信贷', '供应链'],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      jinjianCount: 0,
      jinjianMoney: 0,
      productCount: 0,
      memberCount: 0

    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const _this = this;
      var typeId = '';

      if (_this.type === '全部类型') {
        typeId = '';
      } else if (_this.type === '车贷') {
        typeId = 'chedai';
      } else if (_this.type === '房贷') {
        typeId = 'fangdai';
      } else if (_this.type === '信贷') {
        typeId = 'xindai';
      } else if (_this.type === '供应链') {
        typeId = 'gongyinglian';
      }

      this.$fetch('agent/data-list?productType=' + typeId + '&phone=' + this.phoneNum + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
        console.log(data);
        _this.allpage = data.recordsTotal;
        _this.list = [];
        _this.jinjianCount = 0;
        _this.jinjianMoney = 0;
        _this.productCount = 0;
        _this.memberCount = 0;

        for (let i = 0; i < data.data.length; i++) {
          var json = {
            num: data.data[i].id,
            type: data.data[i].productTypeStr,
            name: data.data[i].serviceName,
            account: data.data[i].servicePhone,
            endTime: data.data[i].deadLine,
            applyCount: data.data[i].productShelvesNo,
            count: data.data[i].loanNo,
            money: data.data[i].loanMoney,
            totalCount: data.data[i].inviteCount
          };
          _this.list.push(json);
          _this.jinjianCount += Number(data.data[i].loanNo);
          _this.jinjianMoney += Number(data.data[i].loanMoney);
          _this.productCount += Number(data.data[i].productShelvesNo);
          _this.memberCount += Number(data.data[i].inviteCount);
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

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".card_Pink[data-v-7ceea63a]{background-color:#ff9997;border-radius:5px;padding:10px}.card_Green[data-v-7ceea63a]{background-color:#79d4cc;border-radius:5px;padding:10px}.card_Light_Green[data-v-7ceea63a]{background-color:#7cd96a;border-radius:5px;padding:10px}.card_Light_Blue[data-v-7ceea63a]{background-color:#88aedf;border-radius:5px;padding:10px}.card_Light_purple[data-v-7ceea63a]{background-color:#eaa5d5;border-radius:5px;padding:10px}.card_Light_blue1[data-v-7ceea63a]{background-color:#9be3ee;border-radius:5px;padding:10px}.card_icon[data-v-7ceea63a]{font-size:25px;color:#fff;padding-bottom:20px}.card_detail[data-v-7ceea63a]{margin-top:20px;color:#fff;font-size:20px}.dashboard-editor-container[data-v-7ceea63a]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-7ceea63a]{padding:8px}}", ""]);

// exports


/***/ })

});