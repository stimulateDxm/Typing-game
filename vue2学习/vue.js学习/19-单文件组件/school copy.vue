<template>
  <div id="root">
    <!-- 编写组件标签-->
    <h2>学校名称：{{ schoolname }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
 export default {
          name:"school",
            data() {
                return {
                    schoolname: "尚硅谷",
                    address: "北京",
                }
            },
            methods:{
                showName(){
                    alert(this.schoolname)
                }
            }

            }
// 组件交互相关的代码（数据.方法等等）
</script>
