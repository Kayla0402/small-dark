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
      this.$fetch('dashboard/countActiveUser')
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            var timeArr = data.data.month
            var dataArr = data.data.active

            _this.chart = echarts.init(_this.$el, 'macarons')
            _this.chart.setOption({
              type: 'line',
              chart: {
                type: 'line'
              },
              title: {
                text: '活跃用户'
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
                data: timeArr
              },
              yAxis: {
                title: {
                  text: '活跃用户'
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
                name: '活跃用户',
                type: 'line',
                color: '#FF005A',
                data: dataArr
              }],
              credits: {
                enabled: false
              }
            })

          }
        })
    },
  }
}
</script>

<style scoped>

</style>
