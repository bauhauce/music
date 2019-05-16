<template>
  <div>
    <ul class="wrapper">
      <li class="item" v-for="list of topList" :key="list.id">
        <div class="item-icon">
          <img :src="list.picUrl" alt="图片">
        </div>
        <ul class="item-songlist">
          <li class="song" v-for="(song, index) of list.songList" :key="index"><span>{{index + 1}}</span><span>{{song.singername + '-' + song.songname}}</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'rank',
  data () {
    return {
      topList: []
    }
  },
  mounted () {
    this.getToplist()
  },
  methods: {
    getToplist () {
      axios.get('https://www.easy-mock.com/mock/5cd273467c940631de15db31/music/rank').then(this.getToplistSucc)
    },
    getToplistSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        const data = res.data
        this.topList = data.topList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    padding: .4rem 0
    width: 100%
    .item
      display: flex
      margin-bottom: .4rem
      padding: 0 .4rem
      .item-icon
        flex: 0 0 1.6rem
        width: 1.6rem
        height: 1.6rem
        background: #ddd
        img
          width: 100%
      .item-songlist
        flex: 1
        padding-left: .4rem
        display: flex
        flex-direction: column
        justify-content: center
        overflow: hidden
        .song
          line-height: .45rem
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          color: #999
          span
            padding: 0 .05rem
</style>
