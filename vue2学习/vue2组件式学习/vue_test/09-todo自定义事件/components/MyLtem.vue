<template>
  <ul class="todo-main">
    <MyList v-for="todoObj in todos"
     :key="todoObj.id" 
     :todo="todoObj"
     :checkTodo='checkTodo'
     :deleteTodo='deleteTodo'
     ></MyList>
  </ul>
</template>

<script scoped>
import MyList from "./MyList.vue";
export default {
  name: "MyLtem",
  components: { MyList },
  props: ["todos","checkTodo","deleteTodo"],
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>