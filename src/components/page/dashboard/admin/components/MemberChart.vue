<template>
  <div :class="className" style="margin-top: 10px;width: 100%;height: 400px" />
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
      chart: null,
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
      this.$fetch('dashboard/countUserGroupByMemberLevelType')
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            var timeArr = data.data.legend
            var dataArr = data.data.series

            _this.chart = echarts.init(_this.$el, 'macarons')
            _this.chart.setOption({
              title: {
                text: '会员等级比例',
                subtext: ''
              },
              // color: ['#006699'],
              calculable: true,
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
              },
              toolbox: {
                show: false,
                feature: {
                  mark: { show: true },
                  dataView: { show: true, readOnly: false },
                  magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                  },
                  restore: { show: true },
                  saveAsImage: { show: true }
                }
              },
              legend: {
                x: 'center',
                y: 'bottom',
                data: timeArr
              },
              series: [{
                name: '会员等级数',
                type: 'pie',
                radius: [30, 90],
                center: ['50%', '40%'],
                roseType: 'area',
                data: dataArr
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
