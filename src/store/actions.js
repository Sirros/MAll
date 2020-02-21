export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.找到之前的数组是否有现在添加进来的那个商品
      let oldProduct = context.state.shopCartList.find(item => item.iid === payload.iid)
      // 2.如果存在就给他的count+1
      if(oldProduct) {
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve('该商品已添加到购物车')
      }else {
        payload.count += 1
        // context.shopCartList.push(payload)
        context.commit('addCart', payload)
        resolve('新商品已添加到购物车')
      }
    })
  }
}