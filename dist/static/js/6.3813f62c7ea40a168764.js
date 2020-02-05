webpackJsonp([6],{

/***/ 1281:
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
      "prop": "roleName",
      "label": "角色名",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "description",
      "label": "描述",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createdTime",
      "label": "创建时间",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    staticStyle: {
      "width": "200px"
    },
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
              _vm.clickEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "icon": "el-icon-delete",
            "type": "small"
          },
          on: {
            "click": function($event) {
              _vm.clickDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "icon": "el-icon-menu",
            "type": "small"
          },
          on: {
            "click": function($event) {
              _vm.clickAdoc(scope.$index, scope.row)
            }
          }
        }, [_vm._v("分配资源")])]
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
      "title": "系统角色详情",
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
      "label": "角色名称："
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
      "label": "描述："
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.detail),
      callback: function($$v) {
        _vm.$set(_vm.form, "detail", $$v)
      },
      expression: "form.detail"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
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

/***/ 1312:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(973);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("34b266ba", content, true);

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1312)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(941),
  /* template */
  __webpack_require__(1281),
  /* scopeId */
  "data-v-b3de684e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 941:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      name: '',
      list: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,

      form: {
        id: '',
        name: '',
        detail: ''
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const _this = this;
      this.$fetch('system/role/list?roleName=' + this.name + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
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
    addClick() {
      this.clearForm();
      this.dialogFormVisible = true;
    },
    onSubmit() {
      const _this = this;
      this.$fetch('system/role/edit?id=' + this.form.id + '&roleName=' + this.form.name + '&description=' + this.form.detail).then(data => {
        console.log(data);
        _this.dialogFormVisible = false;
        _this.fetchData();
      });
    },
    clickEdit(index, val) {
      this.form.id = val.id;
      this.form.name = val.roleName;
      this.form.detail = val.description;
      this.dialogFormVisible = true;
    },
    clickDelete(index, val) {
      const _this = this;
      this.$confirm('确认删除这个角色么？').then(_ => {
        _this.$post('system/role/delete?id=' + val.id + '&_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6').then(data => {
          console.log(data);
          this.fetchData();
        });
      }).catch(_ => {});
    },
    clickAdoc(index, val) {},
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

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".dashboard-editor-container[data-v-b3de684e]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-b3de684e]{padding:8px}}", ""]);

// exports


/***/ })

});