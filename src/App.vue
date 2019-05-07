<template>
  <div id="app">
    <m-header></m-header>
    <m-nav></m-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/Header'
import MNav from './components/Nav'

export default {
  components: {
    MHeader,
    MNav
  }
}
</script>

<style lang="stylus">

</style>
