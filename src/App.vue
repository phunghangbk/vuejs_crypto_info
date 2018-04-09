<template>
  <div id="app">
    <div class="header">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/coins/ethereum">Ethereum</router-link>
      <router-link to="/coins/bitcoin">Bitcoin</router-link>
    </div>

    <div class="container">
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
