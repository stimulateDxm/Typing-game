// 该文件是整个项目的入口文件
// 引入vue
import Vue from 'vue'
// 引入app组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false
// 创建vue实例对象---vm
new Vue({
  el:'#app',
  render: h => h(App),
  // mounted(){
  //   setTimeout(()=>{
  //     this.$destroy()
  //   },3000)
  // }
})
