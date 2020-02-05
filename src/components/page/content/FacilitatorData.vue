<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1200px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-input v-model="phoneNum" placeholder="请输入手机号码" style="width: 150px"></el-input>
          <el-select v-model="type"  placeholder="请选择产品类型" style="width: 150px">
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>

          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">
            搜索
          </el-button>
        </el-form-item>
      </el-form>

      <div >
        <el-row :gutter="24">
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
              <div style="padding: 5px;" class="grid-content">
                <span style="color: white">合计放款单数</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >{{jinjianCount}}</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
              <div style="padding: 5px;">
                <span style="color: white">合计放款金额</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >￥{{jinjianMoney}}</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
              <div style="padding: 5px;">
                <span style="color: white">合计产品数</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >{{productCount}}件</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
              <div style="padding: 5px;">
                <span style="color: white">合计会员数</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >{{memberCount}}人</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="num" label="编号">
        </el-table-column>
        <el-table-column prop="type" label="产品类型" align="center">
        </el-table-column>
        <el-table-column prop="account" label="服务商账号" align="center">
        </el-table-column>
        <el-table-column prop="endTime" label="到期时间" align="center">
        </el-table-column>
        <el-table-column prop="applyCount" label="产品上架数量" align="center" sortable>
        </el-table-column>
        <el-table-column prop="count" label="放款单数" align="center" sortable>
        </el-table-column>
        <el-table-column prop="money" label="放款金额" align="center" sortable>
        </el-table-column>
        <el-table-column prop="totalCount" label="会员邀请总数" align="center" sortable>
        </el-table-column>
        <el-table-column label="操作" align="center">
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
      type: '',
      phoneNum: '',
      list: [],
      options: ['全部类型', '车贷', '房贷', '信贷', '供应链'],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      jinjianCount: 0,
      jinjianMoney: 0,
      productCount: 0,
      memberCount: 0

    }
  },
  created() {
      this.getCount();
    this.fetchData()
  },
  methods: {
    fetchData() {
      const _this = this
      var typeId = ''

      if (_this.type === '全部类型') {
        typeId = ''
      } else if (_this.type === '车贷') {
        typeId = 'chedai'
      } else if (_this.type === '房贷') {
        typeId = 'fangdai'
      } else if (_this.type === '信贷') {
        typeId = 'xindai'
      } else if (_this.type === '供应链') {
        typeId = 'gongyinglian'
      }

      this.$fetch('agent/data-list?productType=' + typeId + '&phone=' + this.phoneNum + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
        .then((data) => {
          console.log(data)
          _this.allpage = data.recordsTotal
          _this.list = []

          for (let i = 0; i < data.data.length; i++) {
            var json = {
              num: data.data[i].id,
              type: data.data[i].productTypeStr,
              name: data.data[i].serviceName,
              account: data.data[i].servicePhone,
              endTime: data.data[i].deadLine,
              applyCount: data.data[i].productShelvesNo,
              count: data.data[i].loanNo,
              money: data.data[i].loanMoney,
              totalCount: data.data[i].inviteCount
            }
            _this.list.push(json)
          }
        })
    },
      getCount() {
          const _this = this
          this.$fetch('agent/count')
              .then((data) => {
                  console.log(data)
                  _this.jinjianCount = data.data.loanCount;
                  _this.jinjianMoney = data.data.loanMoneyStr;
                  _this.productCount = data.data.productCount;
                  _this.memberCount = data.data.memberCount;

              })
      },
    searchClick() {
      this.fetchData()
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
