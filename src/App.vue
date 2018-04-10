<template>
  <div id="app">
    <div class="header">
      <img src="../static/service_logo/cryptocurrency_logo.jpg">
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid #E5E5E5;
  background-color: #fff;
  font-size: 15px;
  font-size: 1.5rem;
  z-index: 50;
}

img {
  width:120px;
}

body {
  padding-top: 40px;
  background-image: url('../static/service_logo/background-image.jpg');
}
</style>
