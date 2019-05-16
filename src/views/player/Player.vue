<template>
  <div class="wrap" v-show="playlist.length>0">
    <div class="normal-player" v-show="fullscreen">
      <div class="header">
        <span class="icon-pulldown iconfont" @click.stop="handleDownClick"></span>
        <h2 class="song">{{currentSong.name}}</h2>
        <p class="singer">{{currentSong.singer}}</p>
      </div>
      <div class="banner">
        <div class="cover" v-show="false">
          <img :src="currentSong.image" alt="图片">
        </div>
        <m-lyric :list="currentLyric.lines" :currentLine="currentLine"></m-lyric>
      </div>
      <div class="control">
        <audio
          :src="songUrl"
          ref="audio"
          @timeupdate="updateTime"
          @ended="handleNext"
          @play="handleReady"
        ></audio>
        <div class="progress-wrap">
          <span class="time">{{formatTime(currentTime)}}</span>
          <m-progress
            :percent="percent"
            @percentChange="percentChange"
          ></m-progress>
          <span class="time">{{formatTime(totalTime)}}</span>
        </div>
        <div class="control-btn">
          <span class="iconfont" :class="iconMode" @click="toggleMode"></span>
          <span class="iconfont icon-prev" @click="handlePrev"></span>
          <span class="iconfont" :class="iconPlay" @click="togglePlay"></span>
          <span class="iconfont icon-next" @click="handleNext"></span>
          <span class="iconfont icon-like"></span>
        </div>
      </div>
    </div>
    <div class="mini-player" v-show="!fullscreen" @click="handleUpClick">
      <div class="left">
        <img :src="currentSong.image" alt="图片">
      </div>
      <div class="right">
        <span class="iconfont" :class="iconPlay" @click.stop="togglePlay"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Lyric from 'lyric-parser'

import { mapGetters, mapMutations, mapActions } from 'vuex'
import { getSongUrl, getLyric } from './../../api/index'
import { playMode } from './../../common/js/config'
import { ERR_OK } from './../../api/config'
import { shuffle } from './../../common/js/util'

import MProgress from './../../components/Progress'
import MLyric from './../../components/Lyric'

