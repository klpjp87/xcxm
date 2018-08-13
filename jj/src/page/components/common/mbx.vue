<template>
<div class = "mbxdiv">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in realList" :to="item.path" :key="item.id">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</div>
</template>
<script>
    export default {
        created(){
            this.getRoutePath();
        },
        data(){
            return {
                realList: [
                    
                ]
            }           
        },
        methods:{ 
            getRoutePath() {
            this.realList = this.$route.meta.routeList;  
            }
        },
        beforeRouteEnter(to,from, next) {
            next((vm) => {
            vm.realList = to.meta.routeList;
            });
        },
    }
</script>
<style>
    .mbxdiv{
        margin-top:20px;
        margin-bottom:10px;
        padding-bottom:10px;
        border-bottom: 1px solid rgb(255,208,75);
    }
</style>