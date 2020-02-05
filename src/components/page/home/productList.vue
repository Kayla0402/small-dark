<template>
    <div class="dashboard-editor-container">
        <el-card class="box-card" style="height: 1300px;">
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
                    <el-select v-model="type"  placeholder="请选择产品类型">
                        <el-option
                                v-for="item in options"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name"
                        />
                    </el-select>
                    <el-input v-model="num" placeholder="请输入产品编号" style="width: 200px"></el-input>
                    <el-date-picker
                            style="width: 160px"
                            v-model="time"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                    <el-button icon="el-icon-search" type="primary" @click.prevent.stop="searchClick">搜索</el-button>
                </el-form-item>
            </el-form>

            <div >
                <el-row :gutter="24">
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" class="card_Pink" shadow="always">
                            <div style="padding: 5px;" class="grid-content">
                                <span style="color: white">合计进件单数</span>
                                <div class="bottom clearfix">
                                    <div class="card_detail" >{{jinjianCount}}</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" class="card_Green" shadow="always">
                            <div style="padding: 5px;">
                                <span style="color: white">合计进件金额</span>
                                <div class="bottom clearfix">
                                    <div class="card_detail" >￥{{jinjianMoney}}</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" class="card_Light_Green" shadow="always">
                            <div style="padding: 5px;">
                                <span style="color: white">合计放款单数</span>
                                <div class="bottom clearfix">
                                    <div class="card_detail" >{{loanCount}}</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px' }" class="card_Light_Blue" shadow="always">
                            <div style="padding: 5px;">
                                <span style="color: white">合计放款金额</span>
                                <div class="bottom clearfix">
                                    <div class="card_detail" >￥{{loanMoney}}</div>
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
                <el-table-column prop="name" label="产品名称" align="center">
                </el-table-column>
                <el-table-column prop="name2" label="名称" align="center">
                </el-table-column>
                <el-table-column prop="code" label="产品编号" align="center">
                </el-table-column>
                <el-table-column prop="applyCount" label="进件单数" align="center">
                </el-table-column>
                <el-table-column prop="applyMoney" label="进件金额" align="center">
                </el-table-column>
                <el-table-column prop="loanCount" label="放款单数" align="center" width="200px">
                </el-table-column>
                <el-table-column prop="loanMoney" label="放款金额" align="center">
                </el-table-column>
                <el-table-column label="详情" align="center" width="100px">
                    <!--<template scope="scope">-->
                        <!--<el-button icon="el-icon-edit" type="small" @click="checkDetail(scope.$index, scope.row)">详情</el-button>-->
                    <!--</template>-->
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
                province: '',
                city: '',
                type: '',
                num: '',
                time: '',
                options: [],

                list: [],
                listData: [],
                listData1: [],
                listData2: [],
                listData3: [],
                provinceArr: [],
                cityArr: [],
                cur_page: 1,
                allpage: 0,
                currentPage: 1,
                activeName: 'first',
                jinjianCount: 0,
                jinjianMoney: 0,
                loanCount: 0,
                loanMoney: 0,
                userType: localStorage.getItem("userType"),

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
            this.getCount();
            this.fetchProvinceData();
            this.fetchTypeData()
            this.fetchProductData()
        },
        methods: {
            getCount() {
                const _this = this
                this.$fetch('freshProduct/count')
                    .then((data) => {
                        console.log(data)
                        _this.jinjianCount = data.data.applyCount;
                        _this.jinjianMoney = data.data.applyAmountStr;
                        _this.loanCount = data.data.loanCount;
                        _this.loanMoney = data.data.loanAmountStr;

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
            fetchTypeData() {
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

                this.$fetch('freshProduct/data-list?provinceId=' + provinceId + '&cityId=' + cityId + '&productCode=' + this.num + '&oneCatId=' + typeId + '&start=' + (this.currentPage - 1) * 10 + '&length=10')
                    .then((data) => {
                        console.log(data)
                        _this.allpage = data.recordsTotal
                        _this.list = []
                        for (let i = 0; i < data.data.length; i++) {
                            var json = {
                                num: data.data[i].id,
                                name: data.data[i].name,
                                type: data.data[i].oneCatStr,
                                name2: data.data[i].threeCatStr,
                                code: data.data[i].productNo,
                                applyCount: data.data[i].applyCount,
                                applyMoney: data.data[i].applyAmountStr,
                                loanCount: data.data[i].loanCount,
                                loanMoney: data.data[i].loanAmountStr,
                            }
                            _this.list.push(json)
                        }
                    })
            },

            searchClick() {
                this.fetchProductData()
            },
            clearForm() {
                Object.assign(this.$data.form, this.$options.data().form)
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

