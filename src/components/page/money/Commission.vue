<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1200px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-select v-model="province"  placeholder="请选择省" @change="provinceChange">
            <el-option
              v-for="item in provinceArr"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
          <el-select v-model="city"  placeholder="请选择市">
            <el-option
              v-for="item in cityArr"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
          <el-select v-model="status"  placeholder="请选择支付状态">
            <el-option
              v-for="item in options2"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="id" label="序号">
        </el-table-column>
        <el-table-column prop="userName" label="推广人姓名" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="推广人账号" align="center">
        </el-table-column>
        <el-table-column prop="directInviteCount" label="直接推广人数" align="center" sortable>
        </el-table-column>
        <el-table-column prop="inDirectInviteCount" label="间接推广人数" align="center" sortable>
        </el-table-column>
        <el-table-column prop="typeStr" label="佣金类型" align="center">
        </el-table-column>
        <el-table-column prop="number" label="数量" align="center" sortable>
        </el-table-column>
        <el-table-column prop="moneyStr" label="金额" align="center" sortable>
        </el-table-column>
        <el-table-column label="详情" align="center">
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
  </div>
</template>

<script>
export default {
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
      currentPage: 1

    }
  },
  created() {
    this.fetchProvinceData()
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
            var json1 = {
              name: '全部',
              code: '0'
            }
            _this.provinceArr.push(json1)
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
            var json1 = {
              name: '全部',
              code: '0'
            }
            _this.cityArr.push(json1)
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
    fetchData() {
      const _this = this
      var provinceId = ''
      var cityId = ''

      if (_this.province === '全部') {
        provinceId = ''
      } else {
        for (let i = 0; i < _this.provinceArr.length; i++) {
          if (_this.provinceArr[i].name === _this.province) {
            provinceId = _this.provinceArr[i].code
          }
        }
      }

      if (_this.city === '全部') {
        cityId = ''
      } else {
        for (let i = 0; i < _this.cityArr.length; i++) {
          if (_this.cityArr[i].name === _this.city) {
            cityId = _this.cityArr[i].code
          }
        }
      }

      var status = ''
      if (_this.status === '全部类型') {
        status = ''
      } else if (_this.status === '待发放') {
        status = '0'
      } else if (_this.status === '同意支付') {
        status = '1'
      } else if (_this.status === '提现中') {
        status = '2'
      } else if (_this.status === '已提现') {
        status = '3'
      }

      this.$fetch('profit/list-all?provinceId=' + provinceId + '&cityId=' + cityId + '&payStatus=' + status + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
        .then((data) => {
          console.log(data)
          _this.allpage = data.recordsTotal
          _this.list = []

          for (let i = 0; i < data.data.length; i++) {
            _this.list.push(data.data[i])
          }
        })
    },

    searchClick() {
      this.fetchData()
    },

    provinceChange() {
      const _this = this
      _this.city = ''
      for (let i = 0; i < _this.provinceArr.length; i++) {
        if (_this.provinceArr[i].name === _this.province) {
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
