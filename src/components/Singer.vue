<template>
  <div class="list">
    <dl class="list-left">
      <dt class="title">热门</dt>
      <dd class="item">
        <div class="item-img"></div>
        <div class="item-name">name</div>
      </dd>
    </dl>
    <ul class="list-right">
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Singer'
}
</script>

<style lang="stylus" scoped>
.list
  position: relative
  .list-left
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
        background: #eeeeee
      .item-name
        flex: 1
        padding-left: .3rem
        font-size: .36rem
.list-right
  position: absolute
  top: 1.5rem
  right: 0
  width: .45rem
  text-align: center
  line-height: .45rem
  background: #eee
</style>
