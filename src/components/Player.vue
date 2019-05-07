<template>
  <div>
    <div class="wrap">
      <div class="header">
        <span class="icon-down iconfont">&#xe67e;</span>
        <h2 class="song">1111</h2>
        <p class="singer">22222</p>
      </div>
      <div class="banner"></div>
      <div class="control">
        <div class="progress"></div>
        <div class="control-btn">
          <span class="iconfont">&#xe671;</span>
          <span class="iconfont">&#xe670;</span>
          <span class="iconfont icon-play">&#xe66a;</span>
          <span class="iconfont">&#xe674;</span>
          <span class="iconfont icon-favorite">&#xe614;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player'
}
</script>

<style lang="stylus" scoped>
  .wrap
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: skyblue
    .header
      position: relative
      .icon-down
        position: absolute
        top: .2rem
        left: .2rem
        font-size: .45rem
      .song
        text-align: center
        line-height: .6rem
        font-size: .36rem
      .singer
        text-align: center
        line-height: .6rem
        font-size: .3rem
    .banner
      width: 100%
    .control
      position: absolute
      bottom: 0
      width: 100%
      height: 3rem
      background: #eee
      .progress
        height: 1rem
        background: #666
      .control-btn
        display: flex
        justify-content: space-around
        align-items: center
        padding: .2rem 0
        .iconfont
          font-size: .7rem
        .icon-play
          font-size: 1rem
</style>
