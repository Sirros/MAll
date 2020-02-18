import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

// 1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const state = {
  shopCartList: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

// 3.导出
export default store

