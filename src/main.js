import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
// import 'swiper/dist/css/swiper.css'
import 'assets/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.config.productionTip = false
// new实例作为事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
