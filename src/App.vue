<template>
  <div id="app">
    <m-header></m-header>
    <m-nav></m-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from './views/top/Header'
import MNav from './views/top/Nav'
import Player from './views/player/Player'

export default {
  components: {
    MHeader,
    MNav,
    Player
  }
}
</script>

<style lang="stylus">
#app
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
</style>
