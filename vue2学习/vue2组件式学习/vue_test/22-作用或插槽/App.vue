<template>

  <div class="container">

    <Gategory  :title="游戏" >
      <template scope={games}>
        <ul>
          <li v-for="(item,index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>

    </Gategory>
    <Gategory  :title="游戏" >
      <template scope="atgigu">
        <ol>
          <li  v-for="(item,index) in atgigu.games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Gategory>
    <Gategory  :title="游戏" >
      <template scope="atgigu">

          <h4 v-for="(item,index) in atgigu.games" :key="index">{{ item }}</h4>

      </template>
    </Gategory>

  </div>

</template>

<script>

import Gategory from './components/Gategory'

export default {
  name: 'App',
  components: {Gategory},

}
</script>

<style scoped>
.container,.food{
  display: flex;
  justify-content: space-around;
}


</style>