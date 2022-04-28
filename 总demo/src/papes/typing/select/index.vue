<template>

  <div>
    <div class="home">
      <div class="router">
        <div class="selects">
          选择类型
        </div>
        <ul class="words" @click="wordck">
          <li
              v-for="item in options"
              :key="item.value"
          >{{ item.item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Select',
  data() {
    return {
      // learning0:['a','b','c','d','e','f','z','l','o','p','q','r','s','t','u','v','w','h','i','j'],
      learninghtml: ['submit', 'radio', 'checkbox', 'reset', 'textarea', 'label', 'object', 'param', 'archive', 'audio', 'source', 'video', 'props', 'main', 'section', 'article', 'nav', 'Canvas', 'autocomplete', 'iframe'],
      learningcss: ['stretch', 'space-between', 'space-evenly', 'border-radius', 'flex-direction', 'autoplay', 'nowrap', 'row-reverse', 'column', 'column-reverse', 'flex-wrap', 'wrap', 'wrap-reverse', 'justify-content', 'align-items', 'align-self', 'align-content', 'flex-grow', 'flex-shrink', 'flex-basis'],
      learningvue: ['component', 'router', 'path', 'router-view', 'router-link', 'template', 'store', 'actions', 'mutations', 'state', 'getters', 'dispatch', 'props', 'nextTick', 'beforeDestroy', 'beforeCreate', 'mounted', 'scoped', 'directive', 'methods'],
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
      },
      ]
    }
  },
  methods: {
    wordck(e){
      if(e.target.innerText === "cssword"){
        //给select传单词数据
        this.$bus.$emit('words',this.learningcss)
      }else if(e.target.innerText === "htmlword"){
        this.$bus.$emit('words',this.learninghtml)
      }else if(e.target.innerText === "vueword"){
        this.$bus.$emit('words',this.learningvue)
      }
    }

  },

}

</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  user-select: none;
}

.home {
  position: absolute;
  left: 227px;
  top: 75px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  .router {

    background-color: #aeedd8;
    width: 200px;
    border-radius: 1px;

    .words {
      list-style: none;

      li {
        border: 1px solid gray;
        border-radius: 5px;
        &:hover{
          background-color: white;
        }
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
      text-align: center;
    }
  }
}
</style>


