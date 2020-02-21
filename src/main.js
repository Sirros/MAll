import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import toast from 'components/common/toast'

// require styles
// import 'swiper/dist/css/swiper.css'
import 'assets/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

// 使用自己创建的插件toast，使用之后会在 toast/index.js 里面进行install方法
Vue.use(toast)

Vue.config.productionTip = false
// new实例作为事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
