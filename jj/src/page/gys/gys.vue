
<template>
    <div class="level-bread">
      <mbx></mbx>
    <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="商品"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
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
            name: '',
            prices: ''
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
  width:100px;
}
</style>
