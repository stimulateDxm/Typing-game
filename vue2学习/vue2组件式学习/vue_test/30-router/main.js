
// 引入Vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// import Vuex from "vuex";
//引入
import VueRouter from 'vue-router'

import router from  './router'

Vue.config.productionTip=false
//应用插件
Vue.use(VueRouter)

new Vue({
    el:'#app',
    render:h=> h(App),
    router


})