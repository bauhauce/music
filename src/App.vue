<template>
  <div id="app">
    <m-header></m-header>
    <ul class="nav">
      <li><router-link class="nav-item" to="/recommend">推荐</router-link></li>
      <li><router-link class="nav-item" to="/singer">歌手</router-link></li>
      <li><router-link class="nav-item" to="/rank">排行</router-link></li>
      <li><router-link class="nav-item" to="/search">搜索</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/MHeader'

export default {
  components: {
    MHeader
  }
}
</script>

<style lang="stylus">
  .nav
    display: flex
    justify-content: space-around
    align-items: center
    .nav-item
      line-height: .6rem
      font-size: .3rem
      color: #fff
</style>
