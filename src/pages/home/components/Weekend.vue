<template>
    <div>
        <div class="title">周末去哪儿</div>
        <div class="list">
            <div class="item border-bottom" v-for="value of weekendList" :key="value.id">
                <div ><img class="item-img" :src=value.imgUrl alt=""></div>
                <div class="item-msg">
                    <div class="item-title" >{{value.title}}</div>
                    <div class="item-content">{{value.desc}}</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Weekend",
        props:{
            weekendList:Array
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
        flex-direction column
    .item-img
        width:100%
        height:3rem
        padding :0.1rem
    .item-msg
        padding:0.1rem
        min-width:0
    .item-title
        font-size:.35rem
        font-weight:bold
        padding-left:.2rem
    .item-content
        font-size:.32rem
        height:0.32rem
        padding-top:.2rem
        margin-bottom .2rem
        overflow hidden
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        padding-left:.2rem
</style>

