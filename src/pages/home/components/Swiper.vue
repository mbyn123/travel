<template>
    <div class="warpper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="value of swiperList" :key="value.id"><img :src=value.img alt="" class="swiper-img"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop:true
                },
                swiperList: [
                    {
                        img: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin" +
                            "/admin/20196/8254351bdfba7389f5a4de4416b9d4f4.png_750x200_843e98ad.png"
                    },
                    {
                        img: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin" +
                            "/20199/dd7c1ed57e6315e738545578e60212e4.jpg_750x200_8f87eb30.jpg"
                    }
                ]
            }
        },
        // mounted() {
        //     // current swiper instance
        //     // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        //     console.log('this is current swiper instance object', this.swiper)
        //     this.swiper.slideTo(3, 1000, false)
        // }
    }
</script>

<style lang="stylus" scoped>
    .warpper >>> .swiper-pagination-bullet-active
        background: #fff

    /*.warpper*/
    /*  overflow:hidden*/
    /*  width:100%*/
    /*  height:0*/
    /*  padding-bottom:31.25%*/
    /*  background:#eee*/
    .swiper-img
        width: 100%
</style>
