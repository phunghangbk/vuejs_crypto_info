<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <list></list>
  </div>
</template>

<script>
import List from '@/components/List'
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

