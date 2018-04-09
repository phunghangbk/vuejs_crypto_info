<template>
  <div class="list">
    <ul v-for="ticker in coin_tickers">
      <li>
        <img src="getImg(ticker.id)">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List',

  data() {
    return {
      coin_tickers: {}
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
    console.log('../assets/service_logo/' + name + '_logo.jpg');
      return '../assets/service_logo/' + name + '_logo.jpg';
    }
  }
}
</script>

<style>
</style>