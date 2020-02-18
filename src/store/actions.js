export default {
  addToCart(context, payload) {
    // 1.找到之前的数组是否有现在添加进来的那个商品
    let oldProduct = context.state.shopCartList.find(item => item.iid === payload.iid)
    // 2.如果存在就给他的count+1
    if(oldProduct) {
      // oldProduct.count += 1
      context.commit('addCounter', oldProduct)
    }else {
      payload.count += 1
      // context.shopCartList.push(payload)
      context.commit('addCart', payload)
    }
  }
}