<template>
  <div>
    <div class="wrap">
      <div class="cover" :style="{backgroundImage: `url(${imgUrl})`}">
        <span class="icon iconfont icon-back" @click="handleBackClick"></span>
        <h2 class="title">{{title}}</h2>
        <div class="btn-wrap">
          <button class="btn"><span class="iconfont icon-shuffle"></span>随机播放全部</button>
        </div>
      </div>
      <ul class="content">
        <li class="item"
          v-for="(item, index) of songList"
          :key="item.id"
          @click="handleSelect(item, index)"
        >
          <h3 class="song-name">{{item.name}}</h3>
          <p class="song-album">{{item.singer}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getListDetail, getSongDetail } from './../../api/index'
import { ERR_OK } from './../../api/config'
import { mapActions } from 'vuex'
import { arrayToString, createList } from './../../common/js/song'

export default {
  name: 'detail',
  data () {
    return {
      title: '',
      imgUrl: '',
      songList: []
    }
  },
  mounted () {
    this._getListDetail()
  },
  methods: {
    handleBackClick () {
      this.$router.back()
    },
    _getListDetail () {
      getListDetail(this.$route.params.id).then(res => {
        if (!this.$route.params.id) {
          this.$router.push('/recommend')
          return
        }
        if (res.code === ERR_OK) {
          let idList = ''
          let songDetails = []
          this.title = res.playlist.name
          this.imgUrl = res.playlist.coverImgUrl
          idList = arrayToString(res.playlist.trackIds, 'id')
          getSongDetail(idList).then(res => {
            if (res.code === ERR_OK) {
              songDetails = res.songs
              this.songList = createList(songDetails)
            }
          })
        }
      })
    },
    ...mapActions([
      'selectPlay'
    ]),
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
