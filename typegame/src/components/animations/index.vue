<template>
  <div class="ww">
    <div class="w">
      <!-- 道路外层 -->
      <div class="lu-outer">
        <!-- 道路内层 -->
        <div class="lu-core">
          <div class="update" @click="again">
            <span>重新<br>开始</span>
          </div>

          <div>
            <Select v-show="isgoli"></Select>
          </div>
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
              <p class="pnum">已完成{{ num }}个</p>
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
              <p  v-if="istext"  v-text="`恭喜你捉住了小偷,用时(${Math.floor((new Date().valueOf()-this.time)/1000)})秒`"></p>
              <p v-if="!istext" v-text="`你失败了，没捉住小偷`"></p>
              <button @click="again()">再来一次</button>
            </div>

          </div>


        </div>

      </div>
      <div class="xiaorei">
        <!--        小偷-->
        <div :style="{left:leftxx+'px',top:topyy+'px'}"

             class="xiaotou"
        >
          <img src="../../assets/images/xiaotou.png">
        </div>

        <!-- 小人图片上部 -->

        <div
            v-if="leftx < 550 && topy === 0 && leftx >= 0 "
            :style="{left:leftx+'px',top:topy+'px'}"
            class="imgs-top"

        >
          <div class="big-top">
            <img
                v-for="(item,index) in gotop"
                v-show="n === index"
                :key="index"
                :src="item"
                alt=""
            >
          </div>
        </div>
        <!-- 小人图片右部 -->

        <div
            v-if="leftx === 550 && topy >= 0 && topy <550 "
            :style="{left:leftx+'px',top:topy+'px'}"
            class="imgs-right"

        >
          <div class="big-right">
            <img
                v-for="(item,index) in goright"
                v-show="n === index"
                :key="index"
                :src="item"
                alt=""
            >
          </div>
        </div>
        <!-- 小人图片下部 -->

        <div
            v-if="leftx <= 550 && topy === 550  && leftx >0"

            :style="{left:leftx+'px',top:topy+'px'}"
            class="imgs-bottom"
        >
          <div class="big-bottom">
            <img
                v-for="(item,index) in gobottom"
                v-show="n === index"
                :key="index"
                :src="item"
                alt=""
            >
          </div>
        </div>
        <!-- 小人图片左部 -->

        <div
            v-if="leftx === 0 && topy <= 550 && topy>0  "
            :style="{left:leftx+'px',top:topy+'px'}"
            class="imgs-left"
        >
          <div class="big-left">
            <img
                v-for="(item,index) in goleft"
                v-show="n === index"
                :key="index"
                :src="item"
                alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top5 from "../../assets/images/top5.png"
import top4 from "../../assets/images/top4.png"
import top3 from "../../assets/images/top3.png"
import top2 from "../../assets/images/top2.png"
import top1 from "../../assets/images/top1.png"
import right5 from "../../assets/images/right5.png"
import right4 from "../../assets/images/right4.png"
import right3 from "../../assets/images/right3.png"
import right2 from "../../assets/images/right2.png"
import right1 from "../../assets/images/right1.png"
import bottom5 from "../../assets/images/bottom5.png"
import bottom4 from "../../assets/images/bottom4.png"
import bottom3 from "../../assets/images/bottom3.png"
import bottom2 from "../../assets/images/bottom2.png"
import bottom1 from "../../assets/images/bottom1.png"
import left5 from "../../assets/images/left5.png"
import left4 from "../../assets/images/left4.png"
import left3 from "../../assets/images/left3.png"
import left2 from "../../assets/images/left2.png"
import left1 from "../../assets/images/left1.png"
import Select from "@/components/select";

