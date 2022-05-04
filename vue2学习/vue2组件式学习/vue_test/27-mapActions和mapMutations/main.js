
// 引入Vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// import Vuex from "vuex";

import vueResource from 'vue-resource'

import store from  './store/index'


Vue.config.productionTip=false

 Vue.use(vueResource)

new Vue({
    el:'#app',
    store,
    render:h=> h(App),


})