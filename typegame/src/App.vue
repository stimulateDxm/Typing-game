<template>

  <div>
    <div class="home">
      <div class="router">
        <div class="selects">
          选择你想练习单词类型
        </div>
        <select class="words" @click="wordck">
          <option
              v-for="item in options"
              :key="item.value"

          >{{ item.item }}
          </option>
        </select>
      </div>
    </div>
    <Cssword v-show="iscssword"/>
    <Vueword v-show="isvueword"/>
    <Htmlword v-show="ishtmlword"/>
  </div>
</template>

<script>

import Cssword from "./components/cssword"
import Vueword from "./components/vueword"
import Htmlword from "./components/htmlword"

export default {
  name: 'App',
  components: {Cssword, Vueword, Htmlword},
  data() {
    return {
      //控制单词表
      iscssword:true,
      ishtmlword:false,
      isvueword:false,
      //选择下拉框
      options: [{
        value: "选项1",
        item: "cssword"
      }, {
        value: "选项2",
        item: "htmlword"
      }, {
        value: "选项3",
        item: "vueword"
      },]
    }
  },
  methods: {
    wordck(e){
      console.log(e.target.value)
    if( e.target.value === 'cssword'){
      this.iscssword=true
      this.ishtmlword=false
      this.isvueword=false
    }else if(e.target.value === 'htmlword'){
      this.iscssword=false
      this.ishtmlword=true
      this.isvueword=false
    }else {
      this.iscssword=false
      this.ishtmlword=false
      this.isvueword=true
    }
    }
  },
}


</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;

  .router {

    background-color: #07b1ee;
    width: 200px;
    border-radius: 1px;

    .words {
      list-style: none;

      li {
        border: 1px solid gray;
        border-radius: 5px;
      }
    }

    .words {
      width: 100%;
      font-size: 18px;
      text-align: center;
      color: red;

    }

    .selects {
      color: #121212;
    }
  }
}
</style>


