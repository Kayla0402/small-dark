<template>
  <div class="dashboard-editor-container">
    <el-card class="box-card" style="height: 1000px;">
      <el-form  label-width="80px">
        <el-form-item :label="title">
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="gray" @change="switchChange">
          </el-switch>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        title:'未审核',
        value: '',
        id:'1',
        auth:'',
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
      fetchData() {
          const _this = this

          this.$fetch('review/ios/info')
              .then((data) => {
                  console.log(data)
                  if (data.code === '200') {
                      _this.id = data.data.id;
                      _this.auth = data.data.auth;

                      if (_this.auth === 1){
                          _this.title = '审核中';
                          _this.value = true;

                      } else {
                          _this.title = '未审核';
                          _this.value = false;
                      }
                  }
              })
      },
      switchChange(){
          const _this = this
          let status = this.value?1:2;

          this.$post('review/ios?id=' + this.id + '&auth=' + status)
              .then((data) => {
                  console.log(data)
                  if (data.code === '200') {
                      _this.$notify({
                          title: '提示',
                          message: '操作成功',
                          type: 'success'
                      })
                      _this.fetchData();
                  }
              })
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
