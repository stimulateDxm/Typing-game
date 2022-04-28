<template>
  <div class="w">
    <section id="section">
          <ul id="dot">
       <Circles></Circles>
        </ul>

      <button id="go">开始</button>
    </section>
    <div class="selects">
      <div id="buts">
        <button id="stop">结束</button>
        <!-- <button id="goon">继续</button> -->
        <button id="restart">重来</button>
      </div>
      <!-- <ul id="select">
          <li>选择速度</li>
          <li class="nums">慢</li>
          <li class="nums">中</li>
          <li class="nums">快</li>
          <li class="nums">特快</li>
      </ul> -->
      <ol id="olnum" class="s">
        <li id="over" class="i">游戏结束</li>
        <li id="num">完成的数量:0</li>
        <li id="miss">错过的数量:0</li>
        <li id="imte" class="i">用时:0秒</li>
      </ol>
    </div>
  </div>
</template>

<script>
import Circles from "../circle";
export default {
  name: "HeavenABC",
  components: {Circles },
  data() {
    return {

      //创建数组保存生成的li
      arrLi: [],
      //记录错过的数量
      imss: 0,
      //下落速度
      speed: 20,
      //出现的个数
      speeds: 300,
      //关闭速度定时器
      timesp: null,
      //定义一段时间生成一个dom的定时器
      timenew: 0,
      //节流锁
      lock: true,
      //为保存开始时的时间
      time: 0,
    };
  },
};
</script>

<style lang="css"  scoped>
* {
  margin: 0;
  padding: 0;
  user-select: none;
}

li {
  list-style: none;
}

.w {
  width: 80vw;
  margin: 0 auto;
  height: 100vh;
}

section {
  position: relative;
  width: 80vw;
  height: 75vh;
  margin: 0 auto;
  background-color: #aeedd8;
  overflow: hidden;
}

section ul {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

section ul li {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 45px;
  background-image: radial-gradient(50% 50%, #fefefe, #72a4ef);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 23px;
}

section #go {
  font-size: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #d7e837;
  border: 2px solid #ddef15;
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
}

section #go:hover {
  opacity: 0.5;
}

.selects {
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  height: 75vh;
  margin: 0 auto;
  margin-top: 10px;
}

.selects #buts {
  display: flex;
  flex-wrap: wrap;
}

.selects #buts button {
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-right: 30px;
  border-radius: 50%;
  border: 2px solid #57eebc;
  background-color: #91ebcd;
}

.selects .s {
  position: absolute;
  top: 77%;
  left: 50%;
}

.selects .olnums {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -120%);
}

.selects #num,
.selects #miss,
.selects #imte {
  background-color: #91ebcd;
  border: 1px solid #57eebc;
  text-align: center;
  width: 150px;
  height: 30px;
  line-height: 30px;
}

.selects .i {
  display: none;
}

.selects #over {
  background-color: #cee753;
  border: 1px solid #8ecb50;
  text-align: center;
  width: 150px;
  height: 50px;
  line-height: 50px;
}
</style>
