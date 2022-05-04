<template>
  <div id="root">
    <!-- 编写组件标签-->
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学校年龄：{{ age }}</h2>
    <h2>当前求和为{{numder}}</h2>
    <button @click="add">点我numder++</button>
    <button @click="sendStudentName">点我提示学生姓名</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
 export default {
          name:"student",
            data() {
                return {
                    studentName: "小宋",
                    age: 18,
                    numder:0
                }
            },
            methods:{
            add(){
               this.numder++
            },
              sendStudentName(){
                //触发student组件实例身上的atguigu事件
                this.$emit('atguigu',this.studentName,666,888,900)
                this.$emit('demo')
              },
              unbind(){
                //解绑一个自定义事件
                this.$off('atguigu')
              //  解绑多个自定义事件
              //   this.$off(['atguigu','demo'])
              //  解绑所有自定义事件
              //   this.$off()
              },
              death(){
                //销毁了当前student组件的实例，销毁后所有student实例的自定义事件全都不奏效
                this.$destroy()
              }

            }

            }
// 组件交互相关的代码（数据.方法等等）
</script>
