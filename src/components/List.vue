<template>
  <div class="list">
    <!-- <div class="row">
      <ul class="cryptoList">
        <li  v-for="ticker in tickersOnPerPage">
          <h1>{{ticker.name}}</h1>
          <img v-lazy="{src: getImg(ticker.id), loading: lazyload.loading, error: lazyload.error}" />
          <div>
            <p>Symbol: {{ ticker.symbol }}</p>
            <p>Price (USD): {{ ticker.price_usd }}</p>
          </div>
        </li>
      </ul>
    </div> -->

    <div>
      <pagination :current-page="pageOne.currentPage"
                :total-items="coin_tickers.length"
                :items-per-page="pageOne.itemsPerPage"
                @pagechanged="pageOneChanged"
      >
      </pagination>
    </div>
    <div>
      <filterCustom :post-list="coin_tickers"
      ></filterCustom>
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
        itemsPerPage: 10
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
        this.coin_tickers = resp.data;
      })
      .catch((err) => {
        console.log(err)
      })
    },

    getImg(name) {
      return '../../static/service_logo/' + name + '_logo.jpg';
    },

    pageOneChanged (pageNum) {
      this.pageOne.currentPage = pageNum
    }
  },

  computed: {
    tickersOnPerPage() {
      let currentPage = this.pageOne.currentPage;
      let perPage = this.pageOne.itemsPerPage;
      let total = this.coin_tickers.length;
      
      return this.coin_tickers.slice((currentPage - 1) * perPage + 1, currentPage * perPage);
    }
  },
  components: {
    Pagination, FilterCustom
  }
}
</script>

<style scoped>
  ul.cryptoList {
    display: block;
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
  ul.cryptoList > li > img {
    width: 120px;
  }

  div.row {
    height: 50%;
  }
</style>