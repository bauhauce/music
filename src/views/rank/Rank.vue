<template>
  <div>
    <ul class="wrapper">
      <li class="item" v-for="list of topList" :key="list.id" @click="handleClick(list.id)">
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
      topList: []
    }
  },
  mounted () {
    this._getTopList()
  },
  methods: {
    _getTopList () {
      getTopList().then(res => {
        if (res.code === ERR_OK) {
          this.topList = res.list
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
    righr: 0
    overflow: auto
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
