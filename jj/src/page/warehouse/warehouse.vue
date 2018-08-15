<template>
<el-container>
    <el-table></el-table>
    <el-header>
        <el-menu :default-active="activeIndex" class="jj-menu" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            </el-menu>
    </el-header>
    <el-main>
        <form v-on:submit.prevent>
            <div class='jj-form-row'>
                <p>名称：</p><el-input v-model="shopdetail.name" placeholder="请输入商品名称" required name="shopname"></el-input>
            </div>
            <div class='jj-form-row'>
                <p>价格：</p><el-input  type="number" v-model="inpNum"  placeholder="请输入商品价格" required name="shopprice"></el-input>
            </div>
            <div class='jj-form-row'>
                <el-button type="primary" name="submit" @click='postpois' value="提交" >提交</el-button>
                <!--<input type="submit" name="submit" class="city_submit input_style" @click='postpois' value="提交">-->
            </div>
        </form>
        <ware-grid></ware-grid>
        <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
    </el-main>
</el-container>
</template>
<script>
import {savewarehouse} from '../../service/getData'
import wareGrid from './children/wareGrid'
import alertTip from '../components/common/alertTip'
export default {
    data(){
        return {
            shopdetail:{
                name:"",
                price:0
            },
            activeIndex:"1",
            showAlert: false,
             alertText: null,
        }
    },
    methods:{
       handleSelect(key, keyPath){
        console.log(key, keyPath);
        this.alertText = "110";
        this.showAlert = true;
        
      },
     async postpois(){
        let res = await savewarehouse(this.shopdetail)
        if(res.success){
            alert("保存成功")
        }else{
            alert(res.error)
        }
      }
    },
    mounted(){
        
    },
    components:{
        wareGrid,
        alertTip,
    },
    computed:{
                inpNum:{
                    get:function(){
                        if(this.shopdetail.price == 0){
                            return ""
                        }
                        return this.shopdetail.price;
                    
                    },
                    set:function(newValue){
                        if(newValue.replace(/[^\d.]/g,'')){
                            this.shopdetail.price=parseFloat(newValue.replace(/[^\d.]/g,''));
                            return 
                        }
                        this.shopdetail.price = 0
                    }
                }       
    }
}
</script>
<style>
.el-input{
    width:200px;
}
.el-input__inner{
    height:30px;
}
.jj-form-row{
    margin-top:5px;
}
.jj-form-row>p{
    display: inline-block;
    width:100px;
}
.el-button--primary{
    padding-top:5px;
    padding-bottom:5px;
}
span{
    width:150px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
</style>