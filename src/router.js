import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: () => import(/* webpackChunkName: "recommend" */ './components/Recommend')
    },
    {
      path: '/singer',
      name: 'Singer',
      component: () => import(/* webpackChunkName: "singer" */ './components/Singer')
    },
    {
      path: '/rank',
      name: 'Rank',
      component: () => import(/* webpackChunkName: "rank" */ './components/Rank')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import(/* webpackChunkName: "search" */ './components/Search')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import(/* webpackChunkName: "detail" */ './components/Detail')
    },
    {
      path: '/player',
      name: 'Player',
      component: () => import(/* webpackChunkName: "player" */ './components/Player')
    }
  ]
})
