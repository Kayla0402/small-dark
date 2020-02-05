<template>
  <div :class="className" style="margin-left: 0px;width: 100%;height: 440px;" />
  <!--:style="{height:height,width:width}"-->
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
//import resize from './mixins/resize'

const animationDuration = 6000

export default {
//  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data() {
    return {
      chart: null,
      labelOption: {
        normal: {
          show: false,
          position: 'insideBottom',
          distance: 5,
          align: 'left',
          verticalAlign: 'middle',
          rotate: 90,
          formatter: '{c}  {name|{a}}',
          fontSize: 16,
          rich: {
            name: {
              textBorderColor: '#fff'
            }
          }
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchData()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    fetchData() {
      const _this = this
      this.$fetch('dashboard/countRegisterAndMember')
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            var timeArr = []
            var dataArr = []
            var dataArr1 = []
            var dataArr2 = []
            var dataArr3 = []
            for (let i = 0; i < data.data.length; i++) {
              timeArr.push(data.data[i][0])
              dataArr.push(data.data[i][1])
              dataArr1.push(data.data[i][2])
              dataArr2.push(data.data[i][3])
              dataArr3.push(data.data[i][4])
            }

            _this.chart = echarts.init(_this.$el, 'macarons')
            _this.chart.setOption({
              title: {
                  text: '注册数',
              },
              calculable: true,
              legend: {
                  x: 'center',
                  y: 'bottom',
                  data: ['注册会员数', '白银会员数', '黄金会员数', '钻石会员数']
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              toolbox: {
                show: false,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                  mark: { show: true },
                  dataView: { show: true, readOnly: false },
                  magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                  restore: { show: true },
                  saveAsImage: { show: true }
                }
              },
              xAxis: [{
                type: 'category',
                data: timeArr,
                axisTick: { show: false }
              }],
              yAxis: [{
                type: 'value'
              }],
              plotOptions: {
                column: {
                  borderWidth: 0
                }
              },
              series: [{
                name: '注册会员数',
                type: 'bar',
                label: _this.labelOption,
                barGap: 0,
                data: dataArr
              }, {
                name: '白银会员数',
                type: 'bar',
                label: _this.labelOption,
                data: dataArr1
              }, {
                name: '黄金会员数',
                type: 'bar',
                label: _this.labelOption,
                data: dataArr2
              }, {
                name: '钻石会员数',
                type: 'bar',
                label: _this.labelOption,
                data: dataArr3
              }]
            })
          }
        })
    }

  }
}
</script>

<style scoped>

</style>
