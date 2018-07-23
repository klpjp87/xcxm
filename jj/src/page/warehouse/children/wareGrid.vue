<template>
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
          :total=totalCount
          >
        </el-pagination>
      </div>
  </div>
</template>

<script>
import {warehouselimit,warehousecount} from '../../../service/getData'
import {count} from '../../../service/getData'
import fetch from '../../../config/fetch'
  export default {
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
   async mounted(){
        var data  = await warehouselimit(this.pagesize,this.currentPage)
        this.tableData = data.data
        data = await warehousecount()
        this.totalCount  = data.count
        // fetch('/supplier/add', {
        //   name: "第二个",
        //   adress:"地址",
        //   mphone:110,
        //   tphone:120,
        //   fax:"130",
        //   Material:[{name:"第一个",price:10},{name:"第二个",price:10}]
        // },"post");
        console.log(await fetch('/supplier/findByMaterialId', {Material_id:2},"post"))
    },
  }
</script>
<style>
.block{
  float: right;
}

</style>