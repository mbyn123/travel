<template>
    <div>
        <div class="title">热销推荐</div>
        <div class="list">
            <div class="item border-bottom" v-for="value of recommendList" :key="value.id">
                <div ><img class="item-img" :src=value.imgUrl alt=""></div>
                <div class="item-msg">
                    <div class="item-title" >{{value.title}}</div>
                    <div class="item-content">{{value.desc}}</div>
                    <div class="but">查看详情</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend.vue",
        props:{
            recommendList:Array
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="stylus" scoped>
  .title
    background :#3ed3f3
    padding :0.2rem
    font-weight:bold
    color:#fff
    border-radius .1rem
  .list
    display:flex
    flex-direction column
   .item
    display flex
    flex-direction row
    height:1.9rem
   .item-img
     width:1.7rem
     height:1.7rem
     padding :0.1rem
    .item-msg
     flex:1
     padding:0.1rem
     min-width:0
  .item-title
     font-size:.35rem
     font-weight:bold
   .item-content
     font-size:.32rem
     height:0.30rem
     padding-top:.2rem
     margin-bottom .2rem
     overflow hidden
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 1;
    .but
     font-size:.30rem
     display inline-block
     background #ff9300
     font-weight bold
     padding .1rem .2rem
     border-radius .1rem
     color #fff
</style>
