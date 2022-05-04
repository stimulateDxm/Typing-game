<template>
  <div>
  <h1>当前求和为{{num}}</h1>
    <h1>当前求和放大10倍为：{{bigSum}}</h1>
    <h2>我在{{school}},学习{{subJect}}</h2>
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
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
// import {mapActions} from "vuex"
export default {
  name: 'Count',

  data(){
    return {
      n:1,

    }
  },
  computed:{

    ...mapState({num:'num',school:'school',subJect:'subJect'}),

    ...mapGetters({bigSum:'bigSum'}),

  },
  methods:{
    // jia (n){
    //   this.$store.commit('jia',n)
    //
    // },
    // jian (n){
    //   this.$store.commit('jian',n)
    // },

    // ...mapMutations({jia:'jia',jian:'jian'}),

    ...mapMutations(['jia','jian']),

    // ...mapActions({jijia:'jijia',dedejia:'dedejia'}),

    ...mapActions(['jijia','dedejia']),

    // jijia (n){
    //     this.$store.dispatch('jijia',n)
    // },
    // dedejia(n){
    //     this.$store.dispatch('dedejia',n)
    // }
  },

}
</script>

<style scoped>
button{
  margin: 0 5px;
}
</style>
