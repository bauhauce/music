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
      name: 'recommend',
      component: () => import(/* webpackChunkName: "recommend" */ './views/recommend/Recommend'),
      children: [
        {
          path: ':id',
          component: () => import(/* webpackChunkName: "detail" */ './views/detail/Detail')
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import(/* webpackChunkName: "singer" */ './views/singer/Singer'),
      children: [
        {
          path: ':id',
          component: () => import(/* webpackChunkName: "singerDetail" */ './views/singerDetail/SingerDetail')
        }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import(/* webpackChunkName: "rank" */ './views/rank/Rank'),
      children: [
        {
          path: ':id',
          component: () => import(/* webpackChunkName: "rankDetail" */ './views/rankDetail/RankDetail')
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/search/Search')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ './views/detail/Detail')
    }
  ]
})
