<template>
  <div id="app" v-cloak>
    <router-view/>
    <alert-tip v-if="this.showAlert" @closeTip="closeAlert" :alertText="this.alertText"></alert-tip>
  </div>
</template>

<script>
import indexMenu from './page/components/menu/indexMenu'
  import alertTip from '@/page/components/common/alertTip'
  import {mapMutations, mapState} from 'vuex'
export default {
  name: 'App',
  components:{
    alertTip,
  },
  computed:{
    ...mapState([
        'showAlert', 'alertText'
    ]),   
  },
  methods: {
    ...mapMutations([
      'closeAlert'
    ]),
  },
}      
</script>

<style>
   /* 设置滚动条的样式 */

  ::-webkit-scrollbar {
    width: 1px;
  }
  /* 滚动槽 */

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #dddee1;
    border-radius: 10px;
  }
  /* 滚动条滑块 */

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #dddee1;
    -webkit-box-shadow: inset 0 0 6px #dddee1;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: #dddee1;
  }
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
[v-cloak] {
    display: none !important;
}
</style>
