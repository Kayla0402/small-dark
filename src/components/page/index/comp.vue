<template>
    <div style="width: 100%;height: 100%">
        <div :id="id" :option="option"></div>
    </div>
</template>

<script>
    import HighCharts from 'highcharts'
    import highchartsMore from 'highcharts/highcharts-more';
    highchartsMore(HighCharts);
    export default {
        name: "Comp",
        props: {
            id: {
                type: String
            },
            option: {
                type: Object
            }
        },
        mounted() {
            HighCharts.chart(this.id, this.option)
        }
    }
</script>
