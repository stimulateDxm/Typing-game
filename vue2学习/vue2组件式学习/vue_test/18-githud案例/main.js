
// 引入Vue
import Vue from 'vue'
// 引入appp
import App from './App.vue'

Vue.config.productionTip=false

new Vue({
    el:'#app',
    render:h=> h(App),
   beforeCreate() {
        Vue.prototype.$bus=this
   }
})