<template>
    <div>
        <div class="title">热销推荐</div>
        <div class="list">
            <div class="item border-bottom" v-for="value of recommendList" :key="value.id">
                <div ><img class="item-img" :src=value.img alt=""></div>
                <div class="item-msg">
                    <div class="item-title" >{{value.title}}</div>
                    <div class="item-content">{{value.content}}</div>
                    <div class="but">查看详情</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend.vue",
        data(){
            return{
                recommendList:[
                    {
                        title:'广州-日本 5天4晚跟团游',
                        content:'4人立减2000♥东京+大阪5天游♥小鹿公园+忍野八海♥和服体验♥温泉酒店',
                        img:'https://imgs.qunarzz.com/vs_ceph_vs_tts/e649422c-d334-4735-a796-b75d9def37a2.jpg_r_480x320x90_7efd3999.jpg'

                    },
                    {
                        title:'北京-上海 5天跟团游',
                        content:'畅玩迪士尼🔥快捷酒店♥双水乡+苏州园林♥乌镇+南浔♥游周庄！上海双飞6日游',
                        img:'https://imgs.qunarzz.com/vs_ceph_vs_tts/bce030be-8b2f-4cb4-ac05-33971821b1bd.jpg_r_390x260x90_5073bdd1.jpg'
                    },
                    {
                        title:'重庆-桂林 4天3晚跟团游',
                        content:'双节促销丨桂林龙脊4日游丨船游漓江+遇龙河竹筏+特色餐丨龙脊漓江银子岩象鼻山',
                        img:'https://imgs.qunarzz.com/vs_ceph_vs_tts/cf2cb7cb-6288-4675-9444-b5a917ab3e13.jpg_r_390x260x90_1e09dfcf.jpg'
                    },
                    {
                        title:'南昌-香港 5天4晚跟团游',
                        content:'国庆狂欢♕双飞港澳5天❖港珠澳大桥丨海洋公园☛夜游维港☛接机☛赠送迪士尼乐园',
                        img:'https://imgs.qunarzz.com/p/tts2/1811/50/6eceeef1f4343702.jpg_r_390x260x90_b99fab2d.jpg'
                    },
                    {
                        title:'成都-芬兰 10天7晚跟团游',
                        content:'探秘北极光芬兰一地10日+圣诞老人村+驯鹿庄园+岩石教堂+波尔沃古城',
                        img:'https://imgs.qunarzz.com/vs_ceph_vs_tts/c71de94f-8fc0-406d-b9d3-f291aa2e6a29.jpg_r_480x320x90_a6183f14.jpg'
                    },
                    {
                        title:'成都-新都桥 5天4晚跟团游',
                        content:'🔥绝不强消🔥稻城亚丁新都桥5日游/准四酒店/赠理塘鳕鱼150/成都三环接',
                        img:'https://imgs.qunarzz.com/vs_ceph_vs_tts/175e1e78-32df-4003-be9c-75e7ebc6d93b.jpg_r_480x320x90_23e9ef19.jpg'
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
     height:0.32rem
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
