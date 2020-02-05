<template>
  <div style="height: 400px">
    <el-form  label-width="60px">
      <el-form-item label="筛选：">
        <el-select v-model="province"  placeholder="请选择省份" @change="provinceChange" v-if="userType === '0'">
          <el-option
            v-for="item in options"
            :key="item.name"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
        <el-select v-model="city"  placeholder="请选择城市" @change="cityChange" v-if="userType === '0'">
          <el-option
            v-for="item in options1"
            :key="item.name"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
        <el-date-picker
          style="width: 160px"
          v-model="startTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">
          搜索
        </el-button>
      </el-form-item>
    </el-form>

    <div style="color: #606266;font-size: 15px;line-height: 40px;margin-top: 20px">当日新增</div>
    <div style="margin-top: 0px" v-if="userType === '0'">
      <el-row :gutter="24">
        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">注册数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{zhuceCount}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">白银会员数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{baiyinCount}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">黄金会员数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{goldMoney}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">钻石会员数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{zuanshiCount}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
            <div style="padding: 0px;" class="grid-content">
              <span style="color: white">进件单数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{jinjianCount}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">进件金额(万)</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{jinjianMoney}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">放款单数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{payoutCount}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">放款金额(万)</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{payoutMoney}}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>


    <div style="margin-top: 0px" v-if="userType === '1'">
      <el-row :gutter="24">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
            <div style="padding: 0px;" class="grid-content">
              <span style="color: white">进件单数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{jinjianCount}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">进件金额(万)</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{jinjianMoney}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">放款单数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{payoutCount}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">放款金额(万)</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{payoutMoney}}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--<div style="margin-top: 0px">-->
      <!--<el-row :gutter="24">-->
        <!--<el-col :span="3">-->
          <!--<el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">-->
            <!--<div style="padding: 14px;">-->
              <!--<img src="static/img/register.png" style="width: 30px;height: 30px">-->

              <!--<span style="color: black">注册数</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<div class="card_detail" >{{zhuceCount}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->

        <!--<el-col :span="3">-->
          <!--<el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">-->
            <!--<div style="padding: 14px;">-->
              <!--<img src="static/img/register.png" style="width: 30px;height: 30px">-->

              <!--<span style="color: black">白银会员数</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<div class="card_detail" >{{baiyinCount}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->

        <!--<el-col :span="3">-->
          <!--<el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">-->
            <!--<div style="padding: 14px;">-->
              <!--<span style="color: black">黄金会员数</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<div class="card_detail" >{{goldMoney}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->

        <!--<el-col :span="3">-->
          <!--<el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">-->
            <!--<div style="padding: 14px;">-->
              <!--<span style="color: black">钻石会员数</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<div class="card_detail" >{{zuanshiCount}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->

        <!--<el-col :span="3">-->
          <!--<el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">-->
            <!--<div style="padding: 14px;" class="grid-content">-->
              <!--<span style="color: black">进件单数</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<div class="card_detail" >{{jinjianCount}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->

        <!--<el-col :span="3">-->
          <!--<el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">-->
            <!--<div style="padding: 14px;">-->
              <!--<span style="color: black">进件金额(万)</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<div class="card_detail" >{{jinjianMoney}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->

        <!--<el-col :span="3">-->
          <!--<el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">-->
            <!--<div style="padding: 14px;">-->
              <!--<span style="color: black">放款单数</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<div class="card_detail" >{{payoutCount}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->

        <!--<el-col :span="3">-->
          <!--<el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">-->
            <!--<div style="padding: 14px;">-->
              <!--<span style="color: black">放款金额(万)</span>-->
              <!--<div class="bottom clearfix">-->
                <!--<div class="card_detail" >{{payoutMoney}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</div>-->



    <div style="color: #606266;font-size: 15px;line-height: 40px;margin-top: 20px">全部数据</div>
    <div style="margin-top: 0px" v-if="userType === '0'">
      <el-row :gutter="24">
        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
            <div style="padding: 0px;" class="grid-content">
              <span style="color: white">注册数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{zhuceCount1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">白银会员数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{baiyinCount1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">黄金会员数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{goldMoney1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">钻石会员数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{zuanshiCount1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
            <div style="padding: 0px;" class="grid-content">
              <span style="color: white">进件单数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{jinjianCount1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">进件金额(万)</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{jinjianMoney1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">放款单数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{payoutCount1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">放款金额(万)</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{payoutMoney1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>


    <div style="margin-top: 0px" v-if="userType === '1'">
      <el-row :gutter="24">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
            <div style="padding: 0px;" class="grid-content">
              <span style="color: white">进件单数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{jinjianCount1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">进件金额(万)</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{jinjianMoney1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">放款单数</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{payoutCount1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
            <div style="padding: 0px;">
              <span style="color: white">放款金额(万)</span>
              <div class="bottom clearfix">
                <div class="card_detail" >{{payoutMoney1}}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

        zhuceCount: 0,
        baiyinCount: 0,
        goldMoney: 0,
        zuanshiCount: 0,
        jinjianCount: 0,
        jinjianMoney: 0,
        payoutCount: 0,
        payoutMoney: 0,

        zhuceCount1: 0,
        baiyinCount1: 0,
        goldMoney1: 0,
        zuanshiCount1: 0,
        jinjianCount1: 0,
        jinjianMoney1: 0,
        payoutCount1: 0,
        payoutMoney1: 0,

        province: '',
        city: '',
        startTime: '',
        options: [],
        options1: [],
        userType: localStorage.getItem("userType"),

    }
  },
  created() {
      this.getRoleInfo();
      this.fetchProvinceData();
      this.fetchData();
  },
  methods: {
      getRoleInfo() {
          const _this = this
          this.$fetch('login-user-role')
              .then((data) => {
                  console.log(data)
                  if (data.data.roleName === 'ROLE_ADMIN') {
                      localStorage.setItem("userType", '0');
                      _this.userType = '0';

                  } else if (data.data.roleName === 'ROLE_SERVICE') {
                      localStorage.setItem("userType", '1');
                      _this.userType = '1';
                  }
                  localStorage.setItem("userRole", data.data.description);

              })
      },
      fetchProvinceData() {
          const _this = this
          this.$fetch('area/province')
              .then((data) => {
                  console.log(data)
                  if (data.code === '200') {
                      _this.options = []
                      for (let i = 0; i < data.data.length; i++) {
                          var json = {
                              name: data.data[i].name,
                              code: data.data[i].id
                          }
                          _this.options.push(json)
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
                      _this.options1 = []
                      for (let i = 0; i < data.data.length; i++) {
                          var json = {
                              name: data.data[i].name,
                              code: data.data[i].id
                          }
                          _this.options1.push(json)
                      }
                  }
              })
      },

      fetchData() {
          const _this = this

          var provinceId = ''
          var cityId = ''

          for (let i = 0; i < _this.options.length; i++) {
              if (_this.options[i].name === _this.province) {
                  provinceId = _this.options[i].code
              }
          }

          for (let i = 0; i < _this.options1.length; i++) {
              if (_this.options1[i].name === _this.city) {
                  cityId = _this.options1[i].code
              }
          }

          var beginTime = '';
          if (this.startTime.length > 0){
              var dateBegin = this.startTime.toLocaleDateString()
              beginTime = dateBegin.replace('/', '-').replace('/', '-')
          }


          this.$fetch('dashboard/totalData?provinceId=' + provinceId + '&cityId=' + cityId + '&startTimeStr=' + beginTime)
              .then((data) => {
                  console.log(data)
                  if (data.code === '200') {
                      var allJson = data.data.all
                      var todayJson = data.data.today

                      _this.zhuceCount = todayJson.registerCount
                      _this.baiyinCount = todayJson.silverMember
                      _this.goldMoney = todayJson.goldMember
                      _this.zuanshiCount = todayJson.diamondMember
                      _this.jinjianCount = todayJson.applicationCount
                      _this.jinjianMoney = todayJson.applicationAmount
                      _this.payoutCount = todayJson.loanCount
                      _this.payoutMoney = todayJson.loanAmount

                      _this.zhuceCount1 = allJson.registerCount
                      _this.baiyinCount1 = allJson.silverMember
                      _this.goldMoney1 = allJson.goldMember
                      _this.zuanshiCount1 = allJson.diamondMember
                      _this.jinjianCount1 = allJson.applicationCount
                      _this.jinjianMoney1 = allJson.applicationAmount
                      _this.payoutCount1 = allJson.loanCount
                      _this.payoutMoney1 = allJson.loanAmount

                  }
              })
      },

      provinceChange() {
          const _this = this
          for (let i = 0; i < _this.options.length; i++) {
              if (_this.options[i].name === _this.province) {
                  _this.fetchCityDataWithProvince(_this.options[i].code)
              }
          }
      },

      cityChange() {

      },

      searchClick() {
          this.fetchData()
      }
  }
}
</script>

<style scoped>
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

  .radio-label {
    font-size: 15px;
    color: #606266;
    line-height: 40px;
    padding: 0 0px 0 30px;
  }
</style>
