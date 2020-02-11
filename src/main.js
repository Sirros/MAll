import Vue from 'vue'
import App from './App.vue'
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
// import 'swiper/dist/css/swiper.css'
import 'assets/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)



Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
