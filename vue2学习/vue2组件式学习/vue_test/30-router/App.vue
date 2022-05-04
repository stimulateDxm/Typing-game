<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
<!--          原始html中我们使用A标签实现页面跳转-->
<!--          vue使用router-link标签实现路由的切换-->
          <router-link class="list-group-item" active-class="active" to="/About">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/Home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">

         <router-view>此处到展示什么组件，得看用户点击的是哪个导航项</router-view>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Banner from './components/Banner.vue'
export default {
  name: 'App',
  components:[About,Home,Banner]
}
</script>

<style scoped>
</style>
