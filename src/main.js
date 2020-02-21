import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import lazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

import 'assets/css/swiper.css'

// 0.new实例作为事件总线
Vue.prototype.$bus = new Vue()

// 1.使用swiper插件
Vue.use(VueAwesomeSwiper, /* { default global options } */)

// 2.使用自己创建的插件toast，使用之后会在 toast/index.js 里面进行install方法
Vue.use(toast)

// 3.解决移动端300ms问题
fastClick.attach(document.body)

// 4.使用懒加载
// 使用懒加载，要把之前图片的src 改成v-lazy
// 如果要给懒加载的时候显示东西，可以在后面传一个对象，在loading中传一个图片
Vue.use(lazyLoad, {
  // loading: require('')
})


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
