webpackJsonp([11],{

/***/ 1269:
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
      "label-width": "10px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": ""
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择省"
    },
    on: {
      "change": _vm.provinceChange
    },
    model: {
      value: (_vm.province),
      callback: function($$v) {
        _vm.province = $$v
      },
      expression: "province"
    }
  }, _vm._l((_vm.provinceArr), function(item) {
    return _c('el-option', {
      key: item.name,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  })), _vm._v(" "), _c('el-select', {
    attrs: {
      "placeholder": "请选择市"
    },
    model: {
      value: (_vm.city),
      callback: function($$v) {
        _vm.city = $$v
      },
      expression: "city"
    }
  }, _vm._l((_vm.cityArr), function(item) {
    return _c('el-option', {
      key: item.name,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  })), _vm._v(" "), _c('el-select', {
    attrs: {
      "placeholder": "请选择支付状态"
    },
    model: {
      value: (_vm.status),
      callback: function($$v) {
        _vm.status = $$v
      },
      expression: "status"
    }
  }, _vm._l((_vm.options2), function(item) {
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
  }, [_vm._v("搜索")])], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "profitId",
      "label": "序号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "productNo",
      "label": "产品编号",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "loanMoneyStr",
      "label": "放款金额",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "withdrawName",
      "label": "提现人",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "withdrawAccount",
      "label": "账户名称",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "withdrawBank",
      "label": "收款账号",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "phone",
      "label": "联系方式",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "profitTypeStr",
      "label": "提现佣金类型",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rate",
      "label": "佣金比例",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "moneyStr",
      "label": "提现金额",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "applyWithdrawTime",
      "label": "提现时间",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "payTime",
      "label": "支付时间",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "payStatusStr",
      "label": "支付状态",
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

/***/ 1299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(960);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("49ec9cf1", content, true);

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1299)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(936),
  /* template */
  __webpack_require__(1269),
  /* scopeId */
  "data-v-3a90c206",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 936:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      province: '',
      city: '',
      status: '',
      list: [],
      provinceArr: [],
      cityArr: [],
      options2: ['全部类型', '待发放', '同意支付', '提现中', '已提现'],
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
    this.fetchProvinceData();
    this.fetchData();
  },
  methods: {
    fetchProvinceData() {
      const _this = this;
      this.$fetch('area/province').then(data => {
        console.log(data);
        if (data.code === '200') {
          _this.provinceArr = [];
          var json1 = {
            name: '全部',
            code: '0'
          };
          _this.provinceArr.push(json1);
          for (let i = 0; i < data.data.length; i++) {
            var json = {
              name: data.data[i].name,
              code: data.data[i].id
            };
            _this.provinceArr.push(json);
          }
        }
      });
    },
    fetchCityDataWithProvince(proId) {
      const _this = this;
      this.$fetch('area/child/' + proId).then(data => {
        console.log(data);
        if (data.code === '200') {
          _this.cityArr = [];
          var json1 = {
            name: '全部',
            code: '0'
          };
          _this.cityArr.push(json1);
          for (let i = 0; i < data.data.length; i++) {
            var json = {
              name: data.data[i].name,
              code: data.data[i].id
            };
            _this.cityArr.push(json);
          }
        }
      });
    },
    fetchData() {
      const _this = this;
      var provinceId = '';
      var cityId = '';

      if (_this.province === '全部') {
        provinceId = '';
      } else {
        for (let i = 0; i < _this.provinceArr.length; i++) {
          if (_this.provinceArr[i].name === _this.province) {
            provinceId = _this.provinceArr[i].code;
          }
        }
      }

      if (_this.city === '全部') {
        cityId = '';
      } else {
        for (let i = 0; i < _this.cityArr.length; i++) {
          if (_this.cityArr[i].name === _this.city) {
            cityId = _this.cityArr[i].code;
          }
        }
      }

      var status = '';
      if (_this.status === '全部类型') {
        status = '';
      } else if (_this.status === '待发放') {
        status = '0';
      } else if (_this.status === '同意支付') {
        status = '1';
      } else if (_this.status === '提现中') {
        status = '2';
      } else if (_this.status === '已提现') {
        status = '3';
      }

      this.$fetch('profit/member-list?provinceId=' + provinceId + '&cityId=' + cityId + '&payStatus=' + status + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
        console.log(data);
        _this.allpage = data.recordsTotal;
        _this.list = [];

        for (let i = 0; i < data.data.length; i++) {
          _this.list.push(data.data[i]);
        }
      });
    },

    searchClick() {
      this.fetchData();
    },

    provinceChange() {
      const _this = this;
      _this.city = '';
      for (let i = 0; i < _this.provinceArr.length; i++) {
        if (_this.provinceArr[i].name === _this.province) {
          _this.fetchCityDataWithProvince(_this.provinceArr[i].code);
        }
      }
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

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".dashboard-editor-container[data-v-3a90c206]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-3a90c206]{padding:8px}}", ""]);

// exports


/***/ })

});