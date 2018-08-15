
<template>
    <div class="level-bread">
      <mbx></mbx>
    <div>

      <el-button-group>
        <el-button  plain size="mini" icon="el-icon-plus"></el-button>
        <el-button  plain icon="el-icon-edit" size="mini"></el-button>
        <el-button  plain icon="el-icon-delete" size="mini"></el-button>
      </el-button-group>

    <el-table :data="tableData" border style="width:100%" class="table" height=400>
      <el-table-column prop="name" label="商品" width="180">
      </el-table-column>
      <el-table-column prop="price" label="价格">
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
    </div>
</template>
 
<script>
    import mbx from '../components/common/mbx'
    export default {
      name: "lelve-bread",

      data() {
        return {
          tableData: [{
            name: null,
            prices: null
          }],
          pagesize: 20,
          currentPage: 1,
          totalCount: 50,          
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
.el-table__row td{
  padding:6px 0;
}
</style>
