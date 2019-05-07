<template>
  <div>
    <div class="wrap">
      <div class="cover">
        <span class="icon iconfont iconfont-back">&#xe624;</span>
        <h2 class="title">title</h2>
        <div class="btn-wrap">
          <button class="btn"><span class="iconfont iconfont-back">&#xe624;</span>随机播放全部</button>
        </div>
      </div>
      <ul class="content">
        <li class="item">
          <h3 class="song-name">asdfs</h3>
          <p class="song-album">asfasf</p>
        </li>
        <li class="item">
          <h3 class="song-name">asdfs</h3>
          <p class="song-album">asfasf</p>
        </li>
        <li class="item">
          <h3 class="song-name">asdfs</h3>
          <p class="song-album">asfasf</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail'
}
</script>

<style lang="stylus" scoped>
  .wrap
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #eee
    .cover
      position: relative
      width:100%
      height: 5rem
      background: #ccc
      .icon
        position: absolute
        padding: .2rem .4rem
        font-size: .36rem
      .title
        text-align: center
        padding: .2rem
        font-size: .36rem
      .btn-wrap
        position: absolute
        bottom: .4rem
        width: 100%
        text-align: center
        .btn
          padding: .12rem .3rem
          border: .02rem solid #999
          border-radius: .16rem
    .content
      position: absolute
      top: 5rem
      right: 0
      bottom: 0
      left: 0
      padding: .4rem
      background: #999
      .item
        margin-bottom: .3rem
        .song-name
          line-height: .4rem
          color: #fff
        .song-album
          line-height: .4rem
          color: #eee
</style>
