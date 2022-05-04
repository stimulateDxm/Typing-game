<template>
  <div class="school">
   
    <h2 >学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
<button @click="sengStudentName">点击把学校名称给student</button>
   
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data() {
    return {
     name:'尚硅谷',
     address:'北京'
    }
  },
  methods:{
    sengStudentName(){
   pubsub.publish('hello',666)
    }
    }

}
</script>

<style>
.school {
  background-color: orange;
}
</style>