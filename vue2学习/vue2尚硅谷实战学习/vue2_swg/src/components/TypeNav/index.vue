<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container"  @mouseleave="leaveIndex">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" >
<!--        利用事件委派+编程式导航实现路由的跳转与传递参数-->

        <div class="all-sort-list2" @click="goSearch">
<!--          :class="{cur:currenIndex=index}"，当currenIndex=index的时候增加一个cue类名-->
          <div class="item"
               v-for="(c1,index) in categoryList"
               :key="c1.catogoryID"
               :class="{cur:currenIndex===index}">

<!--            绑定一个移入事件转个移入时h3的index参数-->

            <h3 @mouseenter="changeIndex(index)" >
              <a :data-categoryName="c1.categoryName">{{c1.categoryName}}</a>
            </h3>
            <div class="item-list clearfix" :style="{display:currenIndex===index?'block':'none'}">
              <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.catogoryID" >
                <dl class="fore">
                  <dt>
                    <a :data-categoryName="c2.categoryName">{{ c2.categoryName }}</a>
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.catogoryID">
                      <a :data-categoryName="c3.categoryName">{{c3.categoryName}}</a>
                    </em>

                  </dd>
                </dl>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
//引入lodash中的throttle节流按需引入
import  throttle from "lodash/throttle"
export default {
  name: 'TypeNav',
  data() {
    return {
      currenIndex: -1

    }
  },
  //组件挂载完毕：可以向用服务器发请求
  mounted(){
    //通知vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch("categoryList");
  },
  computed:{
    ...mapState({
      categoryList:state => state.home.categoryList
        })
  },
  methods:{
    //鼠标进入修改响应式数据currentIndex属性
    //用es5语法,用方法等式使用节流函数throttle要用普通函数
    changeIndex:throttle(function(index){

    this.currenIndex=index

    },50),
    //一级分类鼠标移出的事件回调
    leaveIndex(){
      this.currenIndex=-1
    },
    //进行路由跳转的方法
    goSearch(event){
      //最好的解决方案：编程式导航+事件委派
      //存在一些问题：事件委派，是把全部的子节点【h3、dt、dl、em】的事件委派给父节点
      //点击a标签的时候，才会进行路由跳转【怎么能确定点击的一定是a标签】
      //存在另外一个问题：即使你能确定点击的是a标签，如何区分是一级、二级、三级分类的标签

      //第一个问题：把子节点当中a标签，我加上自定义属性data-categoryName,其余的子节点是没有的
let element=event.target;
//获取到当前出发这个事件的节点【h3、dt、dl、em】，需要带有data-categoryname这样节点【一定是a标签】
//节点有一个属性dataset属性可以获取到节点的自定义属性与属性值

    }

  }
}



</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {

        .item {

          h3 {
            line-height: 26px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {

            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }


        }
        .cur{
          background-color: orange;
        }
      }
    }
  }
}

</style>
