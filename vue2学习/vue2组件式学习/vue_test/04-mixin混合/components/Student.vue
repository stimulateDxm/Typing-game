<template>
  <div class="student">
   
    <h2 @click='showName'>学生名称：{{ name }}</h2>
    <h2>学生姓别：{{ sex }}</h2>
   
  </div>
</template>

<script>
import {henhe,henhe2} from "../mixin"
export default {
  name: "Student",
  data() {
    return {
     name:'张三',
     sex:'男'
    }
  },
 mixins:[henhe,henhe2]
}
</script>

<style>
.school {
  background-color: orange;
}
</style>