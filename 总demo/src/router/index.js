//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Tictactoe from '../papes/TICTACTOE1/tictactoe'
import Animations from '../papes/typing/animations'
import HeavenABC from '../papes/heavenABC/home'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/tictactoe',
            component:Tictactoe
        },
        {
            path:'/animations',
            component:Animations
        },
        {
            path:'/heavenABC',
            component:HeavenABC
        }
    ]
})
