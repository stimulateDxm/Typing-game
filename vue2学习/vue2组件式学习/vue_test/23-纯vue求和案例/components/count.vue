<template>
  <div>
  <h1>当前求和为{{number}}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="jia(n)">+</button>
    <button @click="jian(n)">-</button>
    <button @click="jijia(n)">当前为奇数才加</button>
    <button @click="dedejia(n)">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data(){
    return {
      n:1,
      number:0
    }
  },
  methods:{
    jia (n){
      this.number+=n
    },
    jian (n){
      this.number-=n
    },
    jijia (n){
      if(this.number % 2){
        this.number+=n
      }
    },
    dedejia(n){
      setTimeout(()=>{
        this.number += n
      },500)
    }
  }
}
</script>

<style scoped>
button{
  margin: 0 5px;
}
</style>
