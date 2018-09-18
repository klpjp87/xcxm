<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import indexMenu from './page/components/menu/indexMenu'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
a{ 
  text-decoration: none;
}
.el-table__row td{
  padding:6px 0;
}
.el-input{
display: inline-block;
width:auto;
}
.el-input__inner,.el-input,.el-form-item{
    height:35px;
}
.block{
  float: right;
}
</style>
