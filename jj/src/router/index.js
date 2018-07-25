import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
Vue.use(Router)
const WareHouse = r => require.ensure([], () => r(require('../page/warehouse/warehouse')), 'warehouse')
const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const indexMenu = r => require.ensure([], () => r(require('../page/components/menu/indexMenu')), 'indexMenu')

export default new Router({
  routes: [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/index'
        },
        {
          path: '/index',
          children:[//首页菜单
            {
              path: 'WareHouse',
              component: WareHouse
            },
          ],
          component: index
      },
        {
          path: '/WareHouse',
          component: WareHouse
      },
    ]
  }
  ]
})
