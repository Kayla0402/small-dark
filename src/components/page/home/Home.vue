<template>
  <div class="dashboard-editor-container">
    <el-card class="box-card" style="height: 1300px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-select v-model="type"  placeholder="请选择业务类型">
            <el-option
              style="width: 240px"
              v-for="item in options"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
          <el-input v-model="name" placeholder="请输入产品名称" style="width: 200px"></el-input>
          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
          <!--<el-button icon="el-icon-plus" type="primary" @click.prevent.stop="addClick">新增</el-button>-->
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="num" label="编号">
        </el-table-column>
        <el-table-column prop="name" label="名称" align="center">
        </el-table-column>
        <el-table-column prop="type" label="产品类型" align="center">
        </el-table-column>
        <el-table-column prop="second" label="二级分类" align="center">
        </el-table-column>
        <el-table-column prop="screen" label="封面" align="center">
          <template scope="scope">
            <img :src="scope.row.screen" style="width: 80px;height: 80px">
          </template>
        </el-table-column>
        <el-table-column prop="fromUser" label="所属者" align="center">
        </el-table-column>
        <el-table-column prop="phoneNum" label="手机号" align="center">
        </el-table-column>
        <el-table-column prop="applyTime" label="上架时间" align="center" width="200px">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <el-table-column label="详情" align="center" width="100px">
          <template scope="scope">
            <el-button icon="el-icon-edit" type="small" @click="checkDetail(scope.$index, scope.row)">详情</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center"  width="100px" >
          <template scope="scope">
            <el-button icon="el-icon-edit" type="small" v-if="userType === '0'" @click="reviewOrder(scope.$index, scope.row)">审核</el-button>
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

    <el-dialog title="产品详情" :visible.sync="dialogFormVisible" size="large" label-width="150px" width="80%">
      <el-tabs v-model="activeName" type="card" @tab-click="handleTagClick">
        <el-tab-pane label="基础详情" name="first"></el-tab-pane>
        <el-tab-pane label="产品参数" name="second"></el-tab-pane>
        <el-tab-pane label="进件要求" name="third"></el-tab-pane>
        <el-tab-pane label="材料要求" name="four"></el-tab-pane>
        <el-tab-pane label="业务流程" name="five"></el-tab-pane>
      </el-tabs>

      <div v-if="activeName === 'first'">
        <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
          <el-form-item label="产品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="产品代码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="额度范围">
            <el-input v-model="form.moneyStart" style="width: 40%;float: left"></el-input>
            <div style="float: left;margin-left: 5px;margin-right: 5px">-</div>
            <el-input v-model="form.moneyEnd" style="width: 40%;float: left"></el-input>
            <div style="margin-left: 5px;float: left">万</div>
          </el-form-item>
          <el-form-item label="期限范围">
            <el-input v-model="form.timeStart" style="width: 40%;float: left"></el-input>
            <div style="float: left;margin-left: 5px;margin-right: 5px">-</div>
            <el-input v-model="form.timeEnd" style="width: 40%;float: left"></el-input>
            <div style="margin-left: 5px;float: left">个月</div>
          </el-form-item>
          <el-form-item label="产品优势">
            <div>{{form.advantage}}</div>
          </el-form-item>
          <el-form-item label="产品类型">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
          <el-form-item label="联系人姓名">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="联系人电话">
            <el-input v-model="form.phoneNum"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div v-if="activeName === 'second'">
        <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
          <el-form-item label="产品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="还款方式">
            <el-select v-model="form.payType" placeholder="请选择还款方式">
              <el-option label="等额本息" value="等额本息"></el-option>
              <el-option label="先息后本" value="先息后本"></el-option>
              <el-option label="等额本金" value="等额本金"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="服务费代收">
            <el-select v-model="form.receive" placeholder="请选择代收方式">
              <el-option label="不代收" value="不代收"></el-option>
              <el-option label="代收" value="代收"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="放款时间">
            <el-input v-model="form.payTime" style="width: 50%;float:left;"></el-input>
            <div style="float:left;margin-left: 5px">天以内</div>
          </el-form-item>
          <el-form-item label="借款费率">
            <el-input v-model="form.rateStart" style="width: 40%;float: left"></el-input>
            <div style="float: left;margin-left: 5px;margin-right: 5px">-</div>
            <el-input v-model="form.rateEnd" style="width: 40%;float: left"></el-input>
            <div style="margin-left: 5px;float: left">%</div>
          </el-form-item>
          <el-form-item label="放款成数">
            <el-input v-model="form.percentStart" style="width: 40%;float: left"></el-input>
            <div style="float: left;margin-left: 5px;margin-right: 5px">-</div>
            <el-input v-model="form.percentEnd" style="width: 40%;float: left"></el-input>
            <div style="margin-left: 5px;float: left">成</div>
          </el-form-item>
          <el-form-item label="放款倍数">
            <el-input v-model="form.beiStart" style="width: 40%;float: left"></el-input>
            <div style="float: left;margin-left: 5px;margin-right: 5px">-</div>
            <el-input v-model="form.beiEnd" style="width: 40%;float: left"></el-input>
            <div style="margin-left: 5px;float: left">倍</div>
          </el-form-item>
          <el-form-item label="服务费收取">
            <el-input v-model="form.severStart" style="width: 40%;float: left"></el-input>
            <div style="float: left;margin-left: 5px;margin-right: 5px">-</div>
            <el-input v-model="form.severEnd" style="width: 40%;float: left"></el-input>
            <div style="margin-left: 5px;float: left">%</div>
          </el-form-item>
        </el-form>
      </div>

      <div v-if="activeName === 'third'">
        <el-table :data="listData" border style="width: 100%;margin-top: 30px">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="attributeName" label="名称" >
          </el-table-column>
          <el-table-column prop="attributeValue" label="属性" >
          </el-table-column>
        </el-table>
      </div>

      <div v-if="activeName === 'four'">
        <el-table :data="listData1" border style="width: 100%;margin-top: 30px">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="name" label="必要材料" >
          </el-table-column>
        </el-table>
        <el-table :data="listData2" border style="width: 100%;margin-top: 30px">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="name" label="附加资料" >
          </el-table-column>
        </el-table>
      </div>

      <div v-if="activeName === 'five'">
        <el-table :data="listData3" border style="width: 100%;margin-top: 30px">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="name" label="名称" >
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        type: '',
        name: '',
        options: [],
        list: [],
        listData: [],
        listData1: [],
        listData2: [],
        listData3: [],
        cur_page: 1,
        allpage: 0,
        currentPage: 1,
        activeName: 'first',
        dialogFormVisible: false,
        userType:localStorage.getItem("userType"),

        form: {
            name: '',
            code: '',
            moneyStart: '',
            moneyEnd: '',
            timeStart: '',
            timeEnd: '',
            type: '',
            advantage: '',
            userName: '',
            phoneNum: '',

            payType: '',
            receive: '',
            payTime: '',
            rateStart: '',
            rateEnd: '',
            percentStart: '',
            percentEnd: '',
            beiStart: '',
            beiEnd: '',
            severStart: '',
            severEnd: ''

        }
    }
  },
  created() {
    this.fetchData()
    this.fetchProductData()
  },
  methods: {
    fetchData() {
      const _this = this
      this.$fetch('freshProduct/listCategoryOne')
        .then((data) => {
          console.log(data)
          _this.options = []
          var json1 = {
            name: '全部',
            code: '0'
          }
          _this.options.push(json1)

          for (let i = 0; i < data.length; i++) {
            var json = {
              name: data[i].name,
              code: data[i].id
            }
            _this.options.push(json)
          }
        })
    },

    fetchProductData() {
      const _this = this
      var typeId = ''
      if (_this.type === '全部') {
        typeId = ''
      } else {
        for (let i = 0; i < _this.options.length; i++) {
          if (_this.options[i].name === _this.type) {
            typeId = _this.options[i].code
          }
        }
      }

      this.$fetch('freshProduct/list?oneCategoryId=' + typeId + '&productName=' + this.name + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
        .then((data) => {
          console.log(data)
          _this.allpage = data.recordsTotal
          _this.list = []
          for (let i = 0; i < data.data.length; i++) {
            var json = {
              num: data.data[i].id,
              name: data.data[i].name,
              type: data.data[i].oneCategoryName,
              second: data.data[i].extendCategoryName,
              screen: data.data[i].icon,
              fromUser: data.data[i].releaseUserName,
              phoneNum: data.data[i].releaseUserPhone,
              applyTime: data.data[i].addTime,
              status: data.data[i].verifyStatus,
              detail: data.data[i].name
            }
            _this.list.push(json)
          }
        })
    },

    fetchDetailData(productId) {
      const _this = this
      this.$fetch('freshProduct/selectProductDetailForBms?productId=' + productId)
        .then((data) => {
          console.log(data)
            _this.form.name = data.name
            _this.form.code = data.productNo
            _this.form.moneyStart = data.amountStart
            _this.form.moneyEnd = data.amountEnd
            _this.form.timeStart = data.monthStart
            _this.form.timeEnd = data.monthEnd
            _this.form.type = data.oneCategoryName
            _this.form.userName = data.releaseUserName
            _this.form.phoneNum = data.releaseUserPhone


            _this.form.payTime = data.loanTimeLimit
            _this.form.rateStart = data.borrowRatioStart
            _this.form.rateEnd = data.borrowRatioEnd
            _this.form.percentStart = data.loanNumberStart
            _this.form.percentEnd = data.loanNumberEnd
            _this.form.beiStart = data.loanMultipleStart
            _this.form.beiEnd = data.loanMultipleEnd
            _this.form.severStart = data.serviceFeeRatioStart
            _this.form.severEnd = data.serviceFeeRatioEnd

            if (data.repaymentType === 10){
                _this.form.payType = '等额本息'
            } else if (data.repaymentType === 20){
                _this.form.payType = '先息后本'
            } else if (data.repaymentType === 30){
                _this.form.payType = '等本等息'
            }

            if (data.serviceCollectFlag === 10){
                _this.form.receive = '不代收'
            } else if (data.serviceCollectFlag === 20){
                _this.form.receive = '代收'
            }

            var array = []
            for (let i = 0; i < data.advantage.length; i++) {
                array.push(data.advantage[i].value)
            }
            _this.form.advantage = array.join(';')

            _this.listData = data.attributes
            _this.listData1 = []
            _this.listData2 = []
            _this.listData3 = []

            for (let i = 0; i < data.necessaryList.length; i++) {
                var json = {
                    name: data.necessaryList[i]
                }
                _this.listData1.push(json)
            }

            for (let i = 0; i < data.additionalList.length; i++) {
                var json1 = {
                    name: data.additionalList[i]
                }
                _this.listData2.push(json1)
            }

            for (let i = 0; i < data.bizProcessList.length; i++) {
                var json2 = {
                    name: data.bizProcessList[i]
                }
                _this.listData3.push(json2)
            }
        })
    },

    searchClick() {
      this.fetchProductData()
    },
    addClick() {
      this.clearForm()
      this.dialogFormVisible = true
    },
    checkDetail(index, val) {
      this.dialogFormVisible = true
      this.fetchDetailData(val.num)
    },
    reviewOrder(index, val) {
      const _this = this
      this.$confirm('确认提交审核？')
        .then(_ => {
          _this.$fetch('freshProduct/verifyForBms?id=' + val.num + '&shelves=' + 1)
            .then((data) => {
              console.log(data)
              if (data.code === '200') {
                _this.$notify({
                  title: '成功',
                  message: '操作成功',
                  type: 'success'
                })
                  _this.fetchData();
              } else {
                  _this.fetchData();

              }
            })
        })
        .catch(_ => {})
    },
    clearForm() {
      Object.assign(this.$data.form, this.$options.data().form)
    },
    handleTagClick(tab, event) {
      const _this = this
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.currentPage = val
      this.fetchProductData()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val
      this.fetchProductData()
    }
  }
}
</script>

<style  scoped>

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

