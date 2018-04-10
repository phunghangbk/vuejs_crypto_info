<template>
  <ul>
    <li  v-for="ticker in coin_tickers">
      <h1>{{ticker.name}}</h1>
      <img v-lazy="{src: getImg(ticker.id), loading: lazyload.loading, error: lazyload.error}" />
      <div>
        <p>Symbol: {{ ticker.symbol }}</p>
        <p>Price (USD): {{ ticker.price_usd }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

export default {
  name: 'List',

  data() {
    return {
      coin_tickers: {},
      lazyload: {
        error: '../../static/service_logo/coin_default_logo.jpg',
        loading: '../../static/service_logo/loading.gif'
      }
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then((resp) => {
        this.coin_tickers = resp.data
        console.log(this.coin_tickers)
      })
      .catch((err) => {
        console.log(err)
      })
    },

    getImg(name) {
      return '../../static/service_logo/' + name + '_logo.jpg';
    }
  }
}
</script>

<style scoped>
  ul {
    display: block;
  }
  li {
    list-style: none;
    width: 400px;
    float: left;
    display: block;
    border: 1px solid #ccc!important;
    border-radius: 16px;
    margin: 10px;
    height: 300px;
    background-color: white;
  }
  img {
    width: 120px;
  }
</style>