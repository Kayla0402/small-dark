<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1200px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-select v-model="province"  placeholder="请选择省" @change="provinceChange" v-if="userType === '0'">
            <el-option
              v-for="item in provinceArr"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
          <el-select v-model="city"  placeholder="请选择市" v-if="userType === '0'">
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

      <div >
        <el-row :gutter="23">
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
              <div style="padding: 0px;" class="grid-content">
                <span style="color: white">合计未提现笔数</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >{{notWithdrawCount}}</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
              <div style="padding: 0px;">
                <span style="color: white">合计已支付笔数</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >{{yetPayCount}}</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="5">
            <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
              <div style="padding: 0px;">
                <span style="color: white">合计待支付金额</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >￥{{awaitPayMoneyStr}}</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="5">
            <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
              <div style="padding: 0px;">
                <span style="color: white">合计未提现金额</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >￥{{notWithdrawMoneyStr}}</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="5">
            <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
              <div style="padding: 0px;">
                <span style="color: white">合计已支付金额</span>
                <div class="bottom clearfix">
                  <div class="card_detail" >￥{{yetPayMoneyStr}}</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="profitId" label="序号">
        </el-table-column>
        <el-table-column prop="productNo" label="产品编号" align="center">
        </el-table-column>
        <el-table-column prop="loanMoneyStr" label="放款金额" align="center" sortable>
        </el-table-column>
        <el-table-column prop="withdrawName" label="提现人" align="center">
        </el-table-column>
        <el-table-column prop="withdrawAccount" label="账户名称" align="center">
        </el-table-column>
        <el-table-column prop="withdrawBank" label="收款账号" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center">
        </el-table-column>
        <el-table-column prop="profitTypeStr" label="提现佣金类型" align="center">
        </el-table-column>
        <el-table-column prop="rate" label="佣金比例" align="center" sortable>
        </el-table-column>
        <el-table-column prop="moneyStr" label="提现金额" align="center" sortable>
        </el-table-column>
        <el-table-column prop="applyWithdrawTime" label="提现时间" align="center">
        </el-table-column>
        <el-table-column prop="payTime" label="支付时间" align="center">
        </el-table-column>
        <el-table-column prop="payStatusStr" label="支付状态" align="center">
        </el-table-column>
        <el-table-column label="审核" align="center" width="100px">
          <template scope="scope">
            <el-button icon="el-icon-edit" type="primary" v-if="scope.row.payStatus === 2" @click="checkReview(scope.$index, scope.row)">审核</el-button>
          </template>
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

    <el-dialog title="提现数据审核" :visible.sync="dialogFormVisible" size="small" label-width="150px" width="80%">
      <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
        <el-form-item label="提现用户：">
          <el-input v-model="form.userName" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="支付宝账户：">
          <el-input v-model="form.payAccount" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="支付宝姓名：">
          <el-input v-model="form.payName" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="身份证号：">
          <el-input v-model="form.idCard" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="提现金额：">
          <el-input v-model="form.money" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="审核备注：">
          <el-input v-model="form.note" ></el-input>
        </el-form-item>
        <el-form-item label="审核结果：">
          <el-radio-group v-model="form.result" >
            <el-radio label="审核通过">审核通过</el-radio>
            <el-radio label="审核拒绝">审核拒绝</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

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
        currentPage: 1,
        notWithdrawCount: 0,
        yetPayCount: 0,
        awaitPayMoneyStr: 0,
        notWithdrawMoneyStr: 0,
        yetPayMoneyStr:0,
        dialogFormVisible: false,
        userType: localStorage.getItem("userType"),

        form: {
            userId:'',
            userName:'',
            payAccount: '',
            payName: '',
            idCard: '',
            money: '',
            note: '',
            result: '',
        }

    }
  },
  created() {
      this.getCount()
      this.fetchProvinceData()
      this.fetchData()
  },
  methods: {
      getCount() {
          const _this = this
          this.$fetch('profit/count')
              .then((data) => {
                  console.log(data)
                  _this.notWithdrawCount = data.data.notWithdrawCount;
                  _this.yetPayCount = data.data.yetPayCount;
                  _this.awaitPayMoneyStr = data.data.awaitPayMoneyStr;
                  _this.notWithdrawMoneyStr = data.data.notWithdrawMoneyStr;
                  _this.yetPayMoneyStr = data.data.yetPayMoneyStr;

              })
      },
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

          this.$fetch('profit/list?provinceId=' + provinceId + '&cityId=' + cityId + '&payStatus=' + status + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
              .then((data) => {
                  console.log(data)
                  _this.allpage = data.recordsTotal
                  _this.list = []

                  for (let i = 0; i < data.data.length; i++) {
                      _this.list.push(data.data[i])
                  }
              })
      },

      fetchSeverWithReview(){
          const _this = this
          var status = '';
          if (this.form.result === '审核通过'){
              status = '2';
          } else if (this.form.result === '审核拒绝'){
              status = '3';
          }
          this.$fetch('profit/review?withdrawDetailId=' + this.form.userId + '&dealStatus=' + status + '&remark=' + this.form.note)
              .then((data) => {
                  console.log(data)
                  _this.dialogFormVisible = false;
                  _this.fetchData()
              })
      },

      showDetailData(val) {
          const _this = this

          _this.form.userId = val.withdrawDetailId;
          _this.form.userName = val.phone;
          _this.form.payAccount = val.withdrawAccount;
          _this.form.payName = val.withdrawName;
          _this.form.idCard = val.withdrawAccount;
          _this.form.money = val.money;
          _this.form.note = '';
          _this.form.result = '';

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

      onSubmit(){
          const _this = this
          this.$confirm('确认提交么？')
              .then(_ => {
                  _this.fetchSeverWithReview();
              })
              .catch(_ => {})
      },
      checkReview(index, val) {
          this.clearForm()
          this.dialogFormVisible = true
          this.showDetailData(val)
      },
      clearForm() {
          Object.assign(this.$data.form, this.$options.data().form)
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
    margin-top: 20px;color: white;font-size: 16px
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
