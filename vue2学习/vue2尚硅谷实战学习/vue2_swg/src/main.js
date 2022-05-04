import Vue from 'vue'
import App from './App.vue'
//三级联动组件商品分类---全局组件
import TypeNav from "./components/TypeNav"
//第一个参数：全局组件的名字第二个参数：那一个组件
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from '@/router'
//引入store
import store from "./store"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  //注册路由：底下的写法KV一致省略V【router小定】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router

}).$mount('#app')
