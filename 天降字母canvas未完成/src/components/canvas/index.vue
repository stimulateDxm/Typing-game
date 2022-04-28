<template>
  <div>
    <Canvas ref="canvas" width = 800 height = 500>
      你的浏览器不支持canvas,请更新</Canvas >
  </div>
</template>

<script>
export default {
  name: "Canvass",

  data() {
    return {
      ctx: {},
      //渐变色
      lg: null,
      //转成大写并转成数组
      ABC: "abcdefghijklnmopqrstuvwxyz".toUpperCase().split(""),
      //控制定时器
      thime:null,
      //放小球放入数组中
      ballarr: [],
      imgData:null,
     //用循环
      a:0,
       //控制小球下落
      y:0,
      fn:null,
    };
  },
  methods: {
    //让整个画布变成pink色
    initcanvas() {
      this.ctx.beginPath();
      this.ctx.save();
      this.ctx.rect(0, 0, 800, 500);
      this.ctx.fillStyle = "pink";
      this.ctx.fill();
      this.ctx.restore();
    },
    //小球函数
    ball(x = parseInt(Math.random() * 750) + 30, tex=this.ABC[parseInt(Math.random() * this.ABC.length)], y = this.y, col = `rgb(${parseInt(Math.random()*225)},${parseInt(Math.random()*225)},${parseInt(Math.random()*225)})`) {
      // this.ctx.clearRect(0,0,800,500)//清除画布
      this.ctx.beginPath();
      this.ctx.save();
      this.lg = this.ctx.createRadialGradient(x, y, 0, x, y, 30);
      this.lg.addColorStop(0, "#fff");
      this.lg.addColorStop(1, col);
      this.ctx.arc(x, this.y, 20, 0, 2 * Math.PI);
      this.ctx.fillStyle = this.lg;
      this.ctx.fill();
      this.ctx.restore();
      this.ctx.save();
      this.ctx.font = "20px  Microsoft YaHei"; //设置字体样式
      this.ctx.fillText(tex, x - 7, y + 6); //绘制文本
      this.ctx.textAlign = "center"; //设置绘制文本的给定点为文本中间
      this.ctx.restore();
    },
    s(){
    
      // requestAnimationFrame( this.fn=()=>{
      //   this.y++
      //   // console.log("1",this.y)
      //   requestAnimationFrame(this.fn)
      // })
     
  },
  },
  watch:{
   y(){

   }
  },
  mounted() {
        // 获取画布的上下文
    this.ctx = this.$refs.canvas;
    this.ctx = this.ctx.getContext("2d");

    this.initcanvas();
    for (this.a=0;this.a<30;this.a++){
      this.ball()
      this.ballarr.push( this.ball )
    }
    console.log(this.ballarr)
  
  },
 
}
</script>

<style scoped>
</style>
