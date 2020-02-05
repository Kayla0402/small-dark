<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" style="padding:0px 0px 0;margin-bottom:32px;" v-if="userType === '0'" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <UserList />
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;" v-if="userType === '0'">
      <RegisterChart />
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <JingCountChart />
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <JingMoneyChart />
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <ActivityUserChart />
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;" v-if="userType === '0'">
      <!--<user-total-chart />-->
      <UserTotalChart />
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;" v-if="userType === '0'">
      <member-chart />
    </el-row>
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
// import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
// import PieChart from './components/PieChart'
// import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
// import BoxCard from './components/BoxCard'
import UserList from './components/UserList'
import RegisterChart from './components/RegisterChart'
import JingCountChart from './components/JingCountChart'
import JingMoneyChart from './components/JingMoneyChart'
import ActivityUserChart from './components/ActivityUserChart'
import UserTotalChart from './components/UserTotalChart'
import MemberChart from './components/MemberChart'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
    name: 'DashboardAdmin',
    components: {
        // GithubCorner,
        PanelGroup,
        // LineChart,
        // RaddarChart,
        // PieChart,
        // BarChart,
        // TransactionTable,
        // TodoList,
        // BoxCard,
        UserList,
        RegisterChart,
        JingCountChart,
        JingMoneyChart,
        ActivityUserChart,
        UserTotalChart,
        MemberChart

    },
    inject: ['reload'],
    data() {
        return {
            userType: localStorage.getItem("userType"),
            lineChartData: lineChartData.newVisitis
        }
    },
    created() {
        this.getRoleInfo();
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
        handleSetLineChartData(type) {
            this.lineChartData = lineChartData[type]
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
