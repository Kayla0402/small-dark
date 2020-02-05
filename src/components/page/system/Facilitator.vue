<template>
  <div class="dashboard-editor-container">
    <el-card class="box-card" style="height: 1000px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-input v-model="userName" placeholder="请输入用户名" style="width: 150px"></el-input>
          <el-input v-model="phoneNum" placeholder="请输入手机号" style="width: 150px"></el-input>
          <el-select v-model="type"  placeholder="请选择业务类型">
            <el-option
              style="width: 240px"
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
          <el-button icon="el-icon-plus" type="primary" @click.prevent.stop="addClick">新增代理业务</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="id" label="编号">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" align="center">
        </el-table-column>
        <el-table-column prop="agentCityStr" label="代理城市" align="center">
        </el-table-column>
        <el-table-column prop="agentTypeStr" label="业务类型" align="center">
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间" align="center">
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间" align="center">
        </el-table-column>
        <el-table-column prop="createdTime" label="创建时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button icon="el-icon-delete" type="small" @click="checkDelete(scope.$index, scope.row)">删除</el-button>
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

    <el-dialog title="设置服务商业务" :visible.sync="dialogFormVisible" size="small" label-width="150px" width="80%">
      <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
        <el-form-item label="选择服务商">
          <el-select v-model="form.name"  placeholder="请选择" style="width: 300px">
            <el-option
              style="width: 240px"
              v-for="item in options1"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="业务类型：">
          <el-select v-model="form.type"  placeholder="请选择" style="width: 300px">
            <el-option
              style="width: 240px"
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            style="width: 300px"
            v-model="form.startTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            style="width: 300px"
            v-model="form.endTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="onSubmit" >保存</el-button>
          <el-button @click="dialogFormVisible = false" >取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
        userName: '',
        phoneNum: '',
        type: '',
        options: ['全部类型', '车贷', '房贷', '信用贷', '供应链'],
        options1: [],
        list: [],
        cur_page: 1,
        allpage: 0,
        currentPage: 1,
        dialogFormVisible: false,

        form: {
            name: '',
            type: '',
            startTime: '',
            endTime: ''
        }
    }
  },
  created() {
      this.fetchSeverTypeData();
      this.fetchData();
  },
  methods: {
      fetchSeverTypeData() {
          const _this = this
          this.$fetch('agent/agent-user')
              .then((data) => {
                  console.log(data)
                  if (data.code === '200') {
                      _this.options1 = []
                      for (let i = 0; i < data.data.length; i++) {
                          var json = {
                              name: data.data[i].phoneNum + '-' + data.data[i].realName,
                              userName:data.data[i].userName,
                              realName:data.data[i].realName,
                              code: data.data[i].xiaoerUser,
                          }
                          _this.options1.push(json)
                      }
                  }
              })
      },
      fetchData() {
          const _this = this
          var type = ''
          if (_this.type === '全部类型') {
              type = ''
          } else if (_this.type === '车贷') {
              type = 'chedai'
          } else if (_this.type === '房贷') {
              type = 'fangdai'
          } else if (_this.type === '信用贷') {
              type = 'xindai'
          } else if (_this.type === '供应链') {
              type = 'gongyinglian'
          }
          this.$fetch('agent/list?userName=' + this.userName + '&phone=' + this.phoneNum + '&bizType=' + type + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
              .then((data) => {
                  console.log(data)
                  _this.allpage = data.recordsTotal
                  _this.list = []

                  for (let i = 0; i < data.data.length; i++) {
                      _this.list.push(data.data[i])
                  }
              })
      },

      searchClick() {
          this.fetchData()
      },
      addClick() {
          this.clearForm();
          this.dialogFormVisible = true
      },
      onSubmit() {
          const _this = this
          var type = ''
          var registerId = ''
          if (_this.form.type === '全部类型') {
              type = ''
          } else if (_this.form.type === '车贷') {
              type = 'chedai'
          } else if (_this.form.type === '房贷') {
              type = 'fangdai'
          } else if (_this.form.type === '信用贷') {
              type = 'xindai'
          } else if (_this.form.type === '供应链') {
              type = 'gongyinglian'
          }

          for (let i = 0; i < _this.options1.length; i++) {
              if (_this.options1[i].name === _this.form.name) {
                  registerId = _this.options1[i].code
              }
          }

          var dateBegin = this.form.startTime.toLocaleDateString()
          var beginTime = dateBegin.replace('/', '-').replace('/', '-')

          var dateEnd = this.form.endTime.toLocaleDateString()
          var endTime = dateEnd.replace('/', '-').replace('/', '-')

          this.$post('agent/saveAgencyBiz?startTimeStr=' + beginTime + '&endTimeStr=' + endTime + '&agentType=' + type + '&registerId=' + registerId)
              .then((data) => {
                  console.log(data)
                  if (data.code === '20000') {
                      _this.$notify({
                          title: '提示',
                          message: data.message,
                          type: 'error'
                      })
                      _this.fetchData()

                  } else {
                      _this.dialogFormVisible = false
                      _this.fetchData()
                  }

              })
      },

      checkDelete(index, val) {
          const _this = this
          this.$confirm('确认删除么？')
              .then(_ => {
                  _this.$post('agent/delete?id=' + val.id)
                      .then((data) => {
                          console.log(data)
                          if (data.code === '200') {
                              _this.$notify({
                                  title: '成功',
                                  message: '操作成功',
                                  type: 'success'
                              })
                              _this.fetchData()
                          }
                      })
              })
              .catch(_ => {})
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




