<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1200px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-select v-model="city"  placeholder="请选择城市">
            <el-option
              v-for="item in options"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
          <el-input v-model="name" placeholder="请输入名称" style="width: 193px"></el-input>
          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
          <el-button icon="el-icon-plus" type="primary" @click.prevent.stop="addClick">新增</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="id" label="编号">
        </el-table-column>
        <el-table-column prop="provinceName" label="地区编号" align="center">
        </el-table-column>
        <el-table-column prop="licensePlate" label="牌照名称" align="center">
        </el-table-column>
        <el-table-column prop="sortOrder" label="排序顺序" align="center">
        </el-table-column>
        <el-table-column prop="createdTime" label="创建时间" align="center">
        </el-table-column>
        <el-table-column prop="createdUser" label="创建用户" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button icon="el-icon-edit" type="small" @click="checkDetail(scope.$index, scope.row)">编辑</el-button>
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

    <el-dialog title="车牌信息详情" :visible.sync="dialogFormVisible" size="small" label-width="150px" width="80%">
      <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
        <el-form-item label="省/直辖市">
          <el-select v-model="form.city"  placeholder="请选择" >
            <el-option
              style="width: 240px"
              v-for="item in options"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.sort" ></el-input>
        </el-form-item>
        <el-form-item label="牌照名称">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="是否热门：">
          <el-select v-model="form.isHot"  placeholder="请选择" >
            <el-option
              v-for="item in options1"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
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
      name: '',
      city: '',
      options: [],
      options1: ['是', '否'],
      list: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,

      form: {
        id: '',
        city: '',
        sort: '',
        name: '',
        isHot: ''
      }
    }
  },
  created() {
    this.fetchProvinceData()
    this.fetchData()
  },
  methods: {
    fetchProvinceData() {
      const _this = this
      this.$fetch('area/province')
        .then((data) => {
          console.log(data)
          if (data.code === '200') {
            _this.options = []
            var json1 = {
              name: '全部',
              code: '0'
            }
            _this.options.push(json1)
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
    fetchData() {
      const _this = this
      var provinceId = ''

      if (_this.city === '全部') {
        provinceId = ''
      } else {
        for (let i = 0; i < _this.options.length; i++) {
          if (_this.options[i].name === _this.city) {
            provinceId = _this.options[i].code
          }
        }
      }

      this.$fetch('license/list?provinceId=' + provinceId + '&licensePlate=' + this.name + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
        .then((data) => {
          console.log(data)
          _this.allpage = data.recordsTotal
          _this.list = []

          for (let i = 0; i < data.data.length; i++) {
            _this.list.push(data.data[i])
          }
        })
    },
    fetchDetailData(val) {
      const _this = this

      _this.form.id = val.id
      _this.form.city = val.provinceName
      _this.form.sort = val.sortOrder
      _this.form.isHot = val.isHot ? '是' : '否'
      _this.form.name = val.licensePlate
    },

    searchClick() {
      this.fetchData()
    },
    addClick() {
      this.clearForm()
      this.dialogFormVisible = true
    },
    onSubmit() {
      const _this = this
      var provinceId = ''

      if (_this.form.city === '全部') {
        provinceId = ''
      } else {
        for (let i = 0; i < _this.options.length; i++) {
          if (_this.options[i].name === _this.form.city) {
            provinceId = _this.options[i].code
          }
        }
      }
      var isHot = _this.form.isHot === '是' ? 1 : 0

      this.$post('license/save?id=' + this.form.id + '&provinceId=' + provinceId + '&sortOrder=' + this.form.sort + '&licensePlate=' + this.form.name + '&isHot=' + isHot + '&_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6')
        .then((data) => {
          console.log(data)
          _this.dialogFormVisible = false
          _this.fetchData()
        })
    },
    checkDetail(index, val) {
      this.clearForm()
      this.dialogFormVisible = true
      this.fetchDetailData(val)
    },
    checkDelete(index, val) {
      const _this = this
      this.$confirm('确认删除么？')
        .then(_ => {
          _this.$post('license/delete?_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6' + '&id=' + val.id)
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

<style scoped>

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



