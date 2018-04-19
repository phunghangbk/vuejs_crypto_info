<template>
  <div id="coin_detail">
    <div class="above">
      <img v-lazy="{src: getImg(id), loading: lazyload.loading, error: lazyload.error}" />
      <h1>{{name}}</h1>
      <div class="price">
        <div class="price_USD">
          <p>USD: {{ priceUSD }}</p>
        </div>
        <div class="price_BTC">
          <p>BTC: {{ priceBTC }}</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <table>
        <tbody>
          <th>
            <td>Market Cap</td>
            <td>Volume (24h)</td>
            <td>Avaiable Supply</td>
            <td>Total Supply</td>
            <td>Max Supply</td>
          </th>
          <th>
            <td>{{marketcap}}</td>
            <td>{{volume24h}}</td>
            <td>{{availablesupply}}</td>
            <td>{{totalsupply}}</td>
            <td>{{maxsupply}}</td>
          </th>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload)
  export default {
    name: 'CoinDetail',
    props: {
      id: {
        required: true
      },
      priceUSD: {
        required: true
      },
      priceBTC: {
        required: true
      },
      marketcap: {
        required: true
      },
      volume24h: {
        required: true
      },
      availablesupply: {
        required: true
      },
      totalsupply: {
        required: true
      },
      name: {
        required: true
      },
      maxsupply: {
        required: true
      }
    },
    data() {
      return {
        lazyload: {
          error: '../../static/service_logo/coin_default_logo.jpg',
          loading: '../../static/service_logo/loading.gif'
        },
      }
    },
    methods: {
      getImg(name) {
        return '../../static/service_logo/' + name + '_logo.jpg';
      }
    }
  }
</script>
<style scoped>
  
</style>