<template>
  <div id="coin_detail">
    <h1>Cryptocurrency Market Capitalizations</h1>
    <div class="wrapcontent">
      <div class="above">
        <div class="above_left">
          <img v-lazy="{src: getImg(id), loading: lazyload.loading, error: lazyload.error}" />
          <strong>{{name}}</strong>
          <span>( {{id}} )</span>
        </div>
        <div class="price">
          <div class="price_USD">
            <p><span class="label">USD:</span> <span class="dolar">$</span><span class="price_num">{{ priceUSD }}</span></p>
          </div>
          <div class="price_BTC">
            <p><span class="label">BTC:</span> <span class="price_num">{{ priceBTC }}</span></p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <table class="horizontal">
          <tbody>
            <tr>
              <th>Market Cap</th>
              <th>Volume (24h)</th>
              <th>Avaiable Supply</th>
              <th>Total Supply</th>
              <th>Max Supply</th>
            </tr>
            <tr>
              <th>{{changeFormatNumber(marketcap)}}</th>
              <th>{{changeFormatNumber(volume24h)}}</th>
              <th>{{changeFormatNumber(availablesupply)}}</th>
              <th>{{changeFormatNumber(totalsupply)}}</th>
              <th>{{changeFormatNumber(maxsupply)}}</th>
            </tr>
          </tbody>
        </table>
        <table class="vertical">
          <tbody>
            <tr>
              <th>Market Cap</th>
              <td>{{changeFormatNumber(marketcap)}}</td>
            </tr>
            <tr>
              <th>Volume (24h)</th>
              <td>{{changeFormatNumber(volume24h)}}</td>
            </tr>
            <tr>
              <th>Avaiable Supply</th>
              <td>{{changeFormatNumber(availablesupply)}}</td>
            </tr>
            <tr>
              <th>Total Supply</th>
              <td>{{changeFormatNumber(totalsupply)}}</td>
            </tr>
            <tr>
              <th>Max Supply</th>
              <td>{{changeFormatNumber(maxsupply)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
        }
      }
    },
    methods: {
      getImg(name) {
        return '../../static/service_logo/' + name + '_logo.jpg';
      },
      changeFormatNumber(number) {
        if (number == null || typeof number == 'undefined') {
          return '';
        }
        return String(Number(number.toString().toLowerCase().replace(/[^0-9\.-]+/g,""))).replace(/(.)(?=(\d{3})+$)/g,'$1,');
      }
    }
  }
</script>
<style scoped>
  #coin_detail {
    font-family: 'Roboto', sans-serif;
    width: 80%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-bottom: 350px;
    box-shadow: 0px 0px 3px 0px #178042;
  }
  .above_left {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .above {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .above .above_left > img {
    width: 100px;
    height: 100px;
    border-radius: 3px;
    cursor: pointer;
    transition: all .5s ease;
    border-radius: 3px;
    box-shadow: #178042 0px 1px 6px, #0ebf67 0px 1px 4px;
    padding: 10px;
  }
  strong {
    font-size: 28px;
    line-height: 10px;
    margin-left: 21px;
  }
  .above_left > span {
    font-size: 20px;
    font-weight: bold;
    color: #999;
  }
  .price {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 90px;
  }
  .price > div > p > span.label {
    font-size: 28px;
    font-weight: bold;
    color: #0ebf67;
  }
  .price > div > p > span.price_num {
    font-size: 20px;
    font-weight: bold;
    color: #e80d48;
  }
  .price > div > p > span.dolar {
    font-size: 20px;
    font-weight: bold;
  }
  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    margin: 15px 0 20px 0;
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  tr:first-child {
    background-color: #0ebf67;
  }

  tr:hover {background-color:#f5f5f5;}
  h1 {
    background-color: #65f3ac;
    padding: 21px;
    border-radius: 20px;
    box-shadow: #043117 0px 1px 6px;
    width: 70%;
  }
  .horizontal {
    display: block;
  }
  .vertical {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    #coin_detail {
      padding-top: 50px;
    }
    .above {
      display: inline-block;
    }
    .above_left {
      display: inline-flex;
      max-width: 100%;
    }
    h1 {
      font-size: 100%;
    }
    strong {
      font-size: 100%;
    }
    .above_left > span {
      font-size: 100%;
    }
    .above .above_left > img {
      width: 20%;
      height: 50%;
    }
    .above .prive {
      display: inline-flex;
      margin-left: unset;
    }
    .horizontal {
      display: none;
    }
    .vertical {
      display: inline;
    }
    tr:first-child {
      background-color: unset;
    }
    th {
      background-color: #0ebf67;
    }
  }
</style>
