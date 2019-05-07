<template>
  <div class="wrap">
    <div class="search-wrap">
      <span class="icon-search iconfont">&#xe60c;</span>
      <input type="text" class="search" placeholder="搜索歌曲、歌手">
      <span class="icon-close iconfont">&#xe67d;</span>
    </div>
    <div class="search-hot">
      <h2 class="hot-title">热门搜索</h2>
      <ul class="hot-list">
        <li class="hot-item">asdfasdf</li>
      </ul>
    </div>
    <ul class="search-content">
      <li class="content-item">
        <span class="icon">a</span>
        <span class="name">asdfad</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
  .wrap
    padding: 0 .4rem
    .search-wrap
      position: relative
      margin: .5rem 0
      line-height: .8rem
      border-radius: .06rem
      background: #eeeeee
      .icon-search
        position: absolute
        left: 0
        width: .5rem
        text-align: center
      .search
        width: 100%
        text-indent: .5rem
        border-radius: .06rem
        background: #eeeeee
      .icon-close
        position: absolute
        right: .1rem
    .search-hot
      .title
        margin: .4rem 0
      .hot-list
        width: 100%
        overflow: hidden
        .hot-item
          float: left
          margin-right: .4rem
          margin-bottom: .2rem
          padding: 0 .2rem
          line-height: .5rem
          border-radius: .06rem
          background: #eee
    .search-content
      position: absolute
      top: 3.2rem
      right: 0
      bottom: 0
      left: 0
      background: #eee
      z-index: 99
      .content-item
        padding:0 .4rem
        line-height: .66rem
        background: #ccc
        .icon
          padding: 0 .3rem

</style>
