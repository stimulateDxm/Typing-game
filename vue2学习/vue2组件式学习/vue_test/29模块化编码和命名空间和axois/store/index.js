// 该文件用于创建 vuex 中最为核心的 store
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import countModules from "./const"
import  personModules from "./person"

export default new Vuex.Store({
    modules: {
        countAbout: countModules,
        personAbout: personModules
    }

})