export default {
  name: 'Animations',
  components: {Select},
  data() {
    return {
      //结束弹出的文字内容
      istext:true,
      //用时多少秒
      time: 0,
      //结束框
      isover: false,
      //开始按钮
      isgoli: true,
      //good标志
      isgood: false,
      //单词数量
      num: 0,
      //输入框value
      word: '',
      //新数组
      itemed: [],
      //页面显示的单词
      learning: ['component', 'router', 'path', 'router-view', 'router-link', 'template', 'store', 'actions', 'mutations', 'state', 'getters', 'dispatch', 'props', 'nextTick', 'beforeDestroy', 'beforeCreate', 'mounted', 'scoped', 'directive', 'methods'],

      //用于切换不能方向的小人
      istop: true,
      isright: false,
      isbottom: false,
      isleft: false,
      //用于切换小人索引
      n: 0,
      isgo: true,
      //小人上部图片路径
      gotop: [
        top5,
        top4,
        top3,
        top2,
        top1,
      ],
      //小人右部图片路径
      goright: [
        right5,
        right4,
        right3,
        right2,
        right1,
      ],
      //小人下部图片路径
      gobottom: [
        bottom5,
        bottom4,
        bottom3,
        bottom2,
        bottom1,
      ],
      //小人左部图片路径
      goleft: [
        left5,
        left4,
        left3,
        left2,
        left1,
      ],
      //向左右方向运动
      leftx: 0,
      //向上下方向运动
      topy: 0,
      //小偷向左右方向运动
      leftxx: 80,
      //小偷向上下方向运动
      topyy: 0,
      //关定时器按钮
      timer1: null,
      timer2: null,
      timer3: null,
      timer4: null,
      timer5: null,
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
      clearInterval(this.timer1)
      clearInterval(this.timer2)
      clearInterval(this.timer3)
      clearInterval(this.timer4)
      clearInterval(this.timer5)
         //选择类型
         this.isgoli=true
         //开始按钮
         this.isgo=true
          //结束弹出的文字内容
          this.istext=true
          //重新记录初始值时间
          this.time = new Date().valueOf()
          //结束框
          this.isover= false
          //good标志
          this.isgood= false
          //单词数量
          this.num= 0
          //输入框value
          this.word= ''
          //新数组
          this.itemed= []
          //用于切换不同方向的小人
          this.istop= true
          this.isright= false
          this.isbottom= false
          this.isleft=false
          //用于切换小人索引
           this. n= 0
          this.isgo= true
          //向左右方向运动
          this.leftx= 0
          //向上下方向运动
          this.topy= 0
          //小偷向左右方向运动
          this.leftxx= 80
          //小偷向上下方向运动
           this.topyy= 0



    },
    //小人原地跑步动画
    go() {
      this.timer2 = setInterval(() => {
        this.n++
        if (this.n === 5) {
          this.n = 0
        }
      }, 200)
    },
    //小人开始跑步函数控制左右
    gox(nums, numed, numx) {
      if (this.num === nums) {
        clearInterval(this.timer1)
        clearInterval(this.timer2)
        this.go()
        this.timer1 = setInterval(() => {
          //向右移动
          this.leftx = this.leftx + numx
          if (this.leftx === numed) {
            clearInterval(this.timer1)
            clearInterval(this.timer2)

          }
        }, 10)

      }
    },
    //小人开始跑步函数控制上下
    goy(nums, numed, numx) {
      // if(this.num===)
      if (this.num === nums) {
        clearInterval(this.timer3)
        clearInterval(this.timer2)
        this.go()
        this.timer3 = setInterval(() => {
          //向下移动
          this.topy = this.topy + numx
          if (this.topy === numed) {
            clearInterval(this.timer3)
            clearInterval(this.timer2)

          }
        }, 10)
      }
    },
    //小偷右下移动
    goxxyy() {
      this.timer4 = setInterval(() => {
        this.leftxx++
        if (this.leftxx >= 550) {
          this.leftxx = 550
          this.topyy++
          if (this.topyy >= 550) {
            this.topyy = 550
            clearInterval(this.timer4)

          }
        }
      }, 19)


    },
    //小偷右上移动
    goxxyy2() {
      this.timer5 = setInterval(() => {
        this.leftxx--
        if (this.leftxx <= 0) {
          this.leftxx = 0
          this.topyy--
          if (this.topyy <= 0) {
            this.topyy = 0
            clearInterval(this.timer5)

          }
        }
      }, 25)

    }
  },


  watch: {
    //文本框
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
              //numder加一就是完成的数量
              this.num++;
              //文本框清空
              this.word = '';
              //设置good标志显示
              this.isgood = true
              ////设置good标志隐藏
              setTimeout(() => {
                this.isgood = false
              }, 300)

            }
          }
        }
      }
    },
    //在点击开始按钮时小偷开始跑步
    isgoli() {
      if(!this.isgoli){
        this.goxxyy()
      }


    },
    topyy() {
      if (this.topyy === 550 && this.leftxx === 550 ) {
        this.goxxyy2()
      }
    },


    //满足条件调用开始跑步函数
    num: {
      handler() {

        this.gox(1, 110, 1)
        this.gox(2, 220, 1)
        this.gox(3, 330, 1)
        this.gox(4, 440, 1)
        this.gox(5, 550, 1)
        this.goy(6, 110, 1)
        this.goy(7, 220, 1)
        this.goy(8, 330, 1)
        this.goy(9, 440, 1)
        this.goy(10, 550, 1)
        this.gox(11, 440, -1)
        this.gox(12, 330, -1)
        this.gox(13, 220, -1)
        this.gox(14, 110, -1)
        this.gox(15, 0, -1)
        this.goy(16, 440, -1)
        this.goy(17, 330, -1)
        this.goy(18, 220, -1)
        this.goy(19, 110, -1)
        this.goy(20, 0, -1)


      }
    }
  },
  mounted() {
    this.$bus.$on('words', date => {
      this.learning = date
    })

  },
  updated() {
    if ((this.topyy - this.topy === 30 && this.leftx === this.leftxx && this.leftx !==0 )
        || (this.leftxx - this.leftx === 30 && this.topy === this.topyy && this.topyy === 0)
        ||( this.topyy !==0 && this.topy -this.topyy ===30 &&this.leftx === this.leftxx)
        || (this.leftx - this.leftxx === 30 && this.topy === this.topyy && this.topyy === 550)

    ) {
      clearInterval(this.timer4)
      clearInterval(this.timer3)
      clearInterval(this.timer2)
      clearInterval(this.timer1)
      clearInterval(this.timer5)
      //清空所有定时器
      this.timer1 = null
      this.timer2 = null
      this.timer3 = null
      this.timer4 = null
      this.timer5 = null
      this.isover = true
    }

    if(this.topyy===0 && this.leftxx===0){
      clearInterval(this.timer4)
      clearInterval(this.timer3)
      clearInterval(this.timer2)
      clearInterval(this.timer1)
      clearInterval(this.timer5)
      //清空所有定时器
      this.timer1 = null
      this.timer2 = null
      this.timer3 = null
      this.timer4 = null
      this.timer5 = null
      this.isover = true
      this.istext=false
    }
  },
}

