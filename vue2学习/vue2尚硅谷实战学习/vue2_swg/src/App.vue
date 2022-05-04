<template>
  <div>
    <Header></Header>
    <router-view></router-view>
<!--    在Home、Search显示的，在登录，注册隐藏-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>

</template>

<script>
import Footer from "./components/Footer"
import Header from "./components/Header"
export default {
  name: 'App',
  components:{Footer,Header}
}
</script>

<style scoped>

</style>
