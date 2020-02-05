<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1000px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-input v-model="name" placeholder="请输入名称" style="width: 150px"></el-input>
          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="id" label="编号" align="center">
        </el-table-column>
        <el-table-column prop="code" label="编码" align="center">
        </el-table-column>
        <el-table-column prop="sortOrder" label="序" align="center">
        </el-table-column>
        <el-table-column prop="type" label="类型" align="center">
          <template scope="scope">
            <div v-show="scope.row.type === 1">省/直辖区</div>
            <div v-show="scope.row.type === 2">城市</div>
            <div v-show="scope.row.type === 3">区县</div>
          </template>
        </el-table-column>
        <el-table-column prop="longitudes" label="经度" align="center">
        </el-table-column>
        <el-table-column prop="latitudes" label="纬度" align="center">
        </el-table-column>
        <el-table-column prop="lowerCase" label="首字母" align="center">
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

    <el-dialog title="地区信息详情" :visible.sync="dialogFormVisible" size="small" label-width="150px" width="80%">
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
            <el-form-item label="名称">
              <el-input v-model="form.name" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="排序">
              <el-input v-model="form.sort" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="是否热门城市">
              <el-select v-model="form.isHot" placeholder="请选择" style="width: 300px">
                <el-option
                  v-for="item in option1"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="经度">
              <el-input v-model="form.longitudes" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="form.type" placeholder="请选择" style="width: 300px" >
                <el-option
                  v-for="item in option2"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
            <el-form-item label="编码">
              <el-input v-model="form.code" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="简称">
              <el-input v-model="form.short" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="是否删除">
              <el-select v-model="form.isDelete" placeholder="请选择" style="width: 300px">
                <el-option
                  v-for="item in option3"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="纬度">
              <el-input v-model="form.latitude" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="父级">
              <el-input v-model="form.father" style="width: 300px" disabled=""></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-button type="primary" @click="onSubmit" >保存</el-button>
      <el-button @click="dialogFormVisible = false" >取消</el-button>

    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      list: [],
      option1: ['是', '否'],
      option2: ['省/直辖市', '城市', '区县'],
      option3: ['是', '否'],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,

      form: {
        id: '',
        name: '',
        sort: '',
        isHot: '',
        longitudes: '',
        type: '',

        code: '',
        short: '',
        isDelete: '',
        latitude: '',
        father: ''

      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const _this = this
      this.$fetch('area/list?name=' + this.name + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
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

      _this.form.name = val.name
      _this.form.sort = val.sortOrder
      _this.form.isHot = val.isHeat ? '是' : '否'
      _this.form.longitudes = val.longitudes
      _this.form.type = val.type

      _this.form.code = val.code
      _this.form.short = val.shortName
      _this.form.isDelete = val.deleted ? '是' : '否'
      _this.form.latitude = val.latitudes
      _this.form.father = val.parentId

      if (val.type === 1) {
        _this.form.type = '省/直辖市'
      } else if (val.type === 2) {
        _this.form.type = '城市'
      } else if (val.type === 3) {
        _this.form.type = '区县'
      }
    },
    searchClick() {
      this.fetchData()
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
          // _this.$post('system/user/delete?_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6' + '&userId=' + val.num)
          //   .then((data) => {
          //     console.log(data)
          //     if (data.code === '200') {
          //       _this.$notify({
          //         title: '成功',
          //         message: '操作成功',
          //         type: 'success'
          //       })
          //       this.fetchData()
          //     }
          //   })
        })
        .catch(_ => {})
    },
    clearForm() {
      Object.assign(this.$data.form, this.$options.data().form)
    },
    onSubmit() {
      const _this = this

      var heat = _this.form.isHot === '是' ? 1 : 0
      var deleted = _this.form.isDelete === '是' ? 1 : 0
      var type = '1'
      if (_this.form.type === '省/直辖市') {
        type = '1'
      } else if (_this.form.type === '城市') {
        type = '2'
      } else if (_this.form.type === '区县') {
        type = '3'
      }
      this.$post('area/save?id=' + _this.form.id + '&name=' + _this.form.name + '&code=' + _this.form.code + '&sortOrder=' + _this.form.sort + '&shortName=' + _this.form.short + '&isHeat=' + heat + '&deleted=' + deleted + '&longitudes=' + _this.form.longitudes + '&latitudes=' + _this.form.latitude + '&isDefault=' + type + '&_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6')
        .then((data) => {
          console.log(data)
          _this.dialogFormVisible = false
          _this.fetchData()
        })
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

