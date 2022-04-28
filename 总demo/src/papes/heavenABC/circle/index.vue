<template>
  <div>
      <li :style="{top: a<550 ? `${a}px`:'520px',left:`${lefts}px`}">
          {{abcss}}
      </li>

  </div>
</template>

<script>
export default {
  name: "Circles",
  data() {
    return {
              //转成大写并转成数组
      ABC: "abcdefghijklnmopqrstuvwxyz".toUpperCase().split(""),
      //控制小球的下落
      a:-50,
      //控制小球下落速度
      //定义小球出现的随机字母
      abcss:'',
      //left值
      lefts:100,
      //改变top值a的定时器
      time:null,

    };
  },
  methods:{


  },
  computed:{

  },
  mounted(){
      //定义小球出现的随机字母
    this.abcss= this.ABC[parseInt(Math.random()*(this.ABC.length))]
    //定义小球随机出现在不同的left位置上
    this.lefts=parseInt(Math.random() * 600)
        //改变小球的top值a
    this.time=setInterval(()=>{
      this.a++
    },100)
  }
};
</script>

<style scoped>

li{
  list-style: none;
  position: absolute;
  top: -50px;
  left: 0;
  width: 45px;
  height: 45px;
  background-image: radial-gradient(50% 50%, #fefefe, #72a4ef);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 23px;


}

</style>
