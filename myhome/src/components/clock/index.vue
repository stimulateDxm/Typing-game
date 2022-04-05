<template>
  <div>
    <!--       时钟-->
    <div class="yun">
      <div class="central"></div>
      <div class="hour"></div>
      <div class="minute"></div>
      <div class="second"></div>
      <!--   1-12钟点数-->
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
}
</script>

<style scoped lang="less">
.yun{

@keyframes whirl {
  from{
    transform: rotateZ(0deg);
  }
  to{
    transform: rotateZ(360deg);
  }
}
position: relative;
background-color: #e0e27c;
width: 200px;
height: 200px;
border-radius: 50%;
border: 2px solid black;
div{
  position: absolute;
  background-color: black;
  left: 99px;
  top: 60px;
}
.central{
  left: 97px;
  top: 97px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.hour{
  width: 3px;
  height: 40px;
  animation: whirl 86400s linear infinite;
  transform-origin:bottom left ;
}
.minute{
  width: 2px;
  height: 60px;
  top:40px ;
  animation: whirl 3600s linear infinite;
  transform-origin:bottom left ;
}
.second{
  width: 1px;
  height: 80px;
  top: 20px;
  animation: whirl 60s linear infinite;
  transform-origin:bottom left ;
}
//1-12钟点数
      ul{
li{
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
&:nth-child(12){
   left: 88px;
 }
&:nth-child(1){
   left: 133px;
   top: 14px;
 }
&:nth-child(2){
   left: 160px;
   top: 48px;
 }
&:nth-child(3){
   left: 178px;
   top: 88px;
 }
&:nth-child(4){
   left: 160px;
   top: 125px;
 }
&:nth-child(5){
   left: 133px;
   top: 160px;
 }
&:nth-child(6){
   left: 95px;
   top: 175px;
 }
&:nth-child(7){
   left: 56px;
   top: 160px;
 }
&:nth-child(8){
   left: 22px;
   top: 125px;
 }
&:nth-child(9){
   left: 5px;
   top: 88px;
 }
&:nth-child(10){
   left: 22px;
   top: 48px;
 }
&:nth-child(11){
   left: 50px;
   top: 14px;
 }







}
}
}
</style>
