import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)//解决移动端300毫秒延迟
Vue.use(VueAwesomeSwiper, /* { default global options } */)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
