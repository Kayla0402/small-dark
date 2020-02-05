<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <!--<div class="card-panel" @click="handleSetLineChartData('newVisitis')">-->
        <!--<div class="card-panel-icon-wrapper icon-people">-->
          <!--<svg-icon icon-class="peoples" class-name="card-panel-icon" />-->
        <!--</div>-->
        <!--<div class="card-panel-description">-->
          <!--<div class="card-panel-text">-->
            <!--产品上架审核-->
          <!--</div>-->
          <!--<count-to :start-val="0" :end-val="0" :duration="2600" class="card-panel-num" />-->
        <!--</div>-->
      <!--</div>-->
      <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
        <div style="padding: 14px;" class="grid-content">
          <span style="color: rgba(0, 0, 0, 0.45);">产品上架审核</span>
          <div class="bottom clearfix">
            <div class="card_detail" >{{review}}</div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <!--<div class="card-panel" @click="handleSetLineChartData('messages')">-->
        <!--<div class="card-panel-icon-wrapper icon-message">-->
          <!--<svg-icon icon-class="money" class-name="card-panel-icon" />-->
        <!--</div>-->
        <!--<div class="card-panel-description">-->
          <!--<div class="card-panel-text">-->
            <!--会员提现-->
          <!--</div>-->
          <!--<count-to :start-val="0" :end-val="0" :duration="3000" class="card-panel-num" />-->
        <!--</div>-->
      <!--</div>-->
      <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
        <div style="padding: 14px;" class="grid-content">
          <span style="color: rgba(0, 0, 0, 0.45)">会员提现</span>
          <div class="bottom clearfix">
            <div class="card_detail" >{{withdraw}}</div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <!--<div class="card-panel" @click="handleSetLineChartData('purchases')">-->
        <!--<div class="card-panel-icon-wrapper icon-money">-->
          <!--<svg-icon icon-class="peoples" class-name="card-panel-icon" />-->
        <!--</div>-->
        <!--<div class="card-panel-description">-->
          <!--<div class="card-panel-text">-->
            <!--今日活跃人数-->
          <!--</div>-->
          <!--<count-to :start-val="0" :end-val="0" :duration="3200" class="card-panel-num" />人-->
        <!--</div>-->
      <!--</div>-->
      <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
        <div style="padding: 14px;" class="grid-content">
          <span style="color: rgba(0, 0, 0, 0.45)">今日活跃人数</span>
          <div class="bottom clearfix">
            <div class="card_detail" >{{user}}人</div>
          </div>
        </div>
      </el-card>
    </el-col>
    <!--<el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">-->
      <!--<div class="card-panel" @click="handleSetLineChartData('shoppings')">-->
        <!--<div class="card-panel-icon-wrapper icon-shopping">-->
          <!--<svg-icon icon-class="shopping" class-name="card-panel-icon" />-->
        <!--</div>-->
        <!--<div class="card-panel-description">-->
          <!--<div class="card-panel-text">-->
            <!--Shoppings-->
          <!--</div>-->
          <!--<count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />-->
        <!--</div>-->
      <!--</div>-->
    <!--</el-col>-->
  </el-row>
</template>

<script>
//import CountTo from 'vue-count-to'

export default {
    data() {
        return {
            review: 0,
            withdraw: 0,
            user: 0,
        }
    },
    mounted() {
        this.fetchData();
    },
    components: {
//    CountTo
    },
    methods: {
      fetchData() {
          const _this = this
          this.$fetch('dashboard/todo-data')
              .then((data) => {
                  console.log(data)
                  if (data.code === '200') {
                      _this.review = data.data.productShelvesReview;
                      _this.withdraw = data.data.memberWithdraw;
                      _this.user = data.data.activeUser;

                  }
              })
       },
    }
}
</script>

<style scoped>
  .card_Pink{
    background-color: white;border-radius: 5px;padding: 10px;
  }
  .card_Green{
    background-color: white;border-radius: 5px;padding: 10px;
  }
  .card_Light_Green{
    background-color: white;border-radius: 5px;padding: 10px;
  }
  .card_Light_Blue{
    background-color: white;border-radius: 5px;padding: 10px;
  }
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    /*&:hover {*/
      /*.card-panel-icon-wrapper {*/
        /*color: #fff;*/
      /*}*/

      /*.icon-people {*/
        /*background: #40c9c6;*/
      /*}*/

      /*.icon-message {*/
        /*background: #36a3f7;*/
      /*}*/

      /*.icon-money {*/
        /*background: #f4516c;*/
      /*}*/

      /*.icon-shopping {*/
        /*background: #34bfa3*/
      /*}*/
    /*}*/

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
