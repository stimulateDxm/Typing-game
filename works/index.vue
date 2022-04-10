<template>
  <div id="di" @mouseenter="ulsEnter" @mouseleave="ulsLeave">
    <ul id="uls">
      <li class="frist">
        <a href="">
          <img :src="gitImgsUrl" />
        </a>
      </li>
    </ul>
    <ol>
      <li id="lt" @click="lt">&lt;</li>
      <li id="gt" @click="gt">&gt;</li>
    </ol>
    <div id="didi">
      <li
        v-for="item in imgs"
        :key="item"
        :style="{ backgroundColor: item == a ? ' red' : 'gray' }"
        @click="dots(item)"
      ></li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Works",
  data() {
    return {
      //定义切换图片索引数据
      a: 1,
      //定义图片总数量
      imgs: [1, 2, 3, 4],
      //   节流锁
      lock: true,
      //控制图片是否自动播放
      timer: null,
    };
  },
  methods: {
    //  点左切换上一张
    lt() {
      if (!this.lock) return;
      this.lock = false;
      this.a--;
      if (this.a == this.imgs[0] - 1) {
        this.a = this.imgs.length;
      }
      setTimeout(() => {
        this.lock = true;
      }, 500);
    },
    //  点左切换下一张
    gt() {
      if (!this.lock) return;
      this.lock = false;
      this.a++;
      if (this.a == this.imgs.length + 1) {
        this.a = this.imgs[0];
      }
      setTimeout(() => {
        this.lock = true;
      }, 500);
    },
    //移入图片时停止播放
    ulsEnter() {
      clearInterval(this.timer);
    },
    //移出图片时自动播放
    ulsLeave() {
      this.timer = setInterval(() => {
        this.gt();
      }, 1000);
    },
    //   点击圆点切换到对应的图片
    dots(i) {
      this.a = i;
    },
  },
  computed: {
    //通过改来a的值来改变页面图片的显示和隐藏
    gitImgsUrl() {
      return require(`../works/assets/${this.a}.png`);
    },
  },

  mounted() {
    //自动播放图片
    this.timer = setInterval(() => {
      this.gt();
    }, 1500);
  },
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}
#di {
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 400px;
}

ul {
  position: absolute;
  left: 0;
  top: 0;
}
li {
  list-style: none;
}
ul li img {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
ul .frist img {
  opacity: 1;
}
img {
  width: 400px;
  height: 400px;
}
ol {
  width: 400px;
  height: 400px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
ol li {
  background-color: aqua;
  width: 50px;
  line-height: 50px;
  border-radius: 50%;
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: -25px;
  opacity: 0.6;
}
ol li:hover {
  opacity: 0.9;
}
#didi {
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 33%;
  top: 90%;
}
#didi li {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 5px;
}
</style>

