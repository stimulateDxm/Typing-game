<template>
  <div>
    <header>
      <ul>
        <li><router-link active-class="active" to="/tictactoe">井字棋</router-link></li>
        <li><router-link active-class="active" to="/heavenABC">天降字母</router-link></li>
        <li><router-link active-class="active" to="/animations">追小偷</router-link></li>
      </ul>
    </header>
   <div class="routes">
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped lang="less">
*{
  padding:0;
  margin:0;
}
body{
  padding:0;
  margin:0;
  width: 100%;
  height: 100%;
  background-image:url("./assets/xixi.webp");
}
li{
  list-style: none;
}
a{
 text-decoration: none;
}
header{
  width: 100vw;
  height: 35px;
  background-color: #f1d2f7;
  border: 1px solid #ccc;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items:center;
    li{
      text-align: center;
      height: 35px;
      line-height: 35px;
      width: 120px;
      &:hover{
        background-color: white;
      }
   a{
     color: #121212;

   }
    }
  }
}

</style>
