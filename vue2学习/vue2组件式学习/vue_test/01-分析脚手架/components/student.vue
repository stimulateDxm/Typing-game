<template>
  <div id="root">
    <!-- 编写组件标签-->
    <h2>学生名称：{{ studentname }}</h2>
    <h2>学校年龄：{{ age }}</h2>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
 export default {
          name:"student",
            data() {
                return {
                    studentname: "小宋",
                    age: 18,
                }
            },
            methods:{
                showName(){
                    alert(this.studentname)
                }
            }

            }
// 组件交互相关的代码（数据.方法等等）
</script>
