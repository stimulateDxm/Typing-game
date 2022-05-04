<template>
  <div>
  <h1>当前求和为{{$store.state.num}}</h1>
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

    }
  },
  methods:{
    jia (n){
      this.$store.commit('jia',n)

    },
    jian (n){
      this.$store.commit('jian',n)
    },
    jijia (n){
      if(this.$store.state.num % 2){
        this.$store.commit('jia',n)
      }
    },
    dedejia(n){
      setTimeout(()=>{
        this.$store.commit('jia',n)
      },500)
    }
  },

}
</script>

<style scoped>
button{
  margin: 0 5px;
}
</style>
