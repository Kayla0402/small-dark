webpackJsonp([4],{

/***/ 1284:
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
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.searchHighClick($event)
      }
    }
  }, [_vm._v("高级筛选")])], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "title": "车牌信息详情",
      "visible": _vm.dialogFormVisible,
      "size": "tiny",
      "label-width": "150px"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormVisible = $event
      }
    }
  }, [_c('el-form', {
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
      "label": "省"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择省"
    },
    on: {
      "change": _vm.provinceChange
    },
    model: {
      value: (_vm.form.province),
      callback: function($$v) {
        _vm.$set(_vm.form, "province", $$v)
      },
      expression: "form.province"
    }
  }, _vm._l((_vm.provinceArr), function(item) {
    return _c('el-option', {
      key: item.name,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "市"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择城市"
    },
    model: {
      value: (_vm.form.city),
      callback: function($$v) {
        _vm.$set(_vm.form, "city", $$v)
      },
      expression: "form.city"
    }
  }, _vm._l((_vm.cityArr), function(item) {
    return _c('el-option', {
      key: item.name,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.form.province = '';
        _vm.form.city = ''
      }
    }
  }, [_vm._v("清空")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(976);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("460c40e0", content, true);

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1315)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(943),
  /* template */
  __webpack_require__(1284),
  /* scopeId */
  "data-v-e98ba64c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 943:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      type: '',
      permission: '',
      phoneNum: '',
      list: [],
      options: ['全部类型', '白银会员', '黄金会员', '钻石会员'],
      options1: [],
      provinceArr: [],
      cityArr: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,

      form: {
        province: '',
        city: ''
      }
    };
  },
  created() {
    this.fetchProvinceData();
    this.getPosition();
    this.fetchData();
  },
  methods: {
    fetchProvinceData() {
      const _this = this;
      this.$fetch('area/province').then(data => {
        console.log(data);
        if (data.code === '200') {
          _this.provinceArr = [];
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

      var provinceId = '';
      var cityId = '';

      for (let i = 0; i < _this.provinceArr.length; i++) {
        if (_this.provinceArr[i].name === _this.form.province) {
          provinceId = _this.provinceArr[i].code;
        }
      }

      for (let i = 0; i < _this.cityArr.length; i++) {
        if (_this.cityArr[i].name === _this.form.city) {
          cityId = _this.cityArr[i].code;
        }
      }

      this.$fetch('user/list?levelType=' + typeId + '&staffPosition=' + positionId + '&phone=' + this.phoneNum + '&provinceId=' + provinceId + '&cityId=' + cityId + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
        console.log(data);
        _this.allpage = data.recordsTotal;
        _this.list = [];

        for (let i = 0; i < data.data.length; i++) {
          var json = {
            num: data.data[i].id,
            city: data.data[i].city,
            type: data.data[i].levelName,
            permission: data.data[i].staffPositionName,
            name: data.data[i].username,
            phone: data.data[i].phone
          };
          _this.list.push(json);
        }
      });
    },

    searchClick() {
      this.fetchData();
    },

    searchHighClick() {
      this.dialogFormVisible = true;
    },

    onSubmit() {
      this.dialogFormVisible = false;
      this.fetchData();
    },

    provinceChange() {
      const _this = this;
      _this.form.city = '';
      for (let i = 0; i < _this.provinceArr.length; i++) {
        if (_this.provinceArr[i].name === _this.form.province) {
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

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".dashboard-editor-container[data-v-e98ba64c]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-e98ba64c]{padding:8px}}", ""]);

// exports


/***/ })

});