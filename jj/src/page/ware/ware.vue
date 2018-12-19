
<template>
    <div class="level-bread">
      <mbx></mbx>
    <div>
<alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
      <el-button-group>
        <el-tooltip content="增加" placement="bottom" effect="light">
          <el-button  plain size="mini" icon="el-icon-plus" @click="openware"></el-button>
        </el-tooltip>
        <el-tooltip content="修改" placement="bottom" effect="light">
          <el-button  plain icon="el-icon-edit" size="mini" @click="editware"></el-button>
        </el-tooltip>
        <el-tooltip content="删除" placement="bottom" effect="light">
          <el-button  plain icon="el-icon-delete" size="mini" @click="deleteware"></el-button>
        </el-tooltip>
      </el-button-group>
    <!-- <el-table ref="multipleTable" v-loading='tableData.loading' :data="tableData.data" border  class="table" :width="tableData.width" :height='tableData.height' highlight-current-row @current-change="handleCurrentChange" @row-dblclick = "rowdblclcik" >
      <el-table-column v-for="item in tableData.columns" :label="item.label" :prop="item.prop" :key="item.prop" :width="item.width"></el-table-column>
    </el-table> -->

        <el-table ref="multipleTable" v-loading='tableData.loading' :data="tableData.data" border  class="table" :width="tableData.width" :height='tableData.height' highlight-current-row @current-change="handleCurrentChange" @row-dblclick = "rowdblclcik">
           <el-table-column v-for="(col,index) in cols" :type="col.type" :prop="col.prop" :label="col.label" :key="index"></el-table-column>
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
               
            <el-form-item label="商品名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="进货价" :label-width="formLabelWidth">
              <el-input v-model="form.purchase_price" auto-complete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="预售价" :label-width="formLabelWidth">
              <el-input v-model="form.price" auto-complete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="单位" :label-width="formLabelWidth">
              <el-input v-model="form.company" auto-complete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="供应商" :label-width="formLabelWidth">
              <el-input v-model="form.custom_name" auto-complete="off" class="input"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click= "dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="commitware" >确 定</el-button>
          </div>
        </el-dialog>
        
    </div>

</template>
 
<script>
    import mbx from '../components/common/mbx'
    import {addware,updateware,deletewarebyid} from '../../service/getData'
    import alertTip from '../components/common/alertTip'
    import {warelimit} from '../../service/getData'
    export default {
      name: "lelve-bread",

      data() {
        return {
            cols: [
              {prop:'index',label:'',type:"index"},
              {prop:'name',label:'商品名称',type:"normal"},
              {prop:'purchase_price',label:'进货价',type:"normal"},
              {prop:'price',label:'预售价',type:"normal"},
              {prop:'company',label:'单位',type:"normal"},
              {prop:'custom_name',label:'供应商',type:"normal"},
            ],
            tableData: {
              data:[],
              width:"100%",
              height:100,
              loading:false,
              showOverflowTooltip:true,

            }           ,
          // tableData: {
          //   data:[
          //       {
          //         id:1,
          //         name: 1,//商品名称
          //         purchase_price:1,//进货价
          //         price:1,//预售价
          //         company:1,//单位
          //         custom_id:1,//供应商
          //       }              
          //   ],
          //   width:"100%",
          //   height:100,
          //   loading:false,
          //   showOverflowTooltip:true,
          //   columns:[
          //     {prop:'name',label:'商品名称',type:"normal"},
          //     {prop:'purchase_price',label:'进货价',type:"normal"},
          //     {prop:'price',label:'预售价',type:"normal"},
          //     {prop:'company',label:'单位',type:"normal"},
          //     {prop:'custom_id',label:'供应商',type:"normal"},
          //   ]
          // },
          form: {
            id:null,
            name: null,//商品名称
            purchase_price:null,//进货价
            price:null,//预售价
            company:null,//单位
            custom_id:null,//供应商
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
         var data  = await warelimit(this.pagesize,this.currentPage)
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

        data = await warehousecount()
        this.totalCount  = data.count
    },
        methods: {
            async limit(currentPage){
              this.currentPage = currentPage
              var data  =  await warelimit(this.pagesize,this.currentPage)

              if(data.status==1){
                this.tableData = data.data
                this.totalCount = data.count
                //setTimeout(()=>{
                  this.$refs.multipleTable.setCurrentRow(this.tableData[0]);
                //},10) 
              }else{
                  this.showAlert = true
                  this.alertText = data.message          
              }
              // this.tableData = data.data
              // this.totalCount = data.count
              // this.currentRow = this.tableData[0]
              // this.$refs.multipleTable.setCurrentRow(this.tableData[0])
            },
            openware(){
                this.form = {
                  id:null,
                  name: null,//商品名称
                  purchase_price:null,//进货价
                  price:null,//预售价
                  company:null,//单位
                  custom_id:null,//供应商
                }
                this.dialogFormVisible = true
                this.dialogFormtitle = "添加商品"
                this.dialogFormtype = "add"
                console.log(this.currentPage)
            },
            editware(){
              console.log("editware")
              if(this.currentRow){
                console.log(this.currentRow)
              }
              this.dialogFormVisible = true
              this.dialogFormtitle = "修改供应商"
              this.dialogFormtype = "edit"
              this.form = this.currentRow

            },
            rowdblclcik(row,event){
              this.editware()
            },
            async commitware(){
              console.log(this.form)
              if(this.form.name == "" || this.form.name == null){
                this.showAlert = true
                this.alertText = "请输入商品姓名"
                return 
              }
              if(this.dialogFormtype == "add"){
                const res =  await addware(this.form)
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
                const res =await updateware(this.form)
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
            deleteware(){
              this.$confirm('此操作将永久删除 '+this.currentRow.name+', 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(async () => {
                const res = await deletewarebyid(this.currentRow.id)
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
                  name: null,//商品名称
                  purchase_price:null,//进货价
                  price:null,//预售价
                  company:null,//单位
                  custom_id:null,//供应商
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
