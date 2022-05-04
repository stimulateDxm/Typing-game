<template>
  <div class="school">
   
    <h2 @click='showName'>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
   
  </div>
</template>

<script>
import {henhe,henhe2} from "../mixin"
export default {
  name: "School",
  data() {
    return {
     name:'尚硅谷',
     address:'北京'
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