<template>
  <div>
    <div class="wrapper">
      <div class="netease">
        <h3>网易榜单</h3>
        <ul class="netease">
          <li class="item" v-for="list of neteaseList" :key="list.id" @click="handleClick(list.id)">
            <div class="item-icon">
              <img :src="list.coverImgUrl" alt="图片">
            </div>
            <ul class="item-songlist">
              <li class="song" v-for="(song, index) of list.tracks" :key="index">
                <span>{{index + 1}}</span><span>{{song.first + '-' + song.second}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="others">
        <h3>热门榜单</h3>
        <ul>
          <li class="item" v-for="list of otherList" :key="list.id" @click="handleClick(list.id)">
            <img :src="list.coverImgUrl" alt="图片">
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getTopList } from 'api/index'
import { ERR_OK } from 'api/config'

export default {
  name: 'rank',
  data () {
    return {
      topList: [],
      neteaseList: [],
      otherList: []
    }
  },
  mounted () {
    this._getTopList()
  },
  methods: {
    _getTopList () {
      getTopList().then(res => {
        if (res.code === ERR_OK) {
          const list = res.list
          this.neteaseList = list.filter(function (item) {
            return item.tracks.length > 0
          })
          this.otherList = list.filter(function (item) {
            return item.tracks.length === 0
          })
        }
      })
    },
    handleClick (id) {
      this.$router.push({
        path: `/rank/${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    position: absolute
    top: 1.6rem
    bottom: 0
    left: 0
    right: 0
    overflow: auto
    padding: .2rem 0
    width: 100%
    .netease
      h3
        margin-bottom: .2rem
        padding-left: .4rem
        line-height: .4rem
        font-size: .36rem
        color: #fff
      ul
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
    .others
      padding: 0 .4rem
      h3
        margin-bottom: .2rem
        line-height: .4rem
        font-size: .36rem
        color: #fff
      ul
        display: flex
        justify-content: space-around
        align-items: center
        flex-wrap: wrap
        .item
          margin-bottom: .2rem
          width: 23%
          height: 0
          padding-bottom: 23%
          background: skyblue
          img
            width: 100%
</style>
