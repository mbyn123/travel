<template>
  <div class="header">
    <div class="header-left"><div class="iconfont icon-icon_left"></div></div>
    <div class="header-input"><span class="iconfont icon-icon_search"></span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont icon-down"></span></div>
  </div>
</template>

<script>
export default {
name:'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.header
  display:flex
  line-height: .86rem
  background $bgColor
  color:#fff
  .header-left
   width:.64rem
   text-align center
  .header-input
   flex:1
   background:#fff
   height:.64rem
   line-height:.64rem
   margin-top:.12rem
   margin-left:.12rem
   border-radius:.1rem
   color:#ccc
  .header-right
   width:1.24rem
   text-align center
  .icon-icon_search
   margin:0 .1rem
</style>
