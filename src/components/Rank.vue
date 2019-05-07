<template>
  <div>
    <ul class="wrapper">
      <li class="item">
        <div class="item-icon"></div>
        <ul class="item-songlist">
          <li class="song"><span>1</span><span>safasdfasdfafs</span></li>
          <li class="song"><span>2</span><span>safasdfasdfafs</span></li>
          <li class="song"><span>3</span><span>safasdfasdfafs</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Rank'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    padding: .4rem 0
    width: 100%
    .item
      display: flex
      magin-bottom: .4rem
      padding: 0 .4rem
      .item-icon
        flex: 0 0 1.6rem
        width: 1.6rem
        height: 1.6rem
        background: #ddd
      .item-songlist
        flex: 1
        padding-left: .4rem
        background: #eee
        display: flex
        flex-direction: column
        justify-content: center
        overflow: hidden
        .song
          line-height: .45rem
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          color: #666
          span
            padding: 0 .05rem
</style>
