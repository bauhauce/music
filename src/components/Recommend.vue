<template>
  <div>
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of sliderList" :key="item.id">
          <img :src="item.picUrl" alt="图片">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <dl class="content">
      <dt class="title">热门歌单推荐</dt>
      <dd class="item" v-for="item of songList" :key="item.dissid">
        <div class="item-left">
          <img :src="item.imgurl" alt="图片">
        </div>
        <div class="item-right">
          <h3 class="item-title">{{item.creator.name}}</h3>
          <p class="item-desc">{{item.dissname}}</p>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'recommend',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      sliderList: [],
      songList: []
    }
  },
  mounted () {
    this.getSlider()
  },
  methods: {
    getSlider () {
      axios.get('https://www.easy-mock.com/mock/5cd273467c940631de15db31/music/recommend')
        .then(this.getSliderSucc)
    },
    getSliderSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        const data = res.data
        this.sliderList = data.slider
        this.songList = data.songList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    width: 100%
    height: 0
    padding-bottom: 40%
    overflow: hidden
    background: #ccc
    img
      width: 100%
  .content
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