</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.goren {
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: 80px;
}

//外层大小
@width: 650px;
//里层大小
@-hundred: @width - 180;
.froms(@x1:0px,@y1:0px) {
  transform: translateX(@x1) translateY(@y1);
}
//最外层居中
.ww{
  display: flex;
  justify-content: center;
}
//手机端
@media screen and (max-width: 500px) {


  .ww{
    transform: scale(0.6);
    margin: auto 0;
  }
}
.w {
  position: relative;
  //外层
  .lu-outer {
    width: @width;
    height: @width;
    border: 1px solid orange;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

    //内层
    .lu-core {
      width: @-hundred;
      height: @-hundred;
      //border: 1px solid orange;
      background-color: pink;
      border-radius: 70px;
      //选择重新输入的类型重新开始
      .update{
        position: absolute;
        background-color: #ecf00c;
        left: 134px;
        top: 474px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        z-index: 1;
        text-align: center;
        padding-top: 8px;
        font-size: 12px;
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

          p {
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

    }
  }

  //小人图片
  .xiaorei {
    //小偷
    .xiaotou {
      width: 80px;
      height: 80px;
      .goren;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .goren;
    //小人物上边
    .imgs-top {
      .goren;
      .froms();

      .big-top {
        .froms();

      }
    }

    //小人物右边
    .imgs-right {
      .goren;

    }

    //小人物下边
    .imgs-bottom {
      .goren;

    }

    //小人物左边
    .imgs-left {
      .goren;

    }

  }

}

</style>
