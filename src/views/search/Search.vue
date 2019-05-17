<template>
  <div class="wrap">
    <div class="search-wrap">
      <span class="icon-search iconfont"></span>
      <input
        type="text"
        class="search"
        placeholder="搜索歌曲、歌手"
        v-model="keyword"
        @change="handleChange"
      >
      <span class="icon-close iconfont" @click="clearInput"></span>
    </div>
    <div class="search-hot">
      <h2 class="hot-title">热门搜索</h2>
      <ul class="hot-list">
        <li class="hot-item"
          v-for="(item, index) of hots"
          :key="index"
          @click="handleSearch(item.first)"
        >{{item.first}}</li>
      </ul>
      <div class="search-history">
        <dl>
          <dt class="title">搜索历史 <span class="iconfont icon-clear" @click="handleClear"></span></dt>
          <dd class="item"
            v-for="(item, index) of searchHistory"
            :key="index"
            @click="handleSearch(item)"
          >
            {{item}}<span class="iconfont icon-close" @click.stop="handleDelete(index)"></span>
          </dd>
        </dl>
      </div>
    </div>
    <ul class="search-content" v-show="keyword">
      <li class="search-item"
        v-for="(item, index) of searchList"
        :key="item.id"
        @click.stop="handleSelect(item, index)"
      >
        <span class="iconfont icon-yinle"></span>
        <span class="name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSearchHot, getSearch } from 'api/index'
import { ERR_OK } from 'api/config'
import { createSearchList } from 'common/js/song'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'search',
  data () {
    return {
      hots: null,
      keyword: '',
      searchList: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this._getSearch(this.keyword)
      }, 20)
      if (!this.keyword.trim()) {
        this.searchList = []
      }
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  mounted () {
    getSearchHot().then(res => {
      if (res.code === ERR_OK) {
        this.hots = res.result.hots
      }
    })
  },
  methods: {
    ...mapMutations({
      setSearchHistory: 'SET_SEARCH_HISTORY',
      deleteSearchHistory: 'DELETE_SEARCH_HISTORY',
      clearSearchHistory: 'CLEAR_SEARCH_HISTORY'
    }),
    ...mapActions([
      'selectPlay'
    ]),
    clearInput () {
      this.keyword = ''
    },
    _getSearch (key) {
      if (!key.trim()) {
        return
      }
      getSearch(key).then(res => {
        if (res.code === ERR_OK) {
          let songs = res.result.songs
          this.searchList = createSearchList(songs)
        }
      })
    },
    handleSearch (name) {
      this.keyword = name
    },
    handleChange () {
      this.setSearchHistory(this.keyword)
      this.keyword = ''
    },
    handleDelete (index) {
      this.deleteSearchHistory(index)
    },
    handleClear () {
      this.clearSearchHistory()
    },
    handleSelect (item, index) {
      this.selectPlay({
        list: this.searchList,
        index: index
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
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
      .hot-title
        margin: .4rem 0
        color: #ccc
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
      .search-history
        width: 100%
        .title
          margin: .4rem 0
          color: #ccc
          .iconfont
            float: right
        .item
          line-height: .6rem
          margin-bottom: .1rem
          padding: 0 .2rem
          border-radius: .06rem
          background: #ccc
          .iconfont
            float: right
    .search-content
      position: absolute
      top: 3.2rem
      right: 0
      bottom: 0
      left: 0
      background: #eee
      z-index: 20
      .search-item
        padding:0 .3rem
        line-height: .66rem
        background: #eee
        border-bottom: .01rem solid #fff
        .iconfont
          margin-right: .2rem
        .name
          ellipsis()

</style>
