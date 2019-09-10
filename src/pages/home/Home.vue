<template>
  <div class="home">
    <Header :city="city"/>
    <Swiper :swiperList="swiperList"/>
    <icons :iconList="iconList"/>
    <recommend :recommendList="recommendList"/>
    <weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import Header from "./components/Header"
import Swiper from "./components/Swiper"
import icons  from "./components/icons"
import recommend from "./components/Recommend"
import weekend from "./components/Weekend";

import axios from "axios"
export default {
  name: 'home',
  data(){
    return{
      city:'',
      iconList:[],
      recommendList:[],
      swiperList:[],
      weekendList:[]
    }
  },
  components: {
     Header,
     Swiper,
     icons,
     recommend,
     weekend
  },
  methods:{
     getHomeInfo(){
       axios.get('/api/index.json').then(this.getHomeInfoSucc)
     },
    getHomeInfoSucc(res){
        res=res.data
      if(res.ret && res.data){
        this.city=res.data.city
        this.iconList=res.data.iconList
        this.recommendList=res.data.recommendList
        this.swiperList=res.data.swiperList
        this.weekendList=res.data.weekendList
      }

    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>


