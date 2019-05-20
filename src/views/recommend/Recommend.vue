<template>
  <div>
    <div class="wrap">
      <div class="banner">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item of sliderList" :key="item.bannerID">
            <img :src="item.imageUrl" alt="图片">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="music-list">
        <h3>推荐歌单</h3>
        <ul>
          <li class="list-item" v-for="list of recommendList" :key="list.id" @click="handleClick(list)">
            <div class="cover">
              <img :src="list.coverImgUrl" alt="图片">
              <div class="count"><i class="iconfont icon-listen"></i><span>{{list.playCount}}</span></div>
            </div>
            <p class="desc">{{list.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getBanner, getRecommend } from './../../api/index.js'
import { ERR_OK } from './../../api/config.js'

export default {
  name: 'recommend',
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        loop: true,
        initialSlide: 1,
        pagination: '.swiper-pagination'
      },
      sliderList: [],
      recommendList: []
    }
  },
  mounted () {
    this._getBanner()
    this._getRecommend()
  },
  methods: {
    _getBanner () {
      getBanner().then(res => {
        if (res.code === ERR_OK) {
          this.sliderList = res.banners
          console.log(this.sliderList)
        }
      })
    },
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommendList = res.playlists
        }
      })
    },
    handleClick (item) {
      this.$router.push({
        path: `/recommend/${item.id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  // position: absolute
  // top: 1.52rem
  // right: 0
  // bottom: 0
  // left: 0
  // overflow: auto
  position: absolute
  top: 1.6rem
  bottom: 0
  left: 0
  right: 0
  overflow: auto
  padding: .4rem 0
  width: 100%
  .banner
    width: 100%
    height: 0
    padding-bottom: 36%
    background: #ccc
    img
      width: 100%
  .music-list
    h3
      margin: .1rem 0
      padding-left: .2rem
      line-height: .66rem
      font-size: .36rem
      color: #fff
      border-left: .05rem solid #fff
    ul
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      .list-item
        width: 32%
        margin-bottom: .2rem
        .cover
          position: relative
          width: 100%
          height: 0
          padding-bottom: 100%
          img
            width: 100%
          .count
            position: absolute
            top: .12rem
            right: .12rem
            i
              font-size: .2rem
              color: #fff
            span
              font-size: .2rem
              padding-left: .1rem
              color: #fff
        .desc
          padding: .1rem
          line-height: .3rem
          font-size: .25rem
</style>
