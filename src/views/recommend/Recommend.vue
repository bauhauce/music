<template>
  <div>
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of sliderList" :key="item.bannerID">
          <img :src="item.pic" alt="图片">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <dl class="content">
      <dt class="title">热门歌单推荐</dt>
      <dd class="item"
        v-for="item of recommendList"
        :key="item.id"
        @click="handleClick(item)"
        :imgUrl="item.coverImgUrl"
        :title="222"
      >
        <div class="item-left">
          <img :src="item.coverImgUrl" alt="图片">
        </div>
        <div class="item-right">
          <h3 class="item-title">{{item.creator.nickname}}</h3>
          <p class="item-desc">{{item.name}}</p>
        </div>
      </dd>
    </dl>
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
  .banner
    width: 100%
    height: 0
    padding-bottom: 38%
    overflow: hidden
    background: #ccc
    img
      width: 100%
  .content
    height: 10rem
    overflow: auto
    .title
      padding: .3rem 0
      text-align: center
      font-size: .3rem
      color: #ccc
    .item
      padding-left: .2rem
      padding-bottom: .2rem
      display: flex
      .item-left
        width: 1.2rem
        height: 1.2rem
        background: #ccc
        img
          width: 100%
      .item-right
        flex: 1
        padding-left: .2rem
        // background: #ddd
        .item-title
          padding: .12rem 0
          font-size: .3rem
          color: #eee
        .item-desc
          padding: .12rem 0
          font-size: .3rem
          color: #666
</style>
