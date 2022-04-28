<template>
  <div>
    <aside>
      <ul id="#select">
        <li><p>井字棋</p><router-link active-class="active" to="/tictactoe"><img src="./assets/1.png" alt="井字棋"></router-link></li>
        <li><p>天降字母</p><router-link active-class="active" to="/heavenABC"><img src="./assets/2.png" alt="天降字母"></router-link></li>
        <li><p>追小偷</p><router-link active-class="active" to="/animations"><img src="./assets/3.png" alt="追小偷"> </router-link></li>
      </ul>
    </aside>
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
  user-select: none;
  padding:0;
  margin:0;
}
body{
  padding:0;
  margin:0;
  width: 100%;
  height: 100%;
}
li{
  list-style: none;
}
a{
 text-decoration: none;
}
aside{
  //background-color: #aeedd8;
  //border: 1px solid #ccc;
  //选择按钮
  ul{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;

li{
  border: 1px solid #ccc;
  text-align:center;

  p{
  }
  &:hover{
    background-color: #fff;
  }
  a{

    img{
      width: 400px;
      height: 400px;
    }
  }
}
  }
}

</style>
