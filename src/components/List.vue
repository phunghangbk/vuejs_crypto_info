<template>
  <div class="list">
    <div>
      <filterCustom :post-list="coin_tickers" @filterChanged="filterOnChanged"
      ></filterCustom>
    </div>
    <div class="row">
      <ul class="cryptoList">
        <li  class="card" v-for="ticker in tickersOnPerPage">
          <router-link :to="{
            path:'/coinDetail', 
            query:{
              id:ticker.id,
              usd:ticker.price_usd,
              btc:ticker.price_btc,
              marketcap:ticker.market_cap_usd,
              volume24h:ticker['24h_volume_usd'],
              availablesupply:ticker.available_supply,
              totalsupply: ticker.total_supply,
              name: ticker.name,
              maxsupply: ticker.max_supply
            }
          }">
            <h1>{{ticker.name}}</h1>
            <img v-lazy="{src: getImg(ticker.id), loading: lazyload.loading, error: lazyload.error}" />
            <div>
              <p>Symbol: {{ ticker.symbol }}</p>
              <p>Price (USD): {{ ticker.price_usd }}</p>
            </div>
          </router-link>
        </li>
      </ul>
      <pagination :current-page="pageOne.currentPage"
              :total-items="filteredItems.length"
              :items-per-page="pageOne.itemsPerPage"
              @pagechanged="pageOnChanged"
      >
      </pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import Pagination from '@/components/Pagination'
import FilterCustom from '@/components/FilterCustom'

Vue.use(VueLazyload)
export default {
  name: 'List',

  data() {
    return {
      coin_tickers: [],
      lazyload: {
        error: '../../static/service_logo/coin_default_logo.jpg',
        loading: '../../static/service_logo/loading.gif'
      },
      pageOne: {
        currentPage: 1,
        itemsPerPage: 12
      },
      filteredItems: []
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then((resp) => {
        this.filteredItems = this.coin_tickers = resp.data;
        console.log(this.coin_tickers);
      })
      .catch((err) => {
        console.log(err)
      })
    },

    getImg(name) {
      return '../../static/service_logo/' + name + '_logo.jpg';
    },

    pageOnChanged (pageNum) {
      this.pageOne.currentPage = pageNum
    },

    filterOnChanged (filteredItems) {
      this.filteredItems = filteredItems;
      this.pageOne.currentPage = 1;
    }
  },

  computed: {
    tickersOnPerPage() {
      let currentPage = this.pageOne.currentPage;
      let perPage = this.pageOne.itemsPerPage;
      let total = this.filteredItems.length;
      return this.filteredItems.slice((currentPage - 1) * perPage, currentPage * perPage);
    }
  },
  components: {
    Pagination, FilterCustom
  }
}
</script>

<style scoped>
  ul.cryptoList {
    display: inline-block;
    height: auto;
  }
  ul.cryptoList > li {
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
  .list {
    height: 100%;
  }
  .row {
    height: 100%;
  }
  li {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    margin: 12px;
    transition: .15s all ease-in-out;
  }
  li:hover {
    transform: scale(1.05);
  }
  li > a {
    text-decoration: none;
    padding: 12px;
    color: #0ebf67;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>