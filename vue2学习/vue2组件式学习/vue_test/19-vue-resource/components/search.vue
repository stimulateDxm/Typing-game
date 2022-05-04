<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text"
         placeholder="enter the name you search"
         v-model="keyWord"
        />&nbsp;
        <button @click="seachUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data(){
    return {
      keyWord:''
    }
  },
  methods:{
    seachUsers(){
      // 请求更新前的list数据
      this.$bus.$emit('getUsers',{isFirst:false,isLoading:true,errMsg:'',users:[]})
   axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
       response=> {
         // console.log('请求成功', response.data.items)
         // 请求成功的list数据
         this.$bus.$emit('getUsers',{isLoading:false,errMsg:'',users:response.data.items})

       },
       error=>{
         // console.log('请求失败',error.message)
         // 请求成功的list数据
         this.$http.$emit('getUsers',{isLoading:false,errMsg:error.message,users:[]})

       }
   )
    }
  },
mounted(){

}

}
</script>

<style scoped>

</style>
