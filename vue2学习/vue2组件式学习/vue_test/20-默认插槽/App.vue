<template>

  <div class="container">

    <Gategory :title="美食" >
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg09.viwik.com%2Fimages%2F20180701%2Ftooopen_sy_052538253829965.jpg&refer=http%3A%2F%2Fimg09.viwik.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647090491&t=8ffaeb8c88c769a92e40fdc4951b8c25" alt="美食">
      </Gategory>
    <Gategory :title="游戏" >
      <ul>
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>

    </Gategory>
    <Gategory :title="电影" >
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg09.viwik.com%2Fimages%2F20180701%2Ftooopen_sy_052538253829965.jpg&refer=http%3A%2F%2Fimg09.viwik.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647090491&t=8ffaeb8c88c769a92e40fdc4951b8c25" alt="美食">
    </Gategory>
  </div>

</template>

<script>

import Gategory from './components/Gategory'

export default {
  name: 'App',
  components: {Gategory},
  data(){
    return{
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}

</style>
