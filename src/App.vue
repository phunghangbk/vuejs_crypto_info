<template>
  <div id="app">
    <div class="header">
      <img src="../static/service_logo/cryptocurrency_logo.jpg">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/coins/ethereum">Ethereum</router-link>
      <router-link to="/coins/bitcoin">Bitcoin</router-link>
    </div>
    <router-view/>
    <div id="footer">
      <div class="inner">
        <ul class="nav">
          <li><router-link to="/about">About Crypto-Currency</router-link></li>
          <li><router-link to="/aboutAuthor">About Author</router-link></li>
        </ul>
        <address class="copyright">Copyright(C) Hang Phung</address>
      </div>
    </div>
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
  /*background-image: url('../static/service_logo/background-image.jpg');*/
}

#footer {
  padding: 0 0 10px 0;;
  background-color: #807E7F;
  text-align: center;
  color: #fff;
}

#footer .inner {
  width: 80%;
  margin: 0 auto;
}
ul.nav {
  display: inline-block;
}
ul.nav > li:first-child {
  margin-left: 0;
  padding-left: 0;
  border: 0;
}
ul.nav > li {
  display: inline-block;
  margin-left: 1em;
  padding-left: 1em;
  border-left: 1px solid;
  line-height: 1;
  font-size: 12px;
  font-size: 1.2rem;
}
ul.nav > li > a {
  color: white;
}
</style>
