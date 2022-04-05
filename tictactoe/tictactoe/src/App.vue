<template>
  <div class="rows">
<div class="rows"  v-show="!ishome">
  <div class="nn">第{{n}}手</div>
  <div class=" s" v-if="n===0">点击空格下棋</div>
  <div v-for="(id,index) in indexs" :key="id"  >
<!--v-on:click="nam(index,$event)"
index是模版遍历出来的索引相当于给每个row组件一个号码
 $event是接收子组件的数组 xo值
 :n="n"是给子组件传递n的值，让子组件n是单数xo值就变成X 是偶数就是o
  -->
    <Row  v-on:click="nam(index,$event)" :n="n"></Row>
  </div>
  <div class="over" v-if="overs" >{{overs}}
    <button @click="again">再来一次</button>
  </div>
  <div class="anew" @click="again" v-if="n!=0">重新开始</div>
  <div class="but" @click="ishome=true" >我要看教程</div>
</div >
    <div class="home" v-if="ishome">
      <div>
        <button  class="butt" @click="ishome=false">不用看教程立刻开始</button>
        <video src="./assets/20220331_220315.mp4" autoplay></video>
      </div>
    </div>
  </div>
</template>

<script>
import Row from "./components/row"
export default {
  name: 'App',
  components:{Row},
  data(){
    return{
      ishome:false,
      //结束弹出框文字
      overs:null,
      //记录点击次数初始值
      n:0,
      //为了给子组件遍历用的，刚好是九个做个九宫格
      indexs:[1,2,3,4,5,6,7,8,9],
      //下了什么棋就给对应的位置里放对应的xo值 初始值
      map:[[null,null,null],[null,null,null],[null,null,null]]
    }
  },
  methods:{

    again(){
      location.reload();
    },
    //点击一次就执行一次这里面的代码
    nam(i,xo){
      //点击一次就加一
      this.n++
      //下了什么棋就给对应的位置里放对应map数组的xo值
      this.map[Math.floor(i/3)][i%3]=xo
      //判断胜利
      for (let i=0;i<3; i++){

        if(
            this.map[i][0] !== null && this.map[i][0] === this.map[i][1] && this.map[i][1] === this.map[i][2]){
         this.overs=`${this.map[i][0]}赢了`
        }else if(
            this.map[0][i] !== null && this.map[0][i] === this.map[1][i] && this.map[1][i] === this.map[2][i]
        ){
          this.overs=`${this.map[0][i]}赢了`
        }else if(
            this.map[0][0] !== null && this.map[0][0] === this.map[1][1] && this.map[1][1] === this.map[2][2]
        ){
          this.overs=`${this.map[0][0]}赢了`
        }else if(
            this.map[0][2] !== null && this.map[0][2] === this.map[1][1] && this.map[1][1] === this.map[2][0]
        ){
          this.overs=`${this.map[i][0]}赢了`
        }
        }


    }
  },

}

</script>

<style>
*{
  background-color: aquamarine;
}
@media screen and (max-width: 500px) {
  body {
    margin-top: 50px;
    margin-left: 0;
    transform: scale(0.8);
  }
  .rows{
    margin-left: 0;
  }
}
.s{
  position: absolute;
  left: 100px;
  top: -15px;
}
.nn{
  position: absolute;
  left: 0px;
  top: -15px;
}
.home{
  position: relative;
  background-color: palevioletred;
  width: 100%;
  height: 100%;
}
.butt{
  background-color: dodgerblue;
  width: 200px;
  height: 80px;
  position: absolute;
  left: 0;
  top: 382px;

}
/*要看教程视频按钮*/
.rows .but{
  position: absolute;
  left: 110px;
  top: 320px;
  width: 100px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid dodgerblue;
  background-color: dodgerblue;
  line-height: 30px;
  padding-left: 10px;
}
.rows{

 padding-top: 20px;
  margin: 0 auto;
  position: relative;
  display: flex;
  width: 300px;
  height: 300px;
  flex-wrap: wrap;
}
/*结束弹出框*/
.over{
  width: 200px;
  height: 100px;
  background-color: palevioletred;
  border-radius: 50px;
  position: absolute;
  left: 50px;
  top: 50px;
  color: white;
  font-size: 25px;
  display: grid;
  place-items: center;

}
/*重新开始按钮*/
.anew{
  background-color: dodgerblue;
  width: 100px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid dodgerblue;
  position: absolute;
  left: 0px;
  top: 320px;
  display: grid;
  place-items: center;
}

button{
  position: absolute;
  left: 53px;
  top: 65px;
  width: 100px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid dodgerblue;
  background-color: dodgerblue;
}
</style>
