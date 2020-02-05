<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1000px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-select v-model="type" placeholder="请选择会员类型">
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-select v-model="permission" placeholder="请选择权限">
            <el-option
              v-for="item in options1"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
          <el-input v-model="phoneNum" placeholder="请输入手机号码" style="width: 193px"></el-input>
          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
          <el-button type="primary" @click.prevent.stop="searchHighClick">高级筛选</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="num" label="编号">
        </el-table-column>
        <el-table-column prop="city" label="城市" align="center">
        </el-table-column>
        <el-table-column prop="type" label="会员类型" align="center">
        </el-table-column>
        <el-table-column prop="permission" label="权限" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="手机号码" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center" width="140px">
          <template scope="scope">
            <el-button icon="el-icon-coin" type="primary" @click="sendMember(scope.$index, scope.row)">赠送会员</el-button>
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

    <el-dialog title="省市信息" :visible.sync="dialogFormVisible" size="tiny" label-width="150px" >
      <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
        <el-form-item label="省">
          <el-select v-model="form.province"  placeholder="请选择省" @change="provinceChange">
            <el-option
                    v-for="item in provinceArr"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="市">
          <el-select v-model="form.city"  placeholder="请选择城市" >
            <el-option
                    v-for="item in cityArr"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="onSubmit" >搜索</el-button>
          <el-button @click="form.province = '';form.city = ''" >清空</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="会员充值" :visible.sync="dialogFormSendVisible"  label-width="150px" >
      <el-form ref="form" :model="form" label-width="100px" labelPosition="top">
        <el-form-item label="">
          <el-table :data="form.memberData"
                    style="width: 100%;"
                    border=""
                    highlight-current-row
                    @current-change="clickCurrentChange"
                    :header-cell-style="{background:'#37a6ee',color:'white',height:'40px'}"
                    :row-style="{height:'50px'}">
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <!--<el-table-column prop="type" label="类型" align="center">-->
            <!--</el-table-column>-->
            <el-table-column prop="price" label="价格" align="center">
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.note" placeholder="管理员赠送" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="onSave" >保存</el-button>
          <el-button @click="dialogFormSendVisible = false" >取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
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
        dialogFormSendVisible: false,

        form: {
            province: '',
            city: '',

            userId:'',
            memberLevelId:'',
            memberData:[],
            note:'',
        }
    }
  },
  created() {
    this.fetchProvinceData()
    this.getPosition()
    this.fetchData()
  },
  methods: {
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
      getPosition() {
          const _this = this
          this.$fetch('staff/position')
              .then((data) => {
                  console.log(data)
                  _this.options1 = []
                  var json1 = {
                      name: '全部权限',
                      code: '0'
                  }
                  _this.options1.push(json1)

                  for (let i = 0; i < data.data.length; i++) {
                      var json = {
                          name: data.data[i].name,
                          code: data.data[i].code
                      }
                      _this.options1.push(json)
                  }
              })
      },
      fetchData() {
          const _this = this
          var typeId = ''
          var positionId = ''

          if (_this.type === '全部类型') {
              typeId = ''
          } else if (_this.type === '白银会员') {
              typeId = '1'
          } else if (_this.type === '黄金会员') {
              typeId = '2'
          } else if (_this.type === '钻石会员') {
              typeId = '3'
          }

          if (_this.permission === '全部权限') {
              positionId = ''
          } else {
              for (let i = 0; i < _this.options1.length; i++) {
                  if (_this.options1[i].name === _this.permission) {
                      positionId = _this.options1[i].code
                  }
              }
          }

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

          this.$fetch('user/list?levelType=' + typeId + '&staffPosition=' + positionId + '&phone=' + this.phoneNum + '&provinceId=' + provinceId + '&cityId=' + cityId + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
              .then((data) => {
                  console.log(data)
                  _this.allpage = data.recordsTotal
                  _this.list = []

                  for (let i = 0; i < data.data.length; i++) {
                      var json = {
                          num: data.data[i].id,
                          city: data.data[i].city,
                          type: data.data[i].levelName,
                          permission: data.data[i].staffPositionName,
                          name: data.data[i].username,
                          phone: data.data[i].phone
                      }
                      _this.list.push(json)
                  }
              })
      },
      fetchMemberList(){
          const _this = this
          this.$fetch('member/level-list')
              .then((data) => {
                  console.log(data)
                  _this.form.memberData = [];

                  for (let i = 0; i < data.data.length; i++) {
                      var json = {
                          id: data.data[i].id,
                          name: data.data[i].gradeDescribe,
                          type: data.data[i].deleted,
                          price: data.data[i].price,
                      }
                      _this.form.memberData.push(json)
                  }
              })
      },
      fetchSeverWithMemberSend(){
          const _this = this
          this.$post('member/send-member?registerId=' + this.form.userId + '&memberLevelId=' + this.form.memberLevelId + '&remark=' + this.form.note)
              .then((data) => {
                  console.log(data)
                  if (data.code === '200') {
                      _this.$notify({
                          title: '成功',
                          message: '赠送成功',
                          type: 'success'
                      })

                      _this.dialogFormSendVisible = false;
                      _this.fetchData();

                  } else {
                      _this.$notify({
                          title: '提示',
                          message: data.message,
                          type: 'error'
                      })
                  }

              })
      },

      searchClick() {
          this.fetchData()
      },

      searchHighClick(){
          this.dialogFormVisible = true;
      },

      onSubmit(){
          this.dialogFormVisible = false;
          this.fetchData();
      },
      onSave(){
          const _this = this
          this.$confirm('确认提交么？')
              .then(_ => {
                  _this.fetchSeverWithMemberSend();
              })
              .catch(_ => {})

      },

      provinceChange() {
          const _this = this
          _this.form.city = ''
          for (let i = 0; i < _this.provinceArr.length; i++) {
              if (_this.provinceArr[i].name === _this.form.province) {
                  _this.fetchCityDataWithProvince(_this.provinceArr[i].code)
              }
          }
      },

      sendMember(index, val) {
          this.clearForm()
          this.form.userId = val.num;
          this.dialogFormSendVisible = true
          this.fetchMemberList();
      },
      clearForm() {
          Object.assign(this.$data.form, this.$options.data().form)
      },

      clickCurrentChange(val) {
//          console.log(val)
          this.form.memberLevelId = val.id;
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

<style scoped>
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
