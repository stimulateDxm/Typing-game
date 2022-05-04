<template>
  <div class="student">
   
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生姓别：{{ sex }}</h2>

   
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    return {
      studentName: '张三',
      sex: '男'
    }
  },
  methods: {
    demo (msgName,data){
      console.log('有人发布了消息订阅消息',msgName,data)
  },
  mounted(){
this.pubId=pubsub.subscribe('hello',this.demo)
}


  },
  beforeDestroy() {
  pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style>
.school {
  background-color: orange;
}
</style>