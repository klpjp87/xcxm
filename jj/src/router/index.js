import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'

Vue.use(Router)
const WareHouse = r => require.ensure([], () => r(require('../page/warehouse/warehouse')), 'warehouse')
const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const indexMenu = r => require.ensure([], () => r(require('../page/components/menu/indexMenu')), 'indexMenu')
const gys = r => require.ensure([], () => r(require('../page/gys/gys')), 'gys')
const ware = r => require.ensure([], () => r(require('../page/ware/ware')), 'ware')
const custom = r => require.ensure([], () => r(require('../page/custom/custom')), 'custom')
const login = r => require.ensure([], () => r(require('../page//login')), 'login')

export default new Router({
  routes: [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            name:"首页",
            path: '',
            redirect: 'login'
            //redirect: '/index'
        },
        {
          name:"登录",
          path: 'login',
          component:login,
        },
        {
          path: 'index',
          children:[//首页菜单
            {
              name:"WareHouse",
              path: 'WareHouse',
              component: WareHouse
            },
            {
              name:"客户信息",
              path:'custom',
              component: custom,
            },
            {
              name:"商品信息",
              path:'ware',
              component: ware,
            },           
            {
              name:"供应商信息",
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
