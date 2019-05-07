<template>
  <div>
    <ul class="nav">
      <li><router-link class="nav-item" to="/recommend">推荐</router-link></li>
      <li><router-link class="nav-item" to="/singer">歌手</router-link></li>
      <li><router-link class="nav-item" to="/rank">排行</router-link></li>
      <li><router-link class="nav-item" to="/search">搜索</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="stylus" scoped>
  .nav
    display: flex
    justify-content: space-around
    align-items: center
    .nav-item
      line-height: .6rem
      font-size: .3rem
      color: #fff
</style>
