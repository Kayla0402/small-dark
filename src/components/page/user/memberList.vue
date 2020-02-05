<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1100px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-select v-model="type"  placeholder="请选择会员类型">
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-select v-model="permission"  placeholder="请选择权限">
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

      <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always" style="width: 30%">
        <div style="padding: 10px;" class="grid-content">
          <span style="color: white">合计充值金额</span>
          <div class="bottom clearfix">
            <div class="card_detail" >￥{{totalMoney}}</div>
          </div>
        </div>
      </el-card>

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
        <el-table-column prop="count" label="充值次数" align="center" sortable>
        </el-table-column>
        <el-table-column prop="money" label="充值总金额" align="center" sortable>
        </el-table-column>
        <el-table-column prop="status" label="会员状态" align="center">
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

    <el-dialog title="车牌信息详情" :visible.sync="dialogFormVisible" size="tiny" label-width="150px" >
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
      totalMoney: '',
      dialogFormVisible: false,

        form: {
            province: '',
            city: '',
        }

    }
  },
  created() {
      this.getCount()
    this.fetchProvinceData()
    this.getPosition()
    this.fetchData()
  },
  methods: {
      getCount() {
          const _this = this
          this.$fetch('user/member-total-charge')
              .then((data) => {
                  console.log(data)
                  _this.totalMoney = data.data;

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

      this.$fetch('user/member_list?levelType=' + typeId + '&staffPosition=' + positionId + '&phone=' + this.phoneNum + '&provinceId=' + provinceId + '&cityId=' + cityId + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
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
              phone: data.data[i].phone,
              count: data.data[i].chargeCount,
              money: data.data[i].chargeMoney,
              status: data.data[i].memberStatusStr
            }
            _this.list.push(json)
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

      provinceChange() {
          const _this = this
          _this.form.city = ''
          for (let i = 0; i < _this.provinceArr.length; i++) {
              if (_this.provinceArr[i].name === _this.form.province) {
                  _this.fetchCityDataWithProvince(_this.provinceArr[i].code)
              }
          }
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

  .card_Pink{
    background-color: #ff9997;border-radius: 5px;padding: 10px;
  }
  .card_Green{
    background-color: #79d4cc;border-radius: 5px;padding: 10px;
  }

  .card_Light_Green{
    background-color: #7cd96a;border-radius: 5px;padding: 10px;
  }
  .card_Light_Blue{
    background-color: #88aedf;border-radius: 5px;padding: 10px;
  }

  .card_Light_purple{
    background-color: #eaa5d5;border-radius: 5px;padding: 10px;
  }

  .card_Light_blue1{
    background-color: #9be3ee;border-radius: 5px;padding: 10px;
  }
  .card_icon{
    font-size: 25px;color: white;padding-bottom: 20px
  }

  .card_detail{
    margin-top: 20px;color: white;font-size: 20px
  }

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

