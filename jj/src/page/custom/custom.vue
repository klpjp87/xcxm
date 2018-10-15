
<template>
    <div class="level-bread">
      <mbx></mbx>
    <div>
<alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
      <el-button-group>
        <el-tooltip content="增加" placement="bottom" effect="light">
          <el-button  plain size="mini" icon="el-icon-plus" @click="opencustom"></el-button>
        </el-tooltip>
        <el-tooltip content="修改" placement="bottom" effect="light">        
          <el-button  plain icon="el-icon-edit" size="mini" @click="editcustom"></el-button>
        </el-tooltip>
        <el-tooltip content="删除" placement="bottom" effect="light">
          <el-button  plain icon="el-icon-delete" size="mini" @click="deletecustom"></el-button>
        </el-tooltip>
      </el-button-group>

    <el-table :data="tableData" ref="multipleTable" border style="width:100%" class="table" height=409 highlight-current-row @current-change="handleCurrentChange" @row-dblclick = "rowdblclcik" >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="mobilephone" label="手机"></el-table-column>
      <el-table-column prop="Fax" label="传真"></el-table-column>
    </el-table>
      <div class="block">
        <el-pagination
        background
        @current-change = "limit" 
        :current-page = currentPage 
        :page-size = pagesize
          layout="prev, pager, next"
          :total=totalCount>
        </el-pagination>
      </div>
  </div>
        <el-dialog :title="dialogFormtitle" :visible.sync="dialogFormVisible" width = "400px" >
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
            <el-button @click="emptyform">取 消</el-button>
            <el-button type="primary" @click="commitcustom" >确 定</el-button>
          </div>
        </el-dialog>
        
    </div>

</template>
 
<script>
    import mbx from '../components/common/mbx'
    import {addcustom,updatecustom,deletecustombyid} from '../../service/getData'
    import alertTip from '../components/common/alertTip'
    import {customlimit} from '../../service/getData'
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
          pagesize: 10,
          currentPage: 1,
          totalCount: 50,
          formLabelWidth:'90px', 
          dialogFormVisible:false, //弹窗   
          dialogFormtitle:"", 
          dialogFormtype:"",  
          showAlert: false,
          alertText: null,
          currentRow:null,
          currentkey:1,
          }
      },
      components:{
        mbx,
        alertTip,
      },
   async mounted(){
        this.limit(1)
        //  var data  = await customlimit(this.pagesize,this.currentPage)
        //  if(data.status==1){
        //     this.tableData = data.data
        //     this.totalCount = data.count
        //     //setTimeout(()=>{
        //       this.$refs.multipleTable.setCurrentRow(this.tableData[0]);
        //     //},10) 
        //  }else{
        //    console.log(data.message)
        //     this.showAlert = true
        //     this.alertText = data.message          
        //  }

        // data = await warehousecount()
        // this.totalCount  = data.count
        // console.log(await fetch('/supplier/findByMaterialId', {Material_id:2},"post"))
    },
        methods: {
            async limit(currentPage){
              console.log("currentPage"+currentPage)
              this.currentPage = currentPage
              var data  =  await customlimit(this.pagesize,this.currentPage)

              if(data.status==1){
                this.tableData = data.data
                this.totalCount = data.count
                //setTimeout(()=>{
                  this.$refs.multipleTable.setCurrentRow(this.tableData[0]);
                //},10) 
              }else{
                console.log(data.message)
                  this.showAlert = true
                  this.alertText = data.message          
              }
              // this.tableData = data.data
              // this.totalCount = data.count
              // this.currentRow = this.tableData[0]
              // this.$refs.multipleTable.setCurrentRow(this.tableData[0])
            },
            opencustom(){
                console.log("addcustom")
                this.form = {
                  id:null,
                  name: null,//姓名
                  address:null,//地址
                  phone:null,//电话
                  mobilephone:null,//手机
                  Fax:null,//传真
                }
                this.dialogFormVisible = true
                this.dialogFormtitle = "添加客户"
                this.dialogFormtype = "add"
                console.log(this.currentPage)
            },
            editcustom(){
              console.log("editcustom")
              if(this.currentRow){
                console.log(this.currentRow)
              }
              this.dialogFormVisible = true
              this.dialogFormtitle = "修改客户"
              this.dialogFormtype = "edit"
              this.form = this.currentRow

            },
            rowdblclcik(row,event){
              this.editcustom()
            },
            async commitcustom(){
              console.log(this.form)
              if(this.form.name == "" || this.form.name == null){
                this.showAlert = true
                this.alertText = "请输入姓名"
                return 
              }
              if(this.dialogFormtype == "add"){
                const res =  await addcustom(this.form)
                if(res.status == 1 ){
                  this.emptyform()
                  // this.showAlert = true
                  // this.alertText = '添加成功'
                  // setTimeout(()=>{
                  //   this.showAlert = false
                  //   this.dialogFormVisible = false
                  // },3000)  
                  this.showAlert = false
                  this.dialogFormVisible = false 
                  this.limit(this.currentPage)
                  this.$message({
                    type: 'success',
                    message: '添加成功!'
                  });                      
                }else{
                  this.showAlert = true
                  this.alertText = res.message
                }
              }else if(this.dialogFormtype == "edit"){
                const res =await updatecustom(this.form)
                if(res.status == 1 ){
                  // this.showAlert = true
                  // this.alertText = '修改成功'
                  // setTimeout(()=>{
                  //   this.showAlert = false
                  //   this.dialogFormVisible = false
                  // },3000)      
                  this.showAlert = false
                  this.dialogFormVisible = false 
                  this.$message({
                    type: 'success',
                    message: '修改成功!'
                  });           
                  this.emptyform()
                }else{
                  this.showAlert = true
                  this.alertText = res.message
                }
              }
            },
            deletecustom(){
              this.$confirm('此操作将永久删除 '+this.currentRow.name+', 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(async () => {
                const res = await deletecustombyid(this.currentRow.id)
                if(res.status == 1 ){
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                }else{
                  this.$message({
                    type: 'error',
                    message:res.message
                  });                  
                }
                //刷新table
                if((this.currentPage - 1) * this.pagesize >= this.totalCount - 1){this.currentPage= this.currentPage -1}
                this.limit(this.currentPage)
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
              });
            },
            //清空form
            emptyform(){
              this.form = {
                  id:null,
                  name: null,//姓名
                  address:null,//地址
                  phone:null,//电话
                  mobilephone:null,//手机
                  Fax:null,//传真
                }
            },
            daigclose(){
              emptyform()
              this.dialogFormVisible = false
            },
            //选择行
            handleCurrentChange(val){
              this.currentRow = val;
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
.block{
  margin-top:3px;
}
</style>
