<template>
  <div class="home">
    <Header/>
    <Swiper/>
    <icons/>
  </div>
</template>

<script>
import Header from "./components/Header"
import Swiper from "./components/Swiper"
import icons  from "./components/icons"

export default {
  name: 'home',
  components: {
     Header,
     Swiper,
     icons
  }
}
</script>


