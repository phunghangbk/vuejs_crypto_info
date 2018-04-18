<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <list></list>
  </div>
</template>

<script>
import List from '@/components/list'
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Crypto Info'
    }
  },
  components: {
    List
  }
}
</script>

<style scoped>
  h1 {
    font-size: 4em;
    color: #d3e022;
  }
  .hello {
    height: 100%;
  }
</style>
