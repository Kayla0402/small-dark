webpackJsonp([9],{

/***/ 1262:
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
      "placeholder": "请选择城市"
    },
    model: {
      value: (_vm.city),
      callback: function($$v) {
        _vm.city = $$v
      },
      expression: "city"
    }
  }, _vm._l((_vm.options), function(item) {
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
      "prop": "id",
      "label": "编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "provinceName",
      "label": "地区编号",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "licensePlate",
      "label": "牌照名称",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sortOrder",
      "label": "排序顺序",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createdTime",
      "label": "创建时间",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createdUser",
      "label": "创建用户",
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
      "title": "车牌信息详情",
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
      "label": "省/直辖市"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.form.city),
      callback: function($$v) {
        _vm.$set(_vm.form, "city", $$v)
      },
      expression: "form.city"
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
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "排序"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.sort),
      callback: function($$v) {
        _vm.$set(_vm.form, "sort", $$v)
      },
      expression: "form.sort"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "牌照名称"
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
      "label": "是否热门："
    }
  }, [_c('el-select', {
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
  }, _vm._l((_vm.options1), function(item) {
    return _c('el-option', {
      key: item,
      attrs: {
        "label": item,
        "value": item
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
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
  }, [_vm._v("取消")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(953);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("12464970", content, true);

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1292)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(938),
  /* template */
  __webpack_require__(1262),
  /* scopeId */
  "data-v-1e893f41",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 938:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      name: '',
      city: '',
      options: [],
      options1: ['是', '否'],
      list: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,

      form: {
        id: '',
        city: '',
        sort: '',
        name: '',
        isHot: ''
      }
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
          _this.options = [];
          var json1 = {
            name: '全部',
            code: '0'
          };
          _this.options.push(json1);
          for (let i = 0; i < data.data.length; i++) {
            var json = {
              name: data.data[i].name,
              code: data.data[i].id
            };
            _this.options.push(json);
          }
        }
      });
    },
    fetchData() {
      const _this = this;
      var provinceId = '';

      if (_this.city === '全部') {
        provinceId = '';
      } else {
        for (let i = 0; i < _this.options.length; i++) {
          if (_this.options[i].name === _this.city) {
            provinceId = _this.options[i].code;
          }
        }
      }

      this.$fetch('license/list?provinceId=' + provinceId + '&licensePlate=' + this.name + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
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
      _this.form.city = val.provinceName;
      _this.form.sort = val.sortOrder;
      _this.form.isHot = val.isHot ? '是' : '否';
      _this.form.name = val.licensePlate;
    },

    searchClick() {
      this.fetchData();
    },
    addClick() {
      this.clearForm();
      this.dialogFormVisible = true;
    },
    onSubmit() {
      const _this = this;
      var provinceId = '';

      if (_this.form.city === '全部') {
        provinceId = '';
      } else {
        for (let i = 0; i < _this.options.length; i++) {
          if (_this.options[i].name === _this.form.city) {
            provinceId = _this.options[i].code;
          }
        }
      }
      var isHot = _this.form.isHot === '是' ? 1 : 0;

      this.$post('license/save?id=' + this.form.id + '&provinceId=' + provinceId + '&sortOrder=' + this.form.sort + '&licensePlate=' + this.form.name + '&isHot=' + isHot + '&_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6').then(data => {
        console.log(data);
        _this.dialogFormVisible = false;
        _this.fetchData();
      });
    },
    checkDetail(index, val) {
      this.clearForm();
      this.dialogFormVisible = true;
      this.fetchDetailData(val);
    },
    checkDelete(index, val) {
      const _this = this;
      this.$confirm('确认删除么？').then(_ => {
        _this.$post('license/delete?_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6' + '&id=' + val.id).then(data => {
          console.log(data);
          if (data.code === '200') {
            _this.$notify({
              title: '成功',
              message: '操作成功',
              type: 'success'
            });
            _this.fetchData();
          }
        });
      }).catch(_ => {});
    },
    clearForm() {
      Object.assign(this.$data.form, this.$options.data().form);
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

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".dashboard-editor-container[data-v-1e893f41]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-1e893f41]{padding:8px}}", ""]);

// exports


/***/ })

});