<template>
  <div :class="className" style="margin-left: 0px;width: 100%;height: 400px;" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    }
  },
  data() {
    return {
      chart: null
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
      this.$fetch('dashboard/countApplyAndLoadAmount')
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            var timeArr = []
            var dataArr = []
            var dataArr1 = []
            for (let i = 0; i < data.data.length; i++) {
              timeArr.push(data.data[i][0])
              dataArr.push(data.data[i][1])
              dataArr1.push(data.data[i][2])
            }

            _this.chart = echarts.init(_this.$el, 'macarons')
            _this.chart.setOption({
              color: ['#4cabce', '#006699'],
              title: {
                text: '进件金额'
              },
              legend: {
                  x: 'center',
                  y: 'bottom',
                data: ['进件金额', '放款金额']
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
              xAxis: {
                type: 'category',
                data: timeArr,
                crosshair: true
              },
              yAxis: {
                title: {
                  text: '进件金额'
                }
              },
              plotOptions: {
                line: {
                  dataLabels: {
                    enabled: true
                  },
                  enableMouseTracking: true
                }
              },
              series: [{
                name: '进件金额',
                type: 'bar',
                barGap: 0,
                data: dataArr
              }, {
                name: '放款金额',
                type: 'bar',
                data: dataArr1
              }],
              credits: {
                enabled: false
              }
            })
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
