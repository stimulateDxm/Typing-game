<template>

    <ul class="todo-main">
      <transition-group name="todo" appear>
      <MyList
          v-for="todoObj in todos"
          :key="todoObj.id"
          :todo="todoObj"

      ></MyList>
      </transition-group>
    </ul>


</template>

<script scoped>
import MyList from "./MyList.vue";
export default {
  name: "MyLtem",
  components: { MyList },
  props: ["todos"],
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
.todo-enter,.todo-leave-to{
  transform:translateX(100%);
}
.todo-enter-active,.todo-leave-active{
  transition: 1s linear;
}
/*进入的终点 ，离开的起点*/
.todo-enter-to,.todo-leave{
  transform:translateX(0);
}
</style>