<template>
  <div>
    <h2>count组件的求和数为{{$store.state.num}}</h2>
<h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" >
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{p.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Person',
  data(){
    return{
      name:''
    }
  },
  methods:{
    add(){
      const personObj={id:Date.now(),name:this.name}
      this.$store.commit('addperson',personObj)
      this.name=''
    },

  },
  computed:{
    personList(){
      return  this.$store.state.personList
    }
  }
}
</script>

<style scoped>

</style>
