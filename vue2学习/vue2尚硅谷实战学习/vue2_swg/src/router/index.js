//配置路由的地方
import vue from 'vue'
//引入插件
import VueRouter from 'vue-router'
//引入路由组件
import Home from '../pages/Home'
import Login from '../pages/Login/'
import Refister from '../pages/Refister'
import Search from '../pages/Search'
//使用插件
vue.use(VueRouter);
// //先把VueRouter原型对象的push,先保存一份
// let originPush=VueRouter.prototype.push;
// //先把VueRouter原型对象的replace,先保存一份
// let originReplace=VueRouter.prototype.replace;
// //重写push|replace
// //第一个参数：告诉原来push方法，你去那里跳转（传递那些参数）
// VueRouter.prototype.push=function(location,resolve,reject){
//  if(resolve || reject){
//
//      originPush.call(this,location,resolve,reject);
// }else{
//      originPush.call(this.location,()=>{},()=>{});
// }
// }
// VueRouter.prototype.replace=function(location,resolve,reject){
//     if(resolve || reject){
//
//         originReplace.call(this,location,resolve,reject);
//     }else{
//         originReplace.call(this.location,()=>{},()=>{});
//     }
// }

//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: "/Home",
            component: Home,
            //路由元信息
            meta: {show: true}
        },
        {
            path: "/Login",
            component: Login,
            meta: {show: true}
        },
        {
            path: "/Refister",
            component: Refister,
            meta: {show: false}
        },
        {
            path: "/Search",
            component: Search,
            meta: {show: false},
            name: "Search"
        },
        //重定向，在项目跑起来的时候，访问/，立马让它跑起来
        {
            path: "/",
            redirect: "/Home"

        }
    ]
})