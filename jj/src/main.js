// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//////import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)
var routeList = []

router.beforeEach((to, from, next) => {
  var key = true
  routeList.forEach(( v,k ) => {
    if(v.name == to.name){
      routeList.splice(k + 1, routeList.length - k - 1)
      console.log(11,routeList)
      key = false
    }
  })
  // for(var v,k of routeList){
  //   if(v.name == to.name){
  //     routeList.splice(k + 1, routeList.length - k - 1)
  //     key = false
  //   }
  // }
  if(key){
    routeList.push(to)
  }
//   if (index !== -1) {
//     //如果存在路由列表，则把之后的路由都删掉
//     routeList.splice(index + 1, routeList.length - index - 1)
//   } else {
// //    console.log(to)
// //    if(to.name){
// //      routeList.push(to.name)
// //    }
//       routeList.push(to)
//   }
  to.meta.routeList = routeList
  next()
})
console.log(22,routeList)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
