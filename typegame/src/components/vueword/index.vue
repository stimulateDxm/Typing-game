<template>

  <div class="lian">
    <ul class="lianUl">
      <li v-for="(item,index) in learning"
          :key="index"
          ref="items"
          :style="{backgroundColor:itemed.includes(item) ? 'gray':'white'}"
          class="lianUls">
        {{ item }}
      </li>
    </ul>
    <div>
      <input ref="focus"
             v-model="word"
             class="butvalue"
             name="textname"
             placeholder="输入上面出现的单词"
             readonly="readonly"
             type="text"/>
      <!--      <button @click="but()">确定</button>-->
    </div>
    <div v-show="isgood" class="nums ">
      <p class="pnum">还剩{{ num }}个</p>
      <span v-show="isgood" class="iconfont icon-dianzan"></span>
    </div>
    <!-- 音乐-->
    <div>
      <audio ref="audioed" preload="auto" src="@/assets/images/live2.mp3"></audio>
    </div>
    <!-- 开始提示框-->
    <div v-show="isgoli" ref="starts" class="start" @click="goli()">开始</div>
    <!--    结束弹出框-->
    <div v-show="isover" class="overt">
      <p v-text="`恭喜你完成了，用时(${Math.floor((new Date().valueOf()-this.time)/1000)})秒`"></p>
      <button @click="again()">再来一次</button>
    </div>

  </div>

</template>

<script>

export default {
  name: 'Vueword',
  data() {
    return {
      //用时多少秒
      time: 0,
      //结束框
      isover:false,
      //开始按钮
      isgoli: true,
      //good标志
      isgood: false,
      //单词数量
      num: 20,
      //输入框value
      word: '',
      //新数组
      itemed: [],
      //页面显示的单词
      learning: ['component', 'router', 'path', 'router-view', 'router-link', 'template', 'store', 'actions', 'mutations', 'state', 'getters', 'dispatch', 'props', 'nextTick', 'beforeDestroy', 'beforeCreate', 'mounted', 'scoped', 'directive', 'methods'],
    }
  },
  methods: {

    //开始按钮
    goli() {
      //移除文本框禁止输入的属性readonly="readonly"
      this.$refs.focus.removeAttribute('readonly')
      //给输入框插入光标
      this.$refs.focus.focus()
      this.isgoli = false
      //记录初始值时间
      this.time = new Date().valueOf()

      //控制音乐
      this.$refs.audioed.play().catch((error) => {
        console.log(error)
       }),
       //自动播放
       this.$refs.audioed.autoplay = true
       //循环播放
       this.$refs.audioed.loop = true

    },
    //结束时再来一次按钮
    again() {
      Object.assign(this.$data, this.$options.data())
      this.isgood = false

    },
  },
  mounted() {
    //接收select数据
    this.$bus.$on('words', data => {
      this.learning = data
    })
  },
  beforeDestroy() {
    this.$bus.$off('words')
  },
  watch: {
    isgoli() {
      this.$bus.$emit('isgoli',this.isgoli)

    },
    word: {
      handler() {
        var len = this.learning.length
        for (let i = 0; i < len; i++) {
          //输入的内容是否与页面上的单词一样
          if (this.word == this.$refs.items[i].innerText) {
            //判断新数组里有没有这个单词如果没有才进入判断
            if (!this.itemed.includes(this.word)) {
              //新数组没有就是没输入过就增加当前输入的单词到新数组里
              this.itemed.push(this.word)
              //numder减一就是剩余数量
              this.num--;
              this.$bus.$emit('num',this.num)
              //文本框清空
              this.word = '';
              //设置good标志显示
              this.isgood = true
              ////设置good标志隐藏
              setTimeout(() => {
                this.isgood = false
              }, 800)
              if (this.num == 0) {
                this.isover = true
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;

}

li {
  list-style: none
}

img {
  vertical-align: top;
  border: none
}
//单词最外层
.lian {
  margin: auto;
  position: relative;
  width: 470px;
  height: 470PX;
  border-radius: 70px;
  background-color: pink;
//go标示图标
  .icon-dianzan {
    color: red;
    font-size: 70px;
    position: absolute;
    left: 26px;
    top: 43px;
    opacity: 0.8;

  }

  .nums {
    width: 120px;
    height: 120px;
    text-align: center;
    border-radius: 50%;
    background-color: #f5c809;
    opacity: 0.9;
    font-size: 20px;
    color: red;
    position: absolute;
    left: 180px;
    top: 170px;

    .pnum {
      margin-top: 20px;
    }
  }
  // 开始提示框

  .start {
    position: absolute;
    left: 177px;
    top: 389px;
    font-size: 20px;
    text-align: center;
    width: 120px;
    height: 45px;
    line-height: 50px;
    border-radius: 50px;
    background-color: dodgerblue;
    opacity: 0.9;
  }

  //结束弹出框
  .overt {
    position: absolute;
    left: 120px;
    top: 163px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 220px;
    height: 100px;
    border-radius: 60px;
    background-color: orange;
    opacity: 0.9;
    p{
      margin-top: 15px;
    }

    //重新开始按钮
    button {
      height: 50px;
      background-color: dodgerblue;
      border: 2px solid orange;
      border-radius: 50%;
      color: white;
    }
  }
  //输入框
  .butvalue {
    font-size: 18px;
    opacity: 0.8;
    position: absolute;
    left: 20px;
    top: 350px;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #98c4f0;
    width: 230px;
    height: 80px;
    border: orange solid 3px;
    border-radius: 50px;
    text-align: center;
  }
//全部单词
  .lianUl {
    width: 470px;
    height: 470px;
    border-radius: 70px;
    background-color: pink;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-evenly;
  //单个单词
    .lianUls {
      margin-top: 20px;
      flex-wrap: nowrap;
      width: 28%;
      height: 28px;
      line-height: 30px;
      border: deepskyblue solid 1px;
      border-radius: 15px;
      display: flex;
      justify-content: center;
    }


}
}

</style>
