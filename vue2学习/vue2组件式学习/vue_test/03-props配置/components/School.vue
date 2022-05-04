<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生姓别：{{ sex }}</h2>
    <h2>学生年龄：{{ Myage }}</h2>
    <button @click="updateAge">偿试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "我是一个尚硅谷的学生",
      Myage: this.age,
    };
  },
  methods: {
    updateAge() {
      this.Myage++;
    },
  },
//   简单接收
   props:['name','sex','age']

  // 接受的同时对数据进行类型限制
  // // props:{
  //   name:String,
  //   sex:String,
  //   age:Number
  // }
  // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
//   props: {
//     name: {
//       // name类型是字符串
//       type: String,
//       // name是必要的
//       required: true,
//     },
//     age: {
//       type: Number,
//       // 默认值
//       default: 99,
//     },
//     sex: {
//       type: String,
//       required: true,
//     },
//   },
}
</script>

<style>
.school {
  background-color: orange;
}
</style>