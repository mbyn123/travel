<template>
    <div class="icons">
        <swiper :options="swiperOptions" >
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="value of page" :key="value.id">
                    <div class="icon-img">
                        <img class="icon-img-content"
                             :src=value.img alt="">
                    </div>
                    <p class="icon-desc">{{value.name}}</p>
                </div>

            </swiper-slide>
        </swiper>

    </div>
</template>

<script>
    export default {
        name: "icons",
        data() {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                },
                iconlist: [
                    {
                       img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                       name:'景点门票',
                    },
                     {
                        img:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                        name:'户部巷',
                    },
                    {
                        img:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        name:'武汉必游',
                    },
                    {
                        img:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                        name:'自然风光',
                    },
                    {
                        img:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                        name:'动植物园',
                    },
                    {
                        img:'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                        name:'三峡风光',
                    },
                    {
                        img:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                        name:'演出',
                    },
                    {
                        img:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                        name:'武汉欢乐谷',
                    },
                    {
                        img:'//s.qunarzz.com/homenode/images/touchheader/package.png',
                        name:'度假',
                    },

                ]
            }
        },
        computed:{
            pages(){
                const pages=[]
                this.iconlist.forEach((value,index)=>{
                    const page=Math.floor(index / 8)
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(value)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .icons
        width: 100%
        height: 0
        padding-bottom: 50%
        overflow: hidden
        .icon
            width: 25%
            height: 0
            padding-bottom: 25%
            position: relative
            float:left
            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: 0.1rem

                .icon-img-content
                    height: 100%
                    display: block
                    margin: 0 auto

        .icon-desc
            position: absolute
            bottom: 0
            left: 0
            right: 0
            height: .44rem
            text-align: center
            ellipsis()

</style>
