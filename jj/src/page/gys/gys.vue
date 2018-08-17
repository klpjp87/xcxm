
<template>
    <div class="level-bread">
      <mbx></mbx>
    <div>

      <el-button-group>
        <el-button  plain size="mini" icon="el-icon-plus" @click="opengys"></el-button>
        <el-button  plain icon="el-icon-edit" size="mini"></el-button>
        <el-button  plain icon="el-icon-delete" size="mini"></el-button>
      </el-button-group>

    <el-table :data="tableData" border style="width:100%" class="table" height=400>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column prop="mobilephone" label="手机">
      </el-table-column>
      <el-table-column prop="Fax" label="传真">
      </el-table-column>
    </el-table>
      <div class="block">
        <el-pagination
        :current-page = currentPage 
        :page-size = pagesize
          layout="prev, pager, next"
          :total=totalCount>
        </el-pagination>
      </div>
  </div>
        <router-link to='/index/gys/WareHouse'>11111</router-link>
        <router-view/>
        <el-dialog :title="dialogFormtitle" :visible.sync="dialogFormVisible" width = "400px">
          <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
              <el-input v-model="form.address" auto-complete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
              <el-input v-model="form.phone" auto-complete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="手机" :label-width="formLabelWidth">
              <el-input v-model="form.mobilephone" auto-complete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="传真" :label-width="formLabelWidth">
              <el-input v-model="form.Fax" auto-complete="off" class="input"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="commitgys" >确 定</el-button>
          </div>
        </el-dialog>
    </div>

</template>
 
<script>
    import mbx from '../components/common/mbx'
    import {addgys} from '../../service/getData'
    export default {
      name: "lelve-bread",

      data() {
        return {
          tableData: [{
            id:null,
            name: null,//姓名
            address:null,//地址
            phone:null,//电话
            mobilephone:null,//手机
            Fax:null,//传真
          }],
          form: {
            id:null,
            name: null,//姓名
            address:null,//地址
            phone:null,//电话
            mobilephone:null,//手机
            Fax:null,//传真
          },
          pagesize: 20,
          currentPage: 1,
          totalCount: 50,
          formLabelWidth:'90px', 
          dialogFormVisible:false, //弹窗   
          dialogFormtitle:"", 
          dialogFormtype:"",  
          }
      },
      components:{
        mbx,
      },
   async mounted(){
        // var data  = await warehouselimit(this.pagesize,this.currentPage)
        // this.tableData = data.data
        // data = await warehousecount()
        // this.totalCount  = data.count
        // console.log(await fetch('/supplier/findByMaterialId', {Material_id:2},"post"))
    },
        methods: {
            opengys(){
                console.log("addgys")
                this.dialogFormVisible = true
                this.dialogFormtitle = "添加供应商"
                this.dialogFormtype = "add"
            },
            commitgys(){
              if(this.dialogFormtype == "add"){
                console.log(this.form)
                addgys(this.form)
              }
            }
        },
    }
</script>
<style>

.el-breadcrumb__item{
  width:auto;
}
.el-button-group{
  float: right;
  margin-bottom: 5px;
}
.el-button{
  margin-bottom: 2px;
}

</style>
