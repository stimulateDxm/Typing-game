<template>
  <div class="category">
  <h3>{{title}}分类</h3>
<!--    定义一个插槽-->
    <slot name="header">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    <slot name="fooder">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: 'Gategory',
  props:['listData','title']
}
</script>

<style scoped>
.category{
  background-color: #2e6da4;
  width: 200px;
  height: 300px;
}
h3{
  text-align: center;
  background-color: orange;
}

</style>
