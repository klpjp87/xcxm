<template>
<div>
<el-menu
      default-active="2"
      class="ul"
      router
      @open="handleOpen"
      @close="handleClose"
      >
        <el-submenu v-for="item in items" :key="item.id" v-bind:index = item.index>
            <template slot="title">{{item.name}}</template>
            <el-menu-item  v-for="b in item.m"  :key="b.index"    v-bind:index = b.index >
                <router-link v-bind:to=b.index>{{b.name}}</router-link>
             </el-menu-item>
        </el-submenu>
</el-menu> 

</div>


</template>
<script>
//import {menu} from '../../../service/data'
import {getindexmenu} from '../../../service/getData'
export default {
   data(){
       return {
           items:[
               {
                   name:'',
                   index:"",
                   m:[
                        {
                            name:'',
                            index:""
                        },
                    ]
               },
           ]
       }
    }, 
    methods: {
        handleOpen(key, keyPath) {
       // console.log(key, keyPath);
    },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }
    },
    async mounted(){
        let res = await getindexmenu()
        if(res.status = 1 ){
            this.items = res.data
        }else{
            alert(status.data)
        }
        
    }
}
</script>
<style>
/* .el-aside{
    background-color:rgb(250,250,250);
}*/
.ul{
    border:none;
    
} 
.ul a,.el-submenu__title{
    color:#666666;
}
.el-aside{
    border-right:1px solid rgb(235,235,235); 
}
</style>