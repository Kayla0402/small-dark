webpackJsonp([5],{

/***/ 1277:
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
  }, [_c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请输入名称"
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
      "prop": "name",
      "label": "名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "code",
      "label": "编码",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sortOrder",
      "label": "序",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "type",
      "label": "类型",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('div', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.type === 1),
            expression: "scope.row.type === 1"
          }]
        }, [_vm._v("省/直辖区")]), _vm._v(" "), _c('div', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.type === 2),
            expression: "scope.row.type === 2"
          }]
        }, [_vm._v("城市")]), _vm._v(" "), _c('div', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.type === 3),
            expression: "scope.row.type === 3"
          }]
        }, [_vm._v("区县")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "longitudes",
      "label": "经度",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "latitudes",
      "label": "纬度",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lowerCase",
      "label": "首字母",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "align": "center"
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
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "icon": "el-icon-delete",
            "type": "small"
          },
          on: {
            "click": function($event) {
              _vm.checkDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
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
      "title": "地区信息详情",
      "visible": _vm.dialogFormVisible,
      "size": "small",
      "label-width": "150px",
      "width": "80%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormVisible = $event
      }
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 24
    }
  }, [_c('el-col', {
    attrs: {
      "span": 12
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
      "label": "名称"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "排序"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    model: {
      value: (_vm.form.sort),
      callback: function($$v) {
        _vm.$set(_vm.form, "sort", $$v)
      },
      expression: "form.sort"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否热门城市"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.form.isHot),
      callback: function($$v) {
        _vm.$set(_vm.form, "isHot", $$v)
      },
      expression: "form.isHot"
    }
  }, _vm._l((_vm.option1), function(item) {
    return _c('el-option', {
      key: item,
      attrs: {
        "label": item,
        "value": item
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "经度"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    model: {
      value: (_vm.form.longitudes),
      callback: function($$v) {
        _vm.$set(_vm.form, "longitudes", $$v)
      },
      expression: "form.longitudes"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "类型"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.form.type),
      callback: function($$v) {
        _vm.$set(_vm.form, "type", $$v)
      },
      expression: "form.type"
    }
  }, _vm._l((_vm.option2), function(item) {
    return _c('el-option', {
      key: item,
      attrs: {
        "label": item,
        "value": item
      }
    })
  }))], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
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
      "label": "编码"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    model: {
      value: (_vm.form.code),
      callback: function($$v) {
        _vm.$set(_vm.form, "code", $$v)
      },
      expression: "form.code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "简称"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    model: {
      value: (_vm.form.short),
      callback: function($$v) {
        _vm.$set(_vm.form, "short", $$v)
      },
      expression: "form.short"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否删除"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.form.isDelete),
      callback: function($$v) {
        _vm.$set(_vm.form, "isDelete", $$v)
      },
      expression: "form.isDelete"
    }
  }, _vm._l((_vm.option3), function(item) {
    return _c('el-option', {
      key: item,
      attrs: {
        "label": item,
        "value": item
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "纬度"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    model: {
      value: (_vm.form.latitude),
      callback: function($$v) {
        _vm.$set(_vm.form, "latitude", $$v)
      },
      expression: "form.latitude"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "父级"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.form.father),
      callback: function($$v) {
        _vm.$set(_vm.form, "father", $$v)
      },
      expression: "form.father"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = false
      }
    }
  }, [_vm._v("取消")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(969);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("4e1f9b4b", content, true);

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1308)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(942),
  /* template */
  __webpack_require__(1277),
  /* scopeId */
  "data-v-73493101",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 942:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      name: '',
      list: [],
      option1: ['是', '否'],
      option2: ['省/直辖市', '城市', '区县'],
      option3: ['是', '否'],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,

      form: {
        id: '',
        name: '',
        sort: '',
        isHot: '',
        longitudes: '',
        type: '',

        code: '',
        short: '',
        isDelete: '',
        latitude: '',
        father: ''

      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const _this = this;
      this.$fetch('area/list?name=' + this.name + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
        console.log(data);
        _this.allpage = data.recordsTotal;
        _this.list = [];

        for (let i = 0; i < data.data.length; i++) {
          _this.list.push(data.data[i]);
        }
      });
    },
    fetchDetailData(val) {
      const _this = this;

      _this.form.id = val.id;

      _this.form.name = val.name;
      _this.form.sort = val.sortOrder;
      _this.form.isHot = val.isHeat ? '是' : '否';
      _this.form.longitudes = val.longitudes;
      _this.form.type = val.type;

      _this.form.code = val.code;
      _this.form.short = val.shortName;
      _this.form.isDelete = val.deleted ? '是' : '否';
      _this.form.latitude = val.latitudes;
      _this.form.father = val.parentId;

      if (val.type === 1) {
        _this.form.type = '省/直辖市';
      } else if (val.type === 2) {
        _this.form.type = '城市';
      } else if (val.type === 3) {
        _this.form.type = '区县';
      }
    },
    searchClick() {
      this.fetchData();
    },
    checkDetail(index, val) {
      this.clearForm();
      this.dialogFormVisible = true;
      this.fetchDetailData(val);
    },
    checkDelete(index, val) {
      const _this = this;
      this.$confirm('确认删除么？').then(_ => {
        // _this.$post('system/user/delete?_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6' + '&userId=' + val.num)
        //   .then((data) => {
        //     console.log(data)
        //     if (data.code === '200') {
        //       _this.$notify({
        //         title: '成功',
        //         message: '操作成功',
        //         type: 'success'
        //       })
        //       this.fetchData()
        //     }
        //   })
      }).catch(_ => {});
    },
    clearForm() {
      Object.assign(this.$data.form, this.$options.data().form);
    },
    onSubmit() {
      const _this = this;

      var heat = _this.form.isHot === '是' ? 1 : 0;
      var deleted = _this.form.isDelete === '是' ? 1 : 0;
      var type = '1';
      if (_this.form.type === '省/直辖市') {
        type = '1';
      } else if (_this.form.type === '城市') {
        type = '2';
      } else if (_this.form.type === '区县') {
        type = '3';
      }
      this.$post('area/save?id=' + _this.form.id + '&name=' + _this.form.name + '&code=' + _this.form.code + '&sortOrder=' + _this.form.sort + '&shortName=' + _this.form.short + '&isHeat=' + heat + '&deleted=' + deleted + '&longitudes=' + _this.form.longitudes + '&latitudes=' + _this.form.latitude + '&isDefault=' + type + '&_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6').then(data => {
        console.log(data);
        _this.dialogFormVisible = false;
        _this.fetchData();
      });
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

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".dashboard-editor-container[data-v-73493101]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-73493101]{padding:8px}}", ""]);

// exports


/***/ })

});