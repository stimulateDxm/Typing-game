<template>
  <div>
<!--    <h2>count组件的求和数为{{$store.countAbout.state.num}}</h2>-->
<h1>人员列表</h1>
    <h3>第一个名字为{{$store.getters['personAbout/firstPersonName']}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" >
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <button @click="addPersonServer">随机添加一个人名</button>

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
      this.$store.commit('personAbout/addperson',personObj)

      this.name=''

    },
    addPersonWang(){
      this.$store.dispatch('personAbout/addPersonWang',this.personObj)
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
    }


  },
  computed:{
    personList(){
      return  this.$store.state.personAbout.personList
    }
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>
