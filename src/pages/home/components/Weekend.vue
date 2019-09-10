<template>
    <div>
        <div class="title">周末去哪儿</div>
        <div class="list">
            <div class="item border-bottom" v-for="value of recommendList" :key="value.id">
                <div ><img class="item-img" :src=value.img alt=""></div>
                <div class="item-msg">
                    <div class="item-title" >{{value.title}}</div>
                    <div class="item-content">{{value.content}}</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Weekend",
        data(){
            return{
                recommendList:[
                    {
                        title:'恩施大峡谷',
                        content:'有天坑，有地缝，有天生桥，有溶洞',
                        img:'https://imgs.qunarzz.com/sight/p0/1504/c6/c6906545521a7472.water.jpg_710x360_08ab6c86.jpg'

                    },
                    {
                        title:'黄鹤楼',
                        content:'孤帆远影碧空尽，唯见长江天际流',
                        img:'https://imgs.qunarzz.com/sight/p0/1503/55/5577ab22b2e205d0.water.jpg_710x360_34374e90.jpg'

                    },
                    {
                        title:'三峡大瀑布',
                        content:'天然瀑布群和峡谷丛林风光',
                        img:'https://imgs.qunarzz.com/sight/p0/1503/c8/c80513f41dd11f37.water.jpg_710x360_7b3063f2.jpg'

                    },
                    {
                        title:'武当山',
                        content:'一座历史悠久的仙山，武当拳的发源地',
                        img:'http://img1.qunarzz.com/sight/p0/1505/4e/4e65e5b3375f2cc5.water.jpg_710x360_695da041.jpg'

                    },
                    {
                        title:'清江画廊',
                        content:'无法抗拒的山清水秀，谁来谁说好',
                        img:'https://imgs.qunarzz.com/sight/p0/1412/be/b8c2ca7059dd49a44d701aba12dc87c9.water.jpg_710x360_b52290cc.jpg'

                    },
                    {
                        title:'恩施土司城',
                        content:'一座土家族土司文化标志性工程',
                        img:'https://imgs.qunarzz.com/sight/p0/1505/8b/8b551e63ab3aa234.water.jpg_710x360_d98116cb.jpg'

                    },


                ]
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

