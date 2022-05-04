<template>
  <div class="app">
    <h1>{{ msg }} 学生姓名是：{{name}}</h1>
<!--    通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
      <school :getSchoolName='getSchoolName'></school>
    <!--    通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （第一种写法，使用@或v-on-->
<!--    -->
      <student @atguigu='demo' @demo='demo1'  @click.native="show"> </student>

<!--    通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref-->
<!--    <student ref="student"></student>-->
  </div>
</template>

<script>
import school from './components/school copy.vue'
import student from './components/student.vue'
export default {
name:'App',
components:{
    school,
    student
},
data(){
 return{
   msg:'你好啊',
   name:''
 }
},
methods:{
  show(){
    alert('123')
  },
  getSchoolName(name){
    console.log('app收到了学校名',name)
  },
  demo(name,...a){
    console.log('demo被调用了',name,a)
    this.name=name
  },
  demo1(){
    console.log('demo1111被调用了')
  }
},
  mounted(){
    this.$refs.student.$on('atguigu',this.demo)//绑定自定义事件
  // this.$refs.student.$once('atguigu',this.demo)//绑定自定义事件（一次性）
  }
}
</script>

