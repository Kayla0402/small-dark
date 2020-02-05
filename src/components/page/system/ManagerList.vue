<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1000px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-input v-model="useName" placeholder="请输入用户名" style="width: 150px"></el-input>
          <el-input v-model="realName" placeholder="请输入真实姓名" style="width: 150px"></el-input>
          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
          <el-button icon="el-icon-plus" type="primary" @click.prevent.stop="addClick">新增</el-button>
          <el-button icon="el-icon-plus" type="primary" @click.prevent.stop="addShopClick">新增服务商账号</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="num" label="编号">
        </el-table-column>
        <el-table-column prop="username" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="realname" label="真实姓名" align="center">
        </el-table-column>
        <el-table-column prop="province" label="省" align="center">
        </el-table-column>
        <el-table-column prop="city" label="市" align="center">
        </el-table-column>
        <el-table-column prop="area" label="区/县" align="center">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center">
        </el-table-column>
        <el-table-column prop="loginCount" label="登录次数" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button icon="el-icon-edit" type="small" @click="checkDetail(scope.$index, scope.row)">编辑</el-button>
            <el-button icon="el-icon-delete" type="small" @click="checkDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="allpage">
        </el-pagination>
      </div>

    </el-card>

    <el-dialog title="新增用户" :visible.sync="dialogFormVisible" size="small" label-width="150px" width="80%">
      <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
        <el-form-item label="用户名：">
          <el-input v-model="form.userName" ></el-input>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <el-input v-model="form.realName" ></el-input>
        </el-form-item>
        <el-form-item label="省：">
          <el-select v-model="form.province" placeholder="请选择省"  @change="provinceChange">
            <el-option
              v-for="item in provinceArr"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="市：">
          <el-select v-model="form.city" placeholder="请选择城市" @change="cityChange">
            <el-option
              v-for="item in cityArr"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="区/县：">
          <el-select v-model="form.area" placeholder="请选择区/县" >
            <el-option
              v-for="item in areaArr"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="角色：">
          <el-radio-group v-model="form.role" >
            <el-radio label="管理员">管理员</el-radio>
            <el-radio label="服务商">服务商</el-radio>
            <el-radio label="苹果审核">苹果审核</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="新增服务商账号" :visible.sync="dialogFormSeverVisible" size="large" label-width="150px" width="80%">
      <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
        <el-form-item label="手机号：">
          <el-input v-model="form.phoneNum" ></el-input>
        </el-form-item>
        <el-form-item label="用户名：">
          <el-input v-model="form.userName" ></el-input>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <el-input v-model="form.realName" ></el-input>
        </el-form-item>
        <el-form-item label="开通省份：">
          <el-select v-model="form.province" placeholder="请选择省"  @change="provinceChange">
            <el-option
              v-for="item in provinceArr"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="开通城市：">
          <el-select v-model="form.city" placeholder="请选择市">
            <el-option
              v-for="item in cityArr"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmitSever">保存</el-button>
          <el-button @click="dialogFormSeverVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useName: '',
      realName: '',
      list: [],
      roleArr: [],
      provinceArr: [],
      cityArr: [],
      areaArr: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,
      dialogFormSeverVisible: false,

      form: {
          userId:'',
          userName: '',
          realName: '',
          province: '',
          city: '',
          area: '',
          role: '',
          phoneNum: ''
      }
    }
  },
  created() {
      this.fetchWithRole();
    this.fetchProvinceData()
    this.fetchData()
  },
  methods: {
      fetchWithRole(){
          const _this = this
          this.$fetch('sys-role')
              .then((data) => {
                  console.log(data)
                  if (data.code === 200) {
                      _this.roleArr = []
                      for (let i = 0; i < data.data.length; i++) {
                          var json = {
                              name: data.data[i].description,
                              code: data.data[i].id
                          }
                          _this.roleArr.push(json)
                      }

                  }
              })
      },
    fetchProvinceData() {
      const _this = this
      this.$fetch('area/province')
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            _this.provinceArr = []
            for (let i = 0; i < data.data.length; i++) {
              var json = {
                name: data.data[i].name,
                code: data.data[i].id
              }
              _this.provinceArr.push(json)
            }
          }
        })
    },
    fetchCityDataWithProvince(proId) {
      const _this = this
      this.$fetch('area/child/' + proId)
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            _this.cityArr = []
            for (let i = 0; i < data.data.length; i++) {
              var json = {
                name: data.data[i].name,
                code: data.data[i].id
              }
              _this.cityArr.push(json)
            }
          }
        })
    },
    fetchAreaDataWithCity(cityId) {
      const _this = this
      this.$fetch('area/child/' + cityId)
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            _this.areaArr = []
            for (let i = 0; i < data.data.length; i++) {
              var json = {
                name: data.data[i].name,
                code: data.data[i].id
              }
              _this.areaArr.push(json)
            }
          }
        })
    },
    fetchData() {
      const _this = this
      this.$fetch('system/user/list?userName=' + this.useName + '&realName=' + this.realName + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
        .then((data) => {
          console.log(data)
          _this.allpage = data.recordsTotal
          _this.list = []
          _this.totalMoney = 0

          for (let i = 0; i < data.data.length; i++) {
            var json = {
                num: data.data[i].userId,
                username: data.data[i].userName,
                realname: data.data[i].realName,
                province: data.data[i].province,
                city: data.data[i].city,
                area: data.data[i].district,
                createTime: data.data[i].createdDate,
                loginCount: data.data[i].loginCount,
                roleId: data.data[i].roleId,
            }
            _this.list.push(json)
            _this.totalMoney += Number(data.data[i].chargeMoney)
          }
        })
    },

    fetchDetailData(userId) {
      const _this = this
      this.$fetch('system/user/detail/' + userId)
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
              _this.form.userId = data.data.userId
              _this.form.userName = data.data.userName
              _this.form.realName = data.data.realName
              _this.form.province = data.data.province
              _this.form.city = data.data.city
              _this.form.area = data.data.district
              for (let i = 0; i < _this.roleArr.length; i++) {
                  if (_this.roleArr[i].code === data.data.roleId) {
                      _this.form.role = _this.roleArr[i].name;
                  }
              }
          }
        })
    },

    searchClick() {
      this.fetchData()
    },
    addClick() {
      this.clearForm()
      this.dialogFormVisible = true
    },
    addShopClick() {
      this.clearForm()
      this.dialogFormSeverVisible = true
    },
    onSubmit() {
        const _this = this

        var roleId = ''
        var provinceId = ''
        var cityId = ''
        var areaId = ''

        for (let i = 0; i < _this.provinceArr.length; i++) {
            if (_this.provinceArr[i].name === _this.form.province) {
                provinceId = _this.provinceArr[i].code
            }
        }

        for (let i = 0; i < _this.cityArr.length; i++) {
            if (_this.cityArr[i].name === _this.form.city) {
                cityId = _this.cityArr[i].code
            }
        }

        for (let i = 0; i < _this.areaArr.length; i++) {
            if (_this.areaArr[i].name === _this.form.area) {
                areaId = _this.areaArr[i].code
            }
        }

        for (let i = 0; i < _this.roleArr.length; i++) {
            if (_this.roleArr[i].name === _this.form.role) {
                roleId = _this.roleArr[i].code
            }
        }

        this.$post('system/user/admin/save?userId=' + this.form.userId + '&userName=' + this.form.userName + '&realName=' + this.form.realName + '&provinceId=' + provinceId + '&cityId=' + cityId + '&districtId=' + areaId + '&role=' + roleId)
            .then((data) => {
                console.log(data)
                this.dialogFormVisible = false
                _this.fetchData()
            })
    },
    onSubmitSever() {
      const _this = this

      var provinceId = ''
      var cityId = ''

      for (let i = 0; i < _this.provinceArr.length; i++) {
        if (_this.provinceArr[i].name === _this.form.province) {
          provinceId = _this.provinceArr[i].code
        }
      }

      for (let i = 0; i < _this.cityArr.length; i++) {
        if (_this.cityArr[i].name === _this.form.city) {
          cityId = _this.cityArr[i].code
        }
      }

      this.$fetch('system/user/addagency/edit?phoneNum=' + this.form.phoneNum + '&userName=' + this.form.userName + '&realName=' + this.form.realName + '&provinceId=' + provinceId + '&cityId=' + cityId)
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            _this.$notify({
              title: '成功',
              message: '操作成功',
              type: 'success'
            })
            _this.dialogFormSeverVisible = false
            _this.fetchData()
          } else {
            _this.$notify({
              title: '提示',
              message: data.message,
              type: 'error'
            })
          }
        })
    },

    provinceChange() {
      const _this = this
      _this.form.city = ''
      _this.form.area = ''
      for (let i = 0; i < _this.provinceArr.length; i++) {
        if (_this.provinceArr[i].name === _this.form.province) {
          _this.fetchCityDataWithProvince(_this.provinceArr[i].code)
        }
      }
    },

    cityChange() {
      const _this = this
      _this.form.area = ''
      for (let i = 0; i < _this.cityArr.length; i++) {
        if (_this.cityArr[i].name === _this.form.city) {
          _this.fetchAreaDataWithCity(_this.cityArr[i].code)
        }
      }
    },

    checkDetail(index, val) {
        this.clearForm()
        this.dialogFormVisible = true
        this.fetchDetailData(val.num)
    },
    checkDelete(index, val) {
      const _this = this
      this.$confirm('确认删除该用户么？')
        .then(_ => {
          _this.$post('system/user/delete?' + 'userId=' + val.num)
            .then((data) => {
              console.log(data)
              if (data.code === '200') {
                _this.$notify({
                  title: '成功',
                  message: '操作成功',
                  type: 'success'
                })
                this.fetchData()
              }
            })
        })
        .catch(_ => {})
    },
    clearForm() {
      Object.assign(this.$data.form, this.$options.data().form)
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.currentPage = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val
      this.fetchData()
    }
  }
}
</script>

<style  scoped>

  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;

    .github-corner {
      position: absolute;
      top: 0px;
      border: 0;
      right: 0;
    }

    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }

  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
</style>
