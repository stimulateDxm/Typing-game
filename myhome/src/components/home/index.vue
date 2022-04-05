<template>
  <div class="home">
    <header>
        <ul>
            <li ><a href="">关于我</a>
              <div>保密哦</div>
            </li>
            <li><a href="">联系我</a>
              <img src="../../assets/qq.png" alt="">
            </li>
            <li><a href="">我的作品</a>
              <ol>
                <li><a href="">vue2动态实现此作品</a></li>
                <li><a href="https://stimulatedxm.github.io/tictactoe-vue2/docs/index.html">vue2实现动态井字棋小游戏</a></li>
                <li><a href="">vue2实现动态打字追小偷游戏</a></li>
                <li><a href="">vue2实现动态日历</a></li>
                <li><a href="">css静态时钟</a></li>
                <li><a href="">css静态还原设计稿小慕医生主页</a></li>
              </ol>
            </li>
            <li><a href="https://blog.csdn.net/A081127?spm=1000.2115.3001.5343">我的博客</a></li>
            <li><a href="https://github.com/stimulateDxm">我的github</a></li>
        </ul>
    </header>
   <section>
     <div class="r">
     </div>
     <div class="b"></div>
     <div class="l">
       <div class="clock">
         <Clock></Clock>
       </div>
       <div class="calendar">
         <Calendar></Calendar>
       </div>

     </div>
     <div class="h">

     </div>
   </section>

  </div>
</template>

<script>
import Clock from "../clock"
import Calendar from "../calendar"
export default {
    name:"Home",
  components:{
      Clock,Calendar
  }
}
</script>

<style lang="less" >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: #0a0101;
}
.w{
  width: 900px;
  margin: 0 auto;
}
img{
  vertical-align: middle;
  border:0 solid transparent;
}



 header{
  background-color: #99ece7;
   ul{
     .w();
     display: flex;
     flex-wrap: nowrap;
     justify-content: space-evenly;
     li{
       position: relative;
       width: 100px;
       text-align: center;
       line-height: 30px;
       background-color: #4bd6ee;
       border: 1px solid #878181;
       border-radius: 50%;
       &:nth-child(1){
         &:hover div{
           display: block;
         }
       div{
           width: 100px;
           text-align: center;
           position: absolute;
           left: 0;
           top: 30px;
           background-color: #51d5dd;
           border: 1px solid #bee5e3;
           z-index: 1;
           display: none;
         }
       }
       &:nth-child(2){
         &:hover img{
           display: block;
         }
         img{
           display: none;
           position: absolute;
           left: -52px;
           top: 31px;
           z-index: 1;
         }
       }
       &:hover ol{
         display: block;
       }
       ol{
         display: none;
         position: absolute;
         left: -75px;
         top: 30px;
         z-index: 1;
         border: 1px solid #51d5dd;
         li{
           width: 250px;
           display: flex;
           flex-wrap: wrap;
           border-radius: 0;
           &:hover{
             background-color: #bee5e3;
           }

         }
       }
     }
   }
 }
 section {
   .w();
   perspective: 500px;
   transform-style: preserve-3d;

   .lhrd{
     background-size: cover;
     width: 500px;
     height: 500px;
     position: absolute;
     left: 0;
     top: 0;

   }

   .h{
     .lhrd();
    background-image: url("../../assets/1.jpg");
     left: 201px;
     transform:rotateX(0deg) translatez(-130px);


   }
   .r{
     .lhrd();
     background-image: url("../../assets/1.jpg");
     left: -5px;
     height: 609px;
     transform:rotateY(80deg) translatez(-130px);

   }
   .l{
     .lhrd();
     background-image: url("../../assets/1.jpg");
     left: 407px;
     height: 609px;
     transform:rotateY(-80deg) translatez(-130px);
     display: flex;
     flex-wrap: wrap;
     .clock{
       margin: 30px;
     }
     .calendar{
       margin-top: -100px;
     }
   }
   .b{
     .lhrd();
     background-color: #99ece7;
     left: 147px;
     top: 115px;
     width: 602px;
     height: 574px;
     transform: rotateX(103deg) translatez(-130px);
   }

 }
</style>
