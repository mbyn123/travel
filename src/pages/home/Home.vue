<template>
  <div class="home">
    <Header/>
    <Swiper/>
    <icons/>
    <recommmend/>
    <weekend/>
  </div>
</template>

<script>
import Header from "./components/Header"
import Swiper from "./components/Swiper"
import icons  from "./components/icons"
import recommmend from "./components/Recommend"
import weekend from "./components/Weekend"

export default {
  name: 'home',
  components: {
     Header,
     Swiper,
     icons,
     recommmend,
     weekend
  }
}
</script>


