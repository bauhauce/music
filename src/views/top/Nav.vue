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
  name: 'mnav'
}
</script>

<style lang="stylus" scoped>
  .nav
    display: flex
    justify-content: space-around
    align-items: center
    .nav-item
      padding-bottom: .12rem
      line-height: .6rem
      font-size: .32rem
      color: #fff
      &.router-link-active
        font-weight: bold
        border-bottom: 2px solid #fff
</style>
