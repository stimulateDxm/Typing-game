<template>

  <div class="container">
    <Search></Search>
    <List></List>
  </div>

</template>

<script>
import Search from './components/search'
import List from './components/list'

export default {
  name: 'App',
  components: {List, Search}
}
</script>

<style scoped>


</style>
