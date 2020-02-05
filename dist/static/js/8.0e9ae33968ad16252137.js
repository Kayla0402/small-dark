webpackJsonp([8],{

/***/ 1268:
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
      "placeholder": "请输入用户名"
    },
    model: {
      value: (_vm.useName),
      callback: function($$v) {
        _vm.useName = $$v
      },
      expression: "useName"
    }
  }), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请输入真实姓名"
    },
    model: {
      value: (_vm.realName),
      callback: function($$v) {
        _vm.realName = $$v
      },
      expression: "realName"
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
  }, [_vm._v("新增")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "icon": "el-icon-plus",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.addShopClick($event)
      }
    }
  }, [_vm._v("新增服务商账号")])], 1)], 1), _vm._v(" "), _c('el-table', {
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
      "prop": "username",
      "label": "用户名",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "realname",
      "label": "真实姓名",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "province",
      "label": "省",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "city",
      "label": "市",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "area",
      "label": "区/县",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createTime",
      "label": "创建时间",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "loginCount",
      "label": "登录次数",
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
      "title": "新增用户",
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
      "label": "用户名："
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
      "label": "真实姓名："
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.realName),
      callback: function($$v) {
        _vm.$set(_vm.form, "realName", $$v)
      },
      expression: "form.realName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "省："
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
      "label": "市："
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择城市"
    },
    on: {
      "change": _vm.cityChange
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
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "区/县："
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择区/县"
    },
    model: {
      value: (_vm.form.area),
      callback: function($$v) {
        _vm.$set(_vm.form, "area", $$v)
      },
      expression: "form.area"
    }
  }, _vm._l((_vm.areaArr), function(item) {
    return _c('el-option', {
      key: item.name,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "角色："
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.role),
      callback: function($$v) {
        _vm.$set(_vm.form, "role", $$v)
      },
      expression: "form.role"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("管理员")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("服务商")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("苹果审核")])], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
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
  }, [_vm._v("取消")])], 1)], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增服务商账号",
      "visible": _vm.dialogFormSeverVisible,
      "size": "large",
      "label-width": "150px",
      "width": "80%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormSeverVisible = $event
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
      "label": "手机号："
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.phoneNum),
      callback: function($$v) {
        _vm.$set(_vm.form, "phoneNum", $$v)
      },
      expression: "form.phoneNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "用户名："
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
      "label": "真实姓名："
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.realName),
      callback: function($$v) {
        _vm.$set(_vm.form, "realName", $$v)
      },
      expression: "form.realName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开通省份："
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
      "label": "开通城市："
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择市"
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
      "click": _vm.onSubmitSever
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormSeverVisible = false
      }
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(959);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(69)("5b0ddc31", content, true);

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1298)

