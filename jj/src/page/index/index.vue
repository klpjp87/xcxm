<template>
<el-container>
  <el-header>
  </el-header>
  <el-container>
    <el-aside width="201px">
        <div class = "menu">
            <index-Menu></index-Menu>
        </div>
    </el-aside>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
<!-- <div class= "index">
    <div class = "menu">
        <index-Menu></index-Menu>
    </div>
   <router-view/> 
    <router-view/> 
</div>
     -->
</template>
<script>
import indexMenu from '../components/menu/indexMenu'
export default {
    data(){
            return {
            }
        },
    components:{
        indexMenu
    },
}
</script>
<style>
.head{
    background-color:rgb(235,235,236);
}
.el-container{
    height:100%;
}
header{
    background-color:rgb(235,235,236);
}
</style>