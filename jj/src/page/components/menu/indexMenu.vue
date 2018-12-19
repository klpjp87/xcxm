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
  import {mapMutations, mapState} from 'vuex'
  import {setStore} from '@/config/util'
//import {menu} from '../../../service/data'
//import {getindexmenu} from '../../../service/getData'
import {getindexmenu,token,getdict} from '@/service/getData'
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
    computed:{
      ...mapState([
          'user_name',
      ]),   
    },
    async mounted(){
        let res = await getindexmenu()
        //console.log("tooken:",await token())
        if(res.status == 1 ){
            this.items = res.data  
        }    
        console.log(JSON.stringify(this.items))  
        // res = await getdict("",1,1)
        //  console.log(JSON.stringify(res))
        // }else if(res.status==401){
        //    alert("登陆超时")
        //    this.$router.push({path:'/login'});
        // }
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