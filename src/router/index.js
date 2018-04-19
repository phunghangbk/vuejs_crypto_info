import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Coins from '@/components/Coins'
import AboutAuthor from '@/components/AboutAuthor'
import CoinDetail from '@/components/CoinDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/aboutAuthor',
      name: 'AboutAuthor',
      component: AboutAuthor
    },
    {
      path: '/coinDetail',
      name: 'CoinDetail',
      component: CoinDetail,
      props: (route) => ({ 
        id: route.query.id, 
        priceUSD: route.query.usd, 
        priceBTC: route.query.btc, 
        marketcap: route.query.marketcap, 
        volume24h: route.query.volume24h, 
        availablesupply: route.query.availablesupply, 
        totalsupply: route.query.totalsupply,
        name: route.query.name,
        maxsupply: route.query.maxsupply
      })
    }
  ]
})

