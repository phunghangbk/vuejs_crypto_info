<template>
<div id="filter">
  <div class="row">
    <div>
      <select v-model="selected">
        <option v-for="(field, key) in parseFilterField" :value="key">{{field}}</option>
      </select>
      <input placeholder="filter value" v-model="search" />
    </div>
  </div>
  <div class="row">
    <ul class="cryptoList">
      <li  v-for="post in filteredList">
        <h1>{{post.name}}</h1>
        <img v-lazy="{src: getImg(post.id), loading: lazyload.loading, error: lazyload.error}" />
        <div>
          <p>id: {{post.id}}</p>
          <p>Symbol: {{ post.symbol }}</p>
          <p>Price (USD): {{ post.price_usd }}</p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
export default {
  name: 'FilterCustom',
  props: {
    postList: {
      type: Array,
      required: true
    },
    filterField: {
      type: Object,
      required: false
    }
  },
  data: function() {
    return {
      search: '',
      lazyload: {
        error: '../../static/service_logo/coin_default_logo.jpg',
        loading: '../../static/service_logo/loading.gif'
      },
      selected: ''
    }
  },
  created() {
    this.parseFilterField;
  },
  methods: {
    getImg(name) {
      return '../../static/service_logo/' + name + '_logo.jpg';
    },
    parseSearchWord: function(searchWord) {
      var searchWordRange = [];
      var result = [];
      if (searchWord.indexOf('-') >= 0
        || searchWord.indexOf('~') >= 0) {
        searchWordRange = searchWord.split(/(~|-)/);
      }
      if (searchWordRange.length > 0) {
        var start = searchWordRange[0].toLowerCase().replace(/(k)/g, '000').replace('million', '000000').replace('billion', '000000000').replace(/[^0-9\.-]+/g,"");
        var end = searchWordRange[searchWordRange.length-1].toLowerCase().replace('k', '000').replace('million', '000000').replace('billion', '000000000').replace(/[^0-9\.-]+/g,"");
        result.push(start);
        result.push(end);
      }

      return result.length > 0 ? result : searchWord;
    }
  },
  computed: {
    parseFilterField() {
      if (typeof this.filterField != 'undefined') {
        this.selected = Object.keys(this.filterField)[0];
        return this.filterField;
      } else {
        var filterField = [];
        var filterFieldObject = {};
        this.postList.forEach(post => {
          filterField = Object.keys(post);
        });
        this.selected = filterField[0];
        for (var i = 0; i < filterField.length; i++) {
          filterFieldObject[filterField[i]] = filterField[i].replace(/(_)/g,' ');
        }
        return filterFieldObject;
      }
    },

    filteredList() {
      var result = false;
      var searchWord = this.parseSearchWord(this.search);
      if (typeof searchWord == 'string') {
        return this.postList.filter(post => {
          return post[this.selected].toLowerCase().includes(this.search.toLowerCase());
        })
      } else {
        return this.postList.filter(post => {
          return Number(post[this.selected].toLowerCase().replace(/[^0-9\.-]+/g,"")) >= Number(searchWord[0]) 
          && Number(post[this.selected].toLowerCase().replace(/[^0-9\.-]+/g,"")) <= Number(searchWord[1]);
        })
      }
    }
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
    height: 320px;
    background-color: white;
  }
  ul.cryptoList > li > img {
    width: 120px;
  }

  div.row {
    height: 50%;
  }
</style>