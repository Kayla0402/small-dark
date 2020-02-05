<template>
    <div id="app">
        <!--<keep-alive >-->
        <router-view v-if="isRouterAlive"></router-view>
        <!--</keep-alive>-->
    </div>
</template>

<script>
    export default {
        provide (){
          return {
              reload: this.reload
          }
        },
        data () {
            return {
                isRouterAlive: true
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => (this.isRouterAlive = true))
            }
        }
    }
</script>
<style>
    @import "../static/css/main.css";

    /*@import "../static/css/color-dark.css";*/
</style>
