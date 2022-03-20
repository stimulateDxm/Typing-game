<template>
  <div>
    <div class="w">
      <!-- 道路外层 -->
      <div class="lu-outer">
        <!-- 道路内层 -->
        <div class="lu-core">

          <div >
            <Select v-show="isgoli"></Select>
          </div>
<!--         打字vueword组件-->
          <div class="select-word">
            <Vueword/>
          </div>

        </div>

      </div>
      <div class="xiaorei">

        <!-- 小人图片上部 -->

        <div
            class="imgs-top"
            :style="{left:leftx+'px',top:topy+'px'}"
            v-show="istop"
        >
          <div class="big-top"  >
            <img
                alt=""
                v-for="(item,index) in gotop"
                :key="index"
                :src="item"
                v-show="n == index"
            >
          </div>
        </div>
        <!-- 小人图片右部 -->

        <div
            class="imgs-right"
            :style="{left:leftx+'px',top:topy+'px'}"
            v-if="isright"
        >
          <div class="big-right"  >
            <img
                alt=""
                v-for="(item,index) in goright"
                :key="index"
                :src="item"
                v-show="n == index"
            >
          </div>
        </div>
        <!-- 小人图片下部 -->

        <div
            class="imgs-bottom"
            :style="{left:leftx+'px',top:topy+'px'}"
            v-if="isbottom"
        >
          <div class="big-bottom"  >
            <img
                alt=""
                v-for="(item,index) in gobottom"
                :key="index"
                :src="item"
                v-show="n == index"
            >
          </div>
        </div>
        <!-- 小人图片左部 -->

        <div
            class="imgs-left"
            :style="{left:leftx+'px',top:topy+'px'}"
            v-if="isleft"
        >
          <div class="big-left"  >
            <img
                alt=""
                v-for="(item,index) in goleft"
                :key="index"
                :src="item"
                v-show="n == index"
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
import Vueword from "@/components/vueword";
import Select from "@/components/select";
export default {
  name: 'Animations',
  components:{Vueword,Select},
  data() {
    return {
      //用于切换不能方向的小人
      istop:true,
      isright:false,
      isbottom:false,
      isleft:false,
      //用于切换小人索引
      n:0,
      isgo:true,
      //小人上部图片路径
      gotop:[
        top5 ,
        top4 ,
        top3 ,
        top2 ,
        top1 ,
      ],
      //小人右部图片路径
      goright:[
        right5 ,
        right4 ,
        right3 ,
        right2 ,
        right1 ,
      ],
      //小人下部图片路径
      gobottom:[
        bottom5 ,
        bottom4 ,
        bottom3 ,
        bottom2 ,
        bottom1 ,
      ],
      //小人左部图片路径
      goleft:[
        left5 ,
        left4 ,
        left3 ,
        left2 ,
        left1 ,
      ],
      //向左右方向运动
      leftx: 0,
      //向上下方向运动
      topy:0,
      //关定时器按钮
      timer1:null,
      timer2:null,
      //接收到输入的单词数量
      num:0,
      //定义开始按钮
      isgoli:true
    }
  },
  methods: {
    //小人原地跑步动画
    go() {
      this.timer2 = setInterval(() => {
        this.n++
        if (this.n == 5) {
          this.n = 0
        }
      }, 200)
    },
      gos(){
        this.timer1=setInterval(()=>{
          //向右移动
          this.leftx ++

          if(this.leftx >= 550){
            this.leftx=550
            this.istop=false
            this.isright=true
                //向下移动
            this.topy ++
            if(this.topy >= 550){
              this.topy = 550
              setInterval(()=>{
                this.isright=false
                this.isbottom=true
              //向左移动
                this.leftx --
                if(this.leftx <= 0) {
                  this.leftx = 0
                  this.isbottom=false
                  this.isleft=true
                  //向上移动
                  this.topy --
                  if (this.topy <= 0) {
                    this.topy = 0
                    this.isleft=false
                    this.istop=true
                    this.isgo=true
                    clearInterval(this.timer2)
                    clearInterval(this.timer1)
                    this.n=0

                  }
                }
              },10)

            }
          }
        },10)
    },
    //开始跑步


},
watch: {
  isgoli: {
    handler(){
    if (this.isgoli == false) {
      this.go()
      this.gos()
    }
  }
  }
},
  mounted() {

    //接收select数据
    this.$bus.$on('num', data => {
      this.num = data

    })
    this.$bus.$on('isgoli', data => {
      this.isgoli = data

    })
  },

  beforeDestroy() {
    this.$bus.$off('num','isgoli')
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
      border-radius: 70px

    }
  }

  //小人图片
  .xiaorei {
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
