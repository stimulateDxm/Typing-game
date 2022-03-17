<template>

  <div>
    <Select></Select>
    <Vueword/>
  </div>
</template>

<script>


import Vueword from "./components/vueword"
import Select from "@/components/select";

export default {
  name: 'App',
  components: {Select, Vueword}
}
</script>
