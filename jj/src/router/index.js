import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'

Vue.use(Router)
const WareHouse = r => require.ensure([], () => r(require('../page/warehouse/warehouse')), 'warehouse')
const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const indexMenu = r => require.ensure([], () => r(require('../page/components/menu/indexMenu')), 'indexMenu')
const gys = r => require.ensure([], () => r(require('../page/gys/gys')), 'gys')

export default new Router({
  routes: [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            name:"首页",
            path: '',
            redirect: '/index'
        },
        {
          path: '/index',
          children:[//首页菜单
            {
              name:"WareHouse",
              path: 'WareHouse',
              component: WareHouse
            },
            {
              name:"供应商管理",
              path:'gys',
              component: gys,
              children:[
                {
                  name:"供应商",
                  path: 'WareHouse',
                  component: WareHouse
                },
              ]
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
