<template>
  <div>
    <div class="wrap">
      <div class="cover" :style="{backgroundImage: `url(${coverImg})`}">
        <span class="icon iconfont icon-back" @click="handleBack"></span>
        <h2 class="title">{{title}}</h2>
        <div class="btn-wrap">
          <button class="btn"><span class="iconfont icon-shuffle"></span>随机播放全部</button>
        </div>
      </div>
      <ul class="content">
        <li class="item" v-for="(item, index) of songList" :key="item.id" @click="handleSelect(item, index)">
          <h3 class="song-name">{{item.name}}</h3>
          <p class="song-album">{{item.singer}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSingerDetail } from 'api/index'
import { createList } from 'common/js/song'
import { ERR_OK } from 'api/config'
import { mapActions } from 'vuex'

export default {
  name: 'singerDetail',
  data () {
    return {
      title: '',
      coverImg: '',
      songList: []
    }
  },
  mounted () {
    this._getSingerDetail()
  },
  methods: {
    ...mapActions([
      'selectPlay'
    ]),
    handleBack () {
      this.$router.back()
    },
    _getSingerDetail () {
      getSingerDetail(this.$route.params.id).then(res => {
        if (res.code === ERR_OK) {
          this.title = res.artist.name
          this.coverImg = res.artist.picUrl
          this.songList = createList(res.hotSongs)
        }
      })
    },
    handleSelect (item, index) {
      this.selectPlay({
        list: this.songList,
        index: index
      })
    }
  }
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
    z-index: 10
    .cover
      position: relative
      width:100%
      height: 5rem
      background-size: cover
      background-position: center center
      .icon
        position: absolute
        padding: .2rem .4rem
        font-size: .36rem
        color: #fff
      .title
        text-align: center
        padding: .2rem
        font-size: .36rem
        color: #fff
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
      overflow: auto
      .item
        margin-bottom: .3rem
        .song-name
          line-height: .4rem
          color: #fff
        .song-album
          line-height: .4rem
          color: #eee
</style>
