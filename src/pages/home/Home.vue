<template>
  <div class="home">
    <Header/>
    <Swiper/>
  </div>
</template>

<script>
import Header from "./components/Header"
import Swiper from "./components/Swiper"

export default {
  name: 'home',
  components: {
     Header,
     Swiper
  }
}
</script>


