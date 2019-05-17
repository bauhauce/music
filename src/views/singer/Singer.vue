<template>
  <div class="list">
    <dl class="list-left">
      <dt class="title">热门</dt>
      <dd class="item"
        v-for="item of singerList"
        :key="item.id"
        @click="handleClick(item.id)"
      >
        <div class="item-img">
          <img :src="item.picUrl" alt="图片 ">
        </div>
        <div class="item-name">{{item.name}}</div>
      </dd>
    </dl>
    <ul class="list-right">
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { getSinger } from 'api/index'
import { ERR_OK } from 'api/config'

export default {
  name: 'singer',
  data () {
    return {
      singerList: []
    }
  },
  mounted () {
    this._getSinger()
  },
  methods: {
    _getSinger () {
      getSinger().then(res => {
        if (res.code === ERR_OK) {
          this.singerList = res.list.artists
        }
      })
    },
    handleClick (id) {
      this.$router.push({ path: `/singer/${id}` })
    }
  }
}

</script>

<style lang="stylus" scoped>
.list
  .list-left
    position: absolute
    top: 1.6rem
    bottom: 0
    left: 0
    right: 0
    overflow: auto
    .title
      padding: .2rem .4rem
      background: #eee
    .item
      display: flex
      align-items: center
      padding-top: .4rem
      padding-left: .6rem
      .item-img
        width: 1rem
        height: 1rem
        border-radius: 50%
        overflow: hidden
        background: #eeeeee
        img
          height: 100%
      .item-name
        flex: 1
        padding-left: .3rem
        font-size: .36rem
        color: #eee
.list-right
  position: absolute
  top: 1.5rem
  right: 0
  width: .45rem
  text-align: center
  line-height: .45rem
  background: #eee
</style>
