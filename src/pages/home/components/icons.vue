<template>
    <div class="icons">
        <swiper :options="swiperOptions" >
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="value of page" :key="value.id">
                    <div class="icon-img">
                        <img class="icon-img-content"
                             :src=value.imgUrl alt="">
                    </div>
                    <p class="icon-desc">{{value.desc}}</p>
                </div>

            </swiper-slide>
        </swiper>

    </div>
</template>

<script>
    export default {
        name: "icons",
        props:{
            iconList:Array
        },
        data() {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                },
            }
        },
        computed:{
            pages(){
                const pages=[]
                this.iconList.forEach((value,index)=>{
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
