<template>
  <div ref="lyric" class="lyric-wrap">
    <ul>
      <li class="lyric-item"
      v-for="(item, index)  of list"
      :key="index"
      :class="{'current': index === currentLine}"
      ref="lyricLine"
    >{{item.txt}}</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'lyric',
  props: {
    list: {
      type: Array,
      default: function () {
        return [{ txt: '没有歌词' }]
      }
    },
    currentLine: Number
  },
  watch: {
    currentLine (newLine) {
      if (newLine > 5) {
        let ele = this.$refs.lyricLine[newLine - 5]
        this.scroll.scrollToElement(ele, 1000)
      } else {
        this.scroll.scrollTo(0, 0, 1000)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.lyric)
    })
  }
}
</script>

<style lang="stylus" scoped>
.lyric-wrap
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 10
  .lyric-item
    text-align: center
    line-height: .7rem
    font-size: .32rem
    background: #ccc
  .current
    color: #fff
</style>
