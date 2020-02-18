import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const store = new Vuex.Store({
  state: {
    shopCartList: []
  },
  mutations: {
    addToCart(state, payload) {
      // 找到之前的数组是否有现在添加进来的那个商品
      // let oldProduct = null
      // for(let item of state.shopCartList) {
      //   if(item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      // 1.找到之前的数组是否有现在添加进来的那个商品
      let oldProduct = state.shopCartList.find(item => item.iid === payload.iid)
      // 2.如果存在就给他的count+1
      if(oldProduct) {
        oldProduct.count += 1
      }else {
        payload.count += 1
        state.shopCartList.push(payload)
      }

    }
  }
})

// 3.导出
export default store