var Component = __webpack_require__(285)(
  /* script */
  __webpack_require__(939),
  /* template */
  __webpack_require__(1268),
  /* scopeId */
  "data-v-309eccd8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 939:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      useName: '',
      realName: '',
      list: [],
      provinceArr: [],
      cityArr: [],
      areaArr: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,
      dialogFormSeverVisible: false,

      form: {
        userName: '',
        realName: '',
        province: '',
        city: '',
        area: '',
        role: '',

        phoneNum: ''
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
    fetchAreaDataWithCity(cityId) {
      const _this = this;
      this.$fetch('area/child/' + cityId).then(data => {
        console.log(data);
        if (data.code === '200') {
          _this.areaArr = [];
          for (let i = 0; i < data.data.length; i++) {
            var json = {
              name: data.data[i].name,
              code: data.data[i].id
            };
            _this.areaArr.push(json);
          }
        }
      });
    },
    fetchData() {
      const _this = this;
      this.$fetch('system/user/list?userName=' + this.useName + '&realName=' + this.realName + '&start=' + (this.currentPage - 1) * 10 + '&length=10').then(data => {
        console.log(data);
        _this.allpage = data.recordsTotal;
        _this.list = [];
        _this.totalMoney = 0;

        for (let i = 0; i < data.data.length; i++) {
          var json = {
            num: data.data[i].userId,
            username: data.data[i].userName,
            realname: data.data[i].realName,
            province: data.data[i].province,
            city: data.data[i].city,
            area: data.data[i].district,
            createTime: data.data[i].createdDate,
            loginCount: data.data[i].loginCount
          };
          _this.list.push(json);
          _this.totalMoney += Number(data.data[i].chargeMoney);
        }
      });
    },
    fetchDetailData(userId) {
      const _this = this;
      this.$fetch('system/user/detail/' + userId).then(data => {
        console.log(data);
        if (data.code === '200') {
          _this.form.userName = data.data.userName;
          _this.form.realName = data.data.realName;
          _this.form.province = data.data.province;
          _this.form.city = data.data.city;
          _this.form.area = data.data.district;
          _this.form.role = data.data.roleId;
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
    addShopClick() {
      this.clearForm();
      this.dialogFormSeverVisible = true;
    },
    onSubmit() {
      const _this = this;

      var provinceId = '';
      var cityId = '';
      var areaId = '';

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

      for (let i = 0; i < _this.areaArr.length; i++) {
        if (_this.areaArr[i].name === _this.form.area) {
          areaId = _this.areaArr[i].code;
        }
      }
      // console.log('role is' + _this.form.role + ' provinceId is' + provinceId + ' cityId is' + cityId + ' areaId is' + areaId)

      // var json = {
      //   userName: this.form.userName,
      //   realName: this.form.realName,
      //   provinceId: provinceId,
      //   cityId: cityId,
      //   districtId: areaId,
      //   role: _this.form.role,
      //   userId: '',
      //   _csrf: 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6'
      // }
      this.$post('system/user/admin/save?userName=' + this.form.userName + '&realName=' + this.form.realName + '&provinceId=' + provinceId + '&cityId=' + cityId + '&districtId=' + areaId + '&role=' + _this.form.role)
      // this.$post('system/user/admin/add', json)
      .then(data => {
        console.log(data);
        this.dialogFormVisible = false;
        _this.fetchData();
      });
    },
    onSubmitSever() {
      const _this = this;

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

      this.$fetch('system/user/addagency/edit?phoneNum=' + this.form.phoneNum + '&userName=' + this.useName + '&realName=' + this.realName + '&provinceId=' + provinceId + '&cityId=' + cityId).then(data => {
        console.log(data);
        if (data.code === '200') {
          _this.$notify({
            title: '成功',
            message: '操作成功',
            type: 'success'
          });
          _this.dialogFormSeverVisible = false;
          _this.fetchData();
        } else {
          _this.$notify({
            title: '提示',
            message: data.message,
            type: 'error'
          });
        }
      });
    },

    provinceChange() {
      const _this = this;
      _this.form.city = '';
      _this.form.area = '';
      for (let i = 0; i < _this.provinceArr.length; i++) {
        if (_this.provinceArr[i].name === _this.form.province) {
          _this.fetchCityDataWithProvince(_this.provinceArr[i].code);
        }
      }
    },

    cityChange() {
      const _this = this;
      _this.form.area = '';
      for (let i = 0; i < _this.cityArr.length; i++) {
        if (_this.cityArr[i].name === _this.form.city) {
          _this.fetchAreaDataWithCity(_this.cityArr[i].code);
        }
      }
    },

    checkDetail(index, val) {
      this.clearForm();
      this.dialogFormVisible = true;
      this.fetchDetailData(val.num);
    },
    checkDelete(index, val) {
      const _this = this;
      this.$confirm('确认删除该用户么？').then(_ => {
        _this.$post('system/user/delete?' + 'userId=' + val.num).then(data => {
          console.log(data);
          if (data.code === '200') {
            _this.$notify({
              title: '成功',
              message: '操作成功',
              type: 'success'
            });
            this.fetchData();
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

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, ".dashboard-editor-container[data-v-309eccd8]{padding:32px;background-color:#f0f2f5;position:relative;.github-corner{position:absolute;top:0;border:0;right:0}.chart-wrapper{background:#fff;padding:16px 16px 0;margin-bottom:32px}}@media (max-width:1024px){.chart-wrapper[data-v-309eccd8]{padding:8px}}", ""]);

// exports


/***/ })

});