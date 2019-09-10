import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)//解决移动端300毫秒延迟


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
