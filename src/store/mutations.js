export default {
  addCounter(state, payload) {
    payload.count += 1
  },
  addCart(state, payload) {
    state.shopCartList.push(payload)
  }
}