
<template>
    <div class="level-bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in realList" :to="item.path" :key="item.id">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-link to='/index/gys/WareHouse'>11111</router-link>
        <router-view/>
    </div>
</template>
 
<script>
    export default {
      name: "lelve-bread",
      created(){
        this.getRoutePath();
      },
      data() {
        return {
          realList: [
            
          ]
        }
      },
      methods:{
        getRoutePath() {
          this.realList = this.$route.meta.routeList;
          console.log(this.realList)        
          }
      },
      beforeRouteEnter(to,from, next) {
        next((vm) => {
          vm.realList = to.meta.routeList;
        });
      },
      // watch:{
      //   $route:function(newV,oldV) {
      //     this.realList =newV.meta.routeList;
      //   }
      // }
    }
</script>
<style>
.el-breadcrumb__item{
  width:100px;
}
</style>
