<template>
  <div>
    <div class="banner"></div>
    <dl class="content">
      <dt class="title">热门歌单推荐</dt>
      <dd class="item">
        <div class="item-left"></div>
        <div class="item-right">
          <h3 class="item-title">title</h3>
          <p class="item-desc">desc</p>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'recommend'
}
</script>

<style lang="stylus" scoped>
  .banner
    width: 100%
    height: 0
    padding-bottom: 40%
    overflow: hidden
    background: #ccc
  .content
    .title
      padding: .3rem 0
      text-align: center
      font-size: .3rem
      color: #333
    .item
      padding-left: .2rem
      padding-bottom: .2rem
      display: flex
      .item-left
        width: 1.2rem
        height: 1.2rem
        background: #ccc
      .item-right
        flex: 1
        padding-left: .2rem
        background: #ddd
        .item-title
          padding: .12rem 0
          font-size: .3rem
        .item-desc
          padding: .12rem 0
          font-size: .3rem
          color: #ccc
</style>
