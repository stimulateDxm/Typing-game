// 该文件用于创建 vuex 中最为核心的 store
import Vue from 'vue'
// 引入 vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备 actions —— 用于响应组件中的动作
const actions = {
    jijia(context,value){
        if(context.state.num%2){
            context.commit('jia',value)
        }
    },
    dedejia(context,value){
        setTimeout(()=>{
            context.commit('jia',value)
        },500)
    }
}
// 准备 mutations —— 用于操作数据（state）
const mutations = {
    jia(state,value){
      state.num+=value
    },
    jian(state,value){
        state.num-=value
    },
    addperson(state,value){
      state.personList.unshift(value)
        console.log(value)
    }
}
// 准备 state —— 用于存储数据
const state = {
    num:0,
    subject:"前端",
    school:"尚硅谷",
    personList:[
        {id:'001',name:'张三'}
    ]
}
// 准备 getters —— 用于state数据进行加工
const getters={
bigSum(state){
return state.num*10
}}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})