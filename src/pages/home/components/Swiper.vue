<template>
    <div class="warpper">
        <swiper :options="swiperOption" v-if="swipershow" data-swiper-autoplay="5000">
            <swiper-slide v-for="value of swiperList" :key="value.id"><img :src=value.imgUrl alt="" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            swiperList: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    
                },
            }
        },
        computed: {
            swipershow() {
                return this.swiperList.length
            },

        },

    }
</script>

<style lang="stylus" scoped>
    .warpper >>> .swiper-pagination-bullet-active
        background: #fff

    .warpper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        background: #eee

    .swiper-img
        width: 100%
</style>
