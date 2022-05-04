//person组件配置
import axios from 'axios'
  const personModules = {
    //https://api.uixsj.cn/hitokoto/get?type=social
//命名空间，namespaced:true,组件才能使用personAbout

    namespaced: true,
    actions: {
        addPersonWang(context,value){
            if(value.name.indexOf('王')!==0){
               alert("输入的名字必须姓王")
                return
            }else{
                context.commit('addperson',value)
            }
        },
        addPersonServer(context){
       axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
         response=>{
             context.commit('addperson',{id:Date.now(),name:response.data})
         },
           error=>{
             console.log(error.message)
           }
       )
        }
    },
    mutations: {
        addperson(state, value) {
                state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {
    firstPersonName(state){
        return state.personList[0].name
    }
    }
}
export default personModules