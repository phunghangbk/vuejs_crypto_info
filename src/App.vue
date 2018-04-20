<template>
  <div id="app">
    <div class="header">
      <router-link to="/"><img src="../static/service_logo/header_logo.jpg"></router-link>
      <div class="header_right">
        <div class="button_home">
          <router-link to="/">Home</router-link>
        </div>
        <div class="button_about">
          <router-link to="/about">About</router-link>
        </div>
        <div class="button_ethereum">
          <router-link to="/coins/ethereum">Ethereum</router-link>
        </div>
        <div class="button_bitcoin">
          <router-link to="/coins/bitcoin">Bitcoin</router-link>
        </div>
      </div>
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
  height: 100%;
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

html, body {
  height: 100%;
  margin: 0;
  padding: 40px 0 0 0;
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

#app .header > a > img {
  display: block;
  margin: 10px 0 5px 150px;
  float: left;
}

#app .header .header_right {
  float: right;
  display: flex;
  flex-direction: row;
  margin: 5px 150px 0 5px;
}
#app .header .header_right > div {
  margin: 0 5px 0 0;
  width: 100px;
  height: 20px;
  padding: 10px 20px 20px 20px;
  border-radius: 3px;
  cursor: pointer;
  background: #0ebf67;
  transition: all .5s ease;
  border-radius: 3px;
}
.button_home:hover, .button_about:hover, .button_ethereum:hover, .button_bitcoin:hover {
  box-shadow: 0 20px 5px -10px #178042;
  transform: translateY(10px);
}
#app .header .header_right > div > a {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 4px;
  color: white;
  text-decoration: none;
}
</style>
