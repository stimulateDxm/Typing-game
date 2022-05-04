<template>
  <div>
<Count></Count>
    <hr>
<Person></Person>
  </div>
</template>

<script>
import Count from './components/count'
import Person from './components/person'
export default {
  name: 'App',
  components:{ Count,Person }
}
</script>

<style scoped>

</style>