export default {
  name: 'player',
  components: {
    MProgress,
    MLyric
  },
  data () {
    return {
      songUrl: '',
      currentTime: 0,
      totalTime: 0,
      songReady: false,
      currentLyric: null,
      currentLine: 0
    }
  },
  computed: {
    ...mapGetters([
      'fullscreen',
      'playlist',
      'sequenceList',
      'currentSong',
      'playing',
      'currentIndex',
      'mode'
    ]),
    iconPlay () {
      return this.playing ? 'icon-pause' : 'icon-play'
    },
    iconMode () {
      return this.mode === playMode.sequence ? 'icon-cycle' : (this.mode === playMode.loop ? 'icon-single' : 'icon-shuffle')
    },
    percent () {
      return this.currentTime / this.totalTime
    }
  },
  watch: {
    currentSong (newSong, oldSong) {
      if (!newSong.id) {
        return
      }
      if (newSong.id === oldSong.id) {
        return
      }
      if (!this.currentSong.url) {
        getSongUrl(this.currentSong.id).then(res => {
          if (!this.currentSong.id) {
            this.$router.back()
            return
          }
          if (res.code === ERR_OK) {
            this.songUrl = res.data[0].url
            if (this.playing) {
              this.$nextTick(function () {
                this.$refs.audio.play()
              })
            }
          }
        })
      }
      if (this.currentLyric) {
        this.currentLyric.stop()
      }
      if (!this.currentSong.lyric) {
        getLyric(this.currentSong.id).then(res => {
          if (res.code === ERR_OK) {
            this.currentLyric = new Lyric(res.lrc.lyric, this.handleLyricChange)
            this.currentLyric.play()
          } else {
            this.currentLyric = 'no lyric'
          }
        })
      }
    },
    playing () {
      this.$nextTick(function () {
        this.playing ? this.$refs.audio.play() : this.$refs.audio.pause()
      })
    }
  },
  methods: {
    handleDownClick () {
      this.setFullscreen(false)
    },
    handleUpClick () {
      this.setFullscreen(true)
    },
    ...mapMutations({
      setFullscreen: 'SET_FULLSCREEN',
      setPlaying: 'SET_PLAYING',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setMode: 'SET_MODE',
      setPlaylist: 'SET_PLAYLIST'
    }),
    ...mapActions([
      'operatePlay'
    ]),
    togglePlay () {
      this.setPlaying(!this.playing)
      if (this.currentLyric) {
        this.currentLyric.togglePlay()
      }
    },
    handlePrev () {
      let index = this.currentIndex - 1
      if (index < 0) {
        index = this.playlist.length - 1
      }
      this.operatePlay(index)
    },
    handleNext () {
      let index = this.currentIndex + 1
      if (index === this.playlist.length) {
        index = 0
      }
      this.operatePlay(index)
    },
    updateTime (e) {
      this.currentTime = e.target.currentTime
      this.totalTime = e.target.duration
    },
    percentChange (percent) {
      this.$refs.audio.currentTime = this.totalTime * percent
      this.currentLyric.seek(this.totalTime * percent * 1000)
    },
    handleReady () {
      this.songReady = true
    },
    formatTime (time) {
      if (time) {
        let minute = Math.floor(time / 60)
        let second = this.padNum(Math.floor(time % 60))
        return minute + ':' + second
      } else {
        return '--:--'
      }
    },
    padNum (num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    toggleMode () {
      let currentMode = (this.mode + 1) % 3
      this.setMode(currentMode)
      const currentId = this.currentSong.id
      let list = this.sequenceList.slice()
      this.$refs.audio.loop = currentMode === playMode.loop
      if (currentMode === playMode.random) {
        list = shuffle(list)
      }
      let index = list.findIndex(function (item) {
        return item.id === currentId
      })
      this.setPlaylist(list)
      this.setCurrentIndex(index)
    },
    handleLyricChange ({ lineNum, txt }) {
      this.currentLine = lineNum
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  z-index: 10
  .normal-player
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: skyblue
    overflow: hidden
    z-index: 10
    .header
      position: relative
      height: 1.5rem
      background: red
      .icon-pulldown
        position: absolute
        top: .2rem
        left: .2rem
        font-size: .6rem
      .song
        text-align: center
        line-height: .6rem
        font-size: .36rem
      .singer
        text-align: center
        line-height: .6rem
        font-size: .3rem
    .banner
      position: absolute
      top: 1.5rem
      bottom: 3rem
      left: 0
      right: 0
      overflow: hidden
      .cover
        margin: 6% auto
        width: 60%
        height: 0
        padding-bottom: 60%
        border: .6rem solid #666
        overflow: hidden
        border-radius: 50%
        img
          width: 100%
    .control
      position: absolute
      bottom: 0
      width: 100%
      height: 3rem
      background: #eee
      audio
        display: none
      .progress-wrap
        display: flex
        justify-content: center
        align-items: center
        height: 1rem
        width: 100%
        background: #666
        .time
          flex: 0 0 1.2rem
          text-align: center
          color: #fff
      .control-btn
        display: flex
        height: 2rem
        justify-content: space-around
        align-items: center
        .iconfont
          font-size: .7rem
        .icon-play
          font-size: 1rem
        .icon-pause
          font-size: 1rem
  .mini-player
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 1.8rem
    background: red
    overflow: hidden
    z-index: 10
    .left
      float: left
      padding: .2rem
      img
        width: 1.4rem
    .right
      float: right
      line-height: 1.8rem
      .iconfont
        padding-right: .4rem
        line-height: 1.8rem
        font-size: 1rem
</style>
