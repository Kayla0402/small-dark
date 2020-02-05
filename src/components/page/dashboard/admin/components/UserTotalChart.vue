<template>
  <div style="width: 100%;height: 600px;">
    <el-radio-group v-model="radio" @change="dateChange">
      <el-radio-button label="注册数"></el-radio-button>
      <el-radio-button label="白银会员数"></el-radio-button>
      <el-radio-button label="黄金会员数"></el-radio-button>
      <el-radio-button label="钻石会员数"></el-radio-button>
    </el-radio-group>

    <!--<div :class="className" style="margin-top: 200px;width: 100%;height: 300px" />-->
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')

export default {
  props: {
    // className: {
    //   type: String,
    //   default: 'chart10'
    // }
  },
  data() {
    return {
      chart: null,
      radio: '注册数'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchData()
    })
  },
  methods: {
    fetchData() {
      const _this = this
      var url = 'dashboard/countRegUserGroupByCity'
      if (_this.radio === '注册数') {
        url = 'dashboard/countRegUserGroupByCity'
      } else if (_this.radio === '白银会员数') {
        url = 'dashboard/countRegUserGroupByCity?memberLevelType=1'
      } else if (_this.radio === '黄金会员数') {
        url = 'dashboard/countRegUserGroupByCity?memberLevelType=2'
      } else if (_this.radio === '钻石会员数') {
        url = 'dashboard/countRegUserGroupByCity?memberLevelType=3'
      }
      this.$fetch(url)
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            var cityArr = data.data.city
            var dataArr = data.data.count

            _this.chart = echarts.init(_this.$el, 'macarons')
            _this.chart.setOption({
              title: {
                text: '注册用户',
                subtext: ''
              },
              color: ['#006699'],
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              legend: {
                data: ['用户数']
              },
              xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
              },
              yAxis: {
                type: 'category',
                data: cityArr
              },
              series: [{
                name: '注册用户',
                type: 'bar',
                data: dataArr
              }]
            })
          }
        })
    },

    dateChange() {
      const _this = this
      _this.fetchData()
    }
  }
}
</script>

<style scoped>

</style>
