import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const WareHouse = r => require.ensure([], () => r(require('../page/warehouse/warehouse')), 'warehouse')
export default new Router({
  routes: [
    {
      path: '/',
      component: WareHouse
    }
  ]
})
