<template>
  <div>
      <H1 v-text='msg' ref='title'></H1>
      <button @click='showDOM'>点我输出上方的DOM元素</button>
      <School name='李四' sex='女' :age='18'  />
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
 name:'App',
 components:{School},
 data(){
     return{
         msg:'欢迎学习Vue!'
     }
 },
 methods:{
     showDOM(){
         console.log(this.$refs.title)
     }
 }
}
</script>

<style>

</style>