<template>
  <div >
<!--      三级联动已经注册为全局组件，不用再注册使用了-->
    <TypeNav></TypeNav>
    <ListContainer/>
    <Rcommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>


  </div>
</template>

<script>
import ListContainer from "./ListContainer"
import Rank from "./Rank"
import Rcommend from "./Rcommend"
import Like from "./Like"
import Floor from "./Floor"

export default {
  name: 'Home',
  components:{
    ListContainer,
    Rank,
    Rcommend,
    Like,
    Floor
  },


}
</script>

<style scoped>

</style>
