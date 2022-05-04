<template>
  <div class="student">
   
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生姓别：{{ sex }}</h2>

   
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      studentName: '张三',
      sex: '男'
    }
  },
  mounted(){

      this.$bus.$on('haha',(data)=>{
        console.log('我是student组件，收到了数据',data)
      })

  },
  beforeDestroy() {
    this.$bus.$off('haha')
  }
}
</script>

<style>
.school {
  background-color: orange;
}
</style>