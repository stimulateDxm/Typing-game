//count组件配置
const countModules = {
    namespaced: true,
    actions: {
        jijia(context, value) {
            if (context.state.num % 2) {
                context.commit('jia', value)
            }
        },
        dedejia(context, value) {
            setTimeout(() => {
                context.commit('jia', value)
            }, 500)
        }
    },
    mutations: {
        jia(state, value) {
            state.num += value
        },
        jian(state, value) {
            state.num -= value
        },
    },
    state: {
        num: 0,
        subJect: "前端",
        school: "尚硅谷",
    },
    getters: {
        bigSum(state) {
            return state.num * 10
        }
    }
}
export default countModules