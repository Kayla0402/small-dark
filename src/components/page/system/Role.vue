<template>
  <div class="dashboard-editor-container">
    <!--<div style="font-size: 24px">进件数据</div>-->
    <el-card class="box-card" style="height: 1000px;">
      <el-form  label-width="10px">
        <el-form-item label="">
          <el-input v-model="name" placeholder="请输入名称" ></el-input>
          <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
          <el-button icon="el-icon-plus" type="primary" @click.prevent.stop="addClick">新增</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%;padding-top: 10px;margin-top: 10px" border="">
        <el-table-column prop="id" label="编号">
        </el-table-column>
        <el-table-column prop="roleName" label="角色名" align="center">
        </el-table-column>
        <el-table-column prop="description" label="描述" align="center">
        </el-table-column>
        <el-table-column prop="createdTime" label="创建时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center" style="width: 200px">
          <template scope="scope">
            <el-button icon="el-icon-edit" type="small" @click="clickEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button icon="el-icon-delete" type="small" @click="clickDelete(scope.$index, scope.row)">删除</el-button>
            <el-button icon="el-icon-menu" type="small" @click="clickAdoc(scope.$index, scope.row)">分配资源</el-button>
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

    <el-dialog title="系统角色详情" :visible.sync="dialogFormVisible" size="small" label-width="150px" width="80%">
      <el-form ref="form" :model="form" label-width="100px" style="width: 50%;margin-left: 20%;margin-top: 20px">
        <el-form-item label="角色名称：">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="描述：">
          <el-input v-model="form.detail" ></el-input>
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
      list: [],
      cur_page: 1,
      allpage: 0,
      currentPage: 1,
      dialogFormVisible: false,

      form: {
        id: '',
        name: '',
        detail: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const _this = this
      this.$fetch('system/role/list?roleName=' + this.name + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
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
      this.clearForm()
      this.dialogFormVisible = true
    },
    onSubmit() {
      const _this = this
      this.$fetch('system/role/edit?id=' + this.form.id + '&roleName=' + this.form.name + '&description=' + this.form.detail)
        .then((data) => {
          console.log(data)
          _this.dialogFormVisible = false
          _this.fetchData()
        })
    },
    clickEdit(index, val) {
      this.form.id = val.id
      this.form.name = val.roleName
      this.form.detail = val.description
      this.dialogFormVisible = true
    },
    clickDelete(index, val) {
      const _this = this
      this.$confirm('确认删除这个角色么？')
        .then(_ => {
          _this.$post('system/role/delete?id=' + val.id + '&_csrf=' + 'a73924c9-7aab-475a-8ae2-3e4c6d3568d6')
            .then((data) => {
              console.log(data)
              this.fetchData()
            })
        })
        .catch(_ => {})
    },
    clickAdoc(index, val) {

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